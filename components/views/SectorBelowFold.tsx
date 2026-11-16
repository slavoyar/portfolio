'use client';

import { type CSSProperties } from 'react';

import { ContactLinks } from '@/components/ContactLinks';
import type { PortfolioContent } from '@/hooks/usePortfolioContent';
import { CHAPTER_FIELDS, type ChapterId, JOB_TAGS, PROJECT_PALETTES } from '@/lib/portfolio';

import { SectorBackdrop } from './SectorBackdrop';

type SectorBelowFoldProps = {
  total: string;
  content: Pick<
    PortfolioContent,
    | 'jobs'
    | 'projects'
    | 'education'
    | 'educationTitle'
    | 'projectsTitle'
    | 'skillsTitle'
    | 'skillAside'
    | 'skillGroups'
    | 'viewProject'
    | 'viewGithub'
    | 'opensNewTab'
  >;
  stageClass: (id: string) => string;
  stageStyle: (id: ChapterId) => CSSProperties;
  yearFromPeriod: (period: string) => string;
};

export function SectorBelowFold({ total, content, stageClass, stageStyle, yearFromPeriod }: SectorBelowFoldProps) {
  return (
    <>
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
            <div className='sector-stage__contacts'>
              <ContactLinks />
            </div>
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
    </>
  );
}
