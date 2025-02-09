import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Feedback from "./components/Feedback";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-gray-100 m-0 p-0">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Feedback />
      <Contact />
    </div>
  );
}

export default App;
