import React from 'react';
import { Link } from 'react-router-dom';

interface BrandLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  /**
   * Set on surfaces that stay dark in both themes (the footer, the modals).
   * Without it the wordmark follows the page theme and "Instant" turns
   * slate-900 in light mode, which is invisible against those surfaces.
   */
  onDark?: boolean;
}

/**
 * The TechInstant brand mark, traced from the original artwork.
 *
 * It is a single "energy leaf" bolt: one green silhouette (no disc, no ring)
 * with a white lightning bolt knocked out of the middle. The silhouette is
 * exactly 180deg rotationally symmetric about (17, 20) — the upper-left lobe
 * maps onto the lower-right lobe, and the top tip maps onto the bottom tip.
 */
export const BrandMark: React.FC<{ className?: string }> = ({ className = '' }) => {
  const uid = React.useId().replace(/:/g, '');

  return (
    <svg
      viewBox="-1 -1 36 42"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Green leaf-bolt silhouette */}
      <path
        d="M23 0.8 L25.5 2 L22.5 12 L29 12
           C32 14.2 33 16.5 33 20
           C32.4 30.5 15.5 37.5 11 39.2
           L8.5 38 L11.5 28 L5 28
           C2 25.8 1 23.5 1 20
           C1.6 9.5 18.5 2.5 23 0.8 Z"
        fill={`url(#${uid}-leaf)`}
        stroke={`url(#${uid}-leaf)`}
        strokeWidth="0.8"
        strokeLinejoin="round"
      />

      {/* White lightning bolt knocked out of the leaf */}
      <path
        d="M20.5 5.5 L16.3 17.5 L23.6 17.5 L17 28.8 L18.1 21.5 L12 21.5 Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="0.45"
        strokeLinejoin="round"
      />

      <defs>
        <linearGradient
          id={`${uid}-leaf`}
          x1="10"
          y1="0"
          x2="28"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1AD280" />
          <stop offset="0.5" stopColor="#04A85C" />
          <stop offset="1" stopColor="#00934F" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  showTagline = true,
  size = 'md',
  onDark = false
}) => {
  /* The mark is taller than it is wide (32 x 38 in the source artwork). */
  const markSizes = {
    sm: 'w-[24px] h-[28px]',
    md: 'w-[30px] h-[36px]',
    lg: 'w-[38px] h-[45px]'
  };

  const textSizes = {
    sm: 'text-[17px]',
    md: 'text-[21px]',
    lg: 'text-[26px]'
  };

  const taglineSizes = {
    sm: 'text-[8px]',
    md: 'text-[9.5px]',
    lg: 'text-[11px]'
  };

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-[7px] group select-none transition-opacity hover:opacity-95 ${className}`}
    >
      <BrandMark
        className={`${markSizes[size]} flex-shrink-0 transform group-hover:scale-105 transition-transform duration-200`}
      />

      {/* Wordmark, with the tagline tracked out to the wordmark's own width */}
      <div className="flex flex-col">
        <span
          className={`font-bold tracking-[-0.02em] ${textSizes[size]} leading-none font-sans`}
        >
          <span className="text-[#05DF72]">Tech</span>
          <span className={onDark ? 'text-white' : 'text-slate-900 dark:text-white'}>
            Instant
          </span>
        </span>
        {showTagline && (
          <span
            className={`${taglineSizes[size]} font-medium ${
              onDark ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'
            } mt-[5px] leading-none flex items-center justify-between`}
          >
            <span>Build</span>
            <span className="text-[0.65em] opacity-70">&bull;</span>
            <span>Automate</span>
            <span className="text-[0.65em] opacity-70">&bull;</span>
            <span>Grow</span>
          </span>
        )}
      </div>
    </Link>
  );
};
