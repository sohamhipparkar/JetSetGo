import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MessageCircle, X, Send, RotateCcw, Plane, Sparkles } from "lucide-react";

const STORAGE_KEY = "jetsetgo-chat";

const WELCOME = {
  role: "assistant",
  isWelcome: true, // shown in the UI only, never sent to Gemini
  text: "Hi! I'm **Jet**, your JetSetGo travel assistant ✈️\nAsk me about flights, bookings, baggage, check-in or our destination deals.",
};

const SUGGESTIONS = [
  "Cheapest flight to London?",
  "What's the baggage allowance?",
  "How do I cancel a booking?",
  "Best deals in Asia",
  "How can I contact support?",
];

function loadSavedChat() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "null");
    if (Array.isArray(saved) && saved.length) return saved;
  } catch {
    /* storage not available — start fresh */
  }
  return [WELCOME];
}

// ---------- tiny, safe markdown renderer (bold, links, bullet lists) ----------
function renderInline(text, onInternalLink, keyPrefix) {
  const parts = [];
  const regex = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let match;
  let i = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    if (match[1]) {
      parts.push(<strong key={`${keyPrefix}-b${i++}`}>{match[1]}</strong>);
    } else {
      const label = match[2];
      const href = match[3];
      const isInternal = href.startsWith("/");
      const isSafeExternal = /^(https?:|mailto:|tel:)/i.test(href);
      if (isInternal) {
        parts.push(
          <a
            key={`${keyPrefix}-l${i++}`}
            href={href}
            onClick={(e) => {
              e.preventDefault();
              onInternalLink(href);
            }}
            className="text-indigo-600 font-medium underline underline-offset-2 hover:text-indigo-800"
          >
            {label}
          </a>
        );
      } else if (isSafeExternal) {
        parts.push(
          <a
            key={`${keyPrefix}-l${i++}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 font-medium underline underline-offset-2 hover:text-indigo-800"
          >
            {label}
          </a>
        );
      } else {
        parts.push(label);
      }
    }
    last = regex.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function FormattedText({ text, onInternalLink }) {
  const lines = text.split("\n");
  const blocks = [];
  let list = null;

  lines.forEach((rawLine, idx) => {
    const line = rawLine.trimEnd();
    const bullet = line.match(/^\s*(?:[-*•]|\d+\.)\s+(.*)$/);
    if (bullet) {
      if (!list) {
        list = { ordered: /^\s*\d+\./.test(line), items: [] };
        blocks.push(list);
      }
      list.items.push(bullet[1]);
      return;
    }
    list = null;
    if (line.trim() === "") return;
    const heading = line.match(/^#{1,6}\s+(.*)$/);
    blocks.push({ text: heading ? `**${heading[1]}**` : line });
  });

  return (
    <div className="space-y-1.5">
      {blocks.map((block, b) => {
        if (block.items) {
          const ListTag = block.ordered ? "ol" : "ul";
          return (
            <ListTag key={b} className={`${block.ordered ? "list-decimal" : "list-disc"} pl-5 space-y-0.5`}>
              {block.items.map((item, k) => (
                <li key={k}>{renderInline(item, onInternalLink, `${b}-${k}`)}</li>
              ))}
            </ListTag>
          );
        }
        return <p key={b}>{renderInline(block.text, onInternalLink, `${b}`)}</p>;
      })}
    </div>
  );
}

// ------------------------------- the widget -------------------------------
const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(loadSavedChat);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-40)));
    } catch {
      /* ignore */
    }
  }, [messages]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isLoading, isOpen]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 150);
  }, [isOpen]);

  const sendMessage = async (text) => {
    const content = text.trim();
    if (!content || isLoading) return;

    const history = [...messages, { role: "user", text: content }];
    setMessages(history);
    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          page: location.pathname,
          // the welcome message is UI-only, so don't send it
          messages: history.filter((m) => !m.isWelcome).map(({ role, text }) => ({ role, text })),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`);
      setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
    } catch (err) {
      setError(
        err.message === "Failed to fetch"
          ? "Can't reach the assistant. Is the server running?"
          : err.message
      );
      // put the failed message back so the user can retry
      setMessages((prev) => prev.slice(0, -1));
      setInput(content);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const resetChat = () => {
    setMessages([WELCOME]);
    setError("");
    setInput("");
  };

  const goTo = (path) => {
    navigate(path);
    if (window.innerWidth < 640) setIsOpen(false);
  };

  const showSuggestions = messages.length <= 1 && !isLoading;

  return (
    <>
      {/* Chat window */}
      <div
        className={`fixed z-[60] bottom-24 right-4 left-4 sm:left-auto sm:right-6 sm:w-[380px] flex flex-col bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden origin-bottom-right transition-all duration-300 ${
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
        style={{ height: "min(600px, calc(100vh - 8rem))" }}
        role="dialog"
        aria-label="JetSetGo assistant"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-900 via-blue-800 to-blue-700 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-md">
                <Plane className="h-5 w-5 text-blue-700 -rotate-45" />
              </div>
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 border-2 border-indigo-900" />
            </div>
            <div>
              <div className="text-white font-semibold leading-tight">Jet · Travel Assistant</div>
              <div className="text-blue-200 text-xs flex items-center gap-1">
                <Sparkles className="h-3 w-3" /> Powered by Gemini
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={resetChat}
              className="p-2 rounded-full text-blue-100 hover:text-white hover:bg-white/10 transition-colors"
              title="Start a new chat"
              aria-label="Start a new chat"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full text-blue-100 hover:text-white hover:bg-white/10 transition-colors"
              title="Close"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              {m.role === "assistant" && (
                <div className="h-7 w-7 mr-2 mt-1 shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
                  <Plane className="h-3.5 w-3.5 text-white -rotate-45" />
                </div>
              )}
              <div
                className={`max-w-[80%] px-3.5 py-2.5 text-sm leading-relaxed shadow-sm break-words ${
                  m.role === "user"
                    ? "bg-indigo-600 text-white rounded-2xl rounded-br-md whitespace-pre-wrap"
                    : "bg-white text-gray-800 border border-gray-100 rounded-2xl rounded-bl-md"
                }`}
              >
                {m.role === "user" ? m.text : <FormattedText text={m.text} onInternalLink={goTo} />}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start items-center">
              <div className="h-7 w-7 mr-2 shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
                <Plane className="h-3.5 w-3.5 text-white -rotate-45" />
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm flex gap-1">
                {[0, 150, 300].map((delay) => (
                  <span
                    key={delay}
                    className="h-2 w-2 rounded-full bg-indigo-400 animate-bounce"
                    style={{ animationDelay: `${delay}ms` }}
                  />
                ))}
              </div>
            </div>
          )}

          {showSuggestions && (
            <div className="pt-1 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border border-indigo-200 bg-white text-indigo-700 hover:bg-indigo-50 hover:border-indigo-400 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        {error && (
          <div className="px-4 py-2 text-xs text-red-700 bg-red-50 border-t border-red-100">{error}</div>
        )}

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-gray-100 bg-white flex items-end gap-2">
          <textarea
            ref={inputRef}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me about your trip..."
            maxLength={2000}
            className="flex-1 resize-none max-h-28 rounded-xl border-2 border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="h-10 w-10 shrink-0 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            aria-label="Send message"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>

      {/* Floating launcher button */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="fixed z-[60] bottom-6 right-4 sm:right-6 h-14 w-14 rounded-full bg-gradient-to-br from-indigo-600 to-blue-700 text-white shadow-xl flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-300"
        aria-label={isOpen ? "Close chat" : "Open chat with JetSetGo assistant"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-green-400 border-2 border-white" />
        )}
      </button>
    </>
  );
};

export default ChatBot;
