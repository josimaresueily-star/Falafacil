# FalaFácil — Webapp de Inglês para Conversação (Cloudflare Pages)

Estrutura completa, leve e sem dependências externas (Zero Build), pronta para hospedar gratuitamente no **Cloudflare Pages**.

## Estrutura de Arquivos
```
falafacil/
├── index.html          # Interface principal (PWA mobile-first em modo escuro)
├── manifest.json       # Manifesto PWA (permite instalar na tela inicial do celular)
├── sw.js               # Service Worker (cache offline)
├── _headers            # Cabeçalhos de segurança e permissão de microfone no Cloudflare
├── _redirects          # Redirecionamento SPA para Cloudflare Pages
├── assets/
│   └── icon.svg        # Ícone vetorial do aplicativo
├── css/
│   └── styles.css      # Estilos responsivos
└── js/
    ├── data.js         # Banco completo: 4 níveis, 20 cenários, 80 frases, moldes e diálogos
    ├── speech.js       # Web Speech API (áudio nativo EUA/UK + microfone Shadowing)
    ├── storage.js      # Salvamento de progresso no navegador (LocalStorage)
    └── app.js          # Motor interativo das 4 etapas e abas
```

## Como hospedar no Cloudflare Pages (2 opções)

### Opção 1: Upload Direto (Mais rápido — 1 minuto)
1. Descompacte o arquivo `falafacil-cloudflare.zip`.
2. Acesse o painel do **Cloudflare** -> **Workers & Pages** -> **Create** -> aba **Pages** -> **Upload assets**.
3. Dê um nome ao projeto (ex: `falafacil`) e arraste a pasta `falafacil/` inteira.
4. Clique em **Deploy site**. Seu app já estará no ar com HTTPS automático (necessário para o microfone funcionar!).

### Opção 2: Via GitHub (Deploy automático)
1. Suba o conteúdo da pasta `falafacil/` para um repositório no GitHub.
2. No Cloudflare Pages, clique em **Connect to Git** e selecione o repositório.
3. Em **Build settings**, deixe:
   - **Framework preset:** `None`
   - **Build command:** *(deixe em branco)*
   - **Build output directory:** `/`
4. Clique em **Save and Deploy**.
