import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectTwo() {
  const navigate = useNavigate();

  return (
    <div className="project-page">

      <div className="project-content">
        <h1>AI Taylor Swift Lyrics Generator</h1>
        <div className="project-header">
          <div className="project-image">
            <img src="ai-lyrics-generator.jpg" alt="AI Lyrics Generator" className="project-image" />
          </div>
          <div className="project-overview">
            <h2>Overview</h2>
            <p>
              This project is a machine learning model designed to generate song lyrics in Taylor Swift’s style. 
              It uses a GPT-2-like transformer to create creative and nuanced lyrics, achieving stylistic accuracy.
            </p>
            <div className="project-technologies">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">PyTorch</span>
              <span className="tech-tag">GPT-2</span>
            </div>
          </div>
        </div>

        <div className="project-details">
          <section>
            <h2>Features</h2>
            <ul>
              <li>Preprocessed a dataset of Taylor Swift’s lyrics using GPT-2 subword tokenization.</li>
              <li>Built and trained a GPT-2-like transformer, optimizing hyperparameters for stylistic accuracy.</li>
              <li>Generated creative, nuanced lyrics, achieving a project score of 96/100.</li>
            </ul>
          </section>

          <section>
            <h2>Technical Details</h2>
            <p>
              The model was built using PyTorch and GPT-2 architecture. It preprocesses lyrics using subword tokenization 
              for better performance over character-level tokenization. The training process involved optimizing hyperparameters 
              to ensure the generated lyrics closely match Taylor Swift’s style.
            </p>
          </section>

          <section>
            <h2>Demo</h2>
            <p>
              Check out the project on <a href="https://github.com/Ayaaa99/AI_TSlyrics_generator" target="_blank" rel="noopener noreferrer">GitHub</a>.
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

export default ProjectTwo;