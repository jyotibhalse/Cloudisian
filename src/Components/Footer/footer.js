import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h5>About</h5>
        <p>Cloudasian empowers students with the latest IT skills to advance their careers.</p>
      </div>
      <div className="footer-section">
        <h5>Contact</h5>
        <p>info@cloudasian.com</p>
      </div>
      <div className="footer-section">
        <h5>Follow Us</h5>
        <a href="/">Facebook</a>
        <a href="/">Twitter</a>
        <a href="/">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
