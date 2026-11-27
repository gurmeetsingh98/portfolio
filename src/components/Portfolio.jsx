import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import ScrollTopButton from "./ScrollTopButton.jsx";

const Portfolio = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <Footer />
    <ScrollTopButton />
  </>
);

export default Portfolio;
