'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { ContactLinks } from '@/components/ContactLinks';
import { usePortfolioContent } from '@/hooks/usePortfolioContent';

export function ResumeDocument() {
  const content = usePortfolioContent();
  const searchParams = useSearchParams();
  const shouldPrint = searchParams.get('print') === '1';

  useEffect(() => {
    if (!shouldPrint) {
      return;
    }

    const timer = window.setTimeout(() => {
      window.print();
    }, 400);

    return () => window.clearTimeout(timer);
  }, [shouldPrint]);

  return (
    <article className='resume-doc'>
      <header className='resume-doc__header'>
        <div>
          <h1>{content.name}</h1>
          <p className='resume-doc__role'>{content.role}</p>
          <p className='resume-doc__meta'>{content.location}</p>
        </div>
        <p className='resume-doc__hint no-print'>{content.downloadResume}</p>
      </header>

      <p className='resume-doc__bio'>{content.description}</p>
      <ContactLinks />

      <section>
        <h2>{content.workTitle}</h2>
        {content.jobs.map((job) => (
          <div key={job.id} className='resume-doc__entry'>
            <div className='resume-doc__entry-head'>
              <h3>{job.name}</h3>
              <p>{job.period}</p>
            </div>
            <p className='resume-doc__meta'>{job.position}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>{content.projectsTitle}</h2>
        {content.projects.map((project) => (
          <div key={project.id} className='resume-doc__entry'>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p className='resume-doc__meta'>
              {project.url}
              {project.github ? ` · ${project.github}` : ''}
            </p>
          </div>
        ))}
      </section>

      <section>
        <h2>{content.skillsTitle}</h2>
        <p>{content.technologies.join(' · ')}</p>
      </section>

      <section>
        <h2>{content.educationTitle}</h2>
        <div className='resume-doc__entry'>
          <div className='resume-doc__entry-head'>
            <h3>{content.education.degree}</h3>
            <p>{content.education.year}</p>
          </div>
          <p className='resume-doc__meta'>{content.education.school}</p>
        </div>
      </section>
    </article>
  );
}
