import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Section from "./components/layout/Section";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

export default function App() {
  return (
    <main className="bg-zinc-100 min-h-screen">
      <Navbar />
      <Section>
        <Container>
          <Hero />
        </Container>
      </Section>
      <Section>
        <Container>
          <About />
        </Container>
      </Section>
      <Section>
        <Container>
          <Skills />
        </Container>
      </Section>
      <Section>
        <Container>
          <Projects />
        </Container>
      </Section>
      <Section>
        <Container>
          <Contact />
        </Container>
      </Section>
    </main>
  );
}
