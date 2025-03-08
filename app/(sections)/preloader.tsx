'use client';

import { useDimension } from '@/hooks/use-dimension';
import { anim } from '@/lib/utils';
import { motion } from 'motion/react';

const slide = {
  initial: {
    top: 0,
  },
  animate: {
    top: '-100vh',
    transition: { duration: 0.75, delay: 0.35, ease: [0.99, 0.1, 0.24, 0.95] },
    transitionEnd: {
      top: '-100vh',
    },
  },
};

const curve = (initialPath: string, targetPath: string) => {
  return {
    initial: {
      d: initialPath,
    },
    animate: {
      d: targetPath,
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
  };
};

const CubicBezierSvg = ({ width, height }: { width: number; height: number }) => {
  const initialPath = `
    M0 0
    Q${width / 2} 0 ${width} 0
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

  const targetPath = `
    M0 0 
    Q${width / 2} 300 ${width} 0
    L${width} ${height}
    Q${width / 2} ${height - 500} 0 ${height}
    L0 0
  `;

  return (
    <motion.svg
      {...anim(slide)}
      className="pointer-events-none fixed top-0 z-[999] w-full"
      style={{ height: 'calc(100vh + 300px)' }}
    >
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};

export default function PreLoader() {
  const dimensions = useDimension();

  return (
    <>
      <div
        className="pointer-events-none fixed top-0 z-[999] w-full bg-black"
        style={{
          opacity: dimensions.width > 0 ? 0 : 1,
          height: 'calc(100vh + 300px)',
          transition: 'opacity 0s linear 0.1s',
        }}
      />
      {dimensions.width > 0 && (
        <CubicBezierSvg width={dimensions.width} height={dimensions.height} />
      )}
    </>
  );
}
