import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import styles from './Header.module.css';

const Header = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>Maksym Lan</Link>
        <div className={styles.navRight}>
          <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
            <li>
              <Link to="/" className={styles.navLink}>Home</Link>
            </li>
            <li>
              <Link to="/experience" className={styles.navLink}>Experience</Link>
            </li>
            <li>
              <Link to="/projects" className={styles.navLink}>Projects</Link>
            </li>
            <li>
              <Link to="/education" className={styles.navLink}>Education</Link>
            </li>
            <li>
              <Link to="/achievements" className={styles.navLink}>Achievements</Link>
            </li>
            <li>
              <Link to="/resume" className={styles.navLink}>Resume</Link>
            </li>
          </ul>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <button className={styles.mobileMenuButton} onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;