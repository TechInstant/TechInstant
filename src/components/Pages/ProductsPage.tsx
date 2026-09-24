import React, { useState } from 'react';
import { 
  Heart, Sparkles, Box, Wrench, ArrowRight, 
  CheckCircle2, ArrowUpRight
} from '../icons';

interface ProductsPageProps {
  onOpenContact: (projectType?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenContact }) => {
  const [filter, setFilter] = useState<'all' | 'saas' | 'ai' | 'tools'>('all');

  const products = [
    {
      id: 'twocan',
      name: 'TwoCan',
      category: 'saas',
      categoryLabel: 'Relationship & Life',
      badge: 'Live',
      badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      tagline: 'Better conversations. Better decisions. Better together.',
      description: 'A guided conversation and financial alignment platform built for modern couples. Whether single, engaged, or decades married, TwoCan turns stressful conversations into connection.',
      features: [
        'Guided daily & weekly conversation decks',
        'Couples financial goals & money alignment sync',
        'Milestone planning & memory timeline',
        'Private end-to-end encrypted couple workspace'
      ],
      icon: <Heart className="w-7 h-7 text-rose-500 fill-current" />,
      ctaText: 'Visit TwoCan Platform',
      link: 'https://twocan.app',
      isExternal: true,
      highlight: true
    },
    {
      id: 'saas',
      name: 'InstantSaaS Engine',
      category: 'saas',
      categoryLabel: 'SaaS Products',
      badge: 'Live',
      badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      tagline: 'High-performance cloud software for business growth.',
      description: 'Turnkey SaaS solutions built for businesses, creator networks, and organizations looking to manage operations, billing, and member access at scale.',
      features: [
        'Multi-tenant cloud architecture',
        'Automated recurring billing & localized payouts',
        'Granular role-based permissions & audit trails',
        'Customizable dashboards with live telemetry'
      ],
      icon: <Box className="w-7 h-7 text-emerald-500" />,
      ctaText: 'Explore SaaS Suite',
      link: '#saas',
      isExternal: false,
      highlight: false
    },
    {
      id: 'ai-orchestrator',
      name: 'InstantAI Knowledge Core',
      category: 'ai',
      categoryLabel: 'AI Products',
      badge: 'Beta',
      badgeColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      tagline: 'Domain-specific enterprise intelligence.',
      description: 'Intelligent AI agents and knowledge synthesis pipelines that connect directly to internal company databases, Slack, Google Drive, and Notion to deliver instantaneous answers.',
      features: [
        'Hybrid vector search + BM25 retrieval',
        'Automated document classification & extraction',
        'Enterprise data compliance & zero training on user data',
        'Multi-agent task execution'
      ],
      icon: <Sparkles className="w-7 h-7 text-purple-500" />,
      ctaText: 'Request AI Demo',
      link: '/ai-services',
      isExternal: false,
      highlight: false
    },
    {
      id: 'techinstant-tools',
      name: 'TechInstant Free Tools Suite',
      category: 'tools',
      categoryLabel: 'Digital Utilities',
      badge: 'Live',
      badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      tagline: 'Everyday productivity tools without subscriptions.',
      description: 'A comprehensive collection of lightning-fast web utilities: PDF compressors, image converters, regex testers, calculators, and developer formatters.',
      features: [
        'Client-side execution for 100% data privacy',
        'No signup or credit card required',
        'Mobile responsive and lightning fast',
        'Over 25+ specialized utility modules'
      ],
      icon: <Wrench className="w-7 h-7 text-blue-500" />,
      ctaText: 'Open Free Tools',
      link: '/tools',
      isExternal: false,
      highlight: false
    }
  ];

  const filteredProducts = filter === 'all' ? products : products.filter(p => p.category === filter);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          TechInstant Directory
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white mt-3">
          Products Built for Real-World Needs
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
          From consumer relationship platforms to enterprise AI orchestration and free developer utilities, explore what we build.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${filter === 'all' ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-white'}`}
          >
            All Products
          </button>
          <button
            onClick={() => setFilter('saas')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${filter === 'saas' ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-white'}`}
          >
            SaaS Platforms
          </button>
          <button
            onClick={() => setFilter('ai')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${filter === 'ai' ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-white'}`}
          >
            AI Solutions
          </button>
          <button
            onClick={() => setFilter('tools')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${filter === 'tools' ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-white'}`}
          >
            Digital Tools
          </button>
        </div>
      </div>

      {/* Product Showcase Cards */}
      <div className="space-y-10">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            id={p.id}
            className={`p-8 sm:p-10 rounded-3xl border transition-all duration-300 ${
              p.highlight
                ? 'bg-gradient-to-br from-rose-500/5 via-slate-50 to-emerald-500/5 dark:from-slate-900 dark:via-[#0F172A] dark:to-slate-900 border-rose-500/30 dark:border-rose-500/20 shadow-xl'
                : 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 shadow-md hover:border-emerald-500/40'
            }`}
          >
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
              
              {/* Left Details */}
              <div className="max-w-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    {p.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">
                        {p.name}
                      </h2>
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border ${p.badgeColor}`}>
                        {p.badge}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{p.categoryLabel}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-200">
                  {p.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {p.description}
                </p>

                {/* Features List */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {p.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  {p.isExternal ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition shadow-lg shadow-emerald-500/20"
                    >
                      <span>{p.ctaText}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <a
                      href={p.link}
                      className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition shadow-lg shadow-emerald-500/20"
                    >
                      <span>{p.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}

                  <button
                    onClick={() => onOpenContact(p.name)}
                    className="px-5 py-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                  >
                    Custom Implementation
                  </button>
                </div>
              </div>

              {/* Right Mini Telemetry preview */}
              <div className="w-full lg:w-72 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-xs space-y-3">
                <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-slate-200 dark:border-slate-800">
                  <span className="font-mono text-[10px] uppercase">Specification</span>
                  <span className="text-emerald-500 font-mono text-[10px]">Verified</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Deployment Target</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">Global Multi-Region Edge</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Security Standard</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">End-to-End Encrypted</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Architecture</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">Serverless Microservices</span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
