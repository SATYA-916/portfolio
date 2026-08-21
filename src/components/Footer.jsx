import React from 'react';
import {
  ArrowUp,
  Heart,
  Code2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070b13] border-t border-slate-800/80 pt-12 pb-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-teal-500 to-cyan-400 p-[1px]">
              <div className="w-full h-full bg-[#0b1120] rounded-[7px] flex items-center justify-center">
                <span className="font-mono font-bold text-xs bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                  SK
                </span>
              </div>
            </div>
            <div>
              <span className="font-semibold text-slate-200 block text-sm">
                {personalInfo.name}
              </span>
              <span className="text-[11px] text-slate-500 font-mono">
                Web Product Designer & UI/UX Developer
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            <a href="#education" className="hover:text-teal-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-[#0a66c2] hover:border-slate-700 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-amber-400 hover:border-slate-700 transition-colors"
              aria-label="LeetCode Profile"
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400 hover:bg-teal-500/20 transition-colors ml-2"
              aria-label="Back to Top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <span className="text-teal-400 font-semibold">React, Vite & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
