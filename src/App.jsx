import { Suspense, lazy, useState, useEffect } from "react";
import StarryBackground from "./components/background/StarryBackground";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import Footer from "./components/layout/Footer";
import SmoothScroll from "./components/ui/SmoothScroll";
import Preloader from "./components/ui/Preloader";
import ScrollToTop from "./components/ui/ScrollToTop";

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
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when section crosses the middle 20% of screen
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const activeKey = Object.keys(sectionMap).find(
            (key) => sectionMap[key] === sectionId
          );
          if (activeKey) {
            setActiveSection(activeKey);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Function to attempt observation
    const observeSections = () => {
      let allFound = true;
      Object.values(sectionMap).forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        } else {
          allFound = false; // Keep retrying if any section (e.g., lazy loaded) is missing
        }
      });
      return allFound;
    };

    // Initial attempt
    observeSections();

    // Retry checking for lazy-loaded sections
    const intervalId = setInterval(() => {
      const done = observeSections();
      if (done) clearInterval(intervalId);
    }, 500);

    // Timeout to stop checking after 10 seconds to avoid infinite loop
    const timeoutId = setTimeout(() => clearInterval(intervalId), 10000);

    return () => {
      observer.disconnect();
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
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
        <ScrollToTop />
      </div>
    </SmoothScroll>
  );
};

export default App;
