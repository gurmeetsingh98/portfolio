export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  name: "Gurmeet Singh",
  title: "Backend & Systems Engineer",
  subtitle:
    "Backend software engineer with 2+ years of experience building scalable backend services, real-time analytics platforms, and distributed systems for trading infrastructure.",
  resumeUrl: "/Gurmeet_Singh_Resume_.pdf",
  imageUrl: "/images/WhatsApp Image 2024-01-18 at 03.02.35_4308a847.jpg",
};

export const about = {
  headline: "Backend Software Engineer | Scalable Systems & Real-Time Analytics",
  summary: [
    "Backend software engineer with 2+ years of experience building scalable backend services, real-time analytics platforms, and distributed systems for trading infrastructure.",
    "Proficient in Java (Spring Boot), Python, Redis, MongoDB, REST APIs, and AWS. Experienced in optimizing API performance, asynchronous processing, infrastructure automation, and production monitoring.",
    "Hands-on with Generative AI and RAG using FastAPI, Qdrant, and LLMs. Open to relocation.",
  ],
  highlights: [
    "Engineered an end-to-end real-time analytics platform from scratch (file-stream ingestion, Spring Boot REST APIs, React dashboard).",
    "Re-engineered real-time pipelines to Redis-backed pull architecture, improving scalability as strategy volumes grew.",
    "Built a priority-based distributed simulation scheduler orchestrating Python jobs on compute availability and dependencies.",
    "Automated AWS Spot Instance provisioning for isolated simulation environments.",
    "Built an asynchronous RAG service with FastAPI, Qdrant, and Llama 3.1 with Redis semantic caching, cutting endpoint latency by 40%+.",
    "Sustained 99.9% operational uptime with production monitoring and alerting via Telegram and email.",
  ],
  imageUrl: "/images/sahib.jpg",
};

export const experience = [
  {
    role: "Software Development Engineer 2",
    company: "Tesseract Capital Pvt. Ltd.",
    team: "Trading Infrastructure",
    period: "Jul 2025 – Present",
    location: "Gurugram",
    bullets: [
      "Engineered the company’s first end-to-end real-time analytics platform from scratch: file-stream ingestion workers, Spring Boot REST APIs, and a React dashboard displaying live PnL metrics.",
      "Re-engineered the real-time pipeline from WebSocket-based synchronization to a Redis-backed pull architecture, prioritizing live market data while asynchronously backfilling historical records with automatic synchronization recovery, improving scalability as strategy volumes grew.",
      "Designed and implemented a priority-based distributed simulation scheduler that orchestrates Python jobs based on compute availability, dependency readiness, and execution priorities, automating scheduling and improving infrastructure utilization.",
      "Automated AWS Spot Instance provisioning from pre-configured AMIs, enabling one-click deployment of isolated simulation environments for strategy testing.",
      "Developed an Accounts Analytics module (Drawdown, Net PnL, IndPnL) with optimized Spring Boot APIs aggregating millions of daily trade records.",
      "Implemented production monitoring and alerting via Telegram and email for trading servers and strategy execution, sustaining 99.9% operational uptime and reducing incident response time; automated archival of simulation artifacts and reports to Amazon S3.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Python",
      "React",
      "Redis",
      "MongoDB",
      "WebSockets",
      "AWS (EC2, Spot, S3)",
      "Auth0",
      "Docker",
      "Git",
    ],
  },
  {
    role: "Software Development Engineer 1",
    company: "Innostax Software Labs Pvt. LTD",
    team: "Backend Engineering",
    period: "May 2024 – May 2025",
    location: "Gurugram",
    bullets: [
      "Designed and optimized scalable backend services in Python (Flask) and Java (Spring Boot), reducing API latency by 35% and improving reliability.",
      "Built production REST APIs and optimized database access with SQLAlchemy and Spring Data JPA, reducing query response time by 30%.",
      "Collaborated with cross-functional teams to deliver production-grade features and resolve issues promptly.",
    ],
    tech: [
      "Python",
      "Flask",
      "Java",
      "Spring Boot",
      "REST APIs",
      "SQLAlchemy",
      "MySQL",
      "Docker",
      "Git",
    ],
  },
];

