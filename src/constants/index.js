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
  hs,
  adamai,
  pmp,
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
  Resume,
  ResumePic,
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
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engieer",
    icon: web,
  },
  {
    title: "NSBE Member",
    icon: mobile,
  },
  {
    title: "ColorStack Member",
    icon: backend,
  },
  {
    title: "Peer Tutor",
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
    title: "University at Albany",
    company_name: "BA in Computer Science",
    icon: ua,
    iconBg: "#000000",
    date: "2023 - 2025",
    points: [
      {
        title: "Major",
        point: "Computer Science",
      },
      {
        title: "Minor",
        point: "Informatics",
      },
      {
        title: "Relevant Coursework",
        point: "Data Structures and Algorithms, Introduction to Data & Databases, Operating Systems, Computer Architecture and Organization, System Fundamentals, Principles of Programming Languages, Software Engineering",
      },
    ],
  },
  {
    title: "Monroe College",
    company_name: "AS in Computer Information Systems",
    icon: monroe,
    iconBg: "#E6DEDD",
    date: "2021 - 2022",
    points: [
      {
        title: "Honors & Awards",
        point: "Dean's List Honoree: Achieved academic excellence by consistently making the Dean's List",
      },
      {
        title: "Relevant Coursework",
        point: "Advanced Programming, Object-Oriented Programming, Programming Logic with C++, Web Design Technology, Systems Analysis & Design, Database, CCNA I & CCNA II",
      },
      {
        title: "Extracurricular Activities",
        point: "Quarterback of the Monroe College Football Team",
      },
    ],
  },
];



