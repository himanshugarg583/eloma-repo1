"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, Send, X } from "lucide-react";

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
      content: `Hello! Welcome to ${groupName}. How can we help you today?`
    }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const quickReplies = useMemo(
    () => ["Services", "Companies", "Locations", "Careers", "Contact"],
    []
  );

  const getResponse = (text: string) => {
    const lower = text.toLowerCase();

    if (lower.includes("service") || lower.includes("logistics")) {
      return "We provide premium logistics, warehousing, distribution, and supply-chain technology services across eight focused businesses.";
    }
    if (lower.includes("compan") || lower.includes("group") || lower.includes("business")) {
      return "Eloma Group unites eight specialist companies delivering global logistics, infrastructure, and technology excellence.";
    }
    if (lower.includes("location") || lower.includes("office")) {
      return "We operate across Australia, China, Singapore, Japan, USA, and Canada with regional offices in major cities.";
    }
    if (lower.includes("career") || lower.includes("job")) {
      return "We are hiring across operations, technology, and strategy. See current openings in the Careers section.";
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
    <div className="fixed bottom-5 right-5 z-50 md:bottom-6 md:right-6">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="mb-3 flex w-[calc(100vw-2.5rem)] max-w-[360px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-forest px-5 py-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/20">
                  <MessageSquare size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-gold">
                    AI Concierge
                  </p>
                  <p className="text-sm font-semibold">{groupName}</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-md p-1.5 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close chatbot"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="max-h-[320px] space-y-3 overflow-y-auto bg-slate-50 p-4 text-sm">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={
                    message.role === "assistant"
                      ? "max-w-[85%] rounded-lg rounded-bl-sm border border-slate-200 bg-white px-3 py-2 text-slate-700 shadow-sm"
                      : "ml-auto max-w-[85%] rounded-lg rounded-br-sm bg-forest px-3 py-2 text-white"
                  }
                >
                  {message.content}
                </div>
              ))}
              {typing ? (
                <div className="max-w-[80px] rounded-lg rounded-bl-sm border border-slate-200 bg-white px-3 py-2.5">
                  <span className="inline-flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
                  </span>
                </div>
              ) : null}
            </div>

            {/* Quick replies */}
            <div className="flex flex-wrap gap-1.5 border-t border-slate-200 bg-white px-4 pt-3">
              {quickReplies.map((item) => (
                <button
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 transition-colors hover:border-forest hover:text-forest"
                  onClick={() => handleSend(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 bg-white p-4">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) =>
                  event.key === "Enter" ? handleSend(input) : undefined
                }
                placeholder="Type your message..."
                className="flex-1 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/15"
              />
              <button
                onClick={() => handleSend(input)}
                className="flex h-9 w-9 items-center justify-center rounded-md bg-forest text-white transition-colors hover:bg-forest-dark"
                aria-label="Send message"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-forest text-white shadow-lg transition-all hover:bg-forest-dark hover:shadow-xl"
        aria-label="Open chatbot"
      >
        {open ? <X size={20} /> : <MessageSquare size={20} />}
      </button>
    </div>
  );
}
