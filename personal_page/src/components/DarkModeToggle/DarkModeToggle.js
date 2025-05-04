import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import styles from './DarkModeToggle.module.css';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <motion.button
      className={styles.toggleButton}
      onClick={() => setDarkMode(!darkMode)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        className={styles.iconContainer}
        initial={{ rotate: 0 }}
        animate={{ rotate: darkMode ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? (
          <FaMoon className={styles.icon} />
        ) : (
          <FaSun className={styles.icon} />
        )}
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggle;