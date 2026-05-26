import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-[#030712] border-t border-gray-150 dark:border-white/5 px-6 py-16 mt-16 transition-colors duration-300">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Column 1 - Brand Profile */}
        <div className="md:col-span-5 space-y-4">
          <h3 className="font-extrabold text-xl text-gray-900 dark:text-white">
            Dev Vasanka
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
            Building software solutions through clean code. Always learning, 
            always building practical tools to solve real problems.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/Devvasanka123"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-150 dark:border-white/5 text-gray-650 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/dev-vasanka-bb6520369"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-150 dark:border-white/5 text-gray-650 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Navigation
          </h4>
          <ul className="space-y-2.5">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Skills", href: "#skills" },
              { name: "Projects", href: "#projects" },
              { name: "Connect", href: "#contact" }
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-600 dark:text-gray-450 hover:text-indigo-500 dark:hover:text-indigo-450 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Resources */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Resources & Resume
          </h4>
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/Devvasanka123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-gray-600 dark:text-gray-450 hover:text-indigo-500 transition-colors"
              >
                GitHub Profile
              </a>
              <a
                href="https://linkedin.com/in/dev-vasanka-bb6520369"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-gray-600 dark:text-gray-450 hover:text-indigo-500 transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-650 hover:to-purple-700 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer active:scale-95"
            >
              <FaFileDownload size={14} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

      </div>

      {/* Copyright border bottom */}
      <div className="max-w-5xl mx-auto pt-8 mt-12 border-t border-gray-150 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400 dark:text-gray-500">
        <p>© {currentYear} Dev Vasanka. All rights reserved.</p>
        <p>Built with Purpose, React & Tailwind CSS.</p>
      </div>
    </footer>
  );
}

export default Footer;