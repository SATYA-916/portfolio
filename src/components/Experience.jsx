import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Building2,
  Terminal,
  Bot,
  Sparkles
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { GithubIcon } from './Icons';
import { experiences } from '../data/portfolioData';

const Experience = () => {
  const { isRetro } = useTheme();

  return (
    <section
      id="experience"
      className={`py-24 relative ${isRetro ? 'bg-[#080c14] retro-dot-bg' : 'bg-[#090d16]'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div
            className={
              isRetro
                ? 'inline-flex items-center gap-2 px-3.5 py-1 bg-black border-2 border-retroPink text-retroPink text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-[3px_3px_0px_#000]'
                : 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-mono font-medium mb-3'
            }
          >
            {isRetro ? <Terminal className="w-3.5 h-3.5" /> : <Briefcase className="w-3.5 h-3.5 text-teal-400" />}
            <span>{isRetro ? '// QUEST LOG & COMMERCIAL MISSIONS' : 'Experience & Track Record'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase">
            INTERNSHIP{' '}
            <span className={isRetro ? 'text-retroPink retro-glow-pink' : 'text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400'}>
              EXPERIENCE &amp; IMPACT
            </span>
          </h2>

          <p className="text-slate-400 text-sm max-w-xl mt-3 text-center font-sans">
            Commercial client web deployments, automated email workflows with Brevo API, and Python RAG pipelines.
          </p>

          <div className={`w-24 h-1.5 mt-4 ${isRetro ? 'bg-gradient-to-r from-retroPink via-retroCyan to-retroYellow' : 'bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full'}`}></div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto space-y-8">
          
          {/* Vertical central timeline line */}
          <div className={`absolute left-4 sm:left-8 top-4 bottom-4 w-0.5 hidden sm:block ${isRetro ? 'bg-gradient-to-b from-retroPink via-retroCyan to-retroYellow' : 'bg-slate-800'}`}></div>

          {experiences.map((exp, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={exp.id}
                className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 items-start group"
              >
                {/* Node Badge */}
                <div
                  className={
                    isRetro
                      ? 'hidden sm:flex items-center justify-center w-16 h-16 bg-black border-2 border-retroCyan shadow-[4px_4px_0px_#000] flex-shrink-0 z-10 group-hover:scale-105 group-hover:border-retroPink transition-all'
                      : 'hidden sm:flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 shadow-lg flex-shrink-0 z-10 group-hover:border-teal-500/50 group-hover:shadow-teal-500/10 transition-all'
                  }
                >
                  {isFirst ? (
                    <Building2 className={`w-7 h-7 ${isRetro ? 'text-retroCyan' : 'text-teal-400'}`} />
                  ) : (
                    <Bot className={`w-7 h-7 ${isRetro ? 'text-retroYellow' : 'text-cyan-400'}`} />
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={
                    isRetro
                      ? 'w-full bg-[#0a0e19] p-6 sm:p-8 border-2 border-slate-700 hover:border-retroCyan shadow-[6px_6px_0px_#000] transition-all relative'
                      : 'w-full modern-card p-6 sm:p-8 rounded-2xl relative'
                  }
                >
                  {/* Top Status & Date */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 text-xs font-mono font-medium rounded ${isRetro ? 'bg-black border border-retroCyan text-retroCyan font-pixel text-[10px]' : 'bg-slate-900 border border-slate-800 text-teal-300'}`}>
                        {exp.type}
                      </span>
                      {isFirst && (
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold flex items-center gap-1 ${isRetro ? 'bg-retroGreen/20 border border-retroGreen text-retroGreen' : 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                          Present
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Role Title & Company */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                    {exp.role}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-6">
                    <span className="text-teal-400 font-semibold flex items-center gap-1.5">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Bullet Points */}
                  <div className="space-y-3 mb-6 font-sans">
                    {exp.description.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3">
                        <span className={`font-mono text-sm font-bold flex-shrink-0 mt-0.5 ${isRetro ? 'text-retroPink' : 'text-teal-400'}`}>
                          &gt;
                        </span>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Skills Tags & Links */}
                  <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className={
                            isRetro
                              ? 'px-2 py-0.5 text-[10px] font-mono bg-black text-slate-300 border border-slate-800'
                              : 'px-2.5 py-1 text-xs font-mono bg-slate-900/80 text-slate-400 rounded-lg border border-slate-800'
                          }
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      {exp.website && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            isRetro
                              ? 'retro-btn bg-retroCyan text-black px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5 hover:bg-cyan-300'
                              : 'px-3.5 py-1.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm hover:from-teal-400 hover:to-cyan-400 transition-all'
                          }
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {exp.github && (
                        <a
                          href={exp.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            isRetro
                              ? 'retro-btn bg-black text-slate-300 border-2 border-slate-700 hover:border-retroPink hover:text-retroPink px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5'
                              : 'px-3.5 py-1.5 bg-slate-900 border border-slate-700 text-slate-300 hover:text-white rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 hover:border-teal-500 transition-all'
                          }
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Code</span>
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
