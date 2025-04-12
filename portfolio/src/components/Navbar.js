import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (currentScrollY > lastScrollY && currentScrollY > viewportHeight * 0.8) {
        // Scrolling down
        setIsVisible(true);
      } else {
        // Scrolling up
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]); // Dependency array includes lastScrollY

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
    <header className={`App-header ${isVisible ? 'show' : 'hide'}`}>
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
          Resume
        </a>
      </nav>
    </header>
  );
}

export default Navbar;