import React from 'react';
import './about.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="about-content">
        <h1>About Us</h1>
        <p>
          Cloudasian is dedicated to providing high-quality online education in IT and technology,
          empowering learners to achieve their career goals.
        </p>
      </section>

      <section className="info-section">
        <div className="info-card">
          <img src="https://cdn-icons-png.flaticon.com/512/3600/3600973.png" alt="Mission" />
          <h3>Our Mission</h3>
          <p>To deliver accessible, affordable, and industry-relevant education that bridges the skills gap in the tech industry.</p>
        </div>

        <div className="info-card">
          <img src="https://cdn-icons-png.flaticon.com/512/3595/3595455.png" alt="Vision" />
          <h3>Our Vision</h3>
          <p>To be the leading online learning platform for IT and technology professionals worldwide.</p>
        </div>

        <div className="info-card">
          <img src="https://cdn-icons-png.flaticon.com/512/3142/3142457.png" alt="Values" />
          <h3>Our Values</h3>
          <p>Excellence, integrity and innovation in all aspects of our educational offerings and interactions.</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
