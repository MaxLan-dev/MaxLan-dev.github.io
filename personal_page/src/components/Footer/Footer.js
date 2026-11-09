import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { profile } from '../../data/profile';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <div>
        <p className={styles.name}>Maksym Lan</p>
        <p className={styles.small}>
          © {new Date().getFullYear()} · Built with React in {profile.location}
        </p>
      </div>
      <div className={styles.links}>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href={`mailto:${profile.email}`} className="icon-link" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
