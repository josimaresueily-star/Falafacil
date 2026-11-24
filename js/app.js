// FalaFácil v5 — 4 Etapas + Combine o Áudio na Prática Aleatória + Refazer Erros no Fim da Fila (<60% no Shadowing)
(function () {
  let state = window.AppStorage.load();
  let currentLevel = 1;
  let allPhrases = [];
  let shadowIndex = 0;
  let writeIndex = 0;
  let playlistRunning = false;
  let quickListenAnswer = null;

  // Estado da Lição Ativa (4 Etapas)
  let lesson = null;

  function init() {
    allPhrases = [];
    window.SCENARIOS.forEach((s) => {
      s.phrases.forEach((p) => {
        allPhrases.push({ ...p, scenarioId: s.id, level: s.level, category: s.category });
      });
    });

    bindNavigation();
    bindLevelTabs();
    bindPractice();
    bindPhrasebook();
    bindSettings();
    bindLessonModal();

    renderTopBar();
    renderTrail();
    renderShadowCard();
    loadQuickListening();
    loadQuickWriting();
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


  function isLevelUnlocked(levelNum) {
    if (state.unlockAll || levelNum <= 1) return true;
    const prevLevelLastId = (levelNum - 1) * 5;
    return Boolean(state.completedLessons[prevLevelLastId]);
  }

  function isScenarioUnlocked(scenarioId) {
    if (state.unlockAll || scenarioId <= 1) return true;
    return Boolean(state.completedLessons[scenarioId - 1]);
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
    return candidates[Math.floor(Math.random() * candidates.length)].pt;
  }

  // Divide qualquer frase em blocos naturais (3 a 5 blocos) para Completar Blocos
  function splitIntoChunks(sentence) {
    const words = sentence.trim().split(/\s+/);
    if (words.length <= 5) {
      return words;
    }
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

  // Monta a fila da Etapa 4 (Prática Final):
  // TODAS as frases do assunto + blocos aleatórios de "Combine o áudio" + Revisão de lições anteriores
  function createFinalPracticeQueue(scenario) {
    const methods = ['shadowing', 'writing', 'blocks', 'listening'];
    const queue = [];
    const phrases = shuffle(scenario.phrases);

    // 1. Primeira passagem: 100% das frases do assunto atual, alternando os 4 métodos individuais
    phrases.forEach((phrase, idx) => {
      const method = methods[idx % methods.length];
      queue.push({ phrase, method, isReview: false, isRetry: false });
    });

    // 2. Inclui exercícios de "Combine o áudio com o significado" (4 frases por card) misturados na fila
    const matchCount = Math.max(1, Math.min(3, Math.floor(phrases.length / 4)));
    for (let m = 0; m < matchCount; m++) {
      const slice = shuffle(scenario.phrases).slice(0, Math.min(4, scenario.phrases.length));
      queue.push({
        method: 'match',
        phrases: slice,
        isReview: false,
        isRetry: false
      });
    }

    // 3. Se o cenário tiver menos de 8 frases, faz uma 2ª passagem com MÉTODOS DIFERENTES
    if (phrases.length < 8) {
      const secondPass = shuffle(scenario.phrases);
      secondPass.forEach((phrase) => {
        const prevEntry = queue.find((q) => q.phrase && q.phrase.en === phrase.en);
        const otherMethods = methods.filter((m) => !prevEntry || m !== prevEntry.method);
        const chosenMethod = otherMethods[Math.floor(Math.random() * otherMethods.length)];
        queue.push({ phrase, method: chosenMethod, isReview: false, isRetry: false });
      });
    }

    // 4. Revisão Espaçada: inclui até 3 frases de lições anteriores (ou já concluídas)
    const completedIds = Object.keys(state.completedLessons)
      .map(Number)
      .filter((id) => id !== scenario.id);

    const prevScenarios = window.SCENARIOS.filter(
      (s) => s.id !== scenario.id && (completedIds.includes(s.id) || s.id < scenario.id)
    );

    if (prevScenarios.length > 0) {
      const reviewPool = [];
      prevScenarios.forEach((ps) => {
        ps.phrases.forEach((p) => {
          reviewPool.push({ phrase: p, fromTitle: ps.title });
        });
      });

      const selectedReviews = shuffle(reviewPool).slice(0, Math.min(3, reviewPool.length));
      selectedReviews.forEach((rev, i) => {
        const method = methods[(i + 1) % methods.length];
        queue.push({
          phrase: rev.phrase,
          method,
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
    const pct = Math.round((completedCount / window.SCENARIOS.length) * 100);
    document.getElementById('mastery-pct').textContent = pct + '%';
    document.getElementById('streak-count').textContent = state.streak;
    document.getElementById('hero-streak').textContent = state.streak;

    const goal = Number(state.dailyGoal) || 15;
    const mins = Math.min(state.todayMinutes, goal);
    document.getElementById('goal-label').textContent = `${state.todayMinutes} / ${goal} min`;
    document.getElementById('goal-fill').style.width = `${Math.round((mins / goal) * 100)}%`;
  }

  function bindNavigation() {
    document.querySelectorAll('.nav-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        window.AppSpeech.stop();
        playlistRunning = false;
        const view = btn.dataset.view;
        document.querySelectorAll('.nav-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.view').forEach((v) => v.classList.remove('active'));
        document.getElementById('view-' + view).classList.add('active');
        if (view === 'phrasebook') renderPhrasebook();
        if (view === 'settings') renderSettings();
      });
    });
  }

  /* ==================== TAB 1: TRILHA ==================== */
  function renderLevelTabs() {
    document.querySelectorAll('.level-pill').forEach((pill) => {
      const lvl = Number(pill.dataset.level);
      const unlocked = isLevelUnlocked(lvl);
      pill.classList.toggle('locked', !unlocked);
      pill.classList.toggle('active', lvl === currentLevel);
      pill.textContent = unlocked ? `Nível ${lvl}` : `🔒 Nível ${lvl}`;
    });
  }

  function bindLevelTabs() {
    document.querySelectorAll('.level-pill').forEach((pill) => {
      pill.addEventListener('click', () => {
        const lvl = Number(pill.dataset.level);
        if (!isLevelUnlocked(lvl)) {
          showToast(`Conclua o Nível ${lvl - 1} para desbloquear o Nível ${lvl}!`);
          return;
        }
        currentLevel = lvl;
        renderLevelTabs();
        renderTrail();
      });
    });
  }

  function renderTrail() {
    if (!isLevelUnlocked(currentLevel)) currentLevel = 1;
    renderLevelTabs();
    document.getElementById('level-subtitle').textContent = window.LEVELS_META[currentLevel];
    const container = document.getElementById('trail-container');
    container.innerHTML = '';

    const items = window.SCENARIOS.filter((s) => s.level === currentLevel);
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
        if (quickBtn) {
          quickBtn.addEventListener('click', () => startLesson(s, 4));
        }
      } else {
        card.querySelector('.btn-locked-circle').addEventListener('click', () => {
          showToast(`Conclua o Cenário ${s.id - 1} para desbloquear esta lição!`);
        });
      }
      container.appendChild(card);
    });
  }

  /* ==================== MOTOR DA LIÇÃO (4 ETAPAS) ==================== */
  function bindLessonModal() {
    document.getElementById('btn-close-lesson').addEventListener('click', () => {
      window.AppSpeech.stop();
      document.getElementById('lesson-modal').classList.add('hidden');
      lesson = null;
    });
  }

  function startLesson(scenario, initialStep = 1) {
    // 4 Etapas: 1=Vocab (todas as frases), 2=Moldes, 3=Diálogo, 4=Prática Final Aleatória (inclui Combine o Áudio)
    const vocabQueue = scenario.phrases.map((p) => ({ ...p, isRetry: false }));
    const builderQueue = scenario.builder.map((b) => ({ ...b, isRetry: false }));
    const dialogueQueue = scenario.dialogue.map((d) => ({ ...d, isRetry: false }));
    const practiceQueue = createFinalPracticeQueue(scenario);

    lesson = {
      scenario,
      vocabQueue,
      builderQueue,
      dialogueQueue,
      practiceQueue,
      step: initialStep,
      subIndex: 0,
      errors: 0,
      totalChecks: 0,
      builtChunks: [],
      chatHistory: []
    };
    document.getElementById('lesson-modal').classList.remove('hidden');
    renderLessonStep();
  }

  function updateLessonProgress() {
    const base = (lesson.step - 1) * 25;
    let subPct = 0;
    if (lesson.step === 1) subPct = (lesson.subIndex / lesson.vocabQueue.length) * 25;
    if (lesson.step === 2) subPct = (lesson.subIndex / lesson.builderQueue.length) * 25;
    if (lesson.step === 3) subPct = (lesson.subIndex / lesson.dialogueQueue.length) * 25;
    if (lesson.step === 4) subPct = (lesson.subIndex / lesson.practiceQueue.length) * 25;

    document.getElementById('lesson-progress-fill').style.width = Math.min(100, Math.round(base + subPct)) + '%';
    document.getElementById('lesson-step-label').textContent = `Etapa ${lesson.step}/4`;
  }

  function renderLessonStep() {
    updateLessonProgress();
    const body = document.getElementById('lesson-body');
    const footer = document.getElementById('lesson-footer');
    body.innerHTML = '';
    footer.innerHTML = '';

    if (lesson.step === 1) renderStepVocab(body, footer);
    else if (lesson.step === 2) renderStepBuilder(body, footer);
    else if (lesson.step === 3) renderStepDialogue(body, footer);
    else if (lesson.step === 4) renderStepFinalPractice(body, footer);
  }

  // ETAPA 1: Vocabulário Visual (TODAS as frases do cenário; se errar, vai pro fim da fila)
  function renderStepVocab(body, footer) {
    const item = lesson.vocabQueue[lesson.subIndex];
    const options = shuffle([
      { text: item.pt, correct: true },
      { text: getDistractor(item), correct: false }
    ]);
    const retryBadge = item.isRetry
      ? `<div class="tag" style="background:rgba(239,68,68,0.18);color:#fca5a5;margin-bottom:8px;">🔁 Refazendo frase errada</div>`
      : '';

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
          // Recoloca no fim da fila para ser refeito
          lesson.vocabQueue.push({ ...item, isRetry: true });
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
            lesson.step = 2;
            lesson.subIndex = 0;
          }
          renderLessonStep();
        });
      });
      optContainer.appendChild(btn);
    });
  }

  // ETAPA 2: Moldes de Conversa (Blocos Coloridos; se errar, vai pro fim da fila)
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
          lesson.step = 3;
          lesson.subIndex = 0;
          lesson.chatHistory = [];
        }
        renderLessonStep();
      });
    });
  }

  // ETAPA 3: Mini-Diálogo Interativo (se errar, recoloca o turno no fim)
  function renderStepDialogue(body, footer) {
    const turn = lesson.dialogueQueue[lesson.subIndex];
    const retryBadge = turn.isRetry
      ? `<div class="tag" style="background:rgba(239,68,68,0.18);color:#fca5a5;margin-bottom:8px;">🔁 Refazendo resposta do diálogo</div>`
      : '';

    body.innerHTML = `
      <span class="method-badge">💬 Diálogo ${lesson.subIndex + 1} de ${lesson.dialogueQueue.length}</span>
      ${retryBadge}
      <h2 class="lesson-prompt-title">Mini-Diálogo Real</h2>
      <div class="chat-box" id="chat-box"></div>
      <div class="options-grid" id="dialogue-options"></div>
    `;

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
      <div class="chat-hint-pt">${turn.pt}</div>
    `;
    chatBox.appendChild(npcBubble);

    window.AppSpeech.speak(turn.en);
    document.getElementById('btn-npc-speak').addEventListener('click', () => window.AppSpeech.speak(turn.en));

    const optContainer = document.getElementById('dialogue-options');
    shuffle(turn.options).forEach((opt) => {
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
            lesson.step = 4;
            lesson.subIndex = 0;
            renderLessonStep();
          } else {
            renderLessonStep();
          }
        });
      });
      optContainer.appendChild(btn);
    });
  }

  // ETAPA 4: Prática Final Completa e Aleatória
  // Métodos: Escrita, Ouvir e Repetir (<60% volta pro fim), Completar Blocos, Ouvido Rápido e Combine o Áudio
  function renderStepFinalPractice(body, footer) {
    const task = lesson.practiceQueue[lesson.subIndex];
    const total = lesson.practiceQueue.length;
    const num = lesson.subIndex + 1;

    const reviewTag = task.isReview
      ? `<div class="tag" style="background:rgba(34,197,94,0.18);color:#86efac;margin-bottom:8px;">🔄 Revisão: ${task.reviewFrom}</div>`
      : '';
    const retryTag = task.isRetry
      ? `<div class="tag" style="background:rgba(239,68,68,0.18);color:#fca5a5;margin-bottom:8px;">🔁 Refazendo exercício</div>`
      : '';

    function requeueTask() {
      lesson.practiceQueue.push({ ...task, isRetry: true });
    }

    function advanceFinalPractice() {
      lesson.subIndex++;
      if (lesson.subIndex >= lesson.practiceQueue.length) {
        finishLesson();
      } else {
        renderLessonStep();
      }
    }

    // MÉTODO 1: COMBINE O ÁUDIO COM O SIGNIFICADO (Integrado aleatoriamente na prática!)
    if (task.method === 'match') {
      const roundPhrases = task.phrases.map((p, idx) => ({ ...p, idx }));
      const audioOrder = shuffle(roundPhrases);
      const ptOrder = shuffle(roundPhrases);
      let selectedAudioId = null;
      let matchedIds = [];
      let hadError = false;

      body.innerHTML = `
        <span class="method-badge">🔗 Combine o Áudio • Prática ${num}/${total}</span>
        ${retryTag}
        <h2 class="lesson-prompt-title">Combine o áudio com o significado</h2>
        <p class="muted" style="margin-bottom:14px;">Toque em um áudio à esquerda e depois na tradução correspondente à direita.</p>
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
                ${hadError ? '<div class="feedback-banner err"><strong>Houve erro nesta rodada!</strong><p style="margin-top:4px;">Este exercício voltará no fim da fila para fixar.</p></div>' : ''}
                <button class="btn-green" id="btn-lp-next">${num < lesson.practiceQueue.length ? 'Próximo exercício →' : 'Concluir Cenário 🎉'}</button>
              `;
              document.getElementById('btn-lp-next').addEventListener('click', advanceFinalPractice);
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

    // MÉTODO 2: ESCRITA
    if (task.method === 'writing') {
      body.innerHTML = `
        <span class="method-badge">✍️ Escrita • Prática ${num}/${total}</span>
        ${reviewTag}${retryTag}
        <h2 class="lesson-prompt-title">Escreva a frase em inglês</h2>
        <div class="visual-card" style="padding:20px 16px;">
          <div class="visual-emoji" style="font-size:2.4rem;">${phrase.emoji}</div>
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
            <strong>${ok ? 'Mandou bem! ✍️' : 'Resposta correta (voltará no fim da fila):'}</strong>
            <p style="margin-top:4px;">${phrase.en}</p>
          </div>
          <button class="btn-green" id="btn-lp-next">${num < lesson.practiceQueue.length ? 'Próximo exercício →' : 'Concluir Cenário 🎉'}</button>
        `;
        document.getElementById('btn-lp-next').addEventListener('click', advanceFinalPractice);
      }

      document.getElementById('btn-lp-verify').addEventListener('click', checkWritten);
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !input.disabled) checkWritten();
      });
      return;
    }

    // MÉTODO 3: OUVIR E REPETIR (SHADOWING — se ficar abaixo de 60%, volta para o fim da fila!)
    if (task.method === 'shadowing') {
      let bestScore = null;

      body.innerHTML = `
        <span class="method-badge">🎙️ Ouvir e Repetir • Prática ${num}/${total}</span>
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
          <div class="mic-area" style="margin-bottom:0;">
            <button class="btn-mic" id="btn-lp-mic">
              <span class="mic-icon">🎙️</span>
              <span id="lp-mic-label">Toque e repita em voz alta</span>
            </button>
            <div id="lp-speech-res" class="speech-result hidden"></div>
          </div>
        </div>
      `;

      window.AppSpeech.speak(phrase.en);
      document.getElementById('btn-lp-say-1').addEventListener('click', () => window.AppSpeech.speak(phrase.en, { rate: 1.0 }));
      document.getElementById('btn-lp-say-slow').addEventListener('click', () => window.AppSpeech.speak(phrase.en, { rate: 0.72 }));

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

      footer.innerHTML = `<button class="btn-green" id="btn-lp-next">${num < total ? 'Próximo exercício →' : 'Concluir Cenário 🎉'}</button>`;
      document.getElementById('btn-lp-next').addEventListener('click', () => {
        // Se tentou falar e ficou abaixo de 60%, recoloca no fim da fila!
        if (bestScore !== null) {
          lesson.totalChecks++;
          if (bestScore < 60) {
            lesson.errors++;
            requeueTask();
          }
        }
        advanceFinalPractice();
      });
      return;
    }

    // MÉTODO 4: COMPLETAR BLOCOS
    if (task.method === 'blocks') {
      const rawChunks = splitIntoChunks(phrase.en);
      const targetParts = rawChunks.map((text, idx) => ({
        text,
        type: idx === 0 ? 'chunk-fixed' : idx === rawChunks.length - 1 ? 'chunk-extra' : 'chunk-var'
      }));

      const otherPool = allPhrases.filter((p) => p.en !== phrase.en);
      const randomOther = otherPool[Math.floor(Math.random() * otherPool.length)];
      const extraWord = randomOther.en.split(' ')[0];
      const bankParts = shuffle([...targetParts, { text: extraWord, type: 'chunk-extra' }]);
      lesson.builtChunks = [];

      body.innerHTML = `
        <span class="method-badge">🧩 Completar Blocos • Prática ${num}/${total}</span>
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
            <strong>${ok ? 'Perfeito! 🧩' : 'Ordem correta (voltará no fim da fila):'}</strong>
            <p style="margin-top:4px;">${phrase.en}</p>
          </div>
          <button class="btn-green" id="btn-lp-next">${num < lesson.practiceQueue.length ? 'Próximo exercício →' : 'Concluir Cenário 🎉'}</button>
        `;
        document.getElementById('btn-lp-next').addEventListener('click', advanceFinalPractice);
      });
      return;
    }

    // MÉTODO 5: OUVIDO RÁPIDO
    const distractors = shuffle(allPhrases.filter((p) => p.pt !== phrase.pt)).slice(0, 2);
    const choices = shuffle([
      { pt: phrase.pt, correct: true },
      { pt: distractors[0].pt, correct: false },
      { pt: distractors[1].pt, correct: false }
    ]);

    body.innerHTML = `
      <span class="method-badge">🎧 Ouvido Rápido • Prática ${num}/${total}</span>
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
            <strong>${c.correct ? 'Acertou no ouvido! 🎧' : 'A frase era (voltará no fim da fila):'}</strong>
            <p style="margin-top:4px;">${phrase.en} — ${phrase.pt}</p>
          </div>
          <button class="btn-green" id="btn-lp-next">${num < lesson.practiceQueue.length ? 'Próximo exercício →' : 'Concluir Cenário 🎉'}</button>
        `;
        document.getElementById('btn-lp-next').addEventListener('click', advanceFinalPractice);
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
    body.innerHTML = `
      <div class="complete-screen">
        <div style="font-size:3.5rem;">${currentScenario.emoji}</div>
        <h2 style="margin-top:10px;">Cenário Dominado!</h2>
        <p class="muted" style="margin-top:6px;">${currentScenario.title} (${currentScenario.phrases.length} frases)</p>
        <div class="complete-stars">${'⭐'.repeat(stars)}</div>
        <p style="font-size:0.95rem;">+5 min adicionados à sua meta diária!</p>
      </div>
    `;
    footer.innerHTML = `
      <div class="complete-actions">
        <button class="btn-secondary" id="btn-repeat-random-practice">🔁 Nova rodada de prática aleatória</button>
        <button class="btn-green" id="btn-finish-close">Voltar à Trilha</button>
      </div>
    `;

    document.getElementById('btn-repeat-random-practice').addEventListener('click', () => {
      startLesson(currentScenario, 4);
    });

    document.getElementById('btn-finish-close').addEventListener('click', () => {
      document.getElementById('lesson-modal').classList.add('hidden');
      lesson = null;
      renderTopBar();
      renderTrail();
      renderSettings();
    });
  }

  /* ==================== TAB 2: PRÁTICA (FALA, OUVIDO E ESCRITA) ==================== */
  function bindPractice() {
    document.querySelectorAll('.mode-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.mode-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.practice-panel').forEach((p) => p.classList.remove('active'));
        document.getElementById('panel-' + btn.dataset.mode).classList.add('active');
      });
    });

    // Shadowing
    document.getElementById('btn-shadow-normal').addEventListener('click', () => {
      window.AppSpeech.speak(allPhrases[shadowIndex].en, { rate: 1.0 });
    });
    document.getElementById('btn-shadow-slow').addEventListener('click', () => {
      window.AppSpeech.speak(allPhrases[shadowIndex].en, { rate: 0.72 });
    });
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

    // Listening
    document.getElementById('btn-quick-listen').addEventListener('click', () => {
      if (quickListenAnswer) window.AppSpeech.speak(quickListenAnswer.en, { rate: 0.95 });
    });
    document.getElementById('btn-quick-listen-slow').addEventListener('click', () => {
      if (quickListenAnswer) window.AppSpeech.speak(quickListenAnswer.en, { rate: 0.72 });
    });

    // Writing
    document.getElementById('btn-write-audio').addEventListener('click', () => {
      window.AppSpeech.speak(allPhrases[writeIndex].en);
    });
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
      fb.innerHTML = ok
        ? `✅ Excelente! "${p.en}"`
        : `❌ Resposta esperada: "${p.en}"`;

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

  function renderShadowCard() {
    const p = allPhrases[shadowIndex];
    document.getElementById('shadow-category').textContent = `Nível ${p.level} • ${p.category}`;
    document.getElementById('shadow-en').textContent = p.en;
    document.getElementById('shadow-pt').textContent = p.pt;
    document.getElementById('shadow-tip').textContent = '💡 ' + p.tip;
    document.getElementById('speech-result').classList.add('hidden');
  }

  function loadQuickWriting() {
    const p = allPhrases[writeIndex];
    document.getElementById('write-category').textContent = `Nível ${p.level} • ${p.category}`;
    document.getElementById('write-pt').textContent = p.pt;
    document.getElementById('write-input').value = '';
    document.getElementById('write-hint-text').classList.add('hidden');
    document.getElementById('write-feedback').classList.add('hidden');
  }

  function loadQuickListening() {
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

  /* ==================== TAB 3: FRASEÁRIO ==================== */
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
        playlistRunning = false;
        window.AppSpeech.stop();
        playBtn.textContent = '▶ Playlist';
        return;
      }
      const list = getFilteredPhrases();
      if (!list.length) return;
      playlistRunning = true;
      playBtn.textContent = '⏹ Parar';
      let idx = 0;
      function playNext() {
        if (!playlistRunning || idx >= list.length) {
          playlistRunning = false;
          playBtn.textContent = '▶ Playlist';
          return;
        }
        window.AppSpeech.speak(list[idx].en, {
          onEnd: () => {
            idx++;
            setTimeout(playNext, 700);
          }
        });
      }
      playNext();
    });
  }

  function getFilteredPhrases() {
    const q = (document.getElementById('phrase-search').value || '').toLowerCase().trim();
    return allPhrases.filter((p) => {
      if (phraseFilter === 'fav' && !state.favorites.includes(p.en)) return false;
      if (['1', '2', '3', '4', '5', '6'].includes(phraseFilter) && String(p.level) !== phraseFilter) return false;
      if (q && !p.en.toLowerCase().includes(q) && !p.pt.toLowerCase().includes(q) && !p.category.toLowerCase().includes(q)) {
        return false;
      }
      return true;
    });
  }

  function renderPhrasebook() {
    const list = getFilteredPhrases();
    const container = document.getElementById('phrase-list');
    container.innerHTML = '';

    if (!list.length) {
      container.innerHTML = `<p class="muted" style="text-align:center;padding:30px;">Nenhuma frase encontrada.</p>`;
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

  /* ==================== TAB 4: AJUSTES ==================== */
  function bindSettings() {
    document.getElementById('select-accent').addEventListener('change', (e) => {
      state.accent = e.target.value;
      window.AppStorage.save(state);
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
    document.getElementById('btn-reset-progress').addEventListener('click', () => {
      if (confirm('Tem certeza que deseja apagar todo o seu progresso?')) {
        state = window.AppStorage.reset();
        currentLevel = 1;
        renderTopBar();
        renderTrail();
        renderPhrasebook();
        renderSettings();
      }
    });

    // Senha escondida nos Ajustes: 5 toques em "FalaFácil v6.0" abre o painel de teste
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
        devMsg.textContent = '✅ Todas as lições e níveis foram desbloqueados para teste!';
        renderDevPanel();
        renderTrail();
      } else {
        devMsg.style.color = '#fca5a5';
        devMsg.textContent = '❌ Senha incorreta.';
      }
    }

    document.getElementById('btn-dev-unlock').addEventListener('click', tryUnlockDev);
    devInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') tryUnlockDev();
    });

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
      statusText.textContent = 'Modo Teste ATIVO — todas as 30 lições e 6 níveis estão liberados.';
    } else {
      pwRow.classList.remove('hidden');
      lockBtn.classList.add('hidden');
      statusText.textContent = 'Digite a senha para liberar todas as lições e níveis.';
    }
  }

  function renderSettings() {
    const completed = Object.keys(state.completedLessons).length;
    const totalStars = Object.values(state.completedLessons).reduce((a, b) => a + b, 0);
    document.getElementById('stat-scenarios').textContent = `${completed}/${window.SCENARIOS.length}`;
    document.getElementById('stat-stars').textContent = `${totalStars}/${window.SCENARIOS.length * 3}`;
    document.getElementById('stat-favs').textContent = state.favorites.length;

    document.getElementById('select-accent').value = state.accent;
    document.getElementById('select-goal').value = String(state.dailyGoal);
    document.getElementById('select-rate').value = String(state.rate);
    renderDevPanel();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
