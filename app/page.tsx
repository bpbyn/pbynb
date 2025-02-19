import { ReactLenis } from 'lenis/react';

import About from './(sections)/about';
import Contact from './(sections)/contact';
import Experience from './(sections)/experience';
import Hero from './(sections)/hero';
import PreLoader from './(sections)/preloader';
import Projects from './(sections)/projects';

export default function Home() {
  return (
    <ReactLenis root>
      <PreLoader />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </ReactLenis>
  );
}
