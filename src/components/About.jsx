import React from 'react';
import {
  Sparkles,
  CheckCircle2,
  Terminal,
  Layers,
  Zap,
  TrendingUp,
  BarChart3,
  CalendarCheck,
  LayoutTemplate,
  MailCheck
} from 'lucide-react';
import { FigmaIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const pillars = [
    {
      icon: <MailCheck className="w-5 h-5 text-teal-400" />,
      title: "Marketing Automation & Lead Capture",
      desc: "Architecting automated email workflows with Brevo API, designing friction-free contact funnels, and building status triage dashboards (New, To Do, Replied)."
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-cyan-400" />,
      title: "Data Analytics & Excel Reporting",
      desc: "Analyzing user inquiry data, building structured reports with Excel formulas, and writing Python (Pandas/Matplotlib) data pipelines to present findings in PowerPoint."
    },
    {
      icon: <FigmaIcon className="w-5 h-5 text-purple-400" />,
      title: "Figma UI/UX & Responsive Web Design",
      desc: "Creating wireframes, page layouts, and reusable components in Figma, presenting mockups directly to stakeholders, and turning them into production React/Tailwind interfaces."
    },
    {
      icon: <CalendarCheck className="w-5 h-5 text-amber-400" />,
      title: "Cross-Functional Timeline Alignment",
      desc: "Maintaining organized task lists, implementation notes, and tracking milestones to ensure design, marketing, and engineering deliverables ship on schedule."
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Value Proposition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Bridging Marketing Automation, <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Data & Web Design</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Story & MarTech Spec Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                Marketing Technology & Web Systems
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a <span className="text-teal-300 font-semibold">Computer Science student</span> with hands-on experience building marketing-facing web systems: automated lead-notification workflows using the <span className="text-teal-300 font-semibold">Brevo Email API</span>, and an internal lead-tracking dashboard for a live commercial client website.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Comfortable with data analysis and reporting in <span className="text-cyan-300 font-medium">Excel</span> and <span className="text-cyan-300 font-medium">Python (Pandas, Matplotlib)</span>, presenting findings in PowerPoint, and translating Figma designs into responsive production web interfaces.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I keep rigorous track of tasks and deadlines to stay closely aligned with marketing, design, and development timelines.
              </p>
              
              <div className="pt-2 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block">Core Focus:</span>
                  <span className="text-slate-200 font-medium">MarTech & Web Experience</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Automation:</span>
                  <span className="text-slate-200 font-medium">Brevo API Workflows</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Analytics & Design:</span>
                  <span className="text-slate-200 font-medium">Excel, Python, Figma</span>
                </div>
              </div>
            </div>

            {/* Interactive Spec Window */}
            <div className="rounded-2xl bg-[#0d1424] border border-slate-800/90 overflow-hidden shadow-2xl">
              <div className="bg-[#0a0f1d] px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-teal-400" />
                  <span>martech_workflow_spec.json</span>
                </div>
                <div className="w-10"></div>
              </div>
              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300">
                <div>&#123;</div>
                <div className="pl-4"><span className="text-purple-400">"candidate"</span>: <span className="text-amber-300">"{personalInfo.name}"</span>,</div>
                <div className="pl-4"><span className="text-purple-400">"marketingAutomation"</span>: &#123;</div>
                <div className="pl-8"><span className="text-cyan-300">"emailEngine"</span>: <span className="text-amber-300">"Brevo API (Instant Alert + Prospect Acknowledgment)"</span>,</div>
                <div className="pl-8"><span className="text-cyan-300">"leadDashboard"</span>: <span className="text-amber-300">"Real-time status triage (New, To Do, Replied)"</span>,</div>
                <div className="pl-8"><span className="text-cyan-300">"conversionFunnel"</span>: <span className="text-amber-300">"High-converting contact-form design with zero manual delay"</span></div>
                <div className="pl-4">&#125;,</div>
                <div className="pl-4"><span className="text-purple-400">"analyticsAndReporting"</span>: <span className="text-emerald-400">["Excel Formulas & Reports", "Python Pandas/Matplotlib", "PowerPoint Decks"]</span>,</div>
                <div className="pl-4"><span className="text-purple-400">"designToExecution"</span>: <span className="text-emerald-400">"Figma wireframes &amp; component tokens to 100% responsive React/Tailwind code"</span></div>
                <div>&#125;</div>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Core Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover p-5 rounded-2xl border border-slate-800/80 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-teal-500/40 group-hover:bg-teal-500/10 transition-all flex-shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white group-hover:text-teal-300 transition-colors mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
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
