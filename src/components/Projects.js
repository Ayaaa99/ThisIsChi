import React from 'react';
import { useNavigate } from 'react-router-dom';
import project_one_img from '../assets/project_one_img.png';
import project_two_img from '../assets/project_two_img.png';
import project_three_img from '../assets/project_three_img.png';


function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "UC Social Den",
      description: "A campus social platform for UCSD students to create, join, and engage with events.",
      technologies: ["React", "Node.js", "API", "MongoDB"],
      image: project_one_img,
      path: "/project-one",
    },
    {
      id: 2,
      title: "AI Taylor Swift Lyrics Generator",
      description: "A machine learning model to generate song lyrics in Taylor Swift's style.",
      technologies: ["Python", "PyTorch", "GPT-2", "Transformer"],
      image: project_two_img,
      path: "/project-two",
    },
    {
      id: 3,
      title: "Palm & Prophecy",
      description: "A fortune-telling website with palm reading, fortune cookies, and zodiac matching.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: project_three_img,
      path: "/project-three",
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
          <div 
            key={project.id} 
            className="project-card"
            onClick={() => handleProjectClick(project.path)}
          >
            <img src={project.image} alt="project image picture" className="project-card-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="skill-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;