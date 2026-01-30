import { motion } from "framer-motion";
import { Github, Triangle } from "lucide-react";

const TechStackSlider = () => {
  const row1 = [
    { name: "React", img: "https://icon.icepanel.io/Technology/svg/React.svg" },
    { name: "HTML", img: "https://icon.icepanel.io/Technology/svg/HTML5.svg" },
    { name: "CSS", img: "https://icon.icepanel.io/Technology/svg/CSS3.svg" },
    { name: "JavaScript", img: "https://icon.icepanel.io/Technology/svg/JavaScript.svg" },
    { name: "Tailwind", img: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg" },
    { name: "Redux", img: "https://icon.icepanel.io/Technology/svg/Redux.svg" },
    { name: "Framer Motion", img: "https://cdn.worldvectorlogo.com/logos/framer-1.svg" },
  ];

  const row2 = [
    { name: "Java", img: "https://icon.icepanel.io/Technology/svg/Java.svg" },
    { name: "Spring Boot", img: "https://icon.icepanel.io/Technology/svg/Spring.svg" },
    { name: "SQL", img: "https://icon.icepanel.io/Technology/svg/MySQL.svg" },
    { name: "Node.js", img: "https://icon.icepanel.io/Technology/svg/Node.js.svg" },
    { name: "Git", img: "https://icon.icepanel.io/Technology/svg/Git.svg" },
    { name: "GitHub", icon: <Github className="w-6 h-6 text-white" /> },
    { name: "Vercel", icon: <Triangle className="w-6 h-6 text-white" /> },
    { name: "VS Code", img: "https://icon.icepanel.io/Technology/svg/Visual-Studio-Code-%28VS-Code%29.svg" },
  ];

  const MovingRow = ({ items, direction = "left", speed = 25 }) => {
    return (
      <div 
        className="relative flex overflow-hidden py-3 group"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
        }}
      >
        <motion.div
          initial={{ x: direction === "left" ? 0 : "-50%" }}
          animate={{ x: direction === "left" ? "-50%" : 0 }}
          transition={{
            duration: speed,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex gap-6 flex-nowrap w-max px-4"
        >
          {[...items, ...items, ...items, ...items].map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="
                relative group/item
                px-5 py-2.5
                rounded-full
                backdrop-blur-md
                bg-white/5
                border border-white/10
                flex items-center gap-3 justify-center
                transition-all duration-300
                hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]
                cursor-default
              "
            >
              <div className="group-hover/item:scale-110 transition-transform duration-300 flex items-center justify-center w-6 h-6">
                {item.img ? (
                  <img src={item.img} alt={item.name} loading="lazy" className="w-full h-full object-contain" />
                ) : (
                  item.icon
                )}
              </div>
              <span className="text-gray-300 font-tech font-medium whitespace-nowrap group-hover/item:text-white transition-colors text-sm tracking-wide">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <div className="w-full py-8 space-y-2 overflow-hidden">
      <h3 className="text-center text-sm font-display font-semibold text-gray-500 mb-6 uppercase tracking-[0.2em]">
        Tech Arsenal
      </h3>
      
      <MovingRow items={row1} direction="left" speed={35} />
      <MovingRow items={row2} direction="right" speed={30} />
    </div>
  );
};

export default TechStackSlider;
