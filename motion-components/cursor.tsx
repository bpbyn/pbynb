import { motion, useMotionValue, useSpring } from 'motion/react';
import { RefObject, useEffect, useState } from 'react';

// useMotionValue avoids things from doing unnecessary rerendering --> Switch from useState

export default function Cursor({ linksRef }: { linksRef: RefObject<HTMLDivElement[] | null> }) {
  const [cursorTexts, setCursorTexts] = useState<string[]>([]);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isHovered, setIsHovered] = useState(false);
  // const [isVideoHovered, setIsVideoHovered] = useState(false);

  // Cursor Logic & Tracking
  const cursorSize = isHovered ? 56 : 16;

  //   setting the initial positions of the cursor
  const cursor = {
    y: useMotionValue(0),
    x: useMotionValue(0),
  };

  //   Transition configuration
  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 50,
    mass: 0.5,
  };

  //   Smoothing the mouse cursor when moved
  const smoothMouse = {
    x: useSpring(cursor.x, spring),
    y: useSpring(cursor.y, spring),
  };

  //   Tracking the cursor
  const trackCursor = (e: MouseEvent) => {
    const { clientY, clientX } = e;
    cursor.y.set(clientY - cursorSize / 2 + 50);
    cursor.x.set(clientX - cursorSize / 2 + 50);
  };

  // Variants to change when hovered
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

  //   Hovering functions
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

  // const videoOver = () => {
  //   setCursorText('view');
  //   setCursorVariant('video');
  //   setIsVideoHovered(true);
  //   setIsHovered(true);
  // };

  // const videoLeave = () => {
  //   setCursorText('');
  //   setCursorVariant('default');
  //   setIsVideoHovered(false);
  //   setIsHovered(false);
  // };

  useEffect(() => {
    window.addEventListener('mousemove', trackCursor);

    const cleanUp = linksRef.current;
    linksRef?.current?.forEach((link) => {
      link.addEventListener('mouseover', linkOver);
      link.addEventListener('mouseleave', linkLeave);
    });
    // Cleaning up the listeners after it has unmounted
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
            initial={{ y: -45 }}
            animate={{ y: 0 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.4,
            }}
          >
            {cursorTexts[0]}
          </motion.span>
          <motion.div
            className="text-xl"
            initial={{
              y: 45,
              x: -20,
              rotate: 0,
            }}
            animate={{
              y: 0,
              x: 0,
              rotate: -45,
            }}
            transition={{
              ease: 'easeInOut',
              duration: 0.4,
            }}
          >
            {cursorTexts[1]}
          </motion.div>
        </>
      )}
    </motion.div>
  );
}
