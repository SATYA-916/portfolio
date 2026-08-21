import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  MessageSquare
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
    // Open user's default email client prefilled
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formState.subject || `Portfolio Inquiry from ${formState.name}`
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
    <section id="contact" className="py-20 relative bg-[#0b101d] bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Let's Build Something <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">Extraordinary</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2 text-center">
            Interested in full stack development, AI automation, or exploring an opportunity? Reach out anytime!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Feel free to contact me via email or connect on LinkedIn and GitHub. I respond quickly.
              </p>

              {/* Email item */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] text-slate-400 block">Email Address</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-medium text-slate-200 hover:text-teal-300 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Resume item */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 flex-shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Curriculum Vitae</span>
                    <span className="text-xs sm:text-sm font-medium text-slate-200">
                      Satya Sampath Kumar.pdf
                    </span>
                  </div>
                </div>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-300 hover:bg-teal-500/20 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>View</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Location item */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Location</span>
                  <span className="text-xs sm:text-sm font-medium text-slate-200">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Social connect bar */}
              <div className="pt-2 border-t border-slate-800">
                <span className="text-xs text-slate-400 block mb-3 font-medium">Connect on Socials</span>
                <div className="flex items-center gap-2.5">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-[#0a66c2] hover:border-[#0a66c2]/40 transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.socials.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
                  >
                    <LeetCodeIcon className="w-3.5 h-3.5" />
                    <span>LeetCode</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                Fill in the form below and it will compose your email directly.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                  <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Opening Email Client!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. Your default email app will send the message directly to {personalInfo.email}.
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
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:outline-none focus:border-teal-400 transition-colors placeholder:text-slate-500"
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
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:outline-none focus:border-teal-400 transition-colors placeholder:text-slate-500"
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
                      placeholder="Project collaboration / Internship inquiry"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:outline-none focus:border-teal-400 transition-colors placeholder:text-slate-500"
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
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:outline-none focus:border-teal-400 transition-colors placeholder:text-slate-500 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold text-sm hover:from-teal-400 hover:to-cyan-400 transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
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
