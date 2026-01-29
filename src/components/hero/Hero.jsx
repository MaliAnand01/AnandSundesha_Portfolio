/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HERO_ROLES } from "../../data/data";
import Developer3D from "./Developer3D";

import { Spotlight } from "../ui/Spotlight";

const Hero = ({ scrollToSection, isLoaded }) => {
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % HERO_ROLES.length;
      const fullText = HERO_ROLES[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center md:pt-24 pt-40 px-4 z-10 overflow-hidden"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Text */}
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.2 }}
          className="text-left flex-1 z-20 md:w-1/2 max-w-2xl"
        >
          {/* Role Badge */}  
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
    inline-flex items-center gap-2
    px-4 py-2 mb-4
    text-sm md:text-base font-tech uppercase tracking-widest text-gray-200
    bg-zinc-800/50 backdrop-blur-xl
    border border-white/10
    rounded-full
    shadow-lg shadow-white/5
    ring-1 ring-white/10
  "
          >
            <span className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
            Web Developer · React Specialist
          </motion.span>

          <span className="text-gray-400 text-lg font-tech tracking-wider block mb-2">
            Hi there, I'm
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent drop-shadow-lg font-display tracking-tight">
            Anand Sundesha
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-6 md:mb-8 h-12 text-gray-400 font-tech">
            {text}
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mb-6 md:mb-8 max-w-xl leading-relaxed font-body">
            Crafting beautiful, performant web experiences with modern
            technologies. Specialized in React, Tailwind CSS, and creating
            seamless user interfaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("Signal")}
              className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-gray-200 to-gray-400 text-black rounded-full font-semibold hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all cursor-pointer font-tech uppercase tracking-wide"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection("Forge")}
              className="w-full sm:w-auto px-8 py-4 border-2 border-white/20 text-gray-300 rounded-full font-semibold backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all cursor-pointer font-tech uppercase tracking-wide"
            >
              View Work
            </button>
          </div>
        </motion.div>

        {/* Right Side: 3D Developer */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
           transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
           className="relative flex justify-center items-center w-full md:absolute md:right-0 md:top-0 md:h-full md:w-[50%] lg:w-[60%] pointer-events-none"
        >
          <div className="w-full h-full pointer-events-auto">
             <Developer3D />
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Icon */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <ChevronDown className="w-8 h-8 text-gray-500" />
      </motion.div>
    </section>
  );
};

export default Hero;
