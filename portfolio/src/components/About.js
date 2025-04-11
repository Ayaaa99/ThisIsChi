import React from 'react';

function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="profile-container">
          <div className="profile-image">
            {/* Add your profile image here */}
            <div className="image-placeholder"></div>
          </div>
          <div className="profile-text">
            <h3>Hello, I'm [Your Name]</h3>
            <p className="title">Full Stack Developer</p>
            <p className="description">
              I'm a passionate developer with expertise in web development.
              I love creating beautiful and functional applications that solve real-world problems.
            </p>
            <div className="skills">
              <h4>Skills</h4>
              <div className="skills-grid">
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 