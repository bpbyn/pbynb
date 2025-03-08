'use client';

import { anim } from '@/lib/utils';
import ScrambleText from '@/motion-components/scramble-text';
import { useLenis } from 'lenis/react';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useRef, useState } from 'react';

const navigation = [
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
  const lenis = useLenis();
  const container = useRef<HTMLDivElement>(null);
  const [scrollVal, setScrollVal] = useState<number>(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (current) => {
    setScrollVal(current);
  });

  const handleNavClick = (id: string) => {
    const targetId = id.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement && lenis) {
      const rect = targetElement.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      let targetPosition = rect.top + scrollTop;
      if (targetId === 'contact') {
        targetPosition -= window.innerHeight - 3000;
      }

      // Scroll to the calculated position
      lenis.scrollTo(targetPosition, {
        duration: 1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <motion.header
      ref={container}
      className="fixed top-0 z-[999] w-full overflow-hidden"
      {...anim(scroll(scrollVal))}
    >
      <motion.div className="flex items-center justify-between px-16 py-8" {...anim(entrance)}>
        <motion.h3 className="text-3xl">bpbyn.</motion.h3>
        <nav className="flex items-center justify-evenly gap-8 font-mono text-lg font-medium text-muted">
          {navigation.map((nav, i) => (
            <a
              href={nav.id}
              onClick={() => handleNavClick(nav.id)}
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
