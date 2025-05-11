import React from 'react';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Experience.module.css';

const experiences = [
  {
    title: 'Summer Student Technician',
    company: 'University of Manitoba',
    location: 'Winnipeg, MB, Canada',
    period: 'May 2025 – Aug 2025',
    description: 'Developing a Computer Vision model to detect and separate infected and healthy seeds for industrial applications, using visual transformers.',
    skills: ['Python', 'TensorFlow', 'Keras', 'LaTeX', 'GitHub']
  },
  {
    title: 'Junior AI Software Developer',
    company: 'Resilient AG',
    location: 'Winnipeg, MB, Canada',
    period: 'Apr 2024 – Present',
     description: [
      'Refined and improved an existing MVP to a production-ready state, taking user\' feedback and applying it at each iteration.',
      'Enhanced the SQL to language converter, combining 99.999% accuracy and full safety of the database, as a result of carefull Promt and SQL injections protection.',
      'Enhaced the user interface by carefully applying the principles of UX/UI design, resulting in a 50% increase in user satisfaction.',
      'Enabled the platform to support 10000+ concurrent users, ensuring high availability and performance.',
      'Allowed the KnowledgeBase admin to modify and change the vector database from a web interface, allowing to ease the interaction.',
      'Used Agile methodologies to ensure timely delivery and continuous improvement of the platform.',
    ].join('\n'),
    skills: ['Python', 'Django', 'SQLAlchemy', 'Developement Lead',  'SQL', 'SQLite', 'Llama-index', 'Qdrant', 'Cybersecurity', 'LLMs', 'Full Stack Development', 'Agile Development', 'HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'CEO/Developer',
    company: 'GroupBuy',
    location: 'Winnipeg, MB, Canada',
    period: 'Feb 2025 – Present',
    description: [
      'Co-founded an AI-powered platform to aggregate small food business orders for cost-effective bulk purchases.',
      'Led the design and development of the startup’s MVP, overseeing all phases from concept to implementation.',
      'Built a scalable SaaS solution using modern web technologies to streamline order aggregation and processing.',
      'Led the communication with local businesses to ensure the platform meets their needs and expectations.',
      'Implemented a user-friendly interface to enhance the customer experience and facilitate easy navigation.',
      'Utilized Agile methodologies to ensure timely delivery and continuous improvement of the platform.',
      'Conducted market research to identify customer needs and preferences, informing product development and marketing strategies.',
    ].join('\n'),
    skills: ['Django', 'Python', 'JavaScript', 'SaaS', 'Developement Lead',  'Full Stack Development', 'Leadership', 'HTML', 'CSS', 'Python', 'AI', 'Agile Development', 'Market Research']
  },
  {
    title: 'AI Software Developer Intern (Term 2)',
    company: 'Resilient AG',
    location: 'Winnipeg, MB, Canada',
    period: 'Dec 2024 – Mar 2025',
    description: [
      'Single-handedly developed a complex marketplace platform from scratch, with a special focus on a farmer-retailer interaction.',
      'Developed a language to SQL to language converter that integrates a safe-guarded LLM with an SQLite database, and achives 99.99% accuracy.',
      'Designed an implemented a user-friendly interface for seamless navigation and interaction, reducing the search time by 80%.',
      'Desgined a complex functional and scalable database schema, using SQLAlchemy to ensure the safety and effectvieness in platform’s operations.',
      'Used Agile methodologies to ensure timely delivery and continuous improvement of the platform.',
    ].join('\n'),
    skills: ['SQLAlchemy', 'Django', 'Python', 'Developement Lead', 'HTML', 'Tailwind CSS', 'JavaScript', 'SQLite', 'Full Stack Development', 'LLMs', 'Agile Development', 'Cybersecurity', 'SaaS']
  },
  {
    title: 'AI Software Developer Intern (Term 1)',
    company: 'Resilient AG',
    location: 'Winnipeg, MB, Canada',
    period: 'Aug 2024 – Nov 2024',
    description: [
      'Single-handedly developed a Django website from scratch, including a farmer registration, integration of a 100GB knowledge base, and an SQLite database.',
      'Integrating Large Language Models through Retrieval-Augmented Generation (RAG), provided users an access to a 100GB Qdrant vector knowledge base database, achieving 99.98% accuracy in responses.',
      'Designed responsive front-end and back-end components to support the functionality of the website, and a proper work of the chatbot.',
      'Implemented a querry limit per unregistered user and provided a proper user interface for the admin to change the limit.',
      'Experimented with different LLMs,vector encoders, and vector databases to find the most effective combination for the platform.',
      'Conducted extensive testing and debugging to ensure the platform’s reliability and performance, achieving a 99.9% uptime.',
      'Utilized Agile methodologies to ensure timely delivery and continuous improvement of the platform.',
    ].join('\n'),
    skills: ['Python', 'Django', 'SQLite', 'Developement Lead', 'Llama-index', 'Qdrant', 'HTML', 'CSS', 'LLMs', 'Full Stack Development', 'JavaScript', 'Cybersecurity', 'Agile Development', 'SaaS']
  },
  {
    title: 'Vice President',
    company: 'University of Manitoba Artificial Intelligence Club',
    location: 'Winnipeg, MB, Canada',
    period: 'May 2024 – Present',
    description: [
      'Spearheaded neural network competitions and hands-on AI projects, engaging over 200 students.',
      'Organized and led 5+ workshops, boosting participation by 60% with industry professional guest speakers.',
      'Managed a team of 6 co-executives to oversee events, partnerships, and budgets, ensuring seamless operations.'
    ].join('\n'),
    skills: ['Organizational Leadership', 'Machine Learning', 'Python', 'Artificial Intelligence', 'Event Planning']
  },
  {
    title: 'Co-founder/Vice President',
    company: 'University of Manitoba Programming Projects Club',
    location: 'Winnipeg, MB, Canada',
    period: 'Nov 2023 – Present',
    description: [
      'Coordinated programming events and workshops, benefiting over 50 participants per session.',
      'Mentored 5+ project teams in developing and deploying applications.',
      'Served as a spokesperson, fostering partnerships with local tech firms and university departments.'
    ].join('\n'),
    skills: ['Organizational Leadership', 'Project Management', 'Node.js', 'Team Leadership', 'Software Development', 'LaTeX']
  },
  {
    title: 'Scientific Researcher',
    company: 'Junior Academy of Sciences',
    location: 'Lviv, Ukraine',
    period: 'Sep 2017 – Feb 2022',
    description: 'Authored astrophysics research papers under the guidance of university professors, focusing on computational modeling and data analysis to advance scientific understanding.',
    skills: ['Research', 'C++', 'Astrophysics', 'Astronomy', 'Computer Science', 'LaTeX', 'Public Speaking']
  },
  {
    title: 'CEO/Software Developer',
    company: 'Prowir',
    location: 'Lviv, Ukraine',
    period: 'Apr 2020 – Jan 2021',
    description: [
      'Led the development of a SaaS platform MVP, managing all phases from concept to implementation.',
      'Engineered modular features using TypeScript and JavaScript to ensure scalability.',
      'Developed a responsive, user-centric website to showcase the MVP’s capabilities.'
    ].join('\n'),
    skills: ['TypeScript', 'JavaScript', 'Node.js', 'React.js', 'Full Stack Development', 'Leadership', 'LaTeX']
  },
  {
    title: 'CEO',
    company: 'SorbMax',
    location: 'Lviv, Ukraine',
    period: 'Jan 2019 – Jan 2020',
    description: 'Founded and led SorbMax, a startup producing biodegradable industrial filters, overseeing project development and representing the company in public forums.',
    skills: ['Project Management', 'Team Leadership', 'LaTeX', 'Event Planning', 'Public Speaking']
  }
];

const Experience = () => {
  return (
    <section className={styles.experienceContainer}>
      <h2 className={styles.sectionTitle}>Professional Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`${styles.experienceBox} ${index % 2 === 0 ? styles.left : styles.right}`}
          >
            <div className={styles.experienceHeader}>
              <h3 className={styles.experienceTitle}>{experience.title}</h3>
              <p className={styles.experienceCompany}>
                <FaBriefcase className={styles.icon} /> {experience.company}
              </p>
              <p className={styles.experiencePeriod}>
                <FaCalendar className={styles.icon} /> {experience.period}
              </p>
              <p className={styles.experienceLocation}>
                <FaMapMarkerAlt className={styles.icon} /> {experience.location}
              </p>
            </div>
            <div className={styles.experienceDetails}>
              <div className={styles.experienceDescription}>
                {experience.description.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <div className={styles.skillsTags}>
                {experience.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className={styles.skillTag}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;