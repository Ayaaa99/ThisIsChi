import React from 'react';
import { useNavigate } from 'react-router-dom';

function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "“UC Social Den” - UCSD Student Social Platform",
      description: "A brief description of your first project",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "project1.jpg",
      path: "/project-one"
    },
    {
      id: 2,
      title: "Project Two",
      description: "A brief description of your second project",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      image: "project2.jpg",
      path: "/project-two"
    },
    {
      id: 3,
      title: "Project Three",
      description: "A brief description of your third project",
      technologies: ["React", "Express", "PostgreSQL"],
      image: "project3.jpg",
      path: "/project-three"
    }
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
            <div className="project-image">
              <div className="image-placeholder"></div>
            </div>
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