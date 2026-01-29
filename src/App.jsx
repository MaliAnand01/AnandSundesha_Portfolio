import { Suspense, lazy, useState, useEffect } from "react";
import StarryBackground from "./components/background/StarryBackground";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import Footer from "./components/layout/Footer";
import SmoothScroll from "./components/ui/SmoothScroll";
import Preloader from "./components/ui/Preloader";

// Lazy load below-the-fold sections
const About = lazy(() => import("./components/sections/About"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Services = lazy(() => import("./components/sections/Services"));
const Contact = lazy(() => import("./components/sections/Contact"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("Nest");

  const sectionMap = {
    Nest: "home",
    Story: "about",
    Forge: "projects",
    Lab: "services",
    Signal: "contact",
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300; // Offset for trigger point

      // We want to find the current section based on scroll position
      let currentSection = "Nest"; // Default

      for (const [key, id] of Object.entries(sectionMap)) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = key;
          }
        }
      }
      setActiveSection(currentSection);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    // Initial check
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (item) => {
    const sectionId = sectionMap[item];
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SmoothScroll>
      <div className="bg-black text-white">
        <StarryBackground />
        <Preloader onComplete={() => setIsLoading(false)} />
        <Navbar scrollToSection={scrollToSection} activeSection={activeSection} isLoaded={!isLoading} />
        <Hero scrollToSection={scrollToSection} isLoaded={!isLoading} />
        
        <Suspense fallback={<LoadingFallback />}>
          <About />
          <Projects />
          <Services />
          <Contact />
        </Suspense>

        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;
