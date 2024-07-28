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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
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
    title: "University at Albany",
    company_name: "BA in Computer Science",
    icon: ua,
    iconBg: "#383E56",
    date: "Jan 2023 - Dec 2025",
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
        point: "Data Structures and Algorithms, Introduction to Data & Databases, Operating Systems, Computer Architecture and Organization, System Fundamentals, Principles of Programming Languages, Introduction to Computer Programming, Software Engineering",
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
    title: "Software Engineering Intern",
    company_name: "Healthfirst",
    icon: hf,
    iconBg: "#E6DEDD",
    date: "June 2024 - Aug 2024",
    points: [
      "Created a Chrome extension AI chatbot that improved work efficiency and productivity by 17%, streamlining workflows and enhancing user experience.",
      "Developed a new feature that directed prospect members to a form after they chose their primary care physician (PCP), improving new member enrollment by 8%. This feature helped Healthfirst reach the 2 million member benchmark.",
      "Rotated between software engineering and program management, collaborating with teammates to enhance user accessibility and system efficiency.",
      "Built and enhanced the web application's frontend using React.js and backend using Python, AWS, and AWS Lambda.",
      "Utilized AWS DynamoDB for database management and Amazon S3 for storage solutions.",
      "Created robust and efficient REST APIs for seamless data integration and storage.",
      "Optimized backend processes and API calls, including those using AWS Lambda, resulting in a 10% reduction in response times, significantly improving the application's performance.",
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
      "Led a team to create a high-performance job board website with AI-driven job matching, real-time notifications, and interactive profiles. Achieved a 10% decrease in errors and a 13% increase in revenue.",
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
  {
    name: "Tik Tac Toe",
    description:
      "Developed a Tic Tac Toe game in Xcode with a user-friendly interface and single-player mode with basic AI. Enhanced gameplay with intuitive touch controls and smooth animations.",
    tags: [
      { name: "xcode", color: "blue-text-gradient" },
      { name: "swift", color: "green-text-gradient" },
      { name: "game-dev", color: "pink-text-gradient" },
    ],
    image: tik,
    source_code_link: "https://github.com/mrstjuste/TicTacToeGameApp",
  },
  {
    name: "Damien Dash",
    description:
      "Created during a 24-hour hackathon, this game features double jumps, a scoring system, and dynamic obstacles. Inspired by the Chrome Dino game, it provides an addictive and engaging experience.",
    tags: [
      { name: "html5", color: "blue-text-gradient" },
      { name: "css3", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: damien,
    source_code_link: "https://github.com/mrstjuste/DamienDash",
  },
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
