'use client';

import { Icons } from '@/components/icons';
import LinkToAction from '@/motion-components/link-to-action';
import ScrambleText from '@/motion-components/scramble-text';
import StaggerText from '@/motion-components/stagger-text';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Experience() {
  const scaleRef = useRef(null);
  const exitAnimationRef = useRef(null);
  const buttonProgressRef = useRef(null);

  const { scrollYProgress: entryScrollProgress } = useScroll({
    target: scaleRef,
    offset: ['start start', 'end start'],
  });

  const { scrollYProgress: exitScrollProgress } = useScroll({
    target: exitAnimationRef,
    offset: ['start end', 'end end'],
  });

  const { scrollYProgress: scrollScaleProgress } = useScroll({
    target: buttonProgressRef,
    offset: ['start start', '0.8 end'],
  });

  const smoothEntryScale = useSpring(entryScrollProgress, {
    stiffness: 500,
    damping: 40,
    mass: 0.3,
  });

  const smoothExitScale = useSpring(exitScrollProgress, {
    stiffness: 500,
    damping: 40,
    mass: 0.3,
  });

  const smoothButtonScale = useSpring(scrollScaleProgress, {
    stiffness: 500,
    damping: 40,
    mass: 0.3,
  });

  const scale = useTransform(smoothEntryScale, [0, 1], [0, 1]);
  const scaleExit = useTransform(smoothExitScale, [0, 1], [1, 0]);
  const scaleButton = useTransform(smoothButtonScale, [0, 1], [0, 1]);

  // useMotionValueEvent(scrollScaleProgress, 'change', (current) => {
  //   console.log(current);
  // });

  const companies = [
    'ing',
    'asurion',
    'dxc technology',
    'willis towers watson',
    'reed elsevier philippines',
  ];

  const experience = [
    {
      company: 'ing',
      duration: 'Present',
      role: 'Engineer III',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellat laudantium
                    illum quia magni, doloribus nemo neque commodi! Quis id iure dolor doloremque
                    veritatis consequatur ullam sit totam amet numquam. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Sed repellat laudantium illum quia magni,
                    doloribus nemo neque commodi! Quis id iure dolor doloremque veritatis
                    consequatur ullam sit totam amet numquam. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Sed repellat laudantium illum quia magni, doloribus nemo neque
                    commodi! Quis id iure dolor doloremque veritatis consequatur ullam sit totam
                    amet numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    repellat laudantium illum quia magni, doloribus nemo neque commodi! Quis id iure
                    dolor doloremque veritatis consequatur ullam sit totam amet numquam.`,
      techUsed: [
        'Lit',
        'Javascript',
        'Typescript',
        'Java',
        'Spring Boot',
        'Azure',
        'Storybook',
        'Splunk',
        'Adobe Analytics',
      ],
    },
    {
      company: 'asurion',
      duration: '2021 - 2024',
      role: 'Software Engineer II',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellat laudantium
                    illum quia magni, doloribus nemo neque commodi! Quis id iure dolor doloremque
                    veritatis consequatur ullam sit totam amet numquam. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Sed repellat laudantium illum quia magni,
                    doloribus nemo neque commodi! Quis id iure dolor doloremque veritatis
                    consequatur ullam sit totam amet numquam. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Sed repellat laudantium illum quia magni, doloribus nemo neque
                    commodi! Quis id iure dolor doloremque veritatis consequatur ullam sit totam
                    amet numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    repellat laudantium illum quia magni, doloribus nemo neque commodi! Quis id iure
                    dolor doloremque veritatis consequatur ullam sit totam amet numquam.`,
      techUsed: [
        'React',
        'Typescript',
        'AWS',
        'GraphQL',
        'WebSockets',
        'Twilio',
        'Contentful',
        'Storybook',
        'React Query',
        'Redux',
        'Chakra UI',
        'TailwindCSS',
        'Styled Components',
        'Material UI',
        'Ant Design',
        'Recharts',
        'Node',
        'Java',
        'JAX RS',
        'DynamoDB',
        'PosgreSQL',
        'Vite',
        'Playwright',
        'Mixpanel',
        'Fullstory',
        'Jenkins',
        'Github Actions',
      ],
    },
    {
      company: 'dxc technology',
      duration: '2019 - 2021',
      role: 'Technology Consultant II',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellat laudantium
                    illum quia magni, doloribus nemo neque commodi! Quis id iure dolor doloremque
                    veritatis consequatur ullam sit totam amet numquam. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Sed repellat laudantium illum quia magni,
                    doloribus nemo neque commodi! Quis id iure dolor doloremque veritatis
                    consequatur ullam sit totam amet numquam. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Sed repellat laudantium illum quia magni, doloribus nemo neque
                    commodi! Quis id iure dolor doloremque veritatis consequatur ullam sit totam
                    amet numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    repellat laudantium illum quia magni, doloribus nemo neque commodi! Quis id iure
                    dolor doloremque veritatis consequatur ullam sit totam amet numquam.`,
      techUsed: [
        'Angular',
        'React',
        'Typescript',
        'Javascript',
        'HTML',
        'CSS',
        'ChartJS',
        'Python',
        'Django',
        'C#',
        'Spring Boot',
        'Kafka',
        'Jenkins',
        'SonarQube',
        'Azure',
        'PostgreSQL',
      ],
    },
    {
      company: 'willis towers watson',
      duration: '2018 - 2019',
      role: 'Software Developer',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellat laudantium
                    illum quia magni, doloribus nemo neque commodi! Quis id iure dolor doloremque
                    veritatis consequatur ullam sit totam amet numquam. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Sed repellat laudantium illum quia magni,
                    doloribus nemo neque commodi! Quis id iure dolor doloremque veritatis
                    consequatur ullam sit totam amet numquam. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Sed repellat laudantium illum quia magni, doloribus nemo neque
                    commodi! Quis id iure dolor doloremque veritatis consequatur ullam sit totam
                    amet numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    repellat laudantium illum quia magni, doloribus nemo neque commodi! Quis id iure
                    dolor doloremque veritatis consequatur ullam sit totam amet numquam.`,
      techUsed: ['Python', 'Unix'],
    },
    {
      company: 'reed elsevier philippines',
      duration: '2015 - 2017',
      role: 'Programmer',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellat laudantium
                    illum quia magni, doloribus nemo neque commodi! Quis id iure dolor doloremque
                    veritatis consequatur ullam sit totam amet numquam. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Sed repellat laudantium illum quia magni,
                    doloribus nemo neque commodi! Quis id iure dolor doloremque veritatis
                    consequatur ullam sit totam amet numquam. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Sed repellat laudantium illum quia magni, doloribus nemo neque
                    commodi! Quis id iure dolor doloremque veritatis consequatur ullam sit totam
                    amet numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    repellat laudantium illum quia magni, doloribus nemo neque commodi! Quis id iure
                    dolor doloremque veritatis consequatur ullam sit totam amet numquam.`,
      techUsed: ['Pascal Delphi'],
    },
  ];

  return (
    <section
      className="relative min-h-screen bg-background_second px-16 py-8 md:mb-[-100svh] xl:px-36"
      id="experience"
      ref={buttonProgressRef}
    >
      <div className="relative z-20 flex items-end justify-between" ref={scaleRef}>
        <div>
          <span className="font-mono text-xl font-light text-muted">
            <ScrambleText className="px-0">{`// WHERE I'VE BEEN?`}</ScrambleText>
          </span>
          <h3 className="max-w-xl text-8xl">
            <StaggerText stagger={true} quick={true}>
              Professional
            </StaggerText>
            <StaggerText stagger={false} quick={true}>
              Timeline
            </StaggerText>
          </h3>
        </div>
        <div className="flex justify-between gap-8">
          <div className="min-w-fit font-mono text-lg font-light text-muted">(EXPERIENCE)</div>
          <motion.div
            className="max-w-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              ease: 'easeInOut',
              duration: 1.5,
            }}
          >
            Every project, role, and collaboration has shaped the way I think, create, and solve
            problems.
          </motion.div>
        </div>
      </div>

      <span className="inline">
        <motion.div
          className="fixed right-20 top-24 z-20 w-full xl:right-36"
          style={{ scaleY: scaleExit }}
        >
          <div className="flex items-center justify-end">
            <div className="group flex cursor-pointer gap-4">
              <motion.div style={{ scale: scaleExit }}>
                <LinkToAction style={{ scale }} href="https://www.google.com" label="RESUME" />
              </motion.div>
              <motion.div style={{ scale: scaleExit }}>
                <motion.div className="relative" style={{ scale }}>
                  <a
                    className="tracking-base group pointer-events-auto relative transform-none overflow-hidden"
                    href="https://www.google.com"
                  >
                    <span className="group relative flex size-16 items-center justify-center overflow-hidden rounded-full bg-slate-500/35">
                      <span className="absolute size-16 translate-y-full rotate-45 rounded-full bg-accent transition-all duration-500 group-hover:translate-y-0"></span>
                      <svg
                        id="progress"
                        width="70"
                        height="70"
                        viewBox="0 0 70 70"
                        className="relative -rotate-90 overflow-hidden"
                      >
                        <motion.circle
                          cx="35"
                          cy="35"
                          r="32.5"
                          pathLength="1"
                          className="ease-expo absolute -translate-x-full fill-transparent stroke-slate-500 stroke-[0.2rem] transition-transform duration-500 group-hover:translate-x-0"
                          style={{ pathLength: scaleButton }}
                        />
                        <motion.circle
                          cx="35"
                          cy="35"
                          r="32.5"
                          pathLength="1"
                          className="ease-expo translate-x-0 fill-transparent stroke-accent stroke-[0.2rem] transition-transform duration-500 group-hover:-translate-x-full"
                          style={{ pathLength: scaleButton }}
                        />
                      </svg>
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:-translate-y-[300%]">
                        <Icons.arrow45deg className="h-5 w-5 -rotate-45" />
                      </span>
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[300%] rotate-180 transition-all duration-500 ease-in-out group-hover:-translate-y-1/2 group-hover:rotate-0">
                        <Icons.arrow45deg className="h-5 w-5 -rotate-45 transition-all duration-500 ease-in-out group-hover:-rotate-[225deg]" />
                      </span>
                    </span>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        {experience.map((e, i) => (
          <div className="sticky top-0 h-[100svh]" key={`company-${e}-${i}`}>
            <div
              className="relative border-t border-t-muted bg-background_second p-8"
              style={{
                top: `calc(20vh + ${5.75 * i}em)`,
                marginBottom: `${5.75 * (experience.length - i)}em`,
              }}
            >
              <div className="flex justify-between">
                <span className="text-4xl font-semibold">{e.company}</span>
                <span className="text-xl font-light text-muted">{e.duration}</span>
              </div>
              <div className="grid h-full grid-cols-[auto_1fr] place-content-between gap-24 py-8">
                <span className="w-60 text-lg font-medium text-muted">{e.role}</span>
                <div className="space-y-8">
                  <p>{e.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {e.techUsed.map((t, i) => (
                      <span
                        className="h-fit w-fit whitespace-nowrap text-nowrap rounded-full bg-slate-500/35 px-4 py-1 text-xs"
                        key={`tech-${i}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </span>

      <div className="sticky top-0 h-[100svh]" ref={exitAnimationRef}>
        <div
          className="relative bg-background_second p-8"
          style={{
            top: `calc(8vh + ${5.75 * companies.length}em)`,
            marginBottom: '0em',
          }}
        ></div>
      </div>

      <div className="absolute bottom-[20%] left-24 z-10 h-96 w-1/5 bg-accent opacity-80 blur-[300px]" />
      <div className="absolute right-0 top-0 z-10 h-1/6 w-1/2 bg-accent blur-[400px]" />
    </section>
  );
}
