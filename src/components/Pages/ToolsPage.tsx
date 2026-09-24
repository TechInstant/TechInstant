import React, { useState } from 'react';
import { 
  FileText, Image, Code2, Sparkles, Calculator, 
  Briefcase, ArrowUpRight, Search 
} from '../icons';

export const ToolsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'PDF Tools',
    'Image Tools',
    'Developer Tools',
    'AI Tools',
    'Calculators',
    'Business Tools'
  ];

  const toolsList = [
    {
      title: 'PDF Merger & Compressor',
      category: 'PDF Tools',
      desc: 'Combine multiple PDF files or compress high-resolution documents locally without uploading to external servers.',
      icon: <FileText className="w-5 h-5 text-rose-500" />,
      tag: 'Client-Side'
    },
    {
      title: 'WebP / PNG / JPG Converter',
      category: 'Image Tools',
      desc: 'Batch convert image formats, optimize file sizes, and strip EXIF metadata instantly in browser memory.',
      icon: <Image className="w-5 h-5 text-blue-500" />,
      tag: 'Lossless'
    },
    {
      title: 'JSON Formatter & Validator',
      category: 'Developer Tools',
      desc: 'Beautify minified JSON, inspect syntax errors, and convert JSON schemas into TypeScript interfaces.',
      icon: <Code2 className="w-5 h-5 text-emerald-500" />,
      tag: 'Dev Essential'
    },
    {
      title: 'AI Text Summarizer & Rewriter',
      category: 'AI Tools',
      desc: 'Instantly condense long articles, emails, or reports into bullet points with adjustable tone presets.',
      icon: <Sparkles className="w-5 h-5 text-purple-500" />,
      tag: 'AI Powered'
    },
    {
      title: 'SaaS Unit Economics Calculator',
      category: 'Calculators',
      desc: 'Calculate LTV, CAC, payback period, churn rate, and monthly recurring revenue projections effortlessly.',
      icon: <Calculator className="w-5 h-5 text-amber-500" />,
      tag: 'Finance'
    },
    {
      title: 'Invoice & Receipt Generator',
      category: 'Business Tools',
      desc: 'Create clean, professional PDF invoices with custom company branding and tax calculation in 60 seconds.',
      icon: <Briefcase className="w-5 h-5 text-cyan-500" />,
      tag: 'Export PDF'
    },
    {
      title: 'Regex Pattern Tester & Explainer',
      category: 'Developer Tools',
      desc: 'Test regular expressions in real time with syntax highlighting, token explanations, and cheat sheet reference.',
      icon: <Code2 className="w-5 h-5 text-teal-500" />,
      tag: 'RegEx'
    },
    {
      title: 'Markdown to HTML / PDF Converter',
      category: 'Developer Tools',
      desc: 'Render GitHub-flavored markdown with live preview and one-click copy to clipboard or PDF export.',
      icon: <FileText className="w-5 h-5 text-indigo-500" />,
      tag: 'GFM'
    }
  ];

  const filtered = toolsList.filter((t) => {
    const matchesCategory = selectedCategory === 'All' || t.category === selectedCategory;
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          TechInstant Utility Suite
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-slate-900 dark:text-white mt-3">
          Useful Tools. Built by TechInstant.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
          Simple, fast and accessible digital tools for everyday work. 100% free, private, and runs directly in your browser.
        </p>

        {/* Search & Filter */}
        <div className="mt-8 max-w-xl mx-auto relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            placeholder="Search all free utility tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm outline-none focus:border-emerald-500 shadow-sm"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-slate-950 shadow'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((tool, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition-all hover:shadow-lg flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  {tool.icon}
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                  {tool.tag}
                </span>
              </div>

              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                {tool.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {tool.desc}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-400">{tool.category}</span>
              <button
                onClick={() => alert(`Launching ${tool.title} workbench...`)}
                className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Launch Tool</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
