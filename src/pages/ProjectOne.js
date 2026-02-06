import React from 'react';
import { useNavigate } from 'react-router-dom';
import project_one_img from '../assets/project_one_img.png';

function ProjectOne() {
  const navigate = useNavigate();

  return (
    <div className="project-page">

      
      <div className="project-content">
        <h1>UC Social Den</h1>
        <div className="project-header">
          <div className="project-image">
            <img src={project_one_img} alt="UC Social Den" className="project-image" />
          </div>
          <div className="project-overview">
            <h2>Overview</h2>
            <p>
              UC Social Den is a campus social platform for UCSD students to create, join, and engage with events. 
              It fosters student connections and supports on-campus event organization with a secure and user-friendly interface.
            </p>
            <div className="project-technologies">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">API</span>
              <span className="skill-tag">MongoDB</span>
            </div>
          </div>
        </div>

        <div className="project-details">
          <section>
            <h2>Features</h2>
            <ul>
              <li>Implemented event detail pages and interactive join functionality with real-time feedback.</li>
              <li>Designed responsive UI/UX for both mobile and desktop, resolving layout and feedback issues.</li>
              <li>Delivered a secure platform supporting on-campus event organization.</li>
            </ul>
          </section>

          <section>
            <h2>Technical Details</h2>
            <p>
              The platform was built using React for the frontend, Node.js for the backend, and MongoDB for the database. 
              It features real-time feedback using WebSocket integration and a responsive design for seamless user experience 
              across devices.
            </p>
          </section>

          <section>
            <h2>Demo</h2>
            <p>
              Check out the project on <a href="https://github.com/Ayaaa99/UCSocialDen" target="_blank" rel="noopener noreferrer">GitHub</a>.
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

export default ProjectOne;