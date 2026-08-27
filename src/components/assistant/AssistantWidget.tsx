"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/site";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const GREETING: ChatMessage = {
  role: "assistant",
  content: `Hi! I'm ${siteConfig.name}'s AI assistant. Ask me about services, past work, or how the process works.`,
};

export function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, open]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || isStreaming) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages([...nextMessages, { role: "assistant", content: "" }]);
    setInput("");
    setIsStreaming(true);
    setError(null);

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.ok || !res.body) {
        throw new Error(await res.text());
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let reply = "";

      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        reply += decoder.decode(value, { stream: true });
        setMessages([...nextMessages, { role: "assistant", content: reply }]);
      }
    } catch {
      setError("Something went wrong. Please try again or use the contact form.");
      setMessages(nextMessages);
    } finally {
      setIsStreaming(false);
    }
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        aria-expanded={open}
        whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
        whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-fg shadow-lg shadow-black/20 transition-colors hover:bg-accent/90"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.1-3.4A7.96 7.96 0 0 1 4 12Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="false"
            aria-label={`Chat with ${siteConfig.name}'s AI assistant`}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : 16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-50 flex h-[min(32rem,calc(100vh-8rem))] w-[min(22rem,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl border border-border bg-bg shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <p className="text-sm font-medium text-fg">
                {siteConfig.name}&apos;s Assistant
              </p>
              <span className="flex items-center gap-1.5 text-xs text-fg-secondary">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                AI-powered
              </span>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "ml-auto bg-accent text-accent-fg"
                      : "bg-bg-secondary text-fg"
                  }`}
                >
                  {m.content || (
                    <span className="inline-flex gap-1">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-fg-secondary [animation-delay:-0.2s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-fg-secondary [animation-delay:-0.1s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-fg-secondary" />
                    </span>
                  )}
                </div>
              ))}
              {error && (
                <p role="alert" className="text-xs text-red-400">
                  {error}
                </p>
              )}
            </div>

            <form onSubmit={sendMessage} className="flex items-center gap-2 border-t border-border p-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                disabled={isStreaming}
                aria-label="Message"
                className="flex-1 rounded-full border border-border bg-bg-secondary px-4 py-2 text-sm text-fg placeholder:text-fg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={isStreaming || !input.trim()}
                aria-label="Send message"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-fg transition-colors hover:bg-accent/90 disabled:opacity-50"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M4 12h16m0 0l-6-6m6 6l-6 6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
