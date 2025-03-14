'use client';

import { useDimension } from '@/hooks/use-dimension';
import { cn } from '@/lib/utils';
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

  return (
    <motion.section
      className="relative min-h-screen rounded-t-3xl bg-background_second px-16 py-8"
      ref={section}
      style={{ scale }}
      id="about"
    >
      <div className="relative flex items-start justify-between gap-16">
        <div className="sticky top-8 h-dvh min-w-fit">
          <div className="flex flex-col items-start justify-start gap-24">
            <div ref={scaleRef}>
              <span className="font-mono text-xl font-light text-muted">
                <ScrambleText className="px-0">{`// WHO AM I?`}</ScrambleText>
              </span>
              <h3 className="max-w-md text-8xl">
                <StaggerText stagger={true} quick={true}>
                  Meet the
                </StaggerText>
                <StaggerText stagger={false} quick={true}>
                  Maker
                </StaggerText>
              </h3>
            </div>
            <div className="flex h-full gap-8">
              <div className="min-w-fit font-mono text-lg font-light text-muted">(ABOUT ME)</div>
              <motion.div
                className="max-w-sm space-y-6 xl:max-w-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  ease: 'easeInOut',
                  duration: 1.5,
                }}
              >
                {/* <CharacterScrollText
                  paragraph={`Hi there! I’m Brian, a developer from the Philippines with a passion for solving problems and building meaningful solutions through technology.\nWhen I’m not coding, I enjoy staying up-to-date with the latest trends and innovations in the tech industry, constantly exploring how emerging technologies can shape the future.\nOutside of work, I wear many hats. I’m a proud “radiohead” and a hands-on dad, often creating fun and unique lullabies to help my little one drift off to sleep. Before parenthood, I was an avid runner who loved pushing his limits. Running remains close to my heart, and I look forward to lacing up my shoes and getting back to it soon.\nI’m always open to new opportunities, collaborations, and challenges that inspire creativity and drive progress. Let’s build something amazing together!`}
                /> */}

                <p>
                  Hi there! I’m Brian, a developer from the Philippines with a passion for solving
                  problems and building meaningful solutions through technology.
                </p>
                <p>
                  When I’m not coding, I enjoy staying up-to-date with the latest trends and
                  innovations in the tech industry, constantly exploring how emerging technologies
                  can shape the future.
                </p>
                <p>
                  Outside of work, I wear many hats. I’m a proud “radiohead” and a hands-on dad,
                  often creating fun and unique lullabies to help my little one drift off to sleep.
                  Before parenthood, I was an avid runner who loved pushing his limits. Running
                  remains close to my heart, and I look forward to lacing up my shoes and getting
                  back to it soon.
                </p>
                <p>
                  I’m always open to new opportunities, collaborations, and challenges that inspire
                  creativity and drive progress. Let’s build something amazing together!
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="relative grid w-full max-w-2xl grid-cols-2 gap-8 overflow-hidden">
          <Column
            className="-top-[40%]"
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
            className="-top-[60%]"
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
          <div className="absolute -top-48 right-0 z-10 h-96 w-96 rounded-full bg-accent blur-[200px]" />
          {/* bottom gradient on pics */}
          <div className="absolute bottom-0 right-0 z-10 h-96 w-96 rounded-full bg-accent blur-[250px]" />
        </div>
      </div>
      {/* <div className="bg-accent absolute -bottom-24 left-1/2 h-96 w-96 -translate-x-[50%] rounded-full blur-[200px]" /> */}

      <div className="absolute bottom-0 left-0 z-10 h-96 w-96 rounded-full bg-accent opacity-80 blur-[350px]" />
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
