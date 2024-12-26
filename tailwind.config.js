// tailwind.config.js
import { defineConfig } from 'tailwindcss'

export default defineConfig({
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  safeList: ['dark'],
  plugins: []
})
