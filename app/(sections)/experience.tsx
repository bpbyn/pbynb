'use client';

import { Icons } from '@/components/icons';
import ScrambleText from '@/motion-components/scramble-text';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Experience() {
  const scaleRef = useRef(null);
  const exitAnimationRef = useRef(null);

  const { scrollYProgress: entryScrollProgress } = useScroll({
    target: scaleRef,
    offset: ['start start', 'end start'],
  });

  const { scrollYProgress: exitScrollProgress } = useScroll({
    target: exitAnimationRef,
    offset: ['end end', 'end end'],
  });

  const { scrollYProgress: scrollScaleProgress } = useScroll({
    target: exitAnimationRef,
    offset: ['start start', 'end end'],
  });

  const smoothEntryScale = useSpring(entryScrollProgress, {
    stiffness: 500,
    damping: 40,
    mass: 0.3,
  });

  const smoothExitScale = useSpring(exitScrollProgress, {
    stiffness: 500,
    damping: 40,
    mass: 0.3,
  });

  const smoothButtonScale = useSpring(scrollScaleProgress, {
    stiffness: 500,
    damping: 40,
    mass: 0.3,
  });

  const scale = useTransform(smoothEntryScale, [0, 1], [0, 1]);
  const scaleExit = useTransform(smoothExitScale, [0, 1], [1, 0]);
  const scaleButton = useTransform(smoothButtonScale, [0, 1], [0, 1]);

  const companies = [
    'ing',
    'asurion',
    'dxc technology',
    'willis towers watson',
    'reed elsevier philippines',
  ];

  return (
    <section
      className="relative min-h-screen bg-background_second px-16 py-8 md:mb-[-100svh]"
      id="experience"
    >
      <div className="relative z-20 flex items-end justify-between" ref={scaleRef}>
        <div>
          <span className="font-mono text-xl font-light text-muted">
            <ScrambleText className="px-0">{`// WHERE I'VE BEEN?`}</ScrambleText>
          </span>
          <h3 className="max-w-md text-8xl">Professional Timeline</h3>
        </div>
        <div className="flex justify-between gap-8">
          <div className="min-w-fit font-mono text-lg font-light text-muted">(EXPERIENCE)</div>
          <div className="max-w-sm">
            Every project, role, and collaboration has shaped the way I think, create, and solve
            problems.
          </div>
        </div>
      </div>
      <div className="relative h-full w-full" ref={exitAnimationRef}>
        <motion.div className="fixed right-20 top-24 z-20 w-full">
          <div className="flex items-center justify-end gap-4">
            <motion.div style={{ scale: scaleExit }}>
              <motion.div
                className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-slate-500/35 px-6 py-4 font-mono text-lg shadow-md"
                style={{ scale }}
              >
                <span>RESUME</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
                  ↓
                </span>
              </motion.div>
            </motion.div>
            <motion.div style={{ scale: scaleExit }}>
              <motion.div className="relative" style={{ scale }}>
                <div className="group">
                  {/* <figure className="relative overflow-hidden rounded-full bg-slate-500/35 p-2 shadow-md group-hover:bg-accent">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out group-hover:-translate-y-6">
                      <Icons.arrow45deg className="h-7 w-7 -rotate-45" />
                    </div>
                    <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
                      
                    </svg>
                  </figure> */}
                  <figure className="relative overflow-hidden">
                    <span className="ease-expo absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out group-hover:-translate-y-[-100px]">
                      <Icons.arrow45deg className="h-7 w-7 -rotate-45" />
                    </span>
                    <span className="ease-expo absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[-100px] transition-all duration-1000 ease-in-out group-hover:-translate-y-1/2">
                      <Icons.arrow45deg className="h-7 w-7 -rotate-45" />
                    </span>
                    <svg
                      id="progress"
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      className="-rotate-90"
                    >
                      <circle cx="50" cy="50" r="30" pathLength="1" className="fill-slate-500/35" />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="30"
                        pathLength="1"
                        className="fill-none stroke-accent stroke-[0.2rem]"
                        style={{ pathLength: scaleButton }}
                      />
                    </svg>
                  </figure>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        {companies.map((c, i) => (
          <div className="sticky top-0 h-[100svh]" key={`company-${c}-${i}`}>
            <div
              className="relative border-t border-t-muted bg-background_second p-8"
              style={{
                top: `calc(20vh + ${5.75 * i}em)`,
                marginBottom: `${5.75 * (companies.length - i)}em`,
              }}
            >
              <div className="flex justify-between">
                <span className="text-4xl font-semibold">{companies[i]}</span>
                <span className="text-xl font-light">2024 - Present</span>
              </div>
              <div className="flex items-center justify-between py-8">
                <span>Web Engineer</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellat laudantium
                  illum quia magni, doloribus nemo neque commodi! Quis id iure dolor doloremque
                  veritatis consequatur ullam sit totam amet numquam.
                </p>
                <span>Javscript</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="sticky top-0 h-[100svh]">
        <div
          className="relative border-t border-t-muted bg-background_second p-8"
          style={{
            top: `calc(8vh + ${5.75 * companies.length}em)`,
            marginBottom: '0em',
          }}
        ></div>
      </div>

      <div className="absolute bottom-[20%] left-24 z-10 h-96 w-1/5 bg-accent opacity-80 blur-[300px]" />
      <div className="absolute right-0 top-0 z-10 h-1/2 w-1/2 bg-accent blur-[400px]" />
    </section>
  );
}
