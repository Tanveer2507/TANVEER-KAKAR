import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo" onClick={handleLogoClick}>
          <img src="/logo.svg" alt="TK Logo" className="logo-img" />
          <div>
            <span className="logo-text">Tanveer</span>
            <span className="logo-accent">Kakar</span>
          </div>
        </div>

        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <button className="nav-link" onClick={() => scrollToSection('home')}>Home</button>
          <button className="nav-link" onClick={() => scrollToSection('about')}>About</button>
          <button className="nav-link" onClick={() => scrollToSection('resume')}>Resume</button>
          <button className="nav-link" onClick={() => scrollToSection('projects')}>Projects</button>
          <button className="nav-link" onClick={() => scrollToSection('skills')}>Skills</button>
          <button className="nav-link" onClick={() => scrollToSection('contact')}>Contact</button>
          
          <button className="theme-toggle" onClick={toggleDarkMode} aria-label="Toggle dark mode">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
