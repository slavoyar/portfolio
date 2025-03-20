import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss', '@stefanobartoletti/nuxt-social-share', '@nuxt/image', '@nuxtjs/i18n'],
  compatibilityDate: '2025-03-10',
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'ru',
    locales: [
      {
        name: 'English',
        code: 'en',
      },
      {
        name: 'Русский',
        code: 'ru',
      },
    ],
    vueI18n: './i18n.config.ts',
  },
});
