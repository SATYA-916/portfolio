import React, { useState, useEffect } from 'react';
import {
  Mail,
  ArrowRight,
  Sparkles,
  Download,
  Code,
  Terminal,
  ExternalLink,
  ChevronDown,
  Layers,
  Cpu
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
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
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

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-teal-500/15 via-cyan-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-teal-500/30 text-teal-300 text-xs font-medium mb-8 backdrop-blur-md shadow-lg shadow-teal-500/5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Available for Full Stack & AI Engineering Opportunities</span>
          </div>

          {/* Greeting & Name */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          {/* Typing Role Title */}
          <div className="h-12 sm:h-14 flex items-center justify-center mb-6">
            <div className="font-mono text-xl sm:text-3xl text-slate-300 font-semibold flex items-center gap-1.5">
              <span className="text-teal-400">&gt;</span>
              <span>{displayedText}</span>
              <span className="w-2.5 h-6 sm:h-8 bg-teal-400 animate-pulse inline-block"></span>
            </div>
          </div>

          {/* Tagline Summary */}
          <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl mb-10 leading-relaxed font-normal">
            {personalInfo.tagline}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-semibold text-sm hover:from-teal-400 hover:to-cyan-400 transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 border border-teal-500/40 text-teal-300 font-semibold text-sm hover:bg-teal-500/10 hover:border-teal-400 transition-all backdrop-blur-md hover:-translate-y-0.5 shadow-md shadow-teal-500/5"
            >
              <Download className="w-4 h-4 text-teal-400" />
              <span>Resume (PDF)</span>
            </a>

            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-200 font-semibold text-sm hover:bg-slate-800 hover:border-slate-600 transition-all backdrop-blur-md hover:-translate-y-0.5"
            >
              <Layers className="w-4 h-4 text-slate-400" />
              <span>Experience</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 font-semibold text-sm hover:bg-slate-800 hover:text-white transition-all hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              <span>Contact</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 mb-16">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-teal-500/40 hover:bg-teal-500/10 transition-all"
              title="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-[#0a66c2] hover:border-[#0a66c2]/40 hover:bg-[#0a66c2]/10 transition-all"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-400/40 hover:bg-amber-400/10 transition-all"
              title="LeetCode Profile"
            >
              <LeetCodeIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socials.email}
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-teal-300 hover:border-teal-500/40 hover:bg-teal-500/10 transition-all"
              title="Send Direct Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-4 rounded-2xl border border-slate-800/80 hover:border-teal-500/30 transition-all text-center group"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-400 font-mono group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Down Hint */}
          <div className="mt-14 animate-bounce text-slate-500 flex flex-col items-center">
            <a href="#about" aria-label="Scroll to About Section">
              <ChevronDown className="w-5 h-5 hover:text-teal-400 transition-colors" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
