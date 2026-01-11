/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../../data/data";

const Navbar = ({ scrollToSection }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Nest");

  const handleClick = (item) => {
    scrollToSection(item);
    setActive(item);
    setOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex justify-between items-center w-4/5"
      >
        <div className="flex justify-between items-center w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-lg">
          
          {/* Name / Logo */}
          <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-blue-500">
            Anand.
          </span>

          {/* Links */}
          <div className="flex items-center gap-3">
            {NAV_ITEMS.map((item) => (
              <motion.button
                key={item}
                onClick={() => handleClick(item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === item
                    ? "bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-6 left-1/2 -translate-x-1/2 z-50 w-11/12">
        <div className="flex justify-between items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-3 shadow-lg">
          {/* Name */}
          <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-500 via-pink-500 to-blue-500">
            Anand.
          </span>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {open ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg p-4 flex flex-col gap-2"
          >
            {NAV_ITEMS.map((item) => (
              <motion.button
                key={item}
                onClick={() => handleClick(item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                  active === item
                    ? "bg-linear-to-r from-purple-500 to-pink-500 text-white"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Navbar;
