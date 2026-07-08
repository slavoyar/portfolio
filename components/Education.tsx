import { useTranslations } from 'next-intl';

export default function Education() {
  const t = useTranslations();

  return (
    <section className='section-block' aria-labelledby='education-heading'>
      <h2 id='education-heading' className='section-heading'>
        {t('education.title')}
      </h2>

      <div className='grid gap-2 py-[var(--space-entry)] sm:grid-cols-[minmax(9rem,11rem)_1fr] sm:gap-x-10 sm:gap-y-1'>
        <p className='text-meta sm:pt-1'>{t('education.year')}</p>
        <div>
          <h3 className='font-display text-subheading font-semibold leading-snug text-ink'>{t('education.degree')}</h3>
          <p className='text-caption mt-1'>{t('education.school')}</p>
        </div>
      </div>
    </section>
  );
}
