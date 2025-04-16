import React from 'react';
import { useNavigate } from 'react-router-dom';

function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "UC Social Den",
      description: "A campus social platform for UCSD students to create, join, and engage with events.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "uc-social-den.jpg", // Replace with the actual image file name
      path: "/project-one", // Match the route in App.js
    },
    {
      id: 2,
      title: "AI Taylor Swift Lyrics Generator",
      description: "A machine learning model to generate song lyrics in Taylor Swift’s style.",
      technologies: ["Python", "PyTorch", "GPT-2"],
      image: "ai-lyrics-generator.jpg", // Replace with the actual image file name
      path: "/project-two", // Match the route in App.js
    },
    {
      id: 3,
      title: "Palm & Prophecy",
      description: "A fortune-telling website with palm reading, fortune cookies, and zodiac matching.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "palm-and-prophecy.jpg", // Replace with the actual image file name
      path: "/project-three", // Match the route in App.js
    },
  ];

  const handleProjectClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt="project image picture" className="project-card-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <button 
                className="project-link"
                onClick={() => handleProjectClick(project.path)}
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;