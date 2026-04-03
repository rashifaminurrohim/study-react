import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import TechStack from "./components/sections/TechStack";

export default function App() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Container>
        <Hero />
      </Container>

      <Container>
        <About />
      </Container>

      <Container>
        <Skills />
      </Container>

      <Container>
        <TechStack />
      </Container>

      <Container>
        <Projects />
      </Container>

      <Container>
        <Contact />
      </Container>

      <Footer />
    </main>
  );
}
