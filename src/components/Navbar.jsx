import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, useScroll } from "framer-motion";

function Navbar() {

  const [menuOpen,setMenuOpen]=useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <nav
      className="
      fixed
      top-0
      w-full
      z-50
      backdrop-blur-md
      bg-black/20
      border-b
      border-white/10
      "
    >

      <div
      className="
      max-w-7xl
      mx-auto
      px-6
      py-4
      flex
      justify-between
      items-center
      "
      >

        <h1
        className="
        text-2xl
        font-bold
        bg-linear-to-r
        from-blue-400
        to-purple-500
        text-transparent
        bg-clip-text
        "
        >
          Dev
        </h1>

        <div className="hidden md:flex gap-8">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

        <button
        className="md:hidden text-2xl"
        onClick={()=>setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes/> : <FaBars/>}
        </button>

      </div>

      {menuOpen && (

        <div
        className="
        md:hidden
        flex
        flex-col
        items-center
        gap-4
        pb-4
        "
        >

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

      )}
    <motion.div
  className="
  h-3px
  bg-linear-to-r
  from-blue-500
  to-purple-500
  origin-left
  "
  style={{
    scaleX: scrollYProgress
  }}
/>
    </nav>
  );
}

export default Navbar;