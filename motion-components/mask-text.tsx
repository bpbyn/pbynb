'use client';

import { anim, cn } from '@/lib/utils';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const variants = {
  initial: { y: '150px' },
  animate: { y: '0' },
};

export default function MaskText({
  children,
  className,
  duration = 2,
}: {
  children: React.ReactNode;
  className?: React.ComponentProps<'div'>['className'];
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className={cn('overflow-hidden will-change-auto', className)} ref={ref}>
      <motion.div
        {...anim(variants)}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        transition={{
          duration,
          ease: [0.76, 0, 0.1, 1],
        }}
        className="overflow-visible"
      >
        {children}
      </motion.div>
    </div>
  );
}
