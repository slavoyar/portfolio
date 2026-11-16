'use client';

import { useTranslations } from 'next-intl';

type ResumeDownloadProps = {
  className?: string;
};

export function ResumeDownload({ className }: ResumeDownloadProps) {
  const t = useTranslations();

  return (
    <a href='/resume?print=1' className={className} target='_blank' rel='noopener noreferrer'>
      <span className='resume-download__full'>{t('download-resume')}</span>
      <span className='resume-download__short'>{t('download-resume-short')}</span>
      <span className='sr-only'> ({t('a11y.opens-new-tab')})</span>
    </a>
  );
}
