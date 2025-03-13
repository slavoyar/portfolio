/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./components/**/*.{vue,js,ts}', './app.vue'],
  safeList: ['dark'],
  plugins: [],
};
