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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "SEO Specialist",
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
    title: "Intern",
    company_name: "NITDA",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Worked alongside industry leaders at NITDA in Nigeria, gaining invaluable mentorship and guidance.",
      "Participated in project development and addressed technological challenges hands-on.",
      "Contributed to project design, implementation, and optimization.",
      "Assisted in deploying innovative strategies and actively engaged in knowledge-sharing sessions, fostering personal and professional growth within technology-driven initiatives at NITDA.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Marvelous Mike Press",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Led the development of a desktop application for Marvelous Mike Press, automating the generation of NECO stickers/labels for over 3000 accredited centers.",
      "Utilized web-based programming languages and Electron to streamline the manual process of generating NECO dockets.",
      "Conceptualized, coded, and tested the application to ensure accurate calculation and labeling of each docket, including split question paper packages.",
      "Successfully eliminated manual labor and improved efficiency and accuracy in managing NECO exam logistics for Marvelous Mike Press.",
    ],
  },
  {
    title: "Web Designer",
    company_name: "Amoke Owu Limited",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Spearheaded the creation of a dynamic online platform for a real estate brokerage company, tailored to showcase properties and services.",
      "Responsible for gathering requirements, designing user-friendly layouts, integrating content, and ensuring cross-device compatibility.",
      "Achievements include delivering a visually appealing and functional website, implementing user-friendly features, and optimizing for search engines.",
      "Tracked performance through analytics, continuously refined the site, and facilitated the brokerage's online presence, customer engagement, and business growth in the competitive real estate market.",
    ],
  },
  {
    title: "Blockchain Developer",
    company_name: "Supernova",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Led the development of an application for the Supernova Hackathon aimed at simplifying and securing real estate transactions using blockchain technology.",
      "Responsible for project leadership, backend development, and blockchain integration.",
      "Achievements include successfully leading the team, designing a robust backend infrastructure, seamlessly integrating blockchain, and presenting a disruptive solution at the hackathon.",
      "Showcased the potential for innovation in real estate transactions and highlighted the team's technical prowess and leadership skills.",
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
