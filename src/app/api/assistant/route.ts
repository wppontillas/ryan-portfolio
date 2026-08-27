import { GoogleGenAI } from "@google/genai";
import { buildAssistantSystemPrompt } from "@/lib/assistant";

export const runtime = "nodejs";

const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 1000;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function isChatMessage(value: unknown): value is ChatMessage {
  if (typeof value !== "object" || value === null) return false;
  const { role, content } = value as Record<string, unknown>;
  return (
    (role === "user" || role === "assistant") &&
    typeof content === "string" &&
    content.trim().length > 0
  );
}

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response("The AI assistant isn't configured yet.", {
      status: 503,
    });
  }

  const body = await request.json().catch(() => null);
  const incoming = (body as { messages?: unknown } | null)?.messages;

  if (!Array.isArray(incoming)) {
    return new Response("Invalid request.", { status: 400 });
  }

  const messages: ChatMessage[] = incoming
    .filter(isChatMessage)
    .slice(-MAX_MESSAGES)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_LENGTH) }));

  if (messages.length === 0 || messages[messages.length - 1].role !== "user") {
    return new Response("Invalid request.", { status: 400 });
  }

  const ai = new GoogleGenAI({ apiKey });

  const stream = await ai.models.generateContentStream({
    model: "gemini-3.6-flash",
    contents: messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    })),
    config: {
      systemInstruction: buildAssistantSystemPrompt(),
      maxOutputTokens: 1024,
    },
  });

  const encoder = new TextEncoder();
  const textStream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          if (chunk.text) controller.enqueue(encoder.encode(chunk.text));
        }
      } catch (error) {
        console.error("Assistant stream error:", error);
      } finally {
        controller.close();
      }
    },
  });

  return new Response(textStream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
