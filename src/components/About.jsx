import React from 'react';
import {
  Sparkles,
  CheckCircle2,
  Terminal,
  Layers,
  Zap,
  TrendingUp,
  Search,
  LayoutTemplate
} from 'lucide-react';
import { FigmaIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const pillars = [
    {
      icon: <FigmaIcon className="w-5 h-5 text-purple-400" />,
      title: "Figma UI/UX & Design Systems",
      desc: "Creating modular Figma wireframes, component libraries, design token hierarchies, and interactive prototypes for stakeholder review before development."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-teal-400" />,
      title: "Web Experience & Lead Conversion",
      desc: "Enhancing user flows to optimize lead capture, reduce friction, design intuitive admin triage states (New, To Do, Replied), and improve customer delight."
    },
    {
      icon: <LayoutTemplate className="w-5 h-5 text-cyan-400" />,
      title: "Design-to-Engineering Handoff",
      desc: "Translating approved Figma mockups 1:1 into responsive, production-grade React and Tailwind CSS UI with cross-browser compatibility and asset optimization."
    },
    {
      icon: <Search className="w-5 h-5 text-amber-400" />,
      title: "UX Research & Usability Strategy",
      desc: "Analyzing user mental models, storyboarding interactions, refining UX copywriting, and structuring clear information architectures."
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Design & Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Designing with Empathy, <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Building for Impact</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Story & Design Spec Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                Product Design & Web Experience Focus
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a <span className="text-teal-300 font-semibold">Computer Science Engineering</span> student who designs and builds end-to-end web experiences — from initial user research and Figma wireframes to responsive, customer-facing production UI.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I recently designed and launched a full client website redesign for <span className="text-teal-300 font-semibold">SLS Structo-Mech</span>, presenting mockups directly to stakeholders in Figma, incorporating feedback, and building the approved design with responsive React/Tailwind UI and an optimized lead capture funnel.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Because I write code as fluently as I design in Figma, I bring a unique advantage to cross-functional teams: <span className="text-cyan-300 font-medium">zero-friction design-to-engineering handoff</span>, realistic interaction prototyping, and proactive cross-browser QA.
              </p>
              
              <div className="pt-2 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block">Primary Tools:</span>
                  <span className="text-slate-200 font-medium">Figma, React, Tailwind</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Focus:</span>
                  <span className="text-slate-200 font-medium">Web Product Design & UX</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Degree:</span>
                  <span className="text-slate-200 font-medium">B.Tech CSE (GITAM)</span>
                </div>
              </div>
            </div>

            {/* Interactive Design System Spec Window */}
            <div className="rounded-2xl bg-[#0d1424] border border-slate-800/90 overflow-hidden shadow-2xl">
              <div className="bg-[#0a0f1d] px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-purple-400" />
                  <span>product_design_spec.json</span>
                </div>
                <div className="w-10"></div>
              </div>
              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300">
                <div>&#123;</div>
                <div className="pl-4"><span className="text-purple-400">"designer"</span>: <span className="text-amber-300">"{personalInfo.name}"</span>,</div>
                <div className="pl-4"><span className="text-purple-400">"designWorkflow"</span>: [</div>
                <div className="pl-8"><span className="text-cyan-300">"User Research & Competitor Benchmarking"</span>,</div>
                <div className="pl-8"><span className="text-cyan-300">"Figma Low/High-Fidelity Wireframing"</span>,</div>
                <div className="pl-8"><span className="text-cyan-300">"Interactive Clickable Prototypes & Client Review"</span>,</div>
                <div className="pl-8"><span className="text-cyan-300">"Design Token Systems & Component Libraries"</span>,</div>
                <div className="pl-8"><span className="text-cyan-300">"Pixel-Perfect Responsive Frontend & Cross-Browser QA"</span></div>
                <div className="pl-4">],</div>
                <div className="pl-4"><span className="text-purple-400">"conversionFocus"</span>: <span className="text-emerald-400">"Lead capture funnels, friction reduction & triage dashboards"</span>,</div>
                <div className="pl-4"><span className="text-purple-400">"designToCodeHandoff"</span>: <span className="text-emerald-400">"Seamless & 100% fidelity"</span></div>
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
