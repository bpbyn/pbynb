import { cn } from '@/lib/utils';
import { MotionStyle, motion } from 'motion/react';
import React, { useState } from 'react';

import ScrambleText from './scramble-text';

type LinkToActionProps = {
  label: string;
  labelBelow?: string;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  style?: MotionStyle;
  className?: React.ComponentProps<'div'>['className'];
};

export default function LinkToAction({
  label,
  labelBelow,
  href,
  target,
  style,
  className,
}: LinkToActionProps) {
  const [overrideHover, setOverrideHover] = useState(false);
  return (
    <motion.a
      className={cn(
        'tracking-base group pointer-events-auto relative flex h-fit w-fit transform-none items-center justify-center overflow-hidden rounded-full bg-slate-500/35 px-8 py-4 font-mono text-lg',
        className
      )}
      target={target ?? '_blank'}
      href={href}
      style={style}
      onMouseEnter={() => setOverrideHover(true)}
      onMouseLeave={() => setOverrideHover(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 3,
        ease: [0.76, 0, 0.1, 1],
      }}
    >
      <span className="absolute inset-0 z-10 block overflow-hidden">
        <span className="ease-expo block h-full w-full translate-y-full rounded-t-[15rem] bg-accent transition-all duration-500 sm:group-hover:translate-y-0 sm:group-hover:rounded-none" />
      </span>
      <span className="relative z-20 block overflow-hidden transition-all">
        <span className="ease-expo flex transition-all duration-500 sm:group-hover:-translate-y-full">
          {label}
        </span>
        <span className="ease-expo absolute left-0 translate-y-0 transition-all duration-500 group-hover:-translate-y-full">
          <ScrambleText className="p-0" overrideHover={overrideHover}>
            {labelBelow ?? label}
          </ScrambleText>
        </span>
      </span>
    </motion.a>
  );
}
