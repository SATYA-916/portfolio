import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  Gamepad2,
  Code
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const { isRetro } = useTheme();
  const [filter, setFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: isRetro ? '[ALL APPS]' : 'All Projects' },
    { id: 'martech', label: isRetro ? '[MARKETING OPS]' : 'Marketing Automation' },
    { id: 'web', label: isRetro ? '[WEB & UI/UX]' : 'Web & UI/UX Design' },
    { id: 'ai', label: isRetro ? '[DATA & AI]' : 'Data Pipelines & AI' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'martech') return project.category.toLowerCase().includes('marketing') || project.category.toLowerCase().includes('dashboard') || project.id === 'sls-nexus' || project.id === 'quizhub';
    if (filter === 'web') return project.category.toLowerCase().includes('web') || project.category.toLowerCase().includes('design') || project.category.toLowerCase().includes('interaction');
    if (filter === 'ai') return project.category.toLowerCase().includes('ai') || project.category.toLowerCase().includes('pipeline') || project.category.toLowerCase().includes('rag');
    return true;
  });

  return (
    <section
      id="projects"
      className={`py-24 relative ${isRetro ? 'bg-[#0b0f19] retro-grid-bg' : 'bg-[#080c14]'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div
            className={
              isRetro
                ? 'inline-flex items-center gap-2 px-3.5 py-1 bg-black border-2 border-retroCyan text-retroCyan text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-[3px_3px_0px_#000]'
                : 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-mono font-medium mb-3'
            }
          >
            {isRetro ? <Gamepad2 className="w-3.5 h-3.5 text-retroPink" /> : <FolderGit2 className="w-3.5 h-3.5 text-teal-400" />}
            <span>{isRetro ? '// DEPLOYED PROGRAMS & CASE STUDIES' : 'Featured Work & Systems'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase">
            FEATURED{' '}
            <span className={isRetro ? 'text-retroCyan retro-glow-cyan' : 'text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400'}>
              SYSTEMS &amp; WEB APPS
            </span>
          </h2>

          <p className="text-slate-400 text-sm max-w-xl mt-3 text-center font-sans">
            Live client lead capture platforms, Brevo email automation workflows, admin dashboards, and data pipelines.
          </p>

          <div className={`w-24 h-1.5 mt-4 ${isRetro ? 'bg-gradient-to-r from-retroCyan via-retroPink to-retroYellow' : 'bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full'}`}></div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id)}
              className={
                isRetro
                  ? `px-4 py-1.5 text-xs font-mono font-bold transition-all ${
                      filter === opt.id
                        ? 'bg-retroPink text-white border-2 border-black shadow-[3px_3px_0px_#00f0ff] translate-x-[1px] translate-y-[1px]'
                        : 'bg-black text-slate-300 border-2 border-slate-700 hover:border-retroPink hover:text-retroPink shadow-[3px_3px_0px_#000]'
                    }`
                  : `px-4 py-2 text-xs font-medium rounded-xl transition-all duration-200 ${
                      filter === opt.id
                        ? 'bg-teal-500/20 text-teal-300 font-semibold border border-teal-500/40 shadow-sm shadow-teal-500/10'
                        : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
                    }`
              }
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={
                isRetro
                  ? 'bg-[#0a0e19] border-2 border-slate-700 hover:border-retroCyan shadow-[8px_8px_0px_#000000] flex flex-col justify-between group transition-all'
                  : 'modern-card rounded-2xl flex flex-col justify-between group overflow-hidden'
              }
            >
              {/* Retro Titlebar or Modern Top Accent */}
              {isRetro ? (
                <div className="bg-black px-4 py-2 border-b-2 border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-retroPink"></span>
                    <span className="w-2.5 h-2.5 bg-retroYellow"></span>
                    <span className="w-2.5 h-2.5 bg-retroGreen"></span>
                    <span className="font-mono text-xs text-retroCyan font-bold ml-1 uppercase">
                      {project.id}.EXE
                    </span>
                  </div>
                  <span className="text-[10px] font-pixel text-retroYellow">
                    {project.badge}
                  </span>
                </div>
              ) : (
                <div className="h-1.5 w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-400 opacity-60 group-hover:opacity-100 transition-opacity"></div>
              )}

              <div className="p-6 sm:p-8">
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-xs font-mono font-medium ${isRetro ? 'text-retroPink font-bold uppercase' : 'text-teal-400'}`}>
                    // {project.category}
                  </span>
                  {!isRetro && (
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-[11px] font-mono text-slate-300">
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors flex items-center gap-2">
                  <span>{project.title}</span>
                  {project.demo && (
                    <ArrowUpRight className="w-4 h-4 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </h3>

                {/* Summary */}
                <p className="text-slate-300 text-sm leading-relaxed mb-5 font-sans">
                  {project.summary}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 mb-6 font-sans">
                  {project.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5">
                      <span className={`font-mono text-xs mt-0.5 ${isRetro ? 'text-retroCyan' : 'text-teal-400'}`}>
                        &gt;
                      </span>
                      <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-800">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className={
                        isRetro
                          ? 'px-2 py-0.5 text-[10px] font-mono bg-black text-slate-300 border border-slate-800'
                          : 'px-2.5 py-1 text-xs font-mono bg-slate-900/90 text-slate-400 rounded-lg border border-slate-800'
                      }
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        isRetro
                          ? 'retro-btn bg-retroCyan text-black px-4 py-2 text-xs font-mono font-bold flex items-center gap-2 hover:bg-cyan-300 shadow-retro-cyan'
                          : 'px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 rounded-xl text-xs font-semibold flex items-center gap-2 shadow-sm hover:from-teal-400 hover:to-cyan-400 transition-all'
                      }
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        isRetro
                          ? 'retro-btn bg-black text-slate-300 border-2 border-slate-700 hover:border-retroPink hover:text-retroPink px-4 py-2 text-xs font-mono font-bold flex items-center gap-2'
                          : 'px-4 py-2 bg-slate-900 border border-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-mono font-medium flex items-center gap-2 hover:border-teal-500 transition-all'
                      }
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
