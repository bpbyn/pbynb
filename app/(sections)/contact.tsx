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
    <div className="-mt-[100svh] overflow-hidden">
      <div className="relative h-svh" />
      <div className="sticky bottom-0 z-0">
        <section className="relative flex h-screen flex-col" id="contact">
          {/* <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent blur-[350px]" /> */}
          {/* <div className="absolute h-1/2 w-full translate-y-[50%] bg-accent blur-[350px]" /> */}
          <div className="relative grid h-full grid-cols-1 gap-4 px-8 py-8 md:grid-cols-2 lg:px-16 xl:gap-52 xl:px-36">
            <div className="grid place-content-between gap-8 sm:gap-0 lg:pt-16">
              <div className="w-full">
                <span className="font-mono text-base font-light text-muted lg:text-base-md">
                  <ScrambleText className="px-0">{`// WHAT ARE YOU WAITING FOR?`}</ScrambleText>
                </span>
                {/* <h3 className="text-base-5xl leading-[3rem] tracking-tight md:max-w-lg lg:text-base-6xl lg:leading-[6rem]"> */}
                <h3 className="hidden gap-1 overflow-hidden text-base-6xl leading-[6rem] tracking-normal md:grid md:max-w-md">
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
                <h3 className="max-w-md text-base-4xl leading-[4rem] tracking-normal sm:text-base-5xl sm:leading-[5rem] md:hidden">
                  <MaskText>Reach out,</MaskText>
                  <MaskText>don’t doubt—</MaskText>
                  <MaskText>let’s figure it out</MaskText>
                </h3>
              </div>
              <LinkToAction label="LET'S TALK" />
              <div />
            </div>
            <div className="grid h-full grid-rows-[1fr_auto]">
              <div className="flex h-full flex-col justify-center gap-8 font-serif text-base-2xl leading-none sm:text-base-3xl">
                {navigation.slice(0, 4).map(({ id, title }, i) => (
                  <MaskText key={`shortcut-${i}`} duration={1.9}>
                    <a
                      className="group relative grid overflow-hidden border-b border-b-muted"
                      onClick={() => onNavClick(id)}
                      href={id === '#home' ? '' : id}
                    >
                      <div className="ease-expo absolute flex w-full translate-y-0 cursor-pointer items-center justify-between overflow-hidden px-4 pb-4 transition-all duration-500 group-hover:-translate-y-full">
                        <span>{title}</span>
                        <Icons.arrow45deg className="ease-expo h-7 w-7 transition-all duration-500 group-hover:-translate-x-8 group-hover:-rotate-45" />
                      </div>
                      <div className="ease-expo flex translate-y-full cursor-pointer items-center justify-between px-4 pb-4 transition-all duration-500 group-hover:translate-y-0">
                        <span>{title}</span>
                        <Icons.arrow45deg className="ease-expo h-7 w-7 transition-all duration-500 group-hover:-rotate-45" />
                      </div>
                    </a>
                  </MaskText>
                ))}
              </div>
              <span className="inline max-w-sm text-base-xs font-light text-muted">
                © 2025 Brian Punongbayan. All rights reserved.
              </span>
              <div className="absolute bottom-8 right-8 hidden size-20 overflow-hidden rounded-full lg:block">
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
              className="py-0 text-white md:py-4"
            >
              {[...Array(4)].map((_, i) => (
                <DisplayText
                  key={`displayTxt-${i}`}
                  className="py-0 text-base-2xl md:text-base-6xl"
                >
                  <span className="uppercase">Brian Punongbayan</span>
                  <span className="font-mono text-base-xs leading-none text-muted">
                    &nbsp;[2025]&nbsp;
                  </span>
                </DisplayText>
              ))}
            </ParallelText>
          </div>
        </section>
      </div>
    </div>
  );
}
