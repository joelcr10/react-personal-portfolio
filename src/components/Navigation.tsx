import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-lg font-semibold hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors"
          data-testid="link-home"
        >
          JCR
        </button>

        <div className="flex items-center gap-6">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors"
            data-testid="link-about"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-sm font-medium hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors"
            data-testid="link-skills"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm font-medium hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors"
            data-testid="link-projects"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("certifications")}
            className="text-sm font-medium hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors"
            data-testid="link-certifications"
          >
            Certifications
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-sm font-medium hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors"
            data-testid="link-experience"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className="text-sm font-medium hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors"
            data-testid="link-education"
          >
            Education
          </button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
