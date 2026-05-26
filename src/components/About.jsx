import { motion } from "framer-motion";
import { FaGraduationCap, FaHammer, FaTerminal } from "react-icons/fa";

function About() {
  const timeline = [
    {
      date: "Present",
      title: "Computer Engineering Student",
      subtitle: "Institute of Infrastructure, Technology, Research and Management (IITRAM)",
      description: "Applying computer science fundamentals through practical projects, operating systems studies, and continuous learning.",
      icon: <FaGraduationCap className="text-indigo-500" />
    },
    {
      date: "2024 - 2025",
      title: "Started Building",
      subtitle: "Self-Taught Developer",
      description: "Transitioned from learning computer science theory to building real-world applications. Focused on Python, web development, and algorithmic problem-solving.",
      icon: <FaHammer className="text-purple-500" />
    }
  ];

  const progress = [
    { name: "Python Programming", percentage: 85 },
    { name: "Problem Solving", percentage: 75 },
    { name: "Git & Version Control", percentage: 70 }
  ];

  return (
    <section id="about" className="relative min-h-screen py-24 px-6 overflow-hidden">
      {/* Visual background elements */}
      <div className="absolute top-1/2 left-2/3 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center md:text-left mb-16">
          <p className="text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-gray-900 dark:text-white">
            From Learning to Building
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl text-base sm:text-lg leading-relaxed">
            I believe in solving problems through code. Every project is an opportunity to 
            learn new patterns and create something meaningful that delivers value.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE - APPROACH & PROGRESS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-6 space-y-8"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0b111e]/60 border border-gray-100 dark:border-white/5 shadow-xl shadow-gray-100/50 dark:shadow-none">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FaTerminal className="text-indigo-500" size={16} />
                My Approach
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                Instead of just following tutorials, I focus on understanding why things work under the hood. 
                Each project starts with a real problem and ends with a working, production-ready solution.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                My learning is project-driven. I identify gaps in my knowledge, build something to fill them, 
                and carefully document what I learn along the way.
              </p>
            </div>

            {/* Progress metrics */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0b111e]/60 border border-gray-100 dark:border-white/5 shadow-xl shadow-gray-100/50 dark:shadow-none space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Learning Progress
              </h3>
              {progress.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{item.name}</span>
                    <span className="font-bold text-indigo-600 dark:text-indigo-400">{item.percentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE - TIMELINE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-6 relative pl-6 border-l-2 border-gray-150 dark:border-white/10 space-y-10"
          >
            {timeline.map((item, index) => (
              <div key={index} className="relative group">
                {/* Bullet Node */}
                <div className="absolute -left-[37px] top-1 p-2 rounded-full bg-white dark:bg-[#0b111e] border-2 border-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300 shadow-md">
                  {item.icon}
                </div>

                {/* Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0b111e]/40 border border-gray-100 dark:border-white/5 hover:border-indigo-500/30 shadow-lg hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-4 border border-indigo-100/50 dark:border-indigo-500/10">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">
                    {item.subtitle}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;