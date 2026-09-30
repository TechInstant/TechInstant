import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from './icons';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { submitForm, mailtoFallback, FALLBACK_EMAIL } from '../lib/submitForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProjectType?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ 
  isOpen, 
  onClose,
  defaultProjectType = 'SaaS Product'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: defaultProjectType,
    budget: '$5k - $15k',
    timeline: '1-3 months',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  useBodyScrollLock(isOpen);

  // Sync defaultProjectType when modal opens with a different initial value
  useEffect(() => {
    if (isOpen && defaultProjectType) {
      setFormData((prev) => ({ ...prev, projectType: defaultProjectType }));
    }
  }, [isOpen, defaultProjectType]);

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  /* Files into the same `project-brief` form as the contact page — the fields
     are identical, so briefs from both places land in one list. */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFailed(false);

    const result = await submitForm('project-brief', formData);

    setLoading(false);
    if (result.ok) setSubmitted(true);
    else setFailed(true);
  };

  const projectTypes = [
    'SaaS Product',
    'AI Solution',
    'Web Application',
    'Mobile Application',
    'Automation',
    'IT Consulting',
    'Other'
  ];

  const budgetRanges = [
    'Under $5k',
    '$5k - $15k',
    '$15k - $50k',
    '$50k+'
  ];

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 dark:bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div className="min-h-full flex items-center justify-center p-3 sm:p-4 md:p-6">
        <div 
          className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-900 dark:text-slate-100 my-auto relative max-h-[92vh] sm:max-h-[88vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sticky Header with prominent close button */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-sm shrink-0">
            <div>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Partner With Us</span>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 dark:text-white">Start Your Project</h3>
            </div>
            <button 
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="min-w-10 min-h-10 flex items-center justify-center p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-200/70 dark:hover:bg-slate-800 transition active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body Container */}
          <div className="overflow-y-auto p-5 sm:p-6 flex-1 overscroll-contain">
            {submitted ? (
              <div className="py-8 px-4 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/40 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-2">Request Received!</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mb-6 leading-relaxed">
                  Thank you, <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{formData.name || 'Friend'}</span>. Our engineering & product strategy team will review your project brief and get back to you at <span className="text-slate-900 dark:text-white font-medium">{formData.email}</span> within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition shadow-lg shadow-emerald-500/20 active:scale-95"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {failed && (
                  <div
                    role="alert"
                    className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-slate-700 dark:text-slate-200"
                  >
                    <p className="font-bold text-slate-900 dark:text-white">We could not send that brief.</p>
                    <p className="mt-1 leading-relaxed">
                      Nothing has been lost from the form — try again, or send it
                      straight to us.
                    </p>
                    <a
                      href={mailtoFallback('Project brief from the TechInstant site', formData)}
                      className="mt-2 inline-block font-semibold text-emerald-600 dark:text-emerald-400 hover:underline break-all"
                    >
                      Email it to {FALLBACK_EMAIL}
                    </a>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cm-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Your Full Name *</label>
                    <input
                      id="cm-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="e.g. Emmanuel Adeleke"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-500 outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="cm-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Work Email Address *</label>
                    <input
                      id="cm-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="e.g. emmanuel@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-500 outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="cm-company" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Company / Organization (Optional)</label>
                  <input
                    id="cm-company"
                    name="company"
                    type="text"
                    placeholder="e.g. TechInstant Labs or Startup Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-500 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Project Type</label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition border ${
                          formData.projectType === type
                            ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500 font-semibold shadow-sm'
                            : 'bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 active:scale-95'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cm-budget" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Budget Range</label>
                    <select
                      id="cm-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-emerald-500 text-slate-900 dark:text-white text-sm outline-none transition"
                    >
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="cm-timeline" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Target Timeline</label>
                    <select
                      id="cm-timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-emerald-500 text-slate-900 dark:text-white text-sm outline-none transition"
                    >
                      <option value="Urgent (< 1 month)">Urgent (&lt; 1 month)</option>
                      <option value="1-3 months">1-3 months (Standard)</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="Flexible">Flexible / Ongoing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="cm-desc" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Project Overview / Goals *</label>
                  <textarea
                    id="cm-desc"
                    name="description"
                    required
                    rows={3}
                    placeholder="Tell us about the problem you are solving, key features needed, or goals..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-500 outline-none transition resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 order-2 sm:order-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                    <span>NDA & Privacy protected</span>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition disabled:opacity-50 shadow-lg shadow-emerald-500/20 active:scale-95 order-1 sm:order-2"
                  >
                    {loading ? 'Submitting...' : 'Submit Brief'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
