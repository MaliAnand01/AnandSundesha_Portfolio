const useScrollToSection = () => {
  return (section) => {
    const el = document.getElementById(section.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
};

export default useScrollToSection;
