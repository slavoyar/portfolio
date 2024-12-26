import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@stefanobartoletti/nuxt-social-share',
    '@nuxt/image'
  ],
  compatibilityDate: '2024-12-25'
})
