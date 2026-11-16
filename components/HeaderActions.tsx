'use client';

import { useSearchParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { usePathname, useRouter } from '@/i18n/navigation';

export function LanguageToggleButton() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const toggleLocale = () => {
    const query = Object.fromEntries(searchParams.entries());
    router.replace({ pathname, query }, { locale: locale === 'en' ? 'ru' : 'en' });
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
