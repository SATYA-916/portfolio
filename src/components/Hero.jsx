import React, { useState, useEffect } from 'react';
import {
  Mail,
  ArrowRight,
  Download,
  Terminal,
  ChevronDown,
  Layers,
  Sparkles,
  Zap,
  Bot,
  Flame,
  Radio
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Dynamic typing animation
  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const tickerItems = [
    "★ MARTECH AUTOMATION",
    "★ BREVO EMAIL API",
    "★ LEAD TRACKING DASHBOARDS",
    "★ FIGMA DESIGN SYSTEMS",
    "★ EXCEL & PYTHON ANALYTICS",
    "★ DESIGN-TO-CODE REACT",
    "★ GITAM CSE (8.2 CGPA)",
    "★ FULL STACK & GENAI"
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden retro-grid-bg"
    >
      {/* Retro Marquee Ticker */}
      <div className="w-full bg-black border-y-2 border-retroCyan py-1.5 overflow-hidden mb-8 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <span
              key={idx}
              className="mx-4 text-xs font-retro tracking-widest text-retroYellow flex items-center gap-2"
            >
              <span className="text-retroPink">👾</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-retroCyan/10 via-retroPurple/10 to-retroPink/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Retro Terminal Main Window */}
        <div className="retro-window rounded-none bg-[#0a0e19] border-2 border-retroCyan p-1 shadow-[8px_8px_0px_#000000,8px_8px_0px_2px_#00f0ff]">
          
          {/* Retro Window Titlebar */}
          <div className="bg-[#050811] px-4 py-2 border-b-2 border-retroCyan flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-retroPink inline-block border border-black shadow-[1px_1px_0px_#000]"></span>
              <span className="w-3 h-3 bg-retroYellow inline-block border border-black shadow-[1px_1px_0px_#000]"></span>
              <span className="w-3 h-3 bg-retroGreen inline-block border border-black shadow-[1px_1px_0px_#000]"></span>
              <span className="font-mono text-xs text-retroCyan font-bold ml-2 tracking-wider">
                C:\SATYA_PORTFOLIO\MAIN_TERMINAL.EXE
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
              <span className="text-retroGreen font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-retroGreen animate-ping"></span>
                LIVE
              </span>
              <span className="hidden sm:inline text-slate-500">| [ _ ] [ 口 ] [ X ]</span>
            </div>
          </div>

          {/* Terminal Content Body */}
          <div className="p-6 sm:p-10 text-center flex flex-col items-center">
            
            {/* Retro Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black border-2 border-retroYellow text-retroYellow text-xs font-mono font-bold mb-6 shadow-retro-yellow">
              <Sparkles className="w-3.5 h-3.5 text-retroPink animate-spin" />
              <span>INSERT COIN // READY FOR MARTECH & WEB ROLES</span>
            </div>

            {/* Name / Main Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-4 uppercase">
              HELLO WORLD, I'M{' '}
              <span className="text-retroCyan retro-glow-cyan">
                {personalInfo.name}
              </span>
            </h1>

            {/* Typing Terminal Role */}
            <div className="min-h-[50px] flex items-center justify-center mb-6 bg-black/80 border-2 border-retroBorder px-6 py-2 shadow-[4px_4px_0px_#000] w-full max-w-2xl">
              <div className="font-mono text-base sm:text-2xl text-retroYellow font-bold flex items-center gap-2">
                <span className="text-retroPink">&gt;&gt;</span>
                <span>{displayedText}</span>
                <span className="w-3 h-6 sm:h-7 bg-retroCyan animate-blink inline-block"></span>
              </div>
            </div>

            {/* Tagline Summary */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mb-8 leading-relaxed font-sans">
              {personalInfo.tagline}
            </p>

            {/* Primary Retro Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
              <a
                href="#projects"
                className="retro-btn bg-retroCyan text-black px-6 py-3 text-xs sm:text-sm font-display font-bold uppercase tracking-wider flex items-center gap-2 shadow-retro-cyan hover:bg-cyan-300"
              >
                <span>[ EXPLORE WORK ]</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="retro-btn-pink bg-black text-retroPink border-2 border-retroPink px-6 py-3 text-xs sm:text-sm font-mono font-bold flex items-center gap-2 hover:bg-retroPink hover:text-white"
              >
                <Download className="w-4 h-4" />
                <span>[ RESUME.PDF ]</span>
              </a>

              <a
                href="#experience"
                className="retro-btn-yellow bg-black text-retroYellow border-2 border-retroYellow px-5 py-3 text-xs sm:text-sm font-display font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-retroYellow hover:text-black"
              >
                <Layers className="w-4 h-4" />
                <span>[ MISSIONS ]</span>
              </a>

              <a
                href="#contact"
                className="retro-btn bg-black text-white border-2 border-slate-600 px-5 py-3 text-xs sm:text-sm font-display font-bold uppercase tracking-wider flex items-center gap-2 hover:border-retroCyan hover:text-retroCyan"
              >
                <Mail className="w-4 h-4 text-retroCyan" />
                <span>[ TRANSMIT ]</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-3 mb-10">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-black border-2 border-retroBorder text-retroCyan hover:border-retroCyan hover:bg-retroCyan/10 shadow-[3px_3px_0px_#000] transition-all"
                title="GitHub Repo"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-black border-2 border-retroBorder text-retroPink hover:border-retroPink hover:bg-retroPink/10 shadow-[3px_3px_0px_#000] transition-all"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-black border-2 border-retroBorder text-retroYellow hover:border-retroYellow hover:bg-retroYellow/10 shadow-[3px_3px_0px_#000] transition-all"
                title="LeetCode Profile"
              >
                <LeetCodeIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.email}
                className="p-2.5 bg-black border-2 border-retroBorder text-retroGreen hover:border-retroGreen hover:bg-retroGreen/10 shadow-[3px_3px_0px_#000] transition-all"
                title="Email Transmission"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Retro Inventory / Stats Grid */}
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-black/90 p-3.5 border-2 border-retroBorder hover:border-retroCyan shadow-[4px_4px_0px_#000] transition-all text-center group"
                >
                  <div className="text-base sm:text-lg font-pixel font-bold text-retroCyan group-hover:text-retroPink transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Window Footer Status */}
          <div className="bg-[#050811] px-4 py-1.5 border-t-2 border-retroBorder flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span>MEM: 640K OK // PORT: 3000</span>
            <span className="text-retroCyan">READY_</span>
          </div>

        </div>

        {/* Scroll Down Hint */}
        <div className="mt-8 flex flex-col items-center">
          <a href="#about" aria-label="Scroll to About Section" className="flex flex-col items-center text-slate-500 hover:text-retroCyan transition-colors">
            <span className="text-[10px] font-retro tracking-widest mb-1 text-retroPink">PRESS START [↓]</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
