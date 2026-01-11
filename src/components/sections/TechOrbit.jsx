/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Atom, Braces, Server, GitBranch, Database } from "lucide-react";

const tech = [
  { icon: Atom, color: "text-cyan-400" },  
  { icon: Braces, color: "text-yellow-400" }, 
  { icon: Server, color: "text-green-400" },   
  { icon: GitBranch, color: "text-orange-400" },
  { icon: Database, color: "text-purple-400" } 
];

const TechOrbit = () => {
  return (
    <div className="relative w-72 h-72 flex items-center justify-center">
      {/* Core glass sphere */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute w-28 h-28 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl flex items-center justify-center text-center text-sm font-semibold text-white"
      >
        Developer<br />Mindset
      </motion.div>

      {/* Orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-full h-full"
      >
        {tech.map((item, i) => {
          const Icon = item.icon;
          const angle = (360 / tech.length) * i;

          return (
            <div
              key={i}
              style={{
                transform: `rotate(${angle}deg) translate(110px) rotate(-${angle}deg)`
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 ${item.color}`}
              >
                <Icon className="w-6 h-6" />
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default TechOrbit;
