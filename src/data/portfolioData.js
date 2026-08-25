export const personalInfo = {
  name: "K. Satya Sampath Kumar",
  roles: [
    "MarTech — Marketing Automation & Web",
    "Web Product Designer & UI/UX Developer",
    "Data & Analytics (Excel, Python)",
    "Full-Stack Frontend Engineer"
  ],
  tagline: "Building marketing-facing web systems, automated lead-notification workflows, and web experiences.",
  summary: "Computer Science student with hands-on experience building marketing-facing web systems: automated lead-notification workflows using the Brevo email API, and a lead-tracking dashboard for a live client website. Comfortable with data analysis and reporting in Excel and Python (Pandas, Matplotlib), presenting findings in PowerPoint, and turning Figma designs into responsive production interfaces. Keeps track of tasks and deadlines to stay aligned with marketing, design, and development timelines.",
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
    { label: "Marketing Automation", value: "Brevo API" },
    { label: "Design to Code", value: "Figma → Code" },
    { label: "Client & AI Internships", value: "2" },
    { label: "B.Tech CGPA", value: "8.2" }
  ]
};

export const skillsData = {
  marketingOps: [
    { name: "Email Automation (Brevo API)", level: "Advanced" },
    { name: "Lead & Inquiry Dashboards", level: "Advanced" },
    { name: "Contact-Form Lead Capture Design", level: "Advanced" },
    { name: "UX Writing & Copy", level: "Advanced" },
    { name: "Stakeholder Presentations (PowerPoint)", level: "Advanced" },
    { name: "Task & Deadline Tracking", level: "Advanced" },
    { name: "Cross-Browser QA", level: "Advanced" }
  ],
  dataAnalytics: [
    { name: "Excel (Formulas & Reporting)", level: "Advanced" },
    { name: "Python (Pandas, Matplotlib)", level: "Intermediate" },
    { name: "PowerPoint Visual Presentations", level: "Advanced" },
    { name: "Vector Embeddings & ChromaDB", level: "Intermediate" },
    { name: "Data Extraction & Structuring", level: "Intermediate" }
  ],
  webDesign: [
    { name: "Figma (Wireframing & Prototyping)", level: "Advanced" },
    { name: "Responsive Web Design", level: "Advanced" },
    { name: "Design Systems & Token Reuse", level: "Advanced" },
    { name: "UI Design & Visual Hierarchy", level: "Advanced" },
    { name: "User Research & Iteration", level: "Intermediate" }
  ],
  frontendCode: [
    { name: "React.js", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "HTML5 & Semantic Structure", level: "Advanced" },
    { name: "Modern CSS / Flexbox / Grid", level: "Advanced" },
    { name: "JavaScript (ES6+)", level: "Advanced" },
    { name: "Web Asset Optimization", level: "Advanced" }
  ],
  backendTools: [
    { name: "Node.js & Express.js", level: "Advanced" },
    { name: "MongoDB & MongoDB Atlas", level: "Advanced" },
    { name: "REST API Integrations", level: "Advanced" },
    { name: "Git & GitHub Version Control", level: "Advanced" },
    { name: "Vercel, Render & Cloudflare", level: "Intermediate" }
  ]
};

export const experiences = [
  {
    id: 1,
    role: "Web Design & Frontend Development Intern",
    company: "SLS Structo-Mech Consultants",
    location: "Remote / Hybrid",
    period: "Jul 2026 – Present",
    type: "Marketing Web & Frontend Development",
    website: "https://www.slsnexus.com/",
    github: "https://github.com/SATYA-916/SLS",
    description: [
      "Integrated the Brevo Email API to automate lead-notification workflows – every website inquiry triggers an instant alert to the team and an acknowledgment email to the prospect, with no manual step required.",
      "Designed and built an internal lead-tracking dashboard with status states (New, To Do, Replied), giving the team a clear view of inquiry volume and follow-up status.",
      "Designed the company website end-to-end in Figma – wireframes, page layouts, reusable components – then built the responsive production site, presenting mockups to stakeholders and iterating on feedback.",
      "Kept a running task list with deadlines and implementation notes throughout the project to coordinate design and development work against client timelines.",
      "Configured Git-based CI/CD with Vercel/Render and managed DNS and hosting via Cloudflare, keeping the site reliably live."
    ],
    skills: ["Brevo Email API", "Lead Dashboards", "Figma UI/UX", "React", "Tailwind CSS", "Node.js", "MongoDB", "CI/CD & Cloudflare"]
  },
  {
    id: 2,
    role: "AI Virtual Internship – PolicyNav",
    company: "Infosys Springboard",
    location: "Virtual",
    period: "Aug 2025 – Oct 2025",
    type: "Data Pipeline & Interface Design",
    github: "https://github.com/SATYA-916/Public_Policy_Navigation_Using_AI",
    description: [
      "Built a Python data pipeline – PDF parsing (pdfplumber), chunking, vector embeddings, ChromaDB – to structure and retrieve dense public-policy data for a clearer, searchable user experience.",
      "Designed a simplified Streamlit interface prioritizing readability and information hierarchy for non-expert users."
    ],
    skills: ["Python", "Data Pipelines", "ChromaDB", "Vector Search", "Streamlit", "Information Architecture"]
  }
];

