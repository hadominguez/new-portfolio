import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css'

function App() {
  return (
    <>
      <Router>
        <Navbar className='grid-nav'/>
        <div className='grid-body'>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
