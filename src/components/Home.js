import React from 'react';
import './Home.css';

const Home = () => {
  const handleDownloadResume = () => {
    // Use local resume file from public folder
    const link = document.createElement('a');
    link.href = '/Tanveer_Kakar_Resume.pdf';
    link.download = 'Tanveer_Kakar_Resume.pdf';
    link.target = '_blank'; // Open in new tab as fallback
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              <button onClick={handleDownloadResume} className="btn btn-outline">Download Resume</button>
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
