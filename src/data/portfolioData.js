// export const navLinks = [
//   { id: "home", label: "Home" },
//   { id: "about", label: "About" },
//   { id: "experience", label: "Experience" },
//   { id: "skills", label: "Skills" },
//   { id: "projects", label: "Projects" },
//   { id: "contact", label: "Contact" },
// ];

// export const hero = {
//   name: "Gurmeet Singh",
//   title: "Software Engineer",
//   subtitle:
//     "Backend-focused engineer building real-time analytics platforms, low-latency APIs, and resilient data systems.",
//   resumeUrl: "/GurmeetSingh_Resume.pdf",
//   imageUrl: "/images/WhatsApp Image 2024-01-18 at 03.02.35_4308a847.jpg",
// };

// export const about = {
//   headline: "I build reliable backend systems.",
//   summary: [
//     "I'm Gurmeet Singh, a Software Engineer focused on backend systems and real-time analytics. I build production-grade platforms that prioritize reliability, observability, and low-latency performance.",
//     "At Tesseract Capital, I designed and delivered a real-time trading analytics platform end-to-end, including streaming, caching, and alerting workflows. I also build secure, scalable APIs and dashboards that help teams make fast, data-driven decisions.",
//     "Previously at Innostax Software Labs, I optimized backend services, reduced API latency, and improved database performance. I enjoy solving complex problems, collaborating across teams, and continuously improving engineering systems.",
//     "I care about clean architecture, thoughtful system design, and measurable impact. I communicate proactively, document decisions, and ship features that scale with business growth.",
//   ],
//   highlights: [
//     "Built low-latency analytics pipelines with streaming + caching for real-time decision making.",
//     "Improved API performance and database efficiency in production systems.",
//     "Delivered secure, role-based access using Auth0 and robust monitoring/alerting.",
//     "Comfortable owning features end-to-end, from design to deployment and observability.",
//   ],
//   imageUrl: "/images/sahib.jpg",
// };

// export const experience = [
//   {
//     role: "Software Engineer",
//     company: "Tesseract Capital Pvt. Ltd.",
//     team: "Trading Infrastructure",
//     period: "Jul 2025 – Present",
//     location: "Gurugram, India",
//     bullets: [
//       "Independently designed and built a real-time trading analytics platform from scratch to track Strategy PnL and IndPnL, providing live visibility into trading performance.",
//       "Developed a Python-based real-time broadcaster to ingest and stream strategy PnL data with low latency to backend services.",
//       "Implemented high-performance Spring Boot backend services to process live trading data, persist state in Redis, and push updates to clients via WebSocket-based communication.",
//       "Designed a scalable data pipeline using Redis for real-time caching and MongoDB for persistent storage of strategy metadata and user-specific configurations.",
//       "Built secure authentication and authorization flows using Auth0, enabling user-specific access control and secure storage of trading analytics data.",
//       "Owned the complete end-to-end analytics pipeline, exposing backend APIs to a React + TypeScript (Vite) dashboard for real-time visualization using Highcharts.",
//       "Created infrastructure monitoring and automation systems to track trading server availability (NSE/BSE), strategy health, and file integrity in production environments.",
//       "Implemented file monitoring and callback-based automation to detect missing or delayed strategy files and trigger real-time alerts via Telegram and Email notifications.",
//       "Designed backend systems with a focus on fault tolerance, observability, and reliability, ensuring stable performance during live trading hours.",
//       "Took full ownership of system architecture, development, and deployment, delivering the company’s first production-ready PnL tracking platform.",
//     ],
//     tech: [
//       "Java",
//       "Spring Boot",
//       "Python",
//       "Redis",
//       "MongoDB",
//       "Auth0",
//       "React",
//       "TypeScript",
//       "Highcharts",
//       "Docker",
//       "Git",
//     ],
//   },
//   {
//     role: "Software Development Engineer-1",
//     company: "Innostax Software Labs Pvt. LTD",
//     period: "May 2024 – May 2025",
//     location: "Gurugram, India",
//     bullets: [
//       "Designed and optimized scalable backend services using Python (Flask) and Java (Spring Boot), reducing API latency by 35% and significantly improving system reliability.",
//       "Built and maintained production-grade RESTful APIs with robust request validation, centralized exception handling, and clean layered architecture, ensuring high maintainability and scalability.",
//       "Optimized database interactions using SQLAlchemy and Spring Data JPA, reducing query response times by up to 30% while maintaining transactional consistency.",
//     ],
//     tech: ["Python", "Flask", "Java", "Spring Boot", "REST APIs", "Docker", "SQLAlchemy", "PostgreSQL", "Git"],
//   },
// ];

