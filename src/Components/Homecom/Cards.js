// import React from "react";
// import "./Cards.css";
// import Secondcard from './Secondcard';
// import CompImage from '../../Images/comp.png'
// const HomePage = () => {
//   return (
//     <div>
//       <section className="hero">
//         <div className="hero-text">
//           <h1>welcome to my website</h1>
//           <h1>Build Your IT Skills with Cloudasian</h1>
//           <p>
//             Unlock your potential with online courses in Cloud Computing, AI,
//             DevOps, and more
//           </p>
//           <a href="/courses" className="browse-btn">
//             Browse Courses
//           </a>
//         </div>
//         {/* <div className="hero-image">💻</div> */}
//         <div className="hero-image">
//           <img src={"./home.jpg"} alt="Computer Course" />
//         </div>
//       </section>

//       <h2 className="section-title">Featured Courses</h2>
//       <div className="course-grid">
//         <div className="course-card">
//           <div className="course-header">
//             <img
//               src="CompImage"
//               alt="Cloud Computing"
//               className="course-img"
//             />
//             <h3>Quantum</h3>
//             </div>
//             <p>John Doe</p>
//             <p>40 Courses</p>
//             <a href="/" className="enroll-btn">
//               Enroll Now
//             </a>
          
//         </div>
//         <div className="course-card">
//           <div className="course-header">
//             <img src="./ai.png" alt="AI & ML" className="course-img" />
//             <h3>AI & Machine Learning</h3>
//             </div>
//             <p>steve smith</p>
//             <p>194 Courses</p>
//             <a href="/" className="enroll-btn">
//               Enroll Now
//             </a>
          
//         </div>
//         <div className="course-card">
//           <div className="course-header">
//             <img src="./devops.png" alt="DevOps" className="course-img" />
//             <h3>DevOps</h3>
//             </div>
//             <p>Alice Johnson</p>
//             <p>85 Courses</p>
//             <a href="/" className="enroll-btn">
//               Enroll Now
//             </a>
          
//         </div>
//         <div className="course-card">
//           <div className="course-header">
//             <img
//               src="./cyber-security.png"
//               alt="Cybersecurity"
//               className="course-img"
//             />
//             <h3>Cybersecurity</h3>
//             </div>
//             <p>Bob Brown</p>
//             <p>368 Courses</p>
//             <a href="/" className="enroll-btn">
//               Enroll Now
//             </a>
          
//         </div>
//       </div>
//       <Secondcard/>

//       <h2 className="section-title">What We Offer</h2>
// <div className="offer-grid">
//   <div className="offer-item">
//     <img src="graduated.png" alt="Expert-led Training" className="offer-icon" />
//     <h4>Expert-led Training</h4>
//     <p>Learn from certified industry professionals</p>
//   </div>
//   <div className="offer-item">
//     <img src="./business.png" alt="Comprehensive Curriculum" className="offer-icon" />
//     <h4>Comprehensive Curriculum</h4>
//     <p>Cover essential topics and tools</p>
//   </div>
//   <div className="offer-item">
//     <img src="./business-growth.png" alt="Career Advancement" className="offer-icon" />
//     <h4>Career Advancement</h4>
//     <p>Get assistance with job placement</p>
//   </div>
//   <div className="offer-item">
//     <img src="./big-data-analytics.png" alt="Learn Anytime, Anywhere" className="offer-icon" />
//     <h4>Learn Anytime, Anywhere</h4>
//     <p>Flexible self-paced learning</p>
//   </div>
// </div>

//     </div>
//   );
// };

// export default HomePage;


import React from "react";
import "./Cards.css";
import Secondcard from './Secondcard';

// Import all images properly
import CompImage from '../../Images/comp.png';
import AiImage from '../../Images/ai.png';
import DevopsImage from '../../Images/devops.png';
import CyberSecurityImage from '../../Images/cyber-security.png';
import HomeImage from '../../Images/home.jpg';

import GraduateIcon from '../../Images/graduated.png';
import BusinessIcon from '../../Images/business.png';
import GrowthIcon from '../../Images/business-growth.png';
import AnalyticsIcon from '../../Images/big-data-analytics.png';

const HomePage = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to my website</h1>
          <h1>Build Your IT Skills with Cloudasian</h1>
          <p>
            Unlock your potential with online courses in Cloud Computing, AI,
            DevOps, and more
          </p>
          <a href="/courses" className="browse-btn">
            Browse Courses
          </a>
        </div>
        <div className="hero-image">
          <img src={HomeImage} alt="Computer Course" />
        </div>
      </section>

      <h2 className="section-title">Featured Courses</h2>
      <div className="course-grid">
        <div className="course-card">
          <div className="course-header">
            <img src={CompImage} alt="Cloud Computing" className="course-img" />
            <h3>Quantum</h3>
          </div>
          <p>John Doe</p>
          <p>40 Courses</p>
          <a href="/" className="enroll-btn">Enroll Now</a>
        </div>

        <div className="course-card">
          <div className="course-header">
            <img src={AiImage} alt="AI & ML" className="course-img" />
            <h3>AI & Machine Learning</h3>
          </div>
          <p>Steve Smith</p>
          <p>194 Courses</p>
          <a href="/" className="enroll-btn">Enroll Now</a>
        </div>

        <div className="course-card">
          <div className="course-header">
            <img src={DevopsImage} alt="DevOps" className="course-img" />
            <h3>DevOps</h3>
          </div>
          <p>Alice Johnson</p>
          <p>85 Courses</p>
          <a href="/" className="enroll-btn">Enroll Now</a>
        </div>

        <div className="course-card">
          <div className="course-header">
            <img src={CyberSecurityImage} alt="Cybersecurity" className="course-img" />
            <h3>Cybersecurity</h3>
          </div>
          <p>Bob Brown</p>
          <p>368 Courses</p>
          <a href="/" className="enroll-btn">Enroll Now</a>
        </div>
      </div>

      <Secondcard />

      <h2 className="section-title">What We Offer</h2>
      <div className="offer-grid">
        <div className="offer-item">
          <img src={GraduateIcon} alt="Expert-led Training" className="offer-icon" />
          <h4>Expert-led Training</h4>
          <p>Learn from certified industry professionals</p>
        </div>
        <div className="offer-item">
          <img src={BusinessIcon} alt="Comprehensive Curriculum" className="offer-icon" />
          <h4>Comprehensive Curriculum</h4>
          <p>Cover essential topics and tools</p>
        </div>
        <div className="offer-item">
          <img src={GrowthIcon} alt="Career Advancement" className="offer-icon" />
          <h4>Career Advancement</h4>
          <p>Get assistance with job placement</p>
        </div>
        <div className="offer-item">
          <img src={AnalyticsIcon} alt="Learn Anytime, Anywhere" className="offer-icon" />
          <h4>Learn Anytime, Anywhere</h4>
          <p>Flexible self-paced learning</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
