/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HERO_ROLES } from "../../data/data";
import Developer3D from "./Developer3D";

const Hero = ({ scrollToSection }) => {
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
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center md:pt-24 pt-40 px-4 z-10"
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left flex-1 z-20"
        >
          {/* Role Badge */}  
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
    inline-flex items-center gap-2
    px-4 py-2 mb-4
    text-sm md:text-base font-mono text-white
    bg-white/20 backdrop-blur-xl
    border border-white/30
    rounded-full
    shadow-lg shadow-purple-500/20
    ring-1 ring-white/20
  "
          >
            <span className="w-2 h-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500 animate-pulse" />
            Web Developer · React Specialist
          </motion.span>

          <span className="text-purple-400 text-lg font-mono block mb-2">
            Hi there, I'm
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Anand Sundesha
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-6 md:mb-8 h-12 text-gray-300">
            {text}
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-6 md:mb-8 max-w-xl leading-relaxed">
            Crafting beautiful, performant web experiences with modern
            technologies. Specialized in React, Tailwind CSS, and creating
            seamless user interfaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("Signal")}
              className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg transition-all cursor-pointer"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection("Forge")}
              className="w-full sm:w-auto px-8 py-4 border-2 border-purple-500/50 rounded-full font-semibold backdrop-blur-sm hover:bg-purple-500/10 transition-all cursor-pointer"
            >
              View Work
            </button>
          </div>
        </motion.div>

        {/* Right Side: 3D Developer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center items-center flex-1 w-full md:w-auto"
        >
          <Developer3D />
        </motion.div>
      </div>

      {/* Scroll Down Icon */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-purple-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
