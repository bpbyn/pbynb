'use client';

import ScrambleText from '@/motion-components/scramble-text';

export default function Projects() {
  return (
    <section className="relative min-h-screen rounded-b-3xl bg-background_second px-16 py-8">
      <div className="absolute -right-12 top-0 h-1/2 w-1/2 bg-accent blur-[350px]" />
      <div className="absolute bottom-0 left-32 h-96 w-1/5 bg-accent opacity-80 blur-[200px]" />
      <div className="relative flex h-svh items-start justify-between gap-16">
        <div className="sticky top-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-mono text-xl font-light text-muted">
                <ScrambleText>{`// WHAT I'VE BUILT?`}</ScrambleText>
              </span>
              <h3 className="max-w-md text-8xl">Pixels and Code</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-8">
          <div className="min-w-fit font-mono text-xl font-light text-muted">(WORKS)</div>
          <div className="max-w-sm">
            These are projects I’ve put my time and effort to complete. I hope you’ll like it as
            much as I do!
          </div>
        </div>
      </div>
    </section>
  );
}
