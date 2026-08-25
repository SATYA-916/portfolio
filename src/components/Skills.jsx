import React, { useState } from 'react';
import {
  Code2,
  Layout,
  Server,
  Sparkles,
  Layers,
  Palette,
  BarChart3,
  MailCheck,
  Disc,
  CheckCircle2
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { FigmaIcon } from './Icons';
import { skillsData } from '../data/portfolioData';

const Skills = () => {
  const { isRetro } = useTheme();
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: isRetro ? '[ALL MODULES]' : 'All Capabilities', icon: <Layers className="w-4 h-4" /> },
    { id: 'marketingOps', label: isRetro ? '[MARKETING OPS]' : 'Marketing Ops & Automation', icon: <MailCheck className="w-4 h-4" /> },
    { id: 'dataAnalytics', label: isRetro ? '[DATA & ANALYTICS]' : 'Data & Analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'webDesign', label: isRetro ? '[FIGMA & UI/UX]' : 'Figma & UI/UX Design', icon: <Palette className="w-4 h-4" /> },
    { id: 'frontendCode', label: isRetro ? '[FRONTEND CODE]' : 'Frontend Engineering', icon: <Layout className="w-4 h-4" /> },
    { id: 'backendTools', label: isRetro ? '[BACKEND & CLOUD]' : 'Backend & Cloud', icon: <Server className="w-4 h-4" /> }
  ];

  const categoryDetails = {
    marketingOps: {
      tag: "CARTRIDGE_01",
      title: "Marketing Automation & Web Ops",
      icon: <MailCheck className="w-5 h-5 text-teal-400" />,
      skills: skillsData.marketingOps,
      border: "border-retroCyan",
      glowText: "text-retroCyan",
      status: "Production ready"
    },
    dataAnalytics: {
      tag: "CARTRIDGE_02",
      title: "Data Analysis, Excel & Reporting",
      icon: <BarChart3 className="w-5 h-5 text-amber-400" />,
      skills: skillsData.dataAnalytics,
      border: "border-retroYellow",
      glowText: "text-retroYellow"
    },
    webDesign: {
      tag: "CARTRIDGE_03",
      title: "Figma UI/UX & Responsive Web Design",
      icon: <FigmaIcon className="w-5 h-5 text-fuchsia-400" />,
      skills: skillsData.webDesign,
      border: "border-retroPink",
      glowText: "text-retroPink",
      status: "Production ready"
    },
    frontendCode: {
      tag: "CARTRIDGE_04",
      title: "Design-to-Code Frontend Engineering",
      icon: <Layout className="w-5 h-5 text-emerald-400" />,
      skills: skillsData.frontendCode,
      border: "border-retroGreen",
      glowText: "text-retroGreen",
      status: "Production ready"
    },
    backendTools: {
      tag: "CARTRIDGE_05",
      title: "Backend, APIs & Cloud Hosting",
      icon: <Server className="w-5 h-5 text-purple-400" />,
      skills: skillsData.backendTools,
      border: "border-retroPurple",
      glowText: "text-retroPurple",
      status: "Production ready"
    }
  };

  const filteredCategories = activeTab === 'all'
    ? Object.keys(categoryDetails)
    : [activeTab];

  return (
    <section
      id="skills"
      className={`py-24 relative ${isRetro ? 'bg-[#0b0f19] retro-grid-bg' : 'bg-[#080c14]'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div
            className={
              isRetro
                ? 'inline-flex items-center gap-2 px-3.5 py-1 bg-black border-2 border-retroYellow text-retroYellow text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-[3px_3px_0px_#000]'
                : 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-mono font-medium mb-3'
            }
          >
            {isRetro ? (
              <Disc className="w-3.5 h-3.5 text-retroCyan animate-spin" />
            ) : (
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            )}
            <span>{isRetro ? '// SKILL CARTRIDGES & INVENTORY' : 'Skills & Technical Toolkit'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase">
            TECHNICAL &amp;{' '}
            <span className={isRetro ? 'text-retroCyan retro-glow-cyan' : 'text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400'}>
              MARKETING TOOLKIT
            </span>
          </h2>
          
          <p className="text-slate-400 text-sm max-w-2xl mt-3 text-center font-sans">
            Hands-on expertise across marketing automation (Brevo API), data analysis (Excel, Python), Figma design systems, and production frontend engineering.
          </p>

          <div className={`w-24 h-1.5 mt-4 ${isRetro ? 'bg-gradient-to-r from-retroCyan via-retroPink to-retroYellow' : 'bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full'}`}></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={
                isRetro
                  ? `inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono font-bold transition-all ${
                      activeTab === tab.id
                        ? 'bg-retroCyan text-black border-2 border-black shadow-[3px_3px_0px_#ff007f] translate-x-[1px] translate-y-[1px]'
                        : 'bg-black text-slate-300 border-2 border-slate-700 hover:border-retroCyan hover:text-retroCyan shadow-[3px_3px_0px_#000]'
                    }`
                  : `inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-xl transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-teal-500/20 text-teal-300 font-semibold border border-teal-500/40 shadow-sm shadow-teal-500/10'
                        : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
                    }`
              }
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
                className={
                  isRetro
                    ? `bg-[#0a0e19] p-6 border-2 ${cat.border} shadow-[6px_6px_0px_#000] flex flex-col justify-between hover:translate-y-[-2px] transition-all group`
                    : 'modern-card p-6 rounded-2xl flex flex-col justify-between group'
                }
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isRetro ? 'bg-black border border-slate-700' : 'bg-slate-900/90 border border-slate-800 group-hover:border-teal-500/40'}`}>
                        {cat.icon}
                      </div>
                      <h3 className="font-bold text-white text-sm">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  {isRetro && (
                    <span className={`text-[10px] font-pixel ${cat.glowText} block mb-3`}>
                      [{cat.tag}]
                    </span>
                  )}

                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={
                          isRetro
                            ? 'inline-flex items-center gap-1.5 px-2.5 py-1 bg-black border border-slate-700 text-slate-200 text-xs font-mono hover:border-retroCyan hover:text-retroCyan transition-colors'
                            : 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-mono hover:border-teal-500/40 hover:text-teal-200 transition-colors'
                        }
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${isRetro ? 'bg-retroCyan rounded-none' : 'bg-teal-400'}`}></span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-6 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{cat.skills.length} skills</span>
                  {cat.status ? (
                    <span className={`flex items-center gap-1 font-semibold ${isRetro ? 'text-retroGreen font-pixel text-[10px]' : 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded'}`}>
                      {!isRetro && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                      <span>{isRetro ? `[${cat.status.toUpperCase()}]` : cat.status}</span>
                    </span>
                  ) : (
                    <span></span>
                  )}
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
