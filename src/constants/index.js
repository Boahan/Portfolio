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
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Php Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
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
    title: "Software Developer",
    company_name: "Abhyaz",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Oct 2023 - Nov 2023",
    points: [
      "Developed static website using Jekyll , created content in markdown format and leveraged liquid templating for dynamic elements",
      "Implemented continuous integration and continuous delivery (CI/CD) pipeline for efficient development and deployment.",
      "Automated website building and testing processes using GitHub Actions and leveraged GitHub Pages for free website hosting"
    ],
  },
  {
    title: "Hack-O-Holic 2.0",
    company_name: "Graphic Era Hill University",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Nov 2023",
    points: [
      "24 hour hackathon organised by Graphic Era Hill University Dehradun Uttarakhand.",
      "Developed a dynamic, interactive and responsive social media web app that lets you connect, create, and share like never before.",
      "Implemented real time video chat feature with the help of agora.",
      "Implemented real time news feature with the help of news api.",
    ],
  },
  {
    title: "IIT Roorkee Hackathon",
    company_name: "IIT Roorkee",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2023",
    points: [
      "48 hour hackathon organised by Indian Institute of Technology Roorkee Uttarakhand.",
      "Developed a dynamic and interactive payment web app for FAMPAY to boost its use on college campuses",
      "Leverage the power of Three.js and Three.js Fiber to seamlessly import interactive, visually stunning 3D objects into our project.",
      "Developed a vibrant community forum where members can stay in the loop and build meaningful connections.",
    ],
  },
  {
    title: "Hack-o-Holic",
    company_name: "Graphic Era Hill University",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Nov 2022",
    points: [
      "24 hour hackathon organised by Graphic Era Hill University Dehradun Uttarakhand.",
      "Developed a dynamic and interactive web app to boost uttarakhand’s tourism.",
      "Designed an efficient and user friendly payment gateway, simplifying contributions.",
      "Led the team, gathered information and data for enhancing the overall user experience and engagement.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
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
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
