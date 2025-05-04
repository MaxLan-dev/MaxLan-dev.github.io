import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaCode, FaGraduationCap, FaBriefcase, FaUser } from 'react-icons/fa';
import styles from './Home.module.css';

const Home = () => {
  const controls = useAnimation();

  // Back to Top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 20 });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <motion.section
        className={styles.heroSection}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.heroContent}>
          <motion.img
            src="/images/profile.jpg"
            alt="Maksym Lan"
            className={styles.profileImage}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Welcome to My Portfolio
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Maksym Lan - Computer Science Student | AI & ML Enthusiast
          </motion.p>
          <div className={styles.buttonContainer}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/projects" className={styles.heroButton}>
                <FaCode /> View Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/resume" className={styles.heroButton}>
                <FaBriefcase /> View Resume
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/experience" className={styles.heroButton}>
                <FaBriefcase /> View Experience
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/achievements" className={styles.heroButton}>
                <FaGraduationCap /> View Achievements
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Me Section */}
      <motion.section
        className={styles.sectionCard}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <FaUser className={styles.sectionIcon} />
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.sectionText}>
          Hi, I'm Maksym Lan, a dedicated Computer Science student at the University of Manitoba. My passion lies in Artificial Intelligence (AI), Machine Learning (ML), and Large Language Models (LLMs). I focus on leveraging these technologies to enhance and innovate current products, aiming to solve real-world problems through cutting-edge solutions.
        </p>
        <p className={styles.sectionText}>
          I thrive in collaborative environments and have experience spanning web development, machine learning, and scientific research. My goal is to create innovative, user-friendly solutions at the intersection of technology and human-centric design.
        </p>
      </motion.section>

      {/* Technical Skills Section */}
      <motion.section
        className={styles.sectionCard}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <FaCode className={styles.sectionIcon} />
        <h2 className={styles.sectionTitle}>Technical Skills</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCategory}>
            <h3>Programming Languages</h3>
            <ul className={styles.skillList}>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>SQL</li>
              <li>C/C++</li>
              <li>Java</li>
              <li>R</li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>Frameworks/Libraries</h3>
            <ul className={styles.skillList}>
              <li>React</li>
              <li>Redux</li>
              <li>Bootstrap</li>
              <li>TensorFlow</li>
              <li>PyTorch</li>
              <li>NumPy</li>
              <li>MatPlotLib</li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>Tools</h3>
            <ul className={styles.skillList}>
              <li>Git</li>
              <li>Visual Studio Code</li>
              <li>Linux (Bash/Zsh)</li>
              <li>LaTeX (Overleaf/R Markdown)</li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>Soft Skills</h3>
            <ul className={styles.skillList}>
              <li>Time Management</li>
              <li>Leadership</li>
              <li>Teamwork</li>
              <li>Problem-solving</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className={styles.sectionCard}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <FaGraduationCap className={styles.sectionIcon} />
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.educationItem}>
          <h3>Bachelor of Computer Science</h3>
          <p className={styles.educationDetails}>University of Manitoba</p>
          <p className={styles.sectionText}>
            Relevant Coursework: Data Structures and Algorithms, Computer Organization, Statistics and Computing, Programming Practices, Operating Systems
          </p>
        </div>
      </motion.section>

      {/* Professional Experience Section */}
      <motion.section
        className={styles.sectionCard}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <FaBriefcase className={styles.sectionIcon} />
        <h2 className={styles.sectionTitle}>Professional Experience</h2>
        <p className={styles.sectionText}>
          I have held positions in both academic and industry settings, applying my technical skills to develop robust software solutions. My roles have included student researcher and CEO/developer in various projects, giving me a well-rounded perspective on technology development and implementation.
        </p>
        <Link to="/experience" className={styles.sectionButton}>View Full Experience</Link>
      </motion.section>

      {/* Contact Information Section */}
      <motion.section
        className={styles.sectionCard}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <FaEnvelope className={styles.sectionIcon} />
        <h2 className={styles.sectionTitle}>Contact Information</h2>
        <div className={styles.contactGrid}>
          <p className={styles.contactItem}>Winnipeg, MB, Canada</p>
          <p className={styles.contactItem}>
            Email: <a href="mailto:lanmaksym@gmail.com" className={styles.contactLink}>lanmaksym@gmail.com</a>
          </p>
          <p className={styles.contactItem}>
            GitHub: <a href="https://github.com/MaxLan-dev" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>github.com/MaxLan-dev</a>
          </p>
          <p className={styles.contactItem}>
            LinkedIn: <a href="https://www.linkedin.com/in/maksym-lan/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>linkedin.com/in/maksym-lan</a>
          </p>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://github.com/MaxLan-dev" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/maksym-lan/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <FaLinkedin />
          </a>
          <a href="mailto:lanmaksym@gmail.com" className={styles.socialLink}>
            <FaEnvelope />
          </a>
        </div>
      </motion.section>

      {/* Back to Top Button */}
      <motion.button
        className={styles.backToTop}
        animate={controls}
        initial={{ opacity: 0, y: 20 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowUp />
      </motion.button>
    </div>
  );
};

export default Home;