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
          ...(CHATBOT_CONFIG.apiKey && {
            Authorization: `Bearer ${CHATBOT_CONFIG.apiKey}`,
          }),
        },
        body: JSON.stringify({
          model: CHATBOT_CONFIG.model,
          messages: [
            { role: "system", content: CHATBOT_CONFIG.systemPrompt },
            ...messages.slice(-10).map((m) => ({
              role: m.sender === "user" ? "user" : "assistant",
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
        data.choices?.[0]?.message?.content ||
        data.response ||
        "I'm sorry, I couldn't generate a response. Please try asking about Gurmeet's experience, skills, projects, or contact details.";

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
          text: "AI chatbot is not configured yet. Please set up the LLM API endpoint in src/config/chatbot.js (VITE_CHATBOT_API_ENDPOINT). In the meantime, you can reach Gurmeet directly via the Contact section.",
          sender: "bot",
        },
      ]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="rounded-full bg-brand p-4 shadow-xl transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
        aria-label={isOpen ? "Close chat" : "Open chat"}
        title={isOpen ? "Close chat" : "Chat with portfolio assistant"}
      >
        <i
          className={`fas ${isOpen ? "fa-times" : "fa-comment-dots"} text-white text-lg`}
        />
      </button>

      {isOpen && (
        <div className="mt-3 w-[400px] h-[560px] rounded-2xl border border-slate-200 bg-white shadow-2xl flex flex-col dark:border-slate-800 dark:bg-slate-950 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-xs font-bold text-white">
                GS
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Portfolio Assistant
                </h3>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">
                  AI Assistant
                </p>
              </div>
            </div>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">
              Live
            </span>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[90%] p-3 rounded-xl rounded-tl-none ${
                  msg.sender === "user"
                    ? "ml-auto bg-brand text-white rounded-tr-none"
                    : "mr-auto bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="mr-auto flex gap-1">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600 animate-bounce"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-3 border-t border-slate-200 dark:border-slate-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Gurmeet's portfolio..."
                disabled={!CHATBOT_CONFIG.apiEndpoint || isLoading}
                className="flex-1 rounded-xl border border-slate-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-brand"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading || !CHATBOT_CONFIG.apiEndpoint}
                className="rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed transition hover:bg-brandDark"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
