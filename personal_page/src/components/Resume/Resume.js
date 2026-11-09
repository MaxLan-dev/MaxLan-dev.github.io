import React, { useState } from 'react';
import { FaDownload, FaExpand, FaCompress, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './Resume.module.css';

const RESUME_URL = `${process.env.PUBLIC_URL}/resume.pdf`;

const Resume = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <section className="page">
      <header className={`page-header ${styles.header}`}>
        <div>
          <span className="eyebrow">Resume</span>
          <h1 className="page-title">My resume</h1>
          <p className="page-lede">The one-page version of everything on this site.</p>
        </div>
        <div className={styles.actions}>
          <a href={RESUME_URL} download="Maksym_Lan_Resume.pdf" className="btn btn-primary">
            <FaDownload /> Download PDF
          </a>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <FaExternalLinkAlt /> Open
          </a>
          <button
            onClick={() => setIsFullScreen((f) => !f)}
            className={`btn btn-ghost ${styles.expand}`}
            aria-label={isFullScreen ? 'Exit full screen' : 'Full screen'}
          >
            {isFullScreen ? <FaCompress /> : <FaExpand />}
          </button>
        </div>
      </header>
      <div className={`card ${styles.frameWrap} ${isFullScreen ? styles.fullScreen : ''}`}>
        {isFullScreen && (
          <button className={`btn btn-ghost ${styles.close}`} onClick={() => setIsFullScreen(false)}>
            <FaCompress /> Exit
          </button>
        )}
        <iframe src={RESUME_URL} className={styles.frame} title="Maksym Lan resume" />
      </div>
    </section>
  );
};

export default Resume;
