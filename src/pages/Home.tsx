import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import CursorTrail from "@/components/CursorTrail";

export default function Home() {
  return (
    <div className="min-h-screen">
      <CursorTrail />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
