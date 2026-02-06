import React from 'react';

function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="profile-container">
          <img src="/profile_image.jpg" alt="Chi Zhang" className="profile-img" />
          <div className="profile-text">
            <h3>Hello, I'm Chi Zhang</h3>
            <p className="title">Full Stack Developer & UIUX Designer</p>
            <p className="description">
              Hi, I'm Chi, a passionate software engineer based in San Diego.
              I'm currently pursuing a Master of Science in Computer Engineering at UC San Diego, with a strong foundation in both computer engineering and cognitive science design & interaction.
              I enjoy building systems that are not only technically robust but also intuitive and user-centered.
              <br /><br />
              Outside of coding, you'll find me rock climbing, drawing, listening to K-pop, or knitting.
            </p>

            <div className="profile-links">
              <a href="/resume.pdf" download className="profile-btn">
                <i className="fas fa-file-alt"></i> Resume
              </a>
              <a href="https://github.com/Ayaaa99" target="_blank" rel="noopener noreferrer" className="profile-btn">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="https://www.linkedin.com/in/chi-zhang-6904a3257/" target="_blank" rel="noopener noreferrer" className="profile-btn">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>

            <div className="skills">
              <h4>Skills</h4>
              <div className="skills-grid">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">C/C++</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">PyTorch</span>
                <span className="skill-tag">Spring</span>
                <span className="skill-tag">JavaScript/TypeScript</span>
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">Go</span>
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