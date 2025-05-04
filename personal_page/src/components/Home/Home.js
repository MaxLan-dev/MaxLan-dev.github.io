import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaCode, FaGraduationCap, FaBriefcase, FaUser, FaTrophy } from 'react-icons/fa';
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
            Welcome to My Personal Page
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Maksym Lan - Computer Science Student | AI, ML & Full Stack Developer
          </motion.p>
          <div className={styles.buttonContainer}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/experience" className={styles.heroButton}>
                <FaBriefcase /> View Experience
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/projects" className={styles.heroButton}>
                <FaCode /> View Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/education" className={styles.heroButton}>
                <FaGraduationCap /> View Education
              </Link>
            </motion.div>
             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/achievements" className={styles.heroButton}>
                <FaTrophy /> View Achievements
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/resume" className={styles.heroButton}>
                <FaUser /> View Resume
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
          I'm Maksym(Max) Lan, a Computer Science student and about to be a graduate at the University of Manitoba, minoring in Mathematics and Statistics.
          My passion lies in Machine Learning (ML), and I am excited to apply the university and work knowldge on real world probelms. 
          I am a co-founder and a CEO of GroupBuy, student and a summer researcher at the UoM, developer at Resilient AG and executive of the UMAI and UMPPC, as well as a former CEO of Prowir and SorbMax. 
          I’ve built AI-powered platforms and SaaS applications for startups and I am eager to gain more knowldge in future.
        </p>
        <p className={styles.sectionText}>
          With my old passion and research background in astrophysics as well as my current leadership roles, I love to work in collaborative environments,
          mixing knowldge and creative problem-solving. Check out my projects and experiences to see my work in action!
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
              <li>Python</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>R</li>
              <li>TypeScript</li>
              <li>SQL</li>
              <li>C++</li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>AI/ML Tools</h3>
            <ul className={styles.skillList}>
              <li>TensorFlow</li>
              <li>Keras</li>
              <li>PyTorch</li>
              <li>Llama-index</li>
              <li>LangChain</li>
              <li>Qdrant</li>
              <li>NumPy</li>
              <li>Pandas</li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>Full Stack Skills</h3>
            <ul className={styles.skillList}>
              <li>Django</li>
              <li>React</li>
              <li>Node.js</li>
              <li>SQLAlchemy</li>
              <li>HTML/CSS</li>
              <li>Tailwind CSS</li>
              <li>Redux</li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>Tools & Soft Skills</h3>
            <ul className={styles.skillList}>
              <li>Git</li>
              <li>Docker</li>
              <li>Linux</li>
              <li>LaTeX</li>
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
          <h3>Bachelor of Computer Science, Minor in Mathematics and Statistics</h3>
          <p className={styles.educationDetails}>University of Manitoba, Winnipeg, MB | Jan 2023 – Aug 2025</p>
          <p className={styles.sectionText}>
            GPA: 3.92/4.5 (Current) | Completed a 4 year degree in 2.5 years by taking 6+ courses a term, mastering AI, ML, and software engineering.
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
          Despite relative start of my career, I have already gained quite a bit of a software developement experience, primarily Full Stack and working on various AI focues
          applications.
          I am currently working as both a summer researcher at the University of Manitoba, and a software developer at Resilient AG, where I am involved in developing AI-based platforms.
          I am also a co-founder and a CEO of GroupBuy, a SaaS platform for small food businesses, where I am responsible for leading the development of the platform and managing the team.
          Prior to coming to Canada, I was a CEO of Prowir and SorbMax, where I led the development of a new wireless charger type and a startup focused on biodegradable filters, respectively.
          Check out my experience section for more details on my work.
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
          <p className={styles.contactItem}>Phone: +1 204 509 1227</p>
          <p className={styles.contactItem}>
            Email: <a href="mailto:lanmaksym@gmail.com" className={styles.contactLink}>lanmaksym@gmail.com</a>
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