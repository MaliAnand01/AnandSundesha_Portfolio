import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fake progress animation that slows down as it reaches 90%
    if (!isLoading) {
      setProgress(100);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev; // Hold at 90% until loaded
        const increment = Math.max(1, (90 - prev) / 10);
        return prev + increment;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
          <div className="relative flex flex-col items-center">
            {/* Pulsing Logo/Text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-8"
            >
              Loading Experience
            </motion.h1>

            {/* Progress Bar Container */}
            <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden relative">
              {/* Animated Progress Bar */}
              <motion.div
                className="h-full bg-linear-to-r from-purple-500 to-pink-500"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
              
              {/* Shine Effect */}
              <motion.div
                className="absolute top-0 bottom-0 w-20 bg-linear-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: [-100, 300] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "linear",
                }}
              />
            </div>

            {/* Percentage Text */}
            <motion.p
              className="mt-4 font-mono text-purple-400 text-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {Math.round(progress)}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
