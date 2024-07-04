import React from 'react';

const experiences = [
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
