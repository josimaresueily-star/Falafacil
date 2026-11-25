// Metadados v10: 3 Módulos, 7 Níveis, 49 Cenários (10-15 frases cada), Medalhas, Pegadinhas e Pronúncia
window.TOTAL_SCENARIOS = 49;
window.TOTAL_LEVELS = 7;
window.LEVEL_RANGES = {
  "1": {
    "firstId": 1,
    "lastId": 8,
    "count": 8
  },
  "2": {
    "firstId": 9,
    "lastId": 15,
    "count": 7
  },
  "3": {
    "firstId": 16,
    "lastId": 24,
    "count": 9
  },
  "4": {
    "firstId": 25,
    "lastId": 31,
    "count": 7
  },
  "5": {
    "firstId": 32,
    "lastId": 39,
    "count": 8
  },
  "6": {
    "firstId": 40,
    "lastId": 44,
    "count": 5
  },
  "7": {
    "firstId": 45,
    "lastId": 49,
    "count": 5
  }
};

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

window.PRONUNCIATION_GUIDE = [
  {
    "word": "aisle",
    "read": "áil",
    "note": "corredor (o 's' é mudo)"
  },
  {
    "word": "receipt",
    "read": "rissít",
    "note": "recibo/nota (o 'p' é mudo)"
  },
  {
    "word": "cough",
    "read": "cóf",
    "note": "tosse"
  },
  {
    "word": "stomachache",
    "read": "stâmak-êik",
    "note": "dor de estômago"
  },
  {
    "word": "headache",
    "read": "héd-êik",
    "note": "dor de cabeça"
  },
  {
    "word": "throat",
    "read": "thrôut",
    "note": "garganta"
  },
  {
    "word": "steak",
    "read": "stêik",
    "note": "bife (rima com 'cake')"
  },
  {
    "word": "suit",
    "read": "sút",
    "note": "servir bem / terno"
  },
  {
    "word": "juice",
    "read": "djús",
    "note": "suco"
  },
  {
    "word": "would",
    "read": "wúd",
    "note": "o 'l' é mudo"
  },
  {
    "word": "could",
    "read": "cúd",
    "note": "o 'l' é mudo"
  },
  {
    "word": "should",
    "read": "shúd",
    "note": "o 'l' é mudo"
  },
  {
    "word": "through",
    "read": "thrú",
    "note": "através / por dentro"
  },
  {
    "word": "thought",
    "read": "thót",
    "note": "pensou / pensamento"
  },
  {
    "word": "colleague",
    "read": "cólig",
    "note": "colega de trabalho"
  },
  {
    "word": "schedule",
    "read": "ské-djul",
    "note": "horário / agenda"
  },
  {
    "word": "muscle",
    "read": "mâssôl",
    "note": "músculo (o 'c' é mudo)"
  },
  {
    "word": "breakfast",
    "read": "brék-fast",
    "note": "café da manhã"
  },
  {
    "word": "luggage",
    "read": "lâ-guidj",
    "note": "bagagem"
  },
  {
    "word": "queue",
    "read": "kiú",
    "note": "fila (inglês britânico)"
  },
  {
    "word": "island",
    "read": "ái-land",
    "note": "ilha (o 's' é mudo)"
  },
  {
    "word": "clothes",
    "read": "clôudz",
    "note": "roupas"
  },
  {
    "word": "comfortable",
    "read": "câmf-tâbôl",
    "note": "confortável"
  },
  {
    "word": "foreign",
    "read": "fó-ren",
    "note": "estrangeiro"
  },
  {
    "word": "answer",
    "read": "én-ser",
    "note": "responder (o 'w' é mudo)"
  },
  {
    "word": "hour",
    "read": "áuer",
    "note": "hora (o 'h' é mudo)"
  },
  {
    "word": "honest",
    "read": "ó-nest",
    "note": "honesto (o 'h' é mudo)"
  },
  {
    "word": "strengths",
    "read": "strêngths",
    "note": "pontos fortes"
  },
  {
    "word": "weaknesses",
    "read": "uík-nesses",
    "note": "pontos fracos"
  },
  {
    "word": "mortgage",
    "read": "mór-guidj",
    "note": "hipoteca (o 't' é mudo)"
  }
];
