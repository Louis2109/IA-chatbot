# Louis Chatbot

Louis Chatbot est une application de chatbot basée sur React et Vite, qui utilise l'API Google Gemini pour générer des réponses conversationnelles. L'interface propose un mode sombre/clair, la gestion de plusieurs conversations, et une expérience utilisateur moderne et responsive.

**🔐 Architecture Sécurisée** : Le projet utilise une architecture backend proxy qui protège votre clé API Gemini.

**🚀 Status** : MVP en production ✅ | Déploiement Vercel + Render | Monitoring actif (UptimeRobot)

---

## 🌐 Accès Production

| Plateforme | URL |
|-----------|-----|
| **Frontend** | [chatbot-louis.vercel.app](https://chatbot-louis.vercel.app) |
| **Backend** | https://ia-chatbot-jxs2.onrender.com |
| **Monitoring** | UptimeRobot (ping 10min) |

---

## Fonctionnalités

- ✅ Chat multi-conversations avec historique
- ✅ Mode sombre/clair avec persistance
- ✅ Réponses générées par l'API Gemini
- ✅ Effet de frappe pour les réponses
- ✅ Interface responsive (mobile + desktop)
- ✅ Stockage local des conversations
- ✅ Backend proxy sécurisé (Express.js)
- ✅ Déploiement automatique (CI/CD)

---

## Installation & Démarrage Local

### 1. Cloner le dépôt
```bash
git clone https://github.com/Louis2109/IA-chatbot.git
cd IA-chatbot
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

### 5. Lancer l'Application

Démarrez **2 serveurs** dans des terminaux séparés :

**Terminal 1 - Backend**
```bash
cd backend
npm start
# Écoute sur http://localhost:3001
```

**Terminal 2 - Frontend**
```bash
npm run dev
# Accédez à http://localhost:5173
```

---

## 🏗️ Architecture Production

```
🌍 Frontend (Vercel)
   chatbot-louis.vercel.app
         ↓ HTTPS POST
🔗 Backend (Render)
   ia-chatbot-jxs2.onrender.com/api/chat
         ↓ HTTPS POST
🤖 Gemini API (Google)
   generativelanguage.googleapis.com
```

**Sécurité** : La clé API Gemini est **protégée côté backend** ✅

---

## 📁 Structure du Projet

```
IA-chatbot/
├── backend/
│   ├── server.js          # Express proxy server
│   ├── package.json
│   ├── .env              # ⚠️ Never commit (Git ignored)
│   └── .env.example      # Template for .env
│
├── src/                  # React Frontend
│   ├── components/
│   │   ├── Message.jsx
│   │   ├── PromptForm.jsx
│   │   └── Sidebar.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── test/                 # Test files
│   ├── test-gemini.js
│   └── test-gemini.py
│
├── docs/                 # Documentation
├── package.json
├── vite.config.js
└── README.md
```

---

## 🔧 Technos Utilisées

**Frontend**
- React 19
- Vite 7 (bundler)
- Lucide React (icons)
- CSS3 (theme system)

**Backend**
- Node.js 25+ 
- Express.js 4
- @google/generative-ai
- CORS enabled

**Deployment**
- Vercel (Frontend)
- Render (Backend)
- UptimeRobot (Monitoring)
- GitHub (CI/CD)

---

## 🚀 Déploiement (Production-Ready)

### Frontend sur Vercel
```
1. Connecter repo GitHub → Vercel
2. Déploiement automatique à chaque push
3. Variables d'environnement configurées
```

### Backend sur Render
```
1. Root Directory: /backend
2. Build: npm install
3. Start: node server.js
4. Env vars: GEMINI_API_KEY, PORT, NODE_ENV
5. Auto-deploy on push
```

### Monitoring
```
- UptimeRobot : Ping toutes les 10min
- Alertes en cas de downtime
- Réveille l'instance Render (Free Tier)
```

---

## 🐛 Troubleshooting

| Erreur | Cause | Solution |
|--------|-------|----------|
| **"Failed to fetch"** | Backend non démarré | `cd backend && npm start` |
| **"Consumer suspended"** | Clé API expirée | Générer nouvelle clé API |
| **"Rate limit exceeded"** | Quota atteint | Activer facturation Google Cloud |
| **NetworkError** | CORS/SSL issue | Vérifier URL backend |

---

## 📈 Métriques

- **Frontend Uptime** : 100% (Vercel)
- **Backend Uptime** : 99.4%+ (Render)
- **Response Time** : <1s (Gemini API)
- **Auto-redeploy** : ~2-3 min

---

## 🎯 Roadmap (Phase 2+)

### Phase 2 : Features
- [ ] Authentification utilisateur (JWT)
- [ ] Sauvegarde conversations en DB
- [ ] Support multi-provider (Claude, GPT)
- [ ] Export/Partage conversations

### Phase 3 : Performance
- [ ] Redis caching
- [ ] CDN for assets
- [ ] Load testing
- [ ] Error tracking (Sentry)

### Phase 4 : Enterprise
- [ ] Rate limiting
- [ ] API documentation
- [ ] Analytics dashboard
- [ ] Admin panel

---

## 📝 Licence

Exemple pédagogique. Pas d'usage commercial sans autorisation.
