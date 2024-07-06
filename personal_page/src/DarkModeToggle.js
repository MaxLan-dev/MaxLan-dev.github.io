import React, { useState, useEffect } from 'react';
import './theme.css';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="switch-container">
      <button onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default DarkModeToggle;
