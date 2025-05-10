import React from "react";
import "./Cards.css";

const HomePage = () => {
  return (
    <div>

      <div className="course-grid">
        <div className="course-card">
          <div className="course-header">
            <img
              src="./web.png"
              alt="Web Development"
              className="course-img"
            />
            <h3>Web Development</h3>
            </div>
            <p>John Doe</p>
            <p>40 Courses</p>
            <a href="/" className="enroll-btn">
              Enroll Now
            </a>
          
        </div>
        <div className="course-card">
          <div className="course-header">
            <img src="./upload.png" alt="Data analytics" className="course-img" />
            <h3>Data analytics</h3>
            </div>
            <p>steve smith</p>
            <p>194 Courses</p>
            <a href="/" className="enroll-btn">
              Enroll Now
            </a>
          
        </div>
        <div className="course-card">
          <div className="course-header">
            <img src="./app-programming.png" alt="Moblie" className="course-img" />
            <h3>Moblie</h3>
            </div>
            <p>Alice Johnson</p>
            <p>85 Courses</p>
            <a href="/" className="enroll-btn">
              Enroll Now
            </a>
          
        </div>
        <div className="course-card">
          <div className="course-header">
            <img
              src="./reseller.png"
              alt="Quantum"
              className="course-img"
            />
            <h3>Salesforce</h3>
            </div>
            <p>Bob Brown</p>
            <p>368 Courses</p>
            <a href="/" className="enroll-btn">
              Enroll Now
            </a>
          
        </div>
        
      </div>

      

    </div>
  );
};

export default HomePage;
