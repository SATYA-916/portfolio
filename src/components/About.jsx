import React from 'react';
import {
  Code,
  Sparkles,
  Bot,
  Workflow,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
  Zap
} from 'lucide-react';
import { FigmaIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const pillars = [
    {
      icon: <Layers className="w-5 h-5 text-teal-400" />,
      title: "Full-Stack Web Engineering",
      desc: "Building scalable, production-grade web applications using React, Node.js, Express, and MongoDB with modern clean architecture."
    },
    {
      icon: <Bot className="w-5 h-5 text-cyan-400" />,
      title: "Generative AI & RAG Pipelines",
      desc: "Developing intelligent document navigation systems, vector embedding pipelines with ChromaDB & Ollama, and grounded prompt engineering."
    },
    {
      icon: <FigmaIcon className="w-5 h-5 text-purple-400" />,
      title: "UI/UX & Product Design",
      desc: "Creating polished Figma wireframes, mockups, and translating design systems seamlessly into responsive, accessible code."
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: "Automation & API Integrations",
      desc: "Architecting automated notification systems (Brevo), CI/CD release pipelines (Vercel, Render), and real-time WebSockets."
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Engineering with Passion & <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Purpose</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Story & Terminal Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                Professional Overview
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a <span className="text-teal-300 font-semibold">Computer Science Engineering</span> student with hands-on experience building full-stack web applications and AI-driven automation systems. My journey spans delivering client websites from initial Figma mockups to live production, architecting RAG-powered document navigation pipelines, and building real-time collaborative applications.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Whether it's building clean REST APIs, automating dual-notification email workflows with Brevo API, or experimenting with semantic vector retrieval in ChromaDB, I love solving real-world business problems through thoughtful software engineering.
              </p>
              
              <div className="pt-2 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block">Location:</span>
                  <span className="text-slate-200 font-medium">Visakhapatnam, India</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Degree:</span>
                  <span className="text-slate-200 font-medium">B.Tech CSE (2023–2027)</span>
                </div>
                <div>
                  <span className="text-slate-400 block">College:</span>
                  <span className="text-slate-200 font-medium">GITAM University</span>
                </div>
              </div>
            </div>

            {/* Interactive Code Window */}
            <div className="rounded-2xl bg-[#0d1424] border border-slate-800/90 overflow-hidden shadow-2xl">
              <div className="bg-[#0a0f1d] px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-teal-400" />
                  <span>satya_profile.ts</span>
                </div>
                <div className="w-10"></div>
              </div>
              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300">
                <div><span className="text-purple-400">const</span> <span className="text-teal-300">engineer</span> = &#123;</div>
                <div className="pl-4"><span className="text-cyan-300">name</span>: <span className="text-amber-300">"{personalInfo.name}"</span>,</div>
                <div className="pl-4"><span className="text-cyan-300">primaryFocus</span>: <span className="text-amber-300">["MERN Stack", "GenAI & RAG", "Product Design"]</span>,</div>
                <div className="pl-4"><span className="text-cyan-300">databaseEngines</span>: <span className="text-amber-300">["MongoDB Atlas", "ChromaDB (Vector)"]</span>,</div>
                <div className="pl-4"><span className="text-cyan-300">strengths</span>: <span className="text-emerald-400">[</span></div>
                <div className="pl-8"><span className="text-amber-300">"Figma to production-ready UI"</span>,</div>
                <div className="pl-8"><span className="text-amber-300">"Vector embeddings & semantic retrieval"</span>,</div>
                <div className="pl-8"><span className="text-amber-300">"Automated CI/CD & email workflows"</span></div>
                <div className="pl-4"><span className="text-emerald-400">]</span>,</div>
                <div className="pl-4"><span className="text-cyan-300">currentlyBuilding</span>: <span className="text-amber-300">"AI-powered apps & intelligent web platforms"</span></div>
                <div>&#125;;</div>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Core Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover p-5 rounded-2xl border border-slate-800/80 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-teal-500/40 group-hover:bg-teal-500/10 transition-all flex-shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white group-hover:text-teal-300 transition-colors mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
