import React from 'react';
import './Training.css';
import Web from '../../Images/img18.jpg'
import Frontend from '../../Images/frontend.jpg'
import Backend from '../../Images/AIWebinar.jpg';
import Remote from '../../Images/img20.jpg'
import Digital from '../../Images/img7.jpg'
import UI from '../../Images/img10.jpg';
import Data from '../../Images/img11.jpg'
import Android from '../../Images/img9.jpg'
import AI from '../../Images/img16.jpg'
import Frontend1 from '../../Images/img8.jpg'
import Node from '../../Images/node.jpg'
import Remote1 from '../../Images/img14.jpg'
import Web1 from '../../Images/Hackathon.jpg'
import Backend1 from '../../Images/img17.jpg'
import AI1 from '../../Images/cd5.jpg'

const TrainingPage = () => {
  const individualTrainings = [
  {
    title: "Full Stack Web Development",
    duration: "3 Months",
    image: Frontend,
  },
  {
    title: "Data Science with Python",
    duration: "2.5 Months",
    image: Data,
  },
  {
    title: "Digital Marketing",
    duration: "2 Months",
    image: Android,
  },
  {
    title: "UI/UX Design",
    duration: "1.5 Months",
    image: UI,
  },
  {
    title: "Android App Development",
    duration: "2 Months",
    image: Digital,
  },
  {
    title: "Artificial Intelligence Webinar",
    duration: "1 Month",
    image: AI,
  },
  {
    title: "Frontend Frameworks (React, Vue)",
    duration: "2 Months",
    image: Frontend1,
  },
  {
    title: "Backend APIs with Node.js",
    duration: "2 Months",
    image: Node,
  },
  {
    title: "Remote Work Essentials",
    duration: "1 Month",
    image: Remote1,
  },
  {
    title: "Cloud Computing Fundamentals",
    duration: "2 Months",
    image: Web,
  },
  {
    title: "Machine Learning Basics",
    duration: "2.5 Months",
    image: Backend1,
  },
  {
    title: "SEO & Content Strategy",
    duration: "1.5 Months",
    image: Web1,
  },
  {
    title: "Mobile Game Development",
    duration: "3 Months",
    image: Android,
  },
  {
    title: "Cloud Native Development",
    duration: "2 Months",
    image: Web,
  },
  {
    title: "Blockchain Fundamentals",
    duration: "1.5 Months",
    image: Backend,
  },
  {
    title: "Advanced Python Programming",
    duration: "3 Months",
    image: Data,
  }
];

const corporateTrainings = [
  {
    title: "Custom Modules",
    description: "Tailored to your company's specific needs.",
    image: Web1,
  },
  {
    title: "Onsite & Remote",
    description: "Training available at your location or online.",
    image: Remote,
  },
  {
    title: "Leadership Programs",
    description: "Boost team productivity and leadership skills.",
    image: Backend,
  },
  {
    title: "Team Building Workshops",
    description: "Interactive sessions to improve team dynamics.",
    image: Data,
  },
  {
    title: "Technology Upskilling",
    description: "Upgrade your staff's skills in latest technologies.",
    image: Frontend1,
  },
  {
    title: "Cybersecurity Training",
    description: "Protect your company’s data with expert training.",
    image: UI,
  },
  {
    title: "Agile & Scrum Mastery",
    description: "Improve your team’s project management skills.",
    image: Backend1,
  },
  {
    title: "Effective Communication",
    description: "Enhance interpersonal and communication skills.",
    image: Node,
  },
  {
    title: "Data Analytics for Business",
    description: "Leverage data to drive business decisions.",
    image: Data,
  },
  {
    title: "Customer Service Excellence",
    description: "Train teams to deliver exceptional customer support.",
    image: UI,
  },
  {
    title: "Change Management",
    description: "Help your team adapt to organizational change smoothly.",
    image: AI1,
  },
  {
    title: "Innovation & Creativity Workshops",
    description: "Foster innovation and creative problem solving.",
    image: Digital,
  },
  
];

  return (
    <div className="tp-container">
      {/* Hero Section */}
      <section className="tp-hero">
        <video
          className="tp-background-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="./videos/cd4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="tp-hero-content">
          <h1>Empowering Careers with Real Training & Internships</h1>
          <button className="tp-cta-button">Explore Courses</button>
        </div>
      </section>

      {/* Individual Training */}
      <section className="tp-section">
        <h2 className="tp-heading">👩‍🎓 Individual Training</h2>
        <p className="tp-description">
          Boost your career with expert-led training for students, freshers, and job seekers. Courses include live projects and job-ready skills.
        </p>
        <div className="tp-course-grid">
          {individualTrainings.map((course, idx) => (
            <div key={idx} className="tp-course-card">
              <img src={course.image} alt={course.title} className="tp-card-img" />
              <h3>{course.title}</h3>
              <p>Duration: {course.duration}</p>
              <button className="tp-enroll-btn">Enroll Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Training */}
      <section className="tp-section">
        <h2 className="tp-heading">🏢 Corporate Training</h2>
        <p className="tp-description">
          Customized corporate training to enhance team performance with flexible formats and expert guidance.
        </p>
        <div className="tp-corporate-grid">
          {corporateTrainings.map((item, idx) => (
            <div key={idx} className="tp-corporate-card">
              <img src={item.image} alt={item.title} className="tp-card-img" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="tp-inquiry-section">
        <div className="tp-inquiry-container">
          <h2 className="tp-heading">📩 Quick Inquiry</h2>
          <form className="tp-inquiry-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Interested Course / Training" />
            <textarea rows="4" placeholder="Your Message"></textarea>
            <button type="submit" className="tp-submit-btn">Submit Inquiry</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;
