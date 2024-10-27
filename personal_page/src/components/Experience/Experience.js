import React, { useState } from 'react';
import styles from './Experience.css';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const experiences = [
  {
    title: 'AI Software Developer Intern',
    company: 'ResilientAG',
    period: 'August 2024 - Present',
    description: 'Winnipeg, Manitoba, Canada • Hybrid • Developing AI software solutions, working on website development, and contributing to product development. Skills: Python, Machine Learning, Web Development, AI Algorithms, Team Collaboration.',
  },
  {
    title: 'Vice President',
    company: 'University of Manitoba Artificial Intelligence · Self-employed',
    period: 'May 2024 - Present',
    description: 'Winnipeg, Manitoba, Canada · On-site Skills: Organizational Leadership · Machine Learning · Python (Programming Language) · Artificial Intelligence (AI) · Event Planning',
  },
  {
    title: 'Co Founder/Vice President',
    company: 'University of Manitoba Programming Projects Club · Permanent Full-time',
    period: 'Nov 2023 - Present',
    description: 'Winnipeg, Manitoba, Canada · On-site Skills: Organizational Leadership · Project Management · Problem Solving · Executive Management · Node.js · Team Leadership · Programming · LaTeX · Software Development · Event Planning',
  },
  {
    title: 'Scientific Researcher',
    company: 'Junior Academy of Sciences',
    period: 'Sep 2017 - Feb 2022',
    description: 'Lviv, Ukraine · On-site Authored research papers in astrophysics under the guidance and supervision of esteemed university professors. Skills: Research · C++ · Astrophysics · Astronomy · Computer Science · LaTeX · Public Speaking',
  },
  {
    title: 'Chief Executive Officer/ Software developer',
    company: 'Prowir · Self-employed',
    period: 'Apr 2020 - Jan 2021',
    description: 'Lviv, Ukraine · On-site Skills: Communication · Analytical Skills · Problem Solving · Leadership · Node.js · Web Development · LaTeX · React.js · Software Development · Event Planning',
  },
  {
    title: 'Chief Executive Officer',
    company: 'SorbMax · Self-employed',
    period: 'Jan 2019 - Jan 2020',
    description: 'Lviv, Ukraine · On-site Founder, CEO, and company representative of Startup SorbMax, the startup that produces a new type of biodegradable filters for industries. Skills: Project Management · Analytical Skills · Methods Engineering · Team Leadership · CEO · LaTeX · Event Planning · Public Speaking',
  },
];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className={styles.experienceContainer}>
      <h2 className={styles.sectionTitle}>My Professional Journey</h2>
      <div className={styles.timeline}>
        {experiences.map((experience, index) => (
          <div key={index} className={`${styles.experienceBox} ${expandedIndex === index ? styles.expanded : ''}`}>
            <div className={styles.experienceHeader} onClick={() => toggleExpand(index)}>
              <h3 className={styles.experienceTitle}>{experience.title}</h3>
              <p className={styles.experienceCompany}>
                <FaBriefcase className={styles.icon} /> {experience.company}
              </p>
              <p className={styles.experiencePeriod}>
                <FaCalendar className={styles.icon} /> {experience.period}
              </p>
            </div>
            <div className={styles.experienceDetails}>
              <p className={styles.experienceLocation}>
                <FaMapMarkerAlt className={styles.icon} /> {experience.description.split('·')[0]}
              </p>
              <p className={styles.experienceDescription}>{experience.description.split('·')[1]}</p>
              <div className={styles.skillsTags}>
                {experience.description.split('Skills:')[1].split('·').map((skill, skillIndex) => (
                  <span key={skillIndex} className={styles.skillTag}>{skill.trim()}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;