const experiences = [
  {
    title: "Software Engineer",
    company_name: "HeadStarter",
    icon: hs, 
    iconBg: "#000000",
    date: "August 2024 - October 2024",
    points: [
      "Developed a GPT-powered chatbot platform with 1,000+ users, improving engagement by 15% and automating workflows to reduce manual tasks by 30%.",
      "Built a Python-based model to predict house prices with 90% accuracy, integrating data visualization tools and improving query speed by 20%.",
      "Created a real-time stock tracker with data updates every 10 seconds, supporting 1,000 users and achieving 85% prediction accuracy with LSTM models.",
      "Enhanced productivity by building user-friendly applications using React.js, Python, and Firebase.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Healthfirst",
    icon: hf,
    iconBg: "#E6DEDD",
    date: "June 2024 - Aug 2024",
    points: [
      "Developed a Chrome extension AI chatbot, improving productivity by 17% and streamlining workflows.",
      "Implemented a PCP selection feature, boosting new member enrollment by 8% and helping Healthfirst reach 2 million members.",
      "Collaborated on frontend (React.js) and backend (Python, AWS Lambda), enhancing accessibility and efficiency.",
      "Built REST APIs and optimized backend processes, reducing response times by 10% and improving performance.",
    ],
  },
  {
    title: "Peer Tutor/Mentor",
    company_name: "University at Albany",
    icon: ua, 
    iconBg: "#000000",
    date: "August 2023 - Present",
    points: [
      "Provide tutoring for 200 and 300-level computer science courses, simplifying complex concepts for students.",
      "Assist students in mastering algorithms, data structures, object-oriented programming, and software development principles.",
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
    name: "AdamAI",
    description:
      "Developed a GPT-powered chatbot platform with 1,000+ users, achieving 92% satisfaction and automating tasks by 30%. Improved engagement by 15%, retention by 12%, and reduced operational costs by 20%, with zero downtime for 1,000+ daily requests.",
    tags: [
      { name: "gpt", color: "yellow-text-gradient" },
      { name: "node.js", color: "blue-text-gradient" },
      { name: "flask", color: "green-text-gradient" },
      { name: "react", color: "pink-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
    ],
    image: adamai,
    source_code_link: "https://github.com/mrstjuste/adamai",
  },
  {
    name: "Product/ Project Management Website",
    description:
    "Designed and developed a high-performance job board platform with AI-driven job matching, real-time notifications, and interactive profiles. Enhanced user experience, reduced errors by 10%, and increased revenue by 13%.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "ai", color: "yellow-text-gradient" },
      { name: "node.js", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "aws", color: "orange-text-gradient" },
    ],
    image: pmp,
    source_code_link: "https://github.com/mrstjuste/Product-Project-Management-Website",
  },
  {
    name: "Job Board",
    description:
      "Created a high-performance job board website with AI-driven job matching, real-time notifications, and interactive profiles. Achieved a 10% decrease in errors and a 13% increase in revenue.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "ai", color: "yellow-text-gradient" },
      { name: "node.js", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "aws", color: "orange-text-gradient" },
    ],
    image: jobboard,
    source_code_link: "https://github.com/mrstjuste/jobboardwebsite",
  },
  {
    name: "Programming Language Compiler",
    description:
      "Engineered a Java compiler with advanced error handling, boosting reliability by 20%. Optimized pipelines for JavaScript, Python, and Kotlin, increasing productivity by 15%.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "python", color: "green-text-gradient" },
      { name: "kotlin", color: "pink-text-gradient" },
      { name: "lexical-analysis", color: "yellow-text-gradient" },
      { name: "parsing", color: "blue-text-gradient" },
      { name: "semantic-analysis", color: "green-text-gradient" },
    ],
    image: compiler,
    source_code_link: "https://github.com/mrstjuste/Interpreter",
  },
  {
    name: "Graphing Calculator",
    description:
      "Developed a graphing calculator in java with advanced mathematical functions and robust graph plotting capabilities. Enhanced user experience with customizable graphing options, zoom functionalities, and multiple graph types for detailed analysis.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "JFrame", color: "green-text-gradient" },
      { name: "math", color: "pink-text-gradient" },
    ],
    image: cal,
    source_code_link: "https://github.com/mrstjuste/Java_Calculator",
  },
  {
    name: "ATM",
    description:
      "Created an ATM simulation project in Java, implementing core banking functionalities like balance inquiries, deposits, and withdrawals, ensuring user-friendly interactions.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "oop", color: "green-text-gradient" },
      { name: "simulation", color: "pink-text-gradient" },
    ],
    image: atm,
    source_code_link: "https://github.com/mrstjuste/ATM-Simulator",
  },
  // {
  //   name: "Blog Website",
  //   description:
  //   "Developed a modern Tic Tac Toe game in Xcode with a sleek interface, single-player AI, intuitive touch controls, and smooth animations for an engaging experience.",
  //   tags: [
  //     { name: "react", color: "blue-text-gradient" },
  //     { name: "javaScript", color: "green-text-gradient" },
  //     { name: "node.js", color: "pink-text-gradient" },
  //   ],
  //   image: tik,
  //   source_code_link: "https://github.com/mrstjuste/blog",
  // },
  // {
  //   name: "Tik Tac Toe",
  //   description:
  //     "Developed a Tic Tac Toe game in Xcode with a user-friendly interface and single-player mode with basic AI. Enhanced gameplay with intuitive touch controls and smooth animations.",
  //   tags: [
  //     { name: "xcode", color: "blue-text-gradient" },
  //     { name: "swift", color: "green-text-gradient" },
  //     { name: "game-dev", color: "pink-text-gradient" },
  //   ],
  //   image: tik,
  //   source_code_link: "https://github.com/mrstjuste/TicTacToeGameApp",
  // },
  // {
  //   name: "Damien Dash",
  //   description:
  //     "Created during a 24-hour hackathon, this game features double jumps, a scoring system, and dynamic obstacles. Inspired by the Chrome Dino game, it provides an addictive and engaging experience.",
  //   tags: [
  //     { name: "html5", color: "blue-text-gradient" },
  //     { name: "css3", color: "green-text-gradient" },
  //     { name: "javascript", color: "pink-text-gradient" },
  //   ],
  //   image: damien,
  //   source_code_link: "https://github.com/mrstjuste/DamienDash",
  // },
];


const resume = [
  {
    name: "Resume",
    description:
      "Please download my resume! Contact me for more information. I would love to connect!",
    image: ResumePic,
    source_code_link: Resume,
  },
];

export { services, technologies, educations, experiences, testimonials, projects, resume };
