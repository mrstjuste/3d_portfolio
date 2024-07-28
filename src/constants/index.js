import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  ua,
  monroe,
  git,
  figma,
  python,
  lambda,
  aws,
  swift,
  docker,
  meta,
  hf,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobboard,
  atm,
  cal,
  compiler,
  tik,
  damien,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
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
    title: "IEEE Club Board Member",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Pyhon",
    icon: python,
  },
  {
    name: "Swift",
    icon: swift,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "lambda",
    icon: lambda,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const educations = [
  {
    title: "University At Albany",
    company_name: "BA in Computer Science",
    icon: ua,
    iconBg: "#383E56",
    date: "Jan 2023 - December 2025",
    points: [
      {
        title: "Program Focus",
        point:
          "Advanced computer science concepts and techniques, including data structures and algorithms.",
      },
      {
        title: "Course Includes",
        point:
          "Principles of Database Systems, Design & Analysis of Algorithms, Software Engineering, Big Data, and more",
      },
    ],
  },
  {
    title: "Monroe College",
    company_name: "AS in Computer Information Systems",
    icon: monroe,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Dec 2022",
    points: [
      {
        title: "Honors & Awards",
        point:
          "Advanced computer science concepts and techniques, including data structures and algorithms.",
      },
      {
        title: "Extracurricular Activities",
        point:
          "Principles of Database Systems, Design & Analysis of Algorithms, Software Engineering, Big Data, and more",
      },
    ],
  },
];
const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "Healthfirst",
    icon: hf,
    iconBg: "#E6DEDD",
    date: "June 2024 - Aug 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Job Board",
    description:
    "Led a team to create a high-performance job board website with AI-driven job matching, real-time notifications, and interactive profiles. Achieved a 10% decrease in errors and 13% increase in revenue.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "ai",
        color: "yellow-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "orange-text-gradient",
      },
    ],
    image: jobboard,
    source_code_link: "https://github.com/mrstjuste/jobboardwebsite",
  },  
  {
    name: "Programming Language Compiler",
    description:
    "Engineered a programming language compiler in Java with advanced error handling, boosting reliability by 20%. Optimized pipelines for BASIC, Python, and Kotlin, increasing productivity by 15%.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "kotlin",
        color: "pink-text-gradient",
      },
      {
        name: "lexical-analysis",
        color: "yellow-text-gradient",
      },
      {
        name: "parsing",
        color: "blue-text-gradient",
      },
      {
        name: "semantic-analysis",
        color: "green-text-gradient",
      },
      {
        name: "error-handling",
        color: "orange-text-gradient",
      },
    ],
    image: compiler,
    source_code_link: "https://github.com/",
  },  
  {
    name: "Graphing Calculator",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cal,
    source_code_link: "https://github.com/",
  },
  {
    name: "Atm",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: atm,
    source_code_link: "https://github.com/mrstjuste/TicTacToeGameApp",
  },
  {
    name: "Tik Tac Toe",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tik,
    source_code_link: "https://github.com/",
  },
  {
    name: "Damien Dash",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: damien,
    source_code_link: "https://github.com/mrstjuste/DamienDash",
  },
];

export { services, technologies, educations, experiences, testimonials, projects };
