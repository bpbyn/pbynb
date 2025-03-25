'use client';

import LinkToAction from '@/motion-components/link-to-action';
import MaskText from '@/motion-components/mask-text';
import StaggerText from '@/motion-components/stagger-text';
import TiltCard from '@/motion-components/tilt-card';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import Image from 'next/image';

const about = [
  'I’m a Full Stack Developer specializing in intuitive front-end development.',
  'I craft pixel-perfect user interfaces that bring ideas to life.',
];

export default function Hero() {
  const { scrollYProgress } = useScroll();

  const smoothVelocity = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 10,
    mass: 0.00001,
  });

  const opacity = useTransform(smoothVelocity, [0, 0.1], [1, 0], {
    clamp: true,
  });
  const y = useTransform(smoothVelocity, [0, 0.2], [0, 300], {
    clamp: true,
  });
  const scale = useTransform(smoothVelocity, [0, 0.1], [1, 0.9], {
    clamp: true,
  });

  return (
    <motion.section
      className="relative h-screen px-16 pb-8 xl:px-36"
      style={{ opacity, y, scale }}
      id="home"
    >
      {/* gradients */}
      <div className="absolute bottom-16 left-32 -z-10 h-96 w-1/5 bg-accent opacity-80 blur-[200px]" />
      <div className="absolute right-1/3 top-1/3 -z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent blur-[150px]" />
      <div className="absolute -bottom-32 right-14 -z-10 h-1/2 w-1/2 bg-accent blur-[350px]" />
      {/* gradients */}

      <div className="grid h-full grid-cols-2">
        <div className="flex h-full flex-col items-start justify-end gap-32">
          <div className="relative font-serif text-9xl leading-[6.5rem] tracking-tight text-foreground">
            <StaggerText stagger={true}>brian</StaggerText>
            <StaggerText className="pb-6" stagger={true}>
              punongbayan
            </StaggerText>
          </div>
          <div className="text-lg font-light text-muted">
            {about.map((l, i) => (
              <MaskText key={i}>{l}&nbsp;</MaskText>
            ))}
          </div>
          {/* <Button className="bg-slate-500/35 px-8 py-4 text-foreground rounded-full shadow-sm">
            <h3 className="font-mono">SAY HELLO</h3>
          </Button> */}
          <LinkToAction
            href="https://www.google.com"
            label="SAY HELLO"
            className="text-md font-medium"
          />

          {/* <a
            className="bg-secondary-300 tracking-base text-accent-200 border-secondary-100 px-space-sm py-space-2xs text-base-small group pointer-events-auto relative flex h-fit w-fit transform-none items-center justify-center overflow-hidden rounded-full border font-medium uppercase"
            target="_blank"
            href="https://www.instagram.com/by_huy/"
          >
            <span className="absolute inset-0 z-10 block overflow-hidden">
              <span className="ease-expo block h-full w-full translate-y-full rounded-t-[15rem] bg-blue-300 text-red-100 transition-all duration-500 sm:group-hover:translate-y-0 sm:group-hover:rounded-none"></span>
            </span>
            <span className="relative z-20 block overflow-hidden transition-all">
              <span
                data-after="Instagram"
                className="after:ease-expo block after:absolute after:left-0 after:block after:translate-y-0 after:transition-all after:duration-500 after:content-[attr(data-after)] sm:group-hover:after:-translate-y-[100%]"
              >
                <span className="ease-expo flex transition-all duration-500 sm:group-hover:-translate-y-full">
                  Instagram
                </span>
              </span>
            </span>
          </a> */}
          <span className="w-full text-left font-mono text-lg font-light text-muted">
            © 2025 BULACAN, PH
          </span>
        </div>
        <div className="grid h-full place-content-end gap-28">
          {/* <div /> */}
          <motion.div
            className="relative grid h-full cursor-pointer justify-self-end pr-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 3.5,
              ease: [0.76, 0, 0.1, 1],
            }}
          >
            <TiltCard>
              <Image
                src={'/me/me.png'}
                alt="brian punongbayan"
                className="rounded-3xl object-cover"
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '300px',
                  transform: 'translateZ(75px)',
                }}
                placeholder="blur"
                blurDataURL={'/images/placeholder.svg'}
                priority
              />
            </TiltCard>
          </motion.div>
          <div className="relative h-full text-8xl tracking-tight text-foreground">
            <StaggerText className="font-serif text-8xl">front-end</StaggerText>
            <StaggerText className="pb-4 pr-2 font-serif text-8xl">developer</StaggerText>
          </div>
          <span className="w-full text-right font-mono text-lg font-light text-muted">
            ( SCROLL TO EXPLORE )
          </span>
        </div>
      </div>
    </motion.section>
  );
}
