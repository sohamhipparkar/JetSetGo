// Talks to the Google Gemini API.
// This file only ever runs on the server (Vite dev server locally, or a Vercel
// serverless function in production), so the API key is never sent to the browser.

import { buildSystemPrompt } from "./knowledge.js";

// Models tried in order. If GEMINI_MODEL is set in .env it is tried first.
// If a model name has been retired by Google, the next one is used automatically.
const FALLBACK_MODELS = ["gemini-2.5-flash", "gemini-flash-latest", "gemini-2.5-flash-lite"];

const MAX_HISTORY = 20; // only send the last 20 messages to keep requests small
const MAX_MESSAGE_LENGTH = 2000;

export class ChatError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

function cleanMessages(messages) {
  if (!Array.isArray(messages) || messages.length === 0) {
    throw new ChatError(400, "Please send at least one message.");
  }
  const cleaned = messages
    .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.text === "string")
    .map((m) => ({ role: m.role, text: m.text.trim().slice(0, MAX_MESSAGE_LENGTH) }))
    .filter((m) => m.text.length > 0)
    .slice(-MAX_HISTORY);

  // Gemini expects the conversation to start with a user message.
  while (cleaned.length && cleaned[0].role !== "user") cleaned.shift();
  if (!cleaned.length || cleaned[cleaned.length - 1].role !== "user") {
    throw new ChatError(400, "The last message must come from the user.");
  }
  return cleaned;
}

async function callGemini(model, apiKey, body) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;
  let res;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
      body: JSON.stringify(body),
    });
  } catch {
    throw new ChatError(502, "Couldn't reach the Gemini API. Check your internet connection and try again.");
  }
  const data = await res.json().catch(() => ({}));
  return { res, data };
}

/**
 * @param {{ messages: {role: 'user'|'assistant', text: string}[], page?: string }} payload
 * @param {Record<string, string | undefined>} env
 * @returns {Promise<{ reply: string, model: string }>}
 */
export async function handleChat(payload, env) {
  const apiKey = env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "your_gemini_api_key_here") {
    throw new ChatError(500, "The chatbot isn't set up yet: add GEMINI_API_KEY to the .env file and restart the server.");
  }

  const messages = cleanMessages(payload?.messages);
  const page = typeof payload?.page === "string" ? payload.page.slice(0, 100) : "";

  const body = {
    systemInstruction: { parts: [{ text: buildSystemPrompt(page) }] },
    contents: messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.text }],
    })),
    generationConfig: { temperature: 0.4, maxOutputTokens: 1024 },
  };

  const models = [...new Set([env.GEMINI_MODEL, ...FALLBACK_MODELS].filter(Boolean))];
  let lastError = "Unknown error";

  for (const model of models) {
    const { res, data } = await callGemini(model, apiKey, body);

    if (res.ok) {
      const candidate = data.candidates?.[0];
      const reply = candidate?.content?.parts?.map((p) => p.text || "").join("").trim();
      if (reply) return { reply, model };
      if (candidate?.finishReason === "SAFETY" || data.promptFeedback?.blockReason) {
        return { reply: "Sorry, I can't help with that. Is there anything about your trip I can help with?", model };
      }
      lastError = "Gemini returned an empty answer.";
      continue;
    }

    const message = data.error?.message || `HTTP ${res.status}`;
    // 404 = model name not available -> try the next model.
    if (res.status === 404) {
      lastError = message;
      continue;
    }
    if (res.status === 400 && /api key/i.test(message)) {
      throw new ChatError(500, "Your Gemini API key was rejected. Check GEMINI_API_KEY in the .env file.");
    }
    if (res.status === 403) {
      throw new ChatError(500, "Gemini refused the request (403). Check that your API key is valid and the Gemini API is enabled for it.");
    }
    if (res.status === 429) {
      throw new ChatError(429, "The assistant is getting too many requests right now. Please wait a few seconds and try again.");
    }
    throw new ChatError(502, `Gemini error: ${message}`);
  }

  throw new ChatError(502, `No Gemini model was available. Last error: ${lastError}. Try setting GEMINI_MODEL in .env.`);
}
