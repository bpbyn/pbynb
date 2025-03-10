'use client';

import { Icons } from '@/components/icons';
import DisplayText from '@/motion-components/display-text';
import ParallelText from '@/motion-components/parallel-text';
import ScrambleText from '@/motion-components/scramble-text';
import React from 'react';

export default function Contact() {
  return (
    <div className="mt-[-100svh]">
      <div className="relative h-svh" />
      <div className="sticky bottom-0 z-0">
        <section className="relative flex h-screen flex-col overflow-x-clip" id="contact">
          {/* <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent blur-[350px]" /> */}
          {/* <div className="absolute h-1/2 w-full translate-y-[50%] bg-accent blur-[350px]" /> */}
          <div className="relative grid h-full grid-cols-2 gap-52 px-16 pt-8">
            <div className="grid content-start space-y-1 pt-16">
              <span className="font-mono text-xl font-light text-muted">
                <ScrambleText className="px-0">{`// WHAT ARE YOU WAITING FOR?`}</ScrambleText>
              </span>
              <h3 className="max-w-md text-8xl">Reach out, don’t doubt— let’s figure it out</h3>
            </div>
            <div className="grid h-full grid-rows-[1fr_auto]">
              <div className="flex h-full flex-col justify-center gap-8 font-serif text-5xl">
                {['ABOUT', 'EXPERIENCE', 'PROJECTS'].map((s, i) => (
                  <div
                    key={`shortcut-${i}`}
                    className="flex items-center justify-between border-b border-b-muted pb-4 hover:text-red-500"
                  >
                    <span>{s}</span>
                    <Icons.arrow45deg className="h-9 w-9" />
                  </div>
                ))}
              </div>
              <div className="relative">
                <div className="group absolute bottom-8 right-0">
                  {/* <figure className="relative rounded-full bg-gradient-to-tl from-transparent to-muted p-2 size-16 "> */}
                  <figure className="relative size-16 rounded-full border bg-transparent p-2">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out group-hover:-translate-y-6">
                      <Icons.arrow45deg className="h-7 w-7 -rotate-45" />
                    </div>
                    <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
                      {/* <circle
                        cx="50"
                        cy="50"
                        r="30"
                        pathLength="1"
                        className="stroke-muted fill-radial from-pink-400 from-40% to-fuchsia-700"
                      /> */}
                      {/* <circle
                        cx="50"
                        cy="50"
                        r="30"
                        pathLength="1"
                        className="stroke fill-none stroke-muted stroke-[0.18rem]"
                        style={{ pathLength: scale360 }}
                      /> */}
                    </svg>
                  </figure>
                </div>
              </div>
              {/* <span className="self-end text-right text-sm text-muted">
                © 2025 Brian Punongbayan. All rights reserved.
              </span> */}
            </div>
          </div>
          <div>
            <ParallelText
              baseVelocity={4}
              style={{ background: 'black' }}
              className="relative py-4 text-white"
            >
              {[...Array(4)].map((_, i) => (
                <DisplayText key={`displayTxt-${i}`}>
                  <span className="uppercase">Brian Punongbayan</span>
                  <span className="font-mono text-lg text-muted">&nbsp;[2025]&nbsp;</span>
                  {/* <div className="flex gap-8">
                    <span className="uppercase">&nbsp;Brian Punongbayan</span>
                    <div className="flex flex-col items-center justify-center font-mono text-xs text-muted">
                      <span>All</span>
                      <span>Rights</span>
                      <span>Reserved</span>
                      <span className="text-sm">[2025]</span>
                    </div>
                  </div> */}
                </DisplayText>
              ))}
            </ParallelText>
          </div>
        </section>
      </div>
    </div>
  );
}
