import React from 'react';

const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'XYZ Company',
    period: 'June 2023 - August 2023',
    description: 'Worked on developing and maintaining web applications using React and Node.js. Improved performance and fixed bugs.'
  },
  // Add more experiences as needed
];

const Experience = () => (
  <section className="container mt-5">
    <h2>My Experience</h2>
    <ul className="list-unstyled">
      {experiences.map((experience, index) => (
        <li key={index} className="mb-4">
          <h3>{experience.title}</h3>
          <p><strong>Company:</strong> {experience.company}</p>
          <p><strong>Period:</strong> {experience.period}</p>
          <p>{experience.description}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Experience;
