import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss', '@stefanobartoletti/nuxt-social-share', '@nuxt/image', '@nuxtjs/i18n'],
  compatibilityDate: '2025-03-10',
  app: {
    head: {
      title: 'Yaroslav Zaprudskii',
      meta: [{ hid: 'description', name: 'description', content: 'Yaroslav Zaprudskii Portfolio Website' }],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
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
