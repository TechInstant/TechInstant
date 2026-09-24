import React from 'react';
import { X, Play, CheckCircle2, Cpu, ShieldCheck, Sparkles } from './icons';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-slate-100 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/50">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-bold text-sm text-slate-200 font-heading">TechInstant: Our Vision & Engineering Story</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display */}
        <div className="relative aspect-video bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/40 flex flex-col items-center justify-center p-8 overflow-hidden group">
          <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Interactive Play Presentation */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-6 shadow-xl shadow-emerald-500/20 group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
            
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2 border border-emerald-500/20">
              Technology Documentary
            </span>
            <h3 className="text-2xl font-bold font-heading text-white">
              Building the Future of SaaS & AI
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              From our flagship consumer platform TwoCan to enterprise AI orchestration, explore how TechInstant helps teams move faster and solve real problems.
            </p>
          </div>

          {/* Video Controls Bar */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 to-transparent p-4 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-4">
              <button className="text-emerald-400 font-medium hover:underline flex items-center gap-1.5">
                <Play className="w-3.5 h-3.5 fill-current" /> Play Overview (3:45)
              </button>
              <span className="text-slate-600">|</span>
              <span className="flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-emerald-400" /> 4K Ultra HD</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Verified Engineering</span>
            </div>
          </div>
        </div>

        {/* Story Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-slate-950/70 border-t border-slate-800">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Full-Stack SaaS</h4>
              <p className="text-xs text-slate-400 mt-0.5">Scalable cloud architectures built for millions of interactions.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Applied AI Systems</h4>
              <p className="text-xs text-slate-400 mt-0.5">Practical intelligence that automates workflows and drives efficiency.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Human-Centered</h4>
              <p className="text-xs text-slate-400 mt-0.5">Designed with purpose, empathy, and intuitive usability.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
