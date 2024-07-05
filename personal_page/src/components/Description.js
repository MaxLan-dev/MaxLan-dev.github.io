import React from 'react';
import { Link } from 'react-router-dom';
import './Description.css';

const Description = () => (
  <section className="container mt-5">
    <h1>Welcome to My Personal Page</h1>
    <p>Hi, I'm Maksym Lan, a dedicated Computer Science student at the University of Manitoba. My passion lies in Artificial Intelligence (AI), Machine Learning (ML), and Large Language Models (LLMs), with a keen focus on leveraging these technologies to enhance and innovate current products.</p>
    
    <p>With a strong foundation in programming and hands-on experience in various projects, I continuously strive to expand my knowledge and skills. I believe in the power of AI and ML to transform industries and improve the quality of life. My projects reflect my commitment to solving real-world problems through innovative solutions.</p>

    <p>
      <strong>Technical Skills:</strong><br />
      <ul>
        <li>Programming Languages: TypeScript, JavaScript, Python, SQL, C/C++, Java, R</li>
        <li>Frameworks/Libraries: React, Redux, Bootstrap, TensorFlow, PyTorch, NumPy, MatPlotLib</li>
        <li>Tools: Git, Visual Studio Code, Linux (Bash/Zsh), LaTeX (Overleaf/R Markdown)</li>
        <li>Soft Skills: Time Management, Leadership, Teamwork, Problem-solving</li>
      </ul>
    </p>
    
    <p>
      <strong>Contact Information:</strong><br />
      Winnipeg, MB, Canada<br />
      Email: <a href="mailto:lanmaksym@gmail.com">lanmaksym@gmail.com</a><br />
      GitHub: <a href="https://github.com/MaxLan-dev" target="_blank" rel="noopener noreferrer">github.com/MaxLan-dev</a><br />
      LinkedIn: <a href="https://www.linkedin.com/in/maksym-lan/" target="_blank" rel="noopener noreferrer">linkedin.com/in/maksym-lan</a>
    </p>
    
    <p>
      <strong>About Me:</strong><br />
      I am highly motivated and thrive in collaborative environments. My experience spans various domains, including web development, machine learning, and scientific research. I am particularly interested in the intersection of technology and human-centric design, aiming to create solutions that are both innovative and user-friendly.
    </p>

    <p>
      <strong>Education:</strong><br />
      Bachelor of Computer Science, University of Manitoba<br />
      Relevant Coursework: Data Structures and Algorithms, Computer Organization, Statistics and Computing, Programming Practices, Operating Systems
    </p>

    <p>
      <strong>Professional Experience:</strong><br />
      I have held positions in both academic and industry settings, where I applied my technical skills to develop robust software solutions. My roles have included student researcher, and CEO/developer in various projects.
    </p>
    <div className="button-container mt-3">
      <Link to="/projects" className="btn btn-secondary custom-btn">View My Projects</Link>
      <Link to="/resume" className="btn btn-secondary custom-btn">View My Resume</Link>
      <Link to="/experience" className="btn btn-secondary custom-btn">View My Experience</Link>
      <Link to="/achievements" className="btn btn-secondary custom-btn">View My Achievements</Link>
    </div>
  </section>
);

export default Description;
