import { motion, useMotionTemplate, useMotionValue, useSpring } from 'motion/react';
import { useRef } from 'react';

export default function TiltCard({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  const ROTATION_RANGE = 32.5;
  const HALF_ROTATION_RANGE = 32.5 / 2;

  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative aspect-[4/3] h-fit w-full rounded-3xl md:aspect-[4/3] ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        transform,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
      }}
    >
      <div
        style={{
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
          position: 'relative',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
        }}
        className="rounded-3xl"
      >
        <div
          style={{
            transform: 'translateZ(75px)',
            transformStyle: 'preserve-3d',
            position: 'relative',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
          }}
          className="rounded-3xl"
        >
          <div
            style={{
              transform: 'translateZ(50px)',
              transformStyle: 'preserve-3d',
              position: 'relative',
            }}
            className="rounded-3xl"
          >
            <div className="relative grayscale transition-all duration-300 ease-in-out hover:grayscale-0">
              {children}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
