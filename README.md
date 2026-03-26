# Louis Chatbot

Louis Chatbot est une application de chatbot basée sur React et Vite, qui utilise l'API Google Gemini pour générer des réponses conversationnelles. L'interface propose un mode sombre/clair, la gestion de plusieurs conversations, et une expérience utilisateur moderne et responsive.

**🔐 Architecture Sécurisée** : Le projet utilise une architecture backend proxy qui protège votre clé API Gemini.

## Fonctionnalités

- Chat multi-conversations avec historique
- Mode sombre/clair
- Réponses générées par l'API Gemini
- Effet de frappe pour les réponses
- Interface responsive
- Stockage local des conversations
- Backend proxy sécurisé (Express.js)

## Installation

### 1. Cloner le dépôt
```bash
git clone https://github.com/Louis2109/louis-chatbot.git
cd louis-chatbot
```

### 2. Installation Frontend
```bash
npm install
```

### 3. Configuration Gemini API
Créez une clé API : https://aistudio.google.com/app/apikey

### 4. Installation Backend
```bash
cd backend
cp .env.example .env
# Éditez .env et ajoutez GEMINI_API_KEY
npm install
```

## Lancer l'Application

Démarrez **2 serveurs** dans des terminaux séparés :

**Terminal 1 - Backend**
```bash
cd backend && npm start
# Écoute sur http://localhost:3001
```

**Terminal 2 - Frontend**
```bash
npm run dev
# Accédez à http://localhost:5173
```

## Architecture

Frontend (React) → Backend (Express) → Gemini API

La clé API est **protégée côté serveur** ✅

## Structure du Projet

```
louis-chatbot/
├── backend/               # Express.js proxy
│   ├── server.js
│   ├── .env              # ⚠️ Ne pas committer
│   └── .env.example
├── src/                  # React frontend
│   ├── components/
│   ├── App.jsx
│   └── index.css
├── package.json
└── README.md
```

## Troubleshooting

**"Failed to fetch"** → Démarrez le backend  
**"Consumer suspended"** → Créez une nouvelle clé API  
**"Rate limit exceeded"** → Activez la facturation

## Licence

Exemple pédagogique. Pas d'usage commercial sans autorisation.
