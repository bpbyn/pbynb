import { ReactLenis } from 'lenis/react';

// import About from './(sections)/about';
// import Experience from './(sections)/experience';
// import Hero from './(sections)/hero';
import HeroTest from './(sections)/hero-test';

// import PreLoader from './(sections)/preloader';
// import Projects from './(sections)/projects';
// import Works from './(sections)/works';

export default function Home() {
  return (
    <ReactLenis root>
      {/* <PreLoader /> */}
      {/* <Hero /> */}
      <HeroTest />
      {/* <About />
      <Experience />
      <Works />
      <Projects /> */}
    </ReactLenis>
  );
}
