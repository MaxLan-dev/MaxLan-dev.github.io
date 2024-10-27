import React from 'react';
import styles from './Achievements.css';

const achievements = [
  {
    title: 'Participation in the Future of Ukraine Competition',
    description: 'Issued by Future of Ukraine · Feb 2022',
    icon: '🏆'
  },
  {
    title: 'Projects Competition 1st Place',
    description: 'Issued by Sahasak Nimavum · Sep 2020',
    icon: '🥇'
  },
  {
    title: 'Projects Competition 2nd Place',
    description: 'Issued by iCan Canada · Aug 2020',
    icon: '🥈'
  },
  {
    title: 'Projects Competition 3rd Place',
    description: 'Issued by Intarg Poland · Jun 2020',
    icon: '🥉'
  },
  {
    title: '4th Place ISEF 2020',
    description: 'Issued by ISEF Ukraine · Feb 2020',
    icon: '🏅'
  },
  {
    title: 'Competition Defense 1st Place',
    description: 'Issued by Junior Academy of Sciences of Ukraine (Lviv Region) · Feb 2020',
    icon: '🏆'
  },
  {
    title: 'Participant in Innovation Market 2019',
    description: 'Issued by Innovation Market · Nov 2019',
    icon: '🎖️'
  },
  {
    title: 'Participation BiotechCon',
    description: 'Issued by BiotechCon · Jun 2019',
    icon: '🧬'
  },
  {
    title: 'Competition Defense 3rd Place',
    description: 'Issued by Junior Academy of Sciences of Ukraine · May 2019',
    icon: '🥉'
  },
  {
    title: 'Competition Defense 1st Place',
    description: 'Issued by Junior Academy of Sciences of Ukraine (Lviv Region) · Feb 2019',
    icon: '🏆'
  },
  {
    title: 'Competition Defense 3rd Place',
    description: 'Issued by Junior Academy of Sciences of Ukraine (Lviv Region) · Feb 2018',
    icon: '🥉'
  }
];

const Achievements = () => (
  <section className={styles.achievementsContainer}>
    <div className={styles.achievementsHeader}>
      <h2 className={styles.achievementsTitle}>Achievements</h2>
    </div>
    <ul className={styles.achievementsList}>
      {achievements.map((achievement, index) => (
        <li key={index} className={styles.achievementBox}>
          <div className={styles.achievementIcon}>{achievement.icon}</div>
          <h3 className={styles.achievementTitle}>{achievement.title}</h3>
          <p className={styles.achievementDescription}>{achievement.description}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Achievements;