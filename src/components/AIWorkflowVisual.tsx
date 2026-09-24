import React, { useState } from 'react';
import { Database, Zap, CheckCircle2, Cpu } from './icons';

export const AIWorkflowVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      step: 1,
      name: '01. Input & Data Ingestion',
      subtitle: 'Documents, APIs, User Intents',
      icon: <Database className="w-5 h-5 text-blue-400" />,
      desc: 'Raw business documents, custom customer queries, or live API streams enter the secure TechInstant ingestion pipeline with strict enterprise encryption.'
    },
    {
      step: 2,
      name: '02. AI Processing & Reasoning',
      subtitle: 'LLMs, Vector Indexing, Hybrid RAG',
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      desc: 'Contextual retrieval and multi-agent reasoning extract key entities, summarize complex patterns, and generate actionable structured outputs.'
    },
    {
      step: 3,
      name: '03. Autonomous Orchestration',
      subtitle: 'Rules, Webhooks, Tool Calling',
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      desc: 'Intelligent decision logic triggers automated workflows, updates CRM databases, sends alerts, or builds customized proposals automatically.'
    },
    {
      step: 4,
      name: '04. Measurable Real-World Result',
      subtitle: '99.4% Accuracy, 10x Velocity',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
      desc: 'Zero-manual-effort deliverables, instant answers, and streamlined business operations with full audit logs and human-in-the-loop controls.'
    }
  ];

  return (
    <div className="w-full bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
            Interactive Architecture
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mt-1">
            How TechInstant AI Systems Operate
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Click each step below to inspect how we move from raw inputs to verified enterprise actions.
          </p>
        </div>

        {/* Live indicator badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Orchestration Pipeline: Active</span>
        </div>
      </div>

      {/* Step Pills */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {steps.map((s) => (
          <button
            key={s.step}
            onClick={() => setActiveStep(s.step)}
            className={`p-3.5 rounded-2xl text-left transition-all border ${
              activeStep === s.step
                ? 'bg-slate-800 border-emerald-500/80 shadow-lg shadow-emerald-500/10 scale-[1.02]'
                : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 opacity-70 hover:opacity-100'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                {s.icon}
              </div>
              <span className="text-[11px] font-mono text-slate-500">Step {s.step}</span>
            </div>
            <h4 className="text-xs font-bold text-white leading-tight">{s.name}</h4>
            <span className="text-[10px] text-slate-400 block mt-0.5 truncate">{s.subtitle}</span>
          </button>
        ))}
      </div>

      {/* Active Step Deep-Dive Box */}
      <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/90 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold">
              ACTIVE STAGE
            </span>
            <span className="text-xs text-slate-400 font-mono">{steps[activeStep - 1].subtitle}</span>
          </div>
          <h4 className="text-lg font-bold text-white font-heading">
            {steps[activeStep - 1].name}
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {steps[activeStep - 1].desc}
          </p>
        </div>

        {/* Live Mini Terminal Preview */}
        <div className="w-full md:w-80 bg-[#070B12] rounded-xl border border-slate-800 p-3.5 font-mono text-[11px] text-slate-300">
          <div className="flex items-center gap-1.5 pb-2 border-b border-slate-800/80 mb-2">
            <div className="w-2 h-2 rounded-full bg-rose-500"></div>
            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-[10px] text-slate-500 ml-2">runtime_log.sh</span>
          </div>
          {activeStep === 1 && (
            <div className="space-y-1 text-slate-400">
              <p className="text-blue-400">&gt; Ingesting payload [schema: v2.4]</p>
              <p className="text-slate-400">&gt; Tokenizing embeddings: 4,120 tokens</p>
              <p className="text-emerald-400">&gt; Sanitization passed [SOC2 Encrypted]</p>
            </div>
          )}
          {activeStep === 2 && (
            <div className="space-y-1 text-slate-400">
              <p className="text-purple-400">&gt; Dispatching to Model Cluster</p>
              <p className="text-slate-400">&gt; RAG similarity index: 0.984</p>
              <p className="text-emerald-400">&gt; Reasoning completed in 184ms</p>
            </div>
          )}
          {activeStep === 3 && (
            <div className="space-y-1 text-slate-400">
              <p className="text-amber-400">&gt; Triggering webhook / automation</p>
              <p className="text-slate-400">&gt; Calling downstream microservices</p>
              <p className="text-emerald-400">&gt; Status 200 OK — Action executed</p>
            </div>
          )}
          {activeStep === 4 && (
            <div className="space-y-1 text-slate-400">
              <p className="text-emerald-400">&gt; Delivery verified successfully</p>
              <p className="text-slate-400">&gt; ROI metric calculated: 9.4x speed</p>
              <p className="text-cyan-400">&gt; Audit record dispatched to warehouse</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
