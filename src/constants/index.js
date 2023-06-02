import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  git,
  dalle,
  jacqui,
  admin,
  keeper,
  promptopia,
  threejs,
  barber,
  donut,
  cleaner,
  porcudev,
  daily,
  mongodb,
  redux,
  nodejs,
  docker,
  css,
  html,
  tailwind,
  figma,
  reactjs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
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

const experiences = [
  {
    title: "Freelance Web Developer",
    company_name: "Porcu Dev",
    icon: porcudev,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Write clean, efficient, and maintainable code using programming languages such as HTML, CSS, and JavaScript",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Troubleshoot and debug code to resolve issues and improve performance.",
      "Stay up-to-date with the latest web development technologies and trends.",
    ],
  },
  {
    title: "Owner",
    company_name: "Jacqui Cleaners",
    icon: cleaner,
    iconBg: "#383E56",
    date: "Sept 2014 - Jan 2023",
    points: [
      "Receive and process customer orders for dry cleaning and laundry services.",
      "Inspect garments for stains and damages, and determine appropriate cleaning methods.",
      "Operate dry cleaning and laundry equipment to clean garments.",
      "Press, fold, and package garments for return to customers.",
      "Manage customer accounts and handle financial transactions.",
    ],
  },
  {
    title: "Owner",
    company_name: "Donuts & More",
    icon: donut,
    iconBg: "#E6DEDD",
    date: "January 2008 - April 2014",
    points: [
      "Manage daily operations of the donut shop.",
      "Develop and implement marketing strategies to attract new customers.",
      "Monitor inventory levels and order supplies as needed.",
      "Hire and train staff members.",
      "Ensure compliance with health and safety regulations.",
    ],
  },
  {
    title: "Barber",
    company_name: "Friendly Barber Shop",
    icon: barber,
    iconBg: "#383E56",
    date: "May 2006 - Dec 2008",
    points: [
      "Greet clients and discuss their hairstyle preferences.",
      "Provide haircuts, shaves, and other grooming services.",
      "Operate cash registers, schedule appointments, and maintain client records.",
      "Sanitize tools and equipment to ensure a clean and safe environment.",
      "Stay up-to-date with the latest hair trends and techniques.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Philip proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Philip does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Philip optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Art Ai Community",
    description:
      "I learned how to use various technologies such as React, components, routers, and file-saver, as well as external APIs like Dalle API and cloud-based services like Cloudinary. By building a web app with these technologies, I gained valuable experience in creating dynamic, interactive web applications that connect to external data sources and cloud services.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "cloudinary",
        color: "pink-text-gradient",
      },
    ],
    image: dalle,
    source_code_link: "https://artaicommunity.netlify.app",
  },
  {
    name: "Jacqui Cleaners",
    description:
      "My first personal project which I'm still updating daily and adding new features. We wanted to scale our business by adding Pickup and delivery service, be able to take online payments, and improve wait time in our store. In this project I've learn how to work with Stripe Webhook, Styled components, reused components from Admin Page, connect AWS S3/Buckets, and removed bugs to be production ready. In order to test Stripe use credit card 4242 4242 4242 4242.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "styled components",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: jacqui,
    source_code_link: "https://ecommerce-front-six-lac.vercel.app/",
  },
  {
    name: "Jacqui Admin Page",
    description:
      "This link will send you to my github repos. I learned to connect admin page and business website to the same MongoDB and AWS S3/Buckets. Your able to see live orders from customer, paid or not paid, collect customers information like (name, address, phoneNumber, etc.), and upload images to the business website. My goal is to implement a pos features, track customer sales, and connect to Bixolon tag/invoice Printer. Stay Tuned!",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nextauth",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: admin,
    source_code_link: "https://github.com/PhilipCheang/ecom-admin",
  },
  {
    name: "Jot Spot",
    description:
      "The Jot Spot is a secure and user-friendly tool designed to help you organize and store important information, such as passwords, credit card data, and notes. Whether you need to keep your personal or professional information secure, the Keeper App is an excellent solution.",
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
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: keeper,
    source_code_link: "https://jotspot.netlify.app",
  },
  {
    name: "Daily J",
    description:
      "By working on Daily J, I gained experience in building a CRUD (Create, Read, Update, Delete) application with Node.js, Express, and MongoDB Atlas. I learned how to create a post and save data to a database, retrieve and display data, update and delete data, and handle errors. Overall, this project helped me to improve my skills in using these technologies and provided valuable experience in building a functional web application.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb atlas",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: daily,
    source_code_link: "https://dailyj.cyclic.app/",
  },
  {
    name: "Promptopia",
    description:
      "By working on Promptopia, I gained experience in building a CRUD (Create, Read, Update, Delete) application with Next.js 13, Mongoose, and MongoDB Atlas. I learned how to create a post and save data to a database, retrieve and display data, update and delete data, and handle errors. Overall, this project helped me to improve my skills in using these technologies and provided valuable experience in building a functional web application.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "session",
        color: "green-text-gradient",
      },
      {
        name: "nextauth",
        color: "pink-text-gradient",
      },
    ],
    image: promptopia,
    source_code_link: "https://project-promptopia-eight.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };