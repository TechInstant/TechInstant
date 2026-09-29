import React, { useMemo, useState } from 'react';
import {
  FileText, Image, Code2, Calculator, Globe2, Heart,
  Briefcase, ArrowUpRight, Search, GraduationCap, Box, Sparkles
} from '../icons';
import { TOOLS_URL } from '../../config';
import { useToolsCatalog } from '../../hooks/useToolsCatalog';

/** Per-category icon. Categories come from the tools site, icons stay here. */
const CATEGORY_ICON: Record<string, React.ReactNode> = {
  pdf: <FileText className="w-5 h-5 text-rose-500" />,
  image: <Image className="w-5 h-5 text-sky-500" />,
  developer: <Code2 className="w-5 h-5 text-emerald-500" />,
  web: <Globe2 className="w-5 h-5 text-blue-500" />,
  qr: <Box className="w-5 h-5 text-teal-500" />,
  health: <Heart className="w-5 h-5 text-pink-500" />,
  calculators: <Calculator className="w-5 h-5 text-amber-500" />,
  student: <GraduationCap className="w-5 h-5 text-indigo-500" />,
  business: <Briefcase className="w-5 h-5 text-cyan-500" />,
  ai: <Sparkles className="w-5 h-5 text-violet-500" />,
};

export const ToolsPage: React.FC = () => {
  const { tools, categories } = useToolsCatalog();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryName = useMemo(() => {
    const map: Record<string, string> = {};
    categories.forEach((c) => { map[c.id] = c.name; });
    return map;
  }, [categories]);

  /* Only show categories that actually have tools in them. */
  const shownCategories = useMemo(
    () => categories.filter((c) => tools.some((t) => t.category === c.id)),
    [categories, tools]
  );

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return tools.filter((t) => {
      const matchesCategory = selectedCategory === 'all' || t.category === selectedCategory;
      const matchesSearch =
        !q ||
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        (categoryName[t.category] ?? '').toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [tools, selectedCategory, searchQuery, categoryName]);

  const liveCount = tools.filter((t) => t.live).length;

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          TechInstant Utility Suite
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-slate-900 dark:text-white mt-3">
          Useful Tools. Built by TechInstant.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
          Simple, fast and accessible digital tools for everyday work. Free, private,
          and they run directly in your browser.
        </p>

        <a
          href={TOOLS_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#05DF72] hover:bg-[#04BE60] text-slate-950 font-bold text-sm transition shadow-lg shadow-emerald-500/25"
        >
          <span>Open TechInstant Tools</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>

        {/* Search */}
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
          {[{ id: 'all', name: 'All' }, ...shownCategories].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`min-h-11 px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                selectedCategory === cat.id
                  ? 'bg-emerald-500 text-slate-950 shadow'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400 mt-5">
          {liveCount} free {liveCount === 1 ? 'tool' : 'tools'}, ready to use.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((tool) => (
          <div
            key={tool.id}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition-all hover:shadow-lg flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  {CATEGORY_ICON[tool.category] ?? <Box className="w-5 h-5 text-slate-500" />}
                </div>
                <div className="flex items-center gap-1.5">
                  {tool.isNew && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30">
                      New
                    </span>
                  )}
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                      tool.live
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                        : 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30'
                    }`}
                  >
                    {tool.live ? 'Free' : 'Soon'}
                  </span>
                </div>
              </div>

              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                {tool.name}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {tool.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-400">
                {categoryName[tool.category] ?? tool.category}
              </span>
              {/* Opens the real tool in the TechInstant Tools app. */}
              <a
                href={tool.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
              >
                <span>{tool.live ? 'Launch Tool' : 'Preview'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-sm text-slate-500 dark:text-slate-400">
          No tools match that search. Try &ldquo;pdf&rdquo;, &ldquo;image&rdquo;, &ldquo;json&rdquo; or &ldquo;qr&rdquo;.
        </p>
      )}
    </div>
  );
};
