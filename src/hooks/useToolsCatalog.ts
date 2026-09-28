import { useEffect, useState } from 'react';
import { TOOLS_URL } from '../config';

export interface CatalogTool {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  url: string;
  live: boolean;
  popular: boolean;
  isNew: boolean;
  tags: string[];
}

export interface CatalogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

/**
 * Snapshot of the catalogue, bundled so the directory renders instantly and
 * still works if the tools site is unreachable. The live fetch below replaces
 * it, so this only needs to be roughly right — the tools app is the source of
 * truth.
 */
const FALLBACK_CATEGORIES: CatalogCategory[] = [
  { id: 'ai', name: 'AI Tools', slug: 'ai', description: 'AI-powered utilities.' },
  { id: 'pdf', name: 'PDF Tools', slug: 'pdf', description: 'Work with PDF files.' },
  { id: 'image', name: 'Image Tools', slug: 'image', description: 'Resize, compress and convert images.' },
  { id: 'developer', name: 'Developer Tools', slug: 'developer', description: 'Utilities for developers.' },
  { id: 'web', name: 'Web Tools', slug: 'web', description: 'Build, check and publish for the web.' },
  { id: 'qr', name: 'QR Tools', slug: 'qr', description: 'Create and manage QR codes.' },
  { id: 'health', name: 'Health Tools', slug: 'health', description: 'Private cycle, pregnancy and wellbeing calculators.' },
  { id: 'calculators', name: 'Calculators', slug: 'calculators', description: 'Useful everyday calculators.' },
  { id: 'student', name: 'Student Tools', slug: 'student', description: 'Tools for study and academic work.' },
  { id: 'business', name: 'Business Tools', slug: 'business', description: 'Useful tools for businesses and professionals.' },
];

const t = (
  slug: string,
  name: string,
  category: string,
  description: string,
  extra: Partial<CatalogTool> = {}
): CatalogTool => ({
  id: slug,
  slug,
  name,
  category,
  description,
  url: `${TOOLS_URL}/tools/${slug}`,
  live: true,
  popular: false,
  isNew: false,
  tags: [],
  ...extra,
});

