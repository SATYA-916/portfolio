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
  ExternalLink,
  Gamepad2
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const { isRetro } = useTheme();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Dynamic typing animation
  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 65;

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
      className={`relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden ${
        isRetro ? 'retro-grid-bg' : 'modern-grid-bg'
      }`}
    >
      {/* Ambient background glows for Modern Mode */}
      {!isRetro && (
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-teal-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
      )}

      {/* Retro Marquee Ticker (Retro Mode Only) */}
      {isRetro && (
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
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {isRetro ? (
          /* ==================== RETRO MODE TERMINAL WINDOW ==================== */
          <div className="retro-window rounded-none bg-[#0a0e19] border-2 border-retroCyan p-1 shadow-[8px_8px_0px_#000000,8px_8px_0px_2px_#00f0ff]">
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

            <div className="p-6 sm:p-10 text-center flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black border-2 border-retroYellow text-retroYellow text-xs font-mono font-bold mb-6 shadow-retro-yellow">
                <Sparkles className="w-3.5 h-3.5 text-retroPink animate-spin" />
                <span>INSERT COIN // READY FOR MARTECH &amp; WEB ROLES</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-4 uppercase">
                HELLO WORLD, I'M{' '}
                <span className="text-retroCyan retro-glow-cyan">
                  {personalInfo.name}
                </span>
              </h1>

              <div className="min-h-[50px] flex items-center justify-center mb-6 bg-black/80 border-2 border-retroBorder px-6 py-2 shadow-[4px_4px_0px_#000] w-full max-w-2xl">
                <div className="font-mono text-base sm:text-2xl text-retroYellow font-bold flex items-center gap-2">
                  <span className="text-retroPink">&gt;&gt;</span>
                  <span>{displayedText}</span>
                  <span className="w-3 h-6 sm:h-7 bg-retroCyan animate-blink inline-block"></span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl mb-8 leading-relaxed font-sans">
                {personalInfo.tagline}
              </p>

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
                  <span>[ EXPERIENCE ]</span>
                </a>

                <a
                  href="#contact"
                  className="retro-btn bg-black text-white border-2 border-slate-600 px-5 py-3 text-xs sm:text-sm font-display font-bold uppercase tracking-wider flex items-center gap-2 hover:border-retroCyan hover:text-retroCyan"
                >
                  <Mail className="w-4 h-4 text-retroCyan" />
                  <span>[ TRANSMIT ]</span>
                </a>
              </div>

              <div className="flex items-center gap-3 mb-10">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-black border-2 border-retroBorder text-retroCyan hover:border-retroCyan hover:bg-retroCyan/10 shadow-[3px_3px_0px_#000] transition-all"
                  title="GitHub Profile"
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
                  title="Email Communication"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

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

            <div className="bg-[#050811] px-4 py-1.5 border-t-2 border-retroBorder flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>MEM: 640K OK // PORT: 3000</span>
              <span className="text-retroCyan">READY_</span>
            </div>
          </div>
        ) : (
          /* ==================== MODERN DEFAULT MODE (CADENCE & PRODUCT AUDIENCE) ==================== */
          <div className="flex flex-col items-center text-center">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-teal-500/30 text-teal-300 text-xs font-medium mb-6 shadow-sm shadow-teal-500/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span>Available for MarTech, Web Marketing &amp; Engineering Roles</span>
            </div>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-200">
                {personalInfo.name}
              </span>
            </h1>

            {/* Dynamic Role Cycler in Modern Glass Card */}
            <div className="min-h-[52px] flex items-center justify-center mb-6 px-6 py-2.5 rounded-xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md shadow-inner max-w-xl w-full">
              <div className="font-mono text-base sm:text-xl font-semibold text-slate-200 flex items-center gap-2">
                <span className="text-teal-400 font-bold">&gt;</span>
                <span className="text-teal-300">{displayedText}</span>
                <span className="w-2 h-5 bg-teal-400 animate-blink inline-block"></span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed font-normal">
              {personalInfo.tagline}
            </p>

            {/* Modern Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 text-sm font-semibold flex items-center gap-2 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/35 hover:-translate-y-0.5 transition-all"
              >
                <span>Explore Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-teal-500 text-slate-200 hover:text-white text-sm font-mono font-medium flex items-center gap-2 hover:-translate-y-0.5 transition-all backdrop-blur-sm"
              >
                <Download className="w-4 h-4 text-teal-400" />
                <span>Resume (PDF)</span>
              </a>

              <a
                href="#experience"
                className="px-5 py-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-sm font-medium flex items-center gap-2 hover:-translate-y-0.5 transition-all"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Experience</span>
              </a>

              <a
                href="#contact"
                className="px-5 py-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-teal-500/40 text-slate-300 hover:text-teal-300 text-sm font-medium flex items-center gap-2 hover:-translate-y-0.5 transition-all"
              >
                <Mail className="w-4 h-4 text-teal-400" />
                <span>Contact</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mb-12">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-teal-400 text-slate-400 hover:text-white hover:-translate-y-0.5 transition-all"
                title="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-400 text-slate-400 hover:text-white hover:-translate-y-0.5 transition-all"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-amber-400 text-slate-400 hover:text-white hover:-translate-y-0.5 transition-all"
                title="LeetCode Profile"
              >
                <LeetCodeIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.email}
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-teal-400 text-slate-400 hover:text-white hover:-translate-y-0.5 transition-all"
                title="Email Communication"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Modern Stats Grid */}
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="modern-card p-4 rounded-xl text-center group"
                >
                  <div className="text-lg sm:text-xl font-bold font-mono text-teal-400 group-hover:text-cyan-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium tracking-wide mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Scroll Indicator */}
        <div className="mt-12 flex flex-col items-center">
          <a
            href="#about"
            aria-label="Scroll to About Section"
            className="flex flex-col items-center text-slate-500 hover:text-teal-400 transition-colors group"
          >
            <span className={`text-[11px] mb-1 font-mono ${isRetro ? 'text-retroPink font-retro' : 'text-slate-400 group-hover:text-teal-400'}`}>
              {isRetro ? 'PRESS START [↓]' : 'Explore Profile'}
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
