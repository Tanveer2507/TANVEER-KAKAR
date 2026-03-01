import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <h1 className="greeting">Hi, I'm</h1>
            <h1 className="name">Tanveer Kakar</h1>
            <h2 className="title">Python Developer & Data Analyst</h2>
            <p className="description">
              Aspiring Python developer with hands-on experience in Python, SQL, and web development. 
              Passionate about designing efficient, scalable, and user-friendly applications while writing 
              clean, maintainable code to solve real-world problems.
            </p>
            <div className="home-buttons">
              <a href="#contact" className="btn btn-primary">Hire Me</a>
              <a href="https://drive.google.com/file/d/1sZVGA_uTVs-ymnJVFqXtF3xza6KNuS33/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Download Resume</a>
            </div>
          </div>
          <div className="home-image">
            <div className="profile-photo-container">
              <img src="/profile-photo.jpg" alt="Tanveer Kakar" className="profile-photo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
