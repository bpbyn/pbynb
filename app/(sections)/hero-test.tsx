'use client';

import MaskText from '@/motion-components/mask-text';
import { motion } from 'motion/react';
import React from 'react';

export default function HeroTest() {
  const about = [
    'I’m a Full Stack Developer specializing in intuitive front-end development.',
    'I craft pixel-perfect user interfaces that bring ideas to life.',
  ];

  return (
    <section className="relative h-svh min-h-svh px-8 pb-8 lg:px-16 xl:px-36" id="home">
      {/* gradients */}
      <div className="absolute bottom-16 left-32 -z-10 h-96 w-1/5 bg-accent opacity-80 blur-[200px]" />
      <div className="absolute right-1/3 top-1/3 -z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent blur-[150px]" />
      <div className="absolute bottom-32 right-14 -z-10 h-1/2 w-1/2 bg-accent blur-[350px]" />
      {/* gradients */}

      <div className="grid h-full grid-cols-[1fr_auto] lg:grid-cols-2">
        <div className="flex h-full flex-col items-start justify-end gap-8 lg:gap-24 2xl:gap-32">
          <div className="relative font-serif text-base-4xl leading-none tracking-tight text-foreground sm:text-base-6xl sm:leading-[4rem] lg:text-heading lg:leading-[6.5rem] 2xl:text-heading-md"></div>
          <div className="grid grid-cols-2 place-items-center gap-4 overflow-hidden sm:gap-8 md:hidden">
            <div className="text-base-xs font-light leading-relaxed text-muted sm:w-auto sm:text-base">
              {about.map((l, i) => (
                // <MaskText key={i}>{l}&nbsp;</MaskText>
                <div className="overflow-hidden will-change-transform" key={i}>
                  <motion.div
                    initial={{
                      y: '150%',
                    }}
                    animate={{ y: '0' }}
                    transition={{
                      duration: 2,
                      ease: [0.76, 0, 0.1, 1],
                    }}
                  >
                    {l + ' '}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden text-base-xs font-light text-muted sm:w-auto md:block xl:text-base">
            {about.map((l, i) => (
              <MaskText key={i} className="will-change-transform">
                {l}&nbsp;
              </MaskText>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
