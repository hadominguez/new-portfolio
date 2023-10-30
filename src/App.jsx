import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Tetris from './components/Projects/Tetris/Tetris';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router className='stars'>
        <Navbar className='grid-nav'/>
        <div>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/tetris" element={<Tetris />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
