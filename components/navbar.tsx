'use client';

import { useNavLenis } from '@/hooks/use-nav-lenis';
import { anim } from '@/lib/utils';
import ScrambleText from '@/motion-components/scramble-text';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useRef, useState } from 'react';

export const navigation = [
  {
    title: 'HOME',
    id: '#home',
  },
  {
    title: 'ABOUT',
    id: '#about',
  },
  {
    title: 'EXPERIENCE',
    id: '#experience',
  },
  {
    title: 'PROJECTS',
    id: '#projects',
  },
  {
    title: 'CONTACT',
    id: '#contact',
  },
];

const scroll = (scrollVal: number) => {
  return {
    animate: {
      y: scrollVal >= 50 ? '-150%' : '0%',
      transition: {
        ease: [0.65, 0, 0.35, 1],
        duration: 0.5,
        damping: 100,
      },
    },
  };
};

const entrance = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: [0.76, 0, 0.1, 0.95],
    },
  },
};

export default function Navbar() {
  const { onNavClick } = useNavLenis();
  // const lenis = useLenis();
  const container = useRef<HTMLDivElement>(null);
  const [scrollVal, setScrollVal] = useState<number>(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (current) => {
    setScrollVal(current);
  });

  return (
    <motion.header
      ref={container}
      className="fixed top-0 z-[999] w-full overflow-hidden"
      {...anim(scroll(scrollVal))}
    >
      <motion.div
        className="flex items-center justify-between px-16 py-8 xl:px-36"
        {...anim(entrance)}
      >
        <motion.h3 className="text-3xl">bpbyn.</motion.h3>
        <nav className="flex items-center justify-evenly gap-8 font-mono text-lg font-medium text-muted">
          {navigation.slice(1, 5).map((nav, i) => (
            <a
              href={nav.id}
              onClick={() => onNavClick(nav.id)}
              key={`nav-${i}`}
              id={nav.id}
              className="hover:text-foreground"
            >
              <ScrambleText>{nav.title}</ScrambleText>
            </a>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
}
