# Louis Chatbot

Louis Chatbot est une application de chatbot basée sur React et Vite, qui utilise l’API Google Gemini pour générer des réponses conversationnelles. L’interface propose un mode sombre/clair, la gestion de plusieurs conversations, et une expérience utilisateur moderne et responsive.

## Fonctionnalités

- **Chat multi-conversations** : Gérez plusieurs discussions et retrouvez l’historique de chaque chat.
- **Mode sombre / clair** : Changez de thème à tout moment.
- **Réponses générées par l’IA** : Utilise l’API Gemini (Google) pour répondre à vos questions.
- **Effet de frappe** : Les réponses du bot s’affichent progressivement pour une expérience plus naturelle.
- **Interface responsive** : Adaptée aux mobiles et aux ordinateurs.
- **Stockage local** : Les conversations sont sauvegardées dans le navigateur.

## Installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/votre-utilisateur/louis-chatbot.git
   cd louis-chatbot
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer l’API Key**
   - Créez un fichier `.env` à la racine du projet (voir `.env.example`).
   - Ajoutez votre clé API Gemini :
     ```
     VITE_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=VOTRE_API_KEY
     ```

4. **Lancer l’application en développement**
   ```bash
   npm run dev
   ```

## Déploiement

- **GitHub** : Poussez votre code sur un dépôt GitHub.
- **Vercel** : Connectez votre dépôt à [Vercel](https://vercel.com/), ajoutez la variable d’environnement `VITE_API_URL` dans les paramètres du projet, puis déployez.

## Points à améliorer

- **Sécurité de la clé API** : Actuellement, la clé API est exposée côté frontend. Pour un usage en production, il est recommandé de créer un backend (Node.js/Express) qui fait le relais avec l’API Gemini et cache la clé.
- **Gestion des erreurs** : Améliorer la gestion des erreurs réseau ou API pour informer clairement l’utilisateur.
- **Personnalisation du bot** : Ajouter la possibilité de personnaliser l’avatar ou le nom du bot via les paramètres.
- **Support multilingue** : Permettre à l’utilisateur de choisir la langue de l’interface et des réponses.
- **Accessibilité** : Optimiser l’accessibilité (navigation clavier, contraste, ARIA).
- **Authentification** : Ajouter une authentification pour sauvegarder les conversations côté serveur.

## Structure du projet

```
gemini-chatbot/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Message.jsx
│   │   ├── PromptForm.jsx
│   │   └── Sidebar.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── logo.jpeg
│   └── main.jsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Licence

Ce projet est fourni à titre d’exemple pédagogique et n’est pas destiné à un usage commercial sans autorisation.
