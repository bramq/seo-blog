import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6',
        foreground: '#1D1D1B',
        muted: '#6B6B6B',
        accent: '#D97757',
        'accent-hover': '#C4654A',
        card: '#FFFFFF',
        border: '#E6E4DD',
        'code-bg': '#141413',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
      },
      borderRadius: {
        DEFAULT: '4px',
        md: '4px',
        lg: '6px',
        full: '9999px',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#1D1D1B',
            '--tw-prose-headings': '#1D1D1B',
            '--tw-prose-links': '#D97757',
            '--tw-prose-bold': '#1D1D1B',
            '--tw-prose-code': '#1D1D1B',
            '--tw-prose-pre-bg': '#141413',
            '--tw-prose-pre-code': '#d4d4d4',
            '--tw-prose-quotes': '#6B6B6B',
            '--tw-prose-quote-borders': '#D97757',
            '--tw-prose-hr': '#E6E4DD',
            '--tw-prose-th-borders': '#E6E4DD',
            '--tw-prose-td-borders': '#F0EFEB',
            'h1, h2, h3, h4': {
              fontFamily: 'var(--font-lora), Georgia, serif',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
