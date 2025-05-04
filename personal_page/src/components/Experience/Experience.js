import React from 'react';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Experience.module.css';

const experiences = [
  {
    title: 'Summer Student Technician',
    company: 'University of Manitoba',
    location: 'Winnipeg, MB, Canada',
    period: 'May 2025 – Aug 2025',
    description: 'Developed a Computer Vision model to detect and separate infected and healthy seeds for industrial applications, using visual transformers.',
    skills: ['Python', 'TensorFlow', 'Keras', 'LaTeX', 'GitHub']
  },
  {
    title: 'Junior AI Software Developer',
    company: 'Resilient AG',
    location: 'Winnipeg, MB, Canada',
    period: 'Apr 2024 – Present',
    description: 'Refined an existing MVP to a production-ready state, improving functionality and implementing robust cybersecurity measures to ensure website safety and reliability.',
    skills: ['Python', 'Django', 'SQLAlchemy', 'SQL', 'SQLite', 'Llama-index', 'Qdrant', 'Cybersecurity']
  },
  {
    title: 'CEO/Developer',
    company: 'GroupBuy',
    location: 'Winnipeg, MB, Canada',
    period: 'Feb 2025 – Present',
    description: [
      'Co-founded an AI-powered platform to aggregate small food business orders for cost-effective bulk purchases.',
      'Led the design and development of the startup’s MVP, overseeing all phases from concept to implementation.',
      'Built a scalable SaaS solution using modern web technologies to streamline order aggregation and processing.'
    ].join('\n'),
    skills: ['Django', 'JavaScript', 'SaaS', 'Full Stack Development', 'Leadership', 'HTML', 'CSS', 'Python', 'AI']
  },
  {
    title: 'AI Software Developer Intern (Term 2)',
    company: 'Resilient AG',
    location: 'Winnipeg, MB, Canada',
    period: 'Dec 2024 – Mar 2025',
    description: 'Enhanced a Django-based website by developing an AI-powered marketplace with distinct buyer and seller parts of the website.',
    skills: ['SQLAlchemy', 'Django', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQLite', 'Full Stack Development']
  },
  {
    title: 'AI Software Developer Intern (Term 1)',
    company: 'Resilient AG',
    location: 'Winnipeg, MB, Canada',
    period: 'Aug 2024 – Nov 2024',
    description: [
      'Single-handedly developed a Django website from scratch, integrating a Retrieval-Augmented Generation (RAG) AI chatbot for farmers.',
      'Enabled access to a 100GB database, achieving 99.98% accuracy for the startup’s MVP.',
      'Designed responsive front-end and back-end components to support real-time agricultural data interactions.'
    ].join('\n'),
    skills: ['Python', 'Django', 'SQLite', 'Llama-index', 'Qdrant', 'HTML', 'CSS', 'LLMs', 'Full Stack Development', 'JavaScript']
  },
  {
    title: 'Vice President',
    company: 'University of Manitoba Artificial Intelligence Club',
    location: 'Winnipeg, MB, Canada',
    period: 'May 2024 – Present',
    description: [
      'Spearheaded neural network competitions and hands-on AI projects, engaging over 200 students.',
      'Organized and led 5+ workshops, boosting participation by 60% with industry professional guest speakers.',
      'Managed a team of 6 co-executives to oversee events, partnerships, and budgets, ensuring seamless operations.'
    ].join('\n'),
    skills: ['Organizational Leadership', 'Machine Learning', 'Python', 'Artificial Intelligence', 'Event Planning']
  },
  {
    title: 'Co-founder/Vice President',
    company: 'University of Manitoba Programming Projects Club',
    location: 'Winnipeg, MB, Canada',
    period: 'Nov 2023 – Present',
    description: [
      'Coordinated programming events and workshops, benefiting over 50 participants per session.',
      'Mentored 5+ project teams in developing and deploying applications.',
      'Served as a spokesperson, fostering partnerships with local tech firms and university departments.'
    ].join('\n'),
    skills: ['Organizational Leadership', 'Project Management', 'Node.js', 'Team Leadership', 'Software Development', 'LaTeX']
  },
  {
    title: 'Scientific Researcher',
    company: 'Junior Academy of Sciences',
    location: 'Lviv, Ukraine',
    period: 'Sep 2017 – Feb 2022',
    description: 'Authored astrophysics research papers under the guidance of university professors, focusing on computational modeling and data analysis to advance scientific understanding.',
    skills: ['Research', 'C++', 'Astrophysics', 'Astronomy', 'Computer Science', 'LaTeX', 'Public Speaking']
  },
  {
    title: 'CEO/Software Developer',
    company: 'Prowir',
    location: 'Lviv, Ukraine',
    period: 'Apr 2020 – Jan 2021',
    description: [
      'Led the development of a SaaS platform MVP, managing all phases from concept to implementation.',
      'Engineered modular features using TypeScript and JavaScript to ensure scalability.',
      'Developed a responsive, user-centric website to showcase the MVP’s capabilities.'
    ].join('\n'),
    skills: ['TypeScript', 'JavaScript', 'Node.js', 'React.js', 'Full Stack Development', 'Leadership', 'LaTeX']
  },
  {
    title: 'CEO',
    company: 'SorbMax',
    location: 'Lviv, Ukraine',
    period: 'Jan 2019 – Jan 2020',
    description: 'Founded and led SorbMax, a startup producing biodegradable industrial filters, overseeing project development and representing the company in public forums.',
    skills: ['Project Management', 'Team Leadership', 'LaTeX', 'Event Planning', 'Public Speaking']
  }
];

const Experience = () => {
  return (
    <section className={styles.experienceContainer}>
      <h2 className={styles.sectionTitle}>Professional Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`${styles.experienceBox} ${index % 2 === 0 ? styles.left : styles.right}`}
          >
            <div className={styles.experienceHeader}>
              <h3 className={styles.experienceTitle}>{experience.title}</h3>
              <p className={styles.experienceCompany}>
                <FaBriefcase className={styles.icon} /> {experience.company}
              </p>
              <p className={styles.experiencePeriod}>
                <FaCalendar className={styles.icon} /> {experience.period}
              </p>
              <p className={styles.experienceLocation}>
                <FaMapMarkerAlt className={styles.icon} /> {experience.location}
              </p>
            </div>
            <div className={styles.experienceDetails}>
              <div className={styles.experienceDescription}>
                {experience.description.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <div className={styles.skillsTags}>
                {experience.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className={styles.skillTag}>{skill}</span>
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