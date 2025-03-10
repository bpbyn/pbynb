import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';

const CYCLES_PER_LETTER = 1;
const SHUFFLE_TIME = 50;

const CHARS = 'BRIANCPUNONGBAYAN10191201$';

export default function ScrambleText({
  children,
  className,
}: {
  children: string;
  className?: React.ComponentProps<'div'>['className'];
}) {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [text, setText] = useState(children);

  const stopScramble = useCallback(() => {
    clearInterval(intervalRef.current || undefined);
    setText(children);
  }, [children]);

  const scramble = useCallback(() => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = children
        .split('')
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join('');

      setText(scrambled);
      pos++;

      if (pos >= children.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  }, [children, stopScramble]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      onViewportEnter={scramble}
      className={cn('relative px-4 py-2 font-mono font-medium uppercase', className)}
    >
      <div className="relative flex items-center gap-2">
        <span>{text}</span>
      </div>
    </motion.button>
  );
}
