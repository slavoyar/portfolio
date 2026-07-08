/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        ink: 'var(--color-ink)',
        copy: 'var(--color-body)',
        muted: 'var(--color-muted)',
        faint: 'var(--color-faint)',
        border: 'var(--color-border)',
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: [
          'var(--text-display)',
          { lineHeight: 'var(--leading-display)', letterSpacing: 'var(--tracking-display)' },
        ],
        heading: ['var(--text-heading)', { lineHeight: 'var(--leading-heading)' }],
        subheading: ['var(--text-subheading)', { lineHeight: 'var(--leading-heading)' }],
        body: ['var(--text-body)', { lineHeight: 'var(--leading-body)' }],
        'body-lg': ['var(--text-body-lg)', { lineHeight: 'var(--leading-body)' }],
      },
    },
  },
  plugins: [],
};
