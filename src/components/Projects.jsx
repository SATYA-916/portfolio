import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Sparkles,
  Layers,
  Bot,
  Zap,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'design', label: 'Product & UI/UX Design' },
    { id: 'client', label: 'Client Platforms' },
    { id: 'ai', label: 'AI Products' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'design') return project.category.toLowerCase().includes('design') || project.category.toLowerCase().includes('interaction');
    if (filter === 'client') return project.category.toLowerCase().includes('client') || project.id === 'sls-nexus';
    if (filter === 'ai') return project.category.toLowerCase().includes('ai') || project.category.toLowerCase().includes('rag');
    return true;
  });

  return (
    <section id="projects" className="py-20 relative bg-[#0b101d] bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Design & Web Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Featured <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">Design & Web Projects</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2 text-center">
            Figma-to-production client platforms, high-conversion lead workflows, and intuitive AI user experiences.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-4"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                filter === opt.id
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold shadow-lg shadow-teal-500/20'
                  : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700'
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
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-slate-800/90 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Card Accent Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-cyan-400 to-purple-500"></div>

              <div>
                {/* Badge and Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/20 font-mono">
                    {project.badge}
                  </span>
                  <span className="text-xs text-slate-400">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors flex items-center gap-2">
                  <span>{project.title}</span>
                  {project.demo && (
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-teal-400" />
                  )}
                </h3>

                {/* Summary */}
                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {project.summary}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0"></div>
                      <span className="text-xs text-slate-300 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-800">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
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
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 hover:from-teal-400 hover:to-cyan-400 transition-all shadow-md shadow-teal-500/20"
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
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:border-slate-500 transition-all"
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