export const projects = [
  {
    id: "sls-nexus",
    title: "SLS Nexus - Corporate Website & Lead Platform",
    category: "Marketing Automation & Web Design",
    badge: "Live Client Site & Lead Hub",
    summary: "Customer-facing website and internal lead-tracking platform with automated dual email notification workflows via Brevo API and a custom status triage dashboard.",
    highlights: [
      "Automated prospect lead capture with Brevo API, sending an instant alert to the team and an acknowledgment email to the prospect committing to a reply within 24 business hours.",
      "Designed and built internal triage dashboard with status tracking (New, To Do, Replied) for streamlined inquiry management",
      "Figma design system to production MERN stack, responsive across desktop, tablet, and mobile",
      "Managed hosting, DNS, SSL security via Cloudflare and automated deployments via Vercel/Render"
    ],
    tech: ["Brevo API", "Figma", "React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Cloudflare"],
    github: "https://github.com/SATYA-916/SLS",
    demo: "https://www.slsnexus.com/",
    featured: true
  },
  {
    id: "quizhub",
    title: "QuizHub – Interactive Quiz & Analytics Platform",
    category: "Web Product & Dashboard Design",
    badge: "Admin Dashboard & Design System",
    summary: "Interactive quiz platform featuring an intuitive admin dashboard for quiz creation, results review, and a clean UI component system.",
    highlights: [
      "Built an administrative dashboard for quiz creation, performance analytics, and participant results review",
      "Created a reusable design system featuring consistent status badges, smooth state transitions, and accessible UI patterns",
      "Implemented live client-side field validation on the quiz builder interface to eliminate input friction and errors"
    ],
    tech: ["React.js", "Tailwind CSS", "Dashboard UI", "Design Systems", "Field Validation", "Vercel"],
    github: "https://github.com/SATYA-916",
    demo: "https://ai-interview-preparation-dun.vercel.app/",
    featured: true
  },
  {
    id: "interview-ai",
    title: "Interview AI Platform",
    category: "AI Data Ingestion & Full Stack",
    badge: "AI Product & Analytics",
    summary: "AI interview-prep platform with an automated resume-analysis pipeline that parses uploaded resumes and generates personalized reports and skill-gap insights.",
    highlights: [
      "Built automated resume ingestion pipeline parsing candidate profiles into custom question banks and skill gap reports",
      "Designed low-anxiety candidate onboarding and step-by-step interview flows in React and Tailwind CSS",
      "Integrated secure JWT authentication, session persistence, and Google Gemini AI API",
      "Deployed across Vercel, Render, and MongoDB Atlas"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Google Gemini AI", "JWT", "Tailwind CSS"],
    github: "https://github.com/SATYA-916/AI_interview_preparation",
    demo: "https://ai-interview-preparation-dun.vercel.app/",
    featured: true
  },
  {
    id: "collab-editor",
    title: "Real-Time Collaborative Code Editor",
    category: "Real-Time Systems & Web UI",
    badge: "WebSockets & Interaction Design",
    summary: "Simultaneous multi-user code editor with conflict-free synchronization, peer cursor tracking, and distraction-free React interface.",
    highlights: [
      "Designed visual cues for peer presence, active cursors, and real-time synchronization state",
      "Integrated Yjs CRDT and Socket.IO for seamless conflict-free collaborative editing",
      "Optimized layout hierarchy balancing canvas workspace and active user roster"
    ],
    tech: ["React.js", "Socket.IO", "Yjs CRDT", "WebSockets", "Tailwind CSS", "Render"],
    github: "https://github.com/SATYA-916/collab-real",
    demo: "https://collab-real-19et.vercel.app/",
    featured: false
  },
  {
    id: "policy-nav",
    title: "PolicyNav - AI Public Policy Assistant",
    category: "Python Data Pipeline & Information UX",
    badge: "Python & Vector Search",
    summary: "Python data pipeline and Streamlit interface structuring dense legal and policy data for searchability and clear user readability.",
    highlights: [
      "Automated document processing with pdfplumber and semantic chunking of complex documents",
      "Generated nomic-embed-text vector embeddings stored in persistent ChromaDB for semantic retrieval",
      "Designed clean Streamlit UI focusing on content readability, search speed, and user trust"
    ],
    tech: ["Python", "Pandas", "Streamlit", "ChromaDB", "Ollama", "pdfplumber"],
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
    "Data Analytics & Computational Methods",
    "Artificial Intelligence Fundamentals",
    "Operating Systems & Computer Networks"
  ]
};

export const achievements = [
  {
    title: "Gitathon Hackathon — UI Reproduction Challenge",
    desc: "Collaborated in a four-member engineering team to recreate the GitHub user interface, focusing on responsive layouts, visual consistency, and UI implementation."
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
