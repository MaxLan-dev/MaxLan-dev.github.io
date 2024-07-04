import React from 'react';

const projects = [
  
    {
    title: 'Cookbot',
    description: 'Create a discord and telegram bot that uses the Chat GPT API to help users find recipes based on the ingredients they have. The bot also provides the user with a list of ingredients they need to buy to make the recipe.',
    link: 'https://github.com/MaxLan-dev/Cookbot'
  },
  {
    title: 'Chatapp',
    description: 'Create a chat application that allows users to create chat rooms and communicate with each other in real-time. The application uses React, Node.js, Bootstrap to create a seamless chat experience.',
    link: 'https://github.com/MaxLan-dev/Chat_app'
  },
  {
    title: 'Model check of the Te method in HII regions',
    description: 'Create a program that estimates the abundance of Oxygen in HII regions based on the intensities of the spectrum given and compares it with the results of the simulation made by Cloudy.',
    link: 'https://github.com/MaxLan-dev/Research_project'
  },
  {
    title: 'Maximum masses of neutron stars',
    description: 'Analyse the data collected from recent years, create a mass distribution and analyze the new data’s effects on the kernel probability density.',
   // link: 'https://github.com/MaxLan-dev/Research_project'
  }
];

const Projects = () => (
  <section className="container mt-5">
    <h2>My Projects</h2>
    <ul className="list-unstyled">
      {projects.map((project, index) => (
        <li key={index} className="mb-4">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View on GitHub
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default Projects;