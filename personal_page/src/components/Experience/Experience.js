import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { experiences } from '../../data/experience';
import styles from './Experience.module.css';

const Bullets = ({ items }) => (
  <ul className={styles.bullets}>
    {items.map((b, i) => (
      <li key={i}>{b}</li>
    ))}
  </ul>
);

const Experience = () => (
  <section className="page">
    <header className="page-header">
      <span className="eyebrow">Experience</span>
      <h1 className="page-title">Where I've worked</h1>
      <p className="page-lede">
        From startups in Lviv to enterprise platforms at CGI, plus a few things I run on the side.
      </p>
    </header>

    <ol className={styles.timeline}>
      {experiences.map((exp, index) => (
        <motion.li
          key={`${exp.company}-${exp.title}`}
          className={styles.item}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.15) }}
        >
          <span className={`${styles.dot} ${exp.current ? styles.dotCurrent : ''}`} aria-hidden="true" />
          <div className={styles.when}>
            <span className={styles.period}>{exp.period}</span>
            {exp.current && <span className="badge">Current</span>}
          </div>

          <article className={`card ${styles.card}`}>
            <header className={styles.head}>
              <div>
                <h2 className={styles.title}>{exp.title}</h2>
                <p className={styles.company}>
                  {exp.link ? (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer">
                      {exp.company} <FaExternalLinkAlt className={styles.ext} />
                    </a>
                  ) : (
                    exp.company
                  )}
                </p>
              </div>
              <span className={styles.location}>
                <FaMapMarkerAlt /> {exp.location}
              </span>
            </header>

            {exp.summary && <p className={styles.summary}>{exp.summary}</p>}
            {exp.bullets && <Bullets items={exp.bullets} />}

            {exp.roles && (
              <div className={styles.roles}>
                {exp.roles.map((r) => (
                  <div key={r.title} className={styles.role}>
                    <div className={styles.roleHead}>
                      <h3 className={styles.roleTitle}>{r.title}</h3>
                      <span className={styles.rolePeriod}>{r.period}</span>
                    </div>
                    <Bullets items={r.bullets} />
                  </div>
                ))}
              </div>
            )}

            <div className={styles.skills}>
              {exp.skills.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </article>
        </motion.li>
      ))}
    </ol>
  </section>
);

export default Experience;
