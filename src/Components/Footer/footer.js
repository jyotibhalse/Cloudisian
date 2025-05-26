import React from 'react';
import './footer.css';
import Pop from '../PopUp/pop';
const Footer = () => {
  return (
    <>
    <Pop/>
    <footer className="footer">
      <div className="footer-section">
        <h5>About</h5>
        <p>Cloudasian empowers students with the latest IT skills to advance their careers.</p>
        <p><a href='/about'>Learn more <b>AboutUs</b></a></p>
      </div>
      <div className="footer-section">
        <h5>Contact</h5>
        <p>info@cloudisian.com</p>
        
      </div>
      <div className="footer-section">
        <h5>Follow Us</h5>
        <a href="/">Facebook</a>
        <a href="/">Twitter</a>
        <a href="https://www.linkedin.com/company/cloudisian/posts/?feedView=all">LinkedIn</a>
      </div>
    </footer>
    </>
  );
};

export default Footer;
