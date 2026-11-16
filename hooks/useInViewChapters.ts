'use client';

import { useEffect, useState } from 'react';

/** Chapters currently (or previously) in view — used for enter animations. */
export function useInViewChapters(chapterIds: readonly string[]) {
  const [seen, setSeen] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    if (chapterIds[0]) {
      initial[chapterIds[0]] = true;
    }
    return initial;
  });

  useEffect(() => {
    const elements = chapterIds
      .map((id) => document.getElementById(`chapter-${id}`))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) {
      return;
    }

    const markVisible = () => {
      setSeen((prev) => {
        let changed = false;
        const next = { ...prev };
        for (const el of elements) {
          const rect = el.getBoundingClientRect();
          const visible = rect.top < window.innerHeight * 0.85 && rect.bottom > window.innerHeight * 0.1;
          const id = el.id.replace(/^chapter-/, '');
          if (visible && !next[id]) {
            next[id] = true;
            changed = true;
          }
        }
        return changed ? next : prev;
      });
    };

    markVisible();

    const observer = new IntersectionObserver(
      (entries) => {
        setSeen((prev) => {
          let changed = false;
          const next = { ...prev };
          for (const entry of entries) {
            if (!entry.isIntersecting) {
              continue;
            }
            const id = entry.target.id.replace(/^chapter-/, '');
            if (!next[id]) {
              next[id] = true;
              changed = true;
            }
          }
          return changed ? next : prev;
        });
      },
      { threshold: [0.15, 0.35], rootMargin: '0px 0px -5% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    window.addEventListener('scroll', markVisible, { passive: true });
    window.addEventListener('resize', markVisible);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', markVisible);
      window.removeEventListener('resize', markVisible);
    };
  }, [chapterIds]);

  return seen;
}
