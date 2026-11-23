// FalaFácil — Motor Interativo do Webapp
(function () {
  let state = window.AppStorage.load();
  let currentLevel = 1;
  let allPhrases = [];
  let shadowIndex = 0;
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
  function bindLevelTabs() {
    document.querySelectorAll('.level-pill').forEach((pill) => {
      pill.addEventListener('click', () => {
        currentLevel = Number(pill.dataset.level);
        document.querySelectorAll('.level-pill').forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        renderTrail();
      });
    });
  }

  function renderTrail() {
    document.getElementById('level-subtitle').textContent = window.LEVELS_META[currentLevel];
    const container = document.getElementById('trail-container');
    container.innerHTML = '';

    const items = window.SCENARIOS.filter((s) => s.level === currentLevel);
    items.forEach((s) => {
      const stars = state.completedLessons[s.id] || 0;
      const card = document.createElement('div');
      card.className = 'lesson-circle-card' + (stars > 0 ? ' completed' : '');

      let starsHtml = '';
      for (let i = 1; i <= 3; i++) {
        starsHtml += `<span class="${i <= stars ? '' : 'star-off'}">⭐</span>`;
      }

      card.innerHTML = `
        <span class="lesson-num">Cenário ${s.id} • ${s.category}</span>
        <div class="lesson-emoji">${s.emoji}</div>
        <h3 class="lesson-title">${s.title}</h3>
        <div class="stars-row">${starsHtml}</div>
        <button class="btn-start-circle">${stars > 0 ? 'Repetir' : 'Começar'}</button>
      `;

      card.querySelector('.btn-start-circle').addEventListener('click', () => startLesson(s));
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

  function startLesson(scenario) {
    lesson = {
      scenario,
      step: 1,       // 1=Vocab, 2=AudioMatch, 3=Builder, 4=Dialogue
      subIndex: 0,
      errors: 0,
      totalChecks: 0,
      selectedAudioId: null,
      matchedIds: [],
      builtChunks: [],
      chatHistory: []
    };
    document.getElementById('lesson-modal').classList.remove('hidden');
    renderLessonStep();
  }

  function updateLessonProgress() {
    const base = (lesson.step - 1) * 25;
    let subPct = 0;
    if (lesson.step === 1) subPct = (lesson.subIndex / lesson.scenario.phrases.length) * 25;
    if (lesson.step === 2) subPct = (lesson.matchedIds.length / lesson.scenario.phrases.length) * 25;
    if (lesson.step === 3) subPct = (lesson.subIndex / lesson.scenario.builder.length) * 25;
    if (lesson.step === 4) subPct = (lesson.subIndex / lesson.scenario.dialogue.length) * 25;
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
    else if (lesson.step === 2) renderStepMatch(body, footer);
    else if (lesson.step === 3) renderStepBuilder(body, footer);
    else if (lesson.step === 4) renderStepDialogue(body, footer);
  }

  // ETAPA 1: Vocabulário Visual (2 opções rápidas)
  function renderStepVocab(body, footer) {
    const item = lesson.scenario.phrases[lesson.subIndex];
    const options = shuffle([
      { text: item.pt, correct: true },
      { text: item.distractor, correct: false }
    ]);

    body.innerHTML = `
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
        }

        footer.innerHTML = `
          <div class="feedback-banner ${opt.correct ? 'ok' : 'err'}">
            <strong>${opt.correct ? 'Certo!' : 'Quase lá!'}</strong>
            <p style="margin-top:4px;font-size:0.86rem;">${item.en} — ${item.pt}</p>
            <p style="margin-top:4px;font-size:0.78rem;opacity:0.85;">💡 ${item.tip}</p>
          </div>
          <button class="btn-green" id="btn-next-step">Próximo</button>
        `;
        document.getElementById('btn-next-step').addEventListener('click', () => {
          lesson.subIndex++;
          if (lesson.subIndex >= lesson.scenario.phrases.length) {
            lesson.step = 2;
            lesson.subIndex = 0;
            lesson.matchedIds = [];
            lesson.selectedAudioId = null;
          }
          renderLessonStep();
        });
      });
      optContainer.appendChild(btn);
    });
  }

  // ETAPA 2: Treino de Ouvido (Áudio sem texto -> Tradução PT)
  function renderStepMatch(body, footer) {
    const phrases = lesson.scenario.phrases.map((p, idx) => ({ ...p, idx }));
    const audioOrder = shuffle(phrases);
    const ptOrder = shuffle(phrases);

    body.innerHTML = `
      <h2 class="lesson-prompt-title">Combine o áudio com o significado</h2>
      <p class="muted" style="margin-bottom:14px;">Toque em um áudio à esquerda e depois na tradução correspondente à direita.</p>
      <div class="match-grid">
        <div class="match-col" id="match-audio-col"></div>
        <div class="match-col" id="match-pt-col"></div>
      </div>
    `;

    const audioCol = document.getElementById('match-audio-col');
    const ptCol = document.getElementById('match-pt-col');

    audioOrder.forEach((p) => {
      const btn = document.createElement('button');
      btn.className = 'match-card';
      btn.dataset.id = p.idx;
      btn.innerHTML = `🔊 <span style="margin-left:6px;letter-spacing:2px;color:#3b82f6;">ılııllı</span>`;
      btn.addEventListener('click', () => {
        window.AppSpeech.speak(p.en);
        audioCol.querySelectorAll('.match-card').forEach((c) => c.classList.remove('selected'));
        btn.classList.add('selected');
        lesson.selectedAudioId = p.idx;
      });
      audioCol.appendChild(btn);
    });

    ptOrder.forEach((p) => {
      const btn = document.createElement('button');
      btn.className = 'match-card';
      btn.dataset.id = p.idx;
      btn.textContent = p.pt;
      btn.addEventListener('click', () => {
        if (lesson.selectedAudioId === null) return;
        lesson.totalChecks++;
        const audioBtn = audioCol.querySelector(`[data-id="${lesson.selectedAudioId}"]`);

        if (lesson.selectedAudioId === p.idx) {
          audioBtn.classList.remove('selected');
          audioBtn.classList.add('matched');
          btn.classList.add('matched');
          lesson.matchedIds.push(p.idx);
          lesson.selectedAudioId = null;
          updateLessonProgress();

          if (lesson.matchedIds.length === phrases.length) {
            footer.innerHTML = `<button class="btn-green" id="btn-to-builder">Continuar para Montagem</button>`;
            document.getElementById('btn-to-builder').addEventListener('click', () => {
              lesson.step = 3;
              lesson.subIndex = 0;
              renderLessonStep();
            });
          }
        } else {
          lesson.errors++;
          btn.classList.add('wrong-flash');
          setTimeout(() => btn.classList.remove('wrong-flash'), 450);
        }
      });
      ptCol.appendChild(btn);
    });
  }

  // ETAPA 3: Moldes de Conversa (Blocos Coloridos Fixo + Variável)
  function renderStepBuilder(body, footer) {
    const item = lesson.scenario.builder[lesson.subIndex];
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

    body.innerHTML = `
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
      if (!ok) lesson.errors++;

      window.AppSpeech.speak(expected);

      footer.innerHTML = `
        <div class="feedback-banner ${ok ? 'ok' : 'err'}">
          <strong>${ok ? 'Perfeito!' : 'Resposta esperada:'}</strong>
          <p style="margin-top:4px;">${expected}</p>
        </div>
        <button class="btn-green" id="btn-next-builder">Próximo</button>
      `;

      document.getElementById('btn-next-builder').addEventListener('click', () => {
        lesson.subIndex++;
        if (lesson.subIndex >= lesson.scenario.builder.length) {
          lesson.step = 4;
          lesson.subIndex = 0;
          lesson.chatHistory = [];
        }
        renderLessonStep();
      });
    });
  }

  // ETAPA 4: Mini-Diálogo Interativo (Chat)
  function renderStepDialogue(body, footer) {
    const turn = lesson.scenario.dialogue[lesson.subIndex];

    body.innerHTML = `
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
        }

        const correctOpt = turn.options.find((o) => o.correct);
        lesson.chatHistory.push({ isUser: false, text: turn.en });
        lesson.chatHistory.push({ isUser: true, text: correctOpt.en });

        footer.innerHTML = `
          <div class="feedback-banner ${opt.correct ? 'ok' : 'err'}">
            <strong>${opt.correct ? 'Boa resposta!' : 'Melhor resposta:'}</strong>
            <p style="margin-top:4px;">${correctOpt.en}</p>
          </div>
          <button class="btn-green" id="btn-next-dialogue">
            ${lesson.subIndex + 1 < lesson.scenario.dialogue.length ? 'Continuar conversa' : 'Concluir Cenário 🎉'}
          </button>
        `;

        document.getElementById('btn-next-dialogue').addEventListener('click', () => {
          lesson.subIndex++;
          if (lesson.subIndex >= lesson.scenario.dialogue.length) {
            finishLesson();
          } else {
            renderLessonStep();
          }
        });
      });
      optContainer.appendChild(btn);
    });
  }

  function finishLesson() {
    const accuracy = lesson.totalChecks > 0 ? 1 - lesson.errors / lesson.totalChecks : 1;
    const stars = accuracy >= 0.9 ? 3 : accuracy >= 0.65 ? 2 : 1;

    const prev = state.completedLessons[lesson.scenario.id] || 0;
    state.completedLessons[lesson.scenario.id] = Math.max(prev, stars);
    state = window.AppStorage.recordStudy(state, 5);

    document.getElementById('lesson-progress-fill').style.width = '100%';
    document.getElementById('lesson-step-label').textContent = 'Concluído!';

    const body = document.getElementById('lesson-body');
    const footer = document.getElementById('lesson-footer');
    body.innerHTML = `
      <div class="complete-screen">
        <div style="font-size:3.5rem;">${lesson.scenario.emoji}</div>
        <h2 style="margin-top:10px;">Cenário Dominado!</h2>
        <p class="muted" style="margin-top:6px;">${lesson.scenario.title}</p>
        <div class="complete-stars">${'⭐'.repeat(stars)}</div>
        <p style="font-size:0.95rem;">+5 min adicionados à sua meta diária!</p>
      </div>
    `;
    footer.innerHTML = `<button class="btn-green" id="btn-finish-close">Voltar à Trilha</button>`;
    document.getElementById('btn-finish-close').addEventListener('click', () => {
      document.getElementById('lesson-modal').classList.add('hidden');
      lesson = null;
      renderTopBar();
      renderTrail();
      renderSettings();
    });
  }

  /* ==================== TAB 2: PRÁTICA ==================== */
  function bindPractice() {
    document.querySelectorAll('.mode-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.mode-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.practice-panel').forEach((p) => p.classList.remove('active'));
        document.getElementById('panel-' + btn.dataset.mode).classList.add('active');
      });
    });

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
            <strong>Precisão:</strong> <span style="color:${score >= 70 ? '#22c55e' : '#facc15'}">${score}%</span>
            ${score >= 70 ? ' — Excelente pronúncia! 🎉' : ' — Ouça em 0.75x e tente novamente.'}
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
  }

  function renderShadowCard() {
    const p = allPhrases[shadowIndex];
    document.getElementById('shadow-category').textContent = `Nível ${p.level} • ${p.category}`;
    document.getElementById('shadow-en').textContent = p.en;
    document.getElementById('shadow-pt').textContent = p.pt;
    document.getElementById('shadow-tip').textContent = '💡 ' + p.tip;
    document.getElementById('speech-result').classList.add('hidden');
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
      if (['1', '2', '3', '4'].includes(phraseFilter) && String(p.level) !== phraseFilter) return false;
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
        renderTopBar();
        renderTrail();
        renderPhrasebook();
        renderSettings();
      }
    });
  }

  function renderSettings() {
    const completed = Object.keys(state.completedLessons).length;
    const totalStars = Object.values(state.completedLessons).reduce((a, b) => a + b, 0);
    document.getElementById('stat-scenarios').textContent = `${completed}/20`;
    document.getElementById('stat-stars').textContent = `${totalStars}/60`;
    document.getElementById('stat-favs').textContent = state.favorites.length;

    document.getElementById('select-accent').value = state.accent;
    document.getElementById('select-goal').value = String(state.dailyGoal);
    document.getElementById('select-rate').value = String(state.rate);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
