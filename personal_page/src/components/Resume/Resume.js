// src/components/Resume/Resume.js
import React, { useState } from 'react';
import { FaDownload, FaExpand, FaCompress } from 'react-icons/fa';
import styles from './Resume.module.css';

const Resume = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className={styles.resumeContainer}>
      <div className={styles.resumeHeader}>
        <h2 className={styles.resumeTitle}>My Resume</h2>
        <div className={styles.resumeActions}>
          <a 
            href="/resume.pdf" 
            download 
            className={styles.actionButton}
            title="Download Resume"
          >
            <FaDownload /> Download PDF
          </a>
          <button 
            onClick={toggleFullScreen} 
            className={styles.actionButton}
            title={isFullScreen ? "Exit Full Screen" : "Full Screen"}
          >
            {isFullScreen ? <FaCompress /> : <FaExpand />}
          </button>
        </div>
      </div>
      <div className={`${styles.resumeWrapper} ${isFullScreen ? styles.fullScreen : ''}`}>
        <iframe 
          src="/resume.pdf"
          className={styles.resumeFrame}
          title="Resume"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;