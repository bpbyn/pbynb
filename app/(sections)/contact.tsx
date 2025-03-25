'use client';

import { Icons } from '@/components/icons';
import { navigation } from '@/components/navbar';
import { useNavLenis } from '@/hooks/use-nav-lenis';
import DisplayText from '@/motion-components/display-text';
import LinkToAction from '@/motion-components/link-to-action';
import MaskText from '@/motion-components/mask-text';
import ParallelText from '@/motion-components/parallel-text';
import ScrambleText from '@/motion-components/scramble-text';
import StaggerText from '@/motion-components/stagger-text';
import React from 'react';

export default function Contact() {
  const { onNavClick } = useNavLenis();

  return (
    <div className="mt-[-100svh]">
      <div className="relative h-svh" />
      <div className="sticky bottom-0 z-0">
        <section className="relative flex h-screen flex-col overflow-x-clip" id="contact">
          {/* <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent blur-[350px]" /> */}
          {/* <div className="absolute h-1/2 w-full translate-y-[50%] bg-accent blur-[350px]" /> */}
          <div className="relative grid h-full grid-cols-2 gap-52 px-16 py-8 xl:px-36">
            <div className="grid place-content-between pt-16">
              <div>
                <span className="font-mono text-xl font-light text-muted">
                  <ScrambleText className="px-0">{`// WHAT ARE YOU WAITING FOR?`}</ScrambleText>
                </span>
                <h3 className="grid max-w-md gap-1 text-8xl">
                  <StaggerText stagger={true} quick={false}>
                    Reach
                  </StaggerText>
                  <StaggerText stagger={false} quick={false}>
                    out, don’t
                  </StaggerText>
                  <StaggerText stagger={true} quick={false}>
                    doubt—
                  </StaggerText>
                  <StaggerText stagger={false} quick={false} className="pb-2">
                    let’s figure
                  </StaggerText>
                  <StaggerText stagger={true} quick={false}>
                    it out
                  </StaggerText>
                </h3>
              </div>
              <LinkToAction label="LET'S CONNECT" />
              <div />
            </div>
            <div className="grid h-full grid-rows-[1fr_auto]">
              <div className="flex h-full flex-col justify-center gap-8 font-serif text-5xl">
                {/* <span className='font-mono text-muted text-lg justify-self-end'>(MENU)</span> */}
                {navigation.slice(0, 4).map(({ id, title }, i) => (
                  <MaskText key={`shortcut-${i}`} duration={1.9}>
                    <a
                      className="group relative grid overflow-hidden border-b border-b-muted"
                      onClick={() => onNavClick(id)}
                      href={id === '#home' ? '' : id}
                    >
                      <div className="ease-expo absolute flex w-full translate-y-0 cursor-pointer items-center justify-between overflow-hidden px-4 pb-4 transition-all duration-500 group-hover:-translate-y-full">
                        <span>{title}</span>
                        <Icons.arrow45deg className="ease-expo h-9 w-9 transition-all duration-500 group-hover:-translate-x-8 group-hover:-rotate-45" />
                      </div>
                      <div className="ease-expo flex translate-y-full cursor-pointer items-center justify-between px-4 pb-4 transition-all duration-500 group-hover:translate-y-0">
                        <span>{title}</span>
                        <Icons.arrow45deg className="ease-expo h-9 w-9 transition-all duration-500 group-hover:-rotate-45" />
                      </div>
                    </a>
                  </MaskText>
                ))}
              </div>
              <span className="font-light text-muted">
                © 2025 Brian Punongbayan. All rights reserved.
              </span>

              {/* <div className="relative">
                <div className="group absolute bottom-8 right-0 size-16 overflow-hidden rounded-full border">
                  <div className="relative">
                    <span className="ease-cubic absolute size-16 translate-y-full rotate-45 rounded-lg bg-accent transition-all duration-500 group-hover:translate-y-0 group-hover:rounded-full"></span>
                    
                  </div>
                </div>
              </div> */}
              <div className="absolute bottom-8 right-16 size-20 overflow-hidden rounded-full xl:right-36">
                <a
                  className="group relative flex size-20 items-center justify-center overflow-hidden rounded-full border-2 border-slate-500/35 bg-slate-500/35"
                  onClick={() => onNavClick('#home')}
                  href=""
                >
                  <span className="absolute size-20 translate-y-full rotate-45 rounded-full bg-accent transition-all duration-500 group-hover:translate-y-0"></span>

                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:-translate-y-[310%]">
                    <Icons.arrow45deg className="h-5 w-5 -rotate-45" />
                  </span>
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[310%] rotate-180 transition-all duration-500 ease-in-out group-hover:-translate-y-1/2 group-hover:rotate-0">
                    <Icons.arrow45deg className="h-5 w-5 -rotate-45" />
                  </span>
                </a>
              </div>
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
