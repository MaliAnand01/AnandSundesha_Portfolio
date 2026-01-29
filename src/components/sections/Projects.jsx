/* eslint-disable no-unused-vars */
import { PROJECTS } from "../../data/data";
import { motion } from "framer-motion";
import { Code2, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-linear-to-r from-gray-200 via-gray-400 to-gray-200 bg-clip-text text-transparent drop-shadow-lg pb-2 font-display tracking-tight">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative backdrop-blur-xl bg-zinc-900/50 p-6 rounded-3xl border border-white/10 hover:border-white/30 hover:scale-105 duration-500 transition-all overflow-hidden shadow-lg shadow-black/20"
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-3xl mix-blend-overlay`}
              />

              <div className="relative z-10">
                <div className="rounded-2xl mb-6 flex items-center justify-center overflow-hidden border border-white/5">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    {/* <Code2 className="w-20 h-20 text-purple-400" /> */}
                    <img src={project.img} alt={project.title} className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500" />
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-200 group-hover:text-white transition-colors font-tech tracking-wide uppercase">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-zinc-800/50 rounded-full text-xs border border-white/10 text-gray-300 hover:bg-zinc-700/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
