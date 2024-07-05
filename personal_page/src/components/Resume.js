import React from 'react';

const Resume = () => (
  <section className="container mt-5">
    <h2>My Resume</h2>
    <p>Here you can view or download my resume:</p>
    <div>
      <embed src="https://github.com/MaxLan-dev/MaxLan-dev.github.io/blob/main/personal_page/public/Maksym_Lan_Resume.pdf" type="application/pdf" width="100%" height="600px" />
    </div>
    <a href="https://github.com/MaxLan-dev/MaxLan-dev.github.io/blob/main/personal_page/public/Maksym_Lan_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">
      View Resume (PDF)
    </a>
  </section>
);

export default Resume;
