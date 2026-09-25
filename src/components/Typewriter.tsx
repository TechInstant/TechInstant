import React, { useEffect, useState } from 'react';

export interface TypewriterLine {
  text: string;
  className?: string;
}

interface TypewriterProps {
  lines: TypewriterLine[];
  /** ms per character while typing */
  typeMs?: number;
  /** ms per character while rewinding */
  deleteMs?: number;
  /** ms to hold the finished sentence before rewinding */
  holdMs?: number;
  /** ms to wait before the first character appears */
  startDelayMs?: number;
  /** when false the text types once and stays */
  loop?: boolean;
  caretClassName?: string;
  className?: string;
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export const Typewriter: React.FC<TypewriterProps> = ({
  lines,
  typeMs = 55,
  deleteMs = 26,
  holdMs = 2600,
  startDelayMs = 350,
  loop = true,
  caretClassName = 'bg-[#05DF72]',
  className = '',
}) => {
  const full = lines.map((l) => l.text).join('\n');
  const reduced = prefersReducedMotion();

  const [count, setCount] = useState(reduced ? full.length : 0);
  const [finished, setFinished] = useState(reduced);

  useEffect(() => {
    if (reduced) {
      setCount(full.length);
      setFinished(true);
      return;
    }

    let n = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const step = () => {
      if (!deleting) {
        if (n < full.length) {
          n += 1;
          setCount(n);
          timer = setTimeout(step, typeMs);
          return;
        }
        if (!loop) {
          setFinished(true);
          return;
        }
        deleting = true;
        timer = setTimeout(step, holdMs);
        return;
      }

      if (n > 0) {
        n -= 1;
        setCount(n);
        timer = setTimeout(step, deleteMs);
        return;
      }
      deleting = false;
      timer = setTimeout(step, typeMs * 6);
    };

    timer = setTimeout(step, startDelayMs);
    return () => clearTimeout(timer);
  }, [full, typeMs, deleteMs, holdMs, startDelayMs, loop, reduced]);

  const typedLines = full.slice(0, count).split('\n');
  /* The line the caret currently sits on. */
  const activeLine = Math.min(typedLines.length - 1, lines.length - 1);
  const showCaret = !reduced && !finished;

  return (
    <span className={className}>
      <span aria-hidden="true">
        {lines.map((line, i) => (
          <span key={line.text} className={`block ${line.className ?? ''}`}>
            {typedLines[i] || ' '}
            {showCaret && i === activeLine && (
              <span
                className={`inline-block w-[0.055em] h-[0.78em] align-[-0.04em] ml-[0.07em] rounded-[1px] animate-caret-blink ${caretClassName}`}
              />
            )}
          </span>
        ))}
      </span>
      {/* Screen readers and crawlers get the finished headline, not a partial one. */}
      <span className="sr-only">{full.replace('\n', ' ')}</span>
    </span>
  );
};
