import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Description from './components/Description';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Experience from './components/Experience';
import Achievements from './components/Achievements';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Description />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/achievements" element={<Achievements />} />
    </Routes>
  </Router>
);

export default App;
