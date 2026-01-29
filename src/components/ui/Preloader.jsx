import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hello",
  "नमस्ते",
  "Bonjour",
  "こんにちは",
  "Hola",
  "Ciao",
  "Anand.",
];

const Preloader = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const [exit, setExit] = useState(false);

  useEffect(() => {
    if (index === greetings.length - 1) {
      const timeout = setTimeout(() => {
        setExit(true);
        setTimeout(onComplete, 200); // Trigger site reveal almost immediately after zoom starts
      }, 2000); 
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        setIndex((prev) => prev + 1);
      },
      index === 0 ? 1000 : 180
    );

    return () => clearTimeout(timeout);
  }, [index, onComplete]);

  return (
    <AnimatePresence mode="wait">
      {!exit && (
        <motion.div
        key="preloader"
        className="fixed inset-0 z-[9999] flex items-center justify-center cursor-none overflow-hidden"
      >
        {/* Background Layer - Fades out faster */}
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="absolute inset-0 bg-black"
        />

        <div className="relative flex flex-col items-center justify-center z-10">
          {index === greetings.length - 1 ? (
            <div className="relative flex items-center justify-center z-50">
                {/* Final Word: Extreme Zoom In Transition */}
                <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ 
                    scale: 300, 
                    opacity: 0,
                    transition: { duration: 2.2, ease: [0.7, 0, 1, 1] } // Easing adjusted for cleaner fly-through
                }}
                className="text-5xl md:text-7xl font-bold text-white font-display tracking-widest whitespace-nowrap will-change-transform"
                >
                Anand.
                </motion.h1>
            </div>
          ) : (
            // Cycling Words
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.1 } }}
              transition={{ duration: 0.2 }}
              className="text-5xl md:text-7xl font-bold bg-linear-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent font-display tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] z-50"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-red-500 mb-2 mr-3 align-middle animate-pulse shadow-[0_0_10px_#ef4444]" />
              {greetings[index]}
            </motion.h1>
          )}

            {/* Futuristic Ring Loader */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] opacity-30 pointer-events-none">
                <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }} 
                 exit={{ opacity: 0, transition: { duration: 0.5 } }} // Rings fade out fast
                 className="w-full h-full"
                >
                    <motion.div 
                        className="w-full h-full border border-white/20 rounded-full"
                        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div 
                        className="absolute inset-8 border border-white/40 rounded-full border-t-transparent border-b-transparent"
                        animate={{ rotate: -180 }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div 
                        className="absolute inset-20 border border-t-white/10 border-r-white/10 border-b-transparent border-l-transparent rounded-full"
                        animate={{ rotate: 90 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>
            </div>
        </div>
      </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
