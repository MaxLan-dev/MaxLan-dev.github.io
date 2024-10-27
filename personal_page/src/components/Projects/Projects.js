// src/components/Projects/Projects.js
import React from 'react';
import styles from './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
const projects = [
  {
    title: 'NASA Space App Challenge Project',
    description: 'An app that shows the exoplanets that should be observed first by the new Habitable Worlds Observatory.',
    period: 'Oct 2024 - Present',
    association: 'University of Manitoba',
    skills: ['Software Development', 'Project Management', 'Python', 'Django', 'Data Analysis'],
    link: '#' // Add actual link when available
  },
  {
    title: 'Personal Website',
    description: 'My personal website, a work in progress.',
    period: 'Jul 2024 - Present',
    skills: ['React.js', 'Software Development', 'Computer Science', 'JavaScript', 'GitHub'],
    link: '#' // Add actual link when available
  },
  {
    title: 'React Chat App',
    description: 'A simple react chat application.',
    period: 'Jan 2023',
    skills: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Node.js'],
    link: 'https://github.com/MaxLan-dev/Chat_app'
  },
  {
    title: 'Model check of the Te method in HII regions',
    description: 'Developed a software program to estimate oxygen abundance in HII regions based on spectral intensities, comparing results with Cloudy simulations.',
    period: 'Dec 2021 - Feb 2022',
    association: 'Junior Academy of Sciences',
    skills: ['Computer Science', 'Astrophysics', 'Research', 'LaTeX', 'C++'],
    link: 'https://github.com/MaxLan-dev/Research_project'
  },
  {
    title: 'Startup Prowir',
    description: 'Led a startup venture focused on wireless charger development, including product conceptualization and website design.',
    period: 'Apr 2020 - Jan 2021',
    association: 'Prowir',
    skills: ['CEO', 'CSS', 'Node.js', 'JavaScript', 'HTML', 'Project Management'],
    link: '#' // Add actual link if available
  },
  {
    title: 'Maximum masses of neutron stars',
    description: 'Analyzed recent data to create a mass distribution model and examined the impact on kernel probability density.',
    period: 'Nov 2019 - Dec 2020',
    association: 'Junior Academy of Sciences',
    skills: ['Computer Science', 'Python', 'Astrophysics', 'Research', 'LaTeX', 'Statistics'],
    link: '#' // Add actual link if available
  },
  {
    title: 'Startup SorbMax',
    description: 'Led a B2B startup developing innovative biodegradable filters for industrial applications.',
    period: 'Jan 2019 - Dec 2019',
    association: 'SorbMax',
    skills: ['CEO', 'Project Management', 'Team Leadership', 'Public Speaking'],
    link: '#' // Add actual link if available
  },
  {
    title: 'Planet X',
    description: 'Calculated the possible visual magnitude and orbit of Planet X, published in "Poshuky ta znakhidky magazine".',
    period: 'Sep 2018 - May 2019',
    association: 'Junior Academy of Sciences',
    skills: ['Astrophysics', 'Research', 'Data Analysis', 'LaTeX'],
    link: '#' // Add actual link if available
  },
  {
    title: 'Morphological Classification of Galaxies',
    description: 'Used image analysis on Galaxy Zoom datasets to create a morphological distribution of galaxy structures.',
    period: 'Sep 2017 - Mar 2018',
    association: 'Junior Academy of Sciences',
    skills: ['Astrophysics', 'Research', 'Data Analysis', 'LaTeX'],
    link: '#' // Add actual link if available
  }
];

const Projects = () => (
  <section className={styles.projectsSection}>
    <h2 className={styles.sectionTitle}>My Projects</h2>
    <div className={styles.projectGrid}>
      {projects.map((project, index) => (
        <div key={index} className={styles.projectCard}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectPeriod}>{project.period}</p>
          {project.association && <p className={styles.projectAssociation}>{project.association}</p>}
          <p className={styles.projectDescription}>{project.description}</p>
          <div className={styles.projectSkills}>
            {project.skills.map((skill, skillIndex) => (
              <span key={skillIndex} className={styles.skill}>{skill}</span>
            ))}
          </div>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              <FaGithub /> View Project <FaExternalLinkAlt />
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Projects;