import { useTranslations } from 'next-intl';

const projects = ['chinese-laoshi', 'lulight'] as const;

export default function SideProjects() {
  const t = useTranslations();

  return (
    <section className='section-block' aria-labelledby='projects-heading'>
      <h2 id='projects-heading' className='section-heading'>
        {t('projects.title')}
      </h2>

      <ul className='flex flex-col'>
        {projects.map((project, index) => (
          <li
            key={project}
            className={`flex flex-col gap-4 py-[var(--space-entry)] sm:flex-row sm:items-start sm:justify-between sm:gap-12 ${
              index > 0 ? 'border-divider border-t' : ''
            }`}
          >
            <div className='min-w-0 flex-1'>
              <h3 className='font-display text-subheading font-semibold text-ink'>{t(`projects.${project}.name`)}</h3>
              <p className='text-prose mt-2'>{t(`projects.${project}.description`)}</p>
            </div>
            <div className='flex shrink-0 flex-wrap gap-x-6 gap-y-2 sm:pt-1'>
              <a href={t(`projects.${project}.url`)} className='text-link' target='_blank' rel='noopener noreferrer'>
                {t('projects.view-project')}
              </a>
              {t.has(`projects.${project}.github`) && (
                <a
                  href={t(`projects.${project}.github`)}
                  className='text-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {t('projects.view-github')}
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
