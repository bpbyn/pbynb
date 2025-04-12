import { ReactLenis } from 'lenis/react';

import About from './(sections)/about';
// import PreLoader from './(sections)/preloader';
import Experience from './(sections)/experience';
import Hero from './(sections)/hero';
import Projects from './(sections)/projects';
import Works from './(sections)/works';

export default function Home() {
  return (
    <ReactLenis root>
      {/* <PreLoader /> */}
      <Hero />
      <About />
      <Experience />
      <Works />
      <Projects />
    </ReactLenis>
  );
}
