import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ss2kbna',
        'template_ri2oxpk',
        form.current,
        'ujhogLjhcCY_Iu3Xa'
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <p className="contact-subtitle">
        I'm always interested in hearing about new projects and job opportunities!
      </p>

      <div className="contact-info-row">
        <a href="mailto:chz011@ucsd.edu" className="contact-item">
          <i className="fas fa-envelope"></i>
          <span>chz011@ucsd.edu</span>
        </a>
        <a href="tel:+18582811938" className="contact-item">
          <i className="fas fa-phone"></i>
          <span>+1 (858) 281-1938</span>
        </a>
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <span>San Diego, CA</span>
        </div>
      </div>

      <div className="contact-form-container">
        <h3>Send a Message</h3>
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
    </section>
  );
}

export default Contact;