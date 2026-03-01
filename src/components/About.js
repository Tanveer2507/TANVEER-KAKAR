import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title" data-text="Who I Am">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Python Developer & Data Analyst</h3>
            <p>
              I'm an aspiring Python developer with hands-on experience in Python, SQL, and web development. 
              Currently working as a Data Analyst Intern at D Trade Capital, where I focus on real-time data 
              collection, cleaning, and database design. I'm passionate about designing efficient, scalable, 
              and user-friendly applications while writing clean, maintainable code.
            </p>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                  </svg>
                  Education:
                </span>
                <span className="info-value">B.Sc. IT (CGPA: 9.03)</span>
              </div>
              <div className="info-item">
                <span className="info-label">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                  </svg>
                  Current Role:
                </span>
                <span className="info-value">Data Analyst Intern</span>
              </div>
              <div className="info-item">
                <span className="info-label">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Location:
                </span>
                <span className="info-value">Pune, Maharashtra</span>
              </div>
              <div className="info-item">
                <span className="info-label">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  Email:
                </span>
                <span className="info-value">tanveerkakar294@gmail.com</span>
              </div>
            </div>
            <div className="highlights">
              <h4>Career Highlights</h4>
              <ul>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Data Analyst Intern at D Trade Capital (Nov 2025 - Present)
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Web Development Intern at Oasis Infobyte (AICTE Approved)
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Full Stack Python with Data Analysis Training - QSpiders
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Led and mentored 2-3 interns in data management tasks
                </li>
              </ul>
            </div>
          </div>
          <div className="about-image">
            <div className="about-photo-container">
              <img src="/profile-photo.jpg" alt="Tanveer Kakar" className="about-photo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
