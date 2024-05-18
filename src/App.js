import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Certifications from './Components/Certifications';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Education />
      <Certifications />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
