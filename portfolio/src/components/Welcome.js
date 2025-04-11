import React, { useEffect, useState } from 'react';

function Welcome() {
  const [showContent, setShowContent] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Start the animation sequence
    setShowContent(true);
    setTimeout(() => setShowText(true), 1000);
  }, []);

  return (
    <section className="welcome-section">
      <div className={`welcome-content ${showContent ? 'show' : ''}`}>
        <div className={`welcome-text ${showText ? 'show' : ''}`}>
          <h1>Welcome to My Portfolio</h1>
          <p>I'm a Full Stack Developer</p>
        </div>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </section>
  );
}

export default Welcome; 