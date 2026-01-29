/* eslint-disable no-unused-vars */
import { SOCIAL_LINKS } from "../../data/data";
import { motion } from "framer-motion";
import { Send, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";

const EMAIL = "anandsundesha@gmail.com";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("Collaboration Opportunity");
    const body = encodeURIComponent(
      "Hi Anand,\n\nI came across your portfolio and would love to connect."
    );

    const isAndroid = /android/i.test(navigator.userAgent);

    if (isAndroid) {
      // Android Gmail App (cannot force new tab — opens app)
      const gmailIntent = `intent://compose?to=${EMAIL}&subject=${subject}&body=${body}#Intent;scheme=mailto;package=com.google.android.gm;end`;
      window.location.href = gmailIntent;
    } else {
      // Desktop & iOS → open in NEW TAB
      const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${subject}&body=${body}`;
      window.open(gmailWebUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-32 px-4 z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-bold mb-20 bg-linear-to-r from-gray-200 via-gray-400 to-gray-200 bg-clip-text text-transparent drop-shadow-lg pb-2 font-display tracking-tight">
          Let’s Connect
        </h2>

        {/* Card */}
        <div className="relative backdrop-blur-xl bg-zinc-900/50 p-6 md:p-12 rounded-3xl border border-white/10 hover:border-white/20 transition-colors shadow-lg shadow-black/20">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
            className="inline-flex p-6 bg-linear-to-br from-gray-700/50 to-gray-900/50 rounded-full mb-8 border border-white/5"
          >
            <Send className="w-12 h-12 text-gray-200" />
          </motion.div>

          {/* Text */}
          <p className="text-xl text-gray-400 mb-12 leading-relaxed font-body">
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
                  className="group p-4 backdrop-blur-xl bg-zinc-800/50 rounded-2xl border border-white/10 hover:border-white/30 hover:bg-zinc-700/50 transition-all"
                  aria-label={link.label}
                >
                  <Icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
              );
            })}
          </div>

          {/* CTA + Copy Email */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-gray-300 text-lg font-tech tracking-wider">
              anandsundesha@gmail.com
            </span>

            <motion.button
              onClick={handleCopyEmail}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="
      p-2
      rounded-full
      backdrop-blur-xl
      bg-white/10
      border border-white/20
      hover:bg-white/20
      transition-colors
    "
              aria-label="Copy email address"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4 text-gray-300" />
              )}
            </motion.button>
          </div>

          {/* Single CTA button */}
          <motion.a
            href="#"
            onClick={handleEmailClick}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255, 255, 255, 0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            className="
    inline-flex
    items-center
    gap-3
    px-10
    py-4
    bg-linear-to-r
    from-gray-200
    to-gray-400
    rounded-full
    font-semibold
    text-lg
    text-black
    transition-all
    font-tech uppercase tracking-wide
  "
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
