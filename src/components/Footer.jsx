import React from 'react';
import {
  ArrowUp,
  Terminal,
  Gamepad2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t-2 border-retroBorder pt-10 pb-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="px-2.5 py-1 bg-black border-2 border-retroCyan shadow-retro-cyan flex items-center gap-1">
              <span className="text-retroPink font-pixel text-xs">▶</span>
              <span className="font-pixel text-xs text-retroCyan">
                SK
              </span>
            </div>
            <div>
              <span className="font-display font-bold text-slate-100 block text-sm uppercase">
                {personalInfo.name}
              </span>
              <span className="text-[10px] text-retroGreen font-mono">
                MARTECH // AUTOMATION, ANALYTICS &amp; WEB
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <a href="#about" className="hover:text-retroCyan transition-colors">[ABOUT]</a>
            <a href="#skills" className="hover:text-retroCyan transition-colors">[SKILLS]</a>
            <a href="#experience" className="hover:text-retroCyan transition-colors">[MISSIONS]</a>
            <a href="#projects" className="hover:text-retroCyan transition-colors">[PROJECTS]</a>
            <a href="#education" className="hover:text-retroCyan transition-colors">[EDUCATION]</a>
            <a href="#contact" className="hover:text-retroCyan transition-colors">[TRANSMIT]</a>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-black border border-slate-700 hover:border-retroCyan text-slate-300 hover:text-retroCyan transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-black border border-slate-700 hover:border-retroPink text-slate-300 hover:text-retroPink transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-black border border-slate-700 hover:border-retroYellow text-slate-300 hover:text-retroYellow transition-colors"
              aria-label="LeetCode Profile"
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="retro-btn bg-retroCyan text-black p-1.5 text-xs font-mono font-bold flex items-center gap-1 ml-2 hover:bg-cyan-300"
              aria-label="Back to Top"
              title="Return to Top of Terminal"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Arcade Credits */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 text-[10px] font-mono">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2 text-retroPink">
            <span>[GAME SAVED // READY FOR PRODUCTION]</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
