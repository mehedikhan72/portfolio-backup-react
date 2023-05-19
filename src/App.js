import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/About";
import './index.css';
import 'boxicons/css/boxicons.min.css';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-[#323437] text-[#D1D0C5] min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
