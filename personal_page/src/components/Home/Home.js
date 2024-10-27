import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="max-w-4xl mx-auto px-4 py-8">
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8 mb-8 shadow-lg">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Personal Page</h1>
      <p className="text-xl">Maksym Lan - Computer Science Student | AI & ML Enthusiast</p>
    </section>

    <section className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8 shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">About Me</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Hi, I'm Maksym Lan, a dedicated Computer Science student at the University of Manitoba. My passion lies in Artificial Intelligence (AI), Machine Learning (ML), and Large Language Models (LLMs). I focus on leveraging these technologies to enhance and innovate current products, aiming to solve real-world problems through cutting-edge solutions.</p>
      <p className="text-gray-600 dark:text-gray-300">I thrive in collaborative environments and have experience spanning web development, machine learning, and scientific research. My goal is to create innovative, user-friendly solutions at the intersection of technology and human-centric design.</p>
    </section>

    <section className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8 shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Technical Skills</h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
        <li>Programming Languages: TypeScript, JavaScript, Python, SQL, C/C++, Java, R</li>
        <li>Frameworks/Libraries: React, Redux, Bootstrap, TensorFlow, PyTorch, NumPy, MatPlotLib</li>
        <li>Tools: Git, Visual Studio Code, Linux (Bash/Zsh), LaTeX (Overleaf/R Markdown)</li>
        <li>Soft Skills: Time Management, Leadership, Teamwork, Problem-solving</li>
      </ul>
    </section>

    <section className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8 shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Education</h2>
      <p className="font-semibold text-gray-700 dark:text-gray-200">Bachelor of Computer Science, University of Manitoba</p>
      <p className="text-gray-600 dark:text-gray-300">Relevant Coursework: Data Structures and Algorithms, Computer Organization, Statistics and Computing, Programming Practices, Operating Systems</p>
    </section>

    <section className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8 shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Professional Experience</h2>
      <p className="text-gray-600 dark:text-gray-300">I have held positions in both academic and industry settings, applying my technical skills to develop robust software solutions. My roles have included student researcher and CEO/developer in various projects, giving me a well-rounded perspective on technology development and implementation.</p>
    </section>

    <section className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8 shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Contact Information</h2>
      <p className="text-gray-600 dark:text-gray-300">Winnipeg, MB, Canada</p>
      <p className="text-gray-600 dark:text-gray-300">Email: <a href="mailto:lanmaksym@gmail.com" className="text-blue-500 hover:underline">lanmaksym@gmail.com</a></p>
      <p className="text-gray-600 dark:text-gray-300">GitHub: <a href="https://github.com/MaxLan-dev" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">github.com/MaxLan-dev</a></p>
      <p className="text-gray-600 dark:text-gray-300">LinkedIn: <a href="https://www.linkedin.com/in/maksym-lan/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">linkedin.com/in/maksym-lan</a></p>
    </section>

    <div className="flex flex-wrap justify-center gap-4">
      <Link to="/projects" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">View My Projects</Link>
      <Link to="/resume" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">View My Resume</Link>
      <Link to="/experience" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">View My Experience</Link>
      <Link to="/achievements" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">View My Achievements</Link>
    </div>
  </div>
);

export default Home;