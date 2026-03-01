import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Student Result Management System',
      description: 'Developed a Python-based result management system, reducing manual result processing time by 60%. Designed relational database schemas using SQL and automated grade calculation with backend Python logic.',
      technologies: ['Python', 'Django', 'SQL', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Tanveer2507/Students-Result-Management-System',
      demo: 'https://github.com/Tanveer2507/Students-Result-Management-System',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop'
    },
    {
      title: 'Car Price Prediction Web Application',
      description: 'Built a machine learning model using scikit-learn, achieving 85%+ prediction accuracy. Developed a Streamlit web application for real-time car price prediction with a clean and responsive UI.',
      technologies: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Scikit-learn'],
      github: 'https://github.com/Tanveer2507/Car_Price_Prediction_Model_App',
      demo: 'https://github.com/Tanveer2507/Car_Price_Prediction_Model_App',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&h=300&fit=crop'
    },
    {
      title: 'Data Analysis Dashboard',
      description: 'Created interactive data visualization dashboard for analyzing business metrics. Implemented real-time data processing and automated reporting features using Python and Power BI.',
      technologies: ['Python', 'Pandas', 'Power BI', 'SQL'],
      github: 'https://github.com/Tanveer2507/Data-Analysis-Dashboard',
      demo: 'https://github.com/Tanveer2507/Data-Analysis-Dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop'
    },
    {
      title: 'Web Development Projects',
      description: 'Completed multiple web development projects during AICTE-approved internship at Oasis Infobyte. Delivered high-quality, responsive websites with modern design principles.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/Tanveer2507',
      demo: 'https://github.com/Tanveer2507',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop'
    },
    {
      title: 'Investment Management System',
      description: 'Developed a comprehensive investment management system to track and analyze investment portfolios. Implemented features for portfolio management, transaction tracking, and performance analytics with real-time data visualization.',
      technologies: ['Python', 'Django', 'SQL', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Tanveer2507/Investment-Management-System',
      demo: 'https://github.com/Tanveer2507/Investment-Management-System',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&h=300&fit=crop'
    },
    {
      title: 'Breast Cancer Diagnosis Predictor',
      description: 'Developed a machine learning model to predict breast cancer diagnosis using medical data. Implemented classification algorithms with high accuracy for early detection and diagnosis support.',
      technologies: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'NumPy'],
      github: 'https://github.com/Tanveer2507/Breast_Cancer_Diagnosis_Predictor',
      demo: 'https://github.com/Tanveer2507/Breast_Cancer_Diagnosis_Predictor',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop'
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title" data-text="Portfolio">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" title="Live Demo">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
