/* eslint-disable no-unused-vars */
import React from "react";
import { PROJECTS } from "../../data/data";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRightLeft } from "lucide-react";
import { CardStack } from "../ui/CardStack";

const ProjectActions = ({ project, isMobile = false, stopPropagation = false }) => {
  const handleClick = (e) => {
    if (stopPropagation) {
      e.stopPropagation();
    }
  };

  const handlePointerDown = (e) => {
    if (stopPropagation) {
      e.stopPropagation();
    }
  };

  const baseClass = "flex-1 flex items-center justify-center gap-2 rounded-xl font-bold transition-colors text-sm";
  const paddingClass = isMobile ? "py-2.5" : "py-2 pointer-events-auto";

  return (
    <div 
      className={`flex gap-4 w-full ${!isMobile ? "transition-transform duration-300 delay-150" : "mt-auto"}`}
      // Apply animation classes only if not mobile (inherited from parent in desktop view)
    >
      <a
        href={project.liveDemo}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${paddingClass} bg-white text-black hover:bg-gray-200`}
        onPointerDown={handlePointerDown}
        onClick={handleClick}
      >
        <ExternalLink className="w-4 h-4" />
        Live
      </a>
      <a
        href={project.code}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${paddingClass} ${
          isMobile 
            ? "bg-zinc-800 text-white border border-white/10 hover:bg-zinc-700"
            : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
        }`}
        onPointerDown={handlePointerDown}
        onClick={handleClick}
      >
        <Github className="w-4 h-4" />
        Code
      </a>
    </div>
  );
};

const ProjectCard = React.memo(({ project, active }) => {
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
        group cursor-drag
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

          <div className={`w-full transition-transform duration-300 delay-150 ${isPressed ? "translate-y-0" : "translate-y-4 group-hover:translate-y-0"}`}>
             <ProjectActions project={project} stopPropagation={true} />
          </div>
        </div>
    </div>
  );
});

const MobileProjectCard = React.memo(({ project }) => {
  return (
    <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-lg flex flex-col">
       {/* Image Section */}
       <div className="relative w-full aspect-video bg-black overflow-hidden">
        <img 
          src={project.img} 
          alt={project.title} 
          loading="lazy"
          className="w-full h-full object-cover object-top"
        />
        {/* Tech Stack Overlay (Minimal) */}
        <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
          {project.tech.slice(0, 3).map((tech) => (
            <span key={tech} className="px-2 py-0.5 bg-black/60 backdrop-blur-md rounded text-[10px] uppercase tracking-wider text-white/90 border border-white/10">
              {tech}
            </span>
          ))}
        </div>
       </div>

       {/* Content Section */}
       <div className="p-5 flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-bold text-white font-tech tracking-wide uppercase mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          <ProjectActions project={project} isMobile={true} />
       </div>
    </div>
  );
});

const Projects = () => {
  const renderCard = React.useCallback((project, { active }) => (
    <ProjectCard project={project} active={active} />
  ), []);

  return (
    <section id="projects" className="relative py-20 px-4 z-10 min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-linear-to-r from-gray-200 via-gray-400 to-gray-200 bg-clip-text text-transparent drop-shadow-lg pb-2 font-display tracking-tight">
          Featured Projects
        </h2>

        <div className="text-center mb-2 text-gray-500 hidden md:flex items-center justify-center gap-2 animate-pulse">
            <ArrowRightLeft className="w-4 h-4" />
            <span className="text-sm uppercase tracking-widest">Swipe • Hover for Details</span>
        </div>

        {/* Desktop View: Card Stack */}
        <div className="hidden md:block w-full">
          <CardStack 
            items={PROJECTS}
            cardWidth={600} 
            cardHeight={340} // 16:9 Aspect Ratio
            autoAdvance={true}
            intervalMs={2400}
            springStiffness={180} 
            springDamping={30}
            renderCard={renderCard}
          />
        </div>



        {/* Mobile View: Vertical Grid */}
        <div className="md:hidden w-full flex flex-col gap-8 pb-10">
           {PROJECTS.map((project, index) => (
              <div key={index} className="w-full">
                 <MobileProjectCard project={project} />
              </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
