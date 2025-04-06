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
        xs: '320px',
        md2: '872px',
      },
      fontSize: {
        mono: 'clamp(0.6rem, 0.5143rem + 0.3571vi, 0.9rem)',
        'base-xs': 'clamp(0.875rem, 0.75rem + 0.3vi, 1rem)', // 14px → 16px
        base: 'clamp(1rem, 0.85rem + 0.35vi, 1.125rem)', // 16px → 18px
        'base-md': 'clamp(1.125rem, 1rem + 0.4vi, 1.25rem)', // 18px → 20px
        'base-lg': 'clamp(1.25rem, 1.1rem + 0.45vi, 1.5rem)', // 20px → 24px
        'base-xl': 'clamp(1.5rem, 1.3rem + 0.6vi, 1.875rem)', // 24px → 30px
        'base-2xl': 'clamp(1.875rem, 1.5rem + 0.75vi, 2.25rem)', // 30px → 36px
        'base-3xl': 'clamp(2.25rem, 1.9rem + 1vi, 3rem)', // 36px → 48px
        'base-4xl': 'clamp(3rem, 2.5rem + 1.25vi, 3.75rem)', // 48px → 60px
        'base-5xl': 'clamp(3.75rem, 3rem + 1.5vi, 4.5rem)', // 60px → 72px
        'base-6xl': 'clamp(4.5rem, 3.75rem + 2vi, 6rem)', // 72px → 96px
        // Heading Sizes (Renamed from `7xl+` to `sm`, `md`, etc.)
        heading: 'clamp(5rem, 4rem + 3.25vi, 7rem)', // 80px → 112px
        'heading-sm': 'clamp(6rem, 5rem + 2.5vi, 7.5rem)', // 96px → 120px
        'heading-md': 'clamp(7.5rem, 6rem + 3vi, 9rem)', // 120px → 144px
        'heading-lg': 'clamp(9rem, 7.2rem + 3.5vi, 10.5rem)', // 144px → 168px
        'heading-xl': 'clamp(10.5rem, 8.4rem + 4vi, 12rem)', // 168px → 192px
        'heading-2xl': 'clamp(12rem, 9.6rem + 4.5vi, 14rem)', // 192px → 224px
        'heading-3xl': 'clamp(14rem, 11.2rem + 5vi, 16rem)', // 224px → 256px
        'heading-4xl': 'clamp(16rem, 12.8rem + 5.5vi, 18.5rem)', // 256px → 296px
        'heading-5xl': 'clamp(18.5rem, 14.8rem + 6vi, 21rem)', // 296px → 336px
        'heading-6xl': 'clamp(21rem, 16.8rem + 6.5vi, 24rem)', // 336px → 384px

        'heading-body': 'clamp(1rem, 0.75rem + 0.5vi, 2rem)',
        // 'heading-6': 'clamp(1.25rem, 1.1rem + 0.6vi, 1.5rem)', // 20px → 24px
        // 'heading-5': 'clamp(1.5rem, 1.3rem + 0.8vi, 1.75rem)', // 24px → 28px
        // 'heading-4': 'clamp(1.75rem, 1.5rem + 1vi, 2rem)', // 28px → 32px
        // 'heading-3': 'clamp(2rem, 1.75rem + 1.2vi, 2.5rem)', // 32px → 40px
        // 'heading-2': 'clamp(2.5rem, 2rem + 1.5vi, 3.25rem)', // 40px → 52px
        // 'heading-1.5': 'clamp(3rem, 2.5rem + 1.75vi, 4rem)', // 48px → 64px
        // 'heading-1': 'clamp(3.5rem, 2.75rem + 2vi, 5rem)', // 56px → 80px
        // 'heading-0': 'clamp(4rem, 3rem + 2.5vi, 6rem)', // 64px → 96px
        // 'heading-display': 'clamp(5rem, 4rem + 3vi, 7rem)', // 80px → 112px
        // 'heading-display-lg': 'clamp(6rem, 4.8rem + 3.5vi, 8.5rem)', // 96px → 136px
        // 'heading-display-xl': 'clamp(7rem, 5.6rem + 4vi, 10rem)', // 112px → 160px
        // 'heading-display-2xl': 'clamp(8rem, 6.4rem + 4.5vi, 12rem)', // 128px → 192px
        // 'heading-display-3xl': 'clamp(9rem, 7.2rem + 5vi, 14rem)', // 144px → 224px
        // 'heading-display-4xl': 'clamp(10rem, 8rem + 5.5vi, 16rem)', // 160px → 256px
        // 'heading-body': 'clamp(1rem, 0.75rem + 0.5vi, 2rem)',
        'text-menu': 'clamp(2.5rem, 1.5rem + 2vi, 4.5rem)',
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
