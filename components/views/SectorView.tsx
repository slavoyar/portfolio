'use client';

import Image from 'next/image';
import { type CSSProperties, useEffect, useMemo, useState } from 'react';

import photo from '@/assets/main.webp';
import GlowCursor from '@/components/effects/GlowCursor';
import { useActiveChapter } from '@/hooks/useActiveChapter';
import { useInViewChapters } from '@/hooks/useInViewChapters';
import { usePortfolioContent } from '@/hooks/usePortfolioContent';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import {
  CHAPTER_FIELDS,
  CHAPTER_IDS,
  type ChapterId,
  JOB_TAGS,
  PROJECT_PALETTES,
  type SectorVariant,
  yearFromPeriod,
} from '@/lib/portfolio';

import { ContactBlock } from './ContactBlock';
import { PixelPhoto } from './PixelPhoto';
import { SectorBackdrop } from './SectorBackdrop';
import { SectorLowerThird } from './SectorLowerThird';
import { ViewChrome } from './ViewChrome';

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
    setCursorGlow(
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches && window.matchMedia('(pointer: fine)').matches
    );
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
            quality='medium'
            intensity={1.15}
            trailWidth={2.6}
            linger={1.25}
            glow={1.05}
            hotspot={0.7}
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
                {withPixel ? (
                  <>
                    <PixelPhoto src={photo.src} alt={content.name} className='sector-stage__photo' resolution={168} />
                    <div className='sector-stage__photo-scan' aria-hidden='true' />
                  </>
                ) : (
                  <Image
                    src={photo}
                    alt={content.name}
                    className='sector-stage__photo'
                    priority
                    fetchPriority='high'
                    unoptimized
                  />
                )}
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
              <ContactBlock className='sector-stage__contacts' />
              <div className='sector-stage__actions'>
                <button type='button' className='sector-stage__cta' onClick={() => scrollToChapter('metran')}>
                  {content.workTitle} →
                </button>
              </div>
            </div>
          </div>
        </section>

        {content.jobs.map((job, index) => (
          <section
            key={job.id}
            id={`chapter-${job.id}`}
            className={stageClass(job.id)}
            style={stageStyle(job.id)}
            aria-labelledby={`sector-job-${job.id}`}
          >
            <SectorBackdrop pattern={CHAPTER_FIELDS[job.id].pattern} />
            <div className='sector-stage__split'>
              <div className='sector-stage__aside'>
                <p className='sector-stage__index'>
                  {String(index + 2).padStart(2, '0')} / {total}
                </p>
                <p className='sector-stage__giant' aria-hidden='true'>
                  {yearFromPeriod(job.period)}
                </p>
                <ul className='sector-stage__tags'>
                  {JOB_TAGS[job.id].map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 id={`sector-job-${job.id}`}>{job.name}</h2>
                <p className='sector-stage__role'>{job.position}</p>
                <p className='sector-stage__period'>{job.period}</p>
                <p className='sector-stage__body'>{job.description}</p>
              </div>
            </div>
          </section>
        ))}

        <section
          id='chapter-projects'
          className={stageClass('projects')}
          style={stageStyle('projects')}
          aria-labelledby='sector-projects-title'
        >
          <SectorBackdrop pattern={CHAPTER_FIELDS.projects.pattern} />
          <p className='sector-stage__index'>06 / {total}</p>
          <h2 id='sector-projects-title'>{content.projectsTitle}</h2>
          <ul className='sector-stage__project-grid'>
            {content.projects.map((project) => {
              const palette = PROJECT_PALETTES[project.id];
              return (
                <li key={project.id} className='sector-project'>
                  <div
                    className='sector-project__plate'
                    style={{ background: palette.bg, color: palette.ink }}
                    aria-hidden='true'
                  >
                    <span>{palette.mark}</span>
                    <div className='sector-project__scan' />
                  </div>
                  <div className='sector-project__body'>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className='sector-stage__links'>
                      <a href={project.url} target='_blank' rel='noopener noreferrer'>
                        {content.viewProject}
                        <span className='sr-only'> ({content.opensNewTab})</span>
                      </a>
                      {project.github ? (
                        <a href={project.github} target='_blank' rel='noopener noreferrer'>
                          {content.viewGithub}
                          <span className='sr-only'> ({content.opensNewTab})</span>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section
          id='chapter-education'
          className={stageClass('education')}
          style={stageStyle('education')}
          aria-labelledby='sector-education-title'
        >
          <SectorBackdrop pattern={CHAPTER_FIELDS.education.pattern} />
          <div className='sector-stage__split'>
            <div className='sector-stage__aside'>
              <p className='sector-stage__index'>07 / {total}</p>
              <p className='sector-stage__giant' aria-hidden='true'>
                {content.education.year}
              </p>
            </div>
            <div>
              <h2 id='sector-education-title'>{content.educationTitle}</h2>
              <h3>{content.education.degree}</h3>
              <p className='sector-stage__role'>{content.education.school}</p>
              <p className='sector-stage__period'>{content.education.year}</p>
              <ContactBlock className='sector-stage__contacts' />
            </div>
          </div>
        </section>

        <section
          id='chapter-skills'
          className={stageClass('skills')}
          style={stageStyle('skills')}
          aria-labelledby='sector-skills-title'
        >
          <SectorBackdrop pattern={CHAPTER_FIELDS.skills.pattern} />
          <div className='sector-stage__split sector-stage__split--skills'>
            <div className='sector-stage__aside'>
              <p className='sector-stage__index'>08 / {total}</p>
              <p className='sector-stage__giant' aria-hidden='true'>
                {content.skillAside}
              </p>
            </div>
            <div className='sector-stage__skillboard'>
              <h2 id='sector-skills-title'>{content.skillsTitle}</h2>
              <div className='sector-stage__skill-groups'>
                {content.skillGroups.map((group) => (
                  <div key={group.id} className='sector-skill-group'>
                    <h3>{group.label}</h3>
                    <ul>
                      {group.items.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SectorLowerThird name={content.name} chapterLabel={barLabel} />
    </div>
  );
}
