import React from 'react';

const achievements = [
 
  {
    title: 'Participation in the Future of Ukraine Competition',
    description: 'Issued by Future of Ukraine · Feb 2022'
  },
  {
    title: 'Participation in the Future of Ukraine Competition',
    description: 'Issued by Future of Ukraine · Oct 2020'
  },
  {
    title: 'Projects Competition 1st Place',
    description: 'Issued by Sahasak Nimavum · Sep 2020'
  },
  {
    title: 'Projects Competition 2nd Place',
    description: 'Issued by iCan Canada · Aug 2020'
  },
  {
    title: 'Projects Competition 3rd Place',
    description: 'Issued by Intarg Poland · Jun 2020'
  },
  {
    title: '4th Place ISEF 2020',
    description: 'Issued by ISEF Ukriane · Feb 2020'
  },
  {
    title: 'Competition Defense 1st Place',
    description: 'Issued by Junior Academy of Sciences of Ukraine (Lviv Region) · Feb 2020'
  },
  {
    title: 'Participant in Innovation Market 2019',
    description: 'Issued by Innovation Market · Nov 2019'
  },
  {
    title: 'Participation BoitechCon',
    description: 'Issued by BiotechCon · Jun 2019'
  },
  {
    title: 'Competition Defense 3rd Place',
    description: 'Issued by Junior Academy of Sciences of Ukraine · May 2019'
  },
  {
    title: 'Competition Defense 1st Place',
    description: 'Issued by Junior Academy of Sciences of Ukraine (Lviv Region) · Feb 2019'
  },
  {
    title: 'Competition Defense 3rd Place',
    description: 'Issued by Junior Academy of Sciences of Ukraine (Lviv Region) · Feb 2018'
  }
];

const Achievements = () => (
  <section className="container mt-5">
    <h2>My Achievements</h2>
    <ul className="list-unstyled">
      {achievements.map((achievement, index) => (
        <li key={index} className="mb-4">
          <h3>{achievement.title}</h3>
          <p>{achievement.description}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Achievements;
