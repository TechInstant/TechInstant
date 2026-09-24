import React from 'react';
import { 
  Heart, Users, Target, CheckCircle2, Code2
} from '../icons';

interface AboutPageProps {
  onOpenContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenContact }) => {
  const milestones = [
    {
      year: 'Phase 1',
      title: 'Foundation & Ecosystem Inception',
      desc: 'TechInstant was founded with a unified conviction: build enduring software products and AI systems that solve genuine everyday problems for real humans.'
    },
    {
      year: 'Phase 2',
      title: 'Flagship Product Launch: TwoCan',
      desc: 'Engineered and launched TwoCan, the premier couples communication & money alignment platform, impacting thousands of relationships globally.'
    },
    {
      year: 'Phase 3',
      title: 'Enterprise AI & SaaS Expansion',
      desc: 'Rolled out intelligent enterprise automation engines, custom document intelligence pipelines, and high-velocity SaaS toolkits.'
    },
    {
      year: 'Phase 4',
      title: 'Global Scale & Ecosystem Growth',
      desc: 'Scaling cloud architectures to support international organizations, non-profits, and startups building next-generation technology.'
    }
  ];

  const values = [
    {
      title: 'Built for Real Problems',
      desc: 'We reject vanity metrics and superficial hype. Every line of code, UX interaction, and AI model we deploy must deliver tangible utility.',
      icon: <Target className="w-5 h-5 text-emerald-500" />
    },
    {
      title: 'Engineering Rigor',
      desc: 'We treat code quality, type safety, test coverage, and latency as non-negotiable fundamentals of sustainable software development.',
      icon: <Code2 className="w-5 h-5 text-blue-500" />
    },
    {
      title: 'Human Empathy',
      desc: 'Whether designing for couples syncing their budgets on TwoCan or an executive auditing financial data, humans come first.',
      icon: <Heart className="w-5 h-5 text-rose-500" />
    },
    {
      title: 'Long-Term Partnership',
      desc: 'We are builders who stand behind what we ship. We cultivate enduring relationships with our clients, founders, and users.',
      icon: <Users className="w-5 h-5 text-purple-500" />
    }
  ];

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          Our Story & Philosophy
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-slate-900 dark:text-white leading-tight">
          To build technology that makes people and organizations more capable.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
          TechInstant is a modern technology company designing, building, and scaling software products, applied AI systems, and digital solutions for the global stage.
        </p>
      </div>

      {/* Mission & Who We Are Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Who We Are
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
            Builders at Heart. Pragmatists in Execution.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            We started TechInstant because we saw a persistent disconnect in the technology ecosystem: companies were either building overly complex enterprise software that required months of training, or churning out superficial toys that failed under real-world conditions.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            TechInstant bridges that gap. We combine deep architectural excellence with human-centered product craft to build technology that works cleanly, swiftly, and reliably.
          </p>
        </div>

        {/* Philosophy Points */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
            Our Technology Philosophy
          </h3>
          <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>AI as Leverage:</strong> AI is not an end in itself; it is a force multiplier for human clarity and productivity.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>End-to-End Ownership:</strong> From initial wireframe to cloud observability and security, we oversee the full lifecycle.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Speed with Quality:</strong> We iterate rapidly without compromising security, accessibility, or architecture.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            What Guides Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition-all hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white font-heading">
                  {v.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Milestones / Evolution Timeline */}
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-[#0A111D] border border-slate-200 dark:border-slate-800">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Evolution
          </span>
          <h2 className="text-3xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
            The TechInstant Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative">
              <span className="text-xs font-mono font-bold text-emerald-500 block mb-2">{m.year}</span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-2">{m.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="p-10 rounded-3xl bg-slate-900 text-white text-center space-y-4 max-w-3xl mx-auto border border-slate-800">
        <h3 className="text-2xl sm:text-3xl font-bold font-heading">Let&apos;s Build Something Meaningful</h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
          Whether you need a custom software system or want to partner on a product, we&apos;d love to connect.
        </p>
        <div className="pt-2">
          <button
            onClick={onOpenContact}
            className="px-7 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition shadow-lg shadow-emerald-500/20"
          >
            Start a Conversation
          </button>
        </div>
      </div>

    </div>
  );
};
