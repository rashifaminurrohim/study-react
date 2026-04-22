import Container from "./components/layout/Container";
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
      <section id="hero">
        <Container>
          <div className="min-h-[calc(100vh-var(--nav-h))] flex flex-col">
            <HeroEnvelope />
          </div>
        </Container>
      </section>

      <section id="about">
        <Container>
          <About />
        </Container>
      </section>

      <section id="skills">
        <Container>
          <Skills />
        </Container>
      </section>

      <section id="techstack">
        <Container>
          <TechStack />
        </Container>
      </section>

      <section id="projects">
        <Container>
          <Projects />
        </Container>
      </section>

      <section id="contact">
        <Container>
          <Contact />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