const FALLBACK_TOOLS: CatalogTool[] = [
  t('prompt-generator', 'AI Prompt Generator', 'ai', 'Build a structured prompt from role, task, context and constraints.', { popular: true, isNew: true }),
  t('prompt-library', 'AI Prompt Library', 'ai', 'Twelve prompt templates that work, ready to fill in and copy.', { isNew: true }),

  t('merge-pdf', 'Merge PDF', 'pdf', 'Combine several PDF files into one document.', { popular: true }),
  t('split-pdf', 'Split PDF', 'pdf', 'Extract a page range from a PDF into a new file.'),
  t('compress-pdf', 'Compress PDF', 'pdf', 'Reduce PDF file size while keeping it readable.', { popular: true }),
  t('pdf-to-image', 'PDF to Images', 'pdf', 'Turn PDF pages into PNG or JPG images.'),
  t('images-to-pdf', 'Images to PDF', 'pdf', 'Combine images into a single PDF document.'),

  t('image-compressor', 'Image Compressor', 'image', 'Shrink JPG, PNG and WebP images with a quality slider.', { popular: true }),
  t('image-resizer', 'Image Resizer', 'image', 'Resize images by width and height, with aspect lock.'),
  t('image-converter', 'Image Converter', 'image', 'Convert images between JPG, PNG and WebP.'),
  t('image-cropper', 'Image Cropper', 'image', 'Crop images freely or to a fixed aspect ratio.'),
  t('image-metadata', 'Image Metadata Viewer', 'image', 'Inspect EXIF and other metadata stored in an image.'),

  t('json-formatter', 'JSON Formatter', 'developer', 'Format, validate and minify JSON with clear errors.', { popular: true }),
  t('json-minifier', 'JSON Minifier', 'developer', 'Strip whitespace from JSON to make it as small as possible.'),
  t('base64', 'Base64 Encoder / Decoder', 'developer', 'Encode text to Base64 or decode it back.'),
  t('uuid-generator', 'UUID Generator', 'developer', 'Generate one or many RFC 4122 version 4 UUIDs.'),
  t('timestamp', 'Timestamp Converter', 'developer', 'Convert between Unix timestamps and readable dates.'),

  t('meta-tag-generator', 'Meta Tag Generator', 'web', 'Build title, description, Open Graph and X tags with a live preview.', { popular: true, isNew: true }),
  t('ip-location-checker', 'IP Location Checker', 'web', 'Look up the approximate location and network behind an IP address.', { popular: true, isNew: true }),
  t('slug-generator', 'Slug Generator', 'web', 'Turn titles into clean, readable URL slugs.', { isNew: true }),
  t('color-contrast-checker', 'Colour Contrast Checker', 'web', 'Check text contrast against WCAG AA and AAA, with a fix suggested.', { popular: true, isNew: true }),
  t('favicon-generator', 'Favicon Generator', 'web', 'Make every favicon size from one image, with the HTML to match.', { popular: true, isNew: true }),
  t('lorem-ipsum-generator', 'Lorem Ipsum Generator', 'web', 'Placeholder text in Latin or plain English, with HTML if you want it.', { isNew: true }),
  t('url-encoder', 'URL Encoder / Decoder', 'web', 'Percent-encode or decode URLs, and break one into its parts.', { isNew: true }),
  t('robots-txt-generator', 'robots.txt Generator', 'web', 'Build a robots.txt file, with AI-crawler opt-out if you want it.', { isNew: true }),

  t('qr-generator', 'QR Code Generator', 'qr', 'Create QR codes for links, text, email, phone and Wi-Fi.', { popular: true }),

  t('period-calculator', 'Period & Cycle Calculator', 'health', 'Estimate your next periods and fertile window.', { popular: true, isNew: true }),
  t('due-date-calculator', 'Pregnancy Due Date Calculator', 'health', 'Estimate a due date and see how far along you are.', { popular: true, isNew: true }),
  t('bmi-calculator', 'BMI Calculator', 'health', 'Check BMI and the healthy weight range for your height.', { isNew: true }),
  t('postpartum-guide', 'Postpartum Care Guide', 'health', 'Essential information and tips for recovery after childbirth.', { isNew: true }),
  t('pregnancy-shopping-list', 'Pregnancy Shopping List', 'health', 'Trimester-by-trimester checklist of what to buy before the baby arrives.', { popular: true, isNew: true }),
  t('ovulation-calculator', 'Ovulation Calculator', 'health', 'Find your fertile window and estimated ovulation day.', { popular: true, isNew: true }),
  t('water-intake-calculator', 'Water Intake Calculator', 'health', 'Work out roughly how much fluid to drink each day.', { isNew: true }),
  t('calorie-calculator', 'Calorie & TDEE Calculator', 'health', 'Find your BMR and daily calorie needs for your goal.', { popular: true, isNew: true }),

  t('percentage-calculator', 'Percentage Calculator', 'calculators', 'Work out percentages, shares and increases or decreases.', { popular: true }),
  t('age-calculator', 'Age Calculator', 'calculators', 'Calculate an exact age in years, months and days.'),

  t('word-counter', 'Word Counter', 'student', 'Count words, characters, sentences and reading time.', { popular: true }),
  t('gpa-calculator', 'GPA & CGPA Calculator', 'student', 'Work out semester GPA and cumulative CGPA on a 5.0 or 4.0 scale.', { popular: true, isNew: true }),
  t('citation-generator', 'Citation Generator', 'student', 'Build APA, MLA, Harvard and Chicago references.', { popular: true, isNew: true }),
  t('grade-calculator', 'Grade Calculator', 'student', 'See your current grade and what you need on what\'s left.', { popular: true, isNew: true }),
  t('text-case-converter', 'Text Case Converter', 'student', 'Convert text to title, sentence, camel, snake and kebab case.', { isNew: true }),
  t('readability-checker', 'Readability Checker', 'student', 'Score your writing and find the sentences slowing it down.', { isNew: true }),
  t('hidden-text-scanner', 'Hidden Text & Prompt Injection Scanner', 'student', 'Find invisible characters and hidden instructions in text or PDFs.', { popular: true, isNew: true }),
  t('study-timer', 'Study Timer', 'student', 'A Pomodoro timer with adjustable focus and break lengths.', { popular: true, isNew: true }),
  t('random-picker', 'Random Picker', 'student', 'Pick a winner, shuffle an order, make teams or roll a number.', { isNew: true }),

  t('password-generator', 'Password Generator', 'business', 'Build strong random passwords with the options you choose.', { popular: true }),
  t('invoice-generator', 'Invoice Generator', 'business', 'Create a professional invoice PDF and download it instantly.', { popular: true, isNew: true }),
  t('receipt-generator', 'Receipt Generator', 'business', 'Produce a clean receipt PDF confirming a payment you have received.', { isNew: true }),
  t('business-card-maker', 'Business Card Maker', 'business', 'Design a business card and export it print-ready as PNG or PDF.', { popular: true, isNew: true }),
  t('certificate-generator', 'Certificate Generator', 'business', 'Design certificates with templates, logos, signatures and batch CSV export.', { popular: true, isNew: true }),
];

interface Catalog {
  tools: CatalogTool[];
  categories: CatalogCategory[];
  /** True once the live list has replaced the bundled snapshot. */
  fresh: boolean;
}

/**
 * Reads the published catalogue from the tools site so this directory never
 * goes stale. Falls back to the bundled snapshot on any failure — a slow or
 * offline tools site should degrade, not blank the page.
 */
export function useToolsCatalog(): Catalog {
  const [catalog, setCatalog] = useState<Catalog>({
    tools: FALLBACK_TOOLS,
    categories: FALLBACK_CATEGORIES,
    fresh: false,
  });

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);

    fetch(`${TOOLS_URL}/tools.json`, { signal: controller.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((data) => {
        if (!Array.isArray(data?.tools) || data.tools.length === 0) return;
        setCatalog({
          tools: data.tools as CatalogTool[],
          categories: (data.categories as CatalogCategory[]) ?? FALLBACK_CATEGORIES,
          fresh: true,
        });
      })
      .catch(() => {
        /* Keep the bundled snapshot — nothing to tell the visitor. */
      })
      .finally(() => clearTimeout(timeout));

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  return catalog;
}
