import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
