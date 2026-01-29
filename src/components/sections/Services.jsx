/* eslint-disable no-unused-vars */
import { SERVICES } from "../../data/data";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="relative py-32 px-4 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-linear-to-r from-gray-200 via-gray-400 to-gray-200 bg-clip-text text-transparent drop-shadow-lg pb-2 font-display tracking-tight">
          What I Do
        </h2>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative backdrop-blur-xl bg-zinc-900/50 p-8 rounded-3xl border border-white/10 hover:border-white/30 hover:-translate-y-1.5 duration-500 transition-all overflow-hidden shadow-lg shadow-black/20"
              >
                {/* Hover glow */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity mix-blend-overlay`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex p-4 rounded-2xl mb-6 bg-zinc-800/80 border border-white/5 text-gray-200 group-hover:text-white transition-colors"
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-200 group-hover:text-white transition-colors font-tech uppercase tracking-wide">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
