import React from 'react';
import './herosection.css';

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/job.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <h1>Empowering Careers with Real Training & Internships</h1>
        <button className="hero-button">Explore Courses</button>
      </div>
    </section>
  );
};

export default HeroBanner;
