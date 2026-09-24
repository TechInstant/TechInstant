import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Sparkles, Layers, Box, Cpu, FileText, ArrowUpRight } from './icons';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchItem {
  id: string;
  title: string;
  category: 'Products' | 'Solutions' | 'AI' | 'Pages' | 'Tools';
  description: string;
  path: string;
  icon: React.ReactNode;
}

const SEARCH_ITEMS: SearchItem[] = [
  {
    id: 'twocan',
    title: 'TwoCan Relationship & Life Platform',
    category: 'Products',
    description: 'Guided conversations, money plans and relationship tools for couples.',
    path: '/products#twocan',
    icon: <Box className="w-4 h-4 text-rose-500" />
  },
  {
    id: 'saas',
    title: 'Scalable SaaS Products',
    category: 'Products',
    description: 'Enterprise-grade SaaS products for creators, startups, and organizations.',
    path: '/products#saas',
    icon: <Box className="w-4 h-4 text-emerald-500" />
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions & Intelligent Systems',
    category: 'AI',
    description: 'Custom AI applications, automations, and LLM-powered business engines.',
    path: '/ai-services',
    icon: <Sparkles className="w-4 h-4 text-purple-500" />
  },
  {
    id: 'techinstant-tools',
    title: 'TechInstant Free Tools Suite',
    category: 'Tools',
    description: 'Everyday productivity tools: PDF utilities, Image tools, Developer converters.',
    path: '/tools',
    icon: <Layers className="w-4 h-4 text-blue-500" />
  },
  {
    id: 'web-mobile',
    title: 'Web & Mobile Applications Development',
    category: 'Solutions',
    description: 'Full-stack engineering for web, iOS and Android platforms.',
    path: '/solutions#web-mobile',
    icon: <Cpu className="w-4 h-4 text-teal-500" />
  },
  {
    id: 'cloud',
    title: 'Cloud Infrastructure & DevOps',
    category: 'Solutions',
    description: 'Resilient AWS, GCP, and Kubernetes cloud architecture.',
    path: '/solutions#cloud',
    icon: <Cpu className="w-4 h-4 text-cyan-500" />
  },
  {
    id: 'data-analytics',
    title: 'Data & Analytics Systems',
    category: 'Solutions',
    description: 'Turn your business data into live actionable insights.',
    path: '/solutions#data',
    icon: <Layers className="w-4 h-4 text-indigo-500" />
  },
  {
    id: 'about',
    title: 'About TechInstant — Mission & Story',
    category: 'Pages',
    description: 'Learn about our engineering philosophy and leadership.',
    path: '/about',
    icon: <FileText className="w-4 h-4 text-slate-400" />
  },
  {
    id: 'contact',
    title: 'Start a Project / Contact Us',
    category: 'Pages',
    description: 'Get in touch to bring your software or AI project to life.',
    path: '/contact',
    icon: <ArrowRight className="w-4 h-4 text-emerald-400" />
  },
];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = SEARCH_ITEMS.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 gap-3">
          <Search className="w-5 h-5 text-emerald-400" />
          <input
            type="text"
            placeholder="Search products, solutions, AI services, tools..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent border-none outline-none text-slate-100 placeholder-slate-400 text-base"
          />
          <button 
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-100 rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-slate-400">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-40 text-slate-500" />
              <p>No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-500 mt-1">Try searching for &quot;TwoCan&quot;, &quot;AI&quot;, &quot;Cloud&quot;, or &quot;Consulting&quot;</p>
            </div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item.path)}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/80 transition-all text-left group border border-transparent hover:border-slate-700/50"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-emerald-500/40">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors text-sm">
                        {item.title}
                      </span>
                      <span className="text-[10px] font-medium uppercase px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{item.description}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            ))
          )}
        </div>

        {/* Search Footer */}
        <div className="px-4 py-2.5 bg-slate-950/60 border-t border-slate-800 text-xs text-slate-500 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>Navigation:</span>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] text-slate-300">↑</kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] text-slate-300">↓</kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] text-slate-300">↵</kbd>
          </div>
          <div>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] text-slate-300">ESC</kbd> to close
          </div>
        </div>
      </div>
    </div>
  );
};
