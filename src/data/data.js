import { Code2, Palette, Rocket, Database } from "lucide-react";
import { Mail, Github, Linkedin } from "lucide-react";

// Hero Roles
export const HERO_ROLES = [
  "Web Developer",
  "Frontend Expert",
  "React Specialist",
  "UI/UX Enthusiast"
];

// Navigation items
export const NAV_ITEMS = ["Nest", "Story", "Forge", "Lab", "Signal"];



// About Skills
export const SKILLS = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
  Backend: ["Node.js", "Python", "SQL", "Java"],
  Tools: ["Git", "VS Code", "GitHub", "Vercel", "Netlify"],
};

export const FUN_FACTS = [
  "Frontend by passion, backend by curiosity",
  "Animations make me happier than templates",
  "Learns best by breaking things and fixing them",
  "Dark mode is not a choice, it's a lifestyle",
  "console.log is still my best debugging friend"
];



// Projects
export const PROJECTS = [
  {
    title: "Shopease",
    description:
      "A fully functional e-commerce website built with React, Redux, and Tailwind. Features include product browsing, cart management, user authentication, and local storage. Ready for future SQL & Node.js integration.",
    tech: ["React", "Redux", "Tailwind", "LocalStorage"],
    gradient: "from-purple-400 to-blue-400",
    liveDemo: "https://itsshopease.netlify.app/",
    code: "https://github.com/MaliAnand01/eCommerceProject",
    img: "./shopease.png"
  },
  {
    title: "PongalDelights",
    description:
      "An online store with WhatsApp order integration, built with React and Tailwind for smooth browsing and mobile-first experience.",
    tech: ["React", "Tailwind", "WhatsApp API"],
    gradient: "from-blue-500 to-cyan-500",
    liveDemo: "https://pongaldelights.vercel.app/",
    code: "https://github.com/MaliAnand01/ClientProject",
    img: "./pongal.png"
  },
  {
    title: "VibeBox",
    description:
      "A simple JavaScript music player using Cloudinary for storing and streaming audio files. Lightweight, responsive, and easy to use.",
    tech: ["JavaScript", "HTML", "CSS", "Cloudinary"],
    gradient: "from-blue-500 to-cyan-500",
    liveDemo: "https://malianand01.github.io/JavaScript_Projects/Music_Player/index.html",
    code: "https://github.com/MaliAnand01/JavaScript_Projects?tab=readme-ov-file#-vibe-box--music-player",
    img: "./music.png"
  },
  {
    title: "Notezy",
    description:
      "A React-based notes application with full CRUD functionality, storing notes locally. Responsive design and smooth user interactions.",
    tech: ["React", "Tailwind", "LocalStorage"],
    gradient: "from-purple-400 to-blue-400",
    liveDemo: "https://thenotezy.vercel.app/",
    code: "https://github.com/MaliAnand01/NotesAppReact",
    img: "./notezy.png"
  }
];


// Services
export const SERVICES = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building modern, responsive, and interactive web applications using React, Tailwind CSS, and JavaScript.",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: Palette,
    title: "UI / UX Engineering",
    description:
      "Designing clean, intuitive, and visually appealing interfaces with a strong focus on user experience.",
    gradient: "from-pink-500 to-pink-600"
  },
  {
    icon: Rocket,
    title: "Performance & Optimization",
    description:
      "Optimizing applications for speed, responsiveness, accessibility, and SEO best practices.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Database,
    title: "Backend & Integrations",
    description:
      "Creating scalable backend logic, APIs, and integrations with Node.js, databases, and third-party services.",
    gradient: "from-cyan-500 to-cyan-600"
  }
];


// Social Links
export const SOCIAL_LINKS = [
  {
    icon: Mail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=anandsundesha@gmail.com&su=Collaboration%20Opportunity&body=Hi%20Anand,%0A%0AI%20came%20across%20your%20portfolio...",
    label: "Email"
  },
  {
    icon: Github,
    href: "https://github.com/MaliAnand01",
    label: "GitHub"
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/anand-mali-088652254/",
    label: "LinkedIn"
  }
];


export const JOURNEY = [
  {
    year: "2023",
    title: "Started Web Development",
    description: "Learned HTML, CSS, and JavaScript fundamentals"
  },
  {
    year: "2024",
    title: "Frontend Focus",
    description: "Built projects using React, Tailwind CSS, and animations"
  },
  {
    year: "2025",
    title: "Real Projects & Portfolio",
    description: "Working on full-stack apps and showcasing skills"
  },
  {
    year: "2026",
    title: "Learning Backend",
    description: "Diving into Node.js, databases, and server-side development"
  }
];
