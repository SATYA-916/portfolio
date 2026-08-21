export const personalInfo = {
  name: "K. Satya Sampath Kumar",
  roles: [
    "Web Product Designer",
    "UI/UX & Design Systems Specialist",
    "Design-to-Code Frontend Engineer",
    "Full-Stack Web Developer"
  ],
  tagline: "Designing high-conversion web experiences, scalable Figma design systems, and bridging design to production code.",
  summary: "Computer Science student and Web Product Designer who designs and builds end-to-end web experiences — from user research, Figma wireframes, and client-facing prototypes to responsive, production-ready UI. Delivered a client website redesign with mockups presented and approved before development, optimized lead capture and triage flows, and consistently bridges the gap between design tools (Figma) and code (React, Tailwind CSS) for zero-friction handoff.",
  email: "satyasampath79@gmail.com",
  resumeUrl: "/Satya%20Sampath%20Kumar.pdf",
  location: "Visakhapatnam, India",
  socials: {
    github: "https://github.com/SATYA-916",
    linkedin: "https://linkedin.com/in/satya-sampath-93449a28b",
    leetcode: "https://leetcode.com",
    email: "mailto:satyasampath79@gmail.com"
  },
  stats: [
    { label: "Figma to Code", value: "100%" },
    { label: "Design Systems & Web", value: "6+ Projects" },
    { label: "Client & AI Internships", value: "2" },
    { label: "B.Tech CGPA", value: "8.2" }
  ]
};

export const skillsData = {
  design: [
    { name: "Figma (Wireframing & Prototyping)", level: "Advanced" },
    { name: "UI Design & Visual Hierarchy", level: "Advanced" },
    { name: "Design Systems & Token Reuse", level: "Advanced" },
    { name: "Responsive & Fluid Layouts", level: "Advanced" },
    { name: "User Research & Testing", level: "Intermediate" },
    { name: "Interaction Specs & Storyboarding", level: "Intermediate" },
    { name: "Cross-Browser QA", level: "Advanced" }
  ],
  frontend: [
    { name: "React.js", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "HTML5 & Semantic Web", level: "Advanced" },
    { name: "Modern CSS / Flex / Grid", level: "Advanced" },
    { name: "JavaScript (ES6+)", level: "Advanced" },
    { name: "Web Asset Optimization", level: "Advanced" }
  ],
  productMarketing: [
    { name: "Lead Capture Optimization", level: "Advanced" },
    { name: "UX Writing & Copy", level: "Advanced" },
    { name: "Admin Triage Dashboards", level: "Advanced" },
    { name: "Client / Stakeholder Demos", level: "Advanced" },
    { name: "Competitor UI Benchmarking", level: "Intermediate" }
  ],
  backendData: [
    { name: "Node.js & Express.js", level: "Advanced" },
    { name: "MongoDB & Atlas", level: "Advanced" },
    { name: "REST API Integrations", level: "Advanced" },
    { name: "Brevo Email API Workflows", level: "Intermediate" },
    { name: "WebSockets / Real-Time", level: "Intermediate" }
  ],
  aiPipelines: [
    { name: "RAG & Vector Embeddings", level: "Intermediate" },
    { name: "ChromaDB & Ollama", level: "Intermediate" },
    { name: "Streamlit UI Design", level: "Advanced" },
    { name: "Gemini AI API", level: "Intermediate" }
  ],
  toolsDevOps: [
    { name: "Figma", level: "Advanced" },
    { name: "Git & GitHub", level: "Advanced" },
    { name: "Vercel & Render CI/CD", level: "Intermediate" },
    { name: "Cloudflare DNS & SSL", level: "Intermediate" },
    { name: "VS Code & DevTools", level: "Advanced" }
  ]
};

export const experiences = [
  {
    id: 1,
    role: "Full Stack Web Developer & UI/UX Intern",
    company: "SLS Structo-Mech Consultants",
    location: "Remote / Hybrid",
    period: "Jul 2026 – Present",
    type: "Client Web Redesign & Development",
    website: "https://www.slsnexus.com/",
    github: "https://github.com/SATYA-916/SLS",
    description: [
      "Designed the company’s website in Figma — wireframes, layout, visual style, and component hierarchy — presenting mockups directly to stakeholders and iterating on feedback before development.",
      "Built the approved design into a responsive, production-ready MERN platform, ensuring 1:1 fidelity with the Figma design system across all breakpoints and devices.",
      "Engineered an intuitive admin dashboard UI with clear status states (New, To Do, Replied) and triage workflows to streamline client lead capture for non-technical internal teams.",
      "Applied UX writing and interaction design to the contact inquiry funnel, integrating automated dual email notifications (Brevo API) with instant 24hr acknowledgment to optimize response conversion.",
      "Set up Git-based CI/CD (Vercel, Render) and Cloudflare DNS/SSL so marketing design updates and UI improvements ship to production automatically on every commit."
    ],
    skills: ["Figma UI/UX", "Design Systems", "React", "Node.js", "Express.js", "MongoDB", "Brevo API", "Responsive Design", "CI/CD"]
  },
  {
    id: 2,
    role: "AI Virtual Internship – PolicyNav (UX & RAG)",
    company: "Infosys Springboard",
    location: "Virtual",
    period: "Aug 2025 – Oct 2025",
    type: "AI Product & Interface Design",
    github: "https://github.com/SATYA-916/Public_Policy_Navigation_Using_AI",
    description: [
      "Designed a simplified, human-centered Streamlit interface to make dense, complex public policy documents approachable and readable for non-expert users.",
      "Prioritized clarity of retrieved information with visual source references, citation chips, and confidence indicators to eliminate user cognitive overload.",
      "Built the underlying retrieval pipeline (PDF extraction via pdfplumber, line-based chunking, nomic-embed-text embeddings, ChromaDB) powering the semantic search UX."
    ],
    skills: ["UI/UX Design", "Streamlit", "Python", "RAG Pipeline", "ChromaDB", "User Clarity", "Information Architecture"]
  }
];

