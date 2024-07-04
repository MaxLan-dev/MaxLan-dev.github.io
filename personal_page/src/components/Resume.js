import React from 'react';

const Resume = () => (
  <section className="container mt-5">
    <h2>My Resume</h2>
    <p>Here you can view or download my resume:</p>
    <div>
      {/* Option 1: Embed PDF directly */}
      {/* Replace '/path/to/Maksym_Lan_Resume.pdf' with your actual PDF file path */}
      <embed src="c:\Users\vvede\Downloads\Maksym_Lan_Resume (5).pdf" type="application/pdf" width="100%" height="600px" />
    </div>
    {/* Option 2: Link to PDF */}
    {/* Replace '/path/to/Maksym_Lan_Resume.pdf' with your actual PDF file path */}
    <a href="c:\Users\vvede\Downloads\Maksym_Lan_Resume (5).pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">
      View Resume (PDF)
    </a>
  </section>
);

export default Resume;
