'use client';

import { useDimension } from '@/hooks/use-dimension';
import { cn } from '@/lib/utils';
import ScrambleText from '@/motion-components/scramble-text';
import { MotionValue, motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

export default function About() {
  const section = useRef(null);
  const dimensions = useDimension();

  const { scrollYProgress } = useScroll({
    target: section,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, dimensions.height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, dimensions.height * 3.3]);

  return (
    <motion.section
      className="relative min-h-screen rounded-t-3xl bg-background_second px-16 py-8"
      ref={section}
      // id="about"
      // initial={{ opacity: 0, background: 'blue' }}
      // whileInView={{ opacity: 1, background: 'red' }}
    >
      <div className="flex items-start justify-between gap-16">
        <div className="sticky top-8 h-dvh">
          <div className="flex flex-col items-start justify-start gap-24">
            <div>
              <span className="font-mono text-xl font-light text-muted">
                <ScrambleText>{`// WHO AM I?`}</ScrambleText>
              </span>
              <h3 className="max-w-md text-8xl">Meet the Maker</h3>
            </div>
            <div className="flex h-full gap-8">
              <div className="min-w-fit font-mono text-xl font-light text-muted">(ABOUT ME)</div>
              <div className="max-w-sm space-y-6 xl:max-w-lg">
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
              </div>
            </div>
          </div>
        </div>
        <div className="relative grid grid-cols-2 gap-16 overflow-hidden">
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
            className="-top-[70%]"
            images={[
              'me_4.png',
              'me_5.png',
              'me_6.png',
              'me_7.png',
              'me_8.png',
              'me_5.png',
              'me_7.png',
            ]}
            y={y2}
          />
          <div className="absolute -top-48 right-0 z-10 h-96 w-96 rounded-full bg-accent blur-[200px]" />
          <div className="absolute bottom-0 right-0 z-10 h-96 w-96 rounded-full bg-background_second blur-[200px]" />
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
    <motion.div
      className={cn(
        'relative flex h-full w-[25%] min-w-[250px] flex-col gap-8 whitespace-nowrap',
        className
      )}
      style={{ y }}
    >
      {images.map((src, i) => {
        return (
          <div
            key={i}
            className="ease- relative h-72 w-full overflow-hidden rounded-3xl grayscale transition-all duration-700 hover:cursor-pointer hover:grayscale-0"
          >
            <Image src={`/me/${src}`} alt="image" fill style={{ objectFit: 'cover' }} />
          </div>
        );
      })}
    </motion.div>
  );
};
