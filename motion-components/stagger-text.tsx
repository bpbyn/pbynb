import { anim, cn } from '@/lib/utils';
import { motion } from 'motion/react';

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
  return (
    <motion.div className={cn('flex overflow-hidden', className)} {...anim(letters(stagger))}>
      {children.split('').map((l, i) => (
        <motion.span key={i} variants={individualLetter} className="inline-flex">
          {l}
        </motion.span>
      ))}
    </motion.div>
  );
}
