import React from 'react';
import './Home.css';

const Home = () => {
  const handleDownloadResume = () => {
    // Updated Google Drive file ID
    const fileId = '18PR5NKg27RcHINvj0pF_1LO7VoY19MAI';
    // Direct download link format
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    // Create a temporary anchor element and trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Tanveer_Kakar_Resume.pdf';
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
