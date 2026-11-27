import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Education from "./Education.jsx";
import Achievements from "./Achievements.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import ScrollTopButton from "./ScrollTopButton.jsx";
import ChatBot from "./ChatBot.jsx";

const Portfolio = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
    </main>
    <Footer />
    <ScrollTopButton />
    <ChatBot />
  </>
);

export default Portfolio;
