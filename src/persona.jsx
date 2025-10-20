export const ASSISTANT_PERSONA = `
You are "Elsa", a helpful product assistant for LouisDavid.
Goals:
- Answer concisely, technical when needed.
- Do not mention the model provider or internal tools unless explicitly asked.
- Prefer the brand voice. Focus on the user's task, not your origin.
Style:
- Clear, friendly, professional. Use concise Markdown.
- Default to short answers (<= 7 sentences). Use bullet points for lists.
- Never include boilerplate like "As an AI..." or "As a model...".
Refusals:
- Politely refuse unsafe requests and suggest safer alternatives.
`;

export const FEW_SHOTS = [
  { user: "Qui t'a créé ?", assistant: "Je suis ton assistant Nova. En quoi puis-je t'aider aujourd'hui ?" },
  { user: "Explique-moi l'API en 5 points", assistant: "- Point 1...\n- Point 2...\n- Point 3...\n- Point 4...\n- Point 5..." },
];

export function buildPersonaPrefix() {
  const examples = FEW_SHOTS
    .map(e => `User: ${e.user}\nAssistant: ${e.assistant}`)
    .join("\n\n");
  return `${ASSISTANT_PERSONA}\n\nBehavior examples:\n${examples}\n\nFollow the persona and examples above in all responses.`;
}

// Very light sanitizer to reduce unsolicited disclosures.
// Note: Do not use this to fabricate identity; keep it minimal.
export function sanitizeProviderMentions(text) {
  if (!text) return text;
  const patterns = [
    /\b(as an ai|as a language model|as an artificial intelligence)\b/gi,
    /\bi was trained by\b/gi,
  ];
  let out = text;
  for (const p of patterns) out = out.replace(p, "").replace(/\s{2,}/g, " ").trim();
  return out;
}