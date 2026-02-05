import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectThree() {
  const navigate = useNavigate();

  return (
    <div className="project-page">
      
      <div className="project-content">
        <h1>Palm & Prophecy</h1>
        <div className="project-header">
          <div className="project-image">
            <img src="palm-and-prophecy.png" alt="Palm & Prophecy" className="project-image" />
          </div>
          <div className="project-overview">
            <h2>Overview</h2>
            <p>
              Palm & Prophecy is a fortune-telling website featuring palm reading, fortune cookies, and zodiac matching. 
              It provides an interactive and fun experience for users, combining creative design with engaging functionality.
            </p>
            <div className="project-technologies">
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">Figma</span>
            </div>
          </div>
        </div>

        <div className="project-details">
          <section>
            <h2>Features</h2>
            <ul>
              <li>Designed a user-focused website prototype and interactive UI in Figma.</li>
              <li>Built the palm-reading page structure in HTML and CSS with a teammate.</li>
              <li>Created a JavaScript function for random fortune generation, adding interactivity.</li>
              <li>Included zodiac matching and fortune cookie features for a complete experience.</li>
            </ul>
          </section>

          <section>
            <h2>Technical Details</h2>
            <p>
              The website was designed with a focus on user experience, starting with a prototype in Figma. 
              The frontend was implemented using HTML, CSS, and JavaScript, with interactive features like 
              random fortune generation and zodiac matching. The project was recognized as one of the top 5 
              winning teams out of 20 in the course.
            </p>
          </section>

          <section>
            <h2>Demo</h2>
            <div className="demo-window">
              <iframe 
                src="https://cse110-sp23-group20.github.io/fortune-teller/source/home-page/" 
                title="UC Social Den Demo" 
                className="demo-iframe"
                allowFullScreen
              ></iframe>
            </div>
            <p>
              Check out the project on <a href="https://github.com/Ayaaa99/fortune-teller" target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>
          </section>
        </div>
      </div>

      <button className="back-button" onClick={() => navigate('/')}>
        <i className="fas fa-arrow-left"></i> Back to Portfolio
      </button>
    </div>
  );
}

export default ProjectThree;