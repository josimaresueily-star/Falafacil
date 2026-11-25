// Metadados v9: 3 Módulos (Iniciante, Intermediário, Avançado), 7 Níveis, 35 Cenários, Medalhas e Pegadinhas
window.TOTAL_SCENARIOS = 35;
window.TOTAL_LEVELS = 7;

window.MODULES_META = [
  { id: 'iniciante', label: '🟢 Iniciante', levels: [1, 2], desc: 'Base essencial para se virar em viagens e no dia a dia' },
  { id: 'intermediario', label: '🟡 Intermediário', levels: [3, 4, 5, 6], desc: 'Conversas completas, trabalho, entrevistas e imprevistos' },
  { id: 'avancado', label: '🔴 Avançado', levels: [7], desc: 'Phrasal Verbs e inglês natural de nativos' }
];

window.LEVELS_META = {
  "1": "Primeiros Contatos e Sobrevivência",
  "2": "Viagem e Deslocamento",
  "3": "Alimentação, Compras e Saúde",
  "4": "Vida Social, Trabalho e Imprevistos",
  "5": "Carreira, Entrevistas e Trânsito",
  "6": "Vida no Exterior e Conversação Avançada",
  "7": "Phrasal Verbs na Prática"
};

window.MEDALS_META = {
  "1": { icon: "🥉", name: "Sobrevivente" },
  "2": { icon: "✈️", name: "Viajante" },
  "3": { icon: "🍽️", name: "Explorador Urbano" },
  "4": { icon: "💬", name: "Comunicador" },
  "5": { icon: "💼", name: "Profissional" },
  "6": { icon: "🌍", name: "Cidadão Global" },
  "7": { icon: "🔥", name: "Mestre dos Phrasal Verbs" }
};

// Falsos cognatos (Pegadinhas) detectados automaticamente nas frases
window.FALSE_FRIENDS = [
  { word: "actually", warn: "Pegadinha: 'Actually' significa 'na verdade' (e não 'atualmente')." },
  { word: "push", warn: "Pegadinha: 'Push' significa 'empurrar' (e não 'puxar')." },
  { word: "parents", warn: "Pegadinha: 'Parents' significa 'pais' (pai e mãe), e não 'parentes' (relatives)." },
  { word: "pretend", warn: "Pegadinha: 'Pretend' significa 'fingir' (e não 'pretender')." },
  { word: "lunch", warn: "Pegadinha: 'Lunch' significa 'almoço' (e não 'lanche', que é 'snack')." },
  { word: "college", warn: "Pegadinha: 'College' significa 'faculdade' (e não 'colégio/escola')." },
  { word: "library", warn: "Pegadinha: 'Library' significa 'biblioteca' (livraria é 'bookstore')." },
  { word: "attend", warn: "Pegadinha: 'Attend' significa 'participar / comparecer' (e não 'atender')." },
  { word: "resume", warn: "Pegadinha: 'Resume' (verbo) significa 'retomar' (e 'résumé' é currículo)." },
  { word: "exquisite", warn: "Pegadinha: 'Exquisite' significa 'requintado/belíssimo' (e não 'esquisito')." }
];
