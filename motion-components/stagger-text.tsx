import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { useRef } from 'react';

const letters = (stagger: boolean, quick: boolean) => {
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
        // ease: [0.4, 0.01, 0.05, 0.95],
        // ease: [0.6, 0.01, -0.05, 0.95],
        ease: [0.76, 0, 0.24, 1],
        duration: quick ? 0.4 : 0.7,
      },
    },
  };
};

export default function StaggerText({
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

  return (
    <motion.div
      ref={ref}
      className={cn('flex overflow-hidden', className)}
      initial="initial"
      animate="animate"
      // animate={isInView ? 'animate' : 'initial'}
      variants={letters(stagger, quick)}
    >
      {children.split('').map((l, i) => (
        <motion.span
          key={i}
          variants={individualLetter(quick)}
          className="inline-flex will-change-transform"
        >
          {l}
        </motion.span>
      ))}
    </motion.div>
  );
}