export const projects = [
  {
    id: "sls-nexus",
    title: "SLS Nexus - Corporate Website & Lead Platform",
    category: "Web Product Design & Client Production",
    badge: "Figma to Production Client Site",
    summary: "Complete redesign and development of SLS Structo-Mech's customer-facing engineering website, focusing on lead capture optimization, clear information architecture, and administrative triage.",
    highlights: [
      "Created complete Figma design system (typography, color tokens, reusable components) with stakeholder feedback loops",
      "Redesigned the contact-to-lead flow with instant customer acknowledgment, boosting stakeholder engagement",
      "Engineered a lightweight admin dashboard UI with status states (New, To Do, Replied) for non-technical operators",
      "Achieved 100% responsive cross-device consistency and optimized web asset loading on Vercel and Cloudflare"
    ],
    tech: ["Figma", "UI/UX Design", "React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Brevo API"],
    github: "https://github.com/SATYA-916/SLS",
    demo: "https://www.slsnexus.com/",
    featured: true
  },
  {
    id: "interview-ai",
    title: "Interview AI - Career Preparation Platform",
    category: "Product Design & Full Stack AI",
    badge: "User Flow & AI Experience",
    summary: "Designed and built the end-to-end user flow for an AI interview-prep platform, focusing on low-anxiety onboarding, resume ingestion, question generation, and actionable feedback reports.",
    highlights: [
      "Mapped user journeys and designed step-by-step interview flows minimizing candidate cognitive fatigue",
      "Engineered ATS-friendly resume analysis pipeline delivering personalized questions and visual skill-gap analytics",
      "Crafted a unified, accessible visual system in React with responsive Tailwind components and JWT authentication",
      "Deployed full-stack cloud architecture across Vercel, Render, and MongoDB Atlas"
    ],
    tech: ["Product Design", "React.js", "Tailwind CSS", "Node.js", "Google Gemini AI", "MongoDB Atlas", "JWT"],
    github: "https://github.com/SATYA-916/AI_interview_preparation",
    demo: "https://ai-interview-preparation-dun.vercel.app/",
    featured: true
  },
  {
    id: "collab-editor",
    title: "Real-Time Collaborative Code Editor",
    category: "Interaction Design & Distributed Web",
    badge: "Real-Time Interaction UX",
    summary: "Designed a clean, distraction-free React interface for simultaneous multi-user code editing, balancing high information density with effortless usability.",
    highlights: [
      "Designed visual cues for peer presence, active cursors, and real-time synchronization state",
      "Integrated Yjs CRDT and Socket.IO for seamless conflict-free collaborative editing",
      "Optimized layout hierarchy to maximize editing canvas while keeping collaborator rosters accessible",
      "Tested cross-browser responsiveness and low-latency interaction handling on Render and Vercel"
    ],
    tech: ["Interaction Design", "React.js", "Socket.IO", "Yjs CRDT", "WebSockets", "Tailwind CSS"],
    github: "https://github.com/SATYA-916/collab-real",
    demo: "https://collab-real-19et.vercel.app/",
    featured: true
  },
  {
    id: "policy-nav",
    title: "PolicyNav - AI Public Policy Assistant",
    category: "Information Architecture & RAG",
    badge: "Document UX & Semantic Search",
    summary: "Human-friendly AI search engine transforming dense legal and public policy PDFs into approachable, cited answers for citizens and analysts.",
    highlights: [
      "Crafted an intuitive search experience with clear source chunk citations to eliminate hallucinations",
      "Engineered automated text chunking and nomic-embed-text vector embeddings with ChromaDB",
      "Designed clean Streamlit UI focusing on content readability, search speed, and user trust"
    ],
    tech: ["Information Architecture", "Python", "Streamlit", "ChromaDB", "Ollama", "RAG"],
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
    "Web Application Development & UI Design",
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Object-Oriented Software Design",
    "Artificial Intelligence Fundamentals",
    "Operating Systems & Computer Networks"
  ]
};

export const achievements = [
  {
    title: "Gitathon Hackathon — UI Reproduction Challenge",
    desc: "Collaborated in a four-member engineering team to faithfully recreate the GitHub user interface, executing precise UI reproduction, design token consistency, and responsive interactions."
  },
  {
    title: "National Service Scheme (NSS) — Community Outreach",
    desc: "Active volunteer organizing digital awareness workshops, social initiatives, and community engagement programs."
  },
  {
    title: "LeetCode & Computational Problem Solving",
    desc: "Regularly solving algorithmic challenges to maintain strong analytical thinking and efficient code architecture."
  }
];
