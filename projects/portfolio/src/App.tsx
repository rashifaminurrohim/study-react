import Footer from "./components/layout/Footer";
import NavbarEnvelope from "./components/layout/NavbarEnvelope";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import HeroEnvelope from "./components/sections/HeroEnvelope";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import TechStack from "./components/sections/TechStack";

export default function App() {
  return (
    <main className="bg-primary min-h-screen mx-1">
      <NavbarEnvelope />
      <section id="home">
        <div className="min-h-[calc(100vh-var(--nav-h))] flex flex-col">
          <HeroEnvelope />
        </div>
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="techstack">
        <TechStack />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
