import React, { useState } from 'react';
import {
  Code2,
  Layout,
  Server,
  Bot,
  Database,
  Wrench,
  Sparkles,
  CheckCircle,
  Cpu,
  Layers
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: <Layers className="w-4 h-4" /> },
    { id: 'languages', label: 'Languages', icon: <Code2 className="w-4 h-4" /> },
    { id: 'frontend', label: 'Frontend', icon: <Layout className="w-4 h-4" /> },
    { id: 'backend', label: 'Backend', icon: <Server className="w-4 h-4" /> },
    { id: 'aiGenAi', label: 'GenAI & RAG', icon: <Bot className="w-4 h-4" /> },
    { id: 'database', label: 'Databases', icon: <Database className="w-4 h-4" /> },
    { id: 'toolsAndDevOps', label: 'Tools & DevOps', icon: <Wrench className="w-4 h-4" /> }
  ];

  const categoryDetails = {
    languages: {
      title: "Programming Languages",
      icon: <Code2 className="w-5 h-5 text-teal-400" />,
      skills: skillsData.languages,
      gradient: "from-teal-500/10 to-transparent"
    },
    frontend: {
      title: "Frontend & UI Design",
      icon: <Layout className="w-5 h-5 text-cyan-400" />,
      skills: skillsData.frontend,
      gradient: "from-cyan-500/10 to-transparent"
    },
    backend: {
      title: "Backend & Distributed Systems",
      icon: <Server className="w-5 h-5 text-blue-400" />,
      skills: skillsData.backend,
      gradient: "from-blue-500/10 to-transparent"
    },
    aiGenAi: {
      title: "Generative AI & RAG Pipelines",
      icon: <Bot className="w-5 h-5 text-purple-400" />,
      skills: skillsData.aiGenAi,
      gradient: "from-purple-500/10 to-transparent"
    },
    database: {
      title: "Databases & Vector Storage",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      skills: skillsData.database,
      gradient: "from-emerald-500/10 to-transparent"
    },
    toolsAndDevOps: {
      title: "DevOps, Cloud & Design Tools",
      icon: <Wrench className="w-5 h-5 text-amber-400" />,
      skills: skillsData.toolsAndDevOps,
      gradient: "from-amber-500/10 to-transparent"
    }
  };

  const filteredCategories = activeTab === 'all'
    ? Object.keys(categoryDetails)
    : [activeTab];

  return (
    <section id="skills" className="py-20 relative bg-[#0b101d] bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Skills & <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2 text-center">
            Comprehensive toolkit spanning full-stack web engineering, vector AI search, and cloud deployments.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-4"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-teal-500 text-slate-950 font-bold shadow-lg shadow-teal-500/20 scale-105'
                  : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((key) => {
            const cat = categoryDetails[key];
            return (
              <div
                key={key}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/80 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Top Subtle Gradient */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.gradient}`}></div>

                <div>
                  {/* Category Title & Icon */}
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-teal-500/30 transition-colors">
                      {cat.icon}
                    </div>
                    <h3 className="font-semibold text-white text-base">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800/90 text-slate-200 text-xs font-medium hover:border-teal-500/40 hover:text-teal-300 hover:bg-teal-500/5 transition-all"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>{cat.skills.length} competencies</span>
                  <span className="text-teal-400">Hands-on experience</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
