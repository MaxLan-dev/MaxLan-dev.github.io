import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ darkMode }) => {
  return (
    <header className={`bg-white ${darkMode ? 'dark:bg-gray-800' : ''} shadow-md`}>
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">Home</Link></li>
          <li><Link to="/projects" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">Projects</Link></li>
          <li><Link to="/experience" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">Experience</Link></li>
          <li><Link to="/achievements" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">Achievements</Link></li>
          <li><Link to="/resume" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">Resume</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;