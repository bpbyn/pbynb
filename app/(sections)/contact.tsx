import React from 'react';

export default function Contact() {
  return (
    <section className="relative h-screen overflow-x-clip px-16 py-8">
      {/* <div
        className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent blur-[0px]"
      /> */}
      <div className="absolute h-1/2 w-full translate-y-[50%] bg-accent blur-[350px]" />
      <div className="relative grid h-full content-center space-y-1">
        <span className="font-mono text-xl font-light text-muted">{`// WHAT ARE YOU WAITING FOR?`}</span>
        <h3 className="max-w-md text-8xl">Reach out, don’t doubt— let’s figure it out</h3>
      </div>
    </section>
  );
}
