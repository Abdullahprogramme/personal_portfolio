import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
// import Skills from './Components/Skills';
// import Work from './Components/Work';
// import Contact from './Components/Contact/Contact';
// import Education from './Components/Education';
// import Certifications from './Components/Certifications';
// import LanguagesAndInterests from './Components/LanguagesAndInterests';
// import Experience from './Components/Experience';
// import Progress from './Components/Progress';
// import Footer from './Components/Footer';
import Lottie from './Components/Lottie/lottie';


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Lottie />
      <About />
      {/* <LanguagesAndInterests />
      <Progress />
      <Education />
      <Experience />
      <Certifications />
      <Skills />
      <Work />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;

