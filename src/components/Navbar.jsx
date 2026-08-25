import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Terminal, Sparkles, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'MISSIONS', href: '#experience' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'TRANSMIT', href: '#contact' },
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
        scrolled
          ? 'bg-[#080c14]/95 backdrop-blur-md border-b-2 border-retroCyan shadow-[0_4px_20px_rgba(0,240,255,0.15)] py-2.5'
          : 'bg-[#080c14]/80 backdrop-blur-sm border-b border-retroBorder py-3.5'
      }`}
    >
      {/* Top Arcade Status Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Retro Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="px-2.5 py-1 bg-black border-2 border-retroCyan shadow-retro-cyan group-hover:shadow-retro-pink group-hover:border-retroPink transition-all flex items-center gap-1.5">
              <span className="text-retroPink font-pixel text-xs animate-pulse">▶</span>
              <span className="font-pixel text-xs text-retroCyan group-hover:text-retroPink transition-colors">
                SATYA_OS
              </span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-bold text-slate-100 text-xs tracking-wider uppercase">
                Satya Sampath
              </span>
              <span className="text-[10px] font-mono text-retroGreen flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-none bg-retroGreen animate-ping"></span>
                ONLINE // MARTECH 2.6
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1.5 bg-[#0e1422] border-2 border-retroBorder px-2.5 py-1 shadow-[2px_2px_0px_#000]">
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

          {/* Action Retro CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="retro-btn bg-black text-retroCyan border-2 border-retroCyan px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5 hover:bg-retroCyan/10 hover:text-white"
            >
              <Download className="w-3.5 h-3.5 text-retroPink" />
              <span>RESUME.PDF</span>
            </a>
            <a
              href="#contact"
              className="retro-btn-pink bg-retroPink text-white px-3.5 py-1.5 text-xs font-display font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-retro-pink"
            >
              <span>TRANSMIT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-black border-2 border-retroCyan text-retroCyan hover:bg-retroCyan hover:text-black transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0e1a] border-b-2 border-retroCyan px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="text-[10px] font-mono text-retroYellow mb-2 pb-1 border-b border-slate-800 flex items-center justify-between">
            <span>// NAVIGATION TERMINAL</span>
            <span className="text-retroGreen">STATUS: ACTIVE</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-xs font-retro text-slate-200 hover:bg-retroCyan hover:text-black border border-transparent hover:border-black transition-all"
            >
              &gt; {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="retro-btn bg-black text-retroCyan border-2 border-retroCyan flex items-center justify-center gap-2 py-2 text-xs font-mono font-bold"
            >
              <Download className="w-4 h-4 text-retroPink" />
              <span>VIEW RESUME (PDF)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="retro-btn-pink bg-retroPink text-white flex items-center justify-center gap-2 py-2 text-xs font-display font-bold uppercase tracking-wider"
            >
              <span>TRANSMIT MESSAGE</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
