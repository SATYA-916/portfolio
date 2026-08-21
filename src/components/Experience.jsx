import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Building2,
  Layers,
  Bot
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { experiences } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Internship <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2 text-center">
            Hands-on commercial and technical internships building production client platforms and AI pipelines.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-4"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto space-y-8">
          
          {/* Vertical central timeline line */}
          <div className="absolute left-4 sm:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-teal-500 via-cyan-500 to-slate-800 hidden sm:block"></div>

          {experiences.map((exp, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={exp.id}
                className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 items-start group"
              >
                {/* Timeline Node Icon */}
                <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 border-2 border-teal-500/50 shadow-lg shadow-teal-500/10 flex-shrink-0 z-10 group-hover:scale-110 group-hover:border-teal-400 transition-all">
                  {isFirst ? (
                    <Building2 className="w-7 h-7 text-teal-400" />
                  ) : (
                    <Bot className="w-7 h-7 text-cyan-400" />
                  )}
                </div>

                {/* Experience Card */}
                <div className="w-full glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-slate-800/90 relative overflow-hidden">
                  
                  {/* Top Badge & Duration */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/15 text-teal-300 border border-teal-500/30">
                        {exp.type}
                      </span>
                      {isFirst && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          Present
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Role Title & Company */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-teal-300 transition-colors">
                    {exp.role}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-5">
                    <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-teal-400" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400 text-xs">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Bullet Points */}
                  <div className="space-y-3 mb-6">
                    {exp.description.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-1" />
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Skills Tags & Links Footer */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
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
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/30 hover:bg-teal-500/20 transition-colors"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {exp.github && (
                        <a
                          href={exp.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-700 hover:text-white hover:bg-slate-800 transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Code Repository</span>
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
