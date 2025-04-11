import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the height of the viewport
      const viewportHeight = window.innerHeight;
      // Get the current scroll position
      const scrollPosition = window.scrollY;
      
      // Show navbar when scrolled past 80% of the viewport height
      setIsVisible(scrollPosition > viewportHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means the effect only runs once on mount

  const handleNavClick = (section) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`App-header ${isVisible ? 'show' : 'hide'}`}>
      <h1>Chi Zhang</h1>
      <nav className="nav-menu">
        <button className="nav-link" onClick={() => handleNavClick('about')}>
          About
        </button>
        <button className="nav-link" onClick={() => handleNavClick('projects')}>
          Projects
        </button>
        <button className="nav-link" onClick={() => handleNavClick('contact')}>
          Contact
        </button>
        <a href="/resume.pdf" download className="resume-link">
          <i className="fas fa-download"></i> Resume
        </a>
      </nav>
    </header>
  );
}

export default Navbar; 