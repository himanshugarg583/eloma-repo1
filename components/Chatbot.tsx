"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { groupName } from "@/lib/data";

interface Message {
  role: "assistant" | "user";
  content: string;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Hello 👋 Welcome to ${groupName}. How can we help you today?`
    }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const quickReplies = useMemo(
    () => ["Services", "Company info", "Locations", "Careers", "Contact"],
    []
  );

  const getResponse = (text: string) => {
    const lower = text.toLowerCase();

    if (lower.includes("service") || lower.includes("logistics")) {
      return "We provide premium logistics, warehousing, distribution, and supply chain technology services.";
    }

    if (lower.includes("company") || lower.includes("group")) {
      return "Eloma Group unites multiple subsidiaries to deliver global logistics, infrastructure, and technology excellence.";
    }

    if (lower.includes("location") || lower.includes("office")) {
      return "We are present across Australia, China, Singapore, Japan, USA, and Canada with multi-city operations.";
    }

    if (lower.includes("career") || lower.includes("job")) {
      return "We are always looking for talent in logistics, operations, and innovation. Visit the Careers section to explore roles.";
    }

    if (lower.includes("contact") || lower.includes("partner")) {
      return "Share your requirements and we will connect you with the right team within one business day.";
    }

    return "Tell us a bit more and we will guide you to the right team.";
  };

  const handleSend = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) {
      return;
    }

    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: getResponse(trimmed) }
      ]);
      setTyping(false);
    }, 700);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="glass-panel w-[320px] rounded-3xl border border-forest/10 p-4 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-forest/60">
                  AI Concierge
                </p>
                <p className="text-sm font-semibold text-forest">{groupName}</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full border border-forest/10 p-2 text-forest"
                aria-label="Close chatbot"
              >
                <X size={16} />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-sm text-forest/80">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={
                    message.role === "assistant"
                      ? "rounded-2xl bg-white/80 px-3 py-2"
                      : "rounded-2xl bg-forest/10 px-3 py-2 text-forest"
                  }
                >
                  {message.content}
                </div>
              ))}
              {typing ? (
                <div className="rounded-2xl bg-white/80 px-3 py-2 text-forest/70">
                  Typing...
                </div>
              ) : null}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {quickReplies.map((item) => (
                <button
                  key={item}
                  className="rounded-full border border-forest/10 px-3 py-1 text-xs text-forest/70"
                  onClick={() => handleSend(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) =>
                  event.key === "Enter" ? handleSend(input) : undefined
                }
                placeholder="Ask about services, careers, locations"
                className="w-full rounded-full border border-forest/10 px-4 py-2 text-sm"
              />
              <Button
                size="lg"
                onClick={() => handleSend(input)}
                aria-label="Send message"
              >
                Send
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        onClick={() => setOpen(true)}
        className="ml-auto mt-4 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-white shadow-glow"
        aria-label="Open chatbot"
      >
        <MessageSquare size={20} />
      </button>
    </div>
  );
}
