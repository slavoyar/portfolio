import { useTranslations } from 'next-intl';

const jobNames = ['metran', 'infowise', 'baltInfoCom', 'metran0'] as const;

export default function WorkExperience() {
  const t = useTranslations();

  return (
    <section className='section-block' aria-labelledby='work-experience-heading'>
      <h2 id='work-experience-heading' className='section-heading'>
        {t('work-experience.title')}
      </h2>

      <ol className='flex flex-col'>
        {jobNames.map((job, index) => {
          const description = t(`work-experience.${job}.description`);

          return (
            <li
              key={job}
              className={`grid gap-2 py-[var(--space-entry)] sm:grid-cols-[minmax(9rem,11rem)_1fr] sm:gap-x-10 sm:gap-y-1 ${
                index > 0 ? 'border-divider border-t' : ''
              }`}
            >
              <p className='text-meta sm:pt-1'>{t(`work-experience.${job}.period`)}</p>
              <div>
                <h3 className='font-display text-subheading font-semibold leading-snug text-ink'>
                  {t(`work-experience.${job}.name`)}
                </h3>
                <p className='text-caption mt-1'>{t(`work-experience.${job}.position`)}</p>
                {description ? <p className='mt-3'>{description}</p> : null}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
