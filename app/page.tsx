'use client';

import { ReactLenis } from 'lenis/react';
import { useEffect, useState } from 'react';

import About from './(sections)/about';
import Experience from './(sections)/experience';
import Hero from './(sections)/hero';
import PreLoader from './(sections)/preloader';
import Projects from './(sections)/projects';
import Works from './(sections)/works';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Scroll to top only on first load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Disable scroll while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  return (
    <ReactLenis root>
      {isLoading ? (
        <PreLoader />
      ) : (
        <>
          <Hero />
          <About />
          <Experience />
          <Works />
          <Projects />
        </>
      )}
    </ReactLenis>
  );
}
