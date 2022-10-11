import About from "./components/about";
import Contact from "./components/contact";
import Education from "./components/education";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Skills from "./components/skills";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Contact />

    </div>
  );
}

export default App;
