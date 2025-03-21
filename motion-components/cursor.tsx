import { anim } from '@/lib/utils';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { RefObject, useEffect, useState } from 'react';

export default function Cursor({ linksRef }: { linksRef: RefObject<HTMLDivElement[] | null> }) {
  const [cursorTexts, setCursorTexts] = useState<string[]>([]);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isHovered, setIsHovered] = useState(false);

  const cursorSize = isHovered ? 56 : 16;

  const variants = {
    default: {
      width: cursorSize,
      height: cursorSize,
    },
    links: {
      width: cursorSize + 50,
      height: cursorSize - 5,
      backgroundColor: '#4354BF',
    },
  };

  const cursorAnimation = (isSymbol: boolean = false) => {
    return {
      initial: {
        x: isSymbol ? -20 : undefined,
        y: isSymbol ? 45 : -45,
        rotate: isSymbol ? 0 : undefined,
      },
      animate: {
        x: isSymbol ? 0 : undefined,
        y: 0,
        rotate: isSymbol ? -45 : undefined,
        transition: {
          ease: 'easeInOut',
          duration: 0.4,
        },
      },
    };
  };

  const cursor = {
    y: useMotionValue(0),
    x: useMotionValue(0),
  };

  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 50,
    mass: 0.5,
  };

  const smoothMouse = {
    x: useSpring(cursor.x, spring),
    y: useSpring(cursor.y, spring),
  };

  const trackCursor = (e: MouseEvent) => {
    const { clientY, clientX } = e;
    cursor.y.set(clientY - cursorSize / 2 + 50);
    cursor.x.set(clientX - cursorSize / 2 + 50);
  };

  const linkOver = () => {
    setCursorTexts(['Visit', '➪']);
    setCursorVariant('links');
    setIsHovered(true);
  };

  const linkLeave = () => {
    setCursorTexts([]);
    setCursorVariant('default');
    setIsHovered(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', trackCursor);

    const cleanUp = linksRef.current;
    linksRef?.current?.forEach((link) => {
      link.addEventListener('mouseover', linkOver);
      link.addEventListener('mouseleave', linkLeave);
    });

    return () => {
      window.removeEventListener('mousemove', trackCursor);
      cleanUp?.forEach((link) => {
        link.removeEventListener('mouseover', linkOver);
        link.removeEventListener('mouseleave', linkLeave);
      });
    };
  });

  return (
    <motion.div
      variants={variants}
      animate={cursorVariant}
      transition={spring}
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
      className="pointer-events-none fixed z-[999] flex h-4 w-4 items-center justify-center gap-2 overflow-hidden rounded-lg"
    >
      {cursorTexts.length > 0 && (
        <>
          <motion.span
            className="rounded-lg bg-slate-500/35 px-4 py-2 text-xs"
            {...anim(cursorAnimation())}
          >
            {cursorTexts[0]}
          </motion.span>
          <motion.div className="text-xl" {...anim(cursorAnimation(true))}>
            {cursorTexts[1]}
          </motion.div>
        </>
      )}
    </motion.div>
  );
}