// export const skills = [
//   {
//     title: "Programming Languages",
//     items: ["C", "C++", "Java", "Python"],
//   },
//   {
//     title: "Backend & APIs",
//     items: ["Spring Boot", "Flask", "REST APIs", "WebSockets"],
//   },
//   {
//     title: "Data & Storage",
//     items: ["MongoDB", "Redis", "MySQL"],
//   },
//   {
//     title: "DevOps & Tools",
//     items: ["Docker", "Git", "CI/CD"],
//   },
//   {
//     title: "Core CS",
//     items: ["DSA", "OOP", "Operating Systems", "Networking", "Multithreading", "DBMS"],
//   },
//   {
//     title: "System Design",
//     items: ["Caching strategies", "Observability", "Fault tolerance", "API design", "Scalability"],
//   },
//   {
//     title: "Collaboration",
//     items: ["Agile delivery", "Code reviews", "Technical documentation", "Mentoring"],
//   },
// ];

// export const projects = [
//   {
//     name: "Bluffing AI Opponent in Tic-Tac-Toe",
//     stack: "Java",
//     description:
//       "Built a Java-based Tic-Tac-Toe game using Minimax with Alpha-Beta pruning and a bluffing AI model, boosting AI win rate from 50% to 80%.",
//     snippets: [
//       "Opponent is Smart",
//       "Opponent is Evil",
//       "You are competing with an AI!",
//       "Win it if you can!",
//       "One Mistake and you loose!",
//       "Built in Java language",
//     ],
//     repoUrl: "https://github.com/gurmeetsingh98/Bluffing-AI-Opponent-in-Tic-Tac-Toe",
//     demoUrl: "/images/Tic-Tac-Toe.mp4",
//     imageUrl: "/images/WhatsApp Image 2024-01-18 at 03.46.24_18084d8e.jpg",
//   },
//   {
//     name: "Voice Controlled Calculator",
//     stack: "Python",
//     description:
//       "Built a voice-controlled calculator using speech recognition and NLP, improving accessibility and reducing interaction time by 70%.",
//     snippets: [
//       "Let's Calculate with the wonder of voice",
//       "Hey! I'm your Calci-Alexa",
//       "I can do all the simple calculations",
//       "By the help of your Voice!",
//       "Tech Stack: Python",
//     ],
//     repoUrl: "https://github.com/gurmeetsingh98/Smart-Calculator",
//     demoUrl: "https://github.com/gurmeetsingh98/Smart-Calculator",
//     imageUrl: "/images/WhatsApp Image 2024-01-18 at 03.46.24_5208d56a.jpg",
//   },
//   {
//     name: "Online Testing System",
//     stack: "Django · Python",
//     description:
//       "An online MCQ testing platform with authentication, history tracking, and dynamic question sets.",
//     snippets: [
//       "An Online Test Conducting Web App",
//       "Dynamic MCQ Questions",
//       "History Tracking Included",
//       "Proper Login Authentication",
//       "Tech Stack: Django",
//     ],
//     repoUrl: "https://github.com/gurmeetsingh98/Online_Testing_System",
//     demoUrl: "/images/OTS.mp4",
//     imageUrl: "/images/WhatsApp Image 2024-01-18 at 03.51.29_779b14c1.jpg",
//   },
//   {
//     name: "Java Exception Compiler",
//     stack: "Lex · Yacc",
//     description:
//       "Built a syntax analyzer for Java exception handling code following standard compiler design principles.",
//     snippets: [
//       "Syntax analyzer for Java exceptions",
//       "Follows standard rules of Java",
//       "Compiler design in action",
//       "Tech Stack: Lex, Yacc",
//     ],
//     repoUrl: "https://github.com/gurmeetsingh98/Java_Exception_Compiler",
//     demoUrl: "/images/JEC.mp4",
//     imageUrl: "/images/WhatsApp Image 2024-01-18 at 03.53.41_0ccddfcc.jpg",
//   },
// ];

// export const contact = {
//   email: "gurmeet.mca21.du@gmail.com",
//   phone: "+91 76963 07088",
//   location: "Chandigarh",
//   website: "https://gurmeetsingh.netlify.app",
//   linkedin: "https://www.linkedin.com/in/gurmeet-singh-a0331a21b",
//   github: "https://github.com/gurmeetsingh98",
// };




export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  name: "Gurmeet Singh",
  title: "Backend & Systems Engineer",
  subtitle:
    "Building real-time fintech and analytics systems with a focus on low latency, reliability, and scalable backend architecture.",
  resumeUrl: "/GurmeetSingh_Resume.pdf",
  imageUrl: "/images/WhatsApp Image 2024-01-18 at 03.02.35_4308a847.jpg",
};

export const about = {
  headline: "I design and build reliable backend systems.",
  summary: [
    "I’m Gurmeet Singh, a backend and systems-focused software engineer with hands-on experience building real-time, production-grade platforms.",
    "At Tesseract Capital, I built and owned a real-time trading analytics system end-to-end, working on streaming pipelines, caching strategies, secure access control, and production monitoring for live market usage.",
    "Previously at Innostax Software Labs, I worked on scalable backend services, improving API latency, database performance, and overall system reliability.",
    "I care deeply about clean architecture, thoughtful system design, and building systems that are observable, fault-tolerant, and easy to evolve as business requirements grow.",
  ],
  highlights: [
    "Designed and owned low-latency, real-time analytics pipelines used during live market hours.",
    "Improved API performance and database efficiency in production backend systems.",
    "Built secure, role-based access control and production monitoring with alerts.",
    "Comfortable owning backend systems end-to-end, from design and implementation to deployment and observability.",
  ],
  imageUrl: "/images/sahib.jpg",
};

