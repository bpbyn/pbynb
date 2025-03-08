'use client';

import { cn } from '@/lib/utils';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from 'motion/react';
import { useRef } from 'react';

export default function ParallelText({
  baseVelocity = -5,
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  baseVelocity?: number;
  className?: React.ComponentProps<'div'>['className'];
  style?: React.CSSProperties;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    stiffness: 500,
    damping: 50,
    mass: 0.3,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`);

  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className="relative m-0 flex flex-nowrap overflow-hidden whitespace-nowrap"
      style={{ background: 'white', ...style }}
    >
      <motion.div
        className={cn(
          'flex flex-nowrap gap-x-5 whitespace-nowrap py-4 text-primary will-change-scroll',
          className
        )}
        style={{ x }}
      >
        {children}
      </motion.div>
    </div>
  );
}
