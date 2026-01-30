/* eslint-disable no-unused-vars */
import React from "react";
import { PROJECTS } from "../../data/data";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRightLeft } from "lucide-react";
import { CardStack } from "../ui/CardStack";

const ProjectCard = ({ project, active }) => {
  const [isPressed, setIsPressed] = React.useState(false);

  // Reset pressed state when card becomes inactive
  React.useEffect(() => {
    if (!active) setIsPressed(false);
  }, [active]);

  return (
    <div 
      className={`
        relative h-full w-full bg-zinc-900 rounded-2xl overflow-hidden 
        transition-all duration-500
        ${active ? "ring-2 ring-white/20 shadow-2xl shadow-purple-500/10" : "grayscale sepia-[.5] brightness-50"} 
        group cursor-pointer
      `}
      onClick={() => active && setIsPressed(!isPressed)}
      onMouseLeave={() => setIsPressed(false)}
    >
        {/* Full Background Image */}
        <div className="absolute inset-0 w-full h-full bg-black">
          <img 
            src={project.img} 
            alt={project.title} 
            loading="lazy"
            className={`
              w-full h-full object-cover object-top block 
              transition-transform duration-700 
              ${active && !isPressed ? "group-hover:scale-105" : ""} 
              ${isPressed ? "scale-105 blur-[2px]" : ""}
            `}
          />
        </div>

        {/* Hover/Tap Overlay with Content */}
        <div className={`
          absolute inset-0 bg-black/80 backdrop-blur-sm 
          transition-opacity duration-300 
          flex flex-col justify-center items-center p-6 text-center
          ${active && isPressed ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
        `}>
          <h3 className={`text-2xl font-bold mb-3 text-white font-tech tracking-wide uppercase transition-transform duration-300 ${isPressed || "group-hover:translate-y-0"} ${isPressed ? "translate-y-0" : "translate-y-4"}`}>
            {project.title}
          </h3>

          <p className={`text-gray-300 mb-6 text-sm leading-relaxed transition-transform duration-300 delay-75 ${isPressed ? "translate-y-0" : "translate-y-4 group-hover:translate-y-0"}`}>
            {project.description}
          </p>

          <div className={`flex flex-wrap justify-center gap-2 mb-8 transition-transform duration-300 delay-100 ${isPressed ? "translate-y-0" : "translate-y-4 group-hover:translate-y-0"}`}>
            {project.tech.slice(0, 4).map((tech) => (
              <span key={tech} className="px-2 py-1 bg-white/10 rounded-md text-[10px] uppercase tracking-wider text-white border border-white/5">
                {tech}
              </span>
            ))}
          </div>

          <div className={`flex gap-4 w-full transition-transform duration-300 delay-150 ${isPressed ? "translate-y-0" : "translate-y-4 group-hover:translate-y-0"}`}>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-white text-black py-2 rounded-xl font-bold hover:bg-gray-200 transition-colors pointer-events-auto text-sm"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()}
            >
                <ExternalLink className="w-4 h-4" />
                Live
            </a>
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 py-2 rounded-xl hover:bg-white/20 transition-colors pointer-events-auto text-sm"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()}
            >
                <Github className="w-4 h-4" />
                Code
            </a>
          </div>
        </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 px-4 z-10 min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-linear-to-r from-gray-200 via-gray-400 to-gray-200 bg-clip-text text-transparent drop-shadow-lg pb-2 font-display tracking-tight">
          Featured Projects
        </h2>

        <div className="text-center mb-2 text-gray-500 flex items-center justify-center gap-2 animate-pulse">
            <ArrowRightLeft className="w-4 h-4" />
            <span className="text-sm uppercase tracking-widest">Swipe • Tap for Details</span>
        </div>

        <CardStack 
          items={PROJECTS}
          cardWidth={600} 
          cardHeight={340} // 16:9 Aspect Ratio
          autoAdvance={true}
          intervalMs={4000}
          springStiffness={180} // Faster, snappier spring
          springDamping={30}
          renderCard={(project, { active }) => (
            <ProjectCard project={project} active={active} />
          )}
        />
      </div>
    </section>
  );
};

export default Projects;
