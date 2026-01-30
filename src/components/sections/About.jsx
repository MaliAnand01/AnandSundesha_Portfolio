/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { SKILLS, FUN_FACTS } from "../../data/data";
import JourneyTimeline from "./JourneyTimeline";
import TechStackSlider from "../ui/TechStackSlider";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 w-full md:w-[80%] mx-auto px-4 z-10 overflow-hidden"
    >
      {/* Section title */}
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-10 bg-linear-to-r from-gray-200 via-gray-400 to-gray-200 bg-clip-text text-transparent drop-shadow-lg pb-2 font-display tracking-tight">
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
          <h3 className="text-3xl font-bold leading-tight font-tech">
            Self-Taught Developer & <br />
            <span className="bg-linear-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent">
              MCA Candidate
            </span>
          </h3>

          {/* Currently learning badge */}
          <div className="flex items-center gap-3">
            <span
              className="
                relative inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium font-tech tracking-wide
                bg-linear-to-r from-gray-800/50 to-gray-900/50
                border border-gray-600/30 text-gray-300 backdrop-blur-xl
                shadow-[0_0_15px_rgba(255,255,255,0.1)]
              "
            >
              <span className="absolute left-2 w-2.5 h-2.5 rounded-full bg-gray-400 animate-ping opacity-75"></span>
              <span className="absolute left-2 w-2.5 h-2.5 rounded-full bg-gray-300"></span>
              <span className="pl-4">Pursuing Java Full Stack Cert.</span>
            </span>
          </div>

          {/* Intro */}
          <p className="text-lg leading-relaxed text-gray-400 font-body">
            I’m a{" "}
            <span className="text-gray-100 font-semibold">
              passionate web developer
            </span>{" "}
            blending the agility of self-taught coding with the academic depth of an <b>MCA</b>. 
            I have built real-world freelance solutions (like <i>PongalDelights</i>) and am currently expanding my expertise into enterprise backend development with <b>Java & Spring Boot</b>.
          </p>

          {/* Focus cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-gray-200 mb-2 font-tech uppercase tracking-wide">
                Frontend Expertise
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed font-body">
                Building responsive, pixel-perfect interfaces with React, Redux, and Tailwind CSS.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-gray-200 mb-2 font-tech uppercase tracking-wide">
                Backend Aspirations
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed font-body">
                Mastering Java, Spring Boot, and SQL to transition into a robust Full Stack Engineer.
              </p>
            </div>
          </div>

          {/* Mini stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="backdrop-blur-xl bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-4 text-center hover:border-zinc-500 transition-colors">
              <h4 className="text-2xl font-bold bg-linear-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent font-display">
                Freelance
              </h4>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-tech">Experience</p>
            </div>

            <div className="backdrop-blur-xl bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-4 text-center hover:border-zinc-500 transition-colors">
              <h4 className="text-2xl font-bold bg-linear-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent font-display">
                MCA
              </h4>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-tech">Candidate</p>
            </div>

            <div className="backdrop-blur-xl bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-4 text-center hover:border-zinc-500 transition-colors">
              <h4 className="text-2xl font-bold bg-linear-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent font-display">
                Open
              </h4>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-tech">To Work</p>
            </div>
          </div>

          {/* Resume Download */}
          <motion.a
            href="/Anand_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(200, 200, 200, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="
              inline-flex items-center gap-3 w-fit
              px-6 py-3 mt-2
              rounded-full
              backdrop-blur-xl
              bg-white/10
              border border-white/20
              text-gray-100 font-medium
              transition-all hover:border-white/40 hover:bg-white/15
              font-tech uppercase tracking-wide
            "
          >
            <Download className="w-4 h-4" />
            Download Resume
          </motion.a>

          {/* Tech summary */}
          <div className="space-y-2 text-sm pt-2 text-gray-400 font-tech">
            <p>
              <span className="text-gray-200 font-semibold">Tech Stack:</span>{" "}
              HTML, CSS, JavaScript, React, Tailwind, SQL, Java
            </p>
            <p>
              <span className="text-gray-200 font-semibold">
                Tools & Workflow:
              </span>{" "}
              Node.js, Python, Git
            </p>
            <p>
              <span className="text-gray-200 font-semibold">Fun Facts:</span>{" "}
              {FUN_FACTS.join(", ")}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Tech Stack Slider */}
      <div className="mt-20">
        <TechStackSlider />
      </div>
    </section>
  );
};

export default About;
