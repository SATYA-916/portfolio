export const personalInfo = {
  name: "K. Satya Sampath Kumar",
  roles: [
    "Full Stack Developer (MERN)",
    "AI & RAG Pipeline Engineer",
    "UI/UX & Web Product Designer",
    "Automation & API Specialist"
  ],
  tagline: "Building resilient full-stack applications, intelligent AI pipelines, and intuitive user experiences.",
  summary: "Computer Science Engineering student with hands-on experience building full-stack web applications and automation solutions using React, Node.js, Express.js, and MongoDB. Experienced in developing AI-powered data pipelines, REST API integrations, and automated email workflows, including Retrieval-Augmented Generation (RAG) systems with ChromaDB and Ollama. Bridging the gap between Figma design systems and production-ready code.",
  email: "satyasampath79@gmail.com",
  phone: "+91 9550736570",
  location: "Visakhapatnam, India",
  socials: {
    github: "https://github.com/SATYA-916",
    linkedin: "https://linkedin.com/in/satya-sampath-93449a28b",
    leetcode: "https://leetcode.com",
    email: "mailto:satyasampath79@gmail.com"
  },
  stats: [
    { label: "Projects Built", value: "6+" },
    { label: "Internships Completed", value: "2" },
    { label: "B.Tech CGPA", value: "8.2" },
    { label: "Core Stack", value: "MERN + AI" }
  ]
};

export const skillsData = {
  languages: [
    { name: "JavaScript (ES6+)", level: "Advanced" },
    { name: "Python", level: "Intermediate" },
    { name: "HTML5 & CSS3", level: "Advanced" },
    { name: "SQL", level: "Intermediate" }
  ],
  frontend: [
    { name: "React.js", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "Responsive UI/UX", level: "Advanced" },
    { name: "Streamlit", level: "Intermediate" },
    { name: "State Management", level: "Intermediate" }
  ],
  backend: [
    { name: "Node.js", level: "Advanced" },
    { name: "Express.js", level: "Advanced" },
    { name: "REST APIs", level: "Advanced" },
    { name: "WebSockets & Socket.IO", level: "Intermediate" },
    { name: "JWT Authentication", level: "Intermediate" }
  ],
  aiGenAi: [
    { name: "RAG Pipelines", level: "Advanced" },
    { name: "Vector Embeddings", level: "Advanced" },
    { name: "ChromaDB", level: "Intermediate" },
    { name: "Ollama (nomic-embed)", level: "Intermediate" },
    { name: "Google Gemini AI API", level: "Intermediate" },
    { name: "pdfplumber Extraction", level: "Intermediate" }
  ],
  database: [
    { name: "MongoDB", level: "Advanced" },
    { name: "MongoDB Atlas", level: "Advanced" },
    { name: "ChromaDB (Vector)", level: "Intermediate" }
  ],
  toolsAndDevOps: [
    { name: "Figma (UI/UX Mockups)", level: "Advanced" },
    { name: "Git & GitHub", level: "Advanced" },
    { name: "CI/CD (Vercel & Render)", level: "Intermediate" },
    { name: "Cloudflare & DNS", level: "Intermediate" },
    { name: "Brevo Email API", level: "Intermediate" },
    { name: "VS Code & Postman", level: "Advanced" }
  ]
};

export const experiences = [
  {
    id: 1,
    role: "Full Stack Web Developer Intern",
    company: "SLS Structo-Mech Consultants",
    location: "Remote / Hybrid",
    period: "Jul 2026 – Present",
    type: "Internship",
    website: "https://www.slsnexus.com/",
    github: "https://github.com/SATYA-916/SLS",
    description: [
      "Designed the company’s official website in Figma (wireframes, layouts, visual design systems) and presented mockups directly to stakeholders for feedback before development.",
      "Developed the approved design into a responsive, high-performance production website using the MERN stack (React, Node.js, Express, MongoDB).",
      "Built an intuitive admin dashboard UI with status tracking (New, To Do, Replied) and delete functionality to streamline client-inquiry triage.",
      "Integrated Brevo Email API to automate dual email notifications — alerting the site owner with full inquiry specs and sending clients an instant 24hr acknowledgment response.",
      "Configured Git-based CI/CD pipelines via Vercel and Render for automated zero-downtime deployments, alongside DNS and SSL setup through Cloudflare."
    ],
    skills: ["React", "Node.js", "Express.js", "MongoDB", "Figma", "Brevo API", "Cloudflare", "CI/CD"]
  },
  {
    id: 2,
    role: "AI Virtual Internship – PolicyNav",
    company: "Infosys Springboard",
    location: "Virtual",
    period: "Aug 2025 – Oct 2025",
    type: "Virtual Internship",
    github: "https://github.com/SATYA-916/Public_Policy_Navigation_Using_AI",
    description: [
      "Built an end-to-end automated Retrieval-Augmented Generation (RAG) pipeline in Python and Streamlit to simplify complex public policy document navigation.",
      "Automated document processing using pdfplumber for deep text extraction and line-based semantic chunking of dense legal files.",
      "Generated vector embeddings using Ollama (nomic-embed-text) and stored them in a persistent ChromaDB vector database for automated similarity search.",
      "Engineered a grounded-prompting workflow that surfaces source-referenced document chunks via cosine similarity to drastically reduce AI hallucinations."
    ],
    skills: ["Python", "Streamlit", "RAG", "ChromaDB", "Ollama", "Embeddings", "pdfplumber"]
  }
];

