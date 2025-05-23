'use client';

import { useDimension } from '@/hooks/use-dimension';
import { staticData as data } from '@/lib/constants';
import { cn } from '@/lib/utils';
import LinkToAction from '@/motion-components/link-to-action';
import ScrambleText from '@/motion-components/scramble-text';
import StaggerText from '@/motion-components/stagger-text';
import { MotionValue, motion, useScroll, useSpring, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

export default function About() {
  const section = useRef(null);
  const scaleRef = useRef(null);
  const dimensions = useDimension();

  const { scrollYProgress } = useScroll({
    target: section,
    offset: ['start end', 'end start'],
  });

  const smoothVelocity = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 40,
    mass: 0.3,
  });

  const { scrollYProgress: yProg } = useScroll({
    target: scaleRef,
    offset: ['start end', 'end center'],
  });

  const smoothScale = useSpring(yProg, {
    stiffness: 500,
    damping: 40,
    mass: 0.3,
  });

  const y1 = useTransform(smoothVelocity, [0, 1], [0, dimensions.height * 2]);
  const y2 = useTransform(smoothVelocity, [0, 1], [0, dimensions.height * 2.5]);

  const scale = useTransform(smoothScale, [0, 1], [0.85, 1]);

  const {
    about: { header, body },
  } = data;

  return (
    <motion.section
      className="relative min-h-screen overflow-clip rounded-t-3xl bg-background_second px-8 py-8 pb-8 lg:px-16 xl:px-36"
      ref={section}
      style={{ scale }}
      id="about"
    >
      <div className="relative z-30 flex items-start justify-between gap-16">
        <div className="sticky top-8 min-w-fit md:h-dvh">
          <div className="flex flex-col items-start justify-start gap-12 lg:gap-24">
            <div ref={scaleRef}>
              <span className="font-mono text-base font-light text-muted lg:text-base-md">
                <ScrambleText className="px-0">{header[0]}</ScrambleText>
              </span>
              <h3 className="max-w-md text-base-5xl leading-[3rem] tracking-tight lg:text-base-6xl lg:leading-[6rem]">
                <StaggerText stagger={true} quick={true}>
                  {header[1]}
                </StaggerText>
                <StaggerText stagger={false} quick={true}>
                  {header[2]}
                </StaggerText>
              </h3>
            </div>
            <div className="flex h-full flex-col gap-4 md:flex-row md:gap-8">
              <div className="min-w-fit font-mono text-base font-light text-muted">
                {body.title}
              </div>
              <motion.div
                className="grid max-w-sm grid-cols-1 space-y-6 text-base-xs font-light md:max-w-xs lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  ease: 'easeInOut',
                  duration: 1.5,
                }}
              >
                {body.description.map((desc, i) => (
                  <p key={`aboutMe-${i}`}>{desc}</p>
                ))}
                <p className="flex flex-wrap items-center gap-4 pt-2 md:pt-8">
                  {body.socials.map((sns) => (
                    <LinkToAction
                      key={`sns-${sns.label}`}
                      label={sns.label}
                      href={sns.target}
                      className="px-4 py-2 text-mono"
                    />
                  ))}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-full grid-cols-1 gap-8 overflow-hidden md:grid 2xl:grid-cols-2">
          <Column
            className="-top-[40%] bg-transparent"
            images={[
              'me_3.png',
              'me_1.png',
              'me_2.png',
              'me_3.png',
              'me_4.png',
              'me_1.png',
              'me_3.png',
            ]}
            y={y1}
          />
          <Column
            className="-top-[60%] hidden bg-transparent 2xl:flex"
            images={[
              'me_4.png',
              'me_5.png',
              'me_4.png',
              'me_6.png',
              'me_8.png',
              'me_5.png',
              'me_7.png',
            ]}
            y={y2}
          />
          {/* top gradient on pics */}
          <div className="invisible absolute -top-48 right-0 z-0 h-96 w-96 rounded-full bg-accent blur-[200px] md:visible" />
          {/* bottom gradient on pics */}
          <div className="invisible absolute bottom-0 right-0 z-0 h-96 w-96 rounded-full bg-accent blur-[250px] md:visible" />
        </div>
      </div>
    </motion.section>
  );
}

const Column = ({
  images,
  y,
  className,
}: {
  images: string[];
  y: MotionValue<number>;
  className?: React.ComponentProps<'div'>['className'];
}) => {
  return (
    <motion.div className={cn('relative flex flex-col gap-8', className)} style={{ y }}>
      {images.map((src, i) => {
        return (
          <div
            key={i}
            className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl grayscale transition-all duration-700 ease-in-out hover:cursor-pointer hover:grayscale-0"
          >
            <Image
              src={`/me/${src}`}
              alt={`image ${i}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        );
      })}
    </motion.div>
  );
};
