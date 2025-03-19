import type { I18nOptions } from 'vue-i18n';

import en from './locales/en.json';
import ru from './locales/ru.json';

type MessageSchema = typeof en;
type Config = I18nOptions<{ message: MessageSchema }, 'en' | 'ru'>;

export default defineI18nConfig<Config>(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    ru,
  },
}));
