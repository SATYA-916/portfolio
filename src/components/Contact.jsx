import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  Copy,
  Check,
  ExternalLink,
  Radio,
  Sparkles,
  Terminal,
  MessageSquare
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const { isRetro } = useTheme();
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Hi Satya,\n\n${formState.message}\n\nFrom:\n${formState.name}\n${formState.email}`
    )}`;
    window.location.href = mailtoUrl;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className={`py-24 relative ${isRetro ? 'bg-[#0b0f19] retro-grid-bg' : 'bg-[#080c14]'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div
            className={
              isRetro
                ? 'inline-flex items-center gap-2 px-3.5 py-1 bg-black border-2 border-retroCyan text-retroCyan text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-[3px_3px_0px_#000]'
                : 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-mono font-medium mb-3'
            }
          >
            {isRetro ? <Radio className="w-3.5 h-3.5 text-retroPink animate-pulse" /> : <MessageSquare className="w-3.5 h-3.5 text-teal-400" />}
            <span>{isRetro ? '// COMMS LINK & TRANSMISSION' : 'Get in Touch'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase">
            LET'S CONNECT &amp;{' '}
            <span className={isRetro ? 'text-retroCyan retro-glow-cyan' : 'text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400'}>
              COLLABORATE
            </span>
          </h2>

          <p className="text-slate-400 text-sm max-w-xl mt-3 text-center font-sans">
            Interested in marketing automation, data analytics, web product design, or full-stack engineering? Connect directly.
          </p>

          <div className={`w-24 h-1.5 mt-4 ${isRetro ? 'bg-gradient-to-r from-retroCyan via-retroPink to-retroYellow' : 'bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full'}`}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div
              className={
                isRetro
                  ? 'bg-[#0a0e19] p-6 sm:p-7 border-2 border-retroCyan shadow-[6px_6px_0px_#000] space-y-5'
                  : 'modern-card p-6 sm:p-8 rounded-2xl space-y-5'
              }
            >
              <div className="pb-3 border-b border-slate-800 flex items-center justify-between">
                <h3 className="text-sm font-bold text-white uppercase flex items-center gap-2">
                  <span className="text-teal-400">▶</span> {isRetro ? 'COMMS_SPECS.DAT' : 'Contact Information'}
                </h3>
                <span className={`text-xs font-mono ${isRetro ? 'font-pixel text-retroGreen' : 'text-emerald-400'}`}>
                  [24HR Reply]
                </span>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                Feel free to send a direct message, copy my email, or connect via GitHub and LinkedIn.
              </p>

              {/* Email item */}
              <div className={`flex items-center justify-between p-3.5 rounded-xl border ${isRetro ? 'bg-black border-slate-800 hover:border-retroCyan' : 'bg-slate-900/80 border-slate-800 hover:border-teal-500/40'} transition-colors`}>
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className={`p-2 rounded-lg ${isRetro ? 'bg-[#0a0e19] text-retroCyan border border-slate-700' : 'bg-teal-500/10 text-teal-400 border border-teal-500/20'} flex-shrink-0`}>
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden font-mono">
                    <span className="text-[10px] text-slate-500 block uppercase">Email</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs font-bold text-slate-200 hover:text-teal-300 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-teal-400 transition-colors flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Resume item */}
              <div className={`flex items-center justify-between p-3.5 rounded-xl border ${isRetro ? 'bg-black border-slate-800 hover:border-retroPink' : 'bg-slate-900/80 border-slate-800 hover:border-teal-500/40'} transition-colors`}>
                <div className="flex items-center gap-3 font-mono">
                  <div className={`p-2 rounded-lg ${isRetro ? 'bg-[#0a0e19] text-retroPink border border-slate-700' : 'bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20'} flex-shrink-0`}>
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">Resume</span>
                    <span className="text-xs font-bold text-slate-200">
                      Satya Sampath Kumar.pdf
                    </span>
                  </div>
                </div>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    isRetro
                      ? 'px-2.5 py-1 bg-black border border-retroPink text-retroPink hover:bg-retroPink hover:text-white text-[11px] font-mono font-bold flex items-center gap-1 transition-colors'
                      : 'px-3 py-1.5 bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-teal-400 rounded-lg text-xs font-mono font-medium flex items-center gap-1 transition-colors'
                  }
                >
                  <span>View</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Location item */}
              <div className={`flex items-center gap-3 p-3.5 rounded-xl border ${isRetro ? 'bg-black border-slate-800' : 'bg-slate-900/80 border-slate-800'} font-mono`}>
                <div className={`p-2 rounded-lg ${isRetro ? 'bg-[#0a0e19] text-retroYellow border border-slate-700' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'} flex-shrink-0`}>
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase">Location</span>
                  <span className="text-xs font-bold text-slate-200">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Social connect bar */}
              <div className="pt-2 border-t border-slate-800">
                <span className="text-xs font-mono text-slate-400 block mb-3 font-semibold">
                  Channels &amp; Profiles
                </span>
                <div className="flex items-center gap-2 font-mono">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-2 rounded-lg bg-slate-900 border border-slate-800 text-center text-xs font-bold text-slate-300 hover:text-teal-300 hover:border-teal-500/40 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-2 rounded-lg bg-slate-900 border border-slate-800 text-center text-xs font-bold text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={personalInfo.socials.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-2 rounded-lg bg-slate-900 border border-slate-800 text-center text-xs font-bold text-slate-300 hover:text-amber-300 hover:border-amber-500/40 transition-colors"
                  >
                    LeetCode
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div
              className={
                isRetro
                  ? 'bg-[#0a0e19] p-6 sm:p-8 border-2 border-retroCyan shadow-[6px_6px_0px_#000]'
                  : 'modern-card p-6 sm:p-8 rounded-2xl'
              }
            >
              <div className="pb-3 mb-6 border-b border-slate-800 flex items-center justify-between">
                <h3 className="text-sm font-bold text-white uppercase flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-teal-400" />
                  <span>{isRetro ? 'TRANSMIT_PACKET.EXE' : 'Send a Message'}</span>
                </h3>
                <span className="text-xs font-mono text-slate-400">// Direct Dispatch</span>
              </div>

              {isSubmitted ? (
                <div className={`p-6 text-center space-y-2 rounded-xl border ${isRetro ? 'bg-black border-2 border-retroGreen' : 'bg-emerald-500/10 border border-emerald-500/30'}`}>
                  <Check className="w-8 h-8 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-sm font-bold text-white uppercase">[MESSAGE DISPATCHED]</h4>
                  <p className="text-xs text-slate-300 font-sans">
                    Your default email client has been opened to send this message directly to {personalInfo.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl text-xs text-white placeholder:text-slate-600 focus:outline-none transition-colors ${
                          isRetro
                            ? 'bg-black border-2 border-slate-700 focus:border-retroCyan font-mono'
                            : 'bg-slate-900/90 border border-slate-800 focus:border-teal-500'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl text-xs text-white placeholder:text-slate-600 focus:outline-none transition-colors ${
                          isRetro
                            ? 'bg-black border-2 border-slate-700 focus:border-retroCyan font-mono'
                            : 'bg-slate-900/90 border border-slate-800 focus:border-teal-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="MarTech Collaboration / Web Internship"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs text-white placeholder:text-slate-600 focus:outline-none transition-colors ${
                        isRetro
                          ? 'bg-black border-2 border-slate-700 focus:border-retroCyan font-mono'
                          : 'bg-slate-900/90 border border-slate-800 focus:border-teal-500'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Hi Satya, I would like to discuss..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs text-white placeholder:text-slate-600 focus:outline-none transition-colors resize-none ${
                        isRetro
                          ? 'bg-black border-2 border-slate-700 focus:border-retroCyan font-mono'
                          : 'bg-slate-900/90 border border-slate-800 focus:border-teal-500'
                      }`}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={
                      isRetro
                        ? 'w-full retro-btn bg-retroCyan text-black py-2.5 px-6 text-xs font-display font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-cyan-300 shadow-retro-cyan'
                        : 'w-full py-3 px-6 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:from-teal-400 hover:to-cyan-400 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/35 transition-all'
                    }
                  >
                    <Send className="w-4 h-4" />
                    <span>{isRetro ? '[ TRANSMIT MESSAGE ]' : 'Send Message'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
