/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { SKILLS, FUN_FACTS } from "../../data/data";
import JourneyTimeline from "./JourneyTimeline";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-32 w-[80%] mx-auto px-4 z-10 overflow-hidden"
    >
      {/* Section title */}
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-10 bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
        About Me
      </h2>

      {/* Two-column grid */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center w-full max-w-sm mx-auto"
        >
          <JourneyTimeline />
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-gray-300"
        >
          {/* Headline */}
          <h3 className="text-3xl font-bold leading-tight">
            Frontend-Focused Developer <br />
            <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Exploring the Backend
            </span>
          </h3>

          {/* Currently learning badge */}
          <div className="flex items-center gap-3">
            <span
              className="
                relative inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium
                bg-linear-to-r from-purple-500/20 to-pink-500/20
                border border-purple-500/30 text-purple-300 backdrop-blur-xl
              "
            >
              <span className="absolute left-2 w-2.5 h-2.5 rounded-full bg-pink-400 animate-ping opacity-75"></span>
              <span className="absolute left-2 w-2.5 h-2.5 rounded-full bg-pink-500"></span>
              <span className="pl-4">Currently learning Backend</span>
            </span>
          </div>

          {/* Intro */}
          <p className="text-lg leading-relaxed">
            I’m an{" "}
            <span className="text-purple-400 font-semibold">
              intermediate web developer
            </span>{" "}
            who loves building visually engaging, smooth, and responsive user
            interfaces. My primary focus is on{" "}
            <span className="font-semibold">modern frontend development</span>,
            while actively learning and integrating backend technologies.
          </p>

          {/* Focus cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-5">
              <h4 className="text-lg font-semibold text-purple-400 mb-2">
                Frontend Core
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                React, Tailwind CSS, JavaScript animations, component
                architecture, responsive layouts, and UI performance.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-5">
              <h4 className="text-lg font-semibold text-pink-400 mb-2">
                Backend Learning
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Node.js, SQL databases, authentication flows, APIs, and
                preparing for full-stack development.
              </p>
            </div>
          </div>

          {/* Mini stats */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <h4 className="text-3xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                10+
              </h4>
              <p className="text-xs text-gray-400 mt-1">Projects Built</p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <h4 className="text-3xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                12+
              </h4>
              <p className="text-xs text-gray-400 mt-1">Tools & Tech</p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <h4 className="text-3xl font-bold bg-linear-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                ∞
              </h4>
              <p className="text-xs text-gray-400 mt-1">Learning Mindset</p>
            </div>
          </div>

          {/* Resume Download */}
          <motion.a
            href="/Anand_Resume.pdf"
            download
            target="_blank"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(168, 85, 247, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="
              inline-flex items-center gap-3 w-fit
              px-6 py-3 mt-2
              rounded-full
              backdrop-blur-xl
              bg-white/10
              border border-purple-500/30
              text-purple-300 font-medium
              transition-all hover:border-purple-400
            "
          >
            <Download className="w-4 h-4" />
            Download Resume
          </motion.a>

          {/* Tech summary */}
          <div className="space-y-2 text-sm pt-2">
            <p>
              <span className="text-purple-400 font-semibold">Tech Stack:</span>{" "}
              HTML, CSS, JavaScript, React, Tailwind, SQL, Java
            </p>
            <p>
              <span className="text-purple-400 font-semibold">
                Tools & Workflow:
              </span>{" "}
              Node.js, Python, Git
            </p>
            <p>
              <span className="text-purple-400 font-semibold">Fun Facts:</span>{" "}
              {FUN_FACTS.join(", ")}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Skills section */}
      <div className="mt-20 w-full max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {Object.entries(SKILLS).map(([category, items], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="backdrop-blur-xl bg-white/5 p-6 rounded-2xl border border-white/10"
          >
            <h3 className="text-xl font-semibold mb-4 capitalize bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm border border-purple-500/30"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
