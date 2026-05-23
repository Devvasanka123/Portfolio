import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 pt-24"
    >
      <motion.div
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        className="
        max-w-6xl
        mx-auto
        bg-white/5
        backdrop-blur-lg
        border border-white/10
        rounded-3xl
        p-10
        "
      >
        <h2 className="text-4xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-gray-300 leading-8">

          I am Dev Vasanka, a B.Tech Computer Engineering
          student at IITRAM with a CGPA of 8.65.
          I enjoy building practical projects and learning
          technologies that solve real-world problems.

          Currently I am exploring Machine Learning,
          AI concepts and software development while
          continuously improving my problem-solving skills.

        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-black/20 p-6 rounded-xl">
            <h3 className="text-blue-400 text-2xl font-bold">
              8.65
            </h3>

            <p>CGPA</p>
          </div>

          <div className="bg-black/20 p-6 rounded-xl">
            <h3 className="text-blue-400 text-2xl font-bold">
              97.73%
            </h3>

            <p>JEE Percentile</p>
          </div>

          <div className="bg-black/20 p-6 rounded-xl">
            <h3 className="text-blue-400 text-2xl font-bold">
              3+
            </h3>

            <p>Projects Built</p>
          </div>

        </div>

      </motion.div>
    </section>
  );
}

export default About;