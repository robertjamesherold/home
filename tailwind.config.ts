import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [ 'var(--font-sans)' ],
        serif: [ 'var(--font-serif)' ],
        mono: [ 'var(--font-mono)' ],
      },
      colors: {
        primary: {
          50: 'var(--color-purple-50)',
          100: 'var(--color-purple-100)',
          200: 'var(--color-purple-200)',
          300: 'var(--color-purple-300)',
          400: 'var(--color-purple-400)',
          500: 'var(--color-purple-500)',
          600: 'var(--color-purple-600)',
          700: 'var(--color-purple-700)',
          800: 'var(--color-purple-800)',
          900: 'var(--color-purple-900)',
          950: 'var(--color-purple-950)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
