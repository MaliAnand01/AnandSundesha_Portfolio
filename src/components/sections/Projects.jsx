/* eslint-disable no-unused-vars */
import { PROJECTS } from "../../data/data";
import { motion } from "framer-motion";
import { Code2, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
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
              className="group relative backdrop-blur-xl bg-white/5 p-6 rounded-3xl border border-white/10 hover:border-purple-500/50 hover:scale-105 duration-500 transition-all overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl`}
              />

              <div className="relative z-10">
                <div className="rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* <Code2 className="w-20 h-20 text-purple-400" /> */}
                    <img src={project.img} alt={project.title} className="object-cover" />
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-full text-xs border border-purple-500/30 text-purple-300"
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
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
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
