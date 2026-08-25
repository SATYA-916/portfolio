import React from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  Trophy,
  Users,
  Code2
} from 'lucide-react';
import { education, achievements } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-20 relative bg-[#080c14] retro-dot-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black border-2 border-retroGreen text-retroGreen text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-[3px_3px_0px_#000]">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>// ACADEMIC RECORD & SIDE QUESTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white uppercase">
            EDUCATION & <span className="text-retroGreen retro-glow-green">ACHIEVEMENTS</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-retroGreen via-retroCyan to-retroPink mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Academic Record Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#0a0e19] p-6 sm:p-8 border-2 border-retroGreen shadow-[6px_6px_0px_#000] h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b-2 border-slate-800">
                  <span className="px-2 py-0.5 bg-black border border-retroGreen text-retroGreen text-[10px] font-pixel">
                    UNDERGRAD_DEGREE
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-retroYellow" />
                    <span>{education.period}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-2xl font-display font-bold text-white mb-2 uppercase">
                  {education.degree}
                </h3>

                <p className="text-sm font-mono text-retroCyan font-bold mb-1">
                  {education.institution}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mb-6">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{education.location}</span>
                </div>

                {/* CGPA Arcade Highlight */}
                <div className="p-4 bg-black border-2 border-retroGreen mb-6 flex items-center justify-between shadow-[3px_3px_0px_#000]">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#0a0e19] text-retroGreen border border-retroGreen">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">ACADEMIC SCORE</span>
                      <span className="text-xs font-mono font-bold text-white">Cumulative GPA</span>
                    </div>
                  </div>
                  <span className="text-sm font-pixel font-bold text-black px-3 py-1.5 bg-retroGreen border border-black shadow-[2px_2px_0px_#fff]">
                    {education.grade}
                  </span>
                </div>

                {/* Relevant Coursework */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-retroYellow uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>KEY CORE MODULES</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {education.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 text-[11px] font-mono bg-black text-slate-300 border border-slate-800"
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
            <div className="flex items-center justify-between pb-2 border-b-2 border-slate-800 mb-4">
              <h3 className="text-base font-mono font-bold text-retroYellow flex items-center gap-2 uppercase">
                <Trophy className="w-4 h-4 text-retroYellow" />
                <span>SIDE QUESTS & ACTIVITIES</span>
              </h3>
              <span className="text-[10px] font-mono text-slate-500">// UNLOCKED</span>
            </div>

            {achievements.map((item, aIdx) => (
              <div
                key={aIdx}
                className="bg-[#0a0e19] p-5 border-2 border-slate-700 hover:border-retroYellow shadow-[4px_4px_0px_#000] transition-all group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-black border border-slate-700 text-retroYellow group-hover:border-retroYellow transition-colors flex-shrink-0">
                    {aIdx === 0 && <Code2 className="w-4 h-4 text-retroCyan" />}
                    {aIdx === 1 && <Users className="w-4 h-4 text-retroGreen" />}
                    {aIdx === 2 && <Trophy className="w-4 h-4 text-retroYellow" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold text-white group-hover:text-retroYellow transition-colors mb-1 uppercase">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
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
