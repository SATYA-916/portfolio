import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Sparkles, ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
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
          ? 'bg-[#090d16]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 p-[1.5px] transition-transform group-hover:scale-105 shadow-md shadow-teal-500/20">
              <div className="w-full h-full bg-[#0b1120] rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-lg bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                  SK
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-100 text-sm tracking-wide group-hover:text-teal-400 transition-colors">
                Satya Sampath
              </span>
              <span className="text-[11px] font-mono text-teal-400/80 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-teal-400 hover:bg-slate-800 transition-all hover:-translate-y-0.5"
            >
              <Download className="w-3.5 h-3.5 text-teal-400" />
              <span>Resume</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 hover:from-teal-400 hover:to-cyan-400 transition-all shadow-md shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0c1322] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-teal-500/10 hover:text-teal-400 transition-colors"
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
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold rounded-lg bg-slate-900 border border-slate-700 text-slate-200"
            >
              <Download className="w-4 h-4 text-teal-400" />
              <span>View Resume (PDF)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950"
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
