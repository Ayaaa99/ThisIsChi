import React, { useEffect, useState, useRef } from 'react';

function Welcome() {
  const [showContent, setShowContent] = useState(false);
  const [showText, setShowText] = useState(false);
  const [ripples, setRipples] = useState([]);
  const sectionRef = useRef(null);
  const rippleIdRef = useRef(0);

  useEffect(() => {
    setShowContent(true);
    setTimeout(() => setShowText(true), 1000);
  }, []);

  const lastRippleTime = useRef(0);

  const handleMouseMove = (e) => {
    const now = Date.now();
    if (now - lastRippleTime.current < 200) return; // Limit ripple creation to every 100ms
    lastRippleTime.current = now;

    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = rippleIdRef.current++;

    setRipples((prev) => [...prev, { id, x, y }]);

    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 1000);
  };

  return (
    <section
      className="welcome-section"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}

      <div className={`welcome-content ${showContent ? 'show' : ''}`}>
        <div className={`welcome-text ${showText ? 'show' : ''}`}>
          <h1>Welcome to Chi's website</h1>
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