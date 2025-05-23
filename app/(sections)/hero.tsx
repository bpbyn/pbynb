'use client';

import { Icons } from '@/components/icons';
import { staticData as data } from '@/lib/constants';
import LinkToAction from '@/motion-components/link-to-action';
import MaskText from '@/motion-components/mask-text';
import StaggerText from '@/motion-components/stagger-text';
import TiltCard from '@/motion-components/tilt-card';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  const { scrollYProgress } = useScroll();

  const smoothVelocity = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 10,
    mass: 0.00001,
  });

  const opacity = useTransform(smoothVelocity, [0, 0.5], [1, 0], {
    clamp: true,
  });
  const y = useTransform(smoothVelocity, [0, 0.2], [0, 300], {
    clamp: true,
  });
  const scale = useTransform(smoothVelocity, [0, 0.1], [1, 0.9], {
    clamp: true,
  });

  const rotate = useTransform(smoothVelocity, [0, 0.05], [0, 45], {
    clamp: true,
  });

  const {
    hero: { firstName, lastName, primaryRole, roleDesc, contact, footerScroll, footerLocation },
  } = data;

  return (
    <motion.section
      className="relative h-svh min-h-svh px-8 pb-8 lg:px-16 xl:px-36"
      style={{ opacity, y, scale }}
      id="home"
    >
      {/* gradients */}
      <div className="invisible absolute bottom-16 left-32 -z-10 h-96 w-1/5 bg-accent opacity-80 blur-[200px] md:visible" />
      <div className="absolute right-1/3 top-1/3 -z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent blur-[60px] md:blur-[150px]" />
      <div className="invisible absolute bottom-32 right-14 -z-10 h-1/2 w-1/2 bg-accent blur-[350px] md:visible" />
      {/* gradients */}

      <div className="grid h-full grid-cols-[1fr_auto] lg:grid-cols-2">
        <div className="flex h-full flex-col items-start justify-end gap-8 lg:gap-24 2xl:gap-32">
          <div className="relative font-serif text-base-4xl leading-none tracking-tight text-foreground sm:text-base-6xl sm:leading-[4rem] lg:text-heading lg:leading-[6.5rem] 2xl:text-heading-md">
            <StaggerText stagger={true}>{firstName}</StaggerText>
            <StaggerText className="pb-3 md:pb-8" stagger={true}>
              {lastName}
            </StaggerText>
          </div>
          <div className="grid grid-cols-2 place-items-center gap-4 overflow-hidden sm:gap-8 md:hidden">
            <div className="text-base-xs font-light leading-relaxed text-muted sm:w-auto sm:text-base">
              {roleDesc.map((l, i) => (
                <MaskText key={i}>{l}&nbsp;</MaskText>
              ))}
            </div>
            <motion.div
              className="relative cursor-pointer justify-self-end grayscale hover:grayscale-0 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 3.5,
                ease: [0.76, 0, 0.1, 1],
              }}
            >
              <Image
                src={'/me/me.png'}
                alt="brian punongbayan"
                className="rounded-3xl object-cover"
                sizes="(max-width: 640px) 70vw, (max-width: 768px) 100vw, (max-width: 1024px) 300px, (max-width: 1280px) 380px, (max-width: 1536px) 500px, 500px"
                width={300}
                height={300}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '200px',
                  transform: 'translateZ(75px)',
                }}
                placeholder="blur"
                blurDataURL={'/images/placeholder.svg'}
                priority
              />
            </motion.div>
          </div>
          <div className="hidden text-base-xs font-light text-muted sm:w-auto md:block xl:text-base">
            {roleDesc.map((l, i) => (
              <MaskText key={i} className="will-change-transform">
                {l}&nbsp;
              </MaskText>
            ))}
          </div>

          <div className="flex w-full flex-row-reverse items-center justify-between md:block">
            <LinkToAction href={contact.target} label={contact.label} className="font-light" />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 3.5,
                ease: [0.76, 0, 0.1, 1],
              }}
              style={{ rotate }}
            >
              <Icons.arrow45deg className="h-9 w-9 rotate-90 md:hidden" />
            </motion.span>
          </div>
          <motion.span
            className="hidden w-full text-left font-mono text-base-xs font-light text-muted md:block lg:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 3.5,
              ease: [0.76, 0, 0.1, 1],
            }}
          >
            {footerLocation}
          </motion.span>
        </div>
        <div className="hidden h-full place-content-end gap-8 md:grid lg:gap-16 xl:gap-28">
          <motion.div
            className="relative grid h-full cursor-pointer justify-self-end md:pr-8 lg:pr-16"
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
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 200px, (max-width: 1024px) 280px, (max-width: 1280px) 400px, (max-width: 1536px) 400px, 500px"
                width={500}
                height={500}
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
          <div className="relative hidden h-full text-base-5xl leading-[4rem] tracking-tight text-foreground md:inline-block lg:text-base-6xl lg:leading-[6rem] 2xl:text-heading">
            <StaggerText className="font-serif">{primaryRole[0]}</StaggerText>
            <StaggerText className="pb-4 pr-2 font-serif">{primaryRole[1]}</StaggerText>
          </div>
          <motion.span
            className="w-full text-right font-mono text-base-xs font-light text-muted lg:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 3.5,
              ease: [0.76, 0, 0.1, 1],
            }}
          >
            {footerScroll}
          </motion.span>
        </div>
      </div>
      {/* <a
        className="bg-secondary-300 tracking-base text-accent-200 border-secondary-100 px-space-sm py-space-2xs text-baseall group pointer-events-auto relative flex h-fit w-fit transform-none items-center justify-center overflow-hidden rounded-full border font-medium uppercase"
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
    </motion.section>
  );
}
