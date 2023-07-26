import {
    mobile,
    backend,
    creator,
    web,
    jj,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    eportfolio1,
    asteroids,
    eportfolio2,
    sudoku,
    ainv,
    threejs,
    cpp,
    csharp,
    python,
    r,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Game Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C++",
      icon: cpp
    },
     {
       name: "React JS",
       icon: reactjs,
     },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "R",
      icon: r,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "C#",
      icon: csharp
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
 
  const projects = [
    {
      name: "ePortfolio v.1",
      description:
        "Fullstack Responsive Portfolio Website. Designed a responsive and modern eportfolio using React.js for the frontend, Node.js and Sanity.io for the backend Sass and Framer Motion for style and animation.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "sanity.io",
          color: "green-text-gradient",
        },
        {
          name: "sass",
          color: "pink-text-gradient",
        },
      ],
      image: eportfolio1,
      source_code_link: "https://github.com/gerar2d/eportwebpub",
    },    
    {
      name: "ePortfolio v.2",
      description:
        "Fullstack Responsive Portfolio Website. Designed a responsive and modern eportfolio using React.js for the frontend, Node.js for the backend Three.js, tailwindcss and Framer Motion for style and animation.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: eportfolio2,
      source_code_link: "https://github.com/gerar2d/eportfolio2",
    },
    {
      name: "Asteroid",
      description:
        "8bit version of Asteroid created using Unity, C# and created my own sprites using Piskel.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "Piskel",
          color: "pink-text-gradient",
        },
      ],
      image: asteroids,
      source_code_link: "https://github.com/gerar2d/Asteroid",
    },
    {
      name: "Sudoku",
      description:
        "Sudoku Game in C++. (windows.h)",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },

      ],
      image: sudoku,
      source_code_link: "https://github.com/gerar2d/sudoku",
    },
    {
      name: "Space Invaders",
      description:
        "Space Invaders in Python with the labrary pygame.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Pygame",
          color: "green-text-gradient",
        },

      ],
      image: ainv,
      source_code_link: "https://github.com/gerar2d/Alien-Invaders",
    },
  ];

  const experiences = [
    {
      title: "Computer Science B.S.",
      company_name: "John Jay College of Criminal Justice - CUNY",
      icon: jj,
      iconBg: "#383E56",
      date: "Sep 2022 - May 2024",
      points: [
        "GPA: 3.55",
        "CSCI 272: Object Oriented Programming",
        "CSCI 373: Advanced Data Structures",
        "CSCI 375: Operating Systems",
      ],
    },
    {
      title: "Criminal Justice B.S.",
      company_name: "John Jay College of Criminal Justice - CUNY",
      icon: jj,
      iconBg: "#383E56",
      date: "Sep 2018 - May 2021",
      points: [
        "GPA: 3.7",
        "LAW 202: Law and Evidence",
        "LAW 203: Constitutional Law",
        "PHI 317: Philosophy of Law in Global Perspective",
      ],
    },
  ];
  
  export { services, technologies, experiences, projects };