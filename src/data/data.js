import { Code2, Palette, Rocket, Database } from "lucide-react";
import { Mail, Github, Linkedin } from "lucide-react";

// Hero Roles
export const HERO_ROLES = [
  "Web Developer",
  "React Specialist",
  "MCA Student",
  "Java Full Stack Aspirant"
];

// Navigation items
export const NAV_ITEMS = ["Nest", "Story", "Forge", "Lab", "Signal"];



// About Skills
export const SKILLS = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Redux"],
  Backend: ["Java", "Spring Boot (Learning)", "SQL", "Node.js"],
  Tools: ["Git", "VS Code", "GitHub", "Vercel", "Netlify"],
};

export const FUN_FACTS = [
  "Self-taught developer pursuing MCA",
  "Building real solutions for local clients",
  "Turning 'complex' logic into simple UI",
  "Dark mode is not a choice, it's a lifestyle",
  "Bridging the gap between Frontend & Java Backend"
];



// Projects
export const PROJECTS = [
  {
    title: "Shopease",
    description:
      "A scalable e-commerce app engineered with React and Redux. Solved complex challenges in global cart state management and dynamic product filtering. Optimized for a 100% responsive mobile-first experience.",
    tech: ["React", "Redux", "Tailwind", "Complex State"],
    gradient: "from-purple-400 to-blue-400",
    liveDemo: "https://itsshopease.netlify.app/",
    code: "https://github.com/MaliAnand01/eCommerceProject",
    img: "./shopease.png"
  },
  {
    title: "PongalDelights (Client Work)",
    description:
      "Delivered a custom ordering platform for a local festive business. Integrated an automated WhatsApp messaging system to streamline orders, removing the need for a complex backend server.",
    tech: ["React", "Tailwind", "WhatsApp Automation", "Freelance"],
    gradient: "from-blue-500 to-cyan-500",
    liveDemo: "https://pongaldelights.vercel.app/",
    code: "https://github.com/MaliAnand01/ClientProject",
    img: "./pongal.png"
  },
  {
    title: "VibeBox",
    description:
      "A lightweight audio streaming player accessing media via Cloudinary. Focuses on efficient DOM manipulation and seamless audio playback control using vanilla JavaScript.",
    tech: ["JavaScript", "Cloudinary API", "DOM Manipulation"],
    gradient: "from-blue-500 to-cyan-500",
    liveDemo: "https://malianand01.github.io/JavaScript_Projects/Music_Player/index.html",
    code: "https://github.com/MaliAnand01/JavaScript_Projects?tab=readme-ov-file#-vibe-box--music-player",
    img: "./music.png"
  },
  {
    title: "Notezy",
    description:
      "A productivity app featuring full CRUD operations utilizing local storage for data persistence. Demonstrates clean component architecture and immediate UI feedback patterns.",
    tech: ["React", "Tailwind", "Local Storage"],
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
    title: "UI / UX Implementation",
    description:
      "Translating complex designs into pixel-perfect code with a focus on smooth user interactions and responsiveness.",
    gradient: "from-pink-500 to-pink-600"
  },
  {
    icon: Rocket,
    title: "Freelance Web Solutions",
    description:
      "Delivering end-to-end web solutions for small businesses, from requirements gathering to deployment.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Database,
    title: "Java Full Stack (In Progress)",
    description:
      "Expanding capabilities into enterprise-grade backend development with Java, Spring Boot, and SQL databases.",
    gradient: "from-cyan-500 to-cyan-600"
  }
];


// Social Links
export const SOCIAL_LINKS = [
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
    title: "Self-Taught Beginnings",
    description: "Started the coding journey with HTML/CSS/JS independently."
  },
  {
    year: "2024",
    title: "React & Freelancing",
    description: "Built functional apps and secured freelance work (PongalDelights)."
  },
  {
    year: "2025",
    title: "MCA & Certification",
    description: "Pursuing Master of Computer Applications and Java Full Stack Certification."
  },
  {
    year: "2026",
    title: "Full Stack Engineer",
    description: "Aiming for professional roles in Java Enterprise & React Development."
  }
];
