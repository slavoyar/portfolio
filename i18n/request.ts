import { getRequestConfig } from 'next-intl/server';

import en from './locales/en.json';
import ru from './locales/ru.json';
import { routing } from './routing';

const messages = { en, ru };

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as 'en' | 'ru')) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: messages[locale as 'en' | 'ru'],
  };
});
