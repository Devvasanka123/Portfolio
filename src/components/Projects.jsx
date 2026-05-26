import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 right-1/10 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-gray-900 dark:text-white">
            Built with Purpose
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Real projects with real code. Combining algorithms, database schemas, 
            and modern web patterns to deliver clean, maintainable systems.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`
                relative p-[1px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full
                ${project.featured 
                  ? "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" 
                  : "bg-gradient-to-b from-gray-200/80 to-transparent dark:from-white/10 dark:to-white/0"
                }
              `}
            >
              {/* Inner container */}
              <div className="bg-white dark:bg-[#0b111e]/90 rounded-[23px] p-6 sm:p-8 flex flex-col h-full z-10">
                {/* Badge for Featured */}
                {project.featured && (
                  <div className="self-start mb-4 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    Featured Project
                  </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 mt-1 mb-4">
                    {project.subtitle}
                  </p>
                )}

                {/* Elaborated Bullet Points */}
                <ul className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 flex-grow space-y-2 list-disc pl-4">
                  {project.points && project.points.map((point, ptIdx) => (
                    <li key={ptIdx} className="pl-1">
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-gray-50 dark:bg-white/5 border border-gray-150 dark:border-white/5 text-gray-600 dark:text-gray-300 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Footer action link */}
                <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors group/link"
                  >
                    <FaGithub size={16} />
                    <span>Source Code</span>
                    <FaExternalLinkAlt size={10} className="opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all duration-200" />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;