import React from 'react';
import { Link } from 'react-router-dom';

const Description = () => (
  <section className="container mt-5">
    <h1>Welcome to My Portfolio</h1>
    <p>Hi, I'm Maksym Lan, a Computer Science student at the University of Manitoba. I'm passionate about developing innovative solutions and contributing to exciting projects.</p>
    <p>
      <strong>Contact Information:</strong><br />
      418, 29 Dysart Road, Winnipeg, MB R3T 2M7<br />
      Phone: <a href="tel:+12045091227">+1(204)5091227</a><br />
      Email: <a href="mailto:lanmaksym@gmail.com">lanmaksym@gmail.com</a><br />
      GitHub: <a href="https://github.com/MaxLan-dev" target="_blank" rel="noopener noreferrer">github.com/MaxLan-dev</a><br />
      LinkedIn: <a href="https://www.linkedin.com/in/maksym-lan/" target="_blank" rel="noopener noreferrer">linkedin.com/in/maksym-lan</a>
    </p>
    <Link to="/projects" className="btn btn-primary mt-3">View My Projects</Link>
    <Link to="/resume" className="btn btn-secondary mt-3 ml-3">View My Resume</Link>
    <Link to="/experience" className="btn btn-secondary mt-3 ml-3">View My Experience</Link>
    <Link to="/achievements" className="btn btn-secondary mt-3 ml-3">View My Achievements</Link>
  </section>
);

export default Description;
