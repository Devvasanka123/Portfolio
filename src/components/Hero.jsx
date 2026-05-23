import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="home"
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      pt-20
      "
    >

      <div
      className="
      max-w-7xl
      mx-auto
      grid
      md:grid-cols-2
      gap-12
      items-center
      "
      >

        {/* LEFT SIDE */}

        <motion.div
        initial={{opacity:0,x:-80}}
        animate={{opacity:1,x:0}}
        transition={{duration:1}}
        >

          <p className="text-blue-400 font-semibold mb-4">
            Hello 👋 I'm
          </p>

          <h1
          className="
          text-5xl
          md:text-7xl
          font-bold
          bg-linear-to-r
          from-blue-400
          to-purple-500
          text-transparent
          bg-clip-text
          "
          >
            Dev Vasanka
          </h1>

          <div className="mt-6">

            <TypeAnimation
              sequence={[
                "Software Developer",
                1500,
                "ML Learner",
                1500,
                "AI Explorer",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-2xl text-blue-300"
            />

          </div>

          <p
          className="
          text-gray-400
          mt-6
          leading-8
          "
          >
            Computer Engineering student at IITRAM
            building real-world projects and
            currently exploring Machine Learning
            and AI.
          </p>

          <div className="mt-8">

            <button
            className="
            px-8
            py-3
            rounded-xl
            bg-linear-to-r
            from-blue-500
            to-purple-600
            hover:scale-105
            duration-300
            font-semibold
            "
            onClick={() =>
            document
            .getElementById("projects")
            .scrollIntoView({
            behavior:"smooth"
            })
            }
            >

            View My Work →

            </button>

            </div>

        </motion.div>


        {/* RIGHT SIDE */}

        <motion.div
        initial={{opacity:0,x:80}}
        animate={{opacity:1,x:0}}
        transition={{duration:1}}
        className="
        flex
        justify-center
        relative
        "
        >

          <div
          className="
          absolute
          w-80
          h-80
          rounded-full
          bg-blue-500/30
          blur-3xl
          "
          />

          <motion.img

          animate={{
            y:[0,-20,0]
          }}

          transition={{
            duration:4,
            repeat:Infinity
          }}

          src="/dev.png"

          alt="Dev"

          className="
          w-72
          h-72
          md:w-96
          md:h-96
          rounded-full
          object-cover
          border-4
          border-white/20
          shadow-2xl
          relative
          z-10
          "

          />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;