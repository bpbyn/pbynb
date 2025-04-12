'use client';

import Cursor from '@/motion-components/cursor';
import ScrambleText from '@/motion-components/scramble-text';
import StaggerText from '@/motion-components/stagger-text';
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

export default function Projects() {
  const linksRef = useRef<HTMLDivElement[]>([]);
  const ref = useRef(null);
  const scaleRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'center start'],
  });

  const { scrollYProgress: yProg } = useScroll({
    target: scaleRef,
    offset: ['start start', 'end start'],
  });

  const smoothScale = useSpring(yProg, {
    stiffness: 500,
    damping: 40,
    mass: 0.3,
  });

  const scale = useTransform(smoothScale, [0, 1], [1, 0.95]);

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const totalWorks = works.length;
    works.forEach((_, index) => {
      if (progress > index / totalWorks - 0.1) {
        setActiveIndex(index);
      }
    });
  });

  const works = [
    {
      name: 'Shot Puno',
      projectType: 'Card Game',
      imgOverlay: '/images/shot-puno-landing.png',
      videoURL: '../media/shot-puno.mp4',
      href: 'https://shot-puno.vercel.app/',
      techUsed: ['NextJS', 'TailwindCSS', 'Shadcn', 'Motion', 'Firebase'],
    },
    {
      name: 'Northern Kaffeine POS',
      projectType: 'POS Application',
      imgOverlay: '/images/nk-pos-landing.png',
      videoURL: '../media/nk-pos.mp4',
      href: 'https://nk-pos-dev.vercel.app/',
      techUsed: [
        'NextJS',
        'TailwindCSS',
        'Zustand',
        'Shadcn',
        'Firebase',
        'Firebase Authentication',
      ],
    },
  ];

  return (
    <motion.section
      className="relative z-10 min-h-screen rounded-b-3xl bg-background_second px-8 py-8 pt-16 lg:px-16 xl:px-36"
      id="projects"
      style={{ scale }}
    >
      <Cursor linksRef={linksRef} />
      <div className="relative z-20 flex flex-col gap-16 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="font-mono text-base font-light text-muted lg:text-base-md">
            <ScrambleText className="px-0">{`// WHAT I'VE BUILT?`}</ScrambleText>
          </span>
          <h3 className="text-base-5xl leading-[3rem] tracking-tight md:max-w-lg lg:text-base-6xl lg:leading-[6rem]">
            <StaggerText stagger={true} quick={true}>
              Pixels and
            </StaggerText>
            <StaggerText stagger={false} quick={true}>
              Code
            </StaggerText>
          </h3>
        </div>
        <div className="flex justify-between gap-8">
          <div className="min-w-fit font-mono text-base font-light text-muted">(WORKS)</div>
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
            These are projects I’ve put my time and effort to complete. I hope you’ll like it as
            much as I do!
          </motion.div>
        </div>
      </div>
      <div className="flex items-start justify-between pt-8 md:pt-16">
        <div className="sticky top-8 hidden w-full overflow-hidden font-serif text-heading-lg leading-[0.8] md:flex md:text-heading-3xl lg:text-heading-4xl xl:text-heading-6xl">
          <span className="relative">0</span>
          <div className="relative">
            <motion.div
              className="ease-in-out-cubic absolute flex h-full w-fit flex-col transition-transform duration-500"
              style={{ transform: `translateY(${-100 * activeIndex}%)` }}
            >
              {works.map((work, i) => (
                <span className="inline-block" key={`${work}-${i}`}>
                  {i + 1}.
                </span>
              ))}
            </motion.div>
          </div>
        </div>
        <aside className="relative z-20 grid grid-cols-1 gap-8 pt-8 text-4xl md:gap-20" ref={ref}>
          {works.map((w, i) => (
            <div
              key={`projects-${i}`}
              ref={(ref) => {
                if (ref) {
                  linksRef.current[i] = ref;
                }
              }}
            >
              <Link href={w.href} target="_blank">
                <div className="grid grid-cols-1 gap-8" ref={i === 1 ? scaleRef : null}>
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl p-8 md:p-16">
                    <video
                      src={w.videoURL}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="relative z-10 h-full w-full rounded-xl"
                    />
                    {/* Overlay image */}
                    <div className="pointer-events-none absolute inset-0 z-0 blur-xl">
                      <Image
                        src={w.imgOverlay}
                        alt="landing page"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                    </div>
                  </div>
                  <div className="relative flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:gap-8 md:flex-col md:items-start lg:flex-row">
                    <div className="flex flex-col justify-start">
                      <span className="font-mono text-base leading-tight text-muted">
                        {w.projectType}
                      </span>
                      <span className="whitespace-nowrap text-base-xl font-bold">{w.name}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 self-end md:self-auto">
                      {w.techUsed.map((t, i) => (
                        <span
                          className="w-fit whitespace-nowrap rounded-full bg-slate-500/35 px-4 py-1 text-mono leading-tight"
                          key={`tech-${i}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </aside>
      </div>
      <div className="invisible absolute right-0 top-0 z-10 h-1/2 w-1/2 bg-accent blur-[350px] md:visible" />
      <div className="invisible absolute bottom-0 left-32 z-10 h-96 w-1/5 bg-accent opacity-80 blur-[200px] md:visible" />
    </motion.section>
  );
}
