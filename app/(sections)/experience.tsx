export default function Experience() {
  return (
    <section className="relative min-h-screen bg-background_second px-16 py-8">
      <div className="flex items-end justify-between">
        <div>
          <span className="font-mono text-xl font-light text-muted">{`// WHERE I'VE BEEN?`}</span>
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
      <div className="top-0 md:sticky">
        <div className="w-full">
          <div
            className="relative flex justify-between border-t border-t-muted p-8"
            style={{
              top: 'calc(8vh + 0em)',
              marginBottom: '17.25em',
            }}
          >
            <div>ING</div>
            <div>2024 - PRESENT</div>
          </div>
        </div>
      </div>
      {/* <div className="top-0 md:sticky">
        <div
          className="relative flex justify-between border-t p-8"
          style={{
            top: 'calc(20vh + 1.75em)',
            marginBottom: '11.25em',
          }}
        >
          <div>testing</div>
          <div>testing</div>
        </div>
      </div>
      <div className="top-0 md:sticky">
        <div
          className="relative flex justify-between border-t p-8"
          style={{
            top: 'calc(20vh + 6.75em)',
            marginBottom: '5.75em',
          }}
        >
          <div>testing</div>
          <div>testing</div>
        </div>
      </div> */}

      <div className="absolute -bottom-24 left-24 z-10 h-96 w-1/5 bg-accent opacity-80 blur-[250px]" />
      <div className="absolute right-0 top-0 z-10 h-1/2 w-1/2 bg-accent blur-[400px]" />
    </section>
  );
}
