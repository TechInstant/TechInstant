import React, { useState } from 'react';
import { 
  Mail, CheckCircle2, ShieldCheck, 
  ArrowRight, Clock, ChevronDown 
} from '../icons';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'SaaS Product',
    budget: '$5k - $15k',
    timeline: '1-3 months',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

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

  const faqs = [
    {
      q: 'How does the TechInstant project kickoff process work?',
      a: 'After you submit your project brief, our technical leads analyze your requirements. We schedule a 30-minute discovery call, provide a detailed architecture blueprint with fixed milestones, and begin rapid prototyping within 7 business days.'
    },
    {
      q: 'Do you work with non-technical founders and startups?',
      a: 'Yes! We frequently partner with domain experts and founders. We manage all technical architecture, UX design, cloud infrastructure, and deployment while keeping you fully informed at every milestone.'
    },
    {
      q: 'Who owns the intellectual property and code?',
      a: 'You do. 100% of the custom source code, design assets, databases, and intellectual property developed for your project belong exclusively to you upon milestone completion.'
    },
    {
      q: 'Can TechInstant provide ongoing maintenance and AI model monitoring?',
      a: 'Absolutely. We offer dedicated SLA support tiers that include bug fixes, security patches, cloud cost optimization, and proactive AI accuracy audits.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          Direct Engagement
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-slate-900 dark:text-white mt-3">
          Start a Project with TechInstant
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
          Tell us about your product idea, automation challenge, or technology requirements. We review every brief within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Form (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl">
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/40 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-2">
                Project Brief Received!
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mb-6">
                Thank you, <strong className="text-emerald-500">{formData.name}</strong>. Our engineering leads will review your requirements and follow up at <strong className="text-slate-800 dark:text-slate-200">{formData.email}</strong> with an initial assessment within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Emmanuel Adeleke"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-emerald-500 text-slate-900 dark:text-white text-sm outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Work Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. emmanuel@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-emerald-500 text-slate-900 dark:text-white text-sm outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Company or Organization (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. Acme Corp or New Startup"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-emerald-500 text-slate-900 dark:text-white text-sm outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">Project Discipline</label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFormData({ ...formData, projectType: type })}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition border ${
                        formData.projectType === type
                          ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500'
                          : 'bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-400'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Expected Budget Range</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-emerald-500 text-slate-900 dark:text-white text-sm outline-none transition"
                  >
                    {budgetRanges.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Target Launch Timeline</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-emerald-500 text-slate-900 dark:text-white text-sm outline-none transition"
                  >
                    <option value="Urgent (< 1 month)">Urgent (&lt; 1 month)</option>
                    <option value="1-3 months">1-3 months (Recommended)</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="Flexible">Flexible / Strategic</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Project Overview / Goals *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe what you want to build, key capabilities needed, target users, or any technical constraints..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-emerald-500 text-slate-900 dark:text-white text-sm outline-none transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-500/20 disabled:opacity-50"
              >
                {loading ? 'Transmitting Brief...' : 'Submit Project Brief'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Right Info & Direct Channels (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-6">
            <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
              Direct Inquiries
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-xs">General & New Projects</span>
                  <a href="mailto:hello@techinstant.com" className="font-semibold text-slate-900 dark:text-white hover:text-emerald-500">
                    hello@techinstant.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-xs">Guaranteed Response Time</span>
                  <span className="font-semibold text-slate-900 dark:text-white">Under 24 hours (Monday – Friday)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-xs">Mutual NDA</span>
                  <span className="font-semibold text-slate-900 dark:text-white">Strict confidentiality for all submitted ideas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick FAQ Accordion */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h3>

            <div className="space-y-2.5">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full p-3.5 text-left flex items-center justify-between gap-2 text-xs font-bold text-slate-900 dark:text-white"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform ${activeFaq === i ? 'rotate-180 text-emerald-500' : 'text-slate-400'}`} />
                  </button>
                  {activeFaq === i && (
                    <div className="px-3.5 pb-3.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-900 pt-2">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
