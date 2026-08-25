import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  Gamepad2,
  Code
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: '[ALL APPS]' },
    { id: 'martech', label: '[MARKETING OPS]' },
    { id: 'web', label: '[WEB & UI/UX]' },
    { id: 'ai', label: '[DATA & AI]' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'martech') return project.category.toLowerCase().includes('marketing') || project.category.toLowerCase().includes('dashboard') || project.id === 'sls-nexus' || project.id === 'quizhub';
    if (filter === 'web') return project.category.toLowerCase().includes('web') || project.category.toLowerCase().includes('design') || project.category.toLowerCase().includes('interaction');
    if (filter === 'ai') return project.category.toLowerCase().includes('ai') || project.category.toLowerCase().includes('pipeline') || project.category.toLowerCase().includes('rag');
    return true;
  });

  return (
    <section id="projects" className="py-20 relative bg-[#0b0f19] retro-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black border-2 border-retroCyan text-retroCyan text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-[3px_3px_0px_#000]">
            <Gamepad2 className="w-3.5 h-3.5 text-retroPink" />
            <span>// DEPLOYED PROGRAMS & CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white uppercase">
            FEATURED <span className="text-retroCyan retro-glow-cyan">SYSTEMS & WEB APPS</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2 text-center font-sans">
            Live client lead capture platforms, Brevo email automation workflows, admin dashboards, and data pipelines.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-retroCyan via-retroPink to-retroYellow mt-4"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id)}
              className={`px-4 py-1.5 text-xs font-mono font-bold transition-all ${
                filter === opt.id
                  ? 'bg-retroPink text-white border-2 border-black shadow-[3px_3px_0px_#00f0ff] translate-x-[1px] translate-y-[1px]'
                  : 'bg-black text-slate-300 border-2 border-slate-700 hover:border-retroPink hover:text-retroPink shadow-[3px_3px_0px_#000]'
              }`}
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
              className="bg-[#0a0e19] border-2 border-slate-700 hover:border-retroCyan shadow-[8px_8px_0px_#000000] flex flex-col justify-between group transition-all"
            >
              {/* Retro Window Header Bar */}
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

              <div className="p-6 sm:p-7">
                {/* Category & Title */}
                <div className="text-[11px] font-mono text-retroPink font-bold mb-1 uppercase tracking-wider">
                  // {project.category}
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-retroCyan transition-colors flex items-center gap-2 uppercase">
                  <span>{project.title}</span>
                  {project.demo && (
                    <ArrowUpRight className="w-4 h-4 text-retroCyan opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </h3>

                {/* Summary */}
                <p className="text-slate-300 text-sm leading-relaxed mb-5 font-sans">
                  {project.summary}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6 font-sans">
                  {project.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5">
                      <span className="text-retroCyan font-mono text-xs mt-0.5">▶</span>
                      <span className="text-xs text-slate-300 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0">
                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t-2 border-slate-800">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[10px] font-mono bg-black text-slate-300 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Link Buttons */}
                <div className="flex items-center gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="retro-btn bg-retroCyan text-black px-4 py-2 text-xs font-mono font-bold flex items-center gap-2 hover:bg-cyan-300 shadow-retro-cyan"
                    >
                      <span>[ RUN LIVE DEMO ]</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="retro-btn bg-black text-slate-300 border-2 border-slate-700 hover:border-retroPink hover:text-retroPink px-4 py-2 text-xs font-mono font-bold flex items-center gap-2"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>[ SOURCE CODE ]</span>
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
