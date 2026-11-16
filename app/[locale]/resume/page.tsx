import { getTranslations } from 'next-intl/server';
import { Suspense } from 'react';

import { ResumeDocument } from '@/components/views/ResumeDocument';

export async function generateMetadata() {
  const t = await getTranslations('resume');
  return {
    title: t('title'),
  };
}

export default async function ResumePage() {
  const t = await getTranslations('resume');

  return (
    <main className='resume-page'>
      <p className='resume-page__hint no-print'>{t('print-hint')}</p>
      <Suspense fallback={null}>
        <ResumeDocument />
      </Suspense>
    </main>
  );
}
