import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import React from 'react';
import { useMemo, useRef } from 'react';

const lettersAnim = (stagger: boolean, quick: boolean) => {
  return {
    animate: {
      transition: {
        delayChildren: quick ? 0.1 : 0.4,
        staggerChildren: 0.04,
        staggerDirection: stagger ? 1 : -1,
      },
    },
  };
};

const individualLetter = (quick: boolean) => {
  return {
    initial: { y: '200%' },
    animate: {
      y: '0',
      transition: {
        ease: [0.4, 0.01, 0.05, 0.95],
        // ease: [0.6, 0.01, -0.05, 0.95],
        // ease: [0.76, 0, 0.24, 1],
        duration: quick ? 0.4 : 1.2,
      },
    },
  };
};

export function StaggerTextComponent({
  children,
  stagger = false,
  quick = false,
  className,
}: {
  children: string;
  stagger?: boolean;
  quick?: boolean;
  className?: React.ComponentProps<'div'>['className'];
}) {
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });

  const letters = useMemo(() => Array.from(children), [children]);

  return (
    <motion.div
      ref={ref}
      className={cn('flex overflow-hidden', className)}
      initial="initial"
      animate="animate"
      // animate={isInView ? 'animate' : 'initial'}
      variants={lettersAnim(stagger, quick)}
    >
      {letters.map((l, i) => (
        <motion.span
          key={i}
          variants={individualLetter(quick)}
          className="inline-block will-change-transform"
        >
          {l}
        </motion.span>
      ))}
    </motion.div>
  );
}

const StaggerText = React.memo(StaggerTextComponent);

export default StaggerText;
