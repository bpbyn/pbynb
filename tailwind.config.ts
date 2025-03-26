import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        md2: '872px',
      },
      fontSize: {
        mono: 'clamp(0.6rem, 0.5143rem + 0.3571vi, 0.9rem)',
        'base-small': 'clamp(0.875rem, 0.5393rem + 0.5786vi, 1rem)',
        base: 'clamp(1rem, 0.9286rem + 0.3571vi, 1.25rem)',
        'base-large': 'clamp(1rem, 0.8571rem + 0.7143vi, 1.5rem)',
        'heading-6': 'clamp(1rem, 0.928rem + 0.36vw, 1.25rem)',
        'heading-5': 'clamp(1.13rem, 1.004rem + 0.63vw, 1.57rem)',
        'heading-4': 'clamp(1.25rem, 1.0359rem + 1.0707vi, 1.9995rem)',
        'heading-3': 'clamp(1.5625rem, 1.2474rem + 1.5755vi, 2.6653rem)',
        'heading-2': 'clamp(1.9531rem, 1.496rem + 2.2854vi, 3.5529rem)',
        'heading-1': 'clamp(3.5rem, 2.3571rem + 5.5143vi, 10.5rem)',
        'heading-display': 'clamp(4rem, 1.203rem + 10.0714vw, 10.25rem)',
        'heading-body': 'clamp(1rem, 0.6071rem + 1.0143vi, 2.25rem)',
        'heading-1-alt': 'clamp(3rem, 2.25rem + 3.75vi, 5.625rem)',
        'text-menu': 'clamp(2.5rem, 1.107rem + 3.5714vi, 4.5rem)',
      },
      colors: {
        background: 'var(--background)',
        background_second: 'var(--background-second)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        muted: 'var(--muted)',
      },
      fontFamily: {
        mono: ['DM Mono', 'monospace'],
        serif: ['DM Serif Display', 'serif'],
      },
      animation: {
        blob: 'blob 15s ease-in-out infinite',
        round: 'round 20s linear infinite',
        round_reverse: 'round_reverse 20s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px)' },
          '33%': { transform: 'translate(-100px, -40px)' },
          '66%': { transform: 'translate(100px, 20px)' },
          '100%': { transform: 'translate(0px, 0px)' },
        },
        round: {
          '100%': { transform: 'rotate(360deg)' },
        },
        round_reverse: {
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
