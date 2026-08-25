import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Terminal, ArrowRight, Sparkles, Gamepad2, Laptop } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const { isRetro, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: isRetro ? 'ABOUT' : 'About', href: '#about' },
    { name: isRetro ? 'SKILLS' : 'Skills', href: '#skills' },
    { name: isRetro ? 'EXPERIENCE' : 'Experience', href: '#experience' },
    { name: isRetro ? 'PROJECTS' : 'Projects', href: '#projects' },
    { name: isRetro ? 'EDUCATION' : 'Education', href: '#education' },
    { name: isRetro ? 'CONTACT' : 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isRetro
          ? scrolled
            ? 'bg-[#080c14]/95 backdrop-blur-md border-b-2 border-retroCyan shadow-[0_4px_20px_rgba(0,240,255,0.15)] py-2.5'
            : 'bg-[#080c14]/80 backdrop-blur-sm border-b border-retroBorder py-3.5'
          : scrolled
            ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3'
            : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
          >
            {isRetro ? (
              <div className="px-2.5 py-1 bg-black border-2 border-retroCyan shadow-retro-cyan group-hover:shadow-retro-pink group-hover:border-retroPink transition-all flex items-center gap-1.5">
                <span className="text-retroPink font-pixel text-xs animate-pulse">▶</span>
                <span className="font-pixel text-xs text-retroCyan group-hover:text-retroPink transition-colors">
                  SATYA_OS
                </span>
              </div>
            ) : (
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 p-[1px] shadow-sm shadow-teal-500/20 group-hover:shadow-teal-500/40 transition-all">
                <div className="w-full h-full bg-[#090d16] rounded-lg flex items-center justify-center font-mono font-bold text-teal-400 text-sm">
                  SK
                </div>
              </div>
            )}
            <div className="flex flex-col">
              <span className="font-display font-bold text-slate-100 text-sm tracking-tight group-hover:text-teal-400 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                <span className={`w-1.5 h-1.5 rounded-full ${isRetro ? 'bg-retroGreen animate-ping' : 'bg-teal-400'}`}></span>
                {isRetro ? 'ONLINE // MARTECH 2.6' : 'MarTech & Web Systems'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {isRetro ? (
              <div className="flex items-center gap-1.5 bg-[#0e1422] border-2 border-retroBorder px-2.5 py-1 shadow-[2px_2px_0px_#000]">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`px-3 py-1 text-[11px] font-retro tracking-wider transition-all duration-150 ${
                        isActive
                          ? 'bg-retroCyan text-black font-bold shadow-[2px_2px_0px_#ff007f]'
                          : 'text-slate-300 hover:text-retroCyan hover:bg-slate-800/80'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
            ) : (
              <div className="flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-3 py-1 backdrop-blur-md">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                        isActive
                          ? 'bg-teal-500/20 text-teal-300 font-semibold border border-teal-500/30'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Action Area: Theme Switcher & CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                isRetro
                  ? 'retro-btn-yellow bg-black text-retroYellow border-2 border-retroYellow shadow-retro-yellow hover:bg-retroYellow hover:text-black'
                  : 'bg-teal-500/10 text-teal-300 border border-teal-500/30 rounded-full hover:bg-teal-500/20 hover:border-teal-400 shadow-sm'
              }`}
              title={isRetro ? "Switch to Modern Product Mode" : "Switch to Retro Mode"}
            >
              {isRetro ? (
                <>
                  <Laptop className="w-3.5 h-3.5 text-retroPink" />
                  <span>[ MODERN MODE ]</span>
                </>
              ) : (
                <>
                  <Gamepad2 className="w-3.5 h-3.5 text-teal-400" />
                  <span>🕹️ RETRO MODE</span>
                </>
              )}
            </button>

            {/* Resume Button */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={
                isRetro
                  ? 'retro-btn bg-black text-retroCyan border-2 border-retroCyan px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5 hover:bg-retroCyan/10 hover:text-white'
                  : 'px-3.5 py-1.5 bg-slate-900 border border-slate-700 hover:border-teal-500 text-slate-200 hover:text-white rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all'
              }
            >
              <Download className={`w-3.5 h-3.5 ${isRetro ? 'text-retroPink' : 'text-teal-400'}`} />
              <span>Resume</span>
            </a>

            {/* Contact CTA */}
            <a
              href="#contact"
              className={
                isRetro
                  ? 'retro-btn-pink bg-retroPink text-white px-3.5 py-1.5 text-xs font-display font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-retro-pink'
                  : 'px-4 py-1.5 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm shadow-teal-500/20 hover:shadow-teal-500/40 transition-all'
              }
            >
              <span>{isRetro ? 'TRANSMIT' : 'Contact'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Theme Toggle & Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-1.5 text-xs font-mono rounded ${
                isRetro
                  ? 'bg-black border-2 border-retroYellow text-retroYellow'
                  : 'bg-teal-500/10 border border-teal-500/30 text-teal-300'
              }`}
              title="Toggle Theme"
            >
              {isRetro ? '⚡ MODERN' : '🕹️ RETRO'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded transition-colors focus:outline-none ${
                isRetro
                  ? 'bg-black border-2 border-retroCyan text-retroCyan'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className={`md:hidden px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200 ${
            isRetro
              ? 'bg-[#0a0e19] border-b-2 border-retroCyan'
              : 'bg-[#090d16]/95 border-b border-slate-800 backdrop-blur-md'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 text-xs transition-all ${
                isRetro
                  ? 'font-retro text-slate-200 hover:bg-retroCyan hover:text-black border border-transparent hover:border-black'
                  : 'font-medium text-slate-300 hover:text-teal-300 hover:bg-slate-800/50 rounded-lg'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-center gap-2 py-2 text-xs font-mono font-medium ${
                isRetro
                  ? 'retro-btn bg-black text-retroCyan border-2 border-retroCyan'
                  : 'bg-slate-900 border border-slate-700 text-slate-200 rounded-lg'
              }`}
            >
              <Download className="w-4 h-4 text-teal-400" />
              <span>View Resume (PDF)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-center gap-2 py-2 text-xs font-semibold ${
                isRetro
                  ? 'retro-btn-pink bg-retroPink text-white'
                  : 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 rounded-lg'
              }`}
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
