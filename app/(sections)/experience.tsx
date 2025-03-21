'use client';

import { Icons } from '@/components/icons';
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

  // useMotionValueEvent(scrollScaleProgress, 'change', (current) => {
  //   console.log(current);
  // });

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
      ref={buttonProgressRef}
    >
      <div className="relative z-20 flex items-end justify-between" ref={scaleRef}>
        <div>
          <span className="font-mono text-xl font-light text-muted">
            <ScrambleText className="px-0">{`// WHERE I'VE BEEN?`}</ScrambleText>
          </span>
          <h3 className="max-w-xl text-8xl">
            <StaggerText stagger={true} quick={true}>
              Professional
            </StaggerText>
            <StaggerText stagger={false} quick={true}>
              Timeline
            </StaggerText>
          </h3>
        </div>
        <div className="flex justify-between gap-8">
          <div className="min-w-fit font-mono text-lg font-light text-muted">(EXPERIENCE)</div>
          <motion.div
            className="max-w-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              ease: 'easeInOut',
              duration: 1.5,
            }}
          >
            Every project, role, and collaboration has shaped the way I think, create, and solve
            problems.
          </motion.div>
        </div>
      </div>

      <span className="inline">
        <motion.div className="fixed right-20 top-24 z-20 w-full">
          <div className="flex items-center justify-end">
            <div className="group flex cursor-pointer gap-4">
              <motion.div style={{ scale: scaleExit }}>
                <LinkToAction style={{ scale }} href="https://www.google.com" label="RESUME" />
              </motion.div>
              <motion.div style={{ scale: scaleExit }}>
                <motion.div className="relative" style={{ scale }}>
                  {/* <div className="group">
                  <figure className="relative overflow-hidden">
                    <span className="ease-expo absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:-translate-y-full">
                      <Icons.arrow45deg className="h-6 w-6 -rotate-45" />
                    </span>
                    <span className="ease-expo absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[-100px] transition-all duration-1000 ease-in-out group-hover:-translate-y-1/2">
                      <Icons.arrow45deg className="h-7 w-7 -rotate-45" />
                    </span>
                    <svg
                      id="progress"
                      width="90"
                      height="90"
                      viewBox="0 0 100 100"
                      className="-rotate-90"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="30"
                        pathLength="1"
                        className="fill-transparent stroke-slate-500/35 stroke-[0.3rem]"
                      />
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
                </div> */}
                  <a
                    className="tracking-base group pointer-events-auto relative transform-none overflow-hidden"
                    onClick={() => {
                      //   const targetElement = document.getElementById('hero');
                      //   if (targetElement) {
                      //     const rect = targetElement.getBoundingClientRect();
                      //     const scrollTop = window.scrollY || document.documentElement.scrollTop;
                      //     const targetPosition = rect.top + scrollTop;
                      //   }
                      // lenis?.scrollTo('hero');
                    }}
                  >
                    {/* <figure className="absolute translate-y-[300%] overflow-hidden transition-all duration-500 ease-in-out group-hover:translate-y-0">
                    <svg id="progress" width="90" height="90" viewBox="0 0 100 100" className="">
                      <circle cx="50" cy="50" r="30" pathLength="1" className="fill-accent" />
                    </svg>
                    <span className="ease-expo absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
                      <Icons.arrow45deg className="h-6 w-6 transition-all duration-1000 ease-in-out group-hover:rotate-[315deg]" />
                    </span>
                  </figure> */}
                    {/* <figure className="relative overflow-hidden">
                    <svg
                      id="progress"
                      width="90"
                      height="90"
                      viewBox="0 0 100 100"
                      className="-rotate-90"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="30"
                        pathLength="1"
                        className="relative overflow-hidden fill-transparent stroke-slate-500/35 stroke-[0.3rem]"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="30"
                        pathLength="1"
                        className="fill-none stroke-accent stroke-[0.3rem]"
                        style={{ pathLength: scaleButton }}
                      />
                    </svg>
                    <span className="ease-expo absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:-translate-y-[300%]">
                      <Icons.arrow45deg className="h-6 w-6 -rotate-45" />
                    </span>
                  </figure> */}
                    <figure className="relative overflow-hidden">
                      <svg
                        id="progress"
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        className="relative -rotate-90 overflow-hidden"
                      >
                        <motion.circle
                          cx="30"
                          cy="30"
                          r="27.5"
                          pathLength="1"
                          className="ease-expo absolute -translate-x-full fill-accent stroke-slate-500 stroke-[0.2rem] transition-transform duration-500 group-hover:translate-x-0"
                          style={{ pathLength: scaleButton }}
                        />
                        <motion.circle
                          cx="30"
                          cy="30"
                          r="27.5"
                          pathLength="1"
                          className="ease-expo translate-x-0 fill-slate-500/35 stroke-accent stroke-[0.2rem] transition-transform duration-500 group-hover:-translate-x-full"
                          style={{ pathLength: scaleButton }}
                        />
                        {/* <span className="ease-expo relative bg-red-500"> */}

                        {/* </span> */}
                      </svg>
                      <span className="ease-expo absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 duration-500 group-hover:-translate-y-[300%]">
                        <Icons.arrow45deg className="h-6 w-6 -rotate-45" />
                      </span>
                      <span className="ease-expo absolute left-1/2 top-1/2 z-0 -translate-x-1/2 translate-y-[300%] duration-500 group-hover:-translate-y-1/2">
                        <Icons.arrow45deg className="ease-expo h-6 w-6 -rotate-45 transition-all duration-500 group-hover:-rotate-[225deg]" />
                      </span>
                    </figure>
                  </a>
                </motion.div>
              </motion.div>
            </div>
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
      </span>

      <div className="sticky top-0 h-[100svh]" ref={exitAnimationRef}>
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
