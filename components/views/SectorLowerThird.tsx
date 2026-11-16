'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { ResumeDownload } from './ResumeDownload';

type SectorLowerThirdProps = {
  name: string;
  chapterLabel: string;
};

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Viewport-docked lower-third (portaled to body). Spring only squashes — never translates off-screen. */
export function SectorLowerThird({ name, chapterLabel }: SectorLowerThirdProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const pullRef = useRef(0);
  const pullVelRef = useRef(0);
  const lastScrollRef = useRef(0);
  const rafRef = useRef(0);
  const [mounted, setMounted] = useState(false);
  const [shownLabel, setShownLabel] = useState(chapterLabel);
  const [labelKey, setLabelKey] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (chapterLabel === shownLabel) {
      return;
    }
    setShownLabel(chapterLabel);
    setLabelKey((key) => key + 1);
  }, [chapterLabel, shownLabel]);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const bar = barRef.current;
    if (!bar) {
      return;
    }

    const paint = () => {
      // Map pull px into a tiny scale so the dock never leaves the viewport.
      const scale = 1 + Math.max(-0.06, Math.min(0.1, pullRef.current * 0.0025));
      bar.style.setProperty('--bar-scale', scale.toFixed(4));
    };

    if (prefersReducedMotion()) {
      pullRef.current = 0;
      paint();
      return;
    }

    lastScrollRef.current = window.scrollY;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(0.032, (now - lastTime) / 1000);
      lastTime = now;

      const stiffness = 180;
      const damping = 20;
      const force = -stiffness * pullRef.current - damping * pullVelRef.current;
      pullVelRef.current += force * dt;
      pullRef.current += pullVelRef.current * dt;

      if (Math.abs(pullRef.current) < 0.08 && Math.abs(pullVelRef.current) < 0.08) {
        pullRef.current = 0;
        pullVelRef.current = 0;
      }

      paint();
      rafRef.current = window.requestAnimationFrame(tick);
    };

    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - lastScrollRef.current;
      lastScrollRef.current = y;
      // Touch scrolls send large deltas — keep the tug gentle.
      pullRef.current = Math.max(-28, Math.min(32, pullRef.current + dy * 0.22));
      pullVelRef.current *= 0.25;
    };

    paint();
    window.addEventListener('scroll', onScroll, { passive: true });
    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.cancelAnimationFrame(rafRef.current);
      pullRef.current = 0;
      pullVelRef.current = 0;
      bar.style.setProperty('--bar-scale', '1');
    };
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div ref={barRef} className='sector-lower-third' data-sector-bar='true'>
      <div className='sector-lower-third__inner'>
        <div className='sector-lower-third__copy'>
          <span className='sector-lower-third__name'>{name}</span>
          <span key={labelKey} className='sector-lower-third__chapter'>
            {shownLabel}
          </span>
        </div>
        <ResumeDownload className='sector-lower-third__resume' />
      </div>
    </div>,
    document.body
  );
}
