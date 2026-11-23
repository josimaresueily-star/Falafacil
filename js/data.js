// Banco de Dados Completo v2: 4 Níveis, 20 Cenários e 200+ Frases Prontas
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
      },
      {
        "en": "Excuse me, can you help me?",
        "pt": "Com licença, você pode me ajudar?",
        "distractor": "",
        "emoji": "🙋",
        "tip": "Versão ainda mais educada: 'Could you help me?'"
      },
      {
        "en": "I'm lost. Can you help me?",
        "pt": "Estou perdido. Você pode me ajudar?",
        "distractor": "",
        "emoji": "🧭",
        "tip": "Direto ao ponto."
      },
      {
        "en": "Excuse me, sorry to bother you. I'm trying to find the subway station.",
        "pt": "Com licença, desculpe incomodar. Estou tentando encontrar a estação de metrô.",
        "distractor": "",
        "emoji": "🚇",
        "tip": "Sorry to bother you = desculpe incomodar."
      },
      {
        "en": "I'm trying to get to this hotel.",
        "pt": "Estou tentando chegar neste hotel.",
        "distractor": "",
        "emoji": "🏨",
        "tip": "Mostre o endereço no celular junto."
      },
      {
        "en": "I'm looking for a restaurant nearby.",
        "pt": "Estou procurando um restaurante por aqui perto.",
        "distractor": "",
        "emoji": "🍽️",
        "tip": "Nearby = por perto."
      },
      {
        "en": "Do you have any suggestions?",
        "pt": "Você tem alguma sugestão?",
        "distractor": "",
        "emoji": "💡",
        "tip": "Ou: 'Could you recommend a place?'"
      },
      {
        "en": "What kind of food do you like?",
        "pt": "Que tipo de comida você gosta?",
        "distractor": "",
        "emoji": "🍕",
        "tip": "Também usado: 'What do you have a taste for?'"
      },
      {
        "en": "I'd like to go to Central Park.",
        "pt": "Eu gostaria de ir ao Central Park.",
        "distractor": "",
        "emoji": "🌳",
        "tip": "Ou '...to the nearest subway station.'"
      },
      {
        "en": "How do I get to Times Square?",
        "pt": "Como eu chego à Times Square?",
        "distractor": "",
        "emoji": "🗺️",
        "tip": "How do I get to... = Como chego a..."
      },
      {
        "en": "How do I get to the nearest tube station?",
        "pt": "Como eu chego à estação de metrô mais próxima?",
        "distractor": "",
        "emoji": "🚇",
        "tip": "Em Londres, o metrô é chamado de 'tube'."
      },
      {
        "en": "Which subway line should I take?",
        "pt": "Qual linha de metrô devo pegar?",
        "distractor": "",
        "emoji": "🚆",
        "tip": "Subway line = linha de metrô."
      },
      {
        "en": "Where can I find an ATM?",
        "pt": "Onde posso encontrar um caixa eletrônico?",
        "distractor": "",
        "emoji": "🏧",
        "tip": "ATM = caixa eletrônico."
      },
      {
        "en": "Where can I find a cheap restaurant?",
        "pt": "Onde posso encontrar um restaurante barato?",
        "distractor": "",
        "emoji": "🍔",
        "tip": "Cheap = barato."
      },
      {
        "en": "Do you know where Central Park is?",
        "pt": "Você sabe onde fica o Central Park?",
        "distractor": "",
        "emoji": "📍",
        "tip": "Jeito educado de perguntar localização."
      },
      {
        "en": "Could you point me in the right direction?",
        "pt": "Você poderia me indicar a direção certa?",
        "distractor": "",
        "emoji": "👉",
        "tip": "Expressão super natural de nativos."
      },
      {
        "en": "Where am I on this map?",
        "pt": "Onde eu estou neste mapa?",
        "distractor": "",
        "emoji": "🗺️",
        "tip": "Útil com mapa físico ou no celular."
      },
      {
        "en": "Can I go there on foot?",
        "pt": "Posso ir a pé?",
        "distractor": "",
        "emoji": "🚶",
        "tip": "Também: 'Is it within walking distance?' / 'Can I walk there?'"
      },
      {
        "en": "Have a nice day.",
        "pt": "Tenha um bom dia.",
        "distractor": "",
        "emoji": "☀️",
        "tip": "Combine sempre com 'Thank you very much.'"
      },
      {
        "en": "The easiest way is...",
        "pt": "O caminho mais fácil é...",
        "distractor": "",
        "emoji": "🛣️",
        "tip": "O mais rápido = 'The quickest way is...'"
      },
      {
        "en": "Walk down Fifth Avenue and turn right.",
        "pt": "Caminhe pela Quinta Avenida e vire à direita.",
        "distractor": "",
        "emoji": "➡️",
        "tip": "Walk down = descer/caminhar pela rua."
      },
      {
        "en": "Walk straight down Oxford Street.",
        "pt": "Ande reto pela Oxford Street.",
        "distractor": "",
        "emoji": "⬆️",
        "tip": "Straight down = reto pela rua."
      },
      {
        "en": "Go down the stairs.",
        "pt": "Desça as escadas.",
        "distractor": "",
        "emoji": "🪜",
        "tip": "Subir a ladeira = 'Go up the hill.'"
      },
      {
        "en": "Go through the park.",
        "pt": "Passe por dentro do parque.",
        "distractor": "",
        "emoji": "🌲",
        "tip": "Dar a volta = 'Go around the park.'"
      },
      {
        "en": "Go over the bridge.",
        "pt": "Passe por cima da ponte.",
        "distractor": "",
        "emoji": "🌉",
        "tip": "Por baixo = 'Go under the bridge.'"
      },
      {
        "en": "Turn right.",
        "pt": "Vire à direita.",
        "distractor": "",
        "emoji": "↪️",
        "tip": "Esquerda = 'Turn left.'"
      },
      {
        "en": "Head to the museum and you'll see the hotel on the left.",
        "pt": "Vá em direção ao museu e você verá o hotel à esquerda.",
        "distractor": "",
        "emoji": "🏛️",
        "tip": "Head to = ir em direção a."
      },
      {
        "en": "Keep going.",
        "pt": "Continue indo.",
        "distractor": "",
        "emoji": "➡️",
        "tip": "Ou: 'Continue in that direction.'"
      },
      {
        "en": "Follow the river.",
        "pt": "Siga o rio.",
        "distractor": "",
        "emoji": "🌊",
        "tip": "Follow = seguir."
      },
      {
        "en": "It's next to the bank.",
        "pt": "É ao lado do banco.",
        "distractor": "",
        "emoji": "🏦",
        "tip": "Também: beside, near, between, in front of, across from, behind."
      },
      {
        "en": "It's on the corner.",
        "pt": "É na esquina.",
        "distractor": "",
        "emoji": "📐",
        "tip": "On the corner = na esquina."
      },
      {
        "en": "Sorry, I'm not from here.",
        "pt": "Desculpe, não sou daqui.",
        "distractor": "",
        "emoji": "🤷",
        "tip": "Ou: 'Sorry, I don't know.' / 'Sorry, I can't help you.'"
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
      },
      {
        "en": "Where can I find rice?",
        "pt": "Onde posso encontrar arroz?",
        "distractor": "",
        "emoji": "🍚",
        "tip": "Ou 'Where can I find lactose-free milk?' (leite sem lactose)."
      },
      {
        "en": "It's on aisle six.",
        "pt": "Está no corredor 6.",
        "distractor": "",
        "emoji": "🛒",
        "tip": "Aisle (pronuncia-se áil) = corredor."
      },
      {
        "en": "Sorry, we don't carry passion fruit juice.",
        "pt": "Desculpe, não trabalhamos com suco de maracujá.",
        "distractor": "",
        "emoji": "🧃",
        "tip": "'Carry' em lojas significa vender/trabalhar com o produto."
      },
      {
        "en": "We don't carry this brand.",
        "pt": "Não trabalhamos com essa marca.",
        "distractor": "",
        "emoji": "🏷️",
        "tip": "Brand = marca."
      },
      {
        "en": "We are out of stock.",
        "pt": "Estamos sem estoque.",
        "distractor": "",
        "emoji": "📦",
        "tip": "Out of stock = esgotado."
      },
      {
        "en": "Did you find everything okay?",
        "pt": "Você encontrou tudo o que precisava?",
        "distractor": "",
        "emoji": "😊",
        "tip": "Responda: 'Yes, it was great.'"
      },
      {
        "en": "How would you like to pay?",
        "pt": "Como você gostaria de pagar?",
        "distractor": "",
        "emoji": "💳",
        "tip": "Pergunta padrão no caixa."
      },
      {
        "en": "With a credit card.",
        "pt": "Com cartão de crédito.",
        "distractor": "",
        "emoji": "💳",
        "tip": "Em dinheiro = 'In cash.'"
      },
      {
        "en": "Please sign here.",
        "pt": "Por favor, assine aqui.",
        "distractor": "",
        "emoji": "✍️",
        "tip": "Ou: 'Can you sign here?'"
      },
      {
        "en": "Would you like a bag?",
        "pt": "Você gostaria de uma sacola?",
        "distractor": "",
        "emoji": "🛍️",
        "tip": "Responda 'Yes, please.' ou 'No, thanks.'"
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
      },
      {
        "en": "Can I see your ticket and your passport, please?",
        "pt": "Posso ver sua passagem e seu passaporte, por favor?",
        "distractor": "",
        "emoji": "🛂",
        "tip": "Responda: 'Sure, here they are.'"
      },
      {
        "en": "Can I get a seat near the aisle?",
        "pt": "Posso pegar um assento perto do corredor?",
        "distractor": "",
        "emoji": "💺",
        "tip": "Aisle = corredor."
      },
      {
        "en": "I need to check in my luggage.",
        "pt": "Preciso despachar minha bagagem.",
        "distractor": "",
        "emoji": "🧳",
        "tip": "Check in luggage = despachar mala."
      },
      {
        "en": "Are you checking in your luggage or carry-on?",
        "pt": "Você vai despachar sua bagagem ou é bagagem de mão?",
        "distractor": "",
        "emoji": "🎒",
        "tip": "Carry-on = bagagem de mão."
      },
      {
        "en": "Where do I go next?",
        "pt": "Para onde eu vou agora?",
        "distractor": "",
        "emoji": "🧭",
        "tip": "Ótima frase após o check-in."
      },
      {
        "en": "Ladies and gentlemen, welcome aboard.",
        "pt": "Senhoras e senhores, bem-vindos a bordo.",
        "distractor": "",
        "emoji": "✈️",
        "tip": "Anúncio clássico no avião."
      },
      {
        "en": "Please stow your carry-on luggage in an overhead bin.",
        "pt": "Por favor, guarde sua bagagem de mão no compartimento superior.",
        "distractor": "",
        "emoji": "🧳",
        "tip": "Overhead bin = bagageiro acima do assento."
      },
      {
        "en": "Please take a seat and fasten your seatbelt.",
        "pt": "Por favor, sente-se e aperte o cinto de segurança.",
        "distractor": "",
        "emoji": "💺",
        "tip": "Fasten your seatbelt = aperte o cinto."
      },
      {
        "en": "Place electronic devices into airplane mode.",
        "pt": "Coloque os dispositivos eletrônicos no modo avião.",
        "distractor": "",
        "emoji": "📱",
        "tip": "Airplane mode = modo avião."
      },
      {
        "en": "Would you like something to drink?",
        "pt": "Você gostaria de algo para beber?",
        "distractor": "",
        "emoji": "🥤",
        "tip": "Responda 'A Coke, please.' ou 'Can I have some coffee, please?'"
      },
      {
        "en": "Thanks for flying with us.",
        "pt": "Obrigado por voar conosco.",
        "distractor": "",
        "emoji": "🛫",
        "tip": "Despedida da tripulação."
      },
      {
        "en": "Excuse me, where can I get a taxi?",
        "pt": "Com licença, onde posso pegar um táxi?",
        "distractor": "",
        "emoji": "🚕",
        "tip": "Útil logo ao desembarcar."
      },
      {
        "en": "Enjoy your trip!",
        "pt": "Aproveite sua viagem!",
        "distractor": "",
        "emoji": "🌍",
        "tip": "Responda: 'Thank you!'"
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
      },
      {
        "en": "Please wait behind the yellow line.",
        "pt": "Por favor, espere atrás da linha amarela.",
        "distractor": "",
        "emoji": "🟨",
        "tip": "Frase padrão na fila da imigração."
      },
      {
        "en": "Next!",
        "pt": "Próximo!",
        "distractor": "",
        "emoji": "👉",
        "tip": "Chamada do oficial no guichê."
      },
      {
        "en": "May I see your passport?",
        "pt": "Posso ver seu passaporte?",
        "distractor": "",
        "emoji": "🛂",
        "tip": "Também: 'Passport, please.' / 'Can I see your passport?'"
      },
      {
        "en": "Sure. Here it is.",
        "pt": "Claro. Aqui está.",
        "distractor": "",
        "emoji": "📘",
        "tip": "Resposta rápida ao entregar o documento."
      },
      {
        "en": "Why are you in the United States?",
        "pt": "Por que você está nos Estados Unidos?",
        "distractor": "",
        "emoji": "🇺🇸",
        "tip": "Ou apenas 'Why are you here?'"
      },
      {
        "en": "What's the purpose of your visit?",
        "pt": "Qual é o propósito da sua visita?",
        "distractor": "",
        "emoji": "❓",
        "tip": "Pergunta mais comum da imigração."
      },
      {
        "en": "Business or pleasure?",
        "pt": "Negócios ou lazer?",
        "distractor": "",
        "emoji": "💼",
        "tip": "Responda 'Vacation' ou 'Business'."
      },
      {
        "en": "How long are you staying here?",
        "pt": "Por quanto tempo você vai ficar aqui?",
        "distractor": "",
        "emoji": "📅",
        "tip": "Também: 'How long do you plan to stay?'"
      },
      {
        "en": "For fifteen days.",
        "pt": "Por 15 dias.",
        "distractor": "",
        "emoji": "🗓️",
        "tip": "7 dias = 'For seven days'; 3 meses = 'For three months.'"
      },
      {
        "en": "Can I see your tickets?",
        "pt": "Posso ver suas passagens?",
        "distractor": "",
        "emoji": "🎫",
        "tip": "Tenha a passagem de volta impressa ou no celular."
      },
      {
        "en": "Where are you coming from?",
        "pt": "De onde você está vindo?",
        "distractor": "",
        "emoji": "✈️",
        "tip": "Origem do seu voo."
      },
      {
        "en": "I'm from São Paulo, Brazil.",
        "pt": "Sou de São Paulo, Brasil.",
        "distractor": "",
        "emoji": "🇧🇷",
        "tip": "Diga cidade e país."
      },
      {
        "en": "Where are you going to stay?",
        "pt": "Onde você vai ficar hospedado?",
        "distractor": "",
        "emoji": "🏨",
        "tip": "Ou: 'Where are you staying?'"
      },
      {
        "en": "At a friend's house.",
        "pt": "Na casa de um amigo.",
        "distractor": "",
        "emoji": "🏠",
        "tip": "Ou 'At this hotel.'"
      },
      {
        "en": "What's your final destination?",
        "pt": "Qual é o seu destino final?",
        "distractor": "",
        "emoji": "📍",
        "tip": "Comum quando há conexão."
      },
      {
        "en": "Are you traveling alone?",
        "pt": "Você está viajando sozinho?",
        "distractor": "",
        "emoji": "👤",
        "tip": "Responda 'Yes, I am.' ou com quem está."
      },
      {
        "en": "No, I'm traveling with my husband.",
        "pt": "Não, estou viajando com meu marido.",
        "distractor": "",
        "emoji": "👫",
        "tip": "He's over there = Ele está logo ali."
      },
      {
        "en": "How much currency are you carrying?",
        "pt": "Quanto de dinheiro você está carregando?",
        "distractor": "",
        "emoji": "💵",
        "tip": "Currency = moeda / dinheiro em espécie."
      },
      {
        "en": "Welcome to America! Have a nice day.",
        "pt": "Bem-vindo à América! Tenha um bom dia.",
        "distractor": "",
        "emoji": "🎉",
        "tip": "Responda: 'Thank you, you too!'"
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
      },
      {
        "en": "Please wait to be seated.",
        "pt": "Por favor, aguarde para ser acomodado.",
        "distractor": "",
        "emoji": "🛎️",
        "tip": "Muito comum em placas na entrada de restaurantes."
      },
      {
        "en": "Wait in line.",
        "pt": "Espere na fila.",
        "distractor": "",
        "emoji": "🚶",
        "tip": "No Reino Unido também se diz 'Wait in the queue'."
      },
      {
        "en": "Party of how many?",
        "pt": "Mesa para quantas pessoas?",
        "distractor": "",
        "emoji": "👥",
        "tip": "'Party' aqui significa grupo de pessoas."
      },
      {
        "en": "Party of two.",
        "pt": "Mesa para dois.",
        "distractor": "",
        "emoji": "✌️",
        "tip": "Equivalente natural a 'Table for two.'"
      },
      {
        "en": "Can I have a napkin, please?",
        "pt": "Você pode me dar um guardanapo, por favor?",
        "distractor": "",
        "emoji": "🧻",
        "tip": "Napkin = guardanapo."
      },
      {
        "en": "Would you like something to drink?",
        "pt": "Você gostaria de algo para beber?",
        "distractor": "",
        "emoji": "🥤",
        "tip": "Primeira pergunta padrão do garçom."
      },
      {
        "en": "May I have a Coke, please?",
        "pt": "Posso pedir uma Coca, por favor?",
        "distractor": "",
        "emoji": "🥤",
        "tip": "Mais formal e educado; também vale 'May I have the menu, please?'."
      },
      {
        "en": "Could I have a Coke, please?",
        "pt": "Você pode me trazer uma Coca, por favor?",
        "distractor": "",
        "emoji": "🥤",
        "tip": "Can / Could I have... são super naturais."
      },
      {
        "en": "I'd like a Coke, please.",
        "pt": "Eu gostaria de uma Coca, por favor.",
        "distractor": "",
        "emoji": "🧊",
        "tip": "I'd like = contração de 'I would like'."
      },
      {
        "en": "I'll have a Coke, please.",
        "pt": "Eu vou querer uma Coca, por favor.",
        "distractor": "",
        "emoji": "🥤",
        "tip": "Forma mais direta e natural de fazer o pedido."
      },
      {
        "en": "I'll go with the fish.",
        "pt": "Eu vou ficar com o peixe.",
        "distractor": "",
        "emoji": "🐟",
        "tip": "'I'll go with...' = 'Vou escolher / ficar com...'."
      },
      {
        "en": "May I have some water, please?",
        "pt": "Posso pedir uma água, por favor?",
        "distractor": "",
        "emoji": "💧",
        "tip": "Para água da torneira (grátis nos EUA): 'tap water'."
      },
      {
        "en": "Can I have some tap water, please?",
        "pt": "Você pode me trazer água da torneira, por favor?",
        "distractor": "",
        "emoji": "🚰",
        "tip": "Nos EUA, água da torneira em restaurantes costuma ser gratuita."
      },
      {
        "en": "Are you ready to order, or do you need a few more minutes?",
        "pt": "Você está pronto para pedir ou precisa de mais alguns minutos?",
        "distractor": "",
        "emoji": "📋",
        "tip": "Pergunta clássica do garçom."
      },
      {
        "en": "I need a few more minutes, please.",
        "pt": "Eu preciso de mais alguns minutos, por favor.",
        "distractor": "",
        "emoji": "⏳",
        "tip": "Use quando ainda estiver olhando o cardápio."
      },
      {
        "en": "I'm not ready yet.",
        "pt": "Eu ainda não estou pronto.",
        "distractor": "",
        "emoji": "👀",
        "tip": "Curto e educado."
      },
      {
        "en": "I'm ready to order.",
        "pt": "Estou pronto para fazer o pedido.",
        "distractor": "",
        "emoji": "✅",
        "tip": "Diga isso quando chamar o garçom."
      },
      {
        "en": "How would you like your steak?",
        "pt": "Como você gostaria do seu bife?",
        "distractor": "",
        "emoji": "🥩",
        "tip": "Pontos: Rare (malpassado), Medium rare, Medium (ao ponto), Medium well, Well done (bem passado)."
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
      },
      {
        "en": "Are you still working on that?",
        "pt": "Você ainda está comendo?",
        "distractor": "",
        "emoji": "🍽️",
        "tip": "O garçom pergunta antes de recolher o prato."
      },
      {
        "en": "Are you done with that?",
        "pt": "Você já terminou?",
        "distractor": "",
        "emoji": "🍽️",
        "tip": "Versão curta: 'Are you done?'"
      },
      {
        "en": "Yes, I'm done.",
        "pt": "Sim, já terminei.",
        "distractor": "",
        "emoji": "👍",
        "tip": "Indica que o garçom pode retirar o prato."
      },
      {
        "en": "I'm still working on it.",
        "pt": "Ainda estou comendo.",
        "distractor": "",
        "emoji": "🍴",
        "tip": "Use se o garçom tentar recolher seu prato cedo demais."
      },
      {
        "en": "Can I have the check, please?",
        "pt": "Posso pedir a conta, por favor?",
        "distractor": "",
        "emoji": "🧾",
        "tip": "Na Europa/Reino Unido usa-se muito 'bill' em vez de 'check'."
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
      },
      {
        "en": "I'm going shopping now.",
        "pt": "Eu vou fazer compras agora.",
        "distractor": "",
        "emoji": "🛍️",
        "tip": "Go shopping = ir fazer compras."
      },
      {
        "en": "Let's go shopping together.",
        "pt": "Vamos fazer compras juntos.",
        "distractor": "",
        "emoji": "👯",
        "tip": "Convite informal."
      },
      {
        "en": "She's going to the shopping mall.",
        "pt": "Ela está indo ao shopping.",
        "distractor": "",
        "emoji": "🏬",
        "tip": "Em inglês, o lugar é 'shopping mall' (ou apenas 'mall')."
      },
      {
        "en": "Hello, welcome! How may I help you?",
        "pt": "Olá, bem-vindo! Como posso ajudar?",
        "distractor": "",
        "emoji": "😊",
        "tip": "Também muito usado: 'How can I help you?'"
      },
      {
        "en": "Are you looking for anything specific?",
        "pt": "Você está procurando algo específico?",
        "distractor": "",
        "emoji": "🔎",
        "tip": "Pergunta padrão de vendedores."
      },
      {
        "en": "No, thanks. I'm just browsing.",
        "pt": "Não, obrigado. Estou só dando uma olhadinha.",
        "distractor": "",
        "emoji": "👀",
        "tip": "Equivalente a 'I'm just looking.'"
      },
      {
        "en": "I'm looking for a white T-shirt.",
        "pt": "Estou procurando uma camiseta branca.",
        "distractor": "",
        "emoji": "👕",
        "tip": "Troque o final pelo item que procura."
      },
      {
        "en": "Do you have it in a different color?",
        "pt": "Você tem em uma cor diferente?",
        "distractor": "",
        "emoji": "🎨",
        "tip": "Muito útil em lojas de roupas e calçados."
      },
      {
        "en": "Do you have it in a different size?",
        "pt": "Você tem em um tamanho diferente?",
        "distractor": "",
        "emoji": "📏",
        "tip": "Size = tamanho."
      },
      {
        "en": "Do you have it in a smaller size?",
        "pt": "Você tem em um tamanho menor?",
        "distractor": "",
        "emoji": "🔽",
        "tip": "Maior = 'in a bigger size?'"
      },
      {
        "en": "Do you have it in stock?",
        "pt": "Você tem no estoque?",
        "distractor": "",
        "emoji": "📦",
        "tip": "In stock = disponível em estoque."
      },
      {
        "en": "Let me check in the back.",
        "pt": "Deixe-me verificar lá atrás (no estoque).",
        "distractor": "",
        "emoji": "🚪",
        "tip": "Frase clássica de vendedores."
      },
      {
        "en": "Sorry, we're out of stock.",
        "pt": "Desculpe, estamos sem estoque.",
        "distractor": "",
        "emoji": "❌",
        "tip": "Out of stock = esgotado."
      },
      {
        "en": "It's too small.",
        "pt": "Está muito pequena.",
        "distractor": "",
        "emoji": "🤏",
        "tip": "Muito apertada = 'It's too tight.'"
      },
      {
        "en": "It's too large.",
        "pt": "Está muito grande.",
        "distractor": "",
        "emoji": "🧥",
        "tip": "Curta = too short; longa = too long; larga = too loose."
      },
      {
        "en": "How do I look?",
        "pt": "Como ficou?",
        "distractor": "",
        "emoji": "🪞",
        "tip": "Combine com 'Do you like it?' (Você gostou?)."
      },
      {
        "en": "Let me try it on.",
        "pt": "Deixe-me experimentar isso.",
        "distractor": "",
        "emoji": "👗",
        "tip": "Try it on = provar a peça."
      },
      {
        "en": "I think it fits me well.",
        "pt": "Acho que me serviu bem.",
        "distractor": "",
        "emoji": "✨",
        "tip": "Fit = servir (tamanho)."
      },
      {
        "en": "This dress suits you perfectly.",
        "pt": "Esse vestido caiu perfeitamente em você.",
        "distractor": "",
        "emoji": "💃",
        "tip": "Suit = combinar / cair bem."
      },
      {
        "en": "That shirt really suits you.",
        "pt": "Aquela camisa te favoreceu muito.",
        "distractor": "",
        "emoji": "👔",
        "tip": "Elogio muito natural."
      },
      {
        "en": "The color looks great on you.",
        "pt": "A cor ficou ótima em você.",
        "distractor": "",
        "emoji": "🌟",
        "tip": "Look great on you = ficar ótimo em você."
      },
      {
        "en": "Can I have a discount?",
        "pt": "Você pode me dar um desconto?",
        "distractor": "",
        "emoji": "🏷️",
        "tip": "Discount = desconto."
      },
      {
        "en": "Do you have any coupons?",
        "pt": "Você tem algum cupom?",
        "distractor": "",
        "emoji": "🎟️",
        "tip": "Muito comum em lojas nos EUA."
      },
      {
        "en": "Do you need a bag?",
        "pt": "Você precisa de uma sacola?",
        "distractor": "",
        "emoji": "🛍️",
        "tip": "Responda 'Yes, please.' ou 'No, thanks.'"
      },
      {
        "en": "Did you find everything okay?",
        "pt": "Você encontrou tudo o que precisava?",
        "distractor": "",
        "emoji": "💳",
        "tip": "Pergunta padrão no caixa."
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
      },
      {
        "en": "Can I talk to the pharmacist?",
        "pt": "Posso falar com o farmacêutico?",
        "distractor": "",
        "emoji": "👨‍⚕️",
        "tip": "Pharmacist = farmacêutico."
      },
      {
        "en": "Please, I need a wheelchair.",
        "pt": "Por favor, preciso de uma cadeira de rodas.",
        "distractor": "",
        "emoji": "♿",
        "tip": "Wheelchair = cadeira de rodas."
      },
      {
        "en": "We need an ambulance here.",
        "pt": "Precisamos de uma ambulância aqui.",
        "distractor": "",
        "emoji": "🚑",
        "tip": "Para emergências médicas."
      },
      {
        "en": "I've been prescribed medication from the doctor.",
        "pt": "O médico me prescreveu uma medicação.",
        "distractor": "",
        "emoji": "📋",
        "tip": "Prescribed = prescrito/receitado."
      },
      {
        "en": "I got some drugs from the doctor.",
        "pt": "Peguei alguns remédios com o médico.",
        "distractor": "",
        "emoji": "💊",
        "tip": "Em inglês, 'drugs' também significa medicamentos."
      },
      {
        "en": "The doctor gave me some pills for my heart.",
        "pt": "O médico me deu alguns remédios para o coração.",
        "distractor": "",
        "emoji": "❤️",
        "tip": "Pills = comprimidos."
      },
      {
        "en": "I need a pill for my headache.",
        "pt": "Preciso de um remédio para dor de cabeça.",
        "distractor": "",
        "emoji": "🤕",
        "tip": "Headache = dor de cabeça."
      },
      {
        "en": "I'm on the pill.",
        "pt": "Estou tomando anticoncepcional.",
        "distractor": "",
        "emoji": "💊",
        "tip": "Expressão idiomática específica."
      },
      {
        "en": "You need a shot.",
        "pt": "Você precisa de uma injeção.",
        "distractor": "",
        "emoji": "💉",
        "tip": "Shot = injeção / vacina."
      },
      {
        "en": "I'm going to give you a prescription.",
        "pt": "Vou te passar uma receita.",
        "distractor": "",
        "emoji": "📝",
        "tip": "Prescription = receita médica."
      },
      {
        "en": "I want to make an appointment with a doctor.",
        "pt": "Quero marcar uma consulta com um médico.",
        "distractor": "",
        "emoji": "📅",
        "tip": "Make an appointment = marcar consulta."
      },
      {
        "en": "You have to see a doctor to get a prescription.",
        "pt": "Você precisa ver um médico para pegar uma receita.",
        "distractor": "",
        "emoji": "🩺",
        "tip": "Comum em farmácias para antibióticos."
      },
      {
        "en": "I'm feeling sick.",
        "pt": "Estou me sentindo doente / enjoado.",
        "distractor": "",
        "emoji": "🤢",
        "tip": "Ou simplesmente 'I'm sick.'"
      },
      {
        "en": "I feel like vomiting.",
        "pt": "Estou com vontade de vomitar.",
        "distractor": "",
        "emoji": "🤮",
        "tip": "Mais informal: 'I'm going to throw up.'"
      },
      {
        "en": "I'm feeling weak.",
        "pt": "Estou me sentindo fraco.",
        "distractor": "",
        "emoji": "😮‍💨",
        "tip": "Weak = fraco."
      },
      {
        "en": "I'm feeling dizzy.",
        "pt": "Estou me sentindo tonto.",
        "distractor": "",
        "emoji": "😵‍💫",
        "tip": "Dizzy = tonto."
      },
      {
        "en": "I have a cough.",
        "pt": "Estou com tosse.",
        "distractor": "",
        "emoji": "😷",
        "tip": "Cough (pronuncia-se cóf)."
      },
      {
        "en": "I have a runny nose.",
        "pt": "Meu nariz está escorrendo.",
        "distractor": "",
        "emoji": "🤧",
        "tip": "Também: 'My nose is running.'"
      },
      {
        "en": "I have a stuffy nose.",
        "pt": "Meu nariz está entupido.",
        "distractor": "",
        "emoji": "👃",
        "tip": "Stuffy nose = nariz entupido."
      },
      {
        "en": "I sprained my ankle.",
        "pt": "Torci meu tornozelo.",
        "distractor": "",
        "emoji": "🦶",
        "tip": "Sprain = torcer."
      },
      {
        "en": "I have cramps.",
        "pt": "Estou com cólicas / cãibras.",
        "distractor": "",
        "emoji": "😣",
        "tip": "Serve tanto para cólica quanto para cãibra."
      },
      {
        "en": "I have a sore throat.",
        "pt": "Estou com dor de garganta.",
        "distractor": "",
        "emoji": "🗣️",
        "tip": "Sore throat = garganta inflamada/dolorida."
      },
      {
        "en": "I have a stomachache.",
        "pt": "Estou com dor de estômago.",
        "distractor": "",
        "emoji": "🤢",
        "tip": "Earache = dor de ouvido; backache = dor nas costas."
      },
      {
        "en": "My foot hurts.",
        "pt": "Meu pé dói.",
        "distractor": "",
        "emoji": "🦶",
        "tip": "Use '[parte do corpo] hurts' para qualquer dor."
      },
      {
        "en": "He was badly hurt in the car crash.",
        "pt": "Ele se feriu gravemente no acidente de carro.",
        "distractor": "",
        "emoji": "🚗",
        "tip": "Badly hurt = gravemente ferido."
      },
      {
        "en": "Hi, can I have some Tylenol, please?",
        "pt": "Oi, posso pegar um Tylenol, por favor?",
        "distractor": "",
        "emoji": "💊",
        "tip": "Analgésico muito comum nos EUA."
      },
      {
        "en": "I have a headache, I think I need an Advil.",
        "pt": "Estou com dor de cabeça, acho que preciso de um Advil.",
        "distractor": "",
        "emoji": "💊",
        "tip": "Advil = ibuprofeno."
      },
      {
        "en": "Do you have aspirin?",
        "pt": "Você tem aspirina?",
        "distractor": "",
        "emoji": "💊",
        "tip": "Aspirin = aspirina."
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
      },
      {
        "en": "Excuse me, I have to make a call now.",
        "pt": "Com licença, preciso fazer uma ligação agora.",
        "distractor": "",
        "emoji": "📞",
        "tip": "Make a call = fazer uma ligação."
      },
      {
        "en": "I have to call my mom now.",
        "pt": "Preciso ligar para a minha mãe agora.",
        "distractor": "",
        "emoji": "📱",
        "tip": "Call someone = ligar para alguém."
      },
      {
        "en": "Please call me later.",
        "pt": "Por favor, me ligue mais tarde.",
        "distractor": "",
        "emoji": "⏰",
        "tip": "Call me later = me ligue depois."
      },
      {
        "en": "Here's my number.",
        "pt": "Aqui está o meu número.",
        "distractor": "",
        "emoji": "🔢",
        "tip": "Para passar seu telefone."
      },
      {
        "en": "The phone is ringing.",
        "pt": "O telefone está tocando.",
        "distractor": "",
        "emoji": "🔔",
        "tip": "Ring = tocar."
      },
      {
        "en": "Why don't you answer the phone?",
        "pt": "Por que você não atende o telefone?",
        "distractor": "",
        "emoji": "📲",
        "tip": "Answer the phone = atender o telefone."
      },
      {
        "en": "I'm calling my mom now. Let's see if she picks up.",
        "pt": "Estou ligando para minha mãe agora. Vamos ver se ela atende.",
        "distractor": "",
        "emoji": "📞",
        "tip": "Pick up = atender a ligação."
      },
      {
        "en": "Hey, you hung up on me!",
        "pt": "Ei, você desligou na minha cara!",
        "distractor": "",
        "emoji": "😠",
        "tip": "Hang up on someone = desligar na cara de alguém."
      },
      {
        "en": "Hello, how can I help you?",
        "pt": "Alô, como posso ajudar?",
        "distractor": "",
        "emoji": "🎧",
        "tip": "Atendimento comercial padrão."
      },
      {
        "en": "Hello, is John there, please?",
        "pt": "Alô, o John está aí, por favor?",
        "distractor": "",
        "emoji": "🗣️",
        "tip": "Também: 'Is that John?' / 'Is John in?'"
      },
      {
        "en": "May I please speak to John?",
        "pt": "Posso falar com o John, por favor?",
        "distractor": "",
        "emoji": "📞",
        "tip": "Educado e formal."
      },
      {
        "en": "Hello, could I speak to Mr. Smith, please?",
        "pt": "Alô, eu poderia falar com o Sr. Smith, por favor?",
        "distractor": "",
        "emoji": "👔",
        "tip": "Ideal para ligações de trabalho."
      },
      {
        "en": "Hello, this is Carina calling for John.",
        "pt": "Alô, aqui é a Carina ligando para o John.",
        "distractor": "",
        "emoji": "👋",
        "tip": "No telefone em inglês, usa-se 'This is [nome]' em vez de 'I am'."
      },
      {
        "en": "Hello, I'd like to speak to Mr. Smith.",
        "pt": "Alô, eu gostaria de falar com o Sr. Smith.",
        "distractor": "",
        "emoji": "💼",
        "tip": "Direto e profissional."
      },
      {
        "en": "Can I leave him a message?",
        "pt": "Posso deixar um recado para ele?",
        "distractor": "",
        "emoji": "📝",
        "tip": "Para ela = 'leave her a message'."
      },
      {
        "en": "Speaking.",
        "pt": "É ele / ela mesmo.",
        "distractor": "",
        "emoji": "🗣️",
        "tip": "Quando ligam procurando por você mesmo."
      },
      {
        "en": "Who am I speaking to?",
        "pt": "Com quem eu estou falando?",
        "distractor": "",
        "emoji": "❓",
        "tip": "Formal e educado."
      },
      {
        "en": "Hi Mom, it's me.",
        "pt": "Oi mãe, sou eu.",
        "distractor": "",
        "emoji": "❤️",
        "tip": "Informal para família e amigos."
      },
      {
        "en": "One moment, please. I'll put you through.",
        "pt": "Só um momento, por favor. Vou transferir a ligação.",
        "distractor": "",
        "emoji": "🔀",
        "tip": "Put you through = transferir a chamada."
      },
      {
        "en": "Sure, would you mind holding?",
        "pt": "Claro, você se importa de aguardar na linha?",
        "distractor": "",
        "emoji": "⏳",
        "tip": "Hold = aguardar na linha."
      },
      {
        "en": "Hang on a sec.",
        "pt": "Espera um segundo.",
        "distractor": "",
        "emoji": "✋",
        "tip": "Informal; também 'Hang on' ou 'Hold on'."
      },
      {
        "en": "Sorry, he's not here at the moment.",
        "pt": "Desculpe, ele não está aqui no momento.",
        "distractor": "",
        "emoji": "🚪",
        "tip": "At the moment = no momento."
      },
      {
        "en": "Would you like to leave a message?",
        "pt": "Você gostaria de deixar um recado?",
        "distractor": "",
        "emoji": "📝",
        "tip": "Ou: 'Can I take a message?'"
      },
      {
        "en": "The line is busy.",
        "pt": "A linha está ocupada.",
        "distractor": "",
        "emoji": "🚫",
        "tip": "Busy = ocupada."
      },
      {
        "en": "I can't get through.",
        "pt": "Não consigo completar a ligação.",
        "distractor": "",
        "emoji": "📵",
        "tip": "Get through = conseguir completar a chamada."
      },
      {
        "en": "Sorry, I can't hear you.",
        "pt": "Desculpe, não consigo te ouvir.",
        "distractor": "",
        "emoji": "🔇",
        "tip": "Útil em ligações com sinal fraco."
      },
      {
        "en": "Could you speak up, please?",
        "pt": "Você poderia falar mais alto, por favor?",
        "distractor": "",
        "emoji": "🔊",
        "tip": "Ou: 'Could you speak louder, please?'"
      },
      {
        "en": "Sorry, your voice is cracking.",
        "pt": "Desculpe, sua voz está cortando.",
        "distractor": "",
        "emoji": "📡",
        "tip": "Equivalente a 'You're breaking up.'"
      },
      {
        "en": "Sorry, I think I lost my connection.",
        "pt": "Desculpe, acho que perdi a conexão.",
        "distractor": "",
        "emoji": "📶",
        "tip": "Quando cai: 'We got cut off.'"
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
