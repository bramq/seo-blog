import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#ededed',
        muted: '#888888',
        accent: '#3b82f6',
        'accent-hover': '#60a5fa',
        card: '#141414',
        border: '#262626',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#d4d4d4',
            '--tw-prose-headings': '#ededed',
            '--tw-prose-links': '#3b82f6',
            '--tw-prose-bold': '#ededed',
            '--tw-prose-code': '#ededed',
            '--tw-prose-pre-bg': '#141414',
            '--tw-prose-pre-code': '#d4d4d4',
            '--tw-prose-quotes': '#a3a3a3',
            '--tw-prose-quote-borders': '#3b82f6',
            '--tw-prose-hr': '#262626',
            '--tw-prose-th-borders': '#262626',
            '--tw-prose-td-borders': '#1a1a1a',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
