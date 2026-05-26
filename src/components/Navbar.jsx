import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, useScroll, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Connect", href: "#contact" }
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 pt-4 transition-all duration-300">
      <nav
        className={`
          max-w-5xl mx-auto rounded-2xl transition-all duration-500
          ${scrolled 
            ? "bg-white/70 dark:bg-[#090d16]/80 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 shadow-2xl py-3 px-6" 
            : "bg-white/30 dark:bg-[#030712]/30 backdrop-blur-md border border-white/10 shadow-md py-4 px-8"
          }
        `}
      >
        <div className="flex justify-between items-center">
          {/* Logo / Name */}
          <h1 className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            <a href="#home">Dev Vasanka</a>
          </h1>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="ml-2 px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-650 hover:to-pink-650 text-white text-xs font-bold shadow-md hover:shadow-indigo-500/20 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 overflow-hidden rounded-xl bg-white/95 dark:bg-[#080d1a]/95 backdrop-blur-2xl border border-gray-100 dark:border-white/5 shadow-xl flex flex-col items-center gap-4 py-6"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-semibold text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition-colors w-full text-center py-2 hover:bg-gray-50 dark:hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/resume.pdf?v=2"
                download
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-sm font-bold shadow-md hover:shadow-indigo-500/20 transition-all duration-300 active:scale-95 cursor-pointer"
              >
                Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left rounded-b-2xl"
          style={{ scaleX: scrollYProgress }}
        />
      </nav>
    </div>
  );
}

export default Navbar;