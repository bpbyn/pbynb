'use client';

import ScrambleText from '@/motion-components/scramble-text';
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef, useState } from 'react';

export default function Projects() {
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
      videoURL: '',
    },
    {
      name: 'Shot Puno',
      videoURL: '',
    },
  ];

  return (
    <motion.section
      className="relative z-10 min-h-screen rounded-b-3xl bg-background_second px-16 py-8 pt-16"
      id="projects"
      style={{ scale }}
    >
      <div className="relative z-20 flex items-end justify-between gap-16">
        <div>
          <span className="font-mono text-xl font-light text-muted">
            <ScrambleText>{`// WHAT I'VE BUILT?`}</ScrambleText>
          </span>
          <h3 className="max-w-md text-8xl">Pixels and Code</h3>
        </div>
        <div className="flex justify-between gap-8">
          <div className="min-w-fit font-mono text-lg font-light text-muted">(WORKS)</div>
          <div className="max-w-sm">
            These are projects I’ve put my time and effort to complete. I hope you’ll like it as
            much as I do!
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between pt-16">
        <div className="sticky top-8 flex w-full overflow-hidden font-serif text-[22vw] leading-[0.8]">
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
        <aside
          className="relative z-20 flex flex-col items-end justify-center gap-20 pt-8 text-4xl"
          ref={ref}
        >
          {/* <div className="h-[28rem] w-[32rem] rounded-xl bg-red">
            <div className="h-[16rem] w-[16rem] backdrop-blur-md"></div>
          </div> */}
          {/* <video
            muted={true}
            autoplay={true}
            width="1920"
            height="1080"
            loop={true}
            playsinline=""
            preload="auto"
            className="pointer-events-none h-full w-full object-cover object-center"
          >
            <source src="/videos/compress.mp4" type="video/mp4">
            <source src="/videos/compress.webm" type="video/webm">Your browser does not support the video tag
          </video> */}
          {/* <div className="rounded-xl bg-gray-400 p-16">
            <div className="h-[700px] w-full backdrop-blur-lg">
              <video
                src="../media/shot-puno.mp4"
                // autoPlay
                muted
                loop
                playsInline
                className="max-h-full max-w-full rounded-lg object-contain"
              />
            </div>
          </div> */}
          <div className="grid gap-8">
            <div className="relative aspect-square overflow-hidden rounded-2xl p-16">
              <video
                src="../media/shot-puno.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="relative z-10 h-full w-full rounded-xl"
              />
              {/* Overlay image */}
              <div className="pointer-events-none absolute inset-0 z-0 blur-xl">
                <Image
                  src={'/images/shot-puno-landing.png'}
                  alt="landing page"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            <div className="relative flex items-center justify-between gap-16">
              <div className="flex flex-col">
                <span className="font-mono text-lg text-muted">Card Game</span>
                <span className="whitespace-nowrap text-3xl font-bold">Shot Puno!</span>
              </div>
              <div className="flex h-full flex-wrap items-center gap-2">
                <span className="rounded-full border border-muted px-4 py-1 text-xs">NextJS</span>
                <span className="rounded-full border border-muted px-4 py-1 text-xs">
                  TailwindCSS
                </span>
                <span className="rounded-full border border-muted px-4 py-1 text-xs">Shadcn</span>
                <span className="rounded-full border border-muted px-4 py-1 text-xs">Motion</span>
                <span className="rounded-full border border-muted px-4 py-1 text-xs">Firebase</span>
              </div>
            </div>
          </div>

          <div className="grid gap-8" ref={scaleRef}>
            <div className="relative aspect-square overflow-hidden rounded-2xl p-16">
              <video
                src="../media/nk-pos.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="relative z-10 h-full w-full rounded-xl"
              />
              {/* Overlay image */}
              <div className="pointer-events-none absolute inset-0 z-0 blur-xl">
                <Image
                  src={'/images/nk-pos-landing.png'}
                  alt="landing page"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            <div className="relative flex items-center justify-between gap-16">
              <div className="flex flex-col">
                <span className="font-mono text-lg text-muted">POS Application</span>
                <span className="whitespace-nowrap text-3xl font-bold">Northern Kaffeine</span>
              </div>
              <div className="flex h-full flex-wrap items-center gap-2">
                <span className="rounded-full border border-muted px-4 py-1 text-xs">NextJS</span>
                <span className="rounded-full border border-muted px-4 py-1 text-xs">Zustand</span>
                <span className="rounded-full border border-muted px-4 py-1 text-xs">
                  TailwindCSS
                </span>
                <span className="rounded-full border border-muted px-4 py-1 text-xs">Shadcn</span>
                <span className="rounded-full border border-muted px-4 py-1 text-xs">Firebase</span>
                <span className="rounded-full border border-muted px-4 py-1 text-xs">
                  Firebase Authentication
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div className="absolute right-0 top-0 z-10 h-1/2 w-1/2 bg-accent blur-[350px]" />
      <div className="absolute bottom-0 left-32 z-10 h-96 w-1/5 bg-accent opacity-80 blur-[200px]" />
    </motion.section>
  );
}
