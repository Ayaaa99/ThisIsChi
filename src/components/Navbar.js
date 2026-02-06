import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringNav, setIsHoveringNav] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientY <= 50) {
        setIsVisible(true);
      } else if (e.clientY > 100 && !isHoveringNav) {
        setIsVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHoveringNav]);

  const handleNavClick = (section) => {
    if (location.pathname !== '/') {
      navigate('/');
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
    <header 
      className={`App-header ${isVisible ? 'show' : 'hide'}`}
      onMouseEnter={() => setIsHoveringNav(true)}
      onMouseLeave={() => setIsHoveringNav(false)}
    >
      <nav className="nav-menu">
        <button className="nav-link" onClick={() => handleNavClick('about')}>
          About
        </button>
        <button className="nav-link" onClick={() => handleNavClick('experience')}>
          Experience
        </button>
        <button className="nav-link" onClick={() => handleNavClick('projects')}>
          Projects
        </button>
        <button className="nav-link" onClick={() => handleNavClick('contact')}>
          Contact
        </button>
      </nav>
    </header>
  );
}

export default Navbar;