/* eslint-disable no-unused-vars */
import { SOCIAL_LINKS } from "../../data/data";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 px-4 z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-bold mb-20 bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Let’s Connect
        </h2>

        {/* Card */}
        <div className="relative backdrop-blur-xl bg-white/5 p-12 rounded-3xl border border-white/10">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
            className="inline-flex p-6 bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-full mb-8"
          >
            <Send className="w-12 h-12 text-purple-400" />
          </motion.div>

          {/* Text */}
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            I’m always open to exciting opportunities, freelance work, and
            meaningful collaborations. <br />
            Let’s build something impactful together.
          </p>

          {/* Social links */}
          <div className="flex justify-center gap-6 mb-12 flex-wrap">
            {SOCIAL_LINKS.map((link, idx) => {
              const Icon = link.icon;

              return (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="group p-4 backdrop-blur-xl bg-linear-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/30 hover:border-purple-500 transition-all"
                  aria-label={link.label}
                >
                  <Icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                </motion.a>
              );
            })}
          </div>

          {/* CTA button */}
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=anandsundesha@gmail.com&su=Collaboration%20Opportunity&body=Hi%20Anand,%0A%0AI%20came%20across%20your%20portfolio..."
            target="_blank"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(168, 85, 247, 0.45)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-linear-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-lg transition-all"
          >
            <Mail className="w-5 h-5" />
            Send Me an Email
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
