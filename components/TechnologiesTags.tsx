import { useTranslations } from 'next-intl';

import { TECHNOLOGIES } from '@/lib/portfolio';

export default function TechnologiesTags() {
  const t = useTranslations();

  return (
    <section className='section-block' aria-labelledby='technologies-heading'>
      <h2 id='technologies-heading' className='section-heading'>
        {t('technologies')}
      </h2>

      <ul className='grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted sm:grid-cols-3 lg:grid-cols-4'>
        {TECHNOLOGIES.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </section>
  );
}
