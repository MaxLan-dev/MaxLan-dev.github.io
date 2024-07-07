import React from 'react';

const Resume = () => {
  return (
    <div>
      <h2>Resume</h2>
      <iframe 
        src="/resume.pdf" // This path should match the location of your file in the public directory
        style={{ width: '100%', height: '600px' }} 
        title="Resume"
      ></iframe>
    </div>
  );
};

export default Resume;
