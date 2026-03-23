#!/usr/bin/env python3

import os
import sys
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

# Vérifier la clé API
api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    print("❌ Erreur : GEMINI_API_KEY non définie !")
    print("Définis la clé : export GEMINI_API_KEY='votre-clé'")
    sys.exit(1)

# Configurer l'API
genai.configure(api_key=api_key)
model = genai.GenerativeModel("gemini-2.5-flash")

print("🤖 Testeur API Gemini")
print("═" * 50)
print("Modèle utilisé : gemini-2.5-flash\n")

while True:
    try:
        question = input("❓ Pose une question (ou tape 'exit' pour quitter) : ")
        
        if question.lower() == "exit":
            print("\n👋 Au revoir !")
            break
        
        if not question.strip():
            continue
        
        print("\n⏳ Attente de la réponse...\n")
        
        response = model.generate_content(question)
        
        print("✅ Réponse de Gemini :")
        print("─" * 50)
        print(response.text)
        print("─" * 50 + "\n")
        
    except KeyboardInterrupt:
        print("\n\n👋 Arrêt du programme")
        break
    except Exception as error:
        print(f"❌ Erreur API : {error}\n")
