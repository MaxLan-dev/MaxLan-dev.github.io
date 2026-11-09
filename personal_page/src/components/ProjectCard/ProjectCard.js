import React from 'react';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, compact = false }) => {
  const { title, year, status, description, stack, demo, code } = project;
  const primary = demo || code;

  return (
    <article className={`card card-hover ${styles.card}`}>
      <div className={styles.top}>
        <span className={styles.year}>{year}</span>
        {status && <span className="badge">{status}</span>}
      </div>
      <h3 className={styles.title}>
        {primary ? (
          <a href={primary} target="_blank" rel="noopener noreferrer" className={styles.titleLink}>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <p className={`${styles.description} ${compact ? styles.clamp : ''}`}>{description}</p>
      <div className={styles.stack}>
        {stack.slice(0, compact ? 4 : stack.length).map((s) => (
          <span key={s} className="chip">{s}</span>
        ))}
      </div>
      {(demo || code) && (
        <div className={styles.links}>
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Visit site <FaArrowRight className={styles.arrow} />
            </a>
          )}
          {code && (
            <a href={code} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <FaGithub /> Code
            </a>
          )}
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
