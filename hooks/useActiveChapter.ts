'use client';

import { useEffect, useState } from 'react';

export function useActiveChapter(chapterIds: readonly string[], enabled = true) {
  const [activeId, setActiveId] = useState(chapterIds[0] ?? '');

  useEffect(() => {
    if (!enabled || chapterIds.length === 0) {
      return;
    }

    const elements = chapterIds
      .map((id) => document.getElementById(`chapter-${id}`))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const top = visible[0]?.target.id.replace(/^chapter-/, '');
        if (top) {
          setActiveId(top);
        }
      },
      {
        root: null,
        threshold: [0.35, 0.55, 0.75],
        rootMargin: '-10% 0px -35% 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [chapterIds, enabled]);

  return activeId;
}
