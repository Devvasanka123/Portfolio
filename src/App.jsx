import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import MLJourney from "./components/MLJourney";
import Loader from "./components/Loader";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
      <Loader />

      <div className="relative overflow-hidden">

        <div
          className="
          fixed
          top--200px
          left--100px
          w-400px
          h-400px
          rounded-full
          bg-blue-500/20
          blur-3xl
          "
        />

        <div
          className="
          fixed
          bottom--200px
          right--100px
          w-400px
          h-400px
          rounded-full
          bg-purple-500/20
          blur-3xl
          "
        />

        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <MLJourney />
        <Contact />
        <Footer />
        <ThemeToggle/>
      </div>
    </>
  );
}

export default App;