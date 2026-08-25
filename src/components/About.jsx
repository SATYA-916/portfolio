import React from 'react';
import {
  Sparkles,
  Terminal,
  BarChart3,
  CalendarCheck,
  MailCheck,
  Cpu,
  Zap,
  Layers,
  Code
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { FigmaIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const { isRetro } = useTheme();

  const pillars = [
    {
      icon: <MailCheck className="w-5 h-5 text-teal-400" />,
      retroIcon: <MailCheck className="w-5 h-5 text-retroCyan" />,
      tag: "MODULE_01",
      border: "border-retroCyan",
      title: "Marketing Automation & Lead Capture",
      desc: "Integrating automated email workflows with Brevo API, designing friction-free contact funnels, and building status triage dashboards (New, To Do, Replied)."
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-amber-400" />,
      retroIcon: <BarChart3 className="w-5 h-5 text-retroYellow" />,
      tag: "MODULE_02",
      border: "border-retroYellow",
      title: "Data Analytics & Excel Reporting",
      desc: "Comfortable analyzing data and building reports with Excel formulas, Python (Pandas/Matplotlib), and PowerPoint."
    },
    {
      icon: <FigmaIcon className="w-5 h-5 text-fuchsia-400" />,
      retroIcon: <FigmaIcon className="w-5 h-5 text-retroPink" />,
      tag: "MODULE_03",
      border: "border-retroPink",
      title: "Figma UI/UX & Responsive Web Design",
      desc: "Creating wireframes, page layouts, and reusable components in Figma, presenting mockups directly to stakeholders, and turning them into production React/Tailwind interfaces."
    },
    {
      icon: <CalendarCheck className="w-5 h-5 text-emerald-400" />,
      retroIcon: <CalendarCheck className="w-5 h-5 text-retroGreen" />,
      tag: "MODULE_04",
      border: "border-retroGreen",
      title: "Cross-Functional Timeline Alignment",
      desc: "Maintaining organized task lists, implementation notes, and tracking milestones to ensure design, marketing, and engineering deliverables ship on schedule."
    }
  ];

  return (
    <section
      id="about"
      className={`py-24 relative ${isRetro ? 'bg-[#090d16] retro-dot-bg' : 'bg-[#090d16]'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div
            className={
              isRetro
                ? 'inline-flex items-center gap-2 px-3 py-1 bg-black border-2 border-retroCyan text-retroCyan text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-[3px_3px_0px_#000]'
                : 'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-mono font-medium mb-3'
            }
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>{isRetro ? '// PROFILE SPECS & MISSION' : 'Profile & Engineering Pillars'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase">
            BRIDGING MARKETING AUTOMATION,{' '}
            <span className={isRetro ? 'text-retroCyan retro-glow-cyan' : 'text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400'}>
              DATA &amp; WEB DESIGN
            </span>
          </h2>

          <div className={`w-24 h-1.5 mt-4 ${isRetro ? 'bg-gradient-to-r from-retroCyan via-retroPink to-retroYellow' : 'bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full'}`}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Story & Spec Window */}
          <div className="lg:col-span-7 space-y-6">
            <div
              className={
                isRetro
                  ? 'retro-window p-6 sm:p-8 bg-[#0a0e19] border-2 border-retroCyan shadow-[6px_6px_0px_#000]'
                  : 'modern-card p-6 sm:p-8 rounded-2xl'
              }
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <h3 className={`text-base sm:text-lg font-bold flex items-center gap-2 ${isRetro ? 'font-mono text-retroCyan uppercase' : 'text-white'}`}>
                  <span className="text-teal-400">▶</span> {isRetro ? 'OVERVIEW.TXT' : 'About Satya'}
                </h3>
                <span className={`text-xs font-mono ${isRetro ? 'font-pixel text-retroPink' : 'text-teal-400'}`}>
                  [CGPA 8.2]
                </span>
              </div>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-sans">
                I am a <span className="text-teal-300 font-semibold">Computer Science student</span> with hands-on experience building marketing-facing web systems: automated lead-notification workflows using the <span className="text-amber-300 font-semibold">Brevo Email API</span>, and an internal lead-tracking dashboard for a live commercial client website.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-sans mt-3">
                Comfortable with data analysis and reporting in <span className="text-emerald-400 font-medium">Excel</span> and <span className="text-emerald-400 font-medium">Python (Pandas, Matplotlib)</span>, presenting findings in PowerPoint, and translating Figma designs into responsive production web interfaces.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-sans mt-3">
                I keep rigorous track of tasks and deadlines to stay closely aligned with marketing, design, and development timelines.
              </p>
              
              <div className="pt-4 mt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className={`p-2.5 rounded-lg border ${isRetro ? 'bg-black border-slate-700' : 'bg-slate-900/60 border-slate-800'}`}>
                  <span className="text-slate-500 block text-[10px] uppercase">Core:</span>
                  <span className="text-teal-400 font-bold">MarTech &amp; Web</span>
                </div>
                <div className={`p-2.5 rounded-lg border ${isRetro ? 'bg-black border-slate-700' : 'bg-slate-900/60 border-slate-800'}`}>
                  <span className="text-slate-500 block text-[10px] uppercase">Automation:</span>
                  <span className="text-amber-400 font-bold">Brevo API</span>
                </div>
                <div className={`p-2.5 rounded-lg border ${isRetro ? 'bg-black border-slate-700' : 'bg-slate-900/60 border-slate-800'}`}>
                  <span className="text-slate-500 block text-[10px] uppercase">Design:</span>
                  <span className="text-fuchsia-400 font-bold">Figma to Code</span>
                </div>
              </div>
            </div>

            {/* Spec Window */}
            <div className={`overflow-hidden border ${isRetro ? 'bg-[#050811] border-2 border-retroBorder shadow-[6px_6px_0px_#000]' : 'bg-slate-950/80 rounded-2xl border-slate-800/90 shadow-xl'}`}>
              <div className={`px-4 py-2.5 flex items-center justify-between border-b ${isRetro ? 'bg-black border-slate-800' : 'bg-slate-900/80 border-slate-800'}`}>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  <span className="text-xs font-mono text-slate-300 ml-2">
                    martech_workflow_spec.json
                  </span>
                </div>
                <span className="text-[11px] font-mono text-teal-400">UTF-8 // JSON</span>
              </div>
              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300">
                <div>&#123;</div>
                <div className="pl-4"><span className="text-fuchsia-400">"candidate"</span>: <span className="text-amber-300">"{personalInfo.name}"</span>,</div>
                <div className="pl-4"><span className="text-fuchsia-400">"marketingAutomation"</span>: &#123;</div>
                <div className="pl-8"><span className="text-cyan-300">"emailEngine"</span>: <span className="text-amber-300">"Brevo API (Instant Alert + Prospect Acknowledgment)"</span>,</div>
                <div className="pl-8"><span className="text-cyan-300">"leadDashboard"</span>: <span className="text-amber-300">"Status triage dashboards (New, To Do, Replied)"</span>,</div>
                <div className="pl-8"><span className="text-cyan-300">"conversionFunnel"</span>: <span className="text-amber-300">"contact-form design with no manual delay"</span></div>
                <div className="pl-4">&#125;,</div>
                <div className="pl-4"><span className="text-fuchsia-400">"analyticsAndReporting"</span>: <span className="text-emerald-400">["Excel Formulas &amp; Reports", "Python Pandas/Matplotlib", "PowerPoint Decks"]</span>,</div>
                <div className="pl-4"><span className="text-fuchsia-400">"designToExecution"</span>: <span className="text-emerald-400">"Figma wireframes &amp; reusable components to responsive React/Tailwind code"</span></div>
                <div>&#125;</div>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Core Modules / Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className={
                  isRetro
                    ? `bg-[#0a0e19] p-4 sm:p-5 border-2 ${pillar.border} shadow-[4px_4px_0px_#000] hover:translate-x-1 transition-all group`
                    : 'modern-card p-5 rounded-xl group hover:border-teal-500/40 transition-all'
                }
              >
                <div className="flex items-start gap-4">
                  <div
                    className={
                      isRetro
                        ? 'p-2.5 bg-black border border-slate-700 group-hover:border-retroCyan transition-colors flex-shrink-0'
                        : 'p-3 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:border-teal-500/50 transition-colors flex-shrink-0'
                    }
                  >
                    {isRetro ? pillar.retroIcon : pillar.icon}
                  </div>
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                        {pillar.title}
                      </h4>
                    </div>
                    <span className={`text-[10px] font-mono block mb-1.5 ${isRetro ? 'font-pixel text-retroYellow' : 'text-teal-400'}`}>
                      [{pillar.tag}]
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
