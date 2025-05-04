import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaStar, FaUsers, FaTrophy } from 'react-icons/fa';
import styles from './Education.module.css';

const education = {
  degree: 'Bachelor of Computer Science, Minor in Mathematics and Statistics',
  institution: 'University of Manitoba',
  location: 'Winnipeg, MB, Canada',
  period: 'Jan 2023 – Aug 2025',
  gpa: '3.92/4.5',
  coursework: {
    computerScience: [
      'Introductory Computer Science 1 (COMP 1010)',
      'Introductory Computer Science 2 (COMP 1020)',
      'Data Structures and Algorithms (COMP 2140)',
      'Programming Practices (COMP 2160)',
      'Object Orientation (COMP 2150)',
      'Introduction to Computer Systems (COMP 2280)',
      'Software Engineering 1 (COMP 3350)',
      'Computer Organization (COMP 3370)',
      'Operating Systems (COMP 3430)',
      'Introduction to Artificial Intelligence (COMP 3190)',
      'Distributed Computing (COMP 3010)',
      'Human Computer Interaction 1 (COMP 3020)',
      'Machine Learning (COMP 4360)',
      'Artificial Intelligence (COMP 4190)',
      'Industrial Project (COMP 4560)',
      'Professional Practice in Computer Science (COMP 4620)',
      'Analysis of Algorithms (COMP 2080)'
    ],
    mathematics: [
      'Introduction to Calculus (MATH 1500)',
      'Calculus 2 (MATH 1700)',
      'Vector Geometry and Linear Algebra (MATH 1300)',
      'Elementary Discrete Mathematics (MATH 1240)',
      'Multivariable Calculus (MATH 2720)',
      'Mathematics of Data Science (MATH 2740)'
    ],
    statistics: [
      'Basic Statistical Analysis 1 (STAT 1000)',
      'Basic Statistical Analysis 2 (STAT 2000)',
      'Statistics and Computing (STAT 2150)',
      'Principles of Data Collection (STAT 2300)',
      'Introduction to Probability 1 (STAT 2400)',
      'Applied Linear Statistical Models (STAT 3000)'
    ]
  },
  achievements: [
    {
      title: 'University Speedrun',
      description: [
        'Completed a 4-year Bachelor of Computer Science degree in 2.5 years through strategic course planning and accelerated study.',
        'Maintained a 3.92/4.5 GPA while leading professional projects and university clubs.',
        'Applied advanced AI, ML, and software engineering skills to projects like GroupBuy and Resilient AG.'
      ]
    },
    {
      title: 'Dean’s Honour List',
      description: [
        'Received for exceptional academic standing in Jan 2024, May 2024, Aug 2024, Dec 2024 and Apr 2025.',
        'Recognized for maintaining a GPA of 3.92/4.5 across rigorous coursework.'
      ]
    }
  ],
  clubs: [
    {
      name: 'University of Manitoba Artificial Intelligence Club',
      role: 'Vice President',
      period: 'May 2024 – Present',
      description: [
        'Organized Industry AI Talks, featuring guest speakers from Lotlinx and others.',
        'Organized and hosted hands on AI workshops, each with audience of 70+ students.',
        'Led a team of 6 co-executives to manage events, partnerships, and budgets.',
        'Organized a Lets Talk AI event with 70+ participants, featuring professors from the University of Manitoba and their research.'
      ]
    },
    {
      name: 'University of Manitoba Programming Projects Club',
      role: 'Co-founder & Vice President',
      period: 'Nov 2023 – Present',
      description: [
        'Organized and hosted introdution sessions and project showcases, attracting 70+ participants.',
        'Mentored 5+ project teams in developing applications, including an AI chat platfrom, Chat App and an AI course scheduler.',
        'Led a team of 6 co-executives to oversee events, partnerships, and budgets.'
      ]
    },
    {
      name: '.devClub',
      role: 'Active Member',
      period: 'Jan 2023 – Present',
      description: [
        'Participated in hackathons and coding challenges, enhancing skills in Full Stack and AI projects development.',
        'Participated in coding sessions, increasing the knowldge of various software developement areas.',
      ]
    },
    {
      name: 'University of Manitoba Computer Science Student Association',
      role: 'Member',
      period: 'Jan 2023 – Present',
      description: [
        'Attended meetings and events to stay updated on department activities and initiatives.',
        'Collaborated with peers to discuss curriculum changes and student concerns.',
        'Participated in social events to foster community among computer science students.',
      ]
    }
  ],
  competitiveEvents: [
    {
      name: 'DataThon 2025',
      type: 'Hackathon',
      period: 'Mar 2025 – Apr 2025',
      description: [
        'Developed Winnipeg Public Transit Improvements Map, a data visualization tool using Python and Django.',
        'Analyzed public transit data to propose enhancement areas'
      ]
    },
    {
      name: '.DevHacks2025',
      type: 'Hackathon',
      period: 'Feb 2025 – Mar 2025',
      description: [
        'Built Food4U, a platform connecting farmers with small businesses using Django.',
        'Led a team of 4 to design a responsive UI and backend.'
      ]
    },
    {
      name: 'NASA Space Apps Challenge',
      type: 'Hackathon',
      period: 'Oct 2024 – Nov 2024',
      description: [
        'Created an app prioritizing exoplanets for the Habitable Worlds Observatory using Python and Pandas.',
        'Received honorable mention for innovative data analysis.'
      ]
    },
    {
      name: '.DevHacks2023',
      type: 'Hackathon',
      period: 'Feb 2023 – Mar 2023',
      description: [
        'Developed Discord GPTBot, integrating OpenAI API for real-time Q&A.',
      ]
    },
    {
      name: 'UManitoba Game Jam 2023',
      type: 'Game Jam',
      period: 'Jan 2023',
      description: [
        'Designed a platformer game in 48 hours using Godot.',
        'Collaborated with a team of 4 to create engaging gameplay mechanics and graphics.'
      ]
    },
    {
      name: 'CTF 2023',
      type: 'Capture the Flag',
      period: 'Nov 2023',
      description: [
        'Competed in a cybersecurity CTF, solving challenges in network security and cryptography.',
      ]
    }
  ]
};

