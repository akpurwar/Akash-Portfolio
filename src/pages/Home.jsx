import Hero from "../components/sections/Hero/Hero";
import About from "../components/sections/About/About";
import Experience from "../components/sections/Experience/Experience";
import Projects from "../components/sections/Projects/Projects";
import Skills from "../components/sections/Skills/Skills";
import Education from "../components/sections/Education/Education";
import Contact from "../components/sections/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}
