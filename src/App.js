import About from "./components/About";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ScrollToTop from "./components/ScrollToTop";
import MeshBackground from "./components/MeshBackground";

const App = () => {
  return (
    <>
      <div className="relative text-gray-800 dark:text-white min-h-screen overflow-x-hidden">
        <MeshBackground />
        <Header />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Certificates />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
};

export default App;