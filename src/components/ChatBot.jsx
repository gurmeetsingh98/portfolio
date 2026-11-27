import { useState, useEffect, useRef } from "react";
import { CHATBOT_CONFIG } from "../config/chatbot.js";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Gurmeet's AI portfolio assistant. Ask me about his experience, skills, projects, education, or how to contact him.",
      sender: "bot",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getResponse = async (userInput) => {
    setIsLoading(true);

    try {
      const response = await fetch(CHATBOT_CONFIG.apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            { role: "system", content: CHATBOT_CONFIG.systemPrompt },
            ...messages.slice(-10).map((m) => ({
              role: m.sender === "user" ? "user" : "model",
              content: m.text,
            })),
            { role: "user", content: userInput },
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const reply =
        data.candidates?.[0]?.content?.parts
          ?.map((part) => part.text || "")
          .join("") ||
        data.response ||
        "I'm sorry, I couldn't generate a response.";

      setMessages((prev) => [...prev, { text: reply, sender: "bot" }]);
    } catch (err) {
      console.error("Chatbot error:", err);
      setMessages((prev) => [
        ...prev,
        {
          text: "I'm having trouble connecting right now. You can still reach Gurmeet directly via the Contact section (email, LinkedIn, or GitHub).",
          sender: "bot",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    if (CHATBOT_CONFIG.apiEndpoint) {
      getResponse(input);
    } else {
      setMessages((prev) => [
        ...prev,
        {
          text: "AI chatbot is not configured yet. Please set up the LLM API endpoint. In the meantime, you can reach Gurmeet directly via the Contact section.",
          sender: "bot",
        },
      ]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {/* Toggle button - only shows when closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-brand text-white shadow-xl flex items-center justify-center transition-all hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
          aria-label="Open chat"
          title="Chat with portfolio assistant"
        >
          <i className="fas fa-comment-dots text-xl"></i>
        </button>
      )}

      {/* Chat window - only shows when open */}
      {isOpen && (
        <div className="mt-4 w-[400px] h-[600px] rounded-2xl border border-slate-200 bg-white shadow-2xl flex flex-col dark:border-slate-800 dark:bg-slate-950 animate-in fade-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between dark:border-slate-800 dark:bg-slate-900 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-sm font-bold text-white">
                GS
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white leading-tight">
                  Portfolio Assistant
                </h3>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">
                  AI Assistant
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors dark:hover:bg-slate-800 dark:hover:text-white"
              aria-label="Close chat"
            >
              <i className="fas fa-times text-sm"></i>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[90%] p-4 rounded-2xl ${
                  msg.sender === "user"
                    ? "ml-auto bg-brand text-white rounded-tr-none border-b-[4px] border-b-brand"
                    : "mr-auto bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100 rounded-bl-none border-b-[4px] border-b-slate-200 dark:border-b-slate-700"
                }`}
              >
                <p className="text-sm leading-relaxed">{msg.text}</p>
              </div>
            ))}
            {isLoading && (
              <div className="mr-auto flex items-center gap-2 p-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600 animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Gurmeet's portfolio..."
                disabled={!CHATBOT_CONFIG.apiEndpoint || isLoading}
                className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand disabled:opacity-60 disabled:cursor-not-allowed dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-brand"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading || !CHATBOT_CONFIG.apiEndpoint}
                className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 hover:shadow-lg"
              >
                <i className="fas fa-paper-plane text-sm"></i>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