const Education = () => {
  return (
    <motion.section
      className={styles.educationContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className={styles.pageTitle}>Education</h1>

      {/* Degree Details */}
      <motion.div
        className={styles.educationCard}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <FaGraduationCap className={styles.sectionIcon} />
        <h2 className={styles.sectionTitle}>{education.degree}</h2>
        <p className={styles.educationDetails}>
          {education.institution}, {education.location} | {education.period}
        </p>
        <p className={styles.educationDetails}>GPA: {education.gpa}</p>
      </motion.div>

      {/* Coursework */}
      <motion.div
        className={styles.educationCard}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.sectionTitle}>Coursework</h2>
        <div className={styles.courseworkCategory}>
          <h3 className={styles.subTitle}>Computer Science</h3>
          <ul className={styles.courseworkList}>
            {education.coursework.computerScience.map((course, index) => (
              <li key={index} className={styles.courseworkItem}>{course}</li>
            ))}
          </ul>
        </div>
        <div className={styles.courseworkCategory}>
          <h3 className={styles.subTitle}>Mathematics</h3>
          <ul className={styles.courseworkList}>
            {education.coursework.mathematics.map((course, index) => (
              <li key={index} className={styles.courseworkItem}>{course}</li>
            ))}
          </ul>
        </div>
        <div className={styles.courseworkCategory}>
          <h3 className={styles.subTitle}>Statistics</h3>
          <ul className={styles.courseworkList}>
            {education.coursework.statistics.map((course, index) => (
              <li key={index} className={styles.courseworkItem}>{course}</li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Academic Achievements */}
      <motion.div
        className={styles.educationCard}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <FaStar className={styles.sectionIcon} />
        <h2 className={styles.sectionTitle}>Academic Achievements</h2>
        {education.achievements.map((achievement, index) => (
          <div key={index} className={styles.achievement}>
            <h4 className={styles.achievementTitle}>
              <FaStar className={styles.starIcon} /> {achievement.title}
            </h4>
            <ul className={styles.achievementList}>
              {achievement.description.map((item, idx) => (
                <li key={idx} className={styles.achievementItem}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      {/* Clubs & Leadership */}
      <motion.div
        className={styles.educationCard}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <FaUsers className={styles.sectionIcon} />
        <h2 className={styles.sectionTitle}>Clubs & Leadership</h2>
        {education.clubs.map((club, index) => (
          <div key={index} className={styles.club}>
            <h4 className={styles.clubTitle}>{club.name}</h4>
            <p className={styles.clubDetails}>
              {club.role} | {club.period}
            </p>
            <ul className={styles.clubList}>
              {club.description.map((item, idx) => (
                <li key={idx} className={styles.clubItem}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      {/* Competitive Events */}
      <motion.div
        className={styles.educationCard}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <FaTrophy className={styles.sectionIcon} />
        <h2 className={styles.sectionTitle}>Competitive Events</h2>
        {education.competitiveEvents.map((event, index) => (
          <div key={index} className={styles.event}>
            <h4 className={styles.eventTitle}>{event.name}</h4>
            <p className={styles.eventDetails}>
              {event.type} | {event.period}
            </p>
            <ul className={styles.eventList}>
              {event.description.map((item, idx) => (
                <li key={idx} className={styles.eventItem}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Education;