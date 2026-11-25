// Web Speech API: Síntese de Voz (Masculina/Feminina) + Reconhecimento de Fala
(function () {
  let cachedVoices = [];

  function loadVoices() {
    if ('speechSynthesis' in window) {
      cachedVoices = window.speechSynthesis.getVoices() || [];
    }
  }

  loadVoices();
  if ('speechSynthesis' in window && typeof window.speechSynthesis.onvoiceschanged !== 'undefined') {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }

  const FEMALE_HINTS = [
    'female', 'samantha', 'victoria', 'karen', 'moira', 'tessa', 'fiona',
    'zira', 'jenny', 'aria', 'sara', 'hazel', 'susan', 'libby', 'sonia',
    'kate', 'serena', 'google us english', 'google uk english female'
  ];

  const MALE_HINTS = [
    'male', 'daniel', 'alex', 'fred', 'david', 'mark', 'guy', 'george',
    'ryan', 'arthur', 'oliver', 'aaron', 'rishi', 'google uk english male'
  ];

  function pickVoice(lang, gender) {
    if (!cachedVoices.length) loadVoices();
    const langPrefix = (lang || 'en-US').toLowerCase();
    const matchingLang = cachedVoices.filter((v) => v.lang.toLowerCase().startsWith(langPrefix));
    const pool = matchingLang.length
      ? matchingLang
      : cachedVoices.filter((v) => v.lang.toLowerCase().startsWith('en'));

    if (!pool.length) return { voice: null, exactGender: false };

    const hints = gender === 'male' ? MALE_HINTS : FEMALE_HINTS;
    const oppositeHints = gender === 'male' ? FEMALE_HINTS : MALE_HINTS;

    // 1. Procura voz que corresponda explicitamente ao gênero escolhido
    const exact = pool.find((v) => {
      const name = v.name.toLowerCase();
      return hints.some((h) => name.includes(h)) && !oppositeHints.some((o) => name.includes(o) && o !== 'male');
    });
    if (exact) return { voice: exact, exactGender: true };

    // 2. Fallback: se houver mais de uma voz no idioma, pega a segunda para masculino
    if (gender === 'male' && pool.length > 1) {
      return { voice: pool[1], exactGender: false };
    }
    return { voice: pool[0], exactGender: false };
  }

  window.AppSpeech = {
    speak(text, options = {}) {
      if (!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      const state = window.AppStorage.load();
      const lang = options.lang || state.accent || 'en-US';
      const gender = options.gender || state.voiceGender || 'female';

      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = lang;
      utter.rate = options.rate || state.rate || 0.95;

      const { voice, exactGender } = pickVoice(lang, gender);
      if (voice) utter.voice = voice;

      // Se o aparelho não tiver voz masculina/feminina separada, ajusta o tom (pitch) suavemente
      if (!exactGender) {
        utter.pitch = gender === 'male' ? 0.82 : 1.1;
      } else {
        utter.pitch = 1.0;
      }

      if (options.onEnd) utter.onend = options.onEnd;
      window.speechSynthesis.speak(utter);
    },

    speakPt(text, options = {}) {
      if (!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'pt-BR';
      utter.rate = options.rate || 1.0;
      const voices = window.speechSynthesis.getVoices() || [];
      const ptVoice = voices.find((v) => v.lang.toLowerCase().startsWith('pt'));
      if (ptVoice) utter.voice = ptVoice;
      if (options.onEnd) utter.onend = options.onEnd;
      window.speechSynthesis.speak(utter);
    },

    stop() {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    },

    listen(lang, onResult, onError) {
      const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRec) {
        onError('Seu navegador não suporta reconhecimento de voz. Use Chrome ou Edge no celular/PC.');
        return null;
      }
      const rec = new SpeechRec();
      rec.lang = lang || 'en-US';
      rec.interimResults = false;
      rec.maxAlternatives = 1;

      rec.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        onResult(transcript);
      };
      rec.onerror = (event) => {
        onError('Não foi possível captar sua voz (' + event.error + '). Verifique sua internet ou microfone.');
      };
      rec.start();
      return rec;
    },

    similarity(target, spoken) {
      const clean = (s) =>
        s.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim().split(/\s+/).filter(Boolean);
      const tWords = clean(target);
      const sWords = clean(spoken);
      if (!tWords.length) return 0;
      let hits = 0;
      tWords.forEach((w) => {
        if (sWords.includes(w)) hits++;
      });
      return Math.round((hits / tWords.length) * 100);
    }
  };
})();
