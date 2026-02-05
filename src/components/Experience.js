import React from 'react';

function Experience() {
    const experiences = [
    {
        id: 1,
        title: "Software Engineer Coordinator",
        company: "Avalon Healthcare Solutions",
        location: "Tampa, FL",
        duration: "June 2025 - Dec 2025",
        description: [
        "Led full-stack development of the Exclusions Editor module in POET, a health tech platform aiding health plan decisions",
        "Built responsive frontend features with React, TypeScript, and Material UI, including a filterable DataGrid",
        "Created backend API endpoints in Spring to load and save policy rule data using MySQL",
        "Implemented auto-sync between filters and DataGrid for consistent UI and accurate data display",
        "Made 10,000+ exclusion rules accessible across 15+ health plans, improving coverage decisions"
        ],
        technologies: ["React", "TypeScript", "Spring", "Material UI", "MySQL"]
    },
    ];

  return (
    <section id="experience" className="section">
      <h2>Work Experience</h2>
      <div className="experience-container">
        {experiences.map(exp => (
          <div key={exp.id} className="experience-card">
            <div className="experience-header">
              <h3>{exp.title}</h3>
              <p className="duration">{exp.duration}</p>
            </div>
            <div className="experience-subheader">
              <p className="company">{exp.company}</p>
              <p className="location">{exp.location}</p>
            </div>
            <ul className="experience-description">
              {exp.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="experience-technologies">
              {exp.technologies.map((tech, index) => (
                <span key={index} className="skill-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;