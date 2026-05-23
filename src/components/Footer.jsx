import { FaGithub, FaLinkedin,} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="
      px-6
      py-10
      border-t
      border-white/10
      mt-10
      "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-5
        "
      >

        <div>
          <h3 className="font-bold text-xl">
            Dev Vasanka
          </h3>

          <p className="text-gray-400">
            Building AI & Web Solutions
          </p>
        </div>

        <div className="flex gap-6 text-2xl">

          <a
          href="https://github.com/Devvasanka123"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 duration-300"
          >
            <FaGithub/>
          </a>

          <a
          href="https://linkedin.com/in/dev-vasanka-bb6520369"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 duration-300"
          >
            <FaLinkedin/>
          </a>

        </div>

        <p
        className="
        text-gray-400
        flex
        items-center
        gap-2
        "
        >
          Made by Dev Vasanka
        </p>

      </div>
    </footer>
  );
}

export default Footer;