import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories } from '../../data/projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const counts = useMemo(() => {
    const c = { all: projects.length, featured: projects.filter((p) => p.featured).length };
    projectCategories.forEach(({ id }) => {
      if (!(id in c)) c[id] = projects.filter((p) => p.categories.includes(id)).length;
    });
    return c;
  }, []);

  const visible = projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'featured') return p.featured;
    return p.categories.includes(filter);
  });

  return (
    <section className="page">
      <header className="page-header">
        <span className="eyebrow">Projects</span>
        <h1 className="page-title">Things I've built</h1>
        <p className="page-lede">
          Products, AI tools, hackathon builds and the astrophysics research that got me into programming.
        </p>
      </header>

      <div className={styles.filters} role="tablist" aria-label="Filter projects">
        {projectCategories.map(({ id, label }) => (
          <button
            key={id}
            role="tab"
            aria-selected={filter === id}
            className={`${styles.filter} ${filter === id ? styles.filterActive : ''}`}
            onClick={() => setFilter(id)}
          >
            {label}
            <span className={styles.count}>{counts[id]}</span>
          </button>
        ))}
      </div>

      <motion.div layout className={styles.grid}>
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
