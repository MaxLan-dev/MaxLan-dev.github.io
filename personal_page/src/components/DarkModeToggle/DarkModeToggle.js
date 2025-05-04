import React from 'react';
import styles from './DarkModeToggle.module.css';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div className={styles.switchContainer}>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;