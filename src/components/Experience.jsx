import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Building2,
  Terminal,
  Bot
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { experiences } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative bg-[#080c14] retro-dot-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black border-2 border-retroPink text-retroPink text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-[3px_3px_0px_#000]">
            <Terminal className="w-3.5 h-3.5" />
            <span>// QUEST LOG & COMMERCIAL MISSIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white uppercase">
            INTERNSHIP <span className="text-retroPink retro-glow-pink">MISSIONS & EXPERIENCE</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2 text-center font-sans">
            Commercial client web deployments, automated email workflows with Brevo API, and Python RAG pipelines.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-retroPink via-retroCyan to-retroYellow mt-4"></div>
        </div>

        {/* Missions Timeline */}
        <div className="relative max-w-4xl mx-auto space-y-8">
          
          {/* Vertical central timeline line */}
          <div className="absolute left-4 sm:left-8 top-4 bottom-4 w-1 bg-gradient-to-b from-retroPink via-retroCyan to-retroYellow hidden sm:block"></div>

          {experiences.map((exp, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={exp.id}
                className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 items-start group"
              >
                {/* Mission Node Badge */}
                <div className="hidden sm:flex items-center justify-center w-16 h-16 bg-black border-2 border-retroCyan shadow-[4px_4px_0px_#000] flex-shrink-0 z-10 group-hover:scale-105 group-hover:border-retroPink transition-all">
                  {isFirst ? (
                    <Building2 className="w-7 h-7 text-retroCyan" />
                  ) : (
                    <Bot className="w-7 h-7 text-retroYellow" />
                  )}
                </div>

                {/* Mission Content Window */}
                <div className="w-full bg-[#0a0e19] p-6 sm:p-8 border-2 border-slate-700 hover:border-retroCyan shadow-[6px_6px_0px_#000] transition-all relative">
                  
                  {/* Top Status & Date */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b-2 border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 bg-black border border-retroCyan text-retroCyan font-pixel text-[10px]">
                        MISSION_0{exp.id}
                      </span>
                      {isFirst && (
                        <span className="px-2 py-0.5 bg-retroGreen/20 border border-retroGreen text-retroGreen font-mono text-[10px] font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-retroGreen animate-ping"></span>
                          ACTIVE
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-retroYellow font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Role Title & Company */}
                  <h3 className="text-lg sm:text-2xl font-display font-bold text-white mb-2 group-hover:text-retroCyan transition-colors uppercase">
                    {exp.role}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-6">
                    <span className="text-retroCyan font-bold flex items-center gap-1.5">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Objective List */}
                  <div className="space-y-3 mb-6 font-sans">
                    {exp.description.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3">
                        <span className="text-retroPink font-mono text-sm font-bold flex-shrink-0 mt-0.5">▶</span>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Skills Tags & Action Links */}
                  <div className="pt-4 border-t-2 border-slate-800 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 text-[10px] font-mono bg-black text-slate-300 border border-slate-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* External links */}
                    <div className="flex items-center gap-2">
                      {exp.website && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="retro-btn bg-retroCyan text-black px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5 hover:bg-cyan-300"
                        >
                          <span>[ LIVE SITE ]</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {exp.github && (
                        <a
                          href={exp.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="retro-btn bg-black text-slate-300 border-2 border-slate-700 hover:border-retroPink hover:text-retroPink px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>[ CODE ]</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Experience;
