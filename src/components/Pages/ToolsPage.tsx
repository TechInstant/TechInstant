import React, { useState } from 'react';
import {
  FileText, Image, Code2, Calculator,
  Briefcase, ArrowUpRight, Search, GraduationCap, Box
} from '../icons';
import { toolUrl, TOOLS_URL } from '../../config';

interface ToolEntry {
  title: string;
  slug: string;
  category: string;
  desc: string;
  live: boolean;
}

/**
 * Mirrors the registry in the TechInstant Tools app. Each entry links straight
 * to the real, working tool — this page is a directory, not a mockup.
 */
const TOOLS: ToolEntry[] = [
  { title: 'Merge PDF', slug: 'merge-pdf', category: 'PDF Tools', live: true,
    desc: 'Combine several PDF files into one document, in the order you choose.' },
  { title: 'Split PDF', slug: 'split-pdf', category: 'PDF Tools', live: true,
    desc: 'Extract a page or a range of pages from a PDF into a new file.' },
  { title: 'Compress PDF', slug: 'compress-pdf', category: 'PDF Tools', live: true,
    desc: 'Reduce PDF file size with low, medium or high compression.' },
  { title: 'PDF to Images', slug: 'pdf-to-image', category: 'PDF Tools', live: true,
    desc: 'Turn any PDF page into a PNG or JPG image you can download.' },
  { title: 'Images to PDF', slug: 'images-to-pdf', category: 'PDF Tools', live: true,
    desc: 'Combine JPG and PNG images into a single PDF with page size options.' },

  { title: 'JSON Formatter', slug: 'json-formatter', category: 'Developer Tools', live: true,
    desc: 'Format and validate JSON with errors pinned to the exact line and column.' },
  { title: 'JSON Minifier', slug: 'json-minifier', category: 'Developer Tools', live: true,
    desc: 'Strip whitespace from JSON and see exactly how much smaller it got.' },
  { title: 'Base64 Encoder / Decoder', slug: 'base64', category: 'Developer Tools', live: true,
    desc: 'Encode and decode Base64, with full Unicode and emoji support.' },
  { title: 'UUID Generator', slug: 'uuid-generator', category: 'Developer Tools', live: true,
    desc: 'Generate up to 100 version 4 UUIDs using secure browser randomness.' },
  { title: 'Timestamp Converter', slug: 'timestamp', category: 'Developer Tools', live: true,
    desc: 'Convert between Unix timestamps and readable dates, in seconds or milliseconds.' },

  { title: 'QR Code Generator', slug: 'qr-generator', category: 'QR Tools', live: true,
    desc: 'Create QR codes for links, text, email, phone numbers and Wi-Fi networks.' },
  { title: 'Password Generator', slug: 'password-generator', category: 'Business Tools', live: true,
    desc: 'Build strong passwords with cryptographic randomness and a strength meter.' },
  { title: 'Word Counter', slug: 'word-counter', category: 'Student Tools', live: true,
    desc: 'Count words, characters, sentences, paragraphs and estimated reading time.' },
  { title: 'Percentage Calculator', slug: 'percentage-calculator', category: 'Calculators', live: true,
    desc: 'Work out percentages, shares, and increases or decreases between values.' },
  { title: 'Age Calculator', slug: 'age-calculator', category: 'Calculators', live: true,
    desc: 'Calculate an exact age in years, months and days, leap years included.' },

  { title: 'Image Compressor', slug: 'image-compressor', category: 'Image Tools', live: false,
    desc: 'Shrink JPG, PNG and WebP images with a quality slider and size preview.' },
  { title: 'Image Resizer', slug: 'image-resizer', category: 'Image Tools', live: false,
    desc: 'Resize images by width and height with optional aspect-ratio lock.' },
  { title: 'Image Converter', slug: 'image-converter', category: 'Image Tools', live: false,
    desc: 'Convert images between JPG, PNG and WebP formats.' },
  { title: 'Image Cropper', slug: 'image-cropper', category: 'Image Tools', live: false,
    desc: 'Crop images freely or to a fixed aspect ratio.' },
  { title: 'Image Metadata Viewer', slug: 'image-metadata', category: 'Image Tools', live: false,
    desc: 'Inspect the EXIF and camera metadata stored inside an image.' },
];

const CATEGORY_ICON: Record<string, React.ReactNode> = {
  'PDF Tools': <FileText className="w-5 h-5 text-rose-500" />,
  'Image Tools': <Image className="w-5 h-5 text-sky-500" />,
  'Developer Tools': <Code2 className="w-5 h-5 text-emerald-500" />,
  'QR Tools': <Box className="w-5 h-5 text-teal-500" />,
  'Calculators': <Calculator className="w-5 h-5 text-amber-500" />,
  'Student Tools': <GraduationCap className="w-5 h-5 text-indigo-500" />,
  'Business Tools': <Briefcase className="w-5 h-5 text-cyan-500" />,
};

const CATEGORIES = ['All', ...Array.from(new Set(TOOLS.map((t) => t.category)))];

export const ToolsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = TOOLS.filter((t) => {
    const matchesCategory = selectedCategory === 'All' || t.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      t.title.toLowerCase().includes(q) ||
      t.desc.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const liveCount = TOOLS.filter((t) => t.live).length;

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
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-slate-950 shadow'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400 mt-5">
          {liveCount} of {TOOLS.length} tools are live — the rest are on the way.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((tool) => (
          <div
            key={tool.slug}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition-all hover:shadow-lg flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  {CATEGORY_ICON[tool.category]}
                </div>
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

              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                {tool.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {tool.desc}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-400">{tool.category}</span>
              {/* Opens the real tool in the TechInstant Tools app. */}
              <a
                href={toolUrl(tool.slug)}
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
