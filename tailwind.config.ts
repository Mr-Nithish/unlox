import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mp: { max: '37.5rem' },
      ml: { min: '37.5rem', max: '56.25rem' },
      tab: { min: '56.25rem', max: '75rem' },
      lap: { min: '75rem', max: '87.5rem' },
      lapl: { min: '87.5rem', max: '100rem' },
      des: { min: '100rem' },
    },
    extend: {
      fontFamily: {
        strong: ['var(--font-roboto-strong)', 'sans-serif'],
        note: ['var(--font-roboto-note)', 'sans-serif'],
        med: ['var(--font-roboto-med)', 'sans-serif'],
        think: ['var(--font-roboto-think)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
