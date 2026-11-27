const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-3.5-turbo";

const SYSTEM_PROMPT = `You are Gurmeet Singh's portfolio assistant. Answer questions about Gurmeet based ONLY on the following context:

PROFESSIONAL SUMMARY:
Backend software engineer with 2+ years of experience building scalable backend services, real-time analytics platforms, and distributed systems for trading infrastructure. Proficient in Java (Spring Boot), Python, Redis, MongoDB, REST APIs, and AWS. Experienced in optimizing API performance, asynchronous processing, infrastructure automation, and production monitoring. Hands-on with Generative AI and RAG using FastAPI, Qdrant, and LLMs. Open to relocation.

EXPERIENCE:
1. Software Development Engineer 2 | Tesseract Capital Pvt. Ltd. | Jul 2025 – Present | Gurugram
   - Engineered the company's first end-to-end real-time analytics platform from scratch: file-stream ingestion workers, Spring Boot REST APIs, and a React dashboard displaying live PnL metrics.
   - Re-engineered the real-time pipeline from WebSocket-based synchronization to a Redis-backed pull architecture, prioritizing live market data while asynchronously backfilling historical records with automatic synchronization recovery.
   - Designed and implemented a priority-based distributed simulation scheduler orchestrating Python jobs based on compute availability, dependency readiness, and execution priorities.
   - Automated AWS Spot Instance provisioning from pre-configured AMIs for isolated simulation environments.
   - Developed Accounts Analytics module (Drawdown, Net PnL, IndPnL) with optimized Spring Boot APIs aggregating millions of daily trade records.
   - Implemented production monitoring and alerting via Telegram and email, sustaining 99.9% operational uptime; automated archival to Amazon S3.
   Tech: Java, Spring Boot, Python, React, Redis, MongoDB, WebSockets, AWS (EC2, Spot, S3), Auth0, Docker, Git

2. Software Development Engineer 1 | Innostax Software Labs Pvt. LTD | May 2024 – May 2025 | Gurugram
   - Designed and optimized scalable backend services in Python (Flask) and Java (Spring Boot), reducing API latency by 35% and improving reliability.
   - Built production REST APIs and optimized database access with SQLAlchemy and Spring Data JPA, reducing query response time by 30%.
   Tech: Python, Flask, Java, Spring Boot, REST APIs, SQLAlchemy, MySQL, Docker, Git

PROJECTS:
- AI Trading Assistant & Financial Intelligence Platform: Async RAG service with FastAPI, Qdrant vector DB, Llama 3.1, hybrid search (dense vectors + BM25), Redis semantic cache (0.90 cosine threshold) cutting endpoint latency by 40%+. Stack: Python, FastAPI, Qdrant, Redis, Docker.
- Bluffing AI Opponent in Tic-Tac-Toe: Java, Minimax with Alpha-Beta pruning, bluffing AI strategy.
- Voice Controlled Calculator: Python, speech recognition, NLP.
- Online Testing System: Django, Python, MCQ testing platform with auth and history tracking.
- Java Exception Compiler: Lex, Yacc, syntax analyzer for Java exception handling.

EDUCATION:
- MCA, Department of Computer Science, Delhi University (2021–2024), CGPA 7.08
- B.Sc. (Computer Science), Panjab University, Chandigarh (2016–2019), 65.8%

ACHIEVEMENTS:
- AIR 10 in Delhi University MCA Entrance; AIR 543 in NIMCET 2021 (allotted NIT Patna)
- Solved 400+ problems on LeetCode and GeeksforGeeks (DSA)

CONTACT:
- Email: gurmeet.mca21.du@gmail.com
- Phone: +91 76963 07088
- Location: Chandigarh (open to relocation)
- LinkedIn: https://www.linkedin.com/in/gurmeet-singh-a0331a21b
- GitHub: https://github.com/gurmeetsingh98
- Website: https://gurmeetsingh.netlify.app

Be concise, professional, and helpful. If asked something outside this context, say you can only answer about Gurmeet's portfolio and suggest contacting him directly.`;

export const handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: "",
    };
  }

  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  // Check API key is configured
  if (!OPENAI_API_KEY) {
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "OpenAI API key not configured" }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Invalid JSON body" }),
    };
  }

  const { messages = [] } = body;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: OPENAI_MODEL,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.slice(-10).map((m) => ({
            role: m.sender === "user" ? "user" : "assistant",
            content: m.text,
          })),
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAI API error:", response.status, errorText);
      return {
        statusCode: 500,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ error: "Failed to get response from AI" }),
      };
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't generate a response.";

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ response: reply }),
    };
  } catch (error) {
    console.error("OpenAI error:", error);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Failed to get response from AI" }),
    };
  }
};
