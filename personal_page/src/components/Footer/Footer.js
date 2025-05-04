import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Maksym Lan</h3>
          <p className={styles.footerBottom}>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/MaxLan-dev"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/maksym-lan/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:lanmaksym@gmail.com"
            className={styles.socialLink}
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;