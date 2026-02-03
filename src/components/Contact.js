import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ss2kbna', // Replace with your EmailJS service ID
        'template_ri2oxpk', // Replace with your EmailJS template ID
        form.current,
        'nrnFredPaCDrzweyV' // Replace with your EmailJS public API key
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          form.current.reset(); // Clear the form fields
        },
        (error) => {
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>I'm always interested in hearing about new projects and job opportunities.</p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <p>chz011@ucsd.edu</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <p>+1 (858) 281-1938</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>San Diego, CA</p>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/Ayaaa99" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/chi-zhang-6904a3257/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <input type="text" name="user_name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="user_email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;