// Vercel serverless function: POST /api/chat
// On Vercel, add GEMINI_API_KEY under Project Settings → Environment Variables.
import { handleChat, ChatError } from "../server/chatHandler.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const payload = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body;
    const result = await handleChat(payload, process.env);
    return res.status(200).json(result);
  } catch (err) {
    const status = err instanceof ChatError ? err.status : 500;
    if (status >= 500) console.error("[chat]", err);
    return res.status(status).json({ error: err.message || "Something went wrong." });
  }
}
