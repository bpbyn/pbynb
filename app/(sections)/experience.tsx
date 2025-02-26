'use client';

import ScrambleText from '@/motion-components/scramble-text';

export default function Experience() {
  const companies = [
    'ing',
    'asurion',
    'dxc technology',
    'willis towers watson',
    'reed elsevier philippines',
  ];

  return (
    <section className="relative min-h-screen bg-background_second px-16 py-8 md:mb-[-100svh]">
      <div className="flex items-end justify-between">
        <div>
          <span className="font-mono text-xl font-light text-muted">
            <ScrambleText>{`// WHERE I'VE BEEN?`}</ScrambleText>
          </span>
          <h3 className="max-w-md text-8xl">Professional Timeline</h3>
        </div>
        <div className="flex justify-between gap-8">
          <div className="min-w-fit font-mono text-xl font-light text-muted">(EXPERIENCE)</div>
          <div className="max-w-sm">
            Every project, role, and collaboration has shaped the way I think, create, and solve
            problems.
          </div>
        </div>
      </div>
      {companies.map((c, i) => (
        <div className="sticky top-0 h-[100svh]" key={`company-${c}-${i}`}>
          <div
            className="relative border-t border-t-muted bg-background_second p-8"
            style={{
              top: `calc(20vh + ${5.75 * i}em)`,
              marginBottom: `${5.75 * (companies.length - i)}em`,
            }}
          >
            <div className="flex justify-between">
              <span className="text-4xl font-semibold">{companies[i]}</span>
              <span className="text-xl font-light">2024 - Present</span>
            </div>
            <div className="flex items-center justify-between py-8">
              <span>Web Engineer</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellat laudantium
                illum quia magni, doloribus nemo neque commodi! Quis id iure dolor doloremque
                veritatis consequatur ullam sit totam amet numquam.
              </p>
              <span>Javscript</span>
            </div>
          </div>
        </div>
      ))}
      <div className="sticky top-0 h-[100svh]">
        <div
          className="relative border-t border-t-muted bg-background_second p-8"
          style={{
            top: `calc(8vh + ${5.75 * companies.length}em)`,
            marginBottom: '0em',
          }}
        ></div>
      </div>

      <div className="absolute -bottom-24 left-24 z-10 h-96 w-1/5 bg-accent opacity-80 blur-[250px]" />
      <div className="absolute right-0 top-0 z-10 h-1/2 w-1/2 bg-accent blur-[400px]" />
    </section>
  );
}
