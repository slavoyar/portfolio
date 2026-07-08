'use client';

import { useLocale, useTranslations } from 'next-intl';

import { usePathname, useRouter } from '@/i18n/navigation';

export function LanguageToggleButton() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    router.replace(pathname, { locale: locale === 'en' ? 'ru' : 'en' });
  };

  return (
    <button
      className='locale-toggle'
      type='button'
      title={t('change-language')}
      aria-label={t('change-language')}
      onClick={toggleLocale}
    >
      {locale}
    </button>
  );
}
