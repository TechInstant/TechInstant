import React from 'react';
import { 
  Bot, Database, CheckCircle2, ShieldCheck, 
  ArrowRight, FileText, Cpu, MessageSquare, Network 
} from '../icons';
import { AIWorkflowVisual } from '../AIWorkflowVisual';

interface AIServicesPageProps {
  onOpenContact: (projectType?: string) => void;
}

export const AIServicesPage: React.FC<AIServicesPageProps> = ({ onOpenContact }) => {
  const capabilities = [
    {
      title: 'Autonomous AI Assistants',
      desc: 'Purpose-built assistants trained on your internal documentation, standard operating procedures, and product specs to assist staff and customers.',
      icon: <Bot className="w-6 h-6 text-emerald-400" />,
      features: ['Contextual Memory', 'Tool Calling', 'Zero Hallucination Guardrails']
    },
    {
      title: 'Enterprise RAG & Knowledge Systems',
      desc: 'Index millions of company documents, contracts, and Slack threads with hybrid vector search so teams get instant, sourced answers.',
      icon: <Database className="w-6 h-6 text-purple-400" />,
      features: ['SOC-2 Data Isolation', 'Real-Time Sync', 'Source Citation']
    },
    {
      title: 'Document Intelligence & Extraction',
      desc: 'Automate invoice processing, compliance checks, contract analysis, and medical or financial document classification in seconds.',
      icon: <FileText className="w-6 h-6 text-blue-400" />,
      features: ['99.4% Parsing Accuracy', 'Tables & Multi-Page OCR', 'Schema Output']
    },
    {
      title: 'Multi-Agent Workflow Orchestration',
      desc: 'Deploy collaborative agent swarms where specialized agents research, draft, review, and execute complex business tasks autonomously.',
      icon: <Network className="w-6 h-6 text-amber-400" />,
      features: ['Human-in-the-loop', 'Deterministic Failovers', 'Audit Logging']
    },
    {
      title: 'Intelligent Customer Support AI',
      desc: 'Resolve 70%+ of customer inquiries instantly across web chat, WhatsApp, and email with natural, empathetic, and accurate responses.',
      icon: <MessageSquare className="w-6 h-6 text-cyan-400" />,
      features: ['Omnichannel Support', 'Smart Human Escalation', 'Sentiment Analysis']
    },
    {
      title: 'Predictive & Custom Fine-Tuned Models',
      desc: 'Fine-tune open-weight or proprietary models on your proprietary datasets to build unbeatable competitive moats.',
      icon: <Cpu className="w-6 h-6 text-rose-400" />,
      features: ['LoRA & QLoRA Tuning', 'On-Premise Deployment', 'High Throughput']
    }
  ];

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          Practical Applied Intelligence
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-slate-900 dark:text-white mt-3">
          AI That Works for Your Business
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
          We help organizations move from AI experimentation to practical, production-grade systems that create measurable value and immediate operational leverage.
        </p>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onOpenContact('AI Solution')}
            className="px-7 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm sm:text-base flex items-center gap-2 transition shadow-lg shadow-emerald-500/20"
          >
            <span>Start an AI Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#architecture"
            className="px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition"
          >
            Explore AI Architecture
          </a>
        </div>
      </div>

      {/* Interactive AI Workflow visual */}
      <div id="architecture">
        <AIWorkflowVisual />
      </div>

      {/* Capabilities Grid */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Core Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
            Enterprise AI Capabilities
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Engineered with strict data privacy, enterprise SLA uptime, and reproducible outputs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition-all hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-4">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {cap.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 mt-6 space-y-1.5">
                {cap.features.map((f, fi) => (
                  <div key={fi} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security & Data Privacy Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 text-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-heading text-white">
              Enterprise Data Isolation & Zero-Training Guarantees
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl leading-relaxed">
              Your company proprietary data, customer chats, and financial documents are never stored or used to train public foundation models. All pipelines are configured with strict data boundary isolation.
            </p>
          </div>
        </div>

        <button
          onClick={() => onOpenContact('AI Security Consultation')}
          className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shrink-0 transition"
        >
          Book Security Review
        </button>
      </div>

    </div>
  );
};
