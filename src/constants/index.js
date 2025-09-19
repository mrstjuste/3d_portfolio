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
    title: "Computer Science Tutor",
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
    title: "Software Developer Engineer",
    company_name: "Amazon Web Services",
    icon: aws,
    iconBg: "#E6DEDD",
    date: "May 2025 - August 2025",
    points: [
      "Enhanced observability for Aurora Limitless Database Shard Groups, delivering real-time health visibility across 1M+ shard groups in multiple availability zones.",
      "Implemented cross-node connectivity, KDTA, and SQL engine checks to detect failures impacting customer reads/writes, strengthening Aurora’s high-availability systems.",
      "Built Java + XML APIs and React + TypeScript dashboards, enabling operators to view shard states, trigger recovery actions, and resolve issues faster.",
      "Improved backend reliability with Ruby and automated testing, cutting detection time by 30% and reducing manual triage by 60%."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "HeadStarter",
    icon: hs, 
    iconBg: "#000000",
    date: "August 2024 - October 2024",
    points: [
      "Collaborated with a diverse team of engineers and students in a competitive fellowship program, leading the design and development of seven user-friendly projects over a 7-week period.",
      "Built an AI-powered playlist generator and recommendation application using Python and machine learning algorithms, integrating Spotify’s API for real-time data and implementing a React.js frontend, increasing engagement rates by 15%.",
      "Developed a real-time fitness tracker and analytics platform, supporting 1,000+ users. Combined live data from wearable devices with a predictive model using LSTM algorithms, designed interactive dashboards with React.js, and utilized Firebase for secure, real-time data management, boosting user retention by 12%.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Healthfirst",
    icon: hf,
    iconBg: "#E6DEDD",
    date: "June 2024 - August 2024",
    points: [
      "Built Helpfirst, an internal AI-powered Chrome extension used by 350+ engineers, boosting productivity by 28% and improving delivery speed with a responsive React.js frontend and adjustable settings.",
      "Integrated OpenAI API for chatbot intelligence and implemented a scalable AWS serverless backend (Lambda in Python, API Gateway, DynamoDB) for efficient data handling and integration.",
      "Developed Care Connect, a React.js feature that guided 500,000+ users in selecting primary care physicians by location, language, and ratings—boosting new member enrollment by 16% during open enrollment and helping Healthfirst reach 2M members.",
      "Collaborated with stakeholders, PMs, and UI/UX designers in agile sprints, leveraging data-driven insights to diagnose problems and deliver customer-centric solutions."
    ],
  },
  {
    title: "Computer Science Tutor",
    company_name: "University at Albany",
    icon: ua, 
    iconBg: "#000000",
    date: "August 2023 - Present",
    points: [
      "Mentor and tutor 150+ students in 200- and 300-level computer science courses, adapting to diverse learning styles.",
      "Teach algorithms, data structures, object-oriented programming, and software development principles, enhancing students' understanding of complex concepts.",
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
      "Built a GPT-powered chatbot platform using the MERN stack and OpenAI API, serving 1,000+ users with a 92% satisfaction rate. Designed and styled an intuitive UI using React.js and Material-UI, ensuring seamless frontend-backend integration and reducing manual tasks by 30%.",
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
    name: "LinkedIn Inspired Website",
    description:
      "Led development of a job board platform with AI-driven job matching, real-time notifications, and interactive company profiles. Built a scalable backend using AWS Lambda (Python), API Gateway, and DynamoDB, reducing errors by 10% and improving system reliability.",
    tags: [
      { name: "aws", color: "orange-text-gradient" },
      { name: "lambda", color: "blue-text-gradient" },
      { name: "dynamodb", color: "green-text-gradient" },
      { name: "react", color: "pink-text-gradient" },
      { name: "ai", color: "yellow-text-gradient" },
    ],
    image: jobboard,
    source_code_link: "https://github.com/mrstjuste/jobboardwebsite",
  },
  {
    name: "Project Management Website",
    description:
      "Developed a project management tool using the MERN stack, supporting 1,000+ users and increasing team efficiency by 15%. Implemented features like project creation, team management, and role assignment while optimizing backend processes to reduce downtime by 12%.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "node.js", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: pmp,
    source_code_link: "https://github.com/mrstjuste/Product-Project-Management-Website",
  },
  {
    name: "Programming Language Compiler",
    description:
      "Developed a Python interpreter in Java with lexical analysis, parsing, and semantic analysis. Implemented advanced error handling, improving reliability by 10%, and optimized the development pipeline for JavaScript, Python, and Kotlin, enhancing productivity by 15%.",
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
      "Built a Java-based graphing calculator with customizable graphing options, zoom functionality, and advanced mathematical operations. Designed an intuitive UI with Java Swing, enhancing accessibility and analytical capabilities for users.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "JFrame", color: "green-text-gradient" },
      { name: "math", color: "pink-text-gradient" },
    ],
    image: cal,
    source_code_link: "https://github.com/mrstjuste/Java_Calculator",
  },
  {
    name: "ATM Simulator",
    description:
      "Developed an ATM simulation project in Java, implementing core banking functionalities such as deposits, withdrawals, and balance inquiries with a user-friendly interface.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "oop", color: "green-text-gradient" },
      { name: "simulation", color: "pink-text-gradient" },
    ],
    image: atm,
    source_code_link: "https://github.com/mrstjuste/ATM-Simulator",
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
