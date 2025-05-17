import React from "react";
import "./Careers.css";
import { Card, Carousel, Button } from "react-bootstrap";
import careerBanner from '../../Images/img2.jpg';
import careerBanner1 from '../../Images/cd2.jpg';
import careerBanner2 from '../../Images/img6.jpg';

const careerPaths = [
  "IT / Software",
  "Management",
  "Government Sector",
  "Data Science",
  "Education",
  "Marketing & Sales",
  "Law",
  "Healthcare",
  "Freelancing"
];

const trendingRoles = [
  "AI/ML Engineer",
  "Cybersecurity Analyst",
  "UX Designer",
  "Digital Marketer",
  "Cloud Architect"
];

export default function CareerPage() {
  return (
    <div className="career-container">
      
      {/* Career Highlights Carousel */}
      <section className="section">
        <h2 className="section-title">Career Highlights</h2>
        <Carousel interval={3000} pause={false} controls indicators>
          {[careerBanner, careerBanner1, careerBanner2].map((img, idx) => (
            <Carousel.Item key={idx}>
              <img className="d-block w-100" src={img} alt={`Career Banner ${idx + 1}`} />
              <Carousel.Caption>
                <h3>Explore Career Possibilities</h3>
                <p>Discover trending roles and growth paths tailored for you.</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Intro Section */}
      <section className="intro">
        <h1>Explore Your Career Path</h1>
        <p>Kickstart your career with our curated paths, tools, and success stories.</p>
      </section>

      {/* Career Paths */}
      <section className="section">
        <h2 className="section-title">Career Paths by Domain</h2>
        <div className="grid-container">
          {careerPaths.map((path, index) => (
            <Card key={index} className="card-hover">
              <Card.Body className="card-content">
                <p className="card-text">{path}</p>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>

      {/* Trending Careers */}
      <section className="section">
        <h2 className="section-title">Trending Careers in 2025</h2>
        <div className="trending-container">
          {trendingRoles.map((role, index) => (
            <div key={index} className="trending-tag">
              {role}
            </div>
          ))}
        </div>
      </section>

      {/* Career Planning Checklist */}
      <section className="section">
        <h2 className="section-title">Career Planning Checklist</h2>
        <ol className="checklist">
          <li>Self-Assessment</li>
          <li>Research Job Roles</li>
          <li>Upskill & Train</li>
          <li>Apply for Jobs & Internships</li>
          <li>Prepare for Interviews</li>
        </ol>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <p className="cta-text">Ready to launch your career?</p>
        <Button className="cta-button">Explore Internships</Button>
      </section>
      
    </div>
  );
}
