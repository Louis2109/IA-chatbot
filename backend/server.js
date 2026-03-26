#!/usr/bin/env node

import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

// Charger les variables d'environnement
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Vérifier que la clé API est configurée
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("❌ Erreur : GEMINI_API_KEY non définie dans .env");
  process.exit(1);
}

// Initialiser le client Gemini
const client = new GoogleGenerativeAI(apiKey);
const model = client.getGenerativeModel({ model: "gemini-2.5-flash" });

// Route santé du serveur
app.get("/health", (req, res) => {
  res.json({ status: "✅ Backend is running", timestamp: new Date().toISOString() });
});

// Route chat - Point d'entrée principal
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    // Validation
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required" });
    }

    if (messages.length === 0) {
      return res.status(400).json({ error: "Messages array cannot be empty" });
    }

    console.log(`📨 Requête reçue avec ${messages.length} message(s)`);

    // Formater les messages pour l'API Gemini
    const formattedMessages = messages.map((msg) => ({
      role: msg.role === "bot" ? "model" : msg.role,
      parts: [{ text: msg.content }],
    }));

    // Appeler l'API Gemini
    console.log("🔄 Appel à l'API Gemini...");
    const result = await model.generateContent({
      contents: formattedMessages,
    });

    // Extraire la réponse
    const responseText = result.response.text();

    console.log("✅ Réponse reçue de Gemini");

    // Renvoyer la réponse au frontend
    res.json({ response: responseText });
  } catch (error) {
    console.error("❌ Erreur API:", error.message);

    // Gérer les différents types d'erreurs
    if (error.message.includes("429")) {
      return res.status(429).json({
        error: "Rate limit exceeded",
        message: "Trop de requêtes. Veuillez réessayer plus tard.",
      });
    }

    if (error.message.includes("403")) {
      return res.status(403).json({
        error: "Permission denied",
        message: "Vérifiez votre clé API Gemini.",
      });
    }

    res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
});

// Route 404
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Gestionnaire d'erreur global
app.use((err, req, res, next) => {
  console.error("❌ Erreur non gérée:", err);
  res.status(500).json({ error: "Internal server error" });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log("🤖 Backend Louis Chatbot");
  console.log("════════════════════════════════════════");
  console.log(`✅ Serveur en écoute sur http://localhost:${PORT}`);
  console.log(`📡 Endpoint chat : POST http://localhost:${PORT}/api/chat`);
  console.log(`🏥 Health check : GET http://localhost:${PORT}/health`);
  console.log("════════════════════════════════════════");
});
