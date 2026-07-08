'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { ContactLinks } from './ContactLinks';
import { LanguageToggleButton } from './HeaderActions';

export default function MainInfo() {
  const t = useTranslations();

  return (
    <header className='header-block'>
      <div className='header-identity'>
        <div className='header-identity__masthead'>
          <h1 className='min-w-0 flex-1 text-display font-bold'>{t('name')}</h1>
          <LanguageToggleButton />
        </div>
        <p className='text-role mt-2'>{t('role')}</p>
        <p className='text-caption mt-1'>{t('location')}</p>
        <ContactLinks />
      </div>

      <div className='grid items-start gap-6 md:grid-cols-[minmax(9rem,12rem)_1fr] md:gap-10'>
        <Image
          src='/main.jpg'
          alt={t('name')}
          width={192}
          height={192}
          className='aspect-square max-h-48 w-full max-w-48 rounded object-cover ring-1 ring-border'
          priority
        />
        <p className='header-intro__bio'>{t('description')}</p>
      </div>
    </header>
  );
}
