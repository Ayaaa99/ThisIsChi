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
            <h3>Hello, I'm Chi Zhang</h3>
            <p className="title">Full Stack Developer & UIUX Designer</p>
            <p className="description">
              I'm a passionate software engineer and computer engineering graduate based in San Diego, CA. 
              I am currently pursuing a Master of Science in Computer Engineering at the University of California, San Diego, 
              with a strong foundation in both Computer Engineering and Cognitive Science Design & Interaction.
            </p>
            <div className="skills">
              <h4>Skills</h4>
              <div className="skills-grid">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">PyTorch</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">C/C++</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Adobe Illustrator</span>
                <span className="skill-tag">Photoshop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;