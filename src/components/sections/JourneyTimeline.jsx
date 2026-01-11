/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { JOURNEY } from "../../data/data";

const JourneyTimeline = () => {
  return (
    <section className="mt-32 max-w-4xl mx-auto px-4">
      <h3 className="text-4xl font-bold text-center mb-20 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        My Journey
      </h3>

      <div className="relative border-l border-white/20">
        {JOURNEY.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative pl-10 pb-14"
          >
            {/* Dot */}
            <span className="absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-linear-to-r from-purple-500 to-pink-500 shadow-lg" />

            {/* Card */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <span className="text-sm text-purple-400 font-mono">
                {item.year}
              </span>
              <h4 className="text-xl font-semibold mt-1 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default JourneyTimeline;
