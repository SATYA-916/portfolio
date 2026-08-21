import React from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  Sparkles,
  Trophy,
  Users,
  Code
} from 'lucide-react';
import { education, achievements } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-20 relative bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Education & <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Formal Education Card */}
          <div className="lg:col-span-6">
            <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-slate-800 relative overflow-hidden h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    Undergraduate Degree
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{education.period}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {education.degree}
                </h3>

                <p className="text-base text-teal-400 font-medium mb-1">
                  {education.institution}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-6">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{education.location}</span>
                </div>

                {/* CGPA Highlight */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/30 mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Academic Performance</span>
                      <span className="text-sm font-semibold text-white">Cumulative Grade Point Average</span>
                    </div>
                  </div>
                  <span className="text-lg font-mono font-extrabold text-emerald-400 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    {education.grade}
                  </span>
                </div>

                {/* Relevant Coursework */}
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-teal-400" />
                    <span>Key Core Coursework</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-3 py-1 rounded-lg text-xs bg-slate-900/90 text-slate-300 border border-slate-800"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Achievements & Activities */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-amber-400" />
              <span>Activities & Extracurriculars</span>
            </h3>

            {achievements.map((item, aIdx) => (
              <div
                key={aIdx}
                className="glass-card glass-card-hover p-5 rounded-2xl border border-slate-800/80 group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-teal-400 group-hover:border-teal-500/40 group-hover:bg-teal-500/10 transition-all flex-shrink-0">
                    {aIdx === 0 && <Code className="w-4 h-4 text-cyan-400" />}
                    {aIdx === 1 && <Users className="w-4 h-4 text-emerald-400" />}
                    {aIdx === 2 && <Trophy className="w-4 h-4 text-amber-400" />}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.desc}
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

export default Education;
