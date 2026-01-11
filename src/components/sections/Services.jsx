/* eslint-disable no-unused-vars */
import { SERVICES } from "../../data/data";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="relative py-32 px-4 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
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
                className="group relative backdrop-blur-xl bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 hover:-translate-y-1.5 duration-500 transition-all overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-4 rounded-2xl mb-6 bg-linear-to-br ${service.gradient} bg-opacity-20`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
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
