import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectThree() {
  const navigate = useNavigate();

  return (
    <div className="project-page">
      <button className="back-button" onClick={() => navigate('/')}>
        <i className="fas fa-arrow-left"></i> Back to Portfolio
      </button>
      
      <div className="project-content">
        <h1>Project Three</h1>
        <div className="project-header">
          <div className="project-image">
            <div className="image-placeholder"></div>
          </div>
          <div className="project-overview">
            <h2>Overview</h2>
            <p>A brief description of your third project. Explain what it does and what makes it special.</p>
            <div className="project-technologies">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Express</span>
              <span className="tech-tag">PostgreSQL</span>
            </div>
          </div>
        </div>

        <div className="project-details">
          <section>
            <h2>Features</h2>
            <ul>
              <li>Feature 1 description</li>
              <li>Feature 2 description</li>
              <li>Feature 3 description</li>
            </ul>
          </section>

          <section>
            <h2>Technical Details</h2>
            <p>Explain the technical implementation, architecture, and any interesting challenges you faced.</p>
          </section>

          <section>
            <h2>Demo</h2>
            <p>If you have a live demo, you can embed it here or provide a link.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProjectThree; 