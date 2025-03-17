import { defineI18nConfig } from '@nuxtjs/i18n/dist/runtime/composables';

import en from './locales/en.json';
import ru from './locales/ru.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    ru,
  },
}));
