import React, { useEffect } from 'react';
import { X, Play, CheckCircle2, Cpu, ShieldCheck, Sparkles } from './icons';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  useBodyScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 dark:bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div className="min-h-full flex items-center justify-center p-3 sm:p-4 md:p-6">
        <div 
          className="w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-slate-900 dark:text-slate-100 my-auto relative max-h-[92vh] sm:max-h-[88vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sticky Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-sm shrink-0">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-200 font-heading truncate">TechInstant: Our Vision & Engineering Story</span>
            </div>
            <button 
              type="button"
              onClick={onClose}
              aria-label="Close video modal"
              className="min-w-10 min-h-10 flex items-center justify-center p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-200/70 dark:hover:bg-slate-800 transition active:scale-95 shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-y-auto flex-1 overscroll-contain">
            {/* Video Player Display (Always Cinematic Dark Canvas) */}
            <div className="relative aspect-video bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/40 flex flex-col items-center justify-center p-6 sm:p-8 overflow-hidden group text-white">
              <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none"></div>
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

              {/* Interactive Play Presentation */}
              <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 sm:mb-6 shadow-xl shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-1" />
                </div>
                
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2 border border-emerald-500/20">
                  Technology Documentary
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  Building the Future of SaaS & AI
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  From our flagship consumer platform TwoCan to enterprise AI orchestration, explore how TechInstant helps teams move faster and solve real problems.
                </p>
              </div>

              {/* Video Controls Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 to-transparent p-3 sm:p-4 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-3 sm:gap-4">
                  <button className="text-emerald-400 font-medium hover:underline flex items-center gap-1.5">
                    <Play className="w-3.5 h-3.5 fill-current" /> Play Overview (3:45)
                  </button>
                  <span className="text-slate-600 hidden xs:inline">|</span>
                  <span className="hidden xs:flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-emerald-400" /> 4K Ultra HD</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-[11px] sm:text-xs"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Verified Engineering</span>
                </div>
              </div>
            </div>

            {/* Story Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 sm:p-6 bg-slate-50 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Full-Stack SaaS</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Scalable cloud architectures built for millions of interactions.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Applied AI Systems</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Practical intelligence that automates workflows and drives efficiency.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Human-Centered</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Designed with purpose, empathy, and intuitive usability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