export const projects = [
  {
    id: "interview-ai",
    title: "Interview AI Platform",
    category: "Full Stack & Generative AI",
    badge: "Featured AI Project",
    summary: "Full-stack AI interview preparation platform offering ATS-friendly resume analysis, personalized technical question generation, and skill-gap reports using Google Gemini AI.",
    highlights: [
      "Automated resume analysis pipeline parsing candidate profiles into custom question banks",
      "Interactive mock interview interface with real-time feedback and gap analysis",
      "Secure JWT user authentication, protected routes, and session persistence",
      "Deployed with scalable architecture across Vercel, Render, and MongoDB Atlas"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Google Gemini AI", "JWT", "Tailwind CSS"],
    github: "https://github.com/SATYA-916/AI_interview_preparation",
    demo: "https://ai-interview-preparation-dun.vercel.app/",
    featured: true
  },
  {
    id: "collab-editor",
    title: "Real-Time Collaborative Code Editor",
    category: "Distributed Systems & WebSockets",
    badge: "Real-Time Collaboration",
    summary: "Simultaneous multi-user code editor with conflict-free synchronization, peer cursor tracking, and distraction-free React interface.",
    highlights: [
      "Integrated Yjs CRDT and Socket.IO for conflict-free real-time collaborative text editing",
      "Engineered low-latency WebSocket communication layer for seamless peer updates",
      "Designed responsive and clean interface balancing editor workspace and active user roster",
      "Deployed for zero-friction live testing using Vercel and Render"
    ],
    tech: ["React.js", "Socket.IO", "Yjs CRDT", "Node.js", "Express.js", "WebSockets", "Vercel"],
    github: "https://github.com/SATYA-916/collab-real",
    demo: "https://collab-real-19et.vercel.app/",
    featured: true
  },
  {
    id: "sls-nexus",
    title: "SLS Nexus Corporate Platform",
    category: "Client Production & MERN",
    badge: "Production Client Site",
    summary: "Official production platform for SLS Structo-Mech Consultants with custom admin dashboard, client inquiry workflows, and automated email notifications.",
    highlights: [
      "Figma to production frontend with 100% responsive cross-device consistency",
      "Full administrative dashboard with status triage (New / To Do / Replied)",
      "Automated dual email notification pipelines with Brevo API integration",
      "Configured Cloudflare DNS, SSL security, and Git-driven CI/CD deployment"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Brevo API", "Cloudflare", "Tailwind CSS"],
    github: "https://github.com/SATYA-916/SLS",
    demo: "https://www.slsnexus.com/",
    featured: true
  },
  {
    id: "policy-nav",
    title: "PolicyNav - AI Public Policy Assistant",
    category: "GenAI & RAG Pipeline",
    badge: "GenAI Search Engine",
    summary: "Intelligent document navigation system using local LLMs, vector search, and grounded citations for legal and public policy literature.",
    highlights: [
      "Semantic chunking and embedding generation using nomic-embed-text via Ollama",
      "Vector search engine powered by ChromaDB with cosine similarity matching",
      "Streamlit UI tailored for non-technical users to query complex policy documents",
      "Grounded prompt generation eliminating hallucinations through direct citation tagging"
    ],
    tech: ["Python", "Streamlit", "ChromaDB", "Ollama", "RAG", "pdfplumber"],
    github: "https://github.com/SATYA-916/Public_Policy_Navigation_Using_AI",
    demo: null,
    featured: false
  }
];

export const education = {
  degree: "Bachelor of Technology in Computer Science Engineering",
  institution: "Gandhi Institute of Technology and Management (GITAM)",
  location: "Visakhapatnam, Andhra Pradesh",
  period: "2023 – 2027",
  grade: "CGPA: 8.2 / 10.0",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems (DBMS)",
    "Web Application Development",
    "Artificial Intelligence Fundamentals",
    "Operating Systems & Computer Networks"
  ]
};

export const achievements = [
  {
    title: "Gitathon Hackathon",
    desc: "Collaborated in a four-member engineering team to faithfully recreate the GitHub user interface, executing precise UI reproduction and responsive interactions."
  },
  {
    title: "National Service Scheme (NSS) Volunteer",
    desc: "Active volunteer organizing community development workshops, digital literacy drives, and social welfare initiatives."
  },
  {
    title: "LeetCode & Problem Solving",
    desc: "Regularly solving algorithmic challenges across arrays, strings, dynamic programming, and graphs to sharpen computational thinking."
  }
];
