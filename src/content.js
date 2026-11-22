export const profile = {
  name: 'K. Satya Sampath Kumar',
  shortName: 'Satya Sampath',
  monogram: 'SK',
  role: 'Full Stack and AI Web Developer',
  tagline: 'I build AI powered web products end to end, from first sketch to production.',
  city: 'Visakhapatnam',
  country: 'India',
  email: 'satyasampath79@gmail.com',
  phone: '+91 9550736570',
  resumeUrl: '/Satya%20Sampath%20Kumar.pdf',
  availability: 'Open to internships and freelance builds',
}

export const links = {
  github: 'https://github.com/SATYA-916',
  linkedin: 'https://www.linkedin.com/in/sat-ya-93449a28b/',
  leetcode: 'https://leetcode.com/u/sampath/',
}

export const stats = [
  { value: '8.23', label: 'CGPA at GITAM' },
  { value: '175+', label: 'Day LeetCode streak' },
  { value: '30+', label: 'Public GitHub repos' },
  { value: '4', label: 'Live products shipped' },
]

export const experience = [
  {
    role: 'Full Stack Web Developer Intern',
    org: 'SLS Structo Mech Consultants',
    period: 'Jul 2026 to Present',
    points: [
      'Designed the company website in Figma, then built and deployed it with the MERN stack.',
      'Built an admin dashboard with status tracking to manage client inquiries from the contact form.',
      'Integrated the Brevo Email API for automatic client and owner notifications, with CI CD on Vercel and Render and DNS on Cloudflare.',
    ],
    link: 'https://www.slsnexus.com/',
  },
  {
    role: 'Generative AI Intern, PolicyNav',
    org: 'Infosys Springboard',
    period: 'Aug 2025 to Oct 2025',
    points: [
      'Built a RAG app in Python and Streamlit that makes public policy documents easy to navigate.',
      'Automated extraction and chunking with pdfplumber, embeddings via Ollama stored in ChromaDB for semantic search.',
      'Grounded prompting with source citations to keep answers accurate.',
    ],
    link: 'https://github.com/SATYA-916/Public_Policy_Navigation_Using_AI',
  },
]

export const projects = [
  {
    title: 'Interview AI Platform',
    tag: 'Flagship build',
    desc: 'AI interview preparation with an ATS friendly resume analyser, personalised questions, interview reports, skill gap analysis and a JD tailored resume PDF. JWT auth, Gemini AI, always on new stack.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'Gemini AI'],
    live: 'https://ai-interview-preparation-chi.vercel.app/',
    code: 'https://github.com/SATYA-916/AI_interview_preparation',
    gradient: 'linear-gradient(135deg,#7b2ff7 0%,#ff2e88 55%,#ff5e3a 100%)',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=900&auto=format&fit=crop'
  },
  {
    title: 'SLS Nexus',
    tag: 'Client work, live',
    desc: 'Corporate website and admin dashboard for a structural engineering firm. Figma to MERN, inquiry tracking and Brevo email automation, deployed with Cloudflare DNS.',
    tech: ['MERN', 'Figma', 'Brevo API', 'Cloudflare'],
    live: 'https://www.slsnexus.com/',
    code: 'https://github.com/SATYA-916/SLS',
    gradient: 'linear-gradient(135deg,#21d4fd 0%,#7b2ff7 100%)',
    img: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=900&auto=format&fit=crop'
  },
  {
    title: 'Real Time Collaborative Editor',
    tag: 'Realtime systems',
    desc: 'Multi user code editor with conflict free sync using Yjs CRDTs and Socket.IO. Everyone types in the same file at the same time, nothing overwrites.',
    tech: ['React', 'Yjs', 'Socket.IO', 'WebSockets'],
    live: 'https://collab-real-19et.vercel.app/',
    code: 'https://github.com/SATYA-916/collab-real',
    gradient: 'linear-gradient(135deg,#ff5e3a 0%,#ffd23f 100%)',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=900&auto=format&fit=crop'
  },
  {
    title: 'PolicyNav',
    tag: 'GenAI and RAG',
    desc: 'RAG based navigation for public policy documents. Semantic search over chunked PDFs with grounded answers and source citations for non expert users.',
    tech: ['Python', 'Streamlit', 'Ollama', 'ChromaDB'],
    live: 'https://github.com/SATYA-916/Public_Policy_Navigation_Using_AI',
    code: 'https://github.com/SATYA-916/Public_Policy_Navigation_Using_AI',
    gradient: 'linear-gradient(135deg,#11998e 0%,#21d4fd 100%)',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=900&auto=format&fit=crop'
  },
  {
    title: 'QuizHub',
    tag: 'Product build',
    desc: 'Role based quiz platform with student and teacher flows, instant per question feedback, and an admin dashboard for quiz creation and results.',
    tech: ['JavaScript', 'CSS Design System', 'GitHub Pages'],
    live: 'https://satya-916.github.io/quiz-platform/',
    code: 'https://github.com/SATYA-916/quiz-platform',
    gradient: 'linear-gradient(135deg,#ff2e88 0%,#7b2ff7 100%)',
    img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=900&auto=format&fit=crop'
  },
  {
    title: 'POTD, Daily DSA',
    tag: '175 plus day streak',
    desc: 'LeetCode Problem of the Day, solved and published every single day with tested Python solutions, plus a daily public write up series on LinkedIn and X.',
    tech: ['Python', 'DSA', 'Daily streak'],
    live: 'https://github.com/SATYA-916/POTD',
    code: 'https://github.com/SATYA-916/POTD',
    gradient: 'linear-gradient(135deg,#ffd23f 0%,#ff5e3a 100%)',
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=900&auto=format&fit=crop'
  },
  {
    title: 'Electricity Load Forecasting',
    tag: 'TechBharat AI CoE, Team C2 20',
    desc: 'AI platform forecasting electricity load at consumer, distribution transformer, feeder and substation levels, hourly data with a next 24 hours horizon.',
    tech: ['Python', 'ML', 'Time Series'],
    live: null,
    code: null,
    gradient: 'linear-gradient(135deg,#0f2027 0%,#2c5364 60%,#21d4fd 100%)',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop'
  },
  {
    title: 'Rice Disease Detection',
    tag: 'Capstone, Team 13',
    desc: 'PROJ2999 capstone that detects rice leaf diseases from images to support early diagnosis for farmers.',
    tech: ['Python', 'Computer Vision', 'ML'],
    live: null,
    code: null,
    gradient: 'linear-gradient(135deg,#134e5e 0%,#71b280 100%)',
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=900&auto=format&fit=crop'
  },
]

export const services = [
  {
    title: 'Full Stack Web Apps',
    desc: 'MERN stack products with auth, dashboards, email automation and production deployment on Vercel, Render and Cloudflare.',
  },
  {
    title: 'AI Powered Products',
    desc: 'Gemini and RAG based features that do real work: resume analysis, document search, interview reports and smart assistants.',
  },
  {
    title: 'UI and Product Design',
    desc: 'Figma wireframes to responsive React interfaces, with design systems and motion that make products feel alive.',
  },
]

export const skillGroups = [
  { label: 'Languages', items: ['Python', 'JavaScript'] },
  { label: 'Frontend', items: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'Figma'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Socket.IO'] },
  { label: 'Databases', items: ['MongoDB', 'MongoDB Atlas', 'ChromaDB'] },
  { label: 'AI and GenAI', items: ['Google Gemini AI', 'RAG Pipelines', 'Embeddings', 'Ollama'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'Vercel', 'Render', 'Cloudflare'] },
]
