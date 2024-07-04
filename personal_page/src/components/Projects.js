import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'Description of project one.',
    link: 'https://github.com/your-username/project-one'
  },
  {
    title: 'Project Two',
    description: 'Description of project two.',
    link: 'https://github.com/your-username/project-two'
  }
];

const Projects = () => (
  <section>
    <h2>My Projects</h2>
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default Projects;
