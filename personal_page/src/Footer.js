import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><Link to="/description">Description</Link></li>
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
  );
};

export default Footer;
