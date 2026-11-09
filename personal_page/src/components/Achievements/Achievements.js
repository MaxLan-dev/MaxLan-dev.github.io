import React from 'react';
import { motion } from 'framer-motion';
import { achievementGroups } from '../../data/achievements';
import styles from './Achievements.module.css';

const Achievements = () => (
  <section className="page">
    <header className="page-header">
      <span className="eyebrow">Recognition</span>
      <h1 className="page-title">Achievements</h1>
      <p className="page-lede">Hackathon wins, academic honours and the science fairs where it all started.</p>
    </header>

    {achievementGroups.map((group) => (
      <div key={group.title} className={styles.group}>
        <h2 className={styles.groupTitle}>{group.title}</h2>
        <ul className={styles.grid}>
          {group.items.map((a, i) => (
            <motion.li
              key={`${a.title}-${a.meta}`}
              className={`card card-hover ${styles.item}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.2) }}
            >
              <span className={styles.icon} aria-hidden="true">{a.icon}</span>
              <div>
                <h3 className={styles.title}>{a.title}</h3>
                <p className={styles.meta}>{a.meta}</p>
                {a.description && <p className={styles.description}>{a.description}</p>}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

export default Achievements;
