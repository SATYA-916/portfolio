import React from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  Trophy,
  Users,
  Code2,
  Sparkles
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { education, achievements } from '../data/portfolioData';

const Education = () => {
  const { isRetro } = useTheme();

  return (
    <section
      id="education"
      className={`py-24 relative ${isRetro ? 'bg-[#080c14] retro-dot-bg' : 'bg-[#090d16]'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div
            className={
              isRetro
                ? 'inline-flex items-center gap-2 px-3.5 py-1 bg-black border-2 border-retroGreen text-retroGreen text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-[3px_3px_0px_#000]'
                : 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-mono font-medium mb-3'
            }
          >
            {isRetro ? <GraduationCap className="w-3.5 h-3.5" /> : <Award className="w-3.5 h-3.5 text-teal-400" />}
            <span>{isRetro ? '// ACADEMIC RECORD & SIDE QUESTS' : 'Academic Background & Achievements'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase">
            EDUCATION &amp;{' '}
            <span className={isRetro ? 'text-retroGreen retro-glow-green' : 'text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400'}>
              ACHIEVEMENTS
            </span>
          </h2>

          <div className={`w-24 h-1.5 mt-4 ${isRetro ? 'bg-gradient-to-r from-retroGreen via-retroCyan to-retroPink' : 'bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full'}`}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Academic Record */}
          <div className="lg:col-span-6">
            <div
              className={
                isRetro
                  ? 'bg-[#0a0e19] p-6 sm:p-8 border-2 border-retroGreen shadow-[6px_6px_0px_#000] h-full flex flex-col justify-between'
                  : 'modern-card p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-between'
              }
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
                  <span className={`px-2.5 py-0.5 text-xs font-mono font-medium rounded ${isRetro ? 'bg-black border border-retroGreen text-retroGreen font-pixel text-[10px]' : 'bg-slate-900 border border-slate-800 text-teal-300'}`}>
                    Undergraduate Degree
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{education.period}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {education.degree}
                </h3>

                <p className="text-sm font-mono text-teal-400 font-semibold mb-1">
                  {education.institution}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mb-6">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{education.location}</span>
                </div>

                {/* CGPA Card */}
                <div className={`p-4 rounded-xl mb-6 flex items-center justify-between border ${isRetro ? 'bg-black border-2 border-retroGreen shadow-[3px_3px_0px_#000]' : 'bg-slate-900/80 border-slate-800'}`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isRetro ? 'bg-[#0a0e19] text-retroGreen border border-retroGreen' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'}`}>
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">ACADEMIC SCORE</span>
                      <span className="text-xs font-mono font-bold text-white">Cumulative GPA</span>
                    </div>
                  </div>
                  <span className={isRetro ? 'text-sm font-pixel font-bold text-black px-3 py-1.5 bg-retroGreen border border-black shadow-[2px_2px_0px_#fff]' : 'text-sm font-mono font-bold text-emerald-300 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-lg'}>
                    {education.grade}
                  </span>
                </div>

                {/* Relevant Coursework */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-teal-400" />
                    <span>Key Core Modules</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {education.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className={
                          isRetro
                            ? 'px-2.5 py-1 text-[11px] font-mono bg-black text-slate-300 border border-slate-800'
                            : 'px-2.5 py-1 text-xs font-mono bg-slate-900/90 text-slate-400 rounded-lg border border-slate-800'
                        }
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
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>{isRetro ? 'SIDE QUESTS & ACTIVITIES' : 'Honors & Extracurricular Activities'}</span>
              </h3>
              <span className="text-xs font-mono text-slate-500">// {achievements.length} records</span>
            </div>

            {achievements.map((item, aIdx) => (
              <div
                key={aIdx}
                className={
                  isRetro
                    ? 'bg-[#0a0e19] p-5 border-2 border-slate-700 hover:border-retroYellow shadow-[4px_4px_0px_#000] transition-all group'
                    : 'modern-card p-5 rounded-xl group hover:border-teal-500/40 transition-all'
                }
              >
                <div className="flex items-start gap-4">
                  <div
                    className={
                      isRetro
                        ? 'p-2 bg-black border border-slate-700 text-retroYellow group-hover:border-retroYellow transition-colors flex-shrink-0'
                        : 'p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-teal-400 group-hover:border-teal-500/40 transition-colors flex-shrink-0'
                    }
                  >
                    {aIdx === 0 && <Code2 className="w-4 h-4 text-teal-400" />}
                    {aIdx === 1 && <Users className="w-4 h-4 text-cyan-400" />}
                    {aIdx === 2 && <Trophy className="w-4 h-4 text-amber-400" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
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
