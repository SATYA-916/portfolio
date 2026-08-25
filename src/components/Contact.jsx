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
  Terminal
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
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
    <section id="contact" className="py-20 relative bg-[#0b0f19] retro-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black border-2 border-retroCyan text-retroCyan text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-[3px_3px_0px_#000]">
            <Radio className="w-3.5 h-3.5 text-retroPink animate-pulse" />
            <span>// COMMS LINK & TRANSMISSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white uppercase">
            LET'S TRANSMIT & <span className="text-retroCyan retro-glow-cyan">BUILD SYSTEMS</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2 text-center font-sans">
            Interested in marketing automation, data analytics, web product design, or full-stack engineering? Connect directly.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-retroCyan via-retroPink to-retroYellow mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0a0e19] p-6 sm:p-7 border-2 border-retroCyan shadow-[6px_6px_0px_#000] space-y-5">
              
              <div className="pb-3 border-b-2 border-slate-800 flex items-center justify-between">
                <h3 className="text-sm font-mono font-bold text-retroCyan uppercase flex items-center gap-2">
                  <span>▶</span> COMMS_SPECS.DAT
                </h3>
                <span className="text-[10px] font-pixel text-retroGreen">[24HR ACK]</span>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                Feel free to transmit a direct message, copy my email, or connect via GitHub and LinkedIn.
              </p>

              {/* Email item */}
              <div className="flex items-center justify-between p-3 bg-black border-2 border-slate-800 hover:border-retroCyan transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-1.5 bg-[#0a0e19] text-retroCyan border border-slate-700 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden font-mono">
                    <span className="text-[9px] text-slate-500 block uppercase">FREQUENCY / EMAIL</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs font-bold text-slate-200 hover:text-retroCyan transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-retroCyan transition-colors flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-retroGreen" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Resume item */}
              <div className="flex items-center justify-between p-3 bg-black border-2 border-slate-800 hover:border-retroPink transition-colors">
                <div className="flex items-center gap-3 font-mono">
                  <div className="p-1.5 bg-[#0a0e19] text-retroPink border border-slate-700 flex-shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-500 block uppercase">ATTACHMENT</span>
                    <span className="text-xs font-bold text-slate-200">
                      Satya Sampath Kumar.pdf
                    </span>
                  </div>
                </div>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-black border border-retroPink text-retroPink hover:bg-retroPink hover:text-white text-[11px] font-mono font-bold flex items-center gap-1 transition-colors"
                >
                  <span>[VIEW]</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Location item */}
              <div className="flex items-center gap-3 p-3 bg-black border-2 border-slate-800 font-mono">
                <div className="p-1.5 bg-[#0a0e19] text-retroYellow border border-slate-700 flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-500 block uppercase">STATION LOCATION</span>
                  <span className="text-xs font-bold text-slate-200">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Social connect bar */}
              <div className="pt-2 border-t-2 border-slate-800">
                <span className="text-[10px] font-mono text-retroYellow block mb-2 font-bold uppercase">
                  // CHANNELS & PROFILES
                </span>
                <div className="flex items-center gap-2 font-mono">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 px-2 bg-black border border-slate-700 text-center text-xs font-bold text-slate-300 hover:text-retroCyan hover:border-retroCyan transition-colors"
                  >
                    GITHUB
                  </a>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 px-2 bg-black border border-slate-700 text-center text-xs font-bold text-slate-300 hover:text-retroPink hover:border-retroPink transition-colors"
                  >
                    LINKEDIN
                  </a>
                  <a
                    href={personalInfo.socials.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 px-2 bg-black border border-slate-700 text-center text-xs font-bold text-slate-300 hover:text-retroYellow hover:border-retroYellow transition-colors"
                  >
                    LEETCODE
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Direct Transmission Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0a0e19] p-6 sm:p-8 border-2 border-retroCyan shadow-[6px_6px_0px_#000]">
              
              <div className="pb-3 mb-6 border-b-2 border-slate-800 flex items-center justify-between">
                <h3 className="text-sm font-mono font-bold text-retroCyan uppercase flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-retroPink" />
                  <span>TRANSMIT_PACKET.EXE</span>
                </h3>
                <span className="text-[10px] font-mono text-slate-400">// READY TO ENCODE</span>
              </div>

              {isSubmitted ? (
                <div className="p-6 bg-black border-2 border-retroGreen text-center space-y-2 font-mono">
                  <Check className="w-8 h-8 text-retroGreen mx-auto animate-bounce" />
                  <h4 className="text-sm font-bold text-white uppercase">[TRANSMISSION DISPATCHED]</h4>
                  <p className="text-xs text-slate-300 font-sans">
                    Your default email client has been opened to send this packet directly to {personalInfo.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1 uppercase">
                        SENDER NAME:
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3.5 py-2 bg-black border-2 border-slate-700 text-white text-xs focus:outline-none focus:border-retroCyan transition-colors placeholder:text-slate-600 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1 uppercase">
                        RETURN EMAIL:
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-3.5 py-2 bg-black border-2 border-slate-700 text-white text-xs focus:outline-none focus:border-retroCyan transition-colors placeholder:text-slate-600 font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1 uppercase">
                      SUBJECT / TOPIC:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="MarTech Collaboration / Web Internship"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-3.5 py-2 bg-black border-2 border-slate-700 text-white text-xs focus:outline-none focus:border-retroCyan transition-colors placeholder:text-slate-600 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1 uppercase">
                      MESSAGE PACKET:
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Hi Satya, I would like to discuss..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2 bg-black border-2 border-slate-700 text-white text-xs focus:outline-none focus:border-retroCyan transition-colors placeholder:text-slate-600 font-mono resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full retro-btn bg-retroCyan text-black py-2.5 px-6 text-xs font-display font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-cyan-300 shadow-retro-cyan"
                  >
                    <Send className="w-4 h-4" />
                    <span>[ TRANSMIT MESSAGE ]</span>
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
