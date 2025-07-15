import React from 'react';
import styles from './Projects.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Project JP',
    description: 'A comprehensive AI chatbot application for a large SAAS provider, integrating Azure AI Services with a .NET backend. Features real-time messaging, intelligent conversational interface, data collection tools, analytics monitoring, and Docker containerization for production deployment.',
    period: 'May 2025 - Aug. 2025',
    association: 'University of Manitoba and large SAAS provider',
    skills: ['C#', '.NET', 'ASP.NET Core', 'Azure AI Services', 'Azure OpenAI', 'Docker', 'JavaScript', 'HTML', 'CSS', 'Markdown', 'Web Scraping', 'PDF Processing', 'Analytics', 'Container Registry', 'API Development', 'GitHub'],
    link: '#'
  },
  {
    title: 'Winnipeg Public Transit Improvements Map',
    description: 'A data visualization of the areas with the enhacments in the Winnipeg public transit system required based on public data.',
    period: 'March 2025 - April 2025',
    association: 'DataThon 2025',
    skills: ['Software Development', 'Project Management', 'Python', 'Django', 'Data Analysis', 'Data Science', 'Data Visualizations', 'Open data analysis', 'Team Leadership', "GitHub"],
    link: 'https://github.com/MaxLan-dev/Datathon' 
  },
  {
    title: 'Food4U platform',
    description: 'A platform that connects farmers with small businesses in Winnipeg, allowing users to order food from local farmers.',
    period: 'Feb 2025 - Mar 2025',
    association: '.DevHacks2025',
    skills: ['Software Development', 'Project Management', 'Python', 'Django', 'HTML', 'CSS', 'Team Leadership', "GitHub", 'Software Design'],
    link: 'https://github.com/MaxLan-dev/DevHacks2025' 
  },
  {
    title: 'Calorie Tracker',
    description: 'Android app that allows users to track their calories and exercise daily and build their meal and exercise plans.',
    period: 'Jan 2025 - Apr 2025',
    association: 'University of Manitoba',
    skills: ['Software Development', 'Project Management', 'Java', 'Android', 'Team Leadership', "HSQLDB", "GitLab", 'Software Design', 'Software Testing'],
    link: 'https://github.com/MaxLan-dev/COMP3350-WEBSITE' 
  }, 
  {
    title: 'NASA Space App Challenge Project',
    description: 'An app that shows the exoplanets that should be observed first by the new Habitable Worlds Observatory.',
    period: 'Oct 2024 - Nov 2024',
    association: 'NASA Space Apps Challenge',
    skills: ['Software Development', 'Project Management', 'Python', 'Django', 'Numpy', 'Pandas' , 'Data Analysis', 'Team Leadership', "GitHub"],
    link: 'https://github.com/alex-and-ye/NASA-SPACE-APPS-PROJECT' 
  },
  {
    title: 'Personal Website',
    description: 'My portfolio website, you are currently on it.',
    period: 'Jul 2024 - Present',
    skills: ['React.js', 'Software Development', 'JavaScript', 'GitHub', 'Tailwind CSS', 'Node.js'],
    link: 'https://github.com/MaxLan-dev/MaxLan-dev.github.io' 
  },
  {
    title: 'Discord GPTBot',
    description: 'A Discord bot that uses OpenAI API to provide answers to user questions.',
    period: 'Feb 2023 - Mar 2023',
    association: '.DevHacks2023',
    skills: ['Software Development', 'Team Collaboration', 'React.js', 'Development', 'JavaScript', 'GitHub', 'Node.js' , 'API'],
    link: 'https://github.com/DenysPopov-dp/UM2023hack' 
  },
  {
    title: 'React Chat App',
    description: 'A simple react chat application.',
    period: 'Jan 2023- Feb 2023',
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
    link: 'https://prowircontacts.wixsite.com/prowir' 
  },
  {
    title: 'Maximum masses of neutron stars',
    description: 'Analyzed recent data to create a mass distribution model and examined the impact on kernel probability density.',
    period: 'Nov 2019 - Dec 2020',
    association: 'Junior Academy of Sciences',
    skills: ['Computer Science', 'Python', 'Astrophysics', 'Research', 'LaTeX', 'Statistics'],
    link: '#' 
  },
  {
    title: 'Startup SorbMax',
    description: 'Led a B2B startup developing innovative biodegradable filters for industrial applications.',
    period: 'Jan 2019 - Dec 2019',
    association: 'SorbMax',
    skills: ['CEO', 'Project Management', 'Team Leadership', 'Public Speaking'],
    link: '#' 
  },
  {
    title: 'Planet X',
    description: 'Calculated the possible visual magnitude and orbit of Planet X, published in "Poshuky ta znakhidky magazine".',
    period: 'Sep 2018 - May 2019',
    association: 'Junior Academy of Sciences',
    skills: ['Astrophysics', 'Research', 'Data Analysis', 'LaTeX'],
    link: '#' 
  },
  {
    title: 'Morphological Classification of Galaxies',
    description: 'Used image analysis on Galaxy Zoom datasets to create a morphological distribution of galaxy structures.',
    period: 'Sep 2017 - Mar 2018',
    association: 'Junior Academy of Sciences',
    skills: ['Astrophysics', 'Research', 'Data Analysis', 'LaTeX'],
    link: '#' 
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