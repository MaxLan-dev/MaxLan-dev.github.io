import React from 'react';

const achievements = [
  {
    title: 'First Place in Hackathon',
    description: 'Led a team of four to develop an innovative solution that won first place in the XYZ Hackathon.'
  },
  // Add more achievements as needed
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
