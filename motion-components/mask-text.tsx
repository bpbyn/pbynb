import { anim, cn } from '@/lib/utils';
import { motion } from 'motion/react';

const variants = {
  initial: { y: '150px' },
  animate: { y: 0 },
};

export default function MaskText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: React.ComponentProps<'div'>['className'];
}) {
  return (
    <div className={cn('overflow-hidden will-change-auto', className)}>
      <motion.div
        {...anim(variants)}
        transition={{
          duration: 2,
          ease: [0.76, 0, 0.1, 1],
        }}
        className="overflow-visible"
      >
        {children}
      </motion.div>
    </div>
  );
}
