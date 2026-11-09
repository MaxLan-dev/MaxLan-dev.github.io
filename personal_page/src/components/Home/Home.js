import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaMapMarkerAlt, FaFileAlt } from 'react-icons/fa';
import { profile } from '../../data/profile';
import { projects } from '../../data/projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './Home.module.css';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

const RotatingLine = ({ lines }) => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % lines.length), 3200);
    return () => clearInterval(id);
  }, [lines.length]);

  return (
    <div className={styles.terminal} aria-live="polite">
      <span className={styles.prompt}>$</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3 }}
        >
          {lines[i]}
        </motion.span>
      </AnimatePresence>
      <span className={styles.caret} />
    </div>
  );
};

const Home = () => {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="page">
      {/* Hero */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroText}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">{profile.tagline}</span>
          <h1 className={styles.name}>
            Hi, I'm <span className="gradient-text">Maksym Lan</span>.
          </h1>
          <p className={styles.headline}>{profile.headline}</p>
          <RotatingLine lines={profile.rotatingLines} />

          <div className={styles.ctas}>
            <Link to="/projects" className="btn btn-primary">
              See my work <FaArrowRight />
            </Link>
            <Link to="/resume" className="btn btn-ghost">
              <FaFileAlt /> Resume
            </Link>
          </div>

          <div className={styles.socials}>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={`mailto:${profile.email}`} className="icon-link" aria-label="Email">
              <FaEnvelope />
            </a>
            <span className={styles.location}>
              <FaMapMarkerAlt /> {profile.location}
            </span>
          </div>
        </motion.div>

        <motion.div
          className={styles.heroSide}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className={styles.photoWrap}>
            <img
              src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
              alt="Maksym Lan"
              className={styles.photo}
            />
          </div>
          <div className={`card ${styles.nowCard}`}>
            <span className={styles.nowLabel}>
              <span className={styles.pulse} /> Currently
            </span>
            <ul className={styles.nowList}>
              {profile.currently.map((c) => (
                <li key={c.org}>
                  <span className={styles.nowRole}>{c.role}</span>
                  <span className={styles.nowOrg}>@ {c.org}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <motion.section className={styles.stats} {...fadeUp}>
        {profile.stats.map((s) => (
          <div key={s.label} className={`card ${styles.stat}`}>
            <span className={`${styles.statValue} gradient-text`}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </motion.section>

      {/* About */}
      <motion.section className={styles.section} {...fadeUp}>
        <div className={styles.sectionHead}>
          <span className="eyebrow">About</span>
          <h2 className={styles.sectionTitle}>A bit about me</h2>
        </div>
        <div className={styles.about}>
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </motion.section>

      {/* Featured work */}
      <motion.section className={styles.section} {...fadeUp}>
        <div className={styles.sectionHeadRow}>
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 className={styles.sectionTitle}>Things I've built recently</h2>
          </div>
          <Link to="/projects" className={styles.moreLink}>
            All projects <FaArrowRight />
          </Link>
        </div>
        <div className={styles.projectGrid}>
          {featured.map((p) => (
            <ProjectCard key={p.title} project={p} compact />
          ))}
        </div>
      </motion.section>

      {/* What I build */}
      <motion.section className={styles.section} {...fadeUp}>
        <div className={styles.sectionHead}>
          <span className="eyebrow">What I build</span>
          <h2 className={styles.sectionTitle}>Where I spend my time</h2>
        </div>
        <div className={styles.focusGrid}>
          {profile.focusAreas.map((f, i) => (
            <div key={f.title} className={`card card-hover ${styles.focus}`}>
              <span className={styles.focusIndex}>0{i + 1}</span>
              <h3 className={styles.focusTitle}>{f.title}</h3>
              <p className={styles.focusBlurb}>{f.blurb}</p>
              <div className={styles.chips}>
                {f.stack.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
              <p className={styles.shipped}>
                <span>Shipped in</span> {f.shippedIn}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section className={styles.section} {...fadeUp}>
        <div className={styles.sectionHead}>
          <span className="eyebrow">Toolbox</span>
          <h2 className={styles.sectionTitle}>Tech I work with</h2>
        </div>
        <div className={`card ${styles.skills}`}>
          {Object.entries(profile.skills).map(([group, items]) => (
            <div key={group} className={styles.skillRow}>
              <h3 className={styles.skillGroup}>{group}</h3>
              <div className={styles.chips}>
                {items.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section className={`card ${styles.contact}`} {...fadeUp}>
        <div>
          <h2 className={styles.contactTitle}>Let's talk</h2>
          <p className={styles.contactText}>
            Happy to talk AI, startups, astrophysics, or how to fit four years into two and a half.
          </p>
        </div>
        <div className={styles.contactActions}>
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            <FaEnvelope /> {profile.email}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
