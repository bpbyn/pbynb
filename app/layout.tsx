import Navbar from '@/components/navbar';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { DM_Mono, DM_Serif_Display, Poppins } from 'next/font/google';

import Contact from './(sections)/contact';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: '--font-dm-serif-display',
  subsets: ['latin'],
  weight: '400',
});

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  title: 'Brian Punongbayan',
  description: 'My latest portfolio.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `relative antialiased`,
          poppins.variable,
          dmSerifDisplay.variable,
          dmMono.variable
        )}
        suppressHydrationWarning
      >
        <svg className="pointer-events-none absolute cursor-none">
          <filter id="grainy">
            <feTurbulence type="turbulence" baseFrequency="0.5"></feTurbulence>
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
          </filter>
        </svg>
        <div className="absolute bottom-0 left-1/2 -z-20 h-1/2 w-full -translate-x-[50%] rounded-full bg-accent blur-[550px]" />
        <Navbar />
        <main>{children}</main>
        <Contact />
      </body>
    </html>
  );
}
