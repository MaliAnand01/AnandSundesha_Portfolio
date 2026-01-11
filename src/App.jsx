import StarryBackground from "./components/background/StarryBackground";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

const App = () => {
  const sectionMap = {
    Nest: "home",
    Story: "about",
    Forge: "projects",
    Lab: "services",
    Signal: "contact",
  };

  const scrollToSection = (item) => {
    const sectionId = sectionMap[item];
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white">
      <StarryBackground />
      <Navbar scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
