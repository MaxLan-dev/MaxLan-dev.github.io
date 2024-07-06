import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Description from './components/Description';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import DarkModeToggle from './DarkModeToggle';
import './theme.css';

const App = () => (
  <Router>
    <nav className="container-fluid">
      <ul>
        <li><strong>My Portfolio</strong></li>
      </ul>
      <ul>
        <li><Link to="/">Description</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/achievements">Achievements</Link></li>
        <li><DarkModeToggle /></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Description />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/achievements" element={<Achievements />} />
    </Routes>
    <footer className="footer">
      <ul>
        <li><Link to="/">Description</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/achievements">Achievements</Link></li>
      </ul>
      <small>
        <a href="https://github.com/MaxLan-dev" target="_blank" rel="noopener noreferrer">GitHub</a> • 
        <a href="https://www.linkedin.com/in/maksym-lan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </small>
    </footer>
  </Router>
);

export default App;
