import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaStar, FaUsers, FaTrophy, FaCertificate, FaBook } from 'react-icons/fa';
import styles from './Education.module.css';

const education = {
  degree: 'Bachelor of Computer Science, Minor in Mathematics and Statistics with Distinction',
  institution: 'University of Manitoba',
  location: 'Winnipeg, MB, Canada',
  period: 'Jan 2023 – Aug 2025',
  gpa: '3.90 / 4.5',
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
        'Maintained a 3.9/4.5 GPA while leading professional projects and university clubs.',
        'Applied advanced AI, ML, and software engineering skills to projects like GroupBuy and Resilient AG.'
      ]
    },
    {
      title: 'Dean\'s Honour List',
      description: [
        'Received for exceptional academic standing in Jan 2024, May 2024, Aug 2024, Jan 2025 and May 2025.',
        'Recognized for maintaining a 3.90+/4.5 GPA across rigorous coursework.'
      ]
    }
  ],
  certifications: [
    {
      title: 'Certified ScrumMaster (CSM)',
      issuer: 'Scrum Alliance',
      period: 'Oct 2025 – Oct 2027',
      description: [
        'Certified in Scrum framework and agile software development methodologies.',
        'Facilitating Scrum ceremonies, removing impediments, and coaching teams.'
      ]
    },
    {
      title: 'Legacy JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      period: 'Dec 2022',
      description: ['JavaScript fundamentals, algorithms and data structures.']
    }
  ],
  clubs: [
    {
      name: 'University of Manitoba Artificial Intelligence Club',
      role: 'Vice President',
      period: 'May 2024 – Sep 2025',
      description: [
        'Organized Industry AI Talks, featuring guest speakers from Lotlinx and others.',
        'Organized and hosted hands on AI workshops, each with audience of 70+ students.',
        'Led a team of 6 co-executives to manage events, partnerships, and budgets.',
        "Organized a Let's Talk AI event with 70+ participants, featuring professors from the University of Manitoba and their research."
      ]
    },
    {
      name: 'University of Manitoba Programming Projects Club',
      role: 'Co-founder & Vice President',
      period: 'Nov 2023 – Sep 2025',
      description: [
        'Organized and hosted introduction sessions and project showcases, attracting 70+ participants.',
        'Mentored 5+ project teams in developing applications, including an AI chat platform, Chat App and an AI course scheduler.',
        'Led a team of 6 co-executives to oversee events, partnerships, and budgets.'
      ]
    },
    {
      name: '.devClub',
      role: 'Active Member',
      period: 'Jan 2023 – Aug 2025',
      description: [
        'Participated in hackathons and coding challenges, enhancing skills in Full Stack and AI projects development.',
        'Participated in coding sessions, increasing the knowledge of various software development areas.',
      ]
    },
    {
      name: 'University of Manitoba Computer Science Student Association',
      role: 'Member',
      period: 'Jan 2023 – Aug 2025',
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

const Block = ({ icon: Icon, title, children, delay = 0 }) => (
  <motion.section
    className={`card ${styles.block}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.4, delay }}
  >
    <h2 className={styles.blockTitle}>
      <span className={styles.blockIcon}><Icon /></span>
      {title}
    </h2>
    {children}
  </motion.section>
);

const Entry = ({ title, meta, items }) => (
  <div className={styles.entry}>
    <div className={styles.entryHead}>
      <h3 className={styles.entryTitle}>{title}</h3>
      {meta && <span className={styles.entryMeta}>{meta}</span>}
    </div>
    <ul className={styles.list}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

const courseGroups = [
  ['Computer Science', education.coursework.computerScience],
  ['Mathematics', education.coursework.mathematics],
  ['Statistics', education.coursework.statistics],
];

const Education = () => (
  <section className="page">
    <header className="page-header">
      <span className="eyebrow">Education</span>
      <h1 className="page-title">Four years of CS in two and a half</h1>
      <p className="page-lede">Degree, coursework, certifications and the clubs and competitions around it.</p>
    </header>

    <motion.div
      className={`card ${styles.degree}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className={styles.degreeIcon}><FaGraduationCap /></span>
      <div className={styles.degreeBody}>
        <h2 className={styles.degreeTitle}>{education.degree}</h2>
        <p className={styles.degreeMeta}>
          {education.institution} · {education.location} · {education.period}
        </p>
      </div>
      <div className={styles.gpa}>
        <span className={`${styles.gpaValue} gradient-text`}>3.90</span>
        <span className={styles.gpaLabel}>GPA / 4.5</span>
      </div>
    </motion.div>

    <Block icon={FaBook} title="Coursework">
      <div className={styles.courseGrid}>
        {courseGroups.map(([name, courses]) => (
          <div key={name}>
            <h3 className={styles.courseGroup}>{name}</h3>
            <div className={styles.chips}>
              {courses.map((c) => (
                <span key={c} className="chip">{c}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Block>

    <div className={styles.twoCol}>
      <Block icon={FaStar} title="Academic achievements">
        {education.achievements.map((a) => (
          <Entry key={a.title} title={a.title} items={a.description} />
        ))}
      </Block>
      <Block icon={FaCertificate} title="Certifications">
        {education.certifications.map((c) => (
          <Entry key={c.title} title={c.title} meta={`${c.issuer} · ${c.period}`} items={c.description} />
        ))}
      </Block>
    </div>

    <Block icon={FaUsers} title="Clubs & leadership">
      <div className={styles.entryGrid}>
        {education.clubs.map((c) => (
          <Entry key={c.name} title={c.name} meta={`${c.role} · ${c.period}`} items={c.description} />
        ))}
      </div>
    </Block>

    <Block icon={FaTrophy} title="Competitive events">
      <div className={styles.entryGrid}>
        {education.competitiveEvents.map((e) => (
          <Entry key={e.name} title={e.name} meta={`${e.type} · ${e.period}`} items={e.description} />
        ))}
      </div>
    </Block>
  </section>
);

export default Education;
