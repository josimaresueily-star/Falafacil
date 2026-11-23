// Web Speech API: Síntese de Voz (TTS) + Reconhecimento de Fala (Shadowing)
window.AppSpeech = {
  speak(text, options = {}) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const state = window.AppStorage.load();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = options.lang || state.accent || 'en-US';
    utter.rate = options.rate || state.rate || 0.95;

    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find((v) => v.lang.startsWith(utter.lang));
    if (preferred) utter.voice = preferred;

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
      onError('Não foi possível captar sua voz (' + event.error + '). Tente novamente.');
    };
    rec.start();
    return rec;
  },

  // Calcula similaridade simples entre o que o aluno falou e a frase alvo
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
