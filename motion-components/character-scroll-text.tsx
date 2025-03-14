import { MotionValue, motion, useScroll, useSpring, useTransform } from 'motion/react';
import React, { useRef } from 'react';

export default function CharacterScrollText({ paragraph }: { paragraph: string }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.4'],
  });

  const smoothVelocity = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 40,
    mass: 0.3,
  });

  const processedParagraph = paragraph.replace(/\n/g, ' [NEWLINE] ');
  const words = processedParagraph.split(' ');

  {
    /* <CharacterScrollText
    paragraph={`Hi there! I’m Brian, a developer from the Philippines with a passion for solving problems and building meaningful solutions through technology.\nWhen I’m not coding, I enjoy staying up-to-date with the latest trends and innovations in the tech industry, constantly exploring how emerging technologies can shape the future.\nOutside of work, I wear many hats. I’m a proud “radiohead” and a hands-on dad, often creating fun and unique lullabies to help my little one drift off to sleep. Before parenthood, I was an avid runner who loved pushing his limits. Running remains close to my heart, and I look forward to lacing up my shoes and getting back to it soon.\nI’m always open to new opportunities, collaborations, and challenges that inspire creativity and drive progress. Let’s build something amazing together!`}
  /> */
  }

  return (
    <p ref={container} className="flex flex-wrap">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        if (word === '[NEWLINE]') {
          return (
            <span key={i} className="w-full">
              <br />
            </span>
          );
        }

        return (
          <Word key={i} progress={smoothVelocity} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    // <span className={styles.word}>
    <span
      className="relative"
      style={{
        marginLeft: '2px',
        marginRight: '2px',
      }}
    >
      {children.split('').map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Character key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span
        className="absolute"
        style={{
          opacity: 0.2,
        }}
      >
        {children}
      </span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
