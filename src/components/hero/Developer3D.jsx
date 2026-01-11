/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Cpu } from 'lucide-react';

const Developer3D = () => {
  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* Floating icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-10 left-10 p-4 backdrop-blur-xl bg-purple-500/10 border border-purple-500/30 rounded-2xl"
      >
        <Code2 className="w-8 h-8 text-purple-400" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        className="absolute top-20 right-10 p-4 backdrop-blur-xl bg-pink-500/10 border border-pink-500/30 rounded-2xl"
      >
        <Terminal className="w-8 h-8 text-pink-400" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, delay: 0.2 }}
        className="absolute bottom-16 left-16 p-4 backdrop-blur-xl bg-blue-500/10 border border-blue-500/30 rounded-2xl"
      >
        <Cpu className="w-8 h-8 text-blue-400" />
      </motion.div>

      {/* Central 3D-ish block */}
      <div className="relative">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-3xl"
        />

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative z-10"
        >
          <div className="w-64 h-64 relative">
            {/* Top circular element */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-linear-to-br from-purple-400 to-pink-400 rounded-full border-4 border-white/20 shadow-2xl">
              <div className="absolute top-8 left-4 w-3 h-3 bg-white rounded-full"></div>
              <div className="absolute top-8 right-4 w-3 h-3 bg-white rounded-full"></div>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-10 h-5 border-b-2 border-white rounded-full"></div>
            </div>

            {/* Middle rectangle */}
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-32 h-40 bg-linear-to-br from-purple-500/80 to-blue-500/80 rounded-3xl backdrop-blur-xl border-2 border-white/20 shadow-2xl">
              <div className="absolute top-8 left-4 right-4 space-y-2">
                <div className="h-1 bg-white/40 rounded w-3/4"></div>
                <div className="h-1 bg-white/40 rounded w-1/2"></div>
                <div className="h-1 bg-white/40 rounded w-2/3"></div>
              </div>
            </div>

            {/* Side rounded rectangles */}
            <div className="absolute top-28 -left-4 w-12 h-20 bg-linear-to-br from-purple-500/80 to-pink-500/80 rounded-full backdrop-blur-xl border-2 border-white/20 transform -rotate-12"></div>
            <div className="absolute top-28 -right-4 w-12 h-20 bg-linear-to-br from-purple-500/80 to-pink-500/80 rounded-full backdrop-blur-xl border-2 border-white/20 transform rotate-12"></div>

            {/* Bottom panel */}
            <motion.div
              animate={{ rotateX: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-3 bg-linear-to-r from-gray-700 to-gray-600 rounded-lg shadow-xl"
            >
              <div className="absolute -top-16 left-0 right-0 h-16 bg-linear-to-br from-gray-800 to-gray-700 rounded-t-lg border-2 border-purple-500/30">
                <div className="p-2 grid grid-cols-8 gap-1">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0.3 }}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                      className="h-1 bg-green-400 rounded"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Developer3D;
