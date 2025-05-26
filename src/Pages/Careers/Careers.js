import React, { useState } from "react";
import "./Careers.css";
import { Card, Carousel, Button } from "react-bootstrap";
import careerBanner from '../../Images/img2.jpg';
import careerBanner1 from '../../Images/cd2.jpg';
import careerBanner2 from '../../Images/img6.jpg';

const careerPaths = [
  {
    category: "IT / Software",
    subcategories: ["Web Developer", "Software Engineer", "DevOps Engineer"]
  },
  {
    category: "Management",
    subcategories: ["Project Manager", "HR Manager", "Operations Manager"]
  },
  {
    category: "Data Science",
    subcategories: ["Data Analyst", "Data Scientist", "ML Engineer"]
  },
  {
    category: "Education",
    subcategories: ["Teacher", "Professor", "Counselor"]
  },
  {
    category: "Marketing & Sales",
    subcategories: ["Digital Marketing", "Sales Executive", "SEO Specialist"]
  },
  {
    category: "Healthcare",
    subcategories: ["Doctor", "Nurse", "Pharmacist"]
  },
  {
    category: "Freelancing",
    subcategories: ["Content Writer", "Graphic Designer", "Freelance Developer"]
  }
];

const trendingRoles = [
  "AI/ML Engineer",
  "Cybersecurity Analyst",
  "UX Designer",
  "Digital Marketer",
  "Cloud Architect"
];

export default function CareerPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="career-container">
      
      {/* Career Highlights Carousel */}
      <section className="section">
  <h2 className="section-title">Career Highlights</h2>
  <Carousel interval={3000} pause={false} controls indicators>
    <Carousel.Item>
      <img className="d-block w-100" src={careerBanner} alt="Career Banner 1" />
      <Carousel.Caption>
        <h3>Technology Careers</h3>
        <p>Unlock the world of software, AI, and cloud innovation.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img className="d-block w-100" src={careerBanner1} alt="Career Banner 2" />
      <Carousel.Caption>
        <h3>Creative & Marketing</h3>
        <p>Design your future with skills in digital marketing and UX/UI.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img className="d-block w-100" src={careerBanner2} alt="Career Banner 3" />
      <Carousel.Caption>
        <h3>Healthcare & Public Service</h3>
        <p>Make a difference with careers in health, education, and law.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</section>

      {/* Intro Section */}
      <section className="intro">
        <h1>Explore Your Career Path</h1>
        <p>Kickstart your career with our curated paths, tools, and success stories.</p>
      </section>

      {/* Career Paths with Dropdown */}
      <section className="section">
        <h2 className="section-title">Career Paths by Domain</h2>
        <div className="grid-container">
          {careerPaths.map((path, index) => (
            <Card key={index} className="card-hover dropdown-card">
              <Card.Body className="card-content" onClick={() => toggleDropdown(index)}>
                <p className="card-text dropdown-title">
                  {path.category} <span className="dropdown-arrow">{activeIndex === index ? "▲" : "▼"}</span>
                </p>
                {activeIndex === index && (
                  <ul className="subcategory-list">
                    {path.subcategories.map((sub, idx) => (
                      <li key={idx} className="subcategory-item">{sub}</li>
                    ))}
                  </ul>
                )}
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
        <Button className="cta-button"><a href="/training">Explore Internships</a></Button>
      </section>
      
    </div>
  );
}
