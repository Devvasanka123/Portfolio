import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaTools, FaBrain, FaChevronRight } from "react-icons/fa";

function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <FaCode size={22} className="text-indigo-500" />,
      items: ["Python", "JavaScript", "C++", "C", "Java"],
      color: "from-indigo-500/20 to-indigo-500/5"
    },
    {
      title: "Web Development",
      icon: <FaLaptopCode size={22} className="text-purple-500" />,
      items: ["HTML5 & CSS3", "Tailwind CSS", "JavaScript ES6+", "Node.js & Express", "MongoDB & SQL"],
      color: "from-purple-500/20 to-purple-500/5"
    },
    {
      title: "Tools & Practices",
      icon: <FaTools size={22} className="text-pink-500" />,
      items: ["Git & GitHub", "VS Code", "Command Line", "Problem Solving", "Software Architecture"],
      color: "from-pink-500/20 to-pink-500/5"
    },
    {
      title: "Currently Learning",
      icon: <FaBrain size={22} className="text-blue-500" />,
      items: ["Machine Learning Basics", "Scikit-Learn", "Data Structures & Algorithms", "React Basics"],
      color: "from-blue-500/20 to-blue-500/5"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      {/* Background visual element */}
      <div className="absolute top-1/3 left-1/10 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-gray-900 dark:text-white">
            Technical Toolkit
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Continuously expanding my skills through hands-on projects, rigorous B.Tech coursework, 
            and focused self-study.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="relative p-[1px] rounded-3xl overflow-hidden bg-gradient-to-b from-gray-200/80 to-transparent dark:from-white/10 dark:to-white/0 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-300"
            >
              {/* Inner card */}
              <div className="h-full bg-white dark:bg-[#0b111e]/85 rounded-[23px] p-6 flex flex-col">
                
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-white/5">
                  <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-150/50 dark:border-white/5 shadow-sm">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-4 flex-grow">
                  {category.items.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-350 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200 group">
                      <FaChevronRight size={10} className="text-gray-300 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all duration-200" />
                      <span className="font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;