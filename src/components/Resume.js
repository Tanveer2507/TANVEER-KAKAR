import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume">
      <div className="container">
        <h2 className="section-title" data-text="Resume">My Resume</h2>
        
        <div className="resume-content">
          {/* Professional Summary */}
          <div className="resume-section">
            <h3 className="resume-heading">Professional Summary</h3>
            <p className="resume-text">
              Aspiring Python developer with hands-on experience in Python, SQL, and web development. 
              Passionate about designing efficient, scalable, and user-friendly applications while writing 
              clean, maintainable, and well-documented code to solve real-world problems.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="resume-section">
            <h3 className="resume-heading">Professional Experience</h3>
            <div className="experience-item">
              <div className="experience-header">
                <h4>Data Analyst | Intern</h4>
                <span className="duration">November 2025 – Present</span>
              </div>
              <p className="company">D Trade Capital | Tamil Nadu, Karnataka</p>
              <ul className="experience-list">
                <li>Worked on real-time data collection, data cleaning, and preprocessing to ensure data accuracy and consistency.</li>
                <li>Designed and structured database schemas to improve data organization, integrity, and query efficiency.</li>
                <li>Led and mentored 2–3 interns, guiding them in data management tasks and ensuring timely project delivery.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="resume-section">
            <h3 className="resume-heading">Educational Qualifications</h3>
            
            <div className="education-item">
              <h4>B.Sc. in Information Technology</h4>
              <p className="institution">Kavayitri Bahinabai Chaudhari North Maharashtra University</p>
              <p className="education-details">June 2022 – June 2025 | Jalgaon, Maharashtra</p>
              <p className="cgpa">CGPA: 9.03</p>
            </div>

            <div className="education-item">
              <h4>HSC (Maharashtra State Board - Aurangabad)</h4>
              <p className="institution">Ekta Junior College, Anwa Bazar, Jalana</p>
              <p className="education-details">June 2020 – March 2022 | Aurangabad, Maharashtra</p>
              <p className="percentage">Percentage: 79.17%</p>
            </div>

            <div className="education-item">
              <h4>SSC (Maharashtra State Board - Nashik)</h4>
              <p className="institution">Anglo Urdu High School, Pachora, Jalgaon</p>
              <p className="education-details">March 2020 | Jalgaon, Maharashtra</p>
              <p className="percentage">Percentage: 85.00%</p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="resume-section">
            <h3 className="resume-heading">Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h5>Programming Languages:</h5>
                <p>HTML, CSS, Javascript, Python, SQL</p>
              </div>
              <div className="skill-category">
                <h5>Libraries & Frameworks:</h5>
                <p>NumPy, Pandas, Django</p>
              </div>
              <div className="skill-category">
                <h5>Databases:</h5>
                <p>MySQL, Oracle</p>
              </div>
              <div className="skill-category">
                <h5>Tools & IDEs:</h5>
                <p>VS Code, Jupyter Notebook</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="resume-section">
            <h3 className="resume-heading">Certifications</h3>
            
            <div className="certification-item">
              <h4>Full Stack Python with Data Analysis Training</h4>
              <p className="cert-provider">Infosys | Pune</p>
              <p className="cert-details"><strong>Tools & Technologies:</strong> Python, SQL, JavaScript, HTML, CSS, Power BI</p>
              <p className="cert-details"><strong>Key Competencies:</strong> Full Stack Development, Database Management, Data Cleaning, Analysis, Visualization, and Reporting</p>
            </div>

            <div className="certification-item">
              <h4>Web Development & Design Intern</h4>
              <p className="cert-provider">Oasis Infobyte</p>
              <ul className="cert-list">
                <li>Completed a one-month AICTE-approved OIB-SIP internship, gaining practical experience in web development and design.</li>
                <li>Received positive feedback for delivering high-quality and timely projects.</li>
              </ul>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="resume-section">
            <h3 className="resume-heading">Soft Skills</h3>
            <ul className="soft-skills-list">
              <li>Communication</li>
              <li>Adaptability and quick learning of new technologies</li>
              <li>Time management</li>
              <li>Leadership</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
