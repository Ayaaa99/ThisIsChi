import React, { useEffect, useState, useRef } from 'react';
import backgroundImg from '../assets/background.png';

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
  const canvasRef = useRef(null);

  // Draw the background image onto the canvas once it loads
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = backgroundImg; 
    img.onload = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  }, []);

  // Sample the color at the cursor position
  const getColorAtPosition = (x, y) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const pixel = ctx.getImageData(x, y, 1, 1).data; // [r, g, b, a]
    return `rgba(${pixel[0]}, ${pixel[1]}, ${pixel[2]}, 0.6)`;
  };

  const handleMouseMove = (e) => {
    const now = Date.now();
    if (now - lastRippleTime.current < 150) return;
    lastRippleTime.current = now;

    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const color = getColorAtPosition(x, y); // 👈 sample color here
    const id = rippleIdRef.current++;

    setRipples((prev) => [...prev, { id, x, y, color }]); // 👈 store color in ripple

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
          style={{
            left: ripple.x,
            top: ripple.y,
            background: ripple.color, // 👈 use sampled color
          }}
        />
      ))}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
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