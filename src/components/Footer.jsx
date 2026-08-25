import React from 'react';
import {
  ArrowUp,
  Terminal,
  Gamepad2,
  Heart
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const { isRetro } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t pt-12 pb-8 text-slate-400 text-xs transition-colors ${
        isRetro ? 'bg-[#050811] border-retroBorder' : 'bg-[#070a12] border-slate-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            {isRetro ? (
              <div className="px-2.5 py-1 bg-black border-2 border-retroCyan shadow-retro-cyan flex items-center gap-1">
                <span className="text-retroPink font-pixel text-xs">▶</span>
                <span className="font-pixel text-xs text-retroCyan">
                  SK
                </span>
              </div>
            ) : (
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center font-mono font-bold text-teal-400 text-xs">
                SK
              </div>
            )}
            <div>
              <span className="font-bold text-slate-100 block text-sm">
                {personalInfo.name}
              </span>
              <span className={`text-[11px] font-mono ${isRetro ? 'text-retroGreen' : 'text-slate-400'}`}>
                MarTech &amp; Web Systems
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            <a href="#education" className="hover:text-teal-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-teal-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-amber-400 transition-colors"
              aria-label="LeetCode Profile"
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className={
                isRetro
                  ? 'retro-btn bg-retroCyan text-black p-1.5 text-xs font-mono font-bold flex items-center gap-1 ml-2 hover:bg-cyan-300'
                  : 'p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-teal-400 transition-colors ml-2'
              }
              aria-label="Back to Top"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-xs font-mono">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            {isRetro ? (
              <span className="text-retroPink font-pixel text-[10px]">
                [GAME SAVED // READY FOR PRODUCTION]
              </span>
            ) : (
              <span>Built with React 19, Vite &amp; Tailwind CSS</span>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
