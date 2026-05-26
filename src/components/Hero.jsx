import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { 
   FaBrain, FaArrowRight, FaUniversity,
  FaPython, FaJs, FaHtml5, FaGitAlt
} from "react-icons/fa";

function Hero() {
  const stats = [
    { value: "3+", label: "Projects Built", detail: "Open Source" },
    { value: "8.65", label: "CGPA", detail: "IITRAM Student" },
    { value: "2+", label: "Years Coding", detail: "Building Apps" }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen px-6 flex items-center pt-28 pb-16 overflow-hidden bg-radial from-indigo-500/5 via-transparent to-transparent"
    >
      {/* Decorative background glow circles */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center">
        {/* LEFT COLUMN - CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-7 flex flex-col items-start text-left"
        >
          {/* Accent Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-100/80 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            2nd Year Computer Engineering Student
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white">
            I build tools that <br />
            <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              solve real problems
            </span>
          </h1>

          {/* Animated Subtitle */}
          <div className="mt-4 h-8 text-indigo-600 dark:text-indigo-400 text-lg sm:text-xl font-semibold tracking-wide">
            <TypeAnimation
              sequence={[
                "Software Developer",
                2000,
                "Machine Learning Explorer",
                2000,
                "AI Concepts Enthusiast",
                2000
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
            Turning algorithmic ideas into functional, clean applications. Focused on 
            Python programming, Web Development architectures, and Data Science models.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 mt-8 w-full sm:w-auto">
            <button
              onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 text-white font-medium hover:from-indigo-600 hover:to-purple-700 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 cursor-pointer active:scale-95"
            >
              View Projects
              <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3.5 rounded-xl border border-gray-300 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 cursor-pointer active:scale-95"
            >
              Hire Me
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 sm:gap-8 mt-12 w-full pt-8 border-t border-gray-200/60 dark:border-white/5">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold bg-linear-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 mt-1">
                  {stat.label}
                </span>
                <span className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN - VISUAL CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-5 flex flex-col items-center justify-center relative"
        >
          {/* Rotating linear background border around the card */}
          <div className="relative p-1 rounded-3xl overflow-hidden bg-linear-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-2xl w-full max-w-[320px] mb-6">
            <div className="bg-white dark:bg-[#0b111e] rounded-[22px] p-8 flex flex-col items-center border border-white/5">
              
              {/* Concentric circles around circular photo */}
              <div className="relative w-56 h-56 flex items-center justify-center">
                {/* Ring 3 (outermost) */}
                <div className="absolute w-52 h-52 rounded-full border border-indigo-500/10 dark:border-indigo-500/5 bg-indigo-500/5 dark:bg-indigo-500/3 blur-xs" />
                {/* Ring 2 */}
                <div className="absolute w-44 h-44 rounded-full border border-indigo-500/20 dark:border-indigo-500/10 bg-indigo-500/8 dark:bg-indigo-500/5" />
                {/* Ring 1 */}
                <div className="absolute w-36 h-36 rounded-full border border-indigo-500/30 dark:border-indigo-500/15 bg-indigo-500/15 dark:bg-indigo-500/8" />
                
                {/* Photo container */}
                <div className="relative w-30 h-30 rounded-full overflow-hidden border-2 border-indigo-500/40 shadow-lg">
                  <img
                    src="/dev.png"
                    alt="Dev Vasanka"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name Details */}
              <h2 className="text-2xl font-extrabold mt-4 text-gray-900 dark:text-white text-center">
                Dev Vasanka
              </h2>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 text-center mt-1">
                Problem Solver & Developer
              </p>

              {/* Location Detail */}
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 dark:text-gray-450 mt-4 bg-gray-50 dark:bg-white/5 border border-gray-150 dark:border-white/5 px-4 py-2 rounded-full shadow-sm">
                <FaUniversity className="text-indigo-500" size={14} />
                <span>IITRAM, Ahmedabad</span>
              </div>

              {/* Badges / Pill Buttons */}
              <div className="flex justify-center gap-2 mt-6 w-full">
                <span className="px-3.5 py-1.5 rounded-full border border-indigo-500/20 dark:border-indigo-500/30 bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 text-[10px] sm:text-xs font-semibold tracking-wide">
                  Python Developer
                </span>
                <span className="px-3.5 py-1.5 rounded-full border border-purple-500/20 dark:border-purple-500/30 bg-purple-500/5 text-purple-600 dark:text-purple-400 text-[10px] sm:text-xs font-semibold tracking-wide">
                  Web Developer
                </span>
              </div>
            </div>
          </div>

          {/* Square glassmorphic tech icon row outside the card */}
          <div className="flex justify-center gap-3 w-full max-w-[320px] px-2">
            {[
              { icon: <FaPython size={18} />, title: "Python" },
              { icon: <FaJs size={18} />, title: "JavaScript" },
              { icon: <FaHtml5 size={18} />, title: "HTML5" },
              { icon: <FaGitAlt size={18} />, title: "Git" },
              { icon: <FaBrain size={18} />, title: "Machine Learning" }
            ].map((tech, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-white/70 dark:bg-[#0b111e]/80 border border-gray-250 dark:border-white/5 text-gray-700 dark:text-gray-300 shadow-md hover:scale-115 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-300 cursor-help"
                title={tech.title}
              >
                {tech.icon}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;