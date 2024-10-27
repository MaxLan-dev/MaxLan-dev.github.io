import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Site Map</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Home</Link></li>
              <li><Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Projects</Link></li>
              <li><Link to="/resume" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Resume</Link></li>
              <li><Link to="/experience" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Experience</Link></li>
              <li><Link to="/achievements" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">Achievements</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/MaxLan-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/maksym-lan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:lanmaksym@gmail.com" aria-label="Email" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">About Me</h3>
            <p className="text-gray-600 dark:text-gray-400">Computer Science student at the University of Manitoba, passionate about AI, ML, and innovative technology solutions.</p>
          </div>
        </div>
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} Maksym Lan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;