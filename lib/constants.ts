export const staticData = {
  navigation: {
    title: 'bpbyn.',
    links: [
      {
        title: 'HOME',
        id: '#home',
      },
      {
        title: 'ABOUT',
        id: '#about',
      },
      {
        title: 'EXPERIENCE',
        id: '#experience',
      },
      {
        title: 'PROJECTS',
        id: '#projects',
      },
      {
        title: 'CONTACT',
        id: '#contact',
      },
    ],
  },
  hero: {
    firstName: 'brian',
    lastName: 'punongbayan',
    primaryRole: ['front-end', 'developer'],
    roleDesc: [
      'I’m a Full Stack Developer specializing in intuitive front-end development.',
      'I craft pixel-perfect user interfaces that bring ideas to life.',
    ],
    contact: {
      label: 'SAY HELLO',
      target: 'mailto:punongbayan.brian@gmail.com',
    },
    footerScroll: `( SCROLL TO EXPLORE )`,
    footerLocation: '© 2025 BULACAN, PH',
  },
  about: {
    header: [`// WHO AM I?`, 'Meet the', 'Maker'],
    body: {
      title: '(ABOUT ME)',
      description: [
        `Hi there! I’m Brian, a developer from the Philippines with a passion for solving problems and building meaningful solutions through technology.`,
        `When I’m not coding, I enjoy staying up-to-date with the latest trends and innovations in the tech industry, constantly exploring how emerging technologies can shape the future.`,
        `Outside of work, I wear many hats. I’m a proud “radiohead” and a hands-on dad, often creating fun and unique lullabies to help my little one drift off to sleep. Before parenthood, I was an avid runner who loved pushing his limits. Running remains close to my heart, and I look forward to lacing up my shoes and getting back to it soon.`,
        `I’m always open to new opportunities, collaborations, and challenges that inspire creativity and drive progress. Let’s build something amazing together!`,
      ],
      socials: [
        {
          label: 'LINKEDIN',
          target: 'https://www.linkedin.com/in/bpunongbayan30/',
        },
        {
          label: 'GITHUB',
          target: 'https://github.com/bpbyn',
        },
        {
          label: 'INSTAGRAM',
          target: 'https://www.instagram.com/bpbyn_/',
        },
        {
          label: 'GMAIL',
          target: 'mailto:punongbayan.brian@gmail.com',
        },
      ],
    },
  },
  experience: {
    header: [`// WHERE I'VE BEEN?`, 'Professional', 'Timeline'],
    subHeader: [
      `(EXPERIENCE)`,
      'Every project, role, and collaboration has shaped the way I think, create, and solve problems.',
    ],
    resume: {
      label: 'RESUME',
      target: '../Brian Punongbayan 2025.pdf',
    },
    professionalExperience: [
      {
        company: 'ing',
        duration: 'Present',
        role: 'Engineer III',
        description: `Developed and maintained the loans application platform, delivering high-quality user-facing features and enhancements. Utilized Lit to build lightweight, efficient web components and leveraged the Azure Cloud Platform for deployment and integration. Collaborated with cross-functional teams to implement new functionalities, improve existing components, and resolve bugs. Actively contributed to improving developer experience by introducing tools and sharing best practices to streamline workflows and boost productivity.`,
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
        description: `Built and maintained complex React applications using micro front-end architecture on the MyAsurion platform. Developed core features across multi-tenant systems, including authentication flows, shared UI components, and in-house chat solutions. On the Horizon Engage platform, delivered real-time dashboards, user management, and notification features for customer support agents. Built and maintained REST and GraphQL APIs using AWS AppSync and RDS, while supporting production issues and enhancing internal communication tools.`,
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
          'Node',
          'Java',
          'JAX RS',
          'DynamoDB',
          'PostgreSQL',
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
        description: `Developed frontend features for internal sourcing tools using Angular, and built a prototype machine learning model for resume parsing using Python, spaCy, and NLP. Contributed to DXC Bionix by building complex application dashboards across React, Angular, Node.js, and Django. On the National Australia Bank project, developed API solutions using both .NET (C#) and Java Spring Boot, and worked with Kafka to support event-driven microservices.`,
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
        description: `Built and maintained Python-based systems, delivering unit-tested solutions per functional specs. Used Oracle SQL Developer to query data for pension administration calculations. Provided technical support and collaborated with the team to manage client expectations and ensure smooth project delivery.`,
        techUsed: ['Python', 'Oracle SQL Developer', 'Unix'],
      },
      {
        company: 'reed elsevier philippines',
        duration: '2015 - 2017',
        role: 'Programmer',
        description: `Built insurance systems using RPL (Delphi-based), ensuring accurate data handling and program output. Collaborated with QA to resolve bugs and maintain system reliability.`,
        techUsed: ['Pascal Delphi'],
      },
    ],
  },
  works: {
    title: 'SELECTED WORKS',
  },
  projects: {
    header: [`// WHAT I'VE BUILT?`, 'Pixels and', 'Code'],
    body: {
      title: '(WORKS)',
      description: `These are projects I’ve put my time and effort to complete. I hope you’ll like it as much as I do!`,
      works: [
        {
          name: 'Shot Puno',
          projectType: 'Card Game',
          imgOverlay: '/images/shot-puno-landing.png',
          videoURL: '../media/shot-puno.mp4',
          href: 'https://shot-puno.vercel.app/',
          techUsed: ['NextJS', 'TailwindCSS', 'Shadcn', 'Motion', 'Firebase'],
        },
        {
          name: 'Northern Kaffeine POS',
          projectType: 'POS Application',
          imgOverlay: '/images/nk-pos-landing.png',
          videoURL: '../media/nk-pos.mp4',
          href: 'https://nk-pos-dev.vercel.app/',
          techUsed: [
            'NextJS',
            'TailwindCSS',
            'Zustand',
            'Shadcn',
            'Firebase',
            'Firebase Authentication',
          ],
        },
      ],
    },
  },
  contact: {
    header: '// WHAT ARE YOU WAITING FOR?',
    body: {
      title: ['Reach', `out, don’t`, `doubt—`, `let’s figure`, 'it out'],
      titleMobile: ['Reach out,', `don’t doubt—`, `let’s figure it out`],
      contact: {
        label: `LET'S TALK`,
        target: 'mailto:punongbayan.brian@gmail.com',
      },
      copyright: `© 2025 Brian Punongbayan. All rights reserved.`,
      displayText: ['Brian Punongbayan', '[2025]'],
    },
  },
};
