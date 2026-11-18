'use client';

import { useEffect, useState } from 'react';

/** Sticky chrome covers the top of the viewport. The active chapter is the one sitting just under it. */
function chromeBottom() {
  const chrome = document.querySelector('.view-chrome');
  return chrome?.getBoundingClientRect().bottom ?? 0;
}

export function scrollToChapter(id: string) {
  const el = document.getElementById(`chapter-${id}`);
  if (!el) {
    return;
  }
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const top = el.getBoundingClientRect().top + window.scrollY - chromeBottom();
  window.scrollTo({ top: Math.max(0, top), behavior: reduced ? 'auto' : 'smooth' });
}

export function useActiveChapter(chapterIds: readonly string[], enabled = true) {
  const [activeId, setActiveId] = useState(chapterIds[0] ?? '');

  useEffect(() => {
    if (!enabled || chapterIds.length === 0) {
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const line = chromeBottom() + 8;
      let current = chapterIds[0] ?? '';

      for (const id of chapterIds) {
        const el = document.getElementById(`chapter-${id}`);
        if (!el) {
          continue;
        }
        if (el.getBoundingClientRect().top <= line) {
          current = id;
        }
      }

      setActiveId((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [chapterIds, enabled]);

  return activeId;
}
