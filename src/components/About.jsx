import React from 'react';
import {
  Sparkles,
  Terminal,
  BarChart3,
  CalendarCheck,
  MailCheck,
  Cpu,
  Zap,
  Flame
} from 'lucide-react';
import { FigmaIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const pillars = [
    {
      icon: <MailCheck className="w-5 h-5 text-retroCyan" />,
      tag: "MODULE_01",
      border: "border-retroCyan",
      title: "Marketing Automation & Lead Capture",
      desc: "Integrating automated email workflows with Brevo API, designing friction-free contact funnels, and building status triage dashboards (New, To Do, Replied)."
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-retroYellow" />,
      tag: "MODULE_02",
      border: "border-retroYellow",
      title: "Data Analytics & Excel Reporting",
      desc: "Comfortable analyzing data and building reports with Excel formulas, Python (Pandas/Matplotlib), and PowerPoint."
    },
    {
      icon: <FigmaIcon className="w-5 h-5 text-retroPink" />,
      tag: "MODULE_03",
      border: "border-retroPink",
      title: "Figma UI/UX & Responsive Web Design",
      desc: "Creating wireframes, page layouts, and reusable components in Figma, presenting mockups directly to stakeholders, and turning them into production React/Tailwind interfaces."
    },
    {
      icon: <CalendarCheck className="w-5 h-5 text-retroGreen" />,
      tag: "MODULE_04",
      border: "border-retroGreen",
      title: "Cross-Functional Timeline Alignment",
      desc: "Maintaining organized task lists, implementation notes, and tracking milestones to ensure design, marketing, and engineering deliverables ship on schedule."
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-[#090d16] retro-dot-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black border-2 border-retroCyan text-retroCyan text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-[3px_3px_0px_#000]">
            <Sparkles className="w-3.5 h-3.5 text-retroPink" />
            <span>// PROFILE SPECS & MISSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white uppercase">
            BRIDGING MARKETING AUTOMATION, <span className="text-retroCyan retro-glow-cyan">DATA & WEB DESIGN</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-retroCyan via-retroPink to-retroYellow mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Story & MarTech Spec Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="retro-window p-6 sm:p-8 bg-[#0a0e19] border-2 border-retroCyan shadow-[6px_6px_0px_#000]">
              <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-slate-800">
                <h3 className="text-lg font-mono font-bold text-retroCyan flex items-center gap-2 uppercase">
                  <span>▶</span> OVERVIEW.TXT
                </h3>
                <span className="text-[11px] font-pixel text-retroPink">[LVL 8.2]</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-sans">
                I am a <span className="text-retroCyan font-semibold">Computer Science student</span> with hands-on experience building marketing-facing web systems: automated lead-notification workflows using the <span className="text-retroYellow font-semibold">Brevo Email API</span>, and an internal lead-tracking dashboard for a live commercial client website.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-sans mt-3">
                Comfortable with data analysis and reporting in <span className="text-retroGreen font-medium">Excel</span> and <span className="text-retroGreen font-medium">Python (Pandas, Matplotlib)</span>, presenting findings in PowerPoint, and translating Figma designs into responsive production web interfaces.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-sans mt-3">
                I keep rigorous track of tasks and deadlines to stay closely aligned with marketing, design, and development timelines.
              </p>
              
              <div className="pt-4 mt-4 border-t-2 border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-2 bg-black border border-slate-700">
                  <span className="text-slate-500 block text-[10px]">CORE:</span>
                  <span className="text-retroCyan font-bold">MarTech & Web</span>
                </div>
                <div className="p-2 bg-black border border-slate-700">
                  <span className="text-slate-500 block text-[10px]">AUTOMATION:</span>
                  <span className="text-retroYellow font-bold">Brevo API</span>
                </div>
                <div className="p-2 bg-black border border-slate-700">
                  <span className="text-slate-500 block text-[10px]">DESIGN:</span>
                  <span className="text-retroPink font-bold">Figma to Code</span>
                </div>
              </div>
            </div>

            {/* Retro Spec Terminal Window */}
            <div className="bg-[#050811] border-2 border-retroBorder overflow-hidden shadow-[6px_6px_0px_#000]">
              <div className="bg-black px-4 py-2 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-retroPink"></span>
                  <span className="w-2.5 h-2.5 bg-retroYellow"></span>
                  <span className="w-2.5 h-2.5 bg-retroGreen"></span>
                  <span className="text-xs font-mono text-slate-300 ml-2">
                    martech_workflow_spec.json
                  </span>
                </div>
                <span className="text-[10px] font-mono text-retroGreen">UTF-8 // JSON</span>
              </div>
              <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300">
                <div>&#123;</div>
                <div className="pl-4"><span className="text-retroPink">"candidate"</span>: <span className="text-retroYellow">"{personalInfo.name}"</span>,</div>
                <div className="pl-4"><span className="text-retroPink">"marketingAutomation"</span>: &#123;</div>
                <div className="pl-8"><span className="text-retroCyan">"emailEngine"</span>: <span className="text-retroYellow">"Brevo API (Instant Alert + Prospect Acknowledgment)"</span>,</div>
                <div className="pl-8"><span className="text-retroCyan">"leadDashboard"</span>: <span className="text-retroYellow">"Status triage dashboards (New, To Do, Replied)"</span>,</div>
                <div className="pl-8"><span className="text-retroCyan">"conversionFunnel"</span>: <span className="text-retroYellow">"contact-form design with no manual delay"</span></div>
                <div className="pl-4">&#125;,</div>
                <div className="pl-4"><span className="text-retroPink">"analyticsAndReporting"</span>: <span className="text-retroGreen">["Excel Formulas &amp; Reports", "Python Pandas/Matplotlib", "PowerPoint Decks"]</span>,</div>
                <div className="pl-4"><span className="text-retroPink">"designToExecution"</span>: <span className="text-retroGreen">"Figma wireframes &amp; reusable components to responsive React/Tailwind code"</span></div>
                <div>&#125;</div>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Core Modules */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-3.5">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className={`bg-[#0a0e19] p-4 sm:p-5 border-2 ${pillar.border} shadow-[4px_4px_0px_#000] hover:translate-x-1 transition-all group`}
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-black border border-slate-700 group-hover:border-retroCyan transition-colors flex-shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-sm sm:text-base font-display font-bold text-white group-hover:text-retroCyan transition-colors">
                        {pillar.title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-pixel text-retroYellow block mb-1">
                      [{pillar.tag}]
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
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
