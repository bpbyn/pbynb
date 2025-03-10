import { cn } from '@/lib/utils';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const letters = (stagger: boolean) => {
  return {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.02,
        staggerDirection: stagger ? 1 : -1,
      },
    },
  };
};

const individualLetter = {
  initial: { y: 200 },
  animate: {
    y: 0,
    transition: {
      ease: [0.4, 0.01, 0.05, 0.95],
      duration: 1.2,
    },
  },
};

export default function StaggerText({
  children,
  stagger = false,
  className,
}: {
  children: string;
  stagger?: boolean;
  className?: React.ComponentProps<'div'>['className'];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={cn('flex overflow-hidden', className)}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={letters(stagger)}
    >
      {children.split('').map((l, i) => (
        <motion.span key={i} variants={individualLetter} className="inline-flex">
          {l === ' ' ? '\u00A0' : l}
        </motion.span>
      ))}
    </motion.div>
  );
}