export const experience = [
  {
    role: "Software Engineer",
    company: "Tesseract Capital Pvt. Ltd.",
    team: "Trading Infrastructure",
    period: "Jul 2025 – Present",
    location: "Gurugram, India",
    bullets: [
      "Designed and built a real-time trading analytics platform from scratch, providing live visibility into Strategy PnL and Individual PnL during active market hours.",
      "Implemented a low-latency Python-based broadcaster to ingest and stream live strategy data to backend services.",
      "Built high-performance Spring Boot services to process real-time trading events, store state in Redis, and push live updates to clients using WebSocket-based communication.",
      "Designed a scalable data pipeline using Redis for real-time caching and MongoDB for persistent storage of strategy metadata and user-specific configurations.",
      "Implemented secure authentication and authorization using Auth0, enabling fine-grained, user-level access control for sensitive trading data.",
      "Owned the complete backend analytics pipeline and exposed APIs consumed by a React + TypeScript dashboard for real-time visualization using Highcharts.",
      "Built infrastructure monitoring and automation to track trading server availability (NSE/BSE), strategy health, and production file integrity.",
      "Implemented file monitoring and callback-based automation to detect missing or delayed strategy files and trigger real-time alerts via Telegram and Email.",
      "Designed systems with a strong focus on fault tolerance, observability, and production reliability to ensure stability during live trading hours.",
      "Took full ownership of system architecture, development, and deployment, delivering the company’s first production-ready PnL tracking platform.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Python",
      "Redis",
      "MongoDB",
      "Auth0",
      "React",
      "TypeScript",
      "Highcharts",
      "Docker",
      "Git",
    ],
  },
  {
    role: "Software Development Engineer-1",
    company: "Innostax Software Labs Pvt. LTD",
    period: "May 2024 – May 2025",
    location: "Gurugram, India",
    bullets: [
      "Designed and optimized scalable backend services using Python (Flask) and Java (Spring Boot), reducing API latency by approximately 35%.",
      "Built and maintained production-grade RESTful APIs with strong request validation, centralized exception handling, and clean layered architecture.",
      "Optimized database interactions using SQLAlchemy and Spring Data JPA, reducing query response times by up to 30% while maintaining transactional consistency.",
      "Worked on end-to-end backend feature development, from requirement understanding and design to implementation, testing, and deployment.",
      "Refactored existing backend modules to improve code readability, modularity, and long-term maintainability.",
      "Implemented pagination, filtering, and sorting strategies to handle large datasets efficiently in production APIs.",
      "Collaborated closely with frontend and QA teams to deliver reliable features and quickly resolve production issues.",
      "Participated in code reviews and contributed to enforcing backend coding standards and best practices.",
      "Improved error handling and logging across services to make debugging and production issue analysis easier.",
      "Gained hands-on experience working with Dockerized services and Git-based CI workflows in a team environment."
    ],
    tech: [
      "Python",
      "Flask",
      "Java",
      "Spring Boot",
      "REST APIs",
      "Docker",
      "SQLAlchemy",
      "PostgreSQL",
      "Git",
    ],
  },
];

export const skills = [
  {
    title: "Primary Backend & Systems Skills",
    items: ["Spring Boot", "Flask", "REST APIs", "WebSockets", "Redis", "MongoDB"],
  },
  {
    title: "System Design & Architecture",
    items: [
      "Low-latency system design",
      "Caching strategies",
      "Observability & monitoring",
      "Fault tolerance",
      "API design",
      "Scalability",
    ],
  },
  {
    title: "Programming Languages",
    items: ["Java", "Python", "C", "C++"],
  },
  {
    title: "DevOps & Tooling",
    items: ["Docker", "Git", "CI/CD"],
  },
  {
    title: "Core Computer Science",
    items: ["Data Structures & Algorithms", "OOP", "Operating Systems", "Networking", "Multithreading", "DBMS"],
  },
  {
    title: "Collaboration & Ownership",
    items: ["Agile delivery", "Code reviews", "Technical documentation", "Feature ownership", "Mentoring"],
  },
];

export const projects = [
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
    imageUrl: "/images/WhatsApp Image 2024-01-18 at 03.46.24_18084d8e.jpg",
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
    imageUrl: "/images/WhatsApp Image 2024-01-18 at 03.46.24_5208d56a.jpg",
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
    imageUrl: "/images/WhatsApp Image 2024-01-18 at 03.51.29_779b14c1.jpg",
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
    imageUrl: "/images/WhatsApp Image 2024-01-18 at 03.53.41_0ccddfcc.jpg",
  },
];

export const contact = {
  email: "gurmeet.mca21.du@gmail.com",
  phone: "+91 76963 07088",
  location: "Chandigarh",
  website: "https://gurmeetsingh.netlify.app",
  linkedin: "https://www.linkedin.com/in/gurmeet-singh-a0331a21b",
  github: "https://github.com/gurmeetsingh98",
};
