// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import crypto from "crypto";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const PORT = process.env.PORT || 5000;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

// Basic sanity check
if (!process.env.GEMINI_API_KEY) {
  console.warn(
    "⚠️  GEMINI_API_KEY is not set. Please add it to backend/.env (GEMINI_API_KEY=...)"
  );
}

// instantiate the SDK client. If GEMINI_API_KEY is set in env, SDK will pick it up,
// but we pass it explicitly to be safe.
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// In-memory session store (for dev only). For production use persistent storage.
const sessions = new Map();
// Keep max turns to avoid unbounded token usage
const MAX_HISTORY_TURNS = 10;

// System prompt — instructs model persona and safety behavior
const SYSTEM_PROMPT = `You are "Mind Engine Companion", a compassionate, non-judgmental mental health coach.
Behave like a supportive coach: listen, reflect, and offer brief, practical coping strategies (1-3 steps).
Do NOT provide medical diagnoses. If the user indicates self-harm, suicidal thoughts, or immediate danger, respond empathetically and urgently,
tell them you are not a clinician, and encourage them to contact local emergency services or a crisis hotline immediately (provide resources where appropriate).
Keep responses concise (aim for <300 words) and prioritize user safety.`;

const app = express();
app.use(cors({ origin: FRONTEND_ORIGIN }));
app.use(express.json({ limit: "100kb" }));

// health check
app.get("/api/health", (req, res) => res.json({ ok: true }));

/**
 * POST /api/therapist
 * body: { message: string, sessionId?: string }
 * returns: { reply: string, sessionId: string }
 */
app.post("/api/therapist", async (req, res) => {
  try {
    const { message, sessionId } = req.body;

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return res.status(400).json({ error: "message is required" });
    }

    // session id handling
    const sid = sessionId || crypto.randomUUID();
    const history = sessions.get(sid) || [];

    // Build short history text (last N turns)
    const relevantHistory = history.slice(-MAX_HISTORY_TURNS);
    const historyText = relevantHistory
      .map((h) => `${h.role === "user" ? "User" : "Assistant"}: ${h.content}`)
      .join("\n");

    // Construct prompt: system prompt + short conversation history + current user message
    const prompt =
      `${SYSTEM_PROMPT}\n\n` +
      (historyText ? `${historyText}\n` : "") +
      `User: ${message}\nAssistant:`;

    // Model selection
    const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";

    // Call Gemini via official SDK
    const response = await ai.models.generateContent({
      model,
      // docs show either passing a string or structured contents; using string is fine
      contents: prompt,
      // optional: to reduce latency / costs, you can disable "thinking"
      // config: { thinkingConfig: { thinkingBudget: 0 } },
    });

    // SDK responses can differ slightly; try common fields
    const reply =
      (response && (response.text || response.output?.[0]?.content?.[0]?.text)) ||
      // fallback for REST-style responses
      (response?.candidates?.[0]?.content?.[0]?.text ?? "");

    // push to session history (user + assistant)
    relevantHistory.push({ role: "user", content: message });
    relevantHistory.push({ role: "assistant", content: reply });
    // store trimmed history
    sessions.set(sid, relevantHistory.slice(-MAX_HISTORY_TURNS * 2));

    return res.json({ reply, sessionId: sid });
  } catch (err) {
    console.error("Error in /api/therapist:", err);
    // provide minimal info to client
    return res.status(500).json({ error: "Failed to generate response" });
  }
});

// (Optional) endpoint to clear session in dev
app.post("/api/therapist/clear", (req, res) => {
  const { sessionId } = req.body;
  if (!sessionId) return res.status(400).json({ error: "sessionId required" });
  sessions.delete(sessionId);
  return res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Mind Engine backend listening on http://localhost:${PORT}`);
  console.log(`Allowed frontend origin: ${FRONTEND_ORIGIN}`);
});
