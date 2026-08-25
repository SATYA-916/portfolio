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
  Disc
} from 'lucide-react';
import { FigmaIcon } from './Icons';
import { skillsData } from '../data/portfolioData';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: '[ALL MODULES]', icon: <Layers className="w-4 h-4" /> },
    { id: 'marketingOps', label: '[MARKETING OPS]', icon: <MailCheck className="w-4 h-4" /> },
    { id: 'dataAnalytics', label: '[DATA & ANALYTICS]', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'webDesign', label: '[FIGMA & UI/UX]', icon: <Palette className="w-4 h-4" /> },
    { id: 'frontendCode', label: '[FRONTEND CODE]', icon: <Layout className="w-4 h-4" /> },
    { id: 'backendTools', label: '[BACKEND & CLOUD]', icon: <Server className="w-4 h-4" /> }
  ];

  const categoryDetails = {
    marketingOps: {
      tag: "CARTRIDGE_01",
      title: "Marketing Automation & Web Ops",
      icon: <MailCheck className="w-5 h-5 text-retroCyan" />,
      skills: skillsData.marketingOps,
      border: "border-retroCyan",
      glowText: "text-retroCyan"
    },
    dataAnalytics: {
      tag: "CARTRIDGE_02",
      title: "Data Analysis, Excel & Reporting",
      icon: <BarChart3 className="w-5 h-5 text-retroYellow" />,
      skills: skillsData.dataAnalytics,
      border: "border-retroYellow",
      glowText: "text-retroYellow"
    },
    webDesign: {
      tag: "CARTRIDGE_03",
      title: "Figma UI/UX & Responsive Web Design",
      icon: <FigmaIcon className="w-5 h-5 text-retroPink" />,
      skills: skillsData.webDesign,
      border: "border-retroPink",
      glowText: "text-retroPink"
    },
    frontendCode: {
      tag: "CARTRIDGE_04",
      title: "Design-to-Code Frontend Engineering",
      icon: <Layout className="w-5 h-5 text-retroGreen" />,
      skills: skillsData.frontendCode,
      border: "border-retroGreen",
      glowText: "text-retroGreen"
    },
    backendTools: {
      tag: "CARTRIDGE_05",
      title: "Backend, APIs & Cloud Hosting",
      icon: <Server className="w-5 h-5 text-retroPurple" />,
      skills: skillsData.backendTools,
      border: "border-retroPurple",
      glowText: "text-retroPurple"
    }
  };

  const filteredCategories = activeTab === 'all'
    ? Object.keys(categoryDetails)
    : [activeTab];

  return (
    <section id="skills" className="py-20 relative bg-[#0b0f19] retro-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black border-2 border-retroYellow text-retroYellow text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-[3px_3px_0px_#000]">
            <Disc className="w-3.5 h-3.5 text-retroCyan animate-spin" />
            <span>// SKILL CARTRIDGES & INVENTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white uppercase">
            TECHNICAL & <span className="text-retroCyan retro-glow-cyan">MARKETING TOOLKIT</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mt-2 text-center font-sans">
            Hands-on expertise across marketing automation (Brevo API), data analysis (Excel, Python), Figma design systems, and production frontend engineering.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-retroCyan via-retroPink to-retroYellow mt-4"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-retroCyan text-black border-2 border-black shadow-[3px_3px_0px_#ff007f] translate-x-[1px] translate-y-[1px]'
                  : 'bg-black text-slate-300 border-2 border-slate-700 hover:border-retroCyan hover:text-retroCyan shadow-[3px_3px_0px_#000]'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Retro Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((key) => {
            const cat = categoryDetails[key];
            return (
              <div
                key={key}
                className={`bg-[#0a0e19] p-6 border-2 ${cat.border} shadow-[6px_6px_0px_#000] flex flex-col justify-between hover:translate-y-[-2px] transition-all group`}
              >
                <div>
                  {/* Cartridge Header */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-black border border-slate-700 group-hover:border-retroCyan transition-colors">
                        {cat.icon}
                      </div>
                      <h3 className="font-display font-bold text-white text-sm uppercase">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  <span className={`text-[10px] font-pixel ${cat.glowText} block mb-3`}>
                    [{cat.tag}]
                  </span>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black border border-slate-700 text-slate-200 text-xs font-mono hover:border-retroCyan hover:text-retroCyan transition-colors"
                      >
                        <span className="w-1.5 h-1.5 bg-retroCyan"></span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>CAPACITY: {cat.skills.length} ITEMS</span>
                  <span className="text-retroGreen font-bold">[VERIFIED ✓]</span>
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