export const skills = [
  {
    title: "Languages",
    items: ["Java", "Python", "C/C++"],
  },
  {
    title: "Backend",
    items: ["Spring Boot", "JPA/Hibernate", "Flask", "FastAPI", "REST APIs", "Multithreading"],
  },
  {
    title: "Frontend",
    items: ["React", "WebSockets", "Real-time Dashboards"],
  },
  {
    title: "AI / GenAI",
    items: ["RAG", "LLMs (Groq, Llama 3.1)", "Qdrant", "FastEmbed", "Semantic Caching", "Cursor"],
  },
  {
    title: "Data",
    items: ["MySQL", "MongoDB", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (EC2, Spot Instances, S3)", "Docker", "Docker Compose", "CI/CD", "Git", "Postman"],
  },
  {
    title: "Core",
    items: ["Data Structures & Algorithms", "System Design", "OOP", "Operating Systems"],
  },
];

export const projects = [
  {
    name: "AI Trading Assistant & Financial Intelligence Platform",
    stack: "Python · FastAPI · Qdrant · Redis · Docker",
    description:
      "Built an asynchronous RAG (Retrieval-Augmented Generation) service with FastAPI, Qdrant vector DB, and Llama 3.1 that ingests financial logs and returns context-aware strategy insights using hybrid search (dense vectors + BM25). Added a Redis semantic cache that matches query vectors above a 0.90 cosine threshold to skip LLM calls on repeated questions, cutting endpoint latency by 40%+.",
    snippets: [
      "Asynchronous RAG service with FastAPI",
      "Qdrant vector DB + hybrid search (dense vectors + BM25)",
      "Llama 3.1 for context-aware strategy insights",
      "Redis semantic cache (0.90 cosine threshold), 40%+ latency reduction",
      "Containerized with Docker",
    ],
    repoUrl: "https://github.com/gurmeetsingh98/AI-Trading-Assistant",
    demoUrl: "#",
  },
  {
    name: "Bluffing AI Opponent in Tic-Tac-Toe",
    stack: "Java",
    description:
      "Implemented a Java-based Tic-Tac-Toe engine using Minimax with Alpha-Beta pruning and a bluffing strategy to demonstrate algorithmic decision-making and adversarial logic.",
    snippets: [
      "Minimax with Alpha-Beta pruning",
      "Game state evaluation and heuristics",
      "Demonstrates algorithmic thinking",
      "Built using core Java and OOP principles",
    ],
    repoUrl: "https://github.com/gurmeetsingh98/Bluffing-AI-Opponent-in-Tic-Tac-Toe",
    demoUrl: "/images/Tic-Tac-Toe.mp4",
  },
  {
    name: "Voice Controlled Calculator",
    stack: "Python",
    description:
      "A Python-based voice-controlled calculator leveraging speech recognition and basic NLP to improve accessibility and hands-free interaction.",
    snippets: [
      "Speech recognition based input",
      "NLP-driven command parsing",
      "Focus on accessibility and usability",
      "Built using Python",
    ],
    repoUrl: "https://github.com/gurmeetsingh98/Smart-Calculator",
    demoUrl: "https://github.com/gurmeetsingh98/Smart-Calculator",
  },
  {
    name: "Online Testing System",
    stack: "Django · Python",
    description:
      "An online MCQ testing platform with authentication, dynamic question sets, and test history tracking.",
    snippets: [
      "User authentication and authorization",
      "Dynamic MCQ generation",
      "Test history and result tracking",
      "Built using Django",
    ],
    repoUrl: "https://github.com/gurmeetsingh98/Online_Testing_System",
    demoUrl: "/images/OTS.mp4",
  },
  {
    name: "Java Exception Compiler",
    stack: "Lex · Yacc",
    description:
      "Built a syntax analyzer for Java exception handling constructs as part of a compiler design project.",
    snippets: [
      "Compiler design fundamentals",
      "Grammar-based parsing",
      "Exception handling syntax analysis",
      "Built using Lex and Yacc",
    ],
    repoUrl: "https://github.com/gurmeetsingh98/Java_Exception_Compiler",
    demoUrl: "/images/JEC.mp4",
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Department of Computer Science, Delhi University",
    period: "2021 – 2024",
    detail: "CGPA: 7.08",
    highlights: ["AIR 10 in Delhi University MCA Entrance", "AIR 543 in NIMCET 2021 (allotted NIT Patna)"],
  },
  {
    degree: "B.Sc. (Computer Science)",
    institution: "Panjab University, Chandigarh",
    period: "2016 – 2019",
    detail: "Percentage: 65.8%",
    highlights: [],
  },
];

export const achievements = {
  headline: "Achievements",
  items: [
    "Solved 400+ problems on LeetCode and GeeksforGeeks (Data Structures & Algorithms)",
    "AIR 10 in Delhi University MCA Entrance",
    "AIR 543 in NIMCET 2021 (allotted NIT Patna)",
  ],
};

export const contact = {
  email: "gurmeet.mca21.du@gmail.com",
  phone: "+91 76963 07088",
  location: "Chandigarh",
  website: "https://gurmeetsingh.netlify.app",
  linkedin: "https://www.linkedin.com/in/gurmeet-singh-a0331a21b",
  github: "https://github.com/gurmeetsingh98",
};
