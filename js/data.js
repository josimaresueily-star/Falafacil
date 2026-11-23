// Banco de Dados Completo v6: 4 Níveis, 20 Cenários, 346 Frases e Diálogos Progressivos Completos
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
      },
      {
        "en": "What's your name?",
        "pt": "Qual é o seu nome?",
        "distractor": "",
        "emoji": "🏷️",
        "tip": "Direto e natural em qualquer contexto."
      },
      {
        "en": "I live in Maputo.",
        "pt": "Eu moro em Maputo.",
        "distractor": "",
        "emoji": "📍",
        "tip": "Troque pela sua cidade atual."
      },
      {
        "en": "What do you do for a living?",
        "pt": "Com o que você trabalha?",
        "distractor": "",
        "emoji": "💼",
        "tip": "Forma mais natural que 'What is your profession?'."
      },
      {
        "en": "I work in technology.",
        "pt": "Eu trabalho com tecnologia.",
        "distractor": "",
        "emoji": "💻",
        "tip": "Use 'in' + área (finance, sales, health)."
      },
      {
        "en": "I'm learning English.",
        "pt": "Estou aprendendo inglês.",
        "distractor": "",
        "emoji": "📚",
        "tip": "Quebra o gelo e deixa o nativo mais paciente."
      },
      {
        "en": "It's a pleasure to meet you.",
        "pt": "É um prazer conhecê-lo(a).",
        "distractor": "",
        "emoji": "🤝",
        "tip": "Versão um pouco mais formal/educada."
      },
      {
        "en": "Where do you live?",
        "pt": "Onde você mora?",
        "distractor": "",
        "emoji": "🏠",
        "tip": "Ótima para continuar a conversa."
      },
      {
        "en": "Let's keep in touch!",
        "pt": "Vamos manter contato!",
        "distractor": "",
        "emoji": "✨",
        "tip": "Excelente para encerrar uma apresentação."
      },
      {
        "en": "Do you have Instagram?",
        "pt": "Você tem Instagram?",
        "distractor": "",
        "emoji": "📸",
        "tip": "Também funciona com TikTok, LinkedIn ou Facebook."
      },
      {
        "en": "Can I have your WhatsApp?",
        "pt": "Posso pegar o seu WhatsApp?",
        "distractor": "",
        "emoji": "💬",
        "tip": "Mais educado: 'Could I have your WhatsApp number?'"
      },
      {
        "en": "What's your Instagram handle?",
        "pt": "Qual é o seu arroba (@) no Instagram?",
        "distractor": "",
        "emoji": "📱",
        "tip": "Handle = nome de usuário (@)."
      },
      {
        "en": "Can I get your phone number?",
        "pt": "Posso pegar o seu número de telefone?",
        "distractor": "",
        "emoji": "📞",
        "tip": "Muito usado em conversas informais."
      },
      {
        "en": "Let's exchange numbers!",
        "pt": "Vamos trocar nossos números!",
        "distractor": "",
        "emoji": "🔄",
        "tip": "Jeito direto e amigável de propor contato."
      },
      {
        "en": "Are you on WhatsApp?",
        "pt": "Você usa WhatsApp?",
        "distractor": "",
        "emoji": "📲",
        "tip": "'Are you on [rede social]?' é super usado por nativos."
      },
      {
        "en": "I'll send you a message.",
        "pt": "Vou te mandar uma mensagem.",
        "distractor": "",
        "emoji": "✉️",
        "tip": "Versão informal: 'I'll text you.'"
      },
      {
        "en": "Can I add you on LinkedIn?",
        "pt": "Posso te adicionar no LinkedIn?",
        "distractor": "",
        "emoji": "👔",
        "tip": "Excelente para contatos profissionais ou eventos."
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
        "en": "Hi! I'm Alex. Nice to meet you! What's your name?",
        "pt": "Oi! Eu sou o Alex. Prazer em te conhecer! Qual é o seu nome?",
        "options": [
          {
            "en": "Hi, Alex! I'm Ana. Nice to meet you too!",
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
        "en": "Where are you from? And what do you do for a living?",
        "pt": "De onde você é? E com o que você trabalha?",
        "options": [
          {
            "en": "I'm from Brazil and I work in technology. How about you?",
            "correct": true
          },
          {
            "en": "Turn left at the bank.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Alex",
        "en": "I'm a designer! Hey, let's keep in touch. Are you on WhatsApp or Instagram?",
        "pt": "Eu sou designer! Ei, vamos manter contato. Você usa WhatsApp ou Instagram?",
        "options": [
          {
            "en": "Yes! Can I have your WhatsApp? Do you have Instagram too?",
            "correct": true
          },
          {
            "en": "I have a headache.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Alex",
        "en": "Sure, here is my number! It was great meeting you!",
        "pt": "Claro, aqui está meu número! Foi ótimo te conhecer!",
        "options": [
          {
            "en": "Thanks! I'll send you a message. Bye!",
            "correct": true
          },
          {
            "en": "Two tickets, please.",
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
        "en": "Hello! You look a bit lost. Can I help you?",
        "pt": "Olá! Você parece um pouco perdido. Posso te ajudar?",
        "options": [
          {
            "en": "Hi! Excuse me, sorry to bother you. I'm trying to find the subway station.",
            "correct": true
          },
          {
            "en": "I'd like a medium coffee.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Local",
        "en": "No problem! Walk straight down this street and turn left at the bank.",
        "pt": "Sem problemas! Ande reto por esta rua e vire à esquerda no banco.",
        "options": [
          {
            "en": "Is it far from here? Can I go there on foot?",
            "correct": true
          },
          {
            "en": "What's your Instagram handle?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Local",
        "en": "Yes, it's within walking distance — about five minutes. Where are you from?",
        "pt": "Sim, dá para ir caminhando — cerca de cinco minutos. De onde você é?",
        "options": [
          {
            "en": "I'm from Brazil! I'm learning English.",
            "correct": true
          },
          {
            "en": "No onions, please.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Local",
        "en": "Your English is great! Enjoy the city!",
        "pt": "Seu inglês é ótimo! Aproveite a cidade!",
        "options": [
          {
            "en": "Thank you so much! Have a nice day. Bye!",
            "correct": true
          },
          {
            "en": "Where is the fitting room?",
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
      },
      {
        "en": "What can I get for you?",
        "pt": "O que posso servir para você?",
        "distractor": "",
        "emoji": "☕",
        "tip": "Pergunta padrão do atendente no balcão."
      },
      {
        "en": "For here, please.",
        "pt": "Para comer aqui, por favor.",
        "distractor": "",
        "emoji": "🪑",
        "tip": "Oposto de 'To go, please.'"
      },
      {
        "en": "Could I get an iced coffee?",
        "pt": "Poderia me ver um café gelado?",
        "distractor": "",
        "emoji": "🧊",
        "tip": "Iced = gelado; Hot = quente."
      },
      {
        "en": "With milk, no sugar.",
        "pt": "Com leite, sem açúcar.",
        "distractor": "",
        "emoji": "🥛",
        "tip": "Oat milk (aveia), almond milk (amêndoas)."
      },
      {
        "en": "Do you have anything gluten-free?",
        "pt": "Vocês têm algo sem glúten?",
        "distractor": "",
        "emoji": "🥐",
        "tip": "Também vale lactose-free ou vegan."
      },
      {
        "en": "Can you warm this up, please?",
        "pt": "Pode esquentar isso, por favor?",
        "distractor": "",
        "emoji": "🔥",
        "tip": "Muito útil para pães, croissants e bolos."
      },
      {
        "en": "That's all, thank you.",
        "pt": "É só isso, obrigado(a).",
        "distractor": "",
        "emoji": "✅",
        "tip": "Use quando o atendente perguntar 'Anything else?'."
      },
      {
        "en": "Keep the receipt, thanks.",
        "pt": "Pode ficar com o recibo, obrigado.",
        "distractor": "",
        "emoji": "🧾",
        "tip": "Ou 'I don't need a receipt.'"
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
        "en": "Good morning! Welcome! What can I get for you?",
        "pt": "Bom dia! Bem-vindo! O que posso servir para você?",
        "options": [
          {
            "en": "Hi! Can I have a medium coffee with milk, no sugar, please?",
            "correct": true
          },
          {
            "en": "Turn right at the corner.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Barista",
        "en": "Sure! For here or to go?",
        "pt": "Claro! Para comer aqui ou para viagem?",
        "options": [
          {
            "en": "To go, please. Can you warm this croissant up too?",
            "correct": true
          },
          {
            "en": "I'm from Brazil.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Barista",
        "en": "Of course! Anything else?",
        "pt": "Com certeza! Mais alguma coisa?",
        "options": [
          {
            "en": "That's all, thank you. Can I pay by card?",
            "correct": true
          },
          {
            "en": "I'm lost. Can you help me?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Barista",
        "en": "Yes, right here. Would you like your receipt?",
        "pt": "Sim, bem aqui. Gostaria do recibo?",
        "options": [
          {
            "en": "Keep the receipt, thanks! Have a nice day!",
            "correct": true
          },
          {
            "en": "Let's exchange numbers!",
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
      },
      {
        "en": "My English is still basic.",
        "pt": "Meu inglês ainda é básico.",
        "distractor": "",
        "emoji": "🌱",
        "tip": "Faz as pessoas falarem com mais clareza."
      },
      {
        "en": "What does that mean?",
        "pt": "O que isso significa?",
        "distractor": "",
        "emoji": "❓",
        "tip": "Essencial quando ouvir uma palavra nova."
      },
      {
        "en": "How do you say this in English?",
        "pt": "Como se diz isso em inglês?",
        "distractor": "",
        "emoji": "🗣️",
        "tip": "Perfeito para destravar no meio de uma frase."
      },
      {
        "en": "Could you write it down, please?",
        "pt": "Poderia anotar isso, por favor?",
        "distractor": "",
        "emoji": "✍️",
        "tip": "Salva vidas com endereços, nomes e números."
      },
      {
        "en": "How do you spell that?",
        "pt": "Como se soletra isso?",
        "distractor": "",
        "emoji": "🔤",
        "tip": "Muito útil ao anotar e-mails ou sobrenomes."
      },
      {
        "en": "Wait a second, let me translate.",
        "pt": "Espera um segundo, deixa eu traduzir.",
        "distractor": "",
        "emoji": "📱",
        "tip": "Natural quando precisar olhar no celular."
      },
      {
        "en": "I think I understand now.",
        "pt": "Acho que entendi agora.",
        "distractor": "",
        "emoji": "💡",
        "tip": "Versão curta: 'Got it!' (Entendi!)."
      },
      {
        "en": "Thank you for your patience.",
        "pt": "Obrigado(a) pela sua paciência.",
        "distractor": "",
        "emoji": "🙏",
        "tip": "Muito apreciado por atendentes e nativos."
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
        "en": "Hi there! Your express train leaves from platform 9B in four minutes.",
        "pt": "Olá! Seu trem expresso sai da plataforma 9B em quatro minutos.",
        "options": [
          {
            "en": "Sorry, I didn't catch that. My English is still basic. Could you speak slower?",
            "correct": true
          },
          {
            "en": "For here, please.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Atendente",
        "en": "Of course! Platform 9-B. Walk straight and turn left.",
        "pt": "Claro! Plataforma 9-B. Siga em frente e vire à esquerda.",
        "options": [
          {
            "en": "Could you write it down, please? Just to be sure.",
            "correct": true
          },
          {
            "en": "Do you have Instagram?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Atendente",
        "en": "Sure, here you go: Platform 9B. Do you understand now?",
        "pt": "Claro, aqui está: Plataforma 9B. Você entendeu agora?",
        "options": [
          {
            "en": "Yes, I think I understand now! Is it far from here?",
            "correct": true
          },
          {
            "en": "With milk, no sugar.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Atendente",
        "en": "No, just two minutes on foot! Have a great trip!",
        "pt": "Não, apenas dois minutos a pé! Boa viagem!",
        "options": [
          {
            "en": "Thank you for your patience! Have a nice day. Bye!",
            "correct": true
          },
          {
            "en": "Keep the receipt, thanks.",
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
        "en": "Hi! Welcome! Can I help you find anything?",
        "pt": "Oi! Bem-vindo! Posso ajudar a encontrar algo?",
        "options": [
          {
            "en": "Excuse me, where can I find the bread and rice?",
            "correct": true
          },
          {
            "en": "Could you repeat that?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Funcionário",
        "en": "They're on aisle six, on your right. Did you find everything okay?",
        "pt": "Estão no corredor seis, à sua direita. Encontrou tudo o que precisava?",
        "options": [
          {
            "en": "Yes, thanks! How much is this water?",
            "correct": true
          },
          {
            "en": "I work in technology.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Caixa",
        "en": "It's two dollars. Would you like a bag? And how would you like to pay?",
        "pt": "São dois dólares. Gostaria de uma sacola? E como gostaria de pagar?",
        "options": [
          {
            "en": "Yes, please. I'd like to pay with a credit card.",
            "correct": true
          },
          {
            "en": "Go straight and turn left.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Caixa",
        "en": "All set! Please sign here. Have a great day!",
        "pt": "Tudo certo! Por favor, assine aqui. Tenha um ótimo dia!",
        "options": [
          {
            "en": "Thank you so much! You too, bye!",
            "correct": true
          },
          {
            "en": "How do you spell that?",
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
        "en": "Good morning! Can I see your ticket and your passport, please?",
        "pt": "Bom dia! Posso ver sua passagem e seu passaporte, por favor?",
        "options": [
          {
            "en": "Good morning! Sure, I'd like to check in. Here they are.",
            "correct": true
          },
          {
            "en": "I'm just looking, thanks.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Atendente",
        "en": "Thank you. Are you checking in your luggage or just carry-on?",
        "pt": "Obrigado. Você vai despachar sua bagagem ou é só bagagem de mão?",
        "options": [
          {
            "en": "I need to check in my luggage. Can I have a window seat, please?",
            "correct": true
          },
          {
            "en": "Where can I find the bread?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Atendente",
        "en": "Done! Window seat 12A. Your gate is B12 and the flight is on time.",
        "pt": "Pronto! Assento na janela 12A. Seu portão é B12 e o voo está no horário.",
        "options": [
          {
            "en": "Sorry, could you repeat the gate? Where do I go next?",
            "correct": true
          },
          {
            "en": "With a credit card.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Atendente",
        "en": "Gate B12. Walk straight and follow the signs. Enjoy your trip!",
        "pt": "Portão B12. Siga em frente e acompanhe as placas. Aproveite sua viagem!",
        "options": [
          {
            "en": "Got it! Thank you so much. Have a nice day!",
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
        "en": "Next! Passport, please. Where are you coming from?",
        "pt": "Próximo! Passaporte, por favor. De onde você está vindo?",
        "options": [
          {
            "en": "Hello! Here is my passport. I'm from São Paulo, Brazil.",
            "correct": true
          },
          {
            "en": "Can I have a window seat?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Oficial",
        "en": "What's the purpose of your visit? Business or pleasure?",
        "pt": "Qual é o propósito da sua visita? Negócios ou lazer?",
        "options": [
          {
            "en": "I'm here on vacation. Are you asking how long I'm staying?",
            "correct": true
          },
          {
            "en": "It's on aisle six.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Oficial",
        "en": "Yes. How long are you staying, and where are you staying?",
        "pt": "Sim. Quanto tempo vai ficar e onde vai ficar hospedado?",
        "options": [
          {
            "en": "I'm staying for fifteen days at the Central Hotel.",
            "correct": true
          },
          {
            "en": "Can I pay by card?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Oficial",
        "en": "Everything looks good. Welcome to America! Have a nice day.",
        "pt": "Tudo certo. Bem-vindo à América! Tenha um bom dia.",
        "options": [
          {
            "en": "Thank you very much! You too, goodbye!",
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
      },
      {
        "en": "Are you Carlos?",
        "pt": "Você é o Carlos?",
        "distractor": "",
        "emoji": "🚘",
        "tip": "Para confirmar o motorista do Uber/app."
      },
      {
        "en": "How much is the fare?",
        "pt": "Quanto custa a tarifa/corrida?",
        "distractor": "",
        "emoji": "💵",
        "tip": "Fare = valor da passagem ou corrida."
      },
      {
        "en": "Could you turn on the AC?",
        "pt": "Poderia ligar o ar-condicionado?",
        "distractor": "",
        "emoji": "❄️",
        "tip": "AC = air conditioning."
      },
      {
        "en": "Is there a lot of traffic?",
        "pt": "Tem muito trânsito?",
        "distractor": "",
        "emoji": "🚦",
        "tip": "Bom quebra-gelo com o motorista."
      },
      {
        "en": "Which stop should I get off at?",
        "pt": "Em qual parada devo descer?",
        "distractor": "",
        "emoji": "🚏",
        "tip": "Get off = descer do ônibus/trem."
      },
      {
        "en": "Could you open the trunk, please?",
        "pt": "Poderia abrir o porta-malas, por favor?",
        "distractor": "",
        "emoji": "🧳",
        "tip": "Trunk (EUA) / Boot (Reino Unido)."
      },
      {
        "en": "Just drop me off at the corner.",
        "pt": "Pode me deixar na esquina.",
        "distractor": "",
        "emoji": "📍",
        "tip": "Drop off = deixar o passageiro."
      },
      {
        "en": "Keep the change, thanks!",
        "pt": "Pode ficar com o troco, obrigado!",
        "distractor": "",
        "emoji": "💰",
        "tip": "Muito usado em corridas pagas em dinheiro."
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
        "en": "Hi! Are you Ana? Where are we going today?",
        "pt": "Oi! Você é a Ana? Para onde vamos hoje?",
        "options": [
          {
            "en": "Yes, hi! Could you take me to the Central Hotel, please?",
            "correct": true
          },
          {
            "en": "Here is my passport.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Motorista",
        "en": "Sure! Let me open the trunk for your luggage. How long are you staying in town?",
        "pt": "Claro! Deixa eu abrir o porta-malas para sua mala. Quanto tempo vai ficar na cidade?",
        "options": [
          {
            "en": "Thanks! I'm here on vacation for ten days. Is there a lot of traffic?",
            "correct": true
          },
          {
            "en": "Would you like a bag?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Motorista",
        "en": "Not too bad, about fifteen minutes. Would you like the AC on?",
        "pt": "Não está ruim, cerca de quinze minutos. Gostaria do ar-condicionado ligado?",
        "options": [
          {
            "en": "Yes, please! Could you turn on the AC?",
            "correct": true
          },
          {
            "en": "Where is gate B12?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Motorista",
        "en": "We're here! That's twenty dollars.",
        "pt": "Chegamos! São vinte dólares.",
        "options": [
          {
            "en": "You can stop right here. Keep the change, thanks! Bye!",
            "correct": true
          },
          {
            "en": "I'm just looking, thanks.",
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
      },
      {
        "en": "Is my room ready?",
        "pt": "Meu quarto já está pronto?",
        "distractor": "",
        "emoji": "🔑",
        "tip": "Útil quando você chega antes do horário."
      },
      {
        "en": "Can I leave my luggage here?",
        "pt": "Posso deixar minha mala aqui?",
        "distractor": "",
        "emoji": "🧳",
        "tip": "Para guardar bagagem antes do check-in ou após o check-out."
      },
      {
        "en": "What floor is my room on?",
        "pt": "Em qual andar fica meu quarto?",
        "distractor": "",
        "emoji": "🏢",
        "tip": "Elevator (EUA) / Lift (Reino Unido)."
      },
      {
        "en": "My key card isn't working.",
        "pt": "Meu cartão-chave não está funcionando.",
        "distractor": "",
        "emoji": "💳",
        "tip": "Acontece com frequência em hotéis."
      },
      {
        "en": "Could I get a late check-out?",
        "pt": "Poderia pedir um check-out mais tarde?",
        "distractor": "",
        "emoji": "🕒",
        "tip": "Late check-out = saída estendida."
      },
      {
        "en": "The air conditioning isn't working.",
        "pt": "O ar-condicionado não está funcionando.",
        "distractor": "",
        "emoji": "🌡️",
        "tip": "Troque por 'the Wi-Fi' ou 'the shower' (chuveiro)."
      },
      {
        "en": "Could you call a taxi for me?",
        "pt": "Poderia chamar um táxi para mim?",
        "distractor": "",
        "emoji": "🚕",
        "tip": "A recepção costuma resolver na hora."
      },
      {
        "en": "I'd like to check out, please.",
        "pt": "Eu gostaria de fazer o check-out, por favor.",
        "distractor": "",
        "emoji": "👋",
        "tip": "Diga isso ao entregar a chave na saída."
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
        "en": "Welcome to Central Hotel! How can I help you?",
        "pt": "Bem-vindo ao Central Hotel! Como posso ajudar?",
        "options": [
          {
            "en": "Hi! I have a reservation under Silva. Is my room ready?",
            "correct": true
          },
          {
            "en": "Does this bus go to downtown?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Recepção",
        "en": "Yes! Can I see your passport, please? You're in room 302 on the third floor.",
        "pt": "Sim! Posso ver seu passaporte, por favor? Você está no quarto 302 no terceiro andar.",
        "options": [
          {
            "en": "Sure, here it is. What's the Wi-Fi password and what time is breakfast?",
            "correct": true
          },
          {
            "en": "How much is the fare?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Recepção",
        "en": "Breakfast is from 7 to 10 AM, and the Wi-Fi password is on your key card.",
        "pt": "O café é das 7h às 10h, e a senha do Wi-Fi está no seu cartão-chave.",
        "options": [
          {
            "en": "Great! Also, could I get extra towels later?",
            "correct": true
          },
          {
            "en": "I'm here on business.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Recepção",
        "en": "Of course, we'll send them up right away. Enjoy your stay!",
        "pt": "Claro, vamos enviar já já. Aproveite sua estadia!",
        "options": [
          {
            "en": "Thank you so much! See you later!",
            "correct": true
          },
          {
            "en": "You can stop right here.",
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
      },
      {
        "en": "How much is a ticket?",
        "pt": "Quanto custa um ingresso?",
        "distractor": "",
        "emoji": "🎟️",
        "tip": "Ou 'How much is admission?'."
      },
      {
        "en": "Is there an audio guide in Portuguese?",
        "pt": "Tem audioguia em português?",
        "distractor": "",
        "emoji": "🎧",
        "tip": "Muito comum em museus internacionais."
      },
      {
        "en": "Can I buy tickets online?",
        "pt": "Posso comprar ingressos online?",
        "distractor": "",
        "emoji": "📱",
        "tip": "Útil quando a fila presencial está grande."
      },
      {
        "en": "Where is the entrance?",
        "pt": "Onde fica a entrada?",
        "distractor": "",
        "emoji": "🚪",
        "tip": "Entrance = entrada; Exit = saída."
      },
      {
        "en": "How long is the wait?",
        "pt": "Quanto tempo está a fila/espera?",
        "distractor": "",
        "emoji": "⏳",
        "tip": "Ótimo para decidir se vale esperar."
      },
      {
        "en": "Does this include a guided tour?",
        "pt": "Isso inclui visita guiada?",
        "distractor": "",
        "emoji": "🗺️",
        "tip": "Guided tour = passeio com guia."
      },
      {
        "en": "Where are the restrooms?",
        "pt": "Onde ficam os banheiros?",
        "distractor": "",
        "emoji": "🚻",
        "tip": "Restrooms (EUA) / Toilets (Europa)."
      },
      {
        "en": "Can I re-enter later today?",
        "pt": "Posso entrar novamente mais tarde hoje?",
        "distractor": "",
        "emoji": "🔄",
        "tip": "Útil em parques e museus grandes."
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
        "en": "Hello! Welcome to the Art Museum. How can I help you?",
        "pt": "Olá! Bem-vindo ao Museu de Arte. Como posso ajudar?",
        "options": [
          {
            "en": "Hi! How much is a ticket? Is there a student discount?",
            "correct": true
          },
          {
            "en": "My key card isn't working.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Bilheteria",
        "en": "It's fifteen dollars, and yes, students pay ten. How many tickets?",
        "pt": "São quinze dólares, e sim, estudantes pagam dez. Quantos ingressos?",
        "options": [
          {
            "en": "Two tickets, please. Can I pay by card?",
            "correct": true
          },
          {
            "en": "Could I get extra towels?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Bilheteria",
        "en": "Sure! Would you also like an audio guide?",
        "pt": "Claro! Gostaria também de um audioguia?",
        "options": [
          {
            "en": "Is there an audio guide in Portuguese? And what time do you close?",
            "correct": true
          },
          {
            "en": "Is my flight on time?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Bilheteria",
        "en": "Yes, we have Portuguese! We close at 6 PM. The entrance is on your left.",
        "pt": "Sim, temos em português! Fechamos às 18h. A entrada fica à sua esquerda.",
        "options": [
          {
            "en": "Awesome, thank you so much! Have a nice day!",
            "correct": true
          },
          {
            "en": "Could you open the trunk?",
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
        "speaker": "Recepcionista",
        "en": "Good evening! Welcome! Party of how many?",
        "pt": "Boa noite! Bem-vindos! Mesa para quantas pessoas?",
        "options": [
          {
            "en": "Good evening! A table for two, please.",
            "correct": true
          },
          {
            "en": "Two tickets, please.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Garçom",
        "en": "Here is the menu. Would you like something to drink first?",
        "pt": "Aqui está o cardápio. Gostariam de algo para beber primeiro?",
        "options": [
          {
            "en": "May I have some tap water and a Coke, please?",
            "correct": true
          },
          {
            "en": "What floor is my room on?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Garçom",
        "en": "Sure! Are you ready to order, or do you need a few more minutes?",
        "pt": "Claro! Estão prontos para pedir ou precisam de mais alguns minutos?",
        "options": [
          {
            "en": "I'm ready to order. What do you recommend?",
            "correct": true
          },
          {
            "en": "Can I take pictures here?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Garçom",
        "en": "The grilled fish and the pasta are both amazing!",
        "pt": "O peixe grelhado e a massa são incríveis!",
        "options": [
          {
            "en": "I'll go with the fish, please. Thank you!",
            "correct": true
          },
          {
            "en": "I'd like to check out, please.",
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
        "en": "Before I send your order, do you have any food allergies?",
        "pt": "Antes de enviar seu pedido, você tem alguma alergia alimentar?",
        "options": [
          {
            "en": "Yes, I'm allergic to nuts. And no onions, please.",
            "correct": true
          },
          {
            "en": "Is there an audio guide?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Garçom",
        "en": "Got it! (Later...) Are you still working on that, or are you done?",
        "pt": "Entendido! (Mais tarde...) Ainda está comendo ou já terminou?",
        "options": [
          {
            "en": "Yes, I'm done. Everything was delicious! Can we have the check, please?",
            "correct": true
          },
          {
            "en": "I need a few more minutes.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Garçom",
        "en": "Here is your check. How would you like to pay?",
        "pt": "Aqui está a sua conta. Como gostaria de pagar?",
        "options": [
          {
            "en": "With a credit card. Excuse me, is service included?",
            "correct": true
          },
          {
            "en": "Where is the entrance?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Garçom",
        "en": "Yes, service is already included. Thank you for coming!",
        "pt": "Sim, o serviço já está incluído. Obrigado por virem!",
        "options": [
          {
            "en": "Thank you so much! Have a great evening. Bye!",
            "correct": true
          },
          {
            "en": "I'm still working on it.",
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
        "en": "Hello, welcome! Are you looking for anything specific?",
        "pt": "Olá, bem-vindo! Você está procurando algo específico?",
        "options": [
          {
            "en": "Hi! I'm looking for a white T-shirt. Can I try this on?",
            "correct": true
          },
          {
            "en": "Can we have the check, please?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Vendedor",
        "en": "Of course! The fitting room is right over there. How does it fit?",
        "pt": "Claro! O provador é bem ali. Como serviu?",
        "options": [
          {
            "en": "It's a bit too tight. Do you have it in a bigger size?",
            "correct": true
          },
          {
            "en": "I'm allergic to nuts.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Vendedor",
        "en": "Let me check in the back... Yes! Here is a large. How do you like it?",
        "pt": "Deixa eu ver lá atrás... Sim! Aqui está o grande. O que achou?",
        "options": [
          {
            "en": "I think it fits me well! How much is this? Can I pay by card?",
            "correct": true
          },
          {
            "en": "How would you like your steak?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Vendedor",
        "en": "It's twenty-five dollars and yes, we take card. Do you need a bag?",
        "pt": "São vinte e cinco dólares e sim, aceitamos cartão. Precisa de sacola?",
        "options": [
          {
            "en": "Yes, please. Thank you very much! Bye!",
            "correct": true
          },
          {
            "en": "Party of two.",
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
        "en": "Hello! How can I help you today?",
        "pt": "Olá! Como posso ajudar hoje?",
        "options": [
          {
            "en": "Hi! Can I talk to the pharmacist? I have a headache and a sore throat.",
            "correct": true
          },
          {
            "en": "Do you have it in a different color?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Farmacêutico",
        "en": "I'm the pharmacist. Do you have a fever or any allergies?",
        "pt": "Eu sou o farmacêutico. Você está com febre ou alguma alergia?",
        "options": [
          {
            "en": "No fever, and I'm allergic to nuts. Do you have something for a cold?",
            "correct": true
          },
          {
            "en": "Let me try it on.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Farmacêutico",
        "en": "Yes, this Advil and these throat lozenges work very well.",
        "pt": "Sim, este Advil e estas pastilhas para garganta funcionam muito bem.",
        "options": [
          {
            "en": "Thanks! How often should I take them? How much is it?",
            "correct": true
          },
          {
            "en": "Where are the restrooms?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Farmacêutico",
        "en": "Every eight hours. That's twelve dollars. Feel better soon!",
        "pt": "A cada oito horas. São doze dólares. Melhoras!",
        "options": [
          {
            "en": "Thank you so much for your help! Goodbye!",
            "correct": true
          },
          {
            "en": "I'll go with the fish.",
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
        "en": "Hello! Welcome to customer service. How can I help you?",
        "pt": "Olá! Bem-vindo ao atendimento ao cliente. Como posso ajudar?",
        "options": [
          {
            "en": "Hi! I'd like to return this charger. It doesn't work.",
            "correct": true
          },
          {
            "en": "I have a sore throat.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Atendente",
        "en": "I'm sorry about that! Do you have your receipt?",
        "pt": "Sinto muito por isso! Você tem a nota fiscal?",
        "options": [
          {
            "en": "Yes, here is my receipt. Can I get a refund?",
            "correct": true
          },
          {
            "en": "I'm just browsing.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Atendente",
        "en": "Of course. Did you pay in cash or with a credit card?",
        "pt": "Claro. Você pagou em dinheiro ou com cartão de crédito?",
        "options": [
          {
            "en": "I paid with a credit card. Here it is.",
            "correct": true
          },
          {
            "en": "I'm feeling dizzy.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Atendente",
        "en": "Done! The refund will show up in two days. Anything else?",
        "pt": "Pronto! O reembolso aparecerá em dois dias. Mais alguma coisa?",
        "options": [
          {
            "en": "That's all, thank you for your patience! Have a nice day, bye!",
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
      },
      {
        "en": "What have you been up to?",
        "pt": "O que você tem feito ultimamente?",
        "distractor": "",
        "emoji": "😊",
        "tip": "Super natural entre conhecidos."
      },
      {
        "en": "Looks like it's going to rain.",
        "pt": "Parece que vai chover.",
        "distractor": "",
        "emoji": "🌧️",
        "tip": "Clássico para puxar assunto no elevador ou na rua."
      },
      {
        "en": "Have you been here before?",
        "pt": "Você já esteve aqui antes?",
        "distractor": "",
        "emoji": "📍",
        "tip": "Ótimo em eventos, restaurantes ou viagens."
      },
      {
        "en": "Any plans for the weekend?",
        "pt": "Algum plano para o fim de semana?",
        "distractor": "",
        "emoji": "📅",
        "tip": "Muito usado às quintas e sextas-feiras."
      },
      {
        "en": "I'm just relaxing this weekend.",
        "pt": "Vou só relaxar neste fim de semana.",
        "distractor": "",
        "emoji": "🛋️",
        "tip": "Resposta pronta e leve."
      },
      {
        "en": "That sounds amazing!",
        "pt": "Isso parece incrível!",
        "distractor": "",
        "emoji": "🤩",
        "tip": "Ótima reação para demonstrar interesse."
      },
      {
        "en": "Where did you get that?",
        "pt": "Onde você comprou isso?",
        "distractor": "",
        "emoji": "🛍️",
        "tip": "Use após elogiar uma roupa, relógio ou acessório."
      },
      {
        "en": "It was great talking to you!",
        "pt": "Foi ótimo conversar com você!",
        "distractor": "",
        "emoji": "👋",
        "tip": "Jeito educado de encerrar o papo."
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
        "en": "Hey! How's it going? What have you been up to?",
        "pt": "Ei! Tudo bem? O que você tem feito ultimamente?",
        "options": [
          {
            "en": "Pretty good! I'm learning English and working a lot. How about you?",
            "correct": true
          },
          {
            "en": "Can I get a refund?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Colega",
        "en": "Same here! By the way, I really like your jacket! Where did you get that?",
        "pt": "Eu também! A propósito, gostei muito da sua jaqueta! Onde você comprou?",
        "options": [
          {
            "en": "Thank you! I got it at the shopping mall. It's really hot today, right?",
            "correct": true
          },
          {
            "en": "Here is my receipt.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Colega",
        "en": "Yes, super hot! Any plans for the weekend?",
        "pt": "Sim, super quente! Algum plano para o fim de semana?",
        "options": [
          {
            "en": "I'm just relaxing this weekend. How was your week?",
            "correct": true
          },
          {
            "en": "My foot hurts.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Colega",
        "en": "Busy, but good! I have to run now. See you around!",
        "pt": "Corrida, mas boa! Preciso ir agora. Até mais!",
        "options": [
          {
            "en": "It was great talking to you! Have a nice weekend, bye!",
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
      },
      {
        "en": "What are you doing tonight?",
        "pt": "O que você vai fazer hoje à noite?",
        "distractor": "",
        "emoji": "🌙",
        "tip": "Ponto de partida para convites."
      },
      {
        "en": "Do you want to hang out?",
        "pt": "Você quer sair / dar uma volta?",
        "distractor": "",
        "emoji": "🎉",
        "tip": "Hang out = passar um tempo junto sem formalidade."
      },
      {
        "en": "Where should we meet?",
        "pt": "Onde devemos nos encontrar?",
        "distractor": "",
        "emoji": "📍",
        "tip": "Direto e prático."
      },
      {
        "en": "I'm on my way!",
        "pt": "Estou a caminho!",
        "distractor": "",
        "emoji": "🏃",
        "tip": "Mensagem clássica quando já saiu de casa."
      },
      {
        "en": "Sorry, I'm running a bit late.",
        "pt": "Desculpa, estou um pouco atrasado(a).",
        "distractor": "",
        "emoji": "⏱️",
        "tip": "Running late = estar atrasado."
      },
      {
        "en": "Let's reschedule for next week.",
        "pt": "Vamos remarcar para a semana que vem.",
        "distractor": "",
        "emoji": "📆",
        "tip": "Reschedule = remarcar."
      },
      {
        "en": "Count me in!",
        "pt": "Pode contar comigo! / Tô dentro!",
        "distractor": "",
        "emoji": "🙌",
        "tip": "Resposta animada para aceitar um convite."
      },
      {
        "en": "Text me when you get there.",
        "pt": "Me manda mensagem quando chegar lá.",
        "distractor": "",
        "emoji": "📱",
        "tip": "Muito usado entre amigos."
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
        "en": "Hey! Long time no see! How's it going?",
        "pt": "Ei! Quanto tempo! Como vão as coisas?",
        "options": [
          {
            "en": "Pretty good! Are you free on Friday? Let's grab a coffee!",
            "correct": true
          },
          {
            "en": "I'd like to return this.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Amigo",
        "en": "Count me in! What time works for you, and where should we meet?",
        "pt": "Tô dentro! Qual horário fica bom para você e onde devemos nos encontrar?",
        "options": [
          {
            "en": "Around 4 PM at that coffee shop near the subway station?",
            "correct": true
          },
          {
            "en": "I need a prescription.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Amigo",
        "en": "Sounds good! If I run a bit late, I'll let you know on WhatsApp.",
        "pt": "Combinado! Se eu atrasar um pouco, te aviso no WhatsApp.",
        "options": [
          {
            "en": "No problem! Text me when you get there.",
            "correct": true
          },
          {
            "en": "Can I have a discount?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Amigo",
        "en": "Deal! See you on Friday!",
        "pt": "Fechado! Te vejo na sexta!",
        "options": [
          {
            "en": "Sounds good! I'll send you a message. See you then, bye!",
            "correct": true
          },
          {
            "en": "How much is a ticket?",
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
      },
      {
        "en": "Good morning, everyone!",
        "pt": "Bom dia, pessoal!",
        "distractor": "",
        "emoji": "☀️",
        "tip": "Abertura padrão em reuniões de equipe."
      },
      {
        "en": "Let's get started.",
        "pt": "Vamos começar.",
        "distractor": "",
        "emoji": "🚀",
        "tip": "Usado para iniciar a reunião ou tarefa."
      },
      {
        "en": "Can I share my screen?",
        "pt": "Posso compartilhar minha tela?",
        "distractor": "",
        "emoji": "🖥️",
        "tip": "Essencial em reuniões online."
      },
      {
        "en": "I have a quick question.",
        "pt": "Tenho uma pergunta rápida.",
        "distractor": "",
        "emoji": "✋",
        "tip": "Ótimo para interromper com educação."
      },
      {
        "en": "When is the deadline?",
        "pt": "Qual é o prazo final?",
        "distractor": "",
        "emoji": "📅",
        "tip": "Deadline = data limite de entrega."
      },
      {
        "en": "I'm almost done with it.",
        "pt": "Estou quase terminando isso.",
        "distractor": "",
        "emoji": "📈",
        "tip": "Para atualizar o status de uma tarefa."
      },
      {
        "en": "That makes sense.",
        "pt": "Isso faz sentido.",
        "distractor": "",
        "emoji": "👍",
        "tip": "Mostra que você entendeu e concorda."
      },
      {
        "en": "Thanks, everyone! Have a great day.",
        "pt": "Obrigado, pessoal! Tenham um ótimo dia.",
        "distractor": "",
        "emoji": "👋",
        "tip": "Encerramento natural de reuniões."
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
        "en": "Good morning, everyone! Let's get started. What are you working on today?",
        "pt": "Bom dia, pessoal! Vamos começar. No que você está trabalhando hoje?",
        "options": [
          {
            "en": "Good morning! I'm working on the report. I'm almost done with it.",
            "correct": true
          },
          {
            "en": "Let's grab a coffee!",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Chefe",
        "en": "Awesome! Can you show us the draft? And do you have any questions?",
        "pt": "Incrível! Pode nos mostrar o rascunho? E você tem alguma dúvida?",
        "options": [
          {
            "en": "Sure, can I share my screen? I have a quick question about the deadline.",
            "correct": true
          },
          {
            "en": "I'm on my way!",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Chefe",
        "en": "The deadline is tomorrow at 5 PM. Do you have the final numbers?",
        "pt": "O prazo é amanhã às 17h. Você tem os números finais?",
        "options": [
          {
            "en": "That makes sense. Let me check and get back to you. I'll send it to you today.",
            "correct": true
          },
          {
            "en": "Are you free on Friday?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Chefe",
        "en": "Perfect! Thanks for the update. Have a productive day!",
        "pt": "Perfeito! Obrigado pela atualização. Tenha um dia produtivo!",
        "options": [
          {
            "en": "Thanks, everyone! Have a great day. Bye!",
            "correct": true
          },
          {
            "en": "Text me when you get there.",
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
        "speaker": "Recepção",
        "en": "Hello, how can I help you?",
        "pt": "Alô, como posso ajudar?",
        "options": [
          {
            "en": "Hello, this is Ana. Could I speak to Mr. Smith, please?",
            "correct": true
          },
          {
            "en": "Can I share my screen?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Recepção",
        "en": "One moment, please. I'll put you through... Hello? Can you hear me?",
        "pt": "Só um momento, por favor. Vou transferir... Alô? Consegue me ouvir?",
        "options": [
          {
            "en": "Sorry, you're breaking up! Could you speak up, please?",
            "correct": true
          },
          {
            "en": "When is the deadline?",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Recepção",
        "en": "Sorry about that! Is it better now? He's not here at the moment. Can I take a message?",
        "pt": "Desculpe por isso! Melhor agora? Ele não está no momento. Posso anotar um recado?",
        "options": [
          {
            "en": "Yes, loud and clear! Please tell him I'll send the report today.",
            "correct": true
          },
          {
            "en": "Looks like it's going to rain.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Recepção",
        "en": "Got it, I'll let him know! Anything else?",
        "pt": "Anotado, vou avisá-lo! Mais alguma coisa?",
        "options": [
          {
            "en": "That's all, thank you! I'll call back later. Bye!",
            "correct": true
          },
          {
            "en": "Count me in!",
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
      },
      {
        "en": "Can someone help me, please?",
        "pt": "Alguém pode me ajudar, por favor?",
        "distractor": "",
        "emoji": "🆘",
        "tip": "Para chamar atenção rapidamente em local público."
      },
      {
        "en": "My bag was stolen.",
        "pt": "Minha bolsa/mala foi roubada.",
        "distractor": "",
        "emoji": "🚨",
        "tip": "Stolen = roubada; Lost = perdida."
      },
      {
        "en": "I need to go to the embassy.",
        "pt": "Preciso ir à embaixada.",
        "distractor": "",
        "emoji": "🏛️",
        "tip": "Essencial em caso de perda de passaporte."
      },
      {
        "en": "Is there a pharmacy nearby?",
        "pt": "Tem alguma farmácia por perto?",
        "distractor": "",
        "emoji": "💊",
        "tip": "Útil para urgências leves."
      },
      {
        "en": "I'm having an allergic reaction.",
        "pt": "Estou tendo uma reação alérgica.",
        "distractor": "",
        "emoji": "⚠️",
        "tip": "Frase crítica para emergências médicas."
      },
      {
        "en": "My phone is dead. Can I make a call?",
        "pt": "Meu celular descarregou. Posso fazer uma ligação?",
        "distractor": "",
        "emoji": "🪫",
        "tip": "Dead = sem bateria."
      },
      {
        "en": "I need to file a police report.",
        "pt": "Preciso fazer um boletim de ocorrência.",
        "distractor": "",
        "emoji": "📋",
        "tip": "Police report = B.O. (exigido por seguros)."
      },
      {
        "en": "Please stay with me.",
        "pt": "Por favor, fique comigo.",
        "distractor": "",
        "emoji": "🤝",
        "tip": "Para pedir apoio até a ajuda chegar."
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
        "en": "Hey, are you okay? You look worried!",
        "pt": "Ei, você está bem? Parece preocupado!",
        "options": [
          {
            "en": "Can someone help me, please? My bag was stolen and I lost my passport!",
            "correct": true
          },
          {
            "en": "The line is busy.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Local",
        "en": "Oh no! Let's calm down. Do you need to call the police?",
        "pt": "Ah não! Vamos manter a calma. Você precisa chamar a polícia?",
        "options": [
          {
            "en": "Yes, please call the police. My phone is dead, can I make a call?",
            "correct": true
          },
          {
            "en": "I'll call you back.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Local",
        "en": "Of course, use my phone! The police station is two blocks straight down this street.",
        "pt": "Claro, use meu celular! A delegacia fica a dois quarteirões reto nesta rua.",
        "options": [
          {
            "en": "Thank you! I need to file a police report and go to the embassy.",
            "correct": true
          },
          {
            "en": "Let's reschedule for next week.",
            "correct": false
          }
        ]
      },
      {
        "speaker": "Local",
        "en": "I'll walk with you to the station so you're safe.",
        "pt": "Eu vou caminhando com você até a delegacia para você ficar seguro.",
        "options": [
          {
            "en": "Please stay with me. Thank you so much for your help!",
            "correct": true
          },
          {
            "en": "Can I leave him a message?",
            "correct": false
          }
        ]
      }
    ]
  }
];
