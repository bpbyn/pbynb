'use client';

import { Icons } from '@/components/icons';
import { staticData as data } from '@/lib/constants';
import LinkToAction from '@/motion-components/link-to-action';
import ScrambleText from '@/motion-components/scramble-text';
import StaggerText from '@/motion-components/stagger-text';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Experience() {
  const scaleRef = useRef(null);
  const exitAnimationRef = useRef(null);
  const buttonProgressRef = useRef(null);

  const { scrollYProgress: entryScrollProgress } = useScroll({
    target: scaleRef,
    offset: ['start start', 'end start'],
  });

  const { scrollYProgress: exitScrollProgress } = useScroll({
    target: exitAnimationRef,
    offset: ['start end', 'end end'],
  });

  const { scrollYProgress: scrollScaleProgress } = useScroll({
    target: buttonProgressRef,
    offset: ['start start', '0.8 end'],
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

  const {
    experience: { header, subHeader, resume, professionalExperience },
  } = data;

  return (
    <section
      className="relative min-h-screen bg-background_second px-8 py-8 md:mb-[-100svh] lg:px-16 xl:px-36"
      id="experience"
      ref={buttonProgressRef}
    >
      <div
        className="relative z-20 flex flex-col gap-16 md:flex-row md:items-end md:justify-between"
        ref={scaleRef}
      >
        <div>
          <span className="font-mono text-base font-light text-muted lg:text-base-md">
            <ScrambleText className="px-0">{header[0]}</ScrambleText>
          </span>
          <h3 className="text-base-5xl leading-[3rem] tracking-tighter md:max-w-lg md:tracking-tight lg:text-base-6xl lg:leading-[6rem]">
            <StaggerText stagger={true} quick={true}>
              {header[1]}
            </StaggerText>
            <StaggerText stagger={false} quick={true}>
              {header[2]}
            </StaggerText>
          </h3>
        </div>
        <div className="flex justify-between gap-8">
          <div className="min-w-fit font-mono text-base font-light text-muted">{subHeader[0]}</div>
          <motion.div
            className="max-w-sm text-base-xs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              ease: 'easeInOut',
              duration: 1.5,
            }}
          >
            {subHeader[1]}
          </motion.div>
        </div>
      </div>

      <span className="inline">
        <motion.div
          className="fixed right-8 top-12 z-20 w-full md:top-24 lg:right-20 xl:right-36"
          style={{ scaleY: scaleExit }}
        >
          <div className="flex items-center justify-end">
            <div className="group flex cursor-pointer gap-4">
              <motion.div style={{ scale: scaleExit }}>
                <LinkToAction
                  style={{ scale }}
                  href={resume.target}
                  label={resume.label}
                  className="px-6 py-4"
                />
              </motion.div>
              <motion.div style={{ scale: scaleExit }}>
                <motion.div className="relative" style={{ scale }}>
                  <a
                    className="tracking-base group pointer-events-auto relative transform-none overflow-hidden"
                    href={resume.target}
                  >
                    <span className="group relative flex size-14 items-center justify-center overflow-hidden rounded-full bg-slate-500/20 lg:size-16">
                      <span className="absolute size-14 translate-y-full rotate-45 rounded-full bg-accent transition-all duration-500 group-hover:translate-y-0 lg:size-16"></span>
                      <svg
                        id="progress"
                        width="70"
                        height="70"
                        viewBox="0 0 70 70"
                        className="relative -rotate-90 overflow-hidden"
                      >
                        <motion.circle
                          cx="35"
                          cy="35"
                          r="32.5"
                          pathLength="1"
                          className="ease-expo absolute -translate-x-full fill-transparent stroke-slate-500 stroke-[0.2rem] transition-transform duration-500 group-hover:translate-x-0"
                          style={{ pathLength: scaleButton }}
                        />
                        <motion.circle
                          cx="35"
                          cy="35"
                          r="32.5"
                          pathLength="1"
                          className="ease-expo translate-x-0 fill-transparent stroke-accent stroke-[0.2rem] transition-transform duration-500 group-hover:-translate-x-full"
                          style={{ pathLength: scaleButton }}
                        />
                      </svg>
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:-translate-y-[300%]">
                        <Icons.arrow45deg className="h-5 w-5 -rotate-45" />
                      </span>
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[300%] rotate-180 transition-all duration-500 ease-in-out group-hover:-translate-y-1/2 group-hover:rotate-0">
                        <Icons.arrow45deg className="h-5 w-5 -rotate-45 transition-all duration-500 ease-in-out group-hover:-rotate-[225deg]" />
                      </span>
                    </span>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        {professionalExperience.map((e, i) => (
          <div className="sticky top-0 h-svh" key={`company-${e}-${i}`}>
            <div
              className="relative border-t border-t-muted bg-background_second p-10 px-0 last:pb-0 sm:py-8 md:pt-6 lg:p-8"
              style={{
                top: `calc(20vh + ${5.75 * i}em)`,
                marginBottom: `${5.75 * (professionalExperience.length - i)}em`,
              }}
            >
              <div className="flex items-center justify-between leading-tight">
                <span className="text-base-lg font-semibold sm:text-base-xl md:text-base-2xl">
                  {e.company}
                </span>
                <span className="whitespace-nowrap text-base font-light text-muted lg:text-base-md">
                  {e.duration}
                </span>
              </div>
              <div className="grid h-full grid-cols-1 gap-4 py-8 md:grid-cols-[auto_1fr]">
                <span className="w-60 text-lg font-medium text-muted">{e.role}</span>
                <div className="space-y-4 lg:space-y-8">
                  <p className="text-mono md:text-base-xs">{e.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {e.techUsed.map((t, i) => (
                      <span
                        className="whitespace-nowrap text-nowrap rounded-full bg-slate-500/35 px-2 py-1 text-mono md:px-4"
                        key={`tech-${i}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </span>
      <div className="sticky top-0 h-0 sm:h-svh" ref={exitAnimationRef}>
        <div
          className="relative p-8"
          style={{
            top: `calc(8vh + ${5.75 * professionalExperience.length}em)`,
            marginBottom: '0em',
          }}
        ></div>
      </div>

      <div className="invisible absolute bottom-[20%] left-24 z-10 h-96 w-1/5 bg-accent blur-[300px] md:visible" />
      <div className="invisible absolute right-0 top-0 z-10 h-1/6 w-1/2 bg-accent blur-[400px] md:visible" />
    </section>
  );
}
