import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.homeContainer}>
    <section className={styles.heroSection}>
      <h1 className={styles.title}>Welcome to My Personal Page</h1>
      <p className={styles.subtitle}>Maksym Lan - Computer Science Student | AI & ML Enthusiast</p>
      <div className={styles.buttonContainer}>
        <Link to="/projects" className={styles.btn}>View My Projects</Link>
        <Link to="/resume" className={styles.btn}>View My Resume</Link>
        <Link to="/experience" className={styles.btn}>View My Experience</Link>
        <Link to="/achievements" className={styles.btn}>View My Achievements</Link>
      </div>
    </section>

    <section className={styles.section}>
      <h2>About Me</h2>
      <p>Hi, I'm Maksym Lan, a dedicated Computer Science student at the University of Manitoba. My passion lies in Artificial Intelligence (AI), Machine Learning (ML), and Large Language Models (LLMs). I focus on leveraging these technologies to enhance and innovate current products, aiming to solve real-world problems through cutting-edge solutions.</p>
      <p>I thrive in collaborative environments and have experience spanning web development, machine learning, and scientific research. My goal is to create innovative, user-friendly solutions at the intersection of technology and human-centric design.</p>
    </section>

    <section className={styles.section}>
      <h2>Technical Skills</h2>
      <ul>
        <li>Programming Languages: TypeScript, JavaScript, Python, SQL, C/C++, Java, R</li>
        <li>Frameworks/Libraries: React, Redux, Bootstrap, TensorFlow, PyTorch, NumPy, MatPlotLib</li>
        <li>Tools: Git, Visual Studio Code, Linux (Bash/Zsh), LaTeX (Overleaf/R Markdown)</li>
        <li>Soft Skills: Time Management, Leadership, Teamwork, Problem-solving</li>
      </ul>
    </section>

    <section className={styles.section}>
      <h2>Education</h2>
      <p><strong>Bachelor of Computer Science, University of Manitoba</strong></p>
      <p>Relevant Coursework: Data Structures and Algorithms, Computer Organization, Statistics and Computing, Programming Practices, Operating Systems</p>
    </section>

    <section className={styles.section}>
      <h2>Professional Experience</h2>
      <p>I have held positions in both academic and industry settings, applying my technical skills to develop robust software solutions. My roles have included student researcher and CEO/developer in various projects, giving me a well-rounded perspective on technology development and implementation.</p>
    </section>

    <section className={styles.section}>
      <h2>Contact Information</h2>
      <p>Winnipeg, MB, Canada</p>
      <p>Email: <a href="mailto:lanmaksym@gmail.com">lanmaksym@gmail.com</a></p>
      <p>GitHub: <a href="https://github.com/MaxLan-dev" target="_blank" rel="noopener noreferrer">github.com/MaxLan-dev</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/maksym-lan/" target="_blank" rel="noopener noreferrer">linkedin.com/in/maksym-lan</a></p>
    </section>
  </div>
);

export default Home;