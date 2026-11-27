import { useState } from "react";
import {
  experience,
  skills,
  projects,
  education,
  achievements,
  contact,
  hero,
  about,
} from "../data/portfolioData.js";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Gurmeet's portfolio assistant. Ask me about his experience, skills, projects, education, or how to contact him.",
      sender: "bot",
    },
  ]);

  const getResponse = (userInput) => {
    const msg = userInput.toLowerCase();

    const matchKeyword = (keywords) =>
      keywords.some((k) => msg.includes(k));

    if (matchKeyword(["hello", "hi", "hey", "start"])) {
      return "Hello! I can tell you about Gurmeet's experience, skills, projects, education, achievements, and contact details. What would you like to know?";
    }

    if (matchKeyword(["experience", "work", "job", "tesseract", "innostax", "role"])) {
      const expText = experience
        .map(
          (e) =>
            `${e.role} at ${e.company} (${e.period}): ${e.bullets.slice(0, 2).join(" ")}`
        )
        .join(" ");
      return `Gurmeet is a Backend & Systems Engineer with 2+ years of experience. ${expText} Would you like details on a specific role?`;
    }

    if (matchKeyword(["skill", "tech", "stack", "language", "backend", "aws", "docker", "java", "python", "spring", "flask", "fastapi", "redis", "mongodb", "react", "qdrant", "rag", "llm"])) {
      const skillList = skills.map((s) => `${s.title}: ${s.items.join(", ")}`).join("; ");
      return `Gurmeet's technical skills include: ${skillList}. Is there a specific technology you're interested in?`;
    }

    if (matchKeyword(["project", "ai trading", "rag", "tic-tac", "calculator", "testing system", "compiler"])) {
      const projList = projects.map((p) => `${p.name} (${p.stack})`).join("; ");
      return `Notable projects include: ${projList}. The AI Trading Assistant is his latest RAG-based financial intelligence platform built with FastAPI, Qdrant, and Redis. Want details on one?`;
    }

    if (matchKeyword(["education", "degree", "university", "college", "mca", "b.sc", "delhi university", "panjab university", "cgpa"])) {
      const eduList = education
        .map((e) => `${e.degree} at ${e.institution} (${e.period}) - ${e.detail}`)
        .join("; ");
      return `${eduList}. He also secured AIR 10 in Delhi University MCA Entrance and AIR 543 in NIMCET 2021.`;
    }

    if (matchKeyword(["achievement", "award", "rank", "leetcode", "geeksforgeeks", "air", "nimcet", "400"])) {
      return `Achievements: ${achievements.items.join("; ")}.`;
    }

    if (matchKeyword(["contact", "email", "phone", "linkedin", "github", "hire", "reach", "connect"])) {
      return `You can reach Gurmeet at ${contact.email} or ${contact.phone}. LinkedIn: ${contact.linkedin}, GitHub: ${contact.github}. He's open to relocation and backend/full-stack roles.`;
    }

    if (matchKeyword(["resume", "cv", "download", "pdf"])) {
      return "You can download Gurmeet's resume from the Hero or About section using the 'Download Resume' / 'View Resume' buttons.";
    }

    if (matchKeyword(["about", "who", "summary", "background"])) {
      return `${about.summary.join(" ")} He is open to relocation.`;
    }

    if (matchKeyword(["thank", "thanks", "bye", "goodbye"])) {
      return "You're welcome! Feel free to ask anything else or reach out via the Contact section.";
    }

    return "I'm not sure about that. You can ask me about Gurmeet's experience, skills, projects, education, achievements, or contact details. Or visit the Contact section to reach him directly.";
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const botMsg = { text: getResponse(input), sender: "bot" };
      setMessages((prev) => [...prev, botMsg]);
    }, 400);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="rounded-full bg-brand p-4 shadow-xl transition hover:scale-105"
        aria-label={isOpen ? "Close chat" : "Open chat"}
        title={isOpen ? "Close chat" : "Chat with portfolio assistant"}
      >
        <i
          className={`fas ${isOpen ? "fa-times" : "fa-comment-dots"} text-white text-lg`}
        />
      </button>

      {isOpen && (
        <div className="mt-3 w-[380px] h-[520px] rounded-2xl border border-slate-200 bg-white shadow-2xl flex flex-col dark:border-slate-800 dark:bg-slate-950">
          <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Portfolio Assistant
            </h3>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">
              AI Assistant
            </span>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[85%] p-3 rounded-xl rounded-tl-none ${
                  msg.sender === "user"
                    ? "ml-auto bg-brand text-white rounded-tr-none"
                    : "mr-auto bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-3 border-t border-slate-200 dark:border-slate-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Gurmeet..."
                className="flex-1 rounded-xl border border-slate-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-brand"
              />
              <button
                type="submit"
                disabled={!input.trim()}
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
