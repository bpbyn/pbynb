'use client';

import Button from '@/components/button';
import MaskText from '@/motion-components/mask-text';
import StaggerText from '@/motion-components/stagger-text';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import Image from 'next/image';

const about = [
  'I’m a Full Stack Developer specializing in intuitive front-end development.',
  'I craft pixel-perfect user interfaces that bring ideas to life.',
];

export default function Hero() {
  const { scrollYProgress } = useScroll();

  const smoothVelocity = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
    mass: 0.00001,
  });

  const opacity = useTransform(smoothVelocity, [0, 0.1], [1, 0], {
    clamp: false,
  });
  const y = useTransform(smoothVelocity, [0, 0.2], [0, 300], {
    clamp: false,
  });
  const scale = useTransform(smoothVelocity, [0, 0.1], [1, 0.9], {
    clamp: false,
  });

  return (
    <motion.section className="relative h-screen px-16 pb-8" style={{ opacity, y, scale }}>
      {/* gradients */}
      <div className="absolute bottom-16 left-32 -z-10 h-96 w-1/5 bg-accent opacity-80 blur-[200px]" />
      <div className="absolute right-1/3 top-1/3 -z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent blur-[150px]" />
      <div className="absolute -bottom-32 right-14 -z-10 h-1/2 w-1/2 bg-accent blur-[350px]" />
      {/* gradients */}
      <div className="grid h-full grid-cols-2 overflow-hidden pt-20">
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
          <Button>
            <h3 className="font-mono font-medium text-primary">SAY HELLO</h3>
          </Button>
          <span className="w-full text-left font-mono text-lg font-light text-muted">
            © 2025 BULACAN, PH
          </span>
        </div>
        <div className="flex h-full flex-col items-end justify-between gap-32">
          <div />
          <div className="relative h-fit w-fit">
            {/* <Image
              src={'/me/me.png'}
              alt="brian punongbayan"
              className="rounded-3xl object-cover grayscale"
              height={300}
              width={300}
            /> */}
            <Image
              src={'/me/me.png'}
              alt="brian punongbayan"
              className="rounded-3xl object-cover grayscale"
              width={500}
              height={500}
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '300px',
              }}
              priority
            />
          </div>
          <div className="relative h-full text-8xl tracking-tight text-foreground">
            <StaggerText className="font-serif text-8xl">front-end</StaggerText>
            <StaggerText className="font-serif text-8xl">developer</StaggerText>
          </div>
          <span className="w-full text-right font-mono text-lg font-light text-muted">
            ( SCROLL TO EXPLORE )
          </span>
        </div>
      </div>
    </motion.section>
  );
}
