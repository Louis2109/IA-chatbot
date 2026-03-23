#!/usr/bin/env node  // Que signifie cette ligne ? Reponse : C'est une ligne de shebang qui indique au système d'exploitation que ce script doit être exécuté avec l'interpréteur Node.js. Cela permet de lancer le script directement depuis la ligne de commande sans avoir à spécifier "node" avant le nom du fichier.

import { GoogleGenerativeAI } from "@google/generative-ai";
import readline from "readline";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("❌ Erreur : GEMINI_API_KEY non définie !");
  console.error("Définis la clé : export GEMINI_API_KEY='votre-clé'");
  process.exit(1);
}

const client = new GoogleGenerativeAI(apiKey);
const model = client.getGenerativeModel({ model: "gemini-2.5-flash" });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function askQuestion() {
  rl.question(
    "\n❓ Pose une question (ou tape 'exit' pour quitter) : ",
    async (question) => {
      if (question.toLowerCase() === "exit") {
        console.log("\n👋 Au revoir !");
        rl.close();
        return;
      }

      if (!question.trim()) {
        askQuestion();
        return;
      }

      try {
        console.log("\n⏳ Attente de la réponse...\n");
        const result = await model.generateContent(question);
        const response = result.response.text();

        console.log("✅ Réponse de Gemini :");
        console.log("─".repeat(50));
        console.log(response);
        console.log("─".repeat(50));

        askQuestion();
      } catch (error) {
        console.error("❌ Erreur API :", error.message);
        askQuestion();
      }
    }
  );
}

console.log("🤖 Testeur API Gemini");
console.log("═".repeat(50));
console.log("Modèle utilisé : gemini-2.5-flash");
askQuestion();
