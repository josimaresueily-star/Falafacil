// FalaFácil v9 — 3 Módulos, 7 Níveis, 35 Cenários, Palavras-Chave, Checkpoints, Mãos Livres, Backup e Sem Travamento
(function () {
  let state = window.AppStorage.load();
  let currentModule = 'iniciante';
  let currentLevel = 1;
  let loadedScenarios = [];
  let allPhrases = [];
  let shadowIndex = 0;
  let writeIndex = 0;
  let playlistRunning = false;
  let handsFreeRunning = false;
  let handsFreePaused = false;
  let handsFreeIdx = 0;
  let handsFreeList = [];
  let handsFreeDelay = 3000;
  let handsFreeTimer = null;
  let quickListenAnswer = null;
  let hideDialoguePt = false;

  // Estado da Lição ou Checkpoint Ativo
  let lesson = null;

  function rebuildLoadedData() {
    loadedScenarios = [];
    for (let lvl = 1; lvl <= window.TOTAL_LEVELS; lvl++) {
      const data = window.AppStorage.getLevelData(lvl);
      if (Array.isArray(data)) loadedScenarios.push(...data);
    }
    allPhrases = [];
    loadedScenarios.forEach((s) => {
      s.phrases.forEach((p) => {
        allPhrases.push({ ...p, scenarioId: s.id, level: s.level, category: s.category });
      });
    });
  }

  async function downloadLevel(levelNum, silent = false) {
    if (window.AppStorage.isLevelDownloaded(levelNum)) {
      rebuildLoadedData();
      return true;
    }
    try {
      const resp = await fetch(`/data/level-${levelNum}.json`);
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      const data = await resp.json();
      window.AppStorage.saveLevelData(levelNum, data);
      rebuildLoadedData();
      if (!silent) showToast(`✅ Nível ${levelNum} baixado para uso offline!`);
      renderTopBar();
      renderTrail();
      renderPhrasebook();
      if (allPhrases.length && !quickListenAnswer) {
        renderShadowCard();
        loadQuickListening();
        loadQuickWriting();
      }
      return true;
    } catch (err) {
      if (!silent) showToast(`⚠️ Sem conexão para baixar o Nível ${levelNum}.`);
      return false;
    }
  }

  async function init() {
    rebuildLoadedData();

    bindNavigation();
    bindModuleTabs();
    bindPractice();
    bindPhrasebook();
    bindSettings();
    bindLessonModal();

    // Baixa automaticamente apenas o Nível 1 na primeira vez
    if (!window.AppStorage.isLevelDownloaded(1)) {
      await downloadLevel(1, true);
    }

    renderTopBar();
    renderTrail();
    if (allPhrases.length) {
      renderShadowCard();
      loadQuickListening();
      loadQuickWriting();
    }
    renderErrorsList();
    renderPhrasebook();
    renderSettings();
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function isMicMuted() {
    return state.micMutedUntil && Date.now() < state.micMutedUntil;
  }

  function isLevelUnlocked(levelNum) {
    if (state.unlockAll || levelNum <= 1) return true;
    // Para desbloquear o nível N, precisa ter concluído o Checkpoint do nível N-1
    return Boolean(state.completedCheckpoints && state.completedCheckpoints[levelNum - 1]);
  }

  function getLevelOfScenario(scenarioId) {
    if (window.LEVEL_RANGES) {
      for (let lvl = 1; lvl <= window.TOTAL_LEVELS; lvl++) {
        const r = window.LEVEL_RANGES[String(lvl)];
        if (r && scenarioId >= r.firstId && scenarioId <= r.lastId) return lvl;
      }
    }
    return 1;
  }

  function isScenarioUnlocked(scenarioId) {
    if (state.unlockAll || scenarioId <= 1) return true;
    const lvl = getLevelOfScenario(scenarioId);
    if (!isLevelUnlocked(lvl)) return false;
    const range = window.LEVEL_RANGES[String(lvl)];
    if (range && scenarioId === range.firstId) return true;
    return Boolean(state.completedLessons[scenarioId - 1]);
  }

  function isCheckpointUnlocked(levelNum) {
    if (state.unlockAll) return true;
    const range = window.LEVEL_RANGES[String(levelNum)];
    if (!range) return false;
    return Boolean(state.completedLessons[range.lastId]);
  }

  function getPronunciationHints(enText) {
    if (!window.PRONUNCIATION_GUIDE || !enText) return '';
    const lower = enText.toLowerCase();
    const matches = [];
    window.PRONUNCIATION_GUIDE.forEach((g) => {
      const re = new RegExp('\\b' + g.word + '\\b', 'i');
      if (re.test(lower)) {
        matches.push(`<strong>${g.word}</strong> → <em>${g.read}</em> (${g.note})`);
      }
    });
    if (!matches.length) return '';
    return `<div class="pron-pill-box">🗣️ Como se lê: ${matches.join(' • ')}</div>`;
  }

  function showToast(msg) {
    const existing = document.querySelector('.lock-toast');
    if (existing) existing.remove();
    const el = document.createElement('div');
    el.className = 'lock-toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2600);
  }

  function normalizeText(str) {
    return (str || '')
      .toLowerCase()
      .replace(/[.,!?;:'"’`-]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function makeHint(en) {
    return en
      .split(' ')
      .map((w) => (w.length <= 2 ? w : w[0] + '_'.repeat(Math.min(w.length - 1, 5))))
      .join(' ');
  }

  function getDistractor(item) {
    if (item.distractor && item.distractor.trim()) return item.distractor;
    const candidates = allPhrases.filter((p) => p.pt !== item.pt);
    if (!candidates.length) return 'Outra opção';
    return candidates[Math.floor(Math.random() * candidates.length)].pt;
  }

  function getKeywordDistractor(kwItem, pool) {
    const others = pool.filter((k) => k.pt !== kwItem.pt);
    if (others.length) return others[Math.floor(Math.random() * others.length)].pt;
    return 'Outro significado';
  }

  function detectFalseFriend(enText) {
    if (!window.FALSE_FRIENDS) return null;
    const lower = (enText || '').toLowerCase();
    for (const ff of window.FALSE_FRIENDS) {
      const re = new RegExp('\\b' + ff.word + '\\b', 'i');
      if (re.test(lower)) return ff.warn;
    }
    return null;
  }

  function splitIntoChunks(sentence) {
    const words = sentence.trim().split(/\s+/);
    if (words.length <= 5) return words;
    const targetBlocks = words.length <= 8 ? 4 : 5;
    const chunks = [];
    const baseSize = Math.floor(words.length / targetBlocks);
    let rem = words.length % targetBlocks;
    let idx = 0;
    for (let i = 0; i < targetBlocks; i++) {
      const size = baseSize + (rem > 0 ? 1 : 0);
      rem--;
      chunks.push(words.slice(idx, idx + size).join(' '));
      idx += size;
    }
    return chunks;
  }

  function createFinalPracticeQueue(scenario) {
    const methods = isMicMuted()
      ? ['writing', 'blocks', 'listening']
      : ['shadowing', 'writing', 'blocks', 'listening'];
    const queue = [];
    const phrases = shuffle(scenario.phrases);

    phrases.forEach((phrase, idx) => {
      const method = methods[idx % methods.length];
      queue.push({ phrase, method, isReview: false, isRetry: false });
    });

    const matchCount = Math.max(1, Math.min(3, Math.floor(phrases.length / 4)));
    for (let m = 0; m < matchCount; m++) {
      const slice = shuffle(scenario.phrases).slice(0, Math.min(4, scenario.phrases.length));
      queue.push({ method: 'match', phrases: slice, isReview: false, isRetry: false });
    }

    if (phrases.length < 8) {
      shuffle(scenario.phrases).forEach((phrase) => {
        const prevEntry = queue.find((q) => q.phrase && q.phrase.en === phrase.en);
        const otherMethods = methods.filter((m) => !prevEntry || m !== prevEntry.method);
        const chosenMethod = otherMethods[Math.floor(Math.random() * otherMethods.length)];
        queue.push({ phrase, method: chosenMethod, isReview: false, isRetry: false });
      });
    }

    const completedIds = Object.keys(state.completedLessons)
      .map(Number)
      .filter((id) => id !== scenario.id);

    const prevScenarios = loadedScenarios.filter(
      (s) => s.id !== scenario.id && (completedIds.includes(s.id) || s.id < scenario.id)
    );

    if (prevScenarios.length > 0) {
      const reviewPool = [];
      prevScenarios.forEach((ps) => {
        ps.phrases.forEach((p) => reviewPool.push({ phrase: p, fromTitle: ps.title }));
      });
      shuffle(reviewPool)
        .slice(0, Math.min(3, reviewPool.length))
        .forEach((rev, i) => {
          queue.push({
            phrase: rev.phrase,
            method: methods[(i + 1) % methods.length],
            isReview: true,
            isRetry: false,
            reviewFrom: rev.fromTitle
          });
        });
    }

    return shuffle(queue);
  }

  /* ==================== TOP BAR & NAV ==================== */
  function renderTopBar() {
    const completedCount = Object.keys(state.completedLessons).length;
    const pct = Math.round((completedCount / window.TOTAL_SCENARIOS) * 100);
    document.getElementById('mastery-pct').textContent = pct + '%';
    document.getElementById('streak-count').textContent = state.streak;
    document.getElementById('hero-streak').textContent = state.streak;

    const goal = Number(state.dailyGoal) || 15;
    const mins = Math.min(state.todayMinutes, goal);
    document.getElementById('goal-label').textContent = `${state.todayMinutes} / ${goal} min`;
    document.getElementById('goal-fill').style.width = `${Math.round((mins / goal) * 100)}%`;
  }

  function stopAllAudioModes() {
    window.AppSpeech.stop();
    playlistRunning = false;
    handsFreeRunning = false;
    clearTimeout(handsFreeTimer);
    const playBtn = document.getElementById('btn-playlist');
    const hfBtn = document.getElementById('btn-handsfree');
    const hfBanner = document.getElementById('handsfree-banner');
    if (playBtn) playBtn.textContent = '▶ EN';
    if (hfBtn) hfBtn.textContent = '🎧 Mãos Livres';
    if (hfBanner) hfBanner.classList.add('hidden');
  }

  function bindNavigation() {
    document.querySelectorAll('.nav-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        stopAllAudioModes();
        const view = btn.dataset.view;
        document.querySelectorAll('.nav-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.view').forEach((v) => v.classList.remove('active'));
        document.getElementById('view-' + view).classList.add('active');
        if (view === 'practice') renderErrorsList();
        if (view === 'phrasebook') renderPhrasebook();
        if (view === 'settings') renderSettings();
      });
    });
  }

  /* ==================== TAB 1: MÓDULOS, NÍVEIS E TRILHA ==================== */
  function bindModuleTabs() {
    const qwBtn = document.getElementById('btn-quick-workout');
    if (qwBtn) {
      qwBtn.addEventListener('click', startQuickWorkout);
    }
    document.querySelectorAll('.module-pill').forEach((pill) => {
      pill.addEventListener('click', () => {
        const modId = pill.dataset.module;
        const mod = window.MODULES_META.find((m) => m.id === modId);
        if (!mod) return;
        currentModule = modId;
        if (!mod.levels.includes(currentLevel)) {
          currentLevel = mod.levels[0];
        }
        document.querySelectorAll('.module-pill').forEach((p) => p.classList.toggle('active', p.dataset.module === currentModule));
        renderTrail();
      });
    });
  }

  function renderLevelTabs() {
    const mod = window.MODULES_META.find((m) => m.id === currentModule) || window.MODULES_META[0];
    const container = document.getElementById('level-tabs');
    container.innerHTML = '';

    mod.levels.forEach((lvl) => {
      const unlocked = isLevelUnlocked(lvl);
      const btn = document.createElement('button');
      btn.className = 'level-pill' + (lvl === currentLevel ? ' active' : '') + (!unlocked ? ' locked' : '');
      btn.textContent = unlocked ? `Nível ${lvl}` : `🔒 Nível ${lvl}`;
      btn.addEventListener('click', () => {
        if (!unlocked) {
          showToast(`Conclua o 🏆 Checkpoint do Nível ${lvl - 1} para liberar o Nível ${lvl}!`);
          return;
        }
        currentLevel = lvl;
        renderTrail();
      });
      container.appendChild(btn);
    });
  }

  function renderTrail() {
    renderLevelTabs();
    document.getElementById('level-subtitle').textContent = window.LEVELS_META[currentLevel];
    const container = document.getElementById('trail-container');
    container.innerHTML = '';

    const offlineBar = document.getElementById('level-offline-bar');
    const levelUnlocked = isLevelUnlocked(currentLevel);

    if (!levelUnlocked) {
      offlineBar.innerHTML = '';
      const lockCard = document.createElement('div');
      lockCard.className = 'download-level-card';
      lockCard.style.borderColor = 'var(--border)';
      lockCard.innerHTML = `
        <div style="font-size:2.6rem;margin-bottom:10px;">🔒</div>
        <h3 style="margin-bottom:6px;">Nível ${currentLevel} Bloqueado</h3>
        <p class="muted">Conclua o <strong>🏆 Checkpoint do Nível ${currentLevel - 1}</strong> (com 75%+) para desbloquear este nível.</p>
      `;
      container.appendChild(lockCard);
      return;
    }

    const isDownloaded = window.AppStorage.isLevelDownloaded(currentLevel);
    if (!isDownloaded) {
      offlineBar.innerHTML = '';
      const dlCard = document.createElement('div');
      dlCard.className = 'download-level-card';
      dlCard.innerHTML = `
        <div style="font-size:2.6rem;margin-bottom:10px;">⬇️</div>
        <h3 style="margin-bottom:6px;">Nível ${currentLevel} pronto para baixar</h3>
        <p class="muted" style="margin-bottom:16px;">Baixe apenas este nível (~25 KB) para estudar todas as 5 lições offline.</p>
        <button class="btn-primary" id="btn-dl-current-level" style="width:100%;">⬇️ Baixar Nível ${currentLevel} Offline</button>
      `;
      dlCard.querySelector('#btn-dl-current-level').addEventListener('click', async (e) => {
        e.target.disabled = true;
        e.target.textContent = 'Baixando...';
        const ok = await downloadLevel(currentLevel, false);
        if (!ok) {
          e.target.disabled = false;
          e.target.textContent = `⬇️ Tentar baixar Nível ${currentLevel}`;
        }
      });
      container.appendChild(dlCard);
      return;
    }

    offlineBar.innerHTML = `<span class="offline-pill-ok">✅ Nível ${currentLevel} salvo offline</span>`;

    const items = loadedScenarios.filter((s) => s.level === currentLevel);
    items.forEach((s) => {
      const stars = state.completedLessons[s.id] || 0;
      const unlocked = isScenarioUnlocked(s.id);
      const card = document.createElement('div');
      card.className = 'lesson-circle-card' + (stars > 0 ? ' completed' : '') + (!unlocked ? ' locked' : '');

      let starsHtml = '';
      for (let i = 1; i <= 3; i++) {
        starsHtml += `<span class="${i <= stars ? '' : 'star-off'}">⭐</span>`;
      }

      card.innerHTML = `
        <span class="lesson-num">Cenário ${s.id} • ${s.phrases.length} frases</span>
        <div class="lesson-emoji">${unlocked ? s.emoji : '🔒'}</div>
        <h3 class="lesson-title">${s.title}</h3>
        <div class="stars-row">${starsHtml}</div>
        <div class="circle-actions">
          ${
            unlocked
              ? `<button class="btn-start-circle">${stars > 0 ? 'Repetir' : 'Começar'}</button>
                 ${stars > 0 || state.unlockAll ? '<button class="btn-quick-circle" title="Ir direto para a Prática Aleatória">⚡ Prática</button>' : ''}`
              : `<button class="btn-locked-circle">🔒 Bloqueado</button>`
          }
        </div>
      `;

      if (unlocked) {
        card.querySelector('.btn-start-circle').addEventListener('click', () => startLesson(s, 1));
        const quickBtn = card.querySelector('.btn-quick-circle');
        if (quickBtn) quickBtn.addEventListener('click', () => startLesson(s, 5));
      } else {
        card.querySelector('.btn-locked-circle').addEventListener('click', () => {
          showToast(`Conclua o Cenário ${s.id - 1} para desbloquear esta lição!`);
        });
      }
      container.appendChild(card);
    });

    // CARD DE CHECKPOINT AO FINAL DO NÍVEL
    const cpUnlocked = isCheckpointUnlocked(currentLevel);
    const cpScore = (state.completedCheckpoints && state.completedCheckpoints[currentLevel]) || 0;
    const medal = window.MEDALS_META[currentLevel];

    const cpCard = document.createElement('div');
    cpCard.className = 'checkpoint-card' + (cpScore >= 75 ? ' completed' : '') + (!cpUnlocked ? ' locked' : '');
    cpCard.innerHTML = `
      <div style="font-size:2.4rem;margin-bottom:6px;">${cpUnlocked ? medal.icon : '🔒'}</div>
      <span class="lesson-num">Desafio Final do Nível ${currentLevel}</span>
      <h3 style="margin:6px 0;">🏆 Checkpoint: ${medal.name}</h3>
      <p class="muted" style="margin-bottom:14px;">
        ${cpScore >= 75 ? `Concluído com ${cpScore}% de acerto!` : 'Acerte 75%+ no teste do nível para ganhar a medalha e liberar o próximo nível.'}
      </p>
      <button class="${cpUnlocked ? 'btn-start-circle' : 'btn-locked-circle'}" id="btn-start-cp">
        ${cpUnlocked ? (cpScore >= 75 ? 'Refazer Checkpoint' : 'Iniciar Checkpoint') : '🔒 Conclua as lições do nível'}
      </button>
    `;
    cpCard.querySelector('#btn-start-cp').addEventListener('click', () => {
      if (!cpUnlocked) {
        showToast(`Conclua todas as lições do Nível ${currentLevel} primeiro!`);
        return;
      }
      startCheckpoint(currentLevel);
    });
    container.appendChild(cpCard);
  }

  /* ==================== MOTOR DA LIÇÃO (5 ETAPAS) + CHECKPOINT ==================== */
  function updateLessonVoiceButton() {
    const btn = document.getElementById('btn-lesson-voice');
    if (btn) btn.textContent = state.voiceGender === 'male' ? '👨' : '👩';
  }

  function bindLessonModal() {
    document.getElementById('btn-close-lesson').addEventListener('click', () => {
      window.AppSpeech.stop();
      document.getElementById('lesson-modal').classList.add('hidden');
      lesson = null;
    });

    document.getElementById('btn-lesson-voice').addEventListener('click', () => {
      state.voiceGender = state.voiceGender === 'male' ? 'female' : 'male';
      window.AppStorage.save(state);
      updateLessonVoiceButton();
      const sel = document.getElementById('select-voice-gender');
      if (sel) sel.value = state.voiceGender;
      showToast(state.voiceGender === 'male' ? '👨 Voz masculina ativada' : '👩 Voz feminina ativada');
    });
  }

  function startLesson(scenario, initialStep = 1) {
    const keywordQueue = (scenario.keywords || []).map((k) => ({ ...k, isRetry: false }));
    const vocabQueue = scenario.phrases.map((p) => ({ ...p, isRetry: false }));
    const builderQueue = scenario.builder.map((b) => ({ ...b, isRetry: false }));
    const dialogueQueue = scenario.dialogue.map((d) => ({ ...d, isRetry: false }));
    const practiceQueue = createFinalPracticeQueue(scenario);

    let startStep = initialStep;
    if (startStep === 1 && !keywordQueue.length) startStep = 2;

    lesson = {
      mode: 'lesson',
      scenario,
      keywordQueue,
      vocabQueue,
      builderQueue,
      dialogueQueue,
      practiceQueue,
      step: startStep, // 1=Palavras-Chave, 2=Frases, 3=Moldes, 4=Diálogo, 5=Prática Final
      subIndex: 0,
      errors: 0,
      totalChecks: 0,
      builtChunks: [],
      chatHistory: []
    };
    updateLessonVoiceButton();
    document.getElementById('lesson-modal').classList.remove('hidden');
    renderLessonStep();
  }

  function startCheckpoint(levelNum) {
    const lvlScenarios = loadedScenarios.filter((s) => s.level === levelNum);
    const pool = [];
    lvlScenarios.forEach((s) => {
      s.phrases.forEach((p) => pool.push({ ...p, category: s.category, level: s.level }));
    });
    const selected = shuffle(pool).slice(0, Math.min(10, pool.length));
    const methods = ['listening', 'writing', 'blocks'];
    const queue = selected.map((phrase, idx) => ({
      phrase,
      method: methods[idx % methods.length],
      isReview: false,
      isRetry: false
    }));

    lesson = {
      mode: 'checkpoint',
      levelNum,
      practiceQueue: queue,
      subIndex: 0,
      errors: 0,
      totalChecks: 0,
      builtChunks: []
    };
    updateLessonVoiceButton();
    document.getElementById('lesson-modal').classList.remove('hidden');
    renderCheckpointStep();
  }


  function startQuickWorkout() {
    if (allPhrases.length < 3) {
      showToast('Baixe o Nível 1 primeiro para iniciar o Treino Rápido!');
      return;
    }
    const selected = shuffle(allPhrases).slice(0, Math.min(6, allPhrases.length));
    const methods = ['listening', 'writing', 'blocks'];
    const queue = selected.map((phrase, idx) => ({
      phrase,
      method: methods[idx % methods.length],
      isReview: false,
      isRetry: false
    }));

    lesson = {
      mode: 'quick',
      levelNum: currentLevel,
      practiceQueue: queue,
      subIndex: 0,
      errors: 0,
      totalChecks: 0,
      builtChunks: []
    };
    updateLessonVoiceButton();
    document.getElementById('lesson-modal').classList.remove('hidden');
    renderQuickWorkoutStep();
  }

  function renderQuickWorkoutStep() {
    const total = lesson.practiceQueue.length;
    const pct = Math.round((lesson.subIndex / total) * 100);
    document.getElementById('lesson-progress-fill').style.width = pct + '%';
    document.getElementById('lesson-step-label').textContent = `Treino ${lesson.subIndex + 1}/${total}`;

    const body = document.getElementById('lesson-body');
    const footer = document.getElementById('lesson-footer');
    body.innerHTML = '';
    footer.innerHTML = '';
    renderPracticeTask(body, footer, 'quick');
  }

  function finishQuickWorkout() {
    const accuracy = lesson.totalChecks > 0 ? Math.round((1 - lesson.errors / lesson.totalChecks) * 100) : 100;
    state = window.AppStorage.recordStudy(state, 3);
    document.getElementById('lesson-progress-fill').style.width = '100%';
    document.getElementById('lesson-step-label').textContent = 'Concluído!';

    const body = document.getElementById('lesson-body');
    const footer = document.getElementById('lesson-footer');
    body.innerHTML = `
      <div class="complete-screen">
        <div style="font-size:3.6rem;">⚡</div>
        <h2 style="margin-top:10px;">Treino Rápido Concluído!</h2>
        <p class="muted" style="margin-top:8px;">Precisão: <strong>${accuracy}%</strong> • +3 min na sua meta diária!</p>
        <p style="margin-top:10px;font-size:0.92rem;">🔥 Sua ofensiva está garantida hoje!</p>
      </div>
    `;
    footer.innerHTML = `<button class="btn-green" id="btn-qw-close">Voltar à Trilha</button>`;
    document.getElementById('btn-qw-close').addEventListener('click', () => {
      document.getElementById('lesson-modal').classList.add('hidden');
      lesson = null;
      renderTopBar();
      renderTrail();
      renderSettings();
    });
  }

  function renderCheckpointStep() {
    const total = lesson.practiceQueue.length;
    const pct = Math.round((lesson.subIndex / total) * 100);
    document.getElementById('lesson-progress-fill').style.width = pct + '%';
    document.getElementById('lesson-step-label').textContent = `Checkpoint ${lesson.subIndex + 1}/${total}`;

    const body = document.getElementById('lesson-body');
    const footer = document.getElementById('lesson-footer');
    body.innerHTML = '';
    footer.innerHTML = '';

    renderPracticeTask(body, footer, true);
  }

  function finishCheckpoint() {
    const accuracy = lesson.totalChecks > 0 ? Math.round((1 - lesson.errors / lesson.totalChecks) * 100) : 100;
    const passed = accuracy >= 75;
    const lvl = lesson.levelNum;
    const medal = window.MEDALS_META[lvl];

    if (passed) {
      if (!state.completedCheckpoints) state.completedCheckpoints = {};
      state.completedCheckpoints[lvl] = Math.max(state.completedCheckpoints[lvl] || 0, accuracy);
      state = window.AppStorage.recordStudy(state, 5);
      const nextLvl = lvl + 1;
      if (nextLvl <= window.TOTAL_LEVELS && !window.AppStorage.isLevelDownloaded(nextLvl)) {
        downloadLevel(nextLvl, false);
      }
    }

    document.getElementById('lesson-progress-fill').style.width = '100%';
    document.getElementById('lesson-step-label').textContent = passed ? 'Aprovado!' : 'Tente de novo';

    const body = document.getElementById('lesson-body');
    const footer = document.getElementById('lesson-footer');
    body.innerHTML = `
      <div class="complete-screen">
        <div style="font-size:3.8rem;">${passed ? medal.icon : '💪'}</div>
        <h2 style="margin-top:10px;">${passed ? `Medalha ${medal.name} Desbloqueada!` : 'Quase lá!'}</h2>
        <p class="muted" style="margin-top:8px;">Sua pontuação no Checkpoint do Nível ${lvl}: <strong>${accuracy}%</strong> (meta: 75%)</p>
        <p style="margin-top:10px;font-size:0.92rem;">
          ${passed ? (lvl < window.TOTAL_LEVELS ? `🎉 O Nível ${lvl + 1} foi desbloqueado!` : '🎉 Você concluiu todos os níveis disponíveis!') : 'Revise as frases do nível e tente o Checkpoint novamente.'}
        </p>
      </div>
    `;
    footer.innerHTML = `<button class="btn-green" id="btn-cp-close">Voltar à Trilha</button>`;
    document.getElementById('btn-cp-close').addEventListener('click', () => {
      document.getElementById('lesson-modal').classList.add('hidden');
      lesson = null;
      renderTopBar();
      renderTrail();
      renderSettings();
    });
  }

  function updateLessonProgress() {
    const base = (lesson.step - 1) * 20;
    let subPct = 0;
    if (lesson.step === 1) subPct = (lesson.subIndex / Math.max(1, lesson.keywordQueue.length)) * 20;
    if (lesson.step === 2) subPct = (lesson.subIndex / lesson.vocabQueue.length) * 20;
    if (lesson.step === 3) subPct = (lesson.subIndex / lesson.builderQueue.length) * 20;
    if (lesson.step === 4) subPct = (lesson.subIndex / lesson.dialogueQueue.length) * 20;
    if (lesson.step === 5) subPct = (lesson.subIndex / lesson.practiceQueue.length) * 20;

    document.getElementById('lesson-progress-fill').style.width = Math.min(100, Math.round(base + subPct)) + '%';
    document.getElementById('lesson-step-label').textContent = `Etapa ${lesson.step}/5`;
  }

  function renderLessonStep() {
    updateLessonProgress();
    const body = document.getElementById('lesson-body');
    const footer = document.getElementById('lesson-footer');
    body.innerHTML = '';
    footer.innerHTML = '';

    if (lesson.step === 1) renderStepKeywords(body, footer);
    else if (lesson.step === 2) renderStepVocab(body, footer);
    else if (lesson.step === 3) renderStepBuilder(body, footer);
    else if (lesson.step === 4) renderStepDialogue(body, footer);
    else if (lesson.step === 5) renderPracticeTask(body, footer, false);
  }

  // ETAPA 1: Aquecimento de Palavras-Chave (Novo!)
  function renderStepKeywords(body, footer) {
    const item = lesson.keywordQueue[lesson.subIndex];
    const options = shuffle([
      { text: item.pt, correct: true },
      { text: getKeywordDistractor(item, lesson.scenario.keywords || []), correct: false }
    ]);
    const retryBadge = item.isRetry
      ? `<div class="tag" style="background:rgba(239,68,68,0.18);color:#fca5a5;margin-bottom:8px;">🔁 Refazendo palavra</div>`
      : '';

    body.innerHTML = `
      <span class="method-badge">🔑 Palavra-Chave ${lesson.subIndex + 1} de ${lesson.keywordQueue.length}</span>
      ${retryBadge}
      <h2 class="lesson-prompt-title">Aprenda esta palavra antes das frases</h2>
      <div class="visual-card">
        <div class="visual-emoji">${item.emoji}</div>
        <div class="visual-phrase-row">
          <button class="icon-btn" id="btn-play-kw">🔊</button>
          <span class="visual-phrase">${item.en}</span>
        </div>
        ${getPronunciationHints(item.en)}
      </div>
      <div class="options-grid" id="kw-options"></div>
    `;

    window.AppSpeech.speak(item.en);
    document.getElementById('btn-play-kw').addEventListener('click', () => window.AppSpeech.speak(item.en));

    const optContainer = document.getElementById('kw-options');
    options.forEach((opt) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt.text;
      btn.addEventListener('click', () => {
        if (optContainer.dataset.locked) return;
        optContainer.dataset.locked = '1';
        lesson.totalChecks++;

        if (opt.correct) {
          btn.classList.add('correct');
        } else {
          btn.classList.add('wrong');
          lesson.errors++;
          lesson.keywordQueue.push({ ...item, isRetry: true });
        }

        footer.innerHTML = `
          <div class="feedback-banner ${opt.correct ? 'ok' : 'err'}">
            <strong>${opt.correct ? 'Boa! 🔑' : 'Quase! Esta palavra voltará no fim.'}</strong>
            <p style="margin-top:4px;">${item.en} — ${item.pt}</p>
          </div>
          <button class="btn-green" id="btn-next-kw">Próximo</button>
        `;
        document.getElementById('btn-next-kw').addEventListener('click', () => {
          lesson.subIndex++;
          if (lesson.subIndex >= lesson.keywordQueue.length) {
            lesson.step = 2;
            lesson.subIndex = 0;
          }
          renderLessonStep();
        });
      });
      optContainer.appendChild(btn);
    });
  }

  // ETAPA 2: Frases Prontas com Contexto + Alerta de Falsos Cognatos
  function renderStepVocab(body, footer) {
    const item = lesson.vocabQueue[lesson.subIndex];
    const options = shuffle([
      { text: item.pt, correct: true },
      { text: getDistractor(item), correct: false }
    ]);
    const retryBadge = item.isRetry
      ? `<div class="tag" style="background:rgba(239,68,68,0.18);color:#fca5a5;margin-bottom:8px;">🔁 Refazendo frase errada</div>`
      : '';
    const ffWarn = detectFalseFriend(item.en);

    body.innerHTML = `
      <span class="method-badge">📖 Frase ${lesson.subIndex + 1} de ${lesson.vocabQueue.length}</span>
      ${retryBadge}
      <h2 class="lesson-prompt-title">Escolha a tradução</h2>
      <div class="visual-card">
        <div class="visual-emoji">${item.emoji}</div>
        <div class="visual-phrase-row">
          <button class="icon-btn" id="btn-play-vocab">🔊</button>
          <span class="visual-phrase">${item.en}</span>
        </div>
        ${getPronunciationHints(item.en)}
        ${ffWarn ? `<div class="false-friend-box">⚠️ ${ffWarn}</div>` : ''}
      </div>
      <div class="options-grid" id="vocab-options"></div>
    `;

    window.AppSpeech.speak(item.en);
    document.getElementById('btn-play-vocab').addEventListener('click', () => window.AppSpeech.speak(item.en));

    const optContainer = document.getElementById('vocab-options');
    options.forEach((opt) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt.text;
      btn.addEventListener('click', () => {
        if (optContainer.dataset.locked) return;
        optContainer.dataset.locked = '1';
        lesson.totalChecks++;

        if (opt.correct) {
          btn.classList.add('correct');
        } else {
          btn.classList.add('wrong');
          lesson.errors++;
          lesson.vocabQueue.push({ ...item, isRetry: true });
          window.AppStorage.recordErrorPhrase(state, item, lesson.scenario);
        }

        footer.innerHTML = `
          <div class="feedback-banner ${opt.correct ? 'ok' : 'err'}">
            <strong>${opt.correct ? 'Certo!' : 'Quase lá! Esta frase voltará no fim da fila.'}</strong>
            <p style="margin-top:4px;font-size:0.86rem;">${item.en} — ${item.pt}</p>
            <p style="margin-top:4px;font-size:0.78rem;opacity:0.85;">💡 ${item.tip}</p>
          </div>
          <button class="btn-green" id="btn-next-step">Próximo</button>
        `;
        document.getElementById('btn-next-step').addEventListener('click', () => {
          lesson.subIndex++;
          if (lesson.subIndex >= lesson.vocabQueue.length) {
            lesson.step = 3;
            lesson.subIndex = 0;
          }
          renderLessonStep();
        });
      });
      optContainer.appendChild(btn);
    });
  }

  // ETAPA 3: Moldes de Conversa
  function renderStepBuilder(body, footer) {
    const item = lesson.builderQueue[lesson.subIndex];
    const targetParts = [
      { text: item.fixed, type: 'chunk-fixed' },
      { text: item.variable, type: 'chunk-var' }
    ];
    if (item.extra) targetParts.push({ text: item.extra, type: 'chunk-extra' });

    const bankParts = shuffle([
      ...targetParts,
      ...item.distractors.map((d) => ({ text: d, type: 'chunk-extra' }))
    ]);

    lesson.builtChunks = [];
    const retryBadge = item.isRetry
      ? `<div class="tag" style="background:rgba(239,68,68,0.18);color:#fca5a5;margin-bottom:8px;">🔁 Refazendo molde errado</div>`
      : '';

    body.innerHTML = `
      <span class="method-badge">🧩 Molde ${lesson.subIndex + 1} de ${lesson.builderQueue.length}</span>
      ${retryBadge}
      <h2 class="lesson-prompt-title">Monte a frase pronta</h2>
      <div class="pattern-box">
        Use este molde de conversação:
        <div class="pattern-pills">
          <span class="chunk-pill chunk-fixed">Bloco Fixo</span> +
          <span class="chunk-pill chunk-var">Variável</span>
          ${item.extra ? '+ <span class="chunk-pill chunk-extra">Final</span>' : ''}
        </div>
      </div>
      <p style="font-size:1.1rem;font-weight:700;">🇧🇷 ${item.pt}</p>
      <div class="builder-dropzone" id="builder-dropzone"></div>
      <div class="builder-bank" id="builder-bank"></div>
    `;

    const dropzone = document.getElementById('builder-dropzone');
    const bank = document.getElementById('builder-bank');

    function redrawBuilder() {
      dropzone.innerHTML = '';
      lesson.builtChunks.forEach((part, i) => {
        const pill = document.createElement('button');
        pill.className = 'chunk-pill ' + part.type;
        pill.textContent = part.text;
        pill.addEventListener('click', () => {
          lesson.builtChunks.splice(i, 1);
          bankParts.push(part);
          redrawBuilder();
        });
        dropzone.appendChild(pill);
      });

      bank.innerHTML = '';
      bankParts.forEach((part, i) => {
        const pill = document.createElement('button');
        pill.className = 'chunk-pill ' + part.type;
        pill.textContent = part.text;
        pill.addEventListener('click', () => {
          bankParts.splice(i, 1);
          lesson.builtChunks.push(part);
          redrawBuilder();
        });
        bank.appendChild(pill);
      });
    }

    redrawBuilder();

    footer.innerHTML = `<button class="btn-primary" style="width:100%" id="btn-verify-builder">Verificar</button>`;
    document.getElementById('btn-verify-builder').addEventListener('click', () => {
      const userSentence = lesson.builtChunks.map((p) => p.text).join(' ');
      const expected = targetParts.map((p) => p.text).join(' ');
      const ok = userSentence === expected;
      lesson.totalChecks++;
      if (!ok) {
        lesson.errors++;
        lesson.builderQueue.push({ ...item, isRetry: true });
      }

      window.AppSpeech.speak(expected);

      footer.innerHTML = `
        <div class="feedback-banner ${ok ? 'ok' : 'err'}">
          <strong>${ok ? 'Perfeito!' : 'Vamos tentar de novo no fim! Resposta:'}</strong>
          <p style="margin-top:4px;">${expected}</p>
        </div>
        <button class="btn-green" id="btn-next-builder">Próximo</button>
      `;

      document.getElementById('btn-next-builder').addEventListener('click', () => {
        lesson.subIndex++;
        if (lesson.subIndex >= lesson.builderQueue.length) {
          lesson.step = 4;
          lesson.subIndex = 0;
          lesson.chatHistory = [];
        }
        renderLessonStep();
      });
    });
  }

  // ETAPA 4: Mini-Diálogo Real (com botão "🙈 Ocultar tradução")
  function renderStepDialogue(body, footer) {
    const turn = lesson.dialogueQueue[lesson.subIndex];
    const retryBadge = turn.isRetry
      ? `<div class="tag" style="background:rgba(239,68,68,0.18);color:#fca5a5;margin-bottom:8px;">🔁 Refazendo resposta do diálogo</div>`
      : '';

    body.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span class="method-badge" style="margin-bottom:0;">💬 Diálogo ${lesson.subIndex + 1}/${lesson.dialogueQueue.length}</span>
        <button class="btn-circle" id="btn-toggle-sub" style="padding:5px 11px;font-size:0.75rem;">
          ${hideDialoguePt ? '👁️ Mostrar tradução' : '🙈 Ocultar tradução'}
        </button>
      </div>
      ${retryBadge}
      <h2 class="lesson-prompt-title">Mini-Diálogo Real</h2>
      <div class="chat-box" id="chat-box"></div>
      <div class="options-grid" id="dialogue-options"></div>
      <button class="btn-dialogue-mic" id="btn-dialogue-mic">🎙️ Ou responda falando no microfone</button>
      <div id="dialogue-mic-status" class="speech-result hidden"></div>
    `;

    document.getElementById('btn-toggle-sub').addEventListener('click', () => {
      hideDialoguePt = !hideDialoguePt;
      const hintEl = document.getElementById('npc-pt-hint');
      const btn = document.getElementById('btn-toggle-sub');
      if (hintEl) hintEl.classList.toggle('hidden', hideDialoguePt);
      btn.textContent = hideDialoguePt ? '👁️ Mostrar tradução' : '🙈 Ocultar tradução';
    });

    const chatBox = document.getElementById('chat-box');
    lesson.chatHistory.forEach((msg) => {
      const b = document.createElement('div');
      b.className = 'chat-bubble ' + (msg.isUser ? 'chat-user' : 'chat-npc');
      b.textContent = msg.text;
      chatBox.appendChild(b);
    });

    const npcBubble = document.createElement('div');
    npcBubble.className = 'chat-bubble chat-npc';
    npcBubble.innerHTML = `
      <div class="chat-speaker">
        <span>${turn.speaker}</span>
        <button class="icon-btn" style="width:28px;height:28px;font-size:0.8rem;" id="btn-npc-speak">🔊</button>
      </div>
      <div>${turn.en}</div>
      <div id="npc-pt-hint" class="chat-hint-pt ${hideDialoguePt ? 'hidden' : ''}">${turn.pt}</div>
    `;
    chatBox.appendChild(npcBubble);

    window.AppSpeech.speak(turn.en);
    document.getElementById('btn-npc-speak').addEventListener('click', () => window.AppSpeech.speak(turn.en));

    const optContainer = document.getElementById('dialogue-options');
    const shuffledOpts = shuffle(turn.options);
    const optButtons = [];

    const dlgMicBtn = document.getElementById('btn-dialogue-mic');
    const dlgMicStatus = document.getElementById('dialogue-mic-status');
    if (dlgMicBtn) {
      dlgMicBtn.addEventListener('click', () => {
        if (optContainer.dataset.locked) return;
        dlgMicBtn.classList.add('listening');
        dlgMicBtn.textContent = '🎙️ Ouvindo sua resposta... fale agora!';
        dlgMicStatus.classList.add('hidden');

        window.AppSpeech.listen(
          state.accent,
          (transcript) => {
            dlgMicBtn.classList.remove('listening');
            dlgMicBtn.textContent = '🎙️ Ou responda falando no microfone';
            dlgMicStatus.classList.remove('hidden');
            dlgMicStatus.innerHTML = `<strong>Você disse:</strong> "${transcript}"`;

            // Encontra a opção com maior similaridade e clica automaticamente
            let bestIdx = 0;
            let bestSim = -1;
            shuffledOpts.forEach((o, idx) => {
              const s = window.AppSpeech.similarity(o.en, transcript);
              if (s > bestSim) { bestSim = s; bestIdx = idx; }
            });
            if (bestSim >= 30 && optButtons[bestIdx]) {
              optButtons[bestIdx].click();
            } else {
              dlgMicStatus.innerHTML += '<br/><span style="color:#fde68a;">Não ficou claro — tente falar novamente ou toque em uma opção acima.</span>';
            }
          },
          (err) => {
            dlgMicBtn.classList.remove('listening');
            dlgMicBtn.textContent = '🎙️ Ou responda falando no microfone';
            dlgMicStatus.classList.remove('hidden');
            dlgMicStatus.textContent = err;
          }
        );
      });
    }

    shuffledOpts.forEach((opt) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt.en;
      btn.addEventListener('click', () => {
        if (optContainer.dataset.locked) return;
        optContainer.dataset.locked = '1';
        lesson.totalChecks++;

        if (opt.correct) {
          btn.classList.add('correct');
          window.AppSpeech.speak(opt.en);
        } else {
          btn.classList.add('wrong');
          lesson.errors++;
          lesson.dialogueQueue.push({ ...turn, isRetry: true });
        }

        const correctOpt = turn.options.find((o) => o.correct);
        if (opt.correct) {
          lesson.chatHistory.push({ isUser: false, text: turn.en });
          lesson.chatHistory.push({ isUser: true, text: correctOpt.en });
        }

        footer.innerHTML = `
          <div class="feedback-banner ${opt.correct ? 'ok' : 'err'}">
            <strong>${opt.correct ? 'Boa resposta!' : 'Melhor resposta (voltará no fim):'}</strong>
            <p style="margin-top:4px;">${correctOpt.en}</p>
          </div>
          <button class="btn-green" id="btn-next-dialogue">
            ${lesson.subIndex + 1 < lesson.dialogueQueue.length ? 'Continuar conversa' : 'Ir para Prática Final Aleatória ⚡'}
          </button>
        `;

        document.getElementById('btn-next-dialogue').addEventListener('click', () => {
          lesson.subIndex++;
          if (lesson.subIndex >= lesson.dialogueQueue.length) {
            lesson.step = 5;
            lesson.subIndex = 0;
            renderLessonStep();
          } else {
            renderLessonStep();
          }
        });
      });
      optButtons.push(btn);
      optContainer.appendChild(btn);
    });
  }

  // ETAPA 5 (e CHECKPOINT): Prática Final Aleatória
  function renderPracticeTask(body, footer, isCheckpoint) {
    const task = lesson.practiceQueue[lesson.subIndex];
    const total = lesson.practiceQueue.length;
    const num = lesson.subIndex + 1;

    // Se o microfone foi silenciado por 15 min, substitui shadowing por escrita automaticamente
    if (task.method === 'shadowing' && isMicMuted()) {
      task.method = 'writing';
    }

    const reviewTag = task.isReview
      ? `<div class="tag" style="background:rgba(34,197,94,0.18);color:#86efac;margin-bottom:8px;">🔄 Revisão: ${task.reviewFrom}</div>`
      : '';
    const retryTag = task.isRetry
      ? `<div class="tag" style="background:rgba(239,68,68,0.18);color:#fca5a5;margin-bottom:8px;">🔁 Refazendo exercício</div>`
      : '';

    function requeueTask() {
      if (!isCheckpoint) {
        lesson.practiceQueue.push({ ...task, isRetry: true });
      }
      if (task.phrase) {
        window.AppStorage.recordErrorPhrase(state, task.phrase, lesson.scenario || {});
      }
    }

    function advance() {
      lesson.subIndex++;
      if (lesson.subIndex >= lesson.practiceQueue.length) {
        if (isCheckpoint === 'quick') finishQuickWorkout();
        else if (isCheckpoint) finishCheckpoint();
        else finishLesson();
      } else {
        if (isCheckpoint === 'quick') renderQuickWorkoutStep();
        else if (isCheckpoint) renderCheckpointStep();
        else renderLessonStep();
      }
    }

    // COMBINE O ÁUDIO
    if (task.method === 'match') {
      const roundPhrases = task.phrases.map((p, idx) => ({ ...p, idx }));
      const audioOrder = shuffle(roundPhrases);
      const ptOrder = shuffle(roundPhrases);
      let selectedAudioId = null;
      let matchedIds = [];
      let hadError = false;

      body.innerHTML = `
        <span class="method-badge">🔗 Combine o Áudio • ${num}/${total}</span>
        ${retryTag}
        <h2 class="lesson-prompt-title">Combine o áudio com o significado</h2>
        <div class="match-grid">
          <div class="match-col" id="fp-match-audio"></div>
          <div class="match-col" id="fp-match-pt"></div>
        </div>
      `;

      const audioCol = document.getElementById('fp-match-audio');
      const ptCol = document.getElementById('fp-match-pt');

      audioOrder.forEach((p) => {
        const btn = document.createElement('button');
        btn.className = 'match-card';
        btn.dataset.id = p.idx;
        btn.innerHTML = `🔊 <span style="margin-left:6px;letter-spacing:2px;color:#3b82f6;">ılııllı</span>`;
        btn.addEventListener('click', () => {
          window.AppSpeech.speak(p.en);
          audioCol.querySelectorAll('.match-card').forEach((c) => c.classList.remove('selected'));
          btn.classList.add('selected');
          selectedAudioId = p.idx;
        });
        audioCol.appendChild(btn);
      });

      ptOrder.forEach((p) => {
        const btn = document.createElement('button');
        btn.className = 'match-card';
        btn.dataset.id = p.idx;
        btn.textContent = p.pt;
        btn.addEventListener('click', () => {
          if (selectedAudioId === null) return;
          lesson.totalChecks++;
          const audioBtn = audioCol.querySelector(`[data-id="${selectedAudioId}"]`);

          if (selectedAudioId === p.idx) {
            audioBtn.classList.remove('selected');
            audioBtn.classList.add('matched');
            btn.classList.add('matched');
            matchedIds.push(p.idx);
            selectedAudioId = null;

            if (matchedIds.length === roundPhrases.length) {
              if (hadError) requeueTask();
              footer.innerHTML = `
                ${hadError ? '<div class="feedback-banner err"><strong>Houve erro nesta rodada!</strong><p style="margin-top:4px;">Voltará no fim da fila para fixar.</p></div>' : ''}
                <button class="btn-green" id="btn-lp-next">${num < lesson.practiceQueue.length ? 'Próximo exercício →' : 'Concluir 🎉'}</button>
              `;
              document.getElementById('btn-lp-next').addEventListener('click', advance);
            }
          } else {
            lesson.errors++;
            hadError = true;
            btn.classList.add('wrong-flash');
            setTimeout(() => btn.classList.remove('wrong-flash'), 450);
          }
        });
        ptCol.appendChild(btn);
      });
      return;
    }

    const phrase = task.phrase;

    // ESCRITA
    if (task.method === 'writing') {
      body.innerHTML = `
        <span class="method-badge">✍️ Escrita • ${num}/${total}</span>
        ${reviewTag}${retryTag}
        <h2 class="lesson-prompt-title">Escreva a frase em inglês</h2>
        <div class="visual-card" style="padding:20px 16px;">
          <div class="visual-emoji" style="font-size:2.4rem;">${phrase.emoji || '💬'}</div>
          <p style="font-size:1.12rem;font-weight:800;">${phrase.pt}</p>
          <div class="audio-controls" style="margin:14px 0 0;">
            <button class="btn-circle" id="btn-lp-audio">🔊 Ouvir</button>
            <button class="btn-circle" id="btn-lp-hint">💡 Dica</button>
          </div>
        </div>
        <p id="lp-hint-box" class="writing-hint-box hidden"></p>
        <input type="text" id="lp-write-input" class="writing-input" placeholder="Digite sua resposta em inglês..." autocomplete="off" />
      `;

      const input = document.getElementById('lp-write-input');
      const hintBox = document.getElementById('lp-hint-box');
      setTimeout(() => input.focus(), 100);

      document.getElementById('btn-lp-audio').addEventListener('click', () => window.AppSpeech.speak(phrase.en));
      document.getElementById('btn-lp-hint').addEventListener('click', () => {
        hintBox.textContent = 'Dica: ' + makeHint(phrase.en);
        hintBox.classList.remove('hidden');
      });

      footer.innerHTML = `<button class="btn-primary" style="width:100%" id="btn-lp-verify">Verificar escrita</button>`;

      function checkWritten() {
        const typed = normalizeText(input.value);
        const expected = normalizeText(phrase.en);
        const sim = window.AppSpeech.similarity(phrase.en, input.value);
        const ok = typed === expected || sim >= 85;
        lesson.totalChecks++;
        if (!ok) {
          lesson.errors++;
          requeueTask();
        }
        window.AppSpeech.speak(phrase.en);
        input.disabled = true;

        footer.innerHTML = `
          <div class="feedback-banner ${ok ? 'ok' : 'err'}">
            <strong>${ok ? 'Mandou bem! ✍️' : 'Resposta correta:'}</strong>
            <p style="margin-top:4px;">${phrase.en}</p>
          </div>
          <button class="btn-green" id="btn-lp-next">${num < lesson.practiceQueue.length ? 'Próximo exercício →' : 'Concluir 🎉'}</button>
        `;
        document.getElementById('btn-lp-next').addEventListener('click', advance);
      }

      document.getElementById('btn-lp-verify').addEventListener('click', checkWritten);
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !input.disabled) checkWritten();
      });
      return;
    }

    // OUVIR E REPETIR (SHADOWING + botão "🔇 Não posso falar agora (15 min)")
    if (task.method === 'shadowing') {
      let bestScore = null;

      body.innerHTML = `
        <span class="method-badge">🎙️ Ouvir e Repetir • ${num}/${total}</span>
        ${reviewTag}${retryTag}
        <h2 class="lesson-prompt-title">Ouça e fale em voz alta</h2>
        <div class="card">
          <h2 class="shadow-en">${phrase.en}</h2>
          <p class="shadow-pt">${phrase.pt}</p>
          <p class="shadow-tip">💡 ${phrase.tip}</p>
          <div class="audio-controls">
            <button class="btn-circle" id="btn-lp-say-1">🔊 1.0x</button>
            <button class="btn-circle" id="btn-lp-say-slow">🐢 0.75x</button>
          </div>
          <div class="mic-area" style="margin-bottom:8px;">
            <button class="btn-mic" id="btn-lp-mic">
              <span class="mic-icon">🎙️</span>
              <span id="lp-mic-label">Toque e repita em voz alta</span>
            </button>
            <div id="lp-speech-res" class="speech-result hidden"></div>
          </div>
          <button class="btn-text-small" id="btn-mute-mic" style="margin-bottom:0;">🔇 Não posso falar agora (pular microfone por 15 min)</button>
        </div>
      `;

      window.AppSpeech.speak(phrase.en);
      document.getElementById('btn-lp-say-1').addEventListener('click', () => window.AppSpeech.speak(phrase.en, { rate: 1.0 }));
      document.getElementById('btn-lp-say-slow').addEventListener('click', () => window.AppSpeech.speak(phrase.en, { rate: 0.72 }));

      document.getElementById('btn-mute-mic').addEventListener('click', () => {
        state.micMutedUntil = Date.now() + 15 * 60 * 1000;
        window.AppStorage.save(state);
        showToast('🔇 Microfone pausado por 15 min. Trocando para escrita!');
        task.method = 'writing';
        renderLessonStep();
      });

      const micBtn = document.getElementById('btn-lp-mic');
      micBtn.addEventListener('click', () => {
        const label = document.getElementById('lp-mic-label');
        const resBox = document.getElementById('lp-speech-res');
        micBtn.classList.add('listening');
        label.textContent = 'Ouvindo... fale agora!';
        resBox.classList.add('hidden');

        window.AppSpeech.listen(
          state.accent,
          (transcript) => {
            micBtn.classList.remove('listening');
            label.textContent = 'Repetir novamente';
            const score = window.AppSpeech.similarity(phrase.en, transcript);
            bestScore = bestScore === null ? score : Math.max(bestScore, score);
            resBox.classList.remove('hidden');
            resBox.innerHTML = `
              <strong>Você disse:</strong> "${transcript}"<br/>
              <strong>Precisão:</strong> <span style="color:${score >= 60 ? '#22c55e' : '#ef4444'}">${score}%</span>
              ${score >= 60 ? ' — Ótima pronúncia! 🎉' : ' — Vamos praticar esta frase novamente ao final da aula.'}
            `;
          },
          (err) => {
            micBtn.classList.remove('listening');
            label.textContent = 'Toque para falar';
            resBox.classList.remove('hidden');
            resBox.textContent = err;
          }
        );
      });

      footer.innerHTML = `<button class="btn-green" id="btn-lp-next">${num < total ? 'Próximo exercício →' : 'Concluir 🎉'}</button>`;
      document.getElementById('btn-lp-next').addEventListener('click', () => {
        if (bestScore !== null) {
          lesson.totalChecks++;
          if (bestScore < 60) {
            lesson.errors++;
            requeueTask();
          }
        }
        advance();
      });
      return;
    }

    // COMPLETAR BLOCOS
    if (task.method === 'blocks') {
      const rawChunks = splitIntoChunks(phrase.en);
      const targetParts = rawChunks.map((text, idx) => ({
        text,
        type: idx === 0 ? 'chunk-fixed' : idx === rawChunks.length - 1 ? 'chunk-extra' : 'chunk-var'
      }));
      const otherPool = allPhrases.filter((p) => p.en !== phrase.en);
      const extraWord = otherPool.length ? otherPool[Math.floor(Math.random() * otherPool.length)].en.split(' ')[0] : 'please';
      const bankParts = shuffle([...targetParts, { text: extraWord, type: 'chunk-extra' }]);
      lesson.builtChunks = [];

      body.innerHTML = `
        <span class="method-badge">🧩 Completar Blocos • ${num}/${total}</span>
        ${reviewTag}${retryTag}
        <h2 class="lesson-prompt-title">Organize os blocos na ordem certa</h2>
        <div class="visual-card" style="padding:16px;">
          <p style="font-size:1.05rem;font-weight:700;">🇧🇷 ${phrase.pt}</p>
          <button class="btn-circle" style="margin-top:10px;padding:7px 14px;font-size:0.82rem;" id="btn-lp-blk-audio">🔊 Ouvir frase</button>
        </div>
        <div class="builder-dropzone" id="lp-dropzone"></div>
        <div class="builder-bank" id="lp-bank"></div>
      `;

      document.getElementById('btn-lp-blk-audio').addEventListener('click', () => window.AppSpeech.speak(phrase.en));
      const dropzone = document.getElementById('lp-dropzone');
      const bank = document.getElementById('lp-bank');

      function redraw() {
        dropzone.innerHTML = '';
        lesson.builtChunks.forEach((part, i) => {
          const pill = document.createElement('button');
          pill.className = 'chunk-pill ' + part.type;
          pill.textContent = part.text;
          pill.addEventListener('click', () => {
            lesson.builtChunks.splice(i, 1);
            bankParts.push(part);
            redraw();
          });
          dropzone.appendChild(pill);
        });

        bank.innerHTML = '';
        bankParts.forEach((part, i) => {
          const pill = document.createElement('button');
          pill.className = 'chunk-pill ' + part.type;
          pill.textContent = part.text;
          pill.addEventListener('click', () => {
            bankParts.splice(i, 1);
            lesson.builtChunks.push(part);
            redraw();
          });
          bank.appendChild(pill);
        });
      }
      redraw();

      footer.innerHTML = `<button class="btn-primary" style="width:100%" id="btn-lp-verify-blk">Verificar blocos</button>`;
      document.getElementById('btn-lp-verify-blk').addEventListener('click', () => {
        const userSentence = normalizeText(lesson.builtChunks.map((p) => p.text).join(' '));
        const expected = normalizeText(phrase.en);
        const ok = userSentence === expected;
        lesson.totalChecks++;
        if (!ok) {
          lesson.errors++;
          requeueTask();
        }
        window.AppSpeech.speak(phrase.en);
        footer.innerHTML = `
          <div class="feedback-banner ${ok ? 'ok' : 'err'}">
            <strong>${ok ? 'Perfeito! 🧩' : 'Ordem correta:'}</strong>
            <p style="margin-top:4px;">${phrase.en}</p>
          </div>
          <button class="btn-green" id="btn-lp-next">${num < lesson.practiceQueue.length ? 'Próximo exercício →' : 'Concluir 🎉'}</button>
        `;
        document.getElementById('btn-lp-next').addEventListener('click', advance);
      });
      return;
    }

    // OUVIDO RÁPIDO
    const distractors = shuffle(allPhrases.filter((p) => p.pt !== phrase.pt)).slice(0, 2);
    const choices = shuffle([
      { pt: phrase.pt, correct: true },
      { pt: distractors[0] ? distractors[0].pt : 'Outra opção 1', correct: false },
      { pt: distractors[1] ? distractors[1].pt : 'Outra opção 2', correct: false }
    ]);

    body.innerHTML = `
      <span class="method-badge">🎧 Ouvido Rápido • ${num}/${total}</span>
      ${reviewTag}${retryTag}
      <h2 class="lesson-prompt-title">O que você ouviu?</h2>
      <div class="wave-player" id="btn-lp-wave">
        <span class="play-icon">🔊</span>
        <div class="fake-waves">
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
      </div>
      <button class="btn-text-small" id="btn-lp-wave-slow">🐢 Ouvir mais devagar</button>
      <div class="options-grid" id="lp-listen-opts"></div>
    `;

    window.AppSpeech.speak(phrase.en);
    document.getElementById('btn-lp-wave').addEventListener('click', () => window.AppSpeech.speak(phrase.en, { rate: 0.95 }));
    document.getElementById('btn-lp-wave-slow').addEventListener('click', () => window.AppSpeech.speak(phrase.en, { rate: 0.72 }));

    const optContainer = document.getElementById('lp-listen-opts');
    choices.forEach((c) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = c.pt;
      btn.addEventListener('click', () => {
        if (optContainer.dataset.locked) return;
        optContainer.dataset.locked = '1';
        lesson.totalChecks++;
        if (c.correct) btn.classList.add('correct');
        else {
          btn.classList.add('wrong');
          lesson.errors++;
          requeueTask();
        }
        footer.innerHTML = `
          <div class="feedback-banner ${c.correct ? 'ok' : 'err'}">
            <strong>${c.correct ? 'Acertou no ouvido! 🎧' : 'A frase era:'}</strong>
            <p style="margin-top:4px;">${phrase.en} — ${phrase.pt}</p>
          </div>
          <button class="btn-green" id="btn-lp-next">${num < lesson.practiceQueue.length ? 'Próximo exercício →' : 'Concluir 🎉'}</button>
        `;
        document.getElementById('btn-lp-next').addEventListener('click', advance);
      });
      optContainer.appendChild(btn);
    });
  }

  function finishLesson() {
    const accuracy = lesson.totalChecks > 0 ? 1 - lesson.errors / lesson.totalChecks : 1;
    const stars = accuracy >= 0.85 ? 3 : accuracy >= 0.6 ? 2 : 1;
    const currentScenario = lesson.scenario;

    const prev = state.completedLessons[currentScenario.id] || 0;
    state.completedLessons[currentScenario.id] = Math.max(prev, stars);
    state = window.AppStorage.recordStudy(state, 5);

    document.getElementById('lesson-progress-fill').style.width = '100%';
    document.getElementById('lesson-step-label').textContent = 'Concluído!';

    const body = document.getElementById('lesson-body');
    const footer = document.getElementById('lesson-footer');
    const lvlRange = window.LEVEL_RANGES[String(currentScenario.level)];
    const isLastOfLevel = lvlRange && currentScenario.id === lvlRange.lastId;

    body.innerHTML = `
      <div class="complete-screen">
        <div style="font-size:3.5rem;">${currentScenario.emoji}</div>
        <h2 style="margin-top:10px;">Cenário Dominado!</h2>
        <p class="muted" style="margin-top:6px;">${currentScenario.title} (${currentScenario.phrases.length} frases)</p>
        <div class="complete-stars">${'⭐'.repeat(stars)}</div>
        <p style="font-size:0.95rem;">
          ${isLastOfLevel ? `🏆 Você liberou o <strong>Checkpoint do Nível ${currentScenario.level}</strong>!` : '+5 min adicionados à sua meta diária!'}
        </p>
      </div>
    `;
    footer.innerHTML = `
      <div class="complete-actions">
        <button class="btn-secondary" id="btn-repeat-random-practice">🔁 Nova rodada de prática aleatória</button>
        <button class="btn-green" id="btn-finish-close">Voltar à Trilha</button>
      </div>
    `;

    document.getElementById('btn-repeat-random-practice').addEventListener('click', () => startLesson(currentScenario, 5));
    document.getElementById('btn-finish-close').addEventListener('click', () => {
      document.getElementById('lesson-modal').classList.add('hidden');
      lesson = null;
      renderTopBar();
      renderTrail();
      renderSettings();
    });
  }

  /* ==================== TAB 2: PRÁTICA + MEUS ERROS ==================== */
  function bindPractice() {
    document.querySelectorAll('.mode-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.mode-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.practice-panel').forEach((p) => p.classList.remove('active'));
        document.getElementById('panel-' + btn.dataset.mode).classList.add('active');
        if (btn.dataset.mode === 'errors') renderErrorsList();
      });
    });

    document.getElementById('btn-shadow-normal').addEventListener('click', () => window.AppSpeech.speak(allPhrases[shadowIndex].en, { rate: 1.0 }));
    document.getElementById('btn-shadow-slow').addEventListener('click', () => window.AppSpeech.speak(allPhrases[shadowIndex].en, { rate: 0.72 }));
    document.getElementById('btn-shadow-prev').addEventListener('click', () => {
      shadowIndex = (shadowIndex - 1 + allPhrases.length) % allPhrases.length;
      renderShadowCard();
    });
    document.getElementById('btn-shadow-next').addEventListener('click', () => {
      shadowIndex = (shadowIndex + 1) % allPhrases.length;
      renderShadowCard();
    });

    const micBtn = document.getElementById('btn-mic');
    micBtn.addEventListener('click', () => {
      const target = allPhrases[shadowIndex].en;
      const resultBox = document.getElementById('speech-result');
      const label = document.getElementById('mic-label');
      micBtn.classList.add('listening');
      label.textContent = 'Ouvindo... fale agora!';
      resultBox.classList.add('hidden');

      window.AppSpeech.listen(
        state.accent,
        (transcript) => {
          micBtn.classList.remove('listening');
          label.textContent = 'Toque para repetir';
          const score = window.AppSpeech.similarity(target, transcript);
          resultBox.classList.remove('hidden');
          resultBox.innerHTML = `
            <strong>Você disse:</strong> "${transcript}"<br/>
            <strong>Precisão:</strong> <span style="color:${score >= 60 ? '#22c55e' : '#ef4444'}">${score}%</span>
            ${score >= 60 ? ' — Excelente pronúncia! 🎉' : ' — Ouça em 0.75x e tente novamente.'}
          `;
        },
        (err) => {
          micBtn.classList.remove('listening');
          label.textContent = 'Toque para falar';
          resultBox.classList.remove('hidden');
          resultBox.textContent = err;
        }
      );
    });

    document.getElementById('btn-quick-listen').addEventListener('click', () => {
      if (quickListenAnswer) window.AppSpeech.speak(quickListenAnswer.en, { rate: 0.95 });
    });
    document.getElementById('btn-quick-listen-slow').addEventListener('click', () => {
      if (quickListenAnswer) window.AppSpeech.speak(quickListenAnswer.en, { rate: 0.72 });
    });

    document.getElementById('btn-write-audio').addEventListener('click', () => window.AppSpeech.speak(allPhrases[writeIndex].en));
    document.getElementById('btn-write-hint').addEventListener('click', () => {
      const box = document.getElementById('write-hint-text');
      box.textContent = 'Dica: ' + makeHint(allPhrases[writeIndex].en);
      box.classList.remove('hidden');
    });
    document.getElementById('btn-write-next').addEventListener('click', () => {
      writeIndex = Math.floor(Math.random() * allPhrases.length);
      loadQuickWriting();
    });

    function verifyQuickWriting() {
      const p = allPhrases[writeIndex];
      const input = document.getElementById('write-input');
      const fb = document.getElementById('write-feedback');
      const typed = normalizeText(input.value);
      const expected = normalizeText(p.en);
      const sim = window.AppSpeech.similarity(p.en, input.value);
      const ok = typed === expected || sim >= 85;
      window.AppSpeech.speak(p.en);
      fb.classList.remove('hidden');
      fb.style.background = ok ? 'var(--green-bg)' : 'var(--red-bg)';
      fb.innerHTML = ok ? `✅ Excelente! "${p.en}"` : `❌ Resposta esperada: "${p.en}"`;
      if (ok) {
        setTimeout(() => {
          writeIndex = Math.floor(Math.random() * allPhrases.length);
          loadQuickWriting();
        }, 1600);
      }
    }
    document.getElementById('btn-write-check').addEventListener('click', verifyQuickWriting);
    document.getElementById('write-input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') verifyQuickWriting();
    });
  }

  function renderErrorsList() {
    const container = document.getElementById('errors-list');
    container.innerHTML = '';
    const errs = state.frequentErrors || [];
    if (!errs.length) {
      container.innerHTML = `<p class="muted" style="text-align:center;padding:20px;">Nenhum erro registrado ainda! 🎉 Continue estudando.</p>`;
      return;
    }
    errs.forEach((p) => {
      const item = document.createElement('div');
      item.className = 'phrase-item';
      item.innerHTML = `
        <div class="phrase-top">
          <div>
            <span class="tag" style="margin-bottom:4px;">${p.category} • Nível ${p.level}</span>
            <div class="phrase-en">${p.en}</div>
            <div class="phrase-pt">${p.pt}</div>
          </div>
          <div class="phrase-actions">
            <button class="icon-btn btn-say" title="Ouvir">🔊</button>
            <button class="icon-btn btn-done" title="Já dominei!">✅</button>
          </div>
        </div>
      `;
      item.querySelector('.btn-say').addEventListener('click', () => window.AppSpeech.speak(p.en));
      item.querySelector('.btn-done').addEventListener('click', () => {
        window.AppStorage.removeErrorPhrase(state, p.en);
        renderErrorsList();
        showToast('✅ Removida da lista de erros!');
      });
      container.appendChild(item);
    });
  }

  function renderShadowCard() {
    if (!allPhrases.length) return;
    const p = allPhrases[shadowIndex % allPhrases.length];
    document.getElementById('shadow-category').textContent = `Nível ${p.level} • ${p.category}`;
    document.getElementById('shadow-en').textContent = p.en;
    document.getElementById('shadow-pt').textContent = p.pt;
    document.getElementById('shadow-tip').textContent = '💡 ' + p.tip;
    document.getElementById('speech-result').classList.add('hidden');
  }

  function loadQuickWriting() {
    if (!allPhrases.length) return;
    const p = allPhrases[writeIndex % allPhrases.length];
    document.getElementById('write-category').textContent = `Nível ${p.level} • ${p.category}`;
    document.getElementById('write-pt').textContent = p.pt;
    document.getElementById('write-input').value = '';
    document.getElementById('write-hint-text').classList.add('hidden');
    document.getElementById('write-feedback').classList.add('hidden');
  }

  function loadQuickListening() {
    if (allPhrases.length < 3) return;
    const pool = shuffle(allPhrases);
    quickListenAnswer = pool[0];
    const choices = shuffle([pool[0], pool[1], pool[2]]);
    const container = document.getElementById('quick-listen-options');
    const fb = document.getElementById('quick-listen-feedback');
    container.innerHTML = '';
    fb.classList.add('hidden');

    choices.forEach((c) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = c.pt;
      btn.addEventListener('click', () => {
        const ok = c.en === quickListenAnswer.en;
        btn.classList.add(ok ? 'correct' : 'wrong');
        fb.classList.remove('hidden');
        fb.style.background = ok ? 'var(--green-bg)' : 'var(--red-bg)';
        fb.innerHTML = `${ok ? '✅ Correto!' : '❌ Era:'} "${quickListenAnswer.en}"`;
        setTimeout(() => loadQuickListening(), 1400);
      });
      container.appendChild(btn);
    });
  }

  /* ==================== TAB 3: FRASEÁRIO + MODO MÃOS LIVRES ==================== */
  let phraseFilter = 'all';

  function bindPhrasebook() {
    document.getElementById('phrase-search').addEventListener('input', renderPhrasebook);
    document.querySelectorAll('#phrase-filters .chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        phraseFilter = chip.dataset.filter;
        document.querySelectorAll('#phrase-filters .chip').forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
        renderPhrasebook();
      });
    });

    const playBtn = document.getElementById('btn-playlist');
    playBtn.addEventListener('click', () => {
      if (playlistRunning) {
        stopAllAudioModes();
        return;
      }
      stopAllAudioModes();
      const list = getFilteredPhrases();
      if (!list.length) return;
      playlistRunning = true;
      playBtn.textContent = '⏹ Parar';
      let idx = 0;
      function playNext() {
        if (!playlistRunning || idx >= list.length) {
          stopAllAudioModes();
          return;
        }
        window.AppSpeech.speak(list[idx].en, {
          onEnd: () => {
            idx++;
            handsFreeTimer = setTimeout(playNext, 700);
          }
        });
      }
      playNext();
    });

    // Filtro por cenário específico
    const scenarioSel = document.getElementById('phrase-scenario-select');
    if (scenarioSel) {
      scenarioSel.addEventListener('change', () => {
        stopAllAudioModes();
        renderPhrasebook();
      });
    }

    // Modo Mãos Livres com Pausar/Continuar, Anterior, Próxima e Tempo de Pausa (2s/3s/5s)
    const hfBtn = document.getElementById('btn-handsfree');
    const hfBanner = document.getElementById('handsfree-banner');
    const hfStatus = document.getElementById('handsfree-status');
    const hfPauseBtn = document.getElementById('btn-hf-pause');
    const hfPrevBtn = document.getElementById('btn-hf-prev');
    const hfNextBtn = document.getElementById('btn-hf-next');
    const hfDelaySel = document.getElementById('select-hf-delay');

    if (hfDelaySel) {
      hfDelaySel.addEventListener('change', (e) => {
        handsFreeDelay = Number(e.target.value) || 3000;
      });
    }

    function runHandsFreeCycle() {
      if (!handsFreeRunning || handsFreePaused) return;
      if (handsFreeIdx >= handsFreeList.length) {
        stopAllAudioModes();
        return;
      }
      const item = handsFreeList[handsFreeIdx];
      const sec = Math.round(handsFreeDelay / 1000);
      hfStatus.textContent = `(${handsFreeIdx + 1}/${handsFreeList.length}) 🇧🇷 "${item.pt}"`;

      window.AppSpeech.speakPt(item.pt, {
        onEnd: () => {
          if (!handsFreeRunning || handsFreePaused) return;
          hfStatus.textContent = `⏳ ${sec} segundos para você responder em inglês...`;
          handsFreeTimer = setTimeout(() => {
            if (!handsFreeRunning || handsFreePaused) return;
            hfStatus.textContent = `🇺🇸 "${item.en}"`;
            window.AppSpeech.speak(item.en, {
              onEnd: () => {
                if (!handsFreeRunning || handsFreePaused) return;
                handsFreeIdx++;
                handsFreeTimer = setTimeout(runHandsFreeCycle, 1200);
              }
            });
          }, handsFreeDelay);
        }
      });
    }

    hfBtn.addEventListener('click', () => {
      if (handsFreeRunning) {
        stopAllAudioModes();
        return;
      }
      stopAllAudioModes();
      handsFreeList = getFilteredPhrases();
      if (!handsFreeList.length) return;

      handsFreeRunning = true;
      handsFreePaused = false;
      handsFreeIdx = 0;
      hfBtn.textContent = '⏹ Parar';
      hfPauseBtn.textContent = '⏸ Pausar';
      hfBanner.classList.remove('hidden');
      runHandsFreeCycle();
    });

    hfPauseBtn.addEventListener('click', () => {
      if (!handsFreeRunning) return;
      if (!handsFreePaused) {
        handsFreePaused = true;
        window.AppSpeech.stop();
        clearTimeout(handsFreeTimer);
        hfPauseBtn.textContent = '▶ Continuar';
        hfStatus.textContent = `⏸ Pausado na frase ${handsFreeIdx + 1}/${handsFreeList.length}`;
      } else {
        handsFreePaused = false;
        hfPauseBtn.textContent = '⏸ Pausar';
        runHandsFreeCycle();
      }
    });

    hfPrevBtn.addEventListener('click', () => {
      if (!handsFreeRunning || !handsFreeList.length) return;
      window.AppSpeech.stop();
      clearTimeout(handsFreeTimer);
      handsFreePaused = false;
      hfPauseBtn.textContent = '⏸ Pausar';
      handsFreeIdx = (handsFreeIdx - 1 + handsFreeList.length) % handsFreeList.length;
      runHandsFreeCycle();
    });

    hfNextBtn.addEventListener('click', () => {
      if (!handsFreeRunning || !handsFreeList.length) return;
      window.AppSpeech.stop();
      clearTimeout(handsFreeTimer);
      handsFreePaused = false;
      hfPauseBtn.textContent = '⏸ Pausar';
      handsFreeIdx = (handsFreeIdx + 1) % handsFreeList.length;
      runHandsFreeCycle();
    });
  }

  function populateScenarioSelect() {
    const sel = document.getElementById('phrase-scenario-select');
    if (!sel) return;
    const prev = sel.value;
    sel.innerHTML = '<option value="all">📂 Todos os cenários baixados</option>';
    loadedScenarios.forEach((s) => {
      const opt = document.createElement('option');
      opt.value = String(s.id);
      opt.textContent = `Nível ${s.level} • ${s.emoji} ${s.title}`;
      sel.appendChild(opt);
    });
    if ([...sel.options].some((o) => o.value === prev)) sel.value = prev;
  }

  function getFilteredPhrases() {
    const q = (document.getElementById('phrase-search').value || '').toLowerCase().trim();
    const scenSel = document.getElementById('phrase-scenario-select');
    const scenId = scenSel ? scenSel.value : 'all';
    return allPhrases.filter((p) => {
      if (scenId !== 'all' && String(p.scenarioId) !== scenId) return false;
      if (phraseFilter === 'fav' && !state.favorites.includes(p.en)) return false;
      if (['1', '2', '3', '4', '5', '6', '7'].includes(phraseFilter) && String(p.level) !== phraseFilter) return false;
      if (q && !p.en.toLowerCase().includes(q) && !p.pt.toLowerCase().includes(q) && !p.category.toLowerCase().includes(q)) {
        return false;
      }
      return true;
    });
  }

  function renderPhrasebook() {
    populateScenarioSelect();
    const list = getFilteredPhrases();
    const container = document.getElementById('phrase-list');
    container.innerHTML = '';

    if (!list.length) {
      container.innerHTML = `<p class="muted" style="text-align:center;padding:30px;">Nenhuma frase encontrada (baixe o nível na trilha para ver suas frases aqui).</p>`;
      return;
    }

    list.forEach((p) => {
      const isFav = state.favorites.includes(p.en);
      const item = document.createElement('div');
      item.className = 'phrase-item';
      item.innerHTML = `
        <div class="phrase-top">
          <div>
            <span class="tag" style="margin-bottom:4px;">${p.category} • Nível ${p.level}</span>
            <div class="phrase-en">${p.en}</div>
            <div class="phrase-pt">${p.pt}</div>
          </div>
          <div class="phrase-actions">
            <button class="icon-btn btn-say" title="Ouvir">🔊</button>
            <button class="icon-btn btn-fav" title="Favoritar">${isFav ? '⭐' : '☆'}</button>
          </div>
        </div>
        ${getPronunciationHints(p.en)}
        <div class="phrase-tip-box">💡 ${p.tip}</div>
      `;

      item.querySelector('.btn-say').addEventListener('click', () => window.AppSpeech.speak(p.en));
      item.querySelector('.btn-fav').addEventListener('click', () => {
        if (state.favorites.includes(p.en)) {
          state.favorites = state.favorites.filter((f) => f !== p.en);
        } else {
          state.favorites.push(p.en);
        }
        window.AppStorage.save(state);
        renderPhrasebook();
        renderSettings();
      });

      container.appendChild(item);
    });
  }

  /* ==================== TAB 4: AJUSTES, MEDALHAS E BACKUP ==================== */
  function renderMedals() {
    const grid = document.getElementById('medals-grid');
    grid.innerHTML = '';
    for (let lvl = 1; lvl <= window.TOTAL_LEVELS; lvl++) {
      const m = window.MEDALS_META[lvl];
      const score = (state.completedCheckpoints && state.completedCheckpoints[lvl]) || 0;
      const earned = score >= 75;
      const div = document.createElement('div');
      div.className = 'medal-item ' + (earned ? 'earned' : 'locked');
      div.innerHTML = `
        <span style="font-size:1.5rem;">${m.icon}</span>
        <div>
          <strong style="display:block;">${m.name}</strong>
          <span class="muted">Nível ${lvl} ${earned ? `• ${score}%` : '• Bloqueada'}</span>
        </div>
      `;
      grid.appendChild(div);
    }
  }

  function bindSettings() {
    document.getElementById('select-accent').addEventListener('change', (e) => {
      state.accent = e.target.value;
      window.AppStorage.save(state);
    });
    document.getElementById('select-voice-gender').addEventListener('change', (e) => {
      state.voiceGender = e.target.value;
      window.AppStorage.save(state);
      updateLessonVoiceButton();
      window.AppSpeech.speak('Hello! Nice to meet you.');
    });
    document.getElementById('select-goal').addEventListener('change', (e) => {
      state.dailyGoal = Number(e.target.value);
      window.AppStorage.save(state);
      renderTopBar();
    });
    document.getElementById('select-rate').addEventListener('change', (e) => {
      state.rate = Number(e.target.value);
      window.AppStorage.save(state);
    });

    // BACKUP & RESTORE
    const backupMsg = document.getElementById('backup-msg');
    document.getElementById('btn-export-file').addEventListener('click', () => {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `falafacil-backup-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      backupMsg.style.color = '#86efac';
      backupMsg.textContent = '✅ Arquivo de backup baixado! Guarde-o no celular ou Google Drive.';
    });

    document.getElementById('btn-copy-code').addEventListener('click', async () => {
      const code = window.AppStorage.exportBackupCode(state);
      try {
        await navigator.clipboard.writeText(code);
        backupMsg.style.color = '#86efac';
        backupMsg.textContent = '✅ Código copiado! Cole no seu WhatsApp ou notas para guardar.';
      } catch {
        prompt('Copie seu código de backup:', code);
      }
    });

    document.getElementById('btn-restore-code').addEventListener('click', () => {
      const input = document.getElementById('restore-code-input');
      try {
        state = window.AppStorage.importBackupCode(input.value);
        input.value = '';
        backupMsg.style.color = '#86efac';
        backupMsg.textContent = '✅ Progresso restaurado com sucesso!';
        renderTopBar();
        renderTrail();
        renderSettings();
      } catch {
        backupMsg.style.color = '#fca5a5';
        backupMsg.textContent = '❌ Código de backup inválido.';
      }
    });

    document.getElementById('restore-file-input').addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          state = window.AppStorage.importBackupCode(reader.result);
          backupMsg.style.color = '#86efac';
          backupMsg.textContent = '✅ Progresso restaurado pelo arquivo!';
          renderTopBar();
          renderTrail();
          renderSettings();
        } catch {
          backupMsg.style.color = '#fca5a5';
          backupMsg.textContent = '❌ Arquivo de backup inválido.';
        }
      };
      reader.readAsText(file);
    });

    document.getElementById('btn-reset-progress').addEventListener('click', () => {
      if (confirm('Tem certeza que deseja apagar todo o seu progresso?')) {
        state = window.AppStorage.reset();
        currentModule = 'iniciante';
        currentLevel = 1;
        renderTopBar();
        renderTrail();
        renderPhrasebook();
        renderSettings();
      }
    });

    // Senha escondida nos Ajustes: 5 toques em "FalaFácil v9.0"
    let devTaps = 0;
    let devTapTimer = null;
    const versionTrigger = document.getElementById('app-version-trigger');
    const devPanel = document.getElementById('dev-unlock-panel');
    const devInput = document.getElementById('dev-password-input');
    const devMsg = document.getElementById('dev-msg');

    versionTrigger.addEventListener('click', () => {
      devTaps++;
      clearTimeout(devTapTimer);
      devTapTimer = setTimeout(() => { devTaps = 0; }, 2000);
      if (devTaps >= 5) {
        devTaps = 0;
        devPanel.classList.toggle('hidden');
        renderDevPanel();
      }
    });

    function tryUnlockDev() {
      const code = (devInput.value || '').trim().toLowerCase();
      if (code === 'falafacil2026') {
        state.unlockAll = true;
        window.AppStorage.save(state);
        devInput.value = '';
        devMsg.style.color = '#86efac';
        devMsg.textContent = '✅ Todos os 49 cenários e 7 níveis foram desbloqueados para teste!';
        renderDevPanel();
        renderTrail();
      } else {
        devMsg.style.color = '#fca5a5';
        devMsg.textContent = '❌ Senha incorreta.';
      }
    }

    document.getElementById('btn-dev-unlock').addEventListener('click', tryUnlockDev);
    devInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') tryUnlockDev(); });

    document.getElementById('btn-dev-lock').addEventListener('click', () => {
      state.unlockAll = false;
      window.AppStorage.save(state);
      devMsg.style.color = '#fde68a';
      devMsg.textContent = '🔒 Modo teste desativado. Bloqueio normal restaurado.';
      renderDevPanel();
      renderTrail();
    });
  }

  function renderDevPanel() {
    const devPanel = document.getElementById('dev-unlock-panel');
    const pwRow = document.getElementById('dev-password-row');
    const lockBtn = document.getElementById('btn-dev-lock');
    const statusText = document.getElementById('dev-status-text');

    if (state.unlockAll) {
      devPanel.classList.remove('hidden');
      pwRow.classList.add('hidden');
      lockBtn.classList.remove('hidden');
      statusText.textContent = 'Modo Teste ATIVO — todas as 49 lições e 7 níveis estão liberados.';
    } else {
      pwRow.classList.remove('hidden');
      lockBtn.classList.add('hidden');
      statusText.textContent = 'Digite a senha para liberar todas as lições e níveis.';
    }
  }

  function renderSettings() {
    const completed = Object.keys(state.completedLessons).length;
    const totalStars = Object.values(state.completedLessons).reduce((a, b) => a + b, 0);
    document.getElementById('stat-scenarios').textContent = `${completed}/${window.TOTAL_SCENARIOS}`;
    document.getElementById('stat-stars').textContent = `${totalStars}/${window.TOTAL_SCENARIOS * 3}`;
    document.getElementById('stat-favs').textContent = state.favorites.length;

    document.getElementById('select-accent').value = state.accent;
    document.getElementById('select-voice-gender').value = state.voiceGender || 'female';
    document.getElementById('select-goal').value = String(state.dailyGoal);
    document.getElementById('select-rate').value = String(state.rate);
    renderMedals();
    renderDevPanel();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
