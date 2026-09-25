import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from './icons';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';

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
  useBodyScrollLock(isOpen);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-100 my-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Partner With Us</span>
            <h3 className="text-xl font-bold font-heading text-white">Start Your Project</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/40 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold font-heading text-white mb-2">Request Received!</h4>
            <p className="text-slate-400 text-sm max-w-md mb-6">
              Thank you, <span className="text-emerald-400 font-semibold">{formData.name || 'Friend'}</span>. Our engineering & product strategy team will review your project brief and get back to you at <span className="text-white font-medium">{formData.email}</span> within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Emmanuel Adeleke"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-slate-100 text-sm placeholder-slate-500 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Work Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. emmanuel@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-slate-100 text-sm placeholder-slate-500 outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Company / Organization (Optional)</label>
              <input
                type="text"
                placeholder="e.g. TechInstant Labs or Startup Name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-slate-100 text-sm placeholder-slate-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Project Type</label>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => setFormData({ ...formData, projectType: type })}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition border ${
                      formData.projectType === type
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/60 font-semibold'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 focus:border-emerald-500 text-slate-100 text-sm outline-none transition"
                >
                  {budgetRanges.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Target Timeline</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 focus:border-emerald-500 text-slate-100 text-sm outline-none transition"
                >
                  <option value="Urgent (< 1 month)">Urgent (&lt; 1 month)</option>
                  <option value="1-3 months">1-3 months (Standard)</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="Flexible">Flexible / Ongoing</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Project Overview / Goals *</label>
              <textarea
                required
                rows={3}
                placeholder="Tell us about the problem you are solving, key features needed, or goals..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-slate-100 text-sm placeholder-slate-500 outline-none transition resize-none"
              ></textarea>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>NDA & Privacy protected</span>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm flex items-center gap-2 transition disabled:opacity-50 shadow-lg shadow-emerald-500/20"
              >
                {loading ? 'Submitting...' : 'Submit Brief'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
