'use client';

import { useDimension } from '@/hooks/use-dimension';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function About() {
  const section = useRef(null);
  const dimensions = useDimension();

  const { scrollYProgress } = useScroll({
    target: section,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, dimensions.height]);

  console.log(scrollY);
  return (
    <motion.section
      className="relative min-h-screen rounded-t-3xl bg-background_second px-16 py-8"
      ref={section}
      // id="about"
      // initial={{ opacity: 0, background: 'blue' }}
      // whileInView={{ opacity: 1, background: 'red' }}
    >
      <div className="flex items-start justify-between gap-24">
        <div className="sticky top-8 h-dvh">
          <div className="space-y-1">
            <span className="font-mono text-xl font-light text-muted">{`// WHO AM I?`}</span>
            <h3 className="max-w-md text-8xl">Meet the Maker</h3>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-16">
          <motion.div className="flex flex-col gap-8" style={{ y }}>
            <div className="h-64 w-48 rounded-lg bg-white" />
            <div className="h-64 w-48 rounded-lg bg-white" />
            <div className="h-64 w-48 rounded-lg bg-white" />
            <div className="h-64 w-48 rounded-lg bg-white" />
            <div className="h-64 w-48 rounded-lg bg-white" />
            <div className="h-64 w-48 rounded-lg bg-white" />
            <div className="h-64 w-48 rounded-lg bg-white" />
          </motion.div>
          <div className="flex flex-col gap-8">
            <div className="h-64 w-48 rounded-lg bg-white" />
            <div className="h-64 w-48 rounded-lg bg-white" />
            <div className="h-64 w-48 rounded-lg bg-white" />
            <div className="h-64 w-48 rounded-lg bg-white" />
            <div className="h-64 w-48 rounded-lg bg-white" />
            <div className="h-64 w-48 rounded-lg bg-white" />
            <div className="h-64 w-48 rounded-lg bg-white" />
          </div>
        </div>
        {/* <div className="font-serif text-6xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus velit doloremque sed
          repudiandae ducimus laborum voluptate quaerat corrupti harum enim minus at saepe
          exercitationem qui sunt, illum excepturi, error mollitia. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Temporibus velit doloremque sed repudiandae ducimus laborum
          voluptate quaerat corrupti harum enim minus at saepe exercitationem qui sunt, illum
          excepturi, error mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
          ut? Id quaerat cum odit, unde error porro dolorem corrupti debitis similique. Totam ipsam
          numquam modi beatae quis accusamus voluptatibus corporis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus velit doloremque sed
          repudiandae ducimus laborum voluptate quaerat corrupti harum enim minus at saepe
          exercitationem qui sunt, illum excepturi, error mollitia. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Temporibus velit doloremque sed repudiandae ducimus laborum
          voluptate quaerat corrupti harum enim minus at saepe exercitationem qui sunt, illum
          excepturi, error mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
          ut? Id quaerat cum odit, unde error porro dolorem corrupti debitis similique. Totam ipsam
          numquam modi beatae quis accusamus voluptatibus corporis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus velit doloremque sed
          repudiandae ducimus laborum voluptate quaerat corrupti harum enim minus at saepe
          exercitationem qui sunt, illum excepturi, error mollitia. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Temporibus velit doloremque sed repudiandae ducimus laborum
          voluptate quaerat corrupti harum enim minus at saepe exercitationem qui sunt, illum
          excepturi, error mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
          ut? Id quaerat cum odit, unde error porro dolorem corrupti debitis similique. Totam ipsam
          numquam modi beatae quis accusamus voluptatibus corporis.
        </div> */}
      </div>
      {/* <div className="bg-accent absolute -bottom-24 left-1/2 h-96 w-96 -translate-x-[50%] rounded-full blur-[200px]" /> */}
      <div className="absolute bottom-0 left-0 z-10 h-96 w-96 rounded-full bg-accent opacity-80 blur-[350px]" />

      {/* <div className="absolute bottom-16 left-32 h-96 w-1/5 bg-accent opacity-80 blur-[200px]" /> */}
    </motion.section>
  );
}
