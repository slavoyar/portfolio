'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { type CSSProperties, useEffect, useMemo, useState } from 'react';

import photo from '@/assets/main.webp';
import { ContactLinks } from '@/components/ContactLinks';
import { useActiveChapter } from '@/hooks/useActiveChapter';
import { useInViewChapters } from '@/hooks/useInViewChapters';
import { usePortfolioContent } from '@/hooks/usePortfolioContent';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { CHAPTER_FIELDS, CHAPTER_IDS, type ChapterId, type SectorVariant, yearFromPeriod } from '@/lib/portfolio';

import { SectorBackdrop } from './SectorBackdrop';
import { SectorLowerThird } from './SectorLowerThird';
import { ViewChrome } from './ViewChrome';

const GlowCursor = dynamic(() => import('@/components/effects/GlowCursor'), { ssr: false });
const SectorBelowFold = dynamic(() => import('./SectorBelowFold').then((m) => ({ default: m.SectorBelowFold })), {
  loading: () => null,
});

type SectorViewProps = {
  variant?: SectorVariant;
};

function labelForChapter(id: string, content: ReturnType<typeof usePortfolioContent>) {
  if (id === 'intro') {
    return content.role;
  }
  if (id === 'projects') {
    return content.projectsTitle;
  }
  if (id === 'skills') {
    return content.skillsTitle;
  }
  if (id === 'education') {
    return content.educationTitle;
  }
  return content.jobs.find((job) => job.id === id)?.name ?? content.role;
}

function scrollToChapter(id: string) {
  const el = document.getElementById(`chapter-${id}`);
  if (!el) {
    return;
  }
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
}

export function SectorView({ variant = 'base' }: SectorViewProps) {
  const content = usePortfolioContent();
  const chapterIds = useMemo(() => [...CHAPTER_IDS], []);
  const active = useActiveChapter(chapterIds);
  const seen = useInViewChapters(chapterIds);
  const progress = useScrollProgress();
  const withPixel = variant === 'pixel';
  const progressPct = Math.round(progress * 100);
  const [barLabel, setBarLabel] = useState(content.role);
  const [cursorGlow, setCursorGlow] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (reduced || !fine) {
      return;
    }

    let cancelled = false;
    const enable = () => {
      if (!cancelled) {
        setCursorGlow(true);
      }
    };

    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(enable, { timeout: 2500 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(id);
      };
    }

    const id = window.setTimeout(enable, 1200);
    return () => {
      cancelled = true;
      window.clearTimeout(id);
    };
  }, []);

  useEffect(() => {
    setBarLabel(labelForChapter(active, content));
  }, [active, content]);

  const stageClass = (id: string) =>
    ['sector-stage', seen[id] ? 'is-in' : '', active === id ? 'is-live' : ''].filter(Boolean).join(' ');

  const stageStyle = (id: ChapterId): CSSProperties =>
    ({
      '--stage-wash': CHAPTER_FIELDS[id].wash,
    }) as CSSProperties;

  const total = String(CHAPTER_IDS.length).padStart(2, '0');

  return (
    <div className={['sector-view', withPixel ? 'sector-view--pixel' : ''].filter(Boolean).join(' ')}>
      {cursorGlow ? (
        <div className='sector-glow-layer' aria-hidden='true'>
          <GlowCursor
            color='#d2ff00'
            secondaryColor='#6b8f00'
            theme='dark'
            quality='low'
            intensity={1.05}
            trailWidth={2.4}
            linger={1.1}
            glow={0.95}
            hotspot={0.65}
            followSpeed={0.55}
            clickBurst={false}
            maxDevicePixelRatio={1.25}
            enabled
          />
        </div>
      ) : null}

      <a href='#chapter-intro' className='sector-skip'>
        {content.skipToContent}
      </a>

      <div
        className='sector-progress'
        role='progressbar'
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progressPct}
        aria-label={content.readingProgress}
      >
        <div className='sector-progress__bar' style={{ transform: `scaleX(${progress})` }} />
      </div>

      <ViewChrome showResume={false} showClock />

      <aside className='sector-view__rail' aria-label={content.chapters.work}>
        <ol>
          {CHAPTER_IDS.map((id, index) => {
            const label =
              id === 'intro'
                ? content.chapters.intro
                : id === 'projects'
                  ? content.chapters.projects
                  : id === 'skills'
                    ? content.chapters.skills
                    : id === 'education'
                      ? content.chapters.education
                      : (content.jobs.find((job) => job.id === id)?.name ?? id);

            return (
              <li key={id}>
                <button
                  type='button'
                  className={['sector-view__rail-btn', active === id ? 'is-active' : ''].filter(Boolean).join(' ')}
                  aria-current={active === id ? 'true' : undefined}
                  onClick={() => scrollToChapter(id)}
                >
                  <span className='sector-view__rail-index'>{String(index + 1).padStart(2, '0')}</span>
                  <span className='sector-view__rail-mark' aria-hidden='true' />
                  <span>{label}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </aside>

      <main className='sector-view__stages'>
        <section
          id='chapter-intro'
          className={stageClass('intro')}
          style={stageStyle('intro')}
          aria-labelledby='sector-intro-title'
        >
          <SectorBackdrop pattern={CHAPTER_FIELDS.intro.pattern} />
          <div className='sector-stage__speed' aria-hidden='true'>
            <span />
            <span />
            <span />
          </div>
          <div className='sector-stage__frame'>
            <div
              className={['sector-stage__media', withPixel ? 'sector-stage__media--pixel' : '']
                .filter(Boolean)
                .join(' ')}
            >
              <div className='sector-stage__photo-frame'>
                <Image
                  src={photo}
                  alt={content.name}
                  className='sector-stage__photo'
                  priority
                  fetchPriority='high'
                  sizes='(max-width: 768px) 72vw, 384px'
                />
                {withPixel ? <div className='sector-stage__photo-scan' aria-hidden='true' /> : null}
              </div>
              <div className='sector-stage__photo-glow' aria-hidden='true' />
              <div className='sector-stage__stats' aria-hidden='true'>
                <span>4+ YRS</span>
                <span>EN / RU</span>
                <span>REMOTE</span>
              </div>
            </div>
            <div className='sector-stage__copy'>
              <p className='sector-stage__index'>01 / {total}</p>
              <h1 id='sector-intro-title'>{content.name}</h1>
              <p className='sector-stage__role'>{content.role}</p>
              <p className='sector-stage__meta'>{content.location}</p>
              <p className='sector-stage__bio'>{content.description}</p>
              <div className='sector-stage__contacts'>
                <ContactLinks />
              </div>
              <div className='sector-stage__actions'>
                <button type='button' className='sector-stage__cta' onClick={() => scrollToChapter('metran')}>
                  {content.workTitle} →
                </button>
              </div>
            </div>
          </div>
        </section>

        <SectorBelowFold
          total={total}
          content={content}
          stageClass={stageClass}
          stageStyle={stageStyle}
          yearFromPeriod={yearFromPeriod}
        />
      </main>

      <SectorLowerThird name={content.name} chapterLabel={barLabel} />
    </div>
  );
}
