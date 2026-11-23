// Banco de Dados Completo: 4 Níveis, 20 Cenários, 80 Frases Prontas, Moldes e Diálogos
window.LEVELS_META = {
  "1": "Primeiros Contatos e Sobrevivência",
  "2": "Viagem e Deslocamento",
  "3": "Alimentação, Compras e Saúde",
  "4": "Vida Social, Trabalho e Imprevistos"
};

window.SCENARIOS = [
  {
    "id": 1,
    "level": 1,
    "category": "Social",
    "emoji": "👋",
    "title": "Apresentação Pessoal",
    "phrases": [
      {
        "en": "Hi, I'm Ana.",
        "pt": "Oi, eu sou a Ana.",
        "distractor": "Onde você mora?",
        "emoji": "😊",
        "tip": "Mais natural do que 'My name is...' no dia a dia."
      },
      {
        "en": "Nice to meet you!",
        "pt": "Prazer em te conhecer!",
        "distractor": "Até amanhã!",
        "emoji": "🤝",
        "tip": "Para responder: 'Nice to meet you too!'"
      },
      {
        "en": "I'm from Brazil.",
        "pt": "Eu sou do Brasil.",
        "distractor": "Eu moro aqui.",
        "emoji": "🌍",
        "tip": "Também funciona com cidades: 'I'm from São Paulo.'"
      },
      {
        "en": "How about you?",
        "pt": "E você?",
        "distractor": "Quanto custa?",
        "emoji": "💬",
        "tip": "Ótimo para devolver a pergunta sem travar."
      }
    ],
    "builder": [
      {
        "pt": "Eu sou do Brasil.",
        "fixed": "I'm from",
        "variable": "Brazil",
        "extra": "",
        "distractors": [
          "water",
          "go"
        ]
      },
      {
        "pt": "Prazer em te conhecer!",
        "fixed": "Nice to",
        "variable": "meet you!",
        "extra": "",
        "distractors": [
          "thank",
          "coffee"
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "Alex",
        "en": "Hi! I'm Alex. Nice to meet you!",
        "pt": "Oi! Eu sou o Alex. Prazer em te conhecer!",
        "options": [
          {
            "en": "Hi! Nice to meet you too!",
            "correct": true
          },
          {
            "en": "Can I pay by card?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Alex",
        "en": "Where are you from?",
        "pt": "De onde você é?",
        "options": [
          {
            "en": "I'm from Brazil. How about you?",
            "correct": true
          },
          {
            "en": "Turn left at the bank.",
            "correct": false
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "level": 1,
    "category": "Na Rua",
    "emoji": "🗺️",
    "title": "Pedir Direções e Agradecer",
    "phrases": [
      {
        "en": "Excuse me, where is the subway?",
        "pt": "Com licença, onde fica o metrô?",
        "distractor": "Que horas são?",
        "emoji": "🚇",
        "tip": "Sempre comece com 'Excuse me' ao abordar alguém na rua."
      },
      {
        "en": "Is it far from here?",
        "pt": "É longe daqui?",
        "distractor": "Está fechado hoje?",
        "emoji": "📍",
        "tip": "Resposta comum: 'Just five minutes' (Só 5 minutos)."
      },
      {
        "en": "Turn left.",
        "pt": "Vire à esquerda.",
        "distractor": "Siga em frente.",
        "emoji": "⬅️",
        "tip": "Turn right = Vire à direita; Go straight = Siga em frente."
      },
      {
        "en": "Thank you so much!",
        "pt": "Muito obrigado(a)!",
        "distractor": "Com licença!",
        "emoji": "🙏",
        "tip": "Versão rápida na rua: 'Thanks a lot!'"
      }
    ],
    "builder": [
      {
        "pt": "Com licença, onde fica o metrô?",
        "fixed": "Excuse me, where is",
        "variable": "the subway?",
        "extra": "",
        "distractors": [
          "from",
          "thanks"
        ]
      },
      {
        "pt": "É longe daqui?",
        "fixed": "Is it far",
        "variable": "from here?",
        "extra": "",
        "distractors": [
          "to go",
          "menu"
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "Local",
        "en": "Hello! Can I help you?",
        "pt": "Olá! Posso te ajudar?",
        "options": [
          {
            "en": "Excuse me, where is the subway?",
            "correct": true
          },
          {
            "en": "Two tickets, please.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Local",
        "en": "Go straight and turn left. About three minutes.",
        "pt": "Siga em frente e vire à esquerda. Cerca de três minutos.",
        "options": [
          {
            "en": "Thank you so much!",
            "correct": true
          },
          {
            "en": "I have a headache.",
            "correct": false
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "level": 1,
    "category": "Cafeteria",
    "emoji": "☕",
    "title": "Pedir Café e Lanches",
    "phrases": [
      {
        "en": "Can I have a coffee, please?",
        "pt": "Pode me ver um café, por favor?",
        "distractor": "Onde fica o banheiro?",
        "emoji": "☕",
        "tip": "Muito mais educado do que 'I want...'."
      },
      {
        "en": "I'd like a medium coffee.",
        "pt": "Eu gostaria de um café médio.",
        "distractor": "Eu quero pagar em dinheiro.",
        "emoji": "🥤",
        "tip": "Small (pequeno), Medium (médio), Large (grande)."
      },
      {
        "en": "To go, please.",
        "pt": "Para viagem, por favor.",
        "distractor": "Para comer aqui.",
        "emoji": "🛍️",
        "tip": "Para comer no local: 'For here, please.'"
      },
      {
        "en": "Can I pay by card?",
        "pt": "Posso pagar no cartão?",
        "distractor": "A conta, por favor.",
        "emoji": "💳",
        "tip": "Dinheiro em espécie = cash."
      }
    ],
    "builder": [
      {
        "pt": "Pode me ver um café para viagem?",
        "fixed": "Can I have",
        "variable": "a coffee",
        "extra": "to go?",
        "distractors": [
          "far",
          "passport"
        ]
      },
      {
        "pt": "Posso pagar no cartão?",
        "fixed": "Can I pay",
        "variable": "by card?",
        "extra": "",
        "distractors": [
          "left",
          "hotel"
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "Barista",
        "en": "Hi! What can I get for you?",
        "pt": "Oi! O que posso servir para você?",
        "options": [
          {
            "en": "Can I have a medium coffee, please?",
            "correct": true
          },
          {
            "en": "I'm here on vacation.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Barista",
        "en": "For here or to go?",
        "pt": "Para comer aqui ou para viagem?",
        "options": [
          {
            "en": "To go, please. Can I pay by card?",
            "correct": true
          },
          {
            "en": "Nice to meet you!",
            "correct": false
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "level": 1,
    "category": "Socorro",
    "emoji": "🆘",
    "title": "Frases de Socorro",
    "phrases": [
      {
        "en": "Sorry, I didn't catch that.",
        "pt": "Desculpa, não entendi o que disse.",
        "distractor": "Eu falo inglês muito bem.",
        "emoji": "👂",
        "tip": "Soa muito mais natural que 'I don't understand'."
      },
      {
        "en": "Could you repeat that, please?",
        "pt": "Poderia repetir, por favor?",
        "distractor": "Poderia me levar ao hotel?",
        "emoji": "🔁",
        "tip": "Versão curta: 'One more time, please?'"
      },
      {
        "en": "Could you speak slower?",
        "pt": "Poderia falar mais devagar?",
        "distractor": "Poderia falar mais alto?",
        "emoji": "🐢",
        "tip": "Combine com 'My English is still basic.'"
      },
      {
        "en": "Could you help me?",
        "pt": "Você poderia me ajudar?",
        "distractor": "Você está livre hoje?",
        "emoji": "🙋",
        "tip": "Funciona em lojas, ruas, aeroportos e hotéis."
      }
    ],
    "builder": [
      {
        "pt": "Poderia falar mais devagar, por favor?",
        "fixed": "Could you",
        "variable": "speak slower",
        "extra": "please?",
        "distractors": [
          "ticket",
          "bread"
        ]
      },
      {
        "pt": "Você poderia me ajudar?",
        "fixed": "Could you",
        "variable": "help me?",
        "extra": "",
        "distractors": [
          "card",
          "left"
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "Atendente",
        "en": "Your gate is B12, boarding starts at 3:15.",
        "pt": "Seu portão é o B12, o embarque começa às 15h15.",
        "options": [
          {
            "en": "Sorry, I didn't catch that. Could you speak slower?",
            "correct": true
          },
          {
            "en": "Keep the change.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Atendente",
        "en": "Sure. Gate B-12. Boarding at 3:15.",
        "pt": "Claro. Portão B-12. Embarque às 15h15.",
        "options": [
          {
            "en": "Got it! Thank you so much!",
            "correct": true
          },
          {
            "en": "No onions, please.",
            "correct": false
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "level": 1,
    "category": "Supermercado",
    "emoji": "🛒",
    "title": "Compras Básicas",
    "phrases": [
      {
        "en": "How much is this?",
        "pt": "Quanto custa isso?",
        "distractor": "Onde fica a saída?",
        "emoji": "🏷️",
        "tip": "No plural (vários itens): 'How much are these?'"
      },
      {
        "en": "Where can I find the bread?",
        "pt": "Onde eu encontro o pão?",
        "distractor": "Você tem outro tamanho?",
        "emoji": "🍞",
        "tip": "Útil para achar produtos nos corredores."
      },
      {
        "en": "I'm just looking, thanks.",
        "pt": "Estou só dando uma olhada, obrigado.",
        "distractor": "Quero devolver isso.",
        "emoji": "👀",
        "tip": "Essencial quando um vendedor oferece ajuda."
      },
      {
        "en": "Keep the change.",
        "pt": "Pode ficar com o troco.",
        "distractor": "Preciso de uma sacola.",
        "emoji": "💵",
        "tip": "Muito usado ao pagar em dinheiro."
      }
    ],
    "builder": [
      {
        "pt": "Onde eu encontro o pão?",
        "fixed": "Where can I find",
        "variable": "the bread?",
        "extra": "",
        "distractors": [
          "flight",
          "fever"
        ]
      },
      {
        "pt": "Quanto custa isso?",
        "fixed": "How much",
        "variable": "is this?",
        "extra": "",
        "distractors": [
          "to go",
          "window"
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "Funcionário",
        "en": "Hi! Can I help you find something?",
        "pt": "Oi! Posso ajudar a encontrar algo?",
        "options": [
          {
            "en": "Where can I find the bread?",
            "correct": true
          },
          {
            "en": "What's the Wi-Fi password?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Funcionário",
        "en": "It's in aisle 4, on your right.",
        "pt": "Fica no corredor 4, à sua direita.",
        "options": [
          {
            "en": "Thanks! And how much is this water?",
            "correct": true
          },
          {
            "en": "I'm allergic to nuts.",
            "correct": false
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "level": 2,
    "category": "Aeroporto",
    "emoji": "✈️",
    "title": "Check-in e Embarque",
    "phrases": [
      {
        "en": "I'd like to check in.",
        "pt": "Eu gostaria de fazer o check-in.",
        "distractor": "Meu voo atrasou.",
        "emoji": "🧳",
        "tip": "Tenha em mãos o passaporte (passport) e a passagem."
      },
      {
        "en": "Where is gate B12?",
        "pt": "Onde fica o portão B12?",
        "distractor": "Onde pego minha mala?",
        "emoji": "🚪",
        "tip": "Gate = portão de embarque."
      },
      {
        "en": "Can I have a window seat?",
        "pt": "Posso ficar no assento da janela?",
        "distractor": "Posso despachar esta mala?",
        "emoji": "🪟",
        "tip": "Corredor = aisle seat (pronuncia-se áil)."
      },
      {
        "en": "Is my flight on time?",
        "pt": "Meu voo está no horário?",
        "distractor": "Qual é o número do voo?",
        "emoji": "⏱️",
        "tip": "Atrasado = delayed; Cancelado = canceled."
      }
    ],
    "builder": [
      {
        "pt": "Onde fica o portão B12?",
        "fixed": "Where is",
        "variable": "gate B12?",
        "extra": "",
        "distractors": [
          "bread",
          "check"
        ]
      },
      {
        "pt": "Posso ficar no assento da janela?",
        "fixed": "Can I have",
        "variable": "a window seat?",
        "extra": "",
        "distractors": [
          "towels",
          "cold"
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "Atendente",
        "en": "Good morning! Window or aisle seat?",
        "pt": "Bom dia! Assento na janela ou corredor?",
        "options": [
          {
            "en": "Can I have a window seat, please?",
            "correct": true
          },
          {
            "en": "A table for two, please.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Atendente",
        "en": "Sure! Here is your boarding pass. Gate 14.",
        "pt": "Claro! Aqui está seu cartão de embarque. Portão 14.",
        "options": [
          {
            "en": "Thank you! Is my flight on time?",
            "correct": true
          },
          {
            "en": "It's a bit too tight.",
            "correct": false
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "level": 2,
    "category": "Imigração",
    "emoji": "🛂",
    "title": "Controle de Passaporte",
    "phrases": [
      {
        "en": "Here is my passport.",
        "pt": "Aqui está o meu passaporte.",
        "distractor": "Aqui está a minha nota fiscal.",
        "emoji": "📘",
        "tip": "Frase universal ao chegar no guichê."
      },
      {
        "en": "I'm here on vacation.",
        "pt": "Estou aqui de férias.",
        "distractor": "Estou aqui a trabalho.",
        "emoji": "🏖️",
        "tip": "A trabalho = 'I'm here on business.'"
      },
      {
        "en": "I'm staying for ten days.",
        "pt": "Vou ficar por dez dias.",
        "distractor": "Cheguei ontem à noite.",
        "emoji": "📅",
        "tip": "One week (uma semana), two weeks (duas semanas)."
      },
      {
        "en": "I'm staying at the Central Hotel.",
        "pt": "Estou hospedado no Central Hotel.",
        "distractor": "Vou para o aeroporto agora.",
        "emoji": "🏨",
        "tip": "Tenha o endereço salvo no celular para mostrar."
      }
    ],
    "builder": [
      {
        "pt": "Vou ficar por dez dias.",
        "fixed": "I'm staying for",
        "variable": "ten days.",
        "extra": "",
        "distractors": [
          "menu",
          "left"
        ]
      },
      {
        "pt": "Estou aqui de férias.",
        "fixed": "I'm here",
        "variable": "on vacation.",
        "extra": "",
        "distractors": [
          "receipt",
          "coffee"
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "Oficial",
        "en": "Passport, please. What is the purpose of your visit?",
        "pt": "Passaporte, por favor. Qual o motivo da sua visita?",
        "options": [
          {
            "en": "Here is my passport. I'm here on vacation.",
            "correct": true
          },
          {
            "en": "Can I try this on?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Oficial",
        "en": "How long are you staying?",
        "pt": "Quanto tempo você vai ficar?",
        "options": [
          {
            "en": "I'm staying for ten days.",
            "correct": true
          },
          {
            "en": "You're breaking up.",
            "correct": false
          }
        ]
      }
    ]
  },
  {
    "id": 8,
    "level": 2,
    "category": "Transporte",
    "emoji": "🚕",
    "title": "Táxi, Uber e Ônibus",
    "phrases": [
      {
        "en": "Could you take me to the hotel?",
        "pt": "Poderia me levar para o hotel?",
        "distractor": "Quanto custa o ingresso?",
        "emoji": "🚖",
        "tip": "Funciona para táxis e motoristas de aplicativo."
      },
      {
        "en": "Does this bus go to downtown?",
        "pt": "Esse ônibus vai para o centro?",
        "distractor": "Esse ônibus está atrasado?",
        "emoji": "🚌",
        "tip": "Também vale para trem (train) ou metrô (subway)."
      },
      {
        "en": "You can stop right here.",
        "pt": "Pode parar bem aqui.",
        "distractor": "Pode ir mais rápido.",
        "emoji": "🛑",
        "tip": "Versão rápida: 'Right here is fine, thanks.'"
      },
      {
        "en": "How long does it take?",
        "pt": "Quanto tempo leva?",
        "distractor": "Quantos quilômetros são?",
        "emoji": "⏳",
        "tip": "Útil para saber o tempo de trajeto."
      }
    ],
    "builder": [
      {
        "pt": "Poderia me levar para o aeroporto?",
        "fixed": "Could you take me to",
        "variable": "the airport?",
        "extra": "",
        "distractors": [
          "pasta",
          "fever"
        ]
      },
      {
        "pt": "Pode parar bem aqui.",
        "fixed": "You can stop",
        "variable": "right here.",
        "extra": "",
        "distractors": [
          "onions",
          "card"
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "Motorista",
        "en": "Hi! Where are we going today?",
        "pt": "Oi! Para onde vamos hoje?",
        "options": [
          {
            "en": "Could you take me to the Central Hotel, please?",
            "correct": true
          },
          {
            "en": "I'd like to return this.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Motorista",
        "en": "Sure! Do you want me to drop you at the main door?",
        "pt": "Claro! Quer que eu te deixe na porta principal?",
        "options": [
          {
            "en": "Yes, you can stop right here. Thanks!",
            "correct": true
          },
          {
            "en": "What do you recommend?",
            "correct": false
          }
        ]
      }
    ]
  },
  {
    "id": 9,
    "level": 2,
    "category": "Hotel",
    "emoji": "🏨",
    "title": "Check-in e Estadia",
    "phrases": [
      {
        "en": "I have a reservation under Silva.",
        "pt": "Tenho uma reserva no nome de Silva.",
        "distractor": "Quero cancelar minha reserva.",
        "emoji": "🛎️",
        "tip": "Diga seu último sobrenome logo após 'under'."
      },
      {
        "en": "What's the Wi-Fi password?",
        "pt": "Qual é a senha do Wi-Fi?",
        "distractor": "O Wi-Fi está funcionando?",
        "emoji": "📶",
        "tip": "Password = senha."
      },
      {
        "en": "What time is breakfast?",
        "pt": "Que horas é o café da manhã?",
        "distractor": "Onde fica o restaurante?",
        "emoji": "🥐",
        "tip": "Check-out = horário de saída."
      },
      {
        "en": "Could I get extra towels?",
        "pt": "Poderia me trazer toalhas extras?",
        "distractor": "A chave não abre a porta.",
        "emoji": "🧺",
        "tip": "Pillow = travesseiro; blanket = cobertor."
      }
    ],
    "builder": [
      {
        "pt": "Que horas é o café da manhã?",
        "fixed": "What time is",
        "variable": "breakfast?",
        "extra": "",
        "distractors": [
          "bus",
          "police"
        ]
      },
      {
        "pt": "Qual é a senha do Wi-Fi?",
        "fixed": "What's the",
        "variable": "Wi-Fi password?",
        "extra": "",
        "distractors": [
          "fitting",
          "check"
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "Recepção",
        "en": "Welcome to our hotel! How can I help you?",
        "pt": "Bem-vindo ao nosso hotel! Como posso ajudar?",
        "options": [
          {
            "en": "Hi, I have a reservation under Silva.",
            "correct": true
          },
          {
            "en": "I lost my passport.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Recepção",
        "en": "Great, you're in room 302. Here is your key.",
        "pt": "Ótimo, você está no quarto 302. Aqui está sua chave.",
        "options": [
          {
            "en": "Thanks! What's the Wi-Fi password?",
            "correct": true
          },
          {
            "en": "Let's grab a coffee!",
            "correct": false
          }
        ]
      }
    ]
  },
  {
    "id": 10,
    "level": 2,
    "category": "Turismo",
    "emoji": "🎟️",
    "title": "Comprar Ingressos",
    "phrases": [
      {
        "en": "Two tickets, please.",
        "pt": "Dois ingressos, por favor.",
        "distractor": "Duas mesas, por favor.",
        "emoji": "🎫",
        "tip": "One adult, one child (um adulto, uma criança)."
      },
      {
        "en": "What time do you close?",
        "pt": "Que horas vocês fecham?",
        "distractor": "Que horas começa o show?",
        "emoji": "🕒",
        "tip": "Abrir = open ('What time do you open?')."
      },
      {
        "en": "Can I take pictures here?",
        "pt": "Posso tirar fotos aqui?",
        "distractor": "Posso entrar com mochila?",
        "emoji": "📸",
        "tip": "No flash = sem flash."
      },
      {
        "en": "Is there a student discount?",
        "pt": "Tem desconto para estudante?",
        "distractor": "Aceita cartão de crédito?",
        "emoji": "🎓",
        "tip": "Discount = desconto."
      }
    ],
    "builder": [
      {
        "pt": "Dois ingressos, por favor.",
        "fixed": "Can I have",
        "variable": "two tickets",
        "extra": "please?",
        "distractors": [
          "fever",
          "left"
        ]
      },
      {
        "pt": "Que horas vocês fecham?",
        "fixed": "What time",
        "variable": "do you close?",
        "extra": "",
        "distractors": [
          "bread",
          "hear"
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "Bilheteria",
        "en": "Hello! Welcome to the Art Museum.",
        "pt": "Olá! Bem-vindo ao Museu de Arte.",
        "options": [
          {
            "en": "Hi, two tickets, please.",
            "correct": true
          },
          {
            "en": "Do you have something for a cold?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Bilheteria",
        "en": "That's thirty dollars. Enjoy your visit!",
        "pt": "São trinta dólares. Aproveite sua visita!",
        "options": [
          {
            "en": "Thank you! What time do you close?",
            "correct": true
          },
          {
            "en": "I'll call you back.",
            "correct": false
          }
        ]
      }
    ]
  },
  {
    "id": 11,
    "level": 3,
    "category": "Restaurante",
    "emoji": "🍽️",
    "title": "Chegada e Pedido",
    "phrases": [
      {
        "en": "A table for two, please.",
        "pt": "Uma mesa para dois, por favor.",
        "distractor": "A conta, por favor.",
        "emoji": "🪑",
        "tip": "Diga logo na entrada do restaurante."
      },
      {
        "en": "Can I see the menu?",
        "pt": "Posso ver o cardápio?",
        "distractor": "Onde fica o banheiro?",
        "emoji": "📜",
        "tip": "Muitos lugares dizem 'Here's the menu.'"
      },
      {
        "en": "What do you recommend?",
        "pt": "O que você recomenda?",
        "distractor": "Quanto tempo demora?",
        "emoji": "👨‍🍳",
        "tip": "Ótima frase quando o cardápio é confuso."
      },
      {
        "en": "I'll have the pasta.",
        "pt": "Eu vou querer a massa.",
        "distractor": "Eu não gostei da comida.",
        "emoji": "🍝",
        "tip": "'I'll have...' é a forma mais natural de pedir comida."
      }
    ],
    "builder": [
      {
        "pt": "Eu vou querer a massa, por favor.",
        "fixed": "I'll have",
        "variable": "the pasta",
        "extra": "please.",
        "distractors": [
          "gate",
          "bus"
        ]
      },
      {
        "pt": "Uma mesa para dois, por favor.",
        "fixed": "A table for",
        "variable": "two,",
        "extra": "please.",
        "distractors": [
          "towels",
          "cold"
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "Garçom",
        "en": "Good evening! Are you ready to order?",
        "pt": "Boa noite! Prontos para fazer o pedido?",
        "options": [
          {
            "en": "Yes. What do you recommend?",
            "correct": true
          },
          {
            "en": "Where is the fitting room?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Garçom",
        "en": "The pasta is very popular tonight.",
        "pt": "A massa está muito pedida hoje à noite.",
        "options": [
          {
            "en": "Okay, I'll have the pasta, please.",
            "correct": true
          },
          {
            "en": "Here is my receipt.",
            "correct": false
          }
        ]
      }
    ]
  },
  {
    "id": 12,
    "level": 3,
    "category": "Restaurante",
    "emoji": "🧾",
    "title": "Restrições e Conta",
    "phrases": [
      {
        "en": "I'm allergic to nuts.",
        "pt": "Sou alérgico(a) a nozes.",
        "distractor": "Eu adoro nozes.",
        "emoji": "⚠️",
        "tip": "Milk (leite), shrimp (camarão), gluten (glúten)."
      },
      {
        "en": "No onions, please.",
        "pt": "Sem cebola, por favor.",
        "distractor": "Com bastante cebola.",
        "emoji": "🧅",
        "tip": "Curto, direto e super usado por nativos."
      },
      {
        "en": "Can we have the check, please?",
        "pt": "Pode trazer a conta, por favor?",
        "distractor": "Pode trazer o cardápio?",
        "emoji": "💳",
        "tip": "No Reino Unido usa-se muito 'the bill'."
      },
      {
        "en": "Is service included?",
        "pt": "O serviço está incluído?",
        "distractor": "O Wi-Fi é gratuito?",
        "emoji": "💵",
        "tip": "Gorjeta = tip."
      }
    ],
    "builder": [
      {
        "pt": "Sem cebola, por favor.",
        "fixed": "No",
        "variable": "onions,",
        "extra": "please.",
        "distractors": [
          "flight",
          "street"
        ]
      },
      {
        "pt": "Pode trazer a conta, por favor?",
        "fixed": "Can we have",
        "variable": "the check,",
        "extra": "please?",
        "distractors": [
          "passport",
          "jacket"
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "Garçom",
        "en": "Did you enjoy your meal?",
        "pt": "Vocês gostaram da refeição?",
        "options": [
          {
            "en": "Yes, it was great! Can we have the check, please?",
            "correct": true
          },
          {
            "en": "I have a fever.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Garçom",
        "en": "Of course, here is your check.",
        "pt": "Claro, aqui está a sua conta.",
        "options": [
          {
            "en": "Thank you. Is service included?",
            "correct": true
          },
          {
            "en": "Hold on a second.",
            "correct": false
          }
        ]
      }
    ]
  },
  {
    "id": 13,
    "level": 3,
    "category": "Loja",
    "emoji": "👕",
    "title": "Experimentar e Comprar",
    "phrases": [
      {
        "en": "Can I try this on?",
        "pt": "Posso experimentar isso?",
        "distractor": "Posso trocar isso?",
        "emoji": "👗",
        "tip": "Try on = provar roupas ou calçados."
      },
      {
        "en": "Where is the fitting room?",
        "pt": "Onde fica o provador?",
        "distractor": "Onde fica o caixa?",
        "emoji": "🚪",
        "tip": "Também chamado de changing room."
      },
      {
        "en": "Do you have this in medium?",
        "pt": "Você tem isso no médio?",
        "distractor": "Você tem isso em azul?",
        "emoji": "📏",
        "tip": "Small (P), Medium (M), Large (G)."
      },
      {
        "en": "It's a bit too tight.",
        "pt": "Está um pouco apertado.",
        "distractor": "Serviu perfeitamente.",
        "emoji": "🤏",
        "tip": "It fits great! = Serviu perfeitamente!"
      }
    ],
    "builder": [
      {
        "pt": "Você tem isso no médio?",
        "fixed": "Do you have this",
        "variable": "in medium?",
        "extra": "",
        "distractors": [
          "subway",
          "coffee"
        ]
      },
      {
        "pt": "Posso experimentar isso?",
        "fixed": "Can I",
        "variable": "try this on?",
        "extra": "",
        "distractors": [
          "check in",
          "call back"
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "Vendedor",
        "en": "Let me know if you need any help!",
        "pt": "Me avise se precisar de ajuda!",
        "options": [
          {
            "en": "Excuse me, can I try this on?",
            "correct": true
          },
          {
            "en": "Is my flight on time?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Vendedor",
        "en": "Sure! The fitting room is right over there. How does it fit?",
        "pt": "Claro! O provador é bem ali. Como serviu?",
        "options": [
          {
            "en": "It's a bit too tight. Do you have this in large?",
            "correct": true
          },
          {
            "en": "Please call the police.",
            "correct": false
          }
        ]
      }
    ]
  },
  {
    "id": 14,
    "level": 3,
    "category": "Farmácia",
    "emoji": "💊",
    "title": "Sintomas Simples",
    "phrases": [
      {
        "en": "I have a headache.",
        "pt": "Estou com dor de cabeça.",
        "distractor": "Estou com fome.",
        "emoji": "🤕",
        "tip": "Stomachache (estômago), sore throat (garganta)."
      },
      {
        "en": "I have a fever.",
        "pt": "Estou com febre.",
        "distractor": "Estou com alergia.",
        "emoji": "🤒",
        "tip": "Cough = tosse; cold = resfriado."
      },
      {
        "en": "Do you have something for a cold?",
        "pt": "Você tem algo para resfriado?",
        "distractor": "Preciso de uma receita médica.",
        "emoji": "🤧",
        "tip": "Ótimo para pedir remédios sem receita."
      },
      {
        "en": "How often should I take it?",
        "pt": "De quanto em quanto tempo devo tomar?",
        "distractor": "Quanto custa esse remédio?",
        "emoji": "⏰",
        "tip": "Ex: 'Every eight hours' (A cada 8 horas)."
      }
    ],
    "builder": [
      {
        "pt": "Você tem algo para dor de cabeça?",
        "fixed": "Do you have something for",
        "variable": "a headache?",
        "extra": "",
        "distractors": [
          "breakfast",
          "tickets"
        ]
      },
      {
        "pt": "Estou com febre.",
        "fixed": "I have",
        "variable": "a fever.",
        "extra": "",
        "distractors": [
          "the menu",
          "a seat"
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "Farmacêutico",
        "en": "Hi, how can I help you today?",
        "pt": "Oi, como posso ajudar hoje?",
        "options": [
          {
            "en": "I have a headache. Do you have something for it?",
            "correct": true
          },
          {
            "en": "How was your weekend?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Farmacêutico",
        "en": "Yes, these tablets work really well.",
        "pt": "Sim, estes comprimidos funcionam muito bem.",
        "options": [
          {
            "en": "Thanks! How often should I take them?",
            "correct": true
          },
          {
            "en": "To go, please.",
            "correct": false
          }
        ]
      }
    ]
  },
  {
    "id": 15,
    "level": 3,
    "category": "Pós-venda",
    "emoji": "🔄",
    "title": "Trocas e Problemas",
    "phrases": [
      {
        "en": "I'd like to return this.",
        "pt": "Eu gostaria de devolver isso.",
        "distractor": "Eu gostaria de comprar isso.",
        "emoji": "📦",
        "tip": "Trocar = exchange ('I'd like to exchange this.')."
      },
      {
        "en": "It doesn't work.",
        "pt": "Não está funcionando.",
        "distractor": "Está muito caro.",
        "emoji": "⚡",
        "tip": "Quebrado = It's broken."
      },
      {
        "en": "Here is my receipt.",
        "pt": "Aqui está a minha nota fiscal.",
        "distractor": "Aqui está o meu cartão.",
        "emoji": "🧾",
        "tip": "Receipt (pronuncia-se rissít)."
      },
      {
        "en": "Can I get a refund?",
        "pt": "Posso pedir reembolso?",
        "distractor": "Tem desconto?",
        "emoji": "💰",
        "tip": "Refund = devolução do dinheiro."
      }
    ],
    "builder": [
      {
        "pt": "Eu gostaria de devolver isso.",
        "fixed": "I'd like to",
        "variable": "return this.",
        "extra": "",
        "distractors": [
          "turn left",
          "grab"
        ]
      },
      {
        "pt": "Posso pedir reembolso?",
        "fixed": "Can I get",
        "variable": "a refund?",
        "extra": "",
        "distractors": [
          "onions",
          "gate"
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "Atendente",
        "en": "Hello! What seems to be the problem?",
        "pt": "Olá! Qual parece ser o problema?",
        "options": [
          {
            "en": "I'd like to return this charger. It doesn't work.",
            "correct": true
          },
          {
            "en": "Can I take pictures here?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Atendente",
        "en": "No problem! Do you have your receipt?",
        "pt": "Sem problemas! Você tem a nota fiscal?",
        "options": [
          {
            "en": "Yes, here is my receipt. Can I get a refund?",
            "correct": true
          },
          {
            "en": "What time is breakfast?",
            "correct": false
          }
        ]
      }
    ]
  },
  {
    "id": 16,
    "level": 4,
    "category": "Dia a Dia",
    "emoji": "☀️",
    "title": "Conversa Casual (Small Talk)",
    "phrases": [
      {
        "en": "How's it going?",
        "pt": "Como vão as coisas? / Tudo bem?",
        "distractor": "Para onde você vai?",
        "emoji": "😄",
        "tip": "Resposta natural: 'Pretty good, and you?'"
      },
      {
        "en": "It's really hot today!",
        "pt": "Está muito quente hoje!",
        "distractor": "Está chovendo muito.",
        "emoji": "🥵",
        "tip": "Clima é o quebra-gelo número 1 em inglês."
      },
      {
        "en": "How was your weekend?",
        "pt": "Como foi o seu fim de semana?",
        "distractor": "O que você faz no trabalho?",
        "emoji": "🌴",
        "tip": "Resposta: 'It was great, very relaxing.'"
      },
      {
        "en": "I really like your jacket!",
        "pt": "Gostei muito da sua jaqueta!",
        "distractor": "Onde você comprou isso?",
        "emoji": "🧥",
        "tip": "Elogios simples abrem conversas facilmente."
      }
    ],
    "builder": [
      {
        "pt": "Como foi o seu fim de semana?",
        "fixed": "How was your",
        "variable": "weekend?",
        "extra": "",
        "distractors": [
          "passport",
          "refund"
        ]
      },
      {
        "pt": "Gostei muito da sua jaqueta!",
        "fixed": "I really like",
        "variable": "your jacket!",
        "extra": "",
        "distractors": [
          "the bill",
          "the bus"
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "Colega",
        "en": "Hey! How's it going?",
        "pt": "Ei! Tudo bem?",
        "options": [
          {
            "en": "Pretty good! How was your weekend?",
            "correct": true
          },
          {
            "en": "Where is the nearest hospital?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Colega",
        "en": "It was great! By the way, I love your jacket.",
        "pt": "Foi ótimo! A propósito, adorei sua jaqueta.",
        "options": [
          {
            "en": "Thank you so much!",
            "correct": true
          },
          {
            "en": "I'm allergic to nuts.",
            "correct": false
          }
        ]
      }
    ]
  },
  {
    "id": 17,
    "level": 4,
    "category": "Amigos",
    "emoji": "🎉",
    "title": "Combinar Encontros",
    "phrases": [
      {
        "en": "Are you free on Friday?",
        "pt": "Você está livre na sexta?",
        "distractor": "Você trabalha na sexta?",
        "emoji": "📆",
        "tip": "Tonight (hoje à noite), tomorrow (amanhã)."
      },
      {
        "en": "Let's grab a coffee!",
        "pt": "Vamos tomar um café!",
        "distractor": "Eu não gosto de café.",
        "emoji": "☕",
        "tip": "'Grab' torna o convite super leve e informal."
      },
      {
        "en": "What time works for you?",
        "pt": "Qual horário fica bom para você?",
        "distractor": "Que horas você acorda?",
        "emoji": "🕓",
        "tip": "Muito usado tanto com amigos quanto no trabalho."
      },
      {
        "en": "Sounds good! See you then.",
        "pt": "Combinado! Até lá.",
        "distractor": "Desculpa, não posso ir.",
        "emoji": "👍",
        "tip": "Para recusar educadamente: 'Sorry, I can't make it.'"
      }
    ],
    "builder": [
      {
        "pt": "Vamos tomar um café!",
        "fixed": "Let's grab",
        "variable": "a coffee!",
        "extra": "",
        "distractors": [
          "check",
          "fever"
        ]
      },
      {
        "pt": "Qual horário fica bom para você?",
        "fixed": "What time",
        "variable": "works for you?",
        "extra": "",
        "distractors": [
          "is far",
          "to go"
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "Amigo",
        "en": "Hey! Long time no see!",
        "pt": "Ei! Quanto tempo!",
        "options": [
          {
            "en": "Are you free on Friday? Let's grab a coffee!",
            "correct": true
          },
          {
            "en": "Does this bus go downtown?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Amigo",
        "en": "Sure! Around 4 PM works for me.",
        "pt": "Claro! Por volta das 16h fica bom para mim.",
        "options": [
          {
            "en": "Sounds good! See you then.",
            "correct": true
          },
          {
            "en": "Keep the change.",
            "correct": false
          }
        ]
      }
    ]
  },
  {
    "id": 18,
    "level": 4,
    "category": "Trabalho",
    "emoji": "💼",
    "title": "Rotina e Reuniões",
    "phrases": [
      {
        "en": "I'm working on the report.",
        "pt": "Estou trabalhando no relatório.",
        "distractor": "Eu já terminei tudo.",
        "emoji": "💻",
        "tip": "Perfeito para reuniões diárias (dailies)."
      },
      {
        "en": "Could you give me a hand?",
        "pt": "Poderia me dar uma mãozinha?",
        "distractor": "Pode me ligar depois?",
        "emoji": "🤝",
        "tip": "Jeito amigável de pedir ajuda a um colega."
      },
      {
        "en": "I'll send it to you today.",
        "pt": "Vou te enviar isso hoje.",
        "distractor": "Eu não recebi o e-mail.",
        "emoji": "📧",
        "tip": "By the end of the day = até o fim do dia."
      },
      {
        "en": "Let me check and get back to you.",
        "pt": "Deixa eu checar e te retorno.",
        "distractor": "Eu sei a resposta exata.",
        "emoji": "🔎",
        "tip": "Salva você quando não sabe a resposta na hora."
      }
    ],
    "builder": [
      {
        "pt": "Vou te enviar o arquivo hoje.",
        "fixed": "I'll send you",
        "variable": "the file",
        "extra": "today.",
        "distractors": [
          "towels",
          "bread"
        ]
      },
      {
        "pt": "Poderia me dar uma mãozinha?",
        "fixed": "Could you",
        "variable": "give me a hand?",
        "extra": "",
        "distractors": [
          "try on",
          "stop"
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "Chefe",
        "en": "Hi! Do you have the numbers for the presentation?",
        "pt": "Oi! Você tem os números para a apresentação?",
        "options": [
          {
            "en": "Let me check and get back to you.",
            "correct": true
          },
          {
            "en": "No onions, please.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Chefe",
        "en": "Great! When can you send them?",
        "pt": "Ótimo! Quando você pode enviar?",
        "options": [
          {
            "en": "I'll send it to you today.",
            "correct": true
          },
          {
            "en": "I'm staying for ten days.",
            "correct": false
          }
        ]
      }
    ]
  },
  {
    "id": 19,
    "level": 4,
    "category": "Chamadas",
    "emoji": "📞",
    "title": "Telefone e Vídeo",
    "phrases": [
      {
        "en": "Can you hear me?",
        "pt": "Você consegue me ouvir?",
        "distractor": "Você consegue me ver?",
        "emoji": "🎧",
        "tip": "Resposta: 'Yes, loud and clear!' (Alto e claro)."
      },
      {
        "en": "You're breaking up.",
        "pt": "Seu áudio está cortando.",
        "distractor": "A ligação caiu.",
        "emoji": "📡",
        "tip": "Your screen froze = Sua tela congelou."
      },
      {
        "en": "Hold on a second, please.",
        "pt": "Só um segundo, por favor.",
        "distractor": "Ligue mais tarde.",
        "emoji": "✋",
        "tip": "Também muito usado: 'Just a moment.'"
      },
      {
        "en": "I'll call you back.",
        "pt": "Eu te ligo de volta.",
        "distractor": "Estou ocupado agora.",
        "emoji": "📲",
        "tip": "Encerramento rápido: 'Talk to you soon!'"
      }
    ],
    "builder": [
      {
        "pt": "Só um segundo, por favor.",
        "fixed": "Hold on",
        "variable": "a second,",
        "extra": "please.",
        "distractors": [
          "menu",
          "gate"
        ]
      },
      {
        "pt": "Você consegue me ouvir?",
        "fixed": "Can you",
        "variable": "hear me?",
        "extra": "",
        "distractors": [
          "check in",
          "jacket"
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "Contato",
        "en": "Hello? Can you hear me?",
        "pt": "Alô? Você consegue me ouvir?",
        "options": [
          {
            "en": "Sorry, you're breaking up. Hold on a second!",
            "correct": true
          },
          {
            "en": "Two tickets, please.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Contato",
        "en": "Is it better now?",
        "pt": "Está melhor agora?",
        "options": [
          {
            "en": "Yes, loud and clear!",
            "correct": true
          },
          {
            "en": "It doesn't work.",
            "correct": false
          }
        ]
      }
    ]
  },
  {
    "id": 20,
    "level": 4,
    "category": "Emergências",
    "emoji": "🚨",
    "title": "Pedir Ajuda Urgente",
    "phrases": [
      {
        "en": "Help! I need a doctor.",
        "pt": "Socorro! Preciso de um médico.",
        "distractor": "Onde fica a farmácia?",
        "emoji": "🩺",
        "tip": "Call an ambulance! = Chame uma ambulância!"
      },
      {
        "en": "I lost my passport.",
        "pt": "Eu perdi meu passaporte.",
        "distractor": "Eu esqueci minha senha.",
        "emoji": "😰",
        "tip": "It was stolen = Foi roubado."
      },
      {
        "en": "Where is the nearest hospital?",
        "pt": "Onde fica o hospital mais próximo?",
        "distractor": "Onde fica o hotel?",
        "emoji": "🏥",
        "tip": "Police station = delegacia de polícia."
      },
      {
        "en": "Please call the police.",
        "pt": "Por favor, chame a polícia.",
        "distractor": "Por favor, chame um táxi.",
        "emoji": "🚓",
        "tip": "Frase direta para emergências reais."
      }
    ],
    "builder": [
      {
        "pt": "Eu perdi meu passaporte.",
        "fixed": "I lost",
        "variable": "my passport.",
        "extra": "",
        "distractors": [
          "coffee",
          "weekend"
        ]
      },
      {
        "pt": "Onde fica o hospital mais próximo?",
        "fixed": "Where is the",
        "variable": "nearest hospital?",
        "extra": "",
        "distractors": [
          "pasta",
          "receipt"
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "Local",
        "en": "Are you okay? What happened?",
        "pt": "Você está bem? O que aconteceu?",
        "options": [
          {
            "en": "I lost my passport. Where is the police station?",
            "correct": true
          },
          {
            "en": "Let's grab a coffee!",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Local",
        "en": "It's two blocks down this street. Do you need me to call them?",
        "pt": "Fica a dois quarteirões descendo esta rua. Quer que eu ligue para eles?",
        "options": [
          {
            "en": "Yes, please call the police. Thank you!",
            "correct": true
          },
          {
            "en": "Is service included?",
            "correct": false
          }
        ]
      }
    ]
  }
];
