import React, { useState } from "react";
import "./Recruitments.css";
import frontend from "../../Images/cd1.jpg";
import backend from "../../Images/backend.jpg";
import Designer from "../../Images/Hackathon.jpg";
import Android from "../../Images/img9.jpg";
import AI from "../../Images/img16.jpg";
import Frontend1 from "../../Images/img8.jpg";
import Node from "../../Images/img2.jpg";
import Remote1 from "../../Images/img14.jpg";
import Web1 from "../../Images/Hackathon.jpg";
import Backend1 from "../../Images/img17.jpg";
import AI1 from "../../Images/cd5.jpg";

const RecruitmentPage = () => {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Solutions",
      location: "Remote",
      img: frontend,
    },
    {
      id: 2,
      title: "Backend Intern",
      company: "CodeLab",
      location: "Bangalore",
      img: backend,
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Design Studio",
      location: "Delhi",
      img: Designer,
    },
    {
      id: 4,
      title: "Full Stack Developer",
      company: "DevLaunchers",
      location: "Hyderabad",
      img: Backend1,
    },
    {
      id: 5,
      title: "Mobile App Developer",
      company: "Appify",
      location: "Mumbai",
      img: Frontend1,
    },
    {
      id: 6,
      title: "Graphic Designer",
      company: "PixelCraft",
      location: "Kolkata",
      img: AI,
    },
    {
      id: 7,
      title: "Software Tester",
      company: "QualitySoft",
      location: "Chennai",
      img: AI1,
    },
    {
      id: 8,
      title: "Machine Learning Intern",
      company: "AI Labs",
      location: "Pune",
      img: Web1,
    },
    {
      id: 9,
      title: "Digital Marketing Executive",
      company: "MarketGenius",
      location: "Remote",
      img: Remote1,
    },
    {
      id: 10,
      title: "Cloud Engineer",
      company: "SkyNet Systems",
      location: "Noida",
      img: backend,
    },
    {
      id: 11,
      title: "DevOps Intern",
      company: "DeployHQ",
      location: "Ahmedabad",
      img: Web1,
    },
    {
      id: 12,
      title: "Data Analyst",
      company: "Insight Corp",
      location: "Jaipur",
      img: frontend,
    },
    {
      id: 13,
      title: "SEO Specialist",
      company: "SearchMax",
      location: "Remote",
      img: Designer,
    },
    {
      id: 14,
      title: "Game Developer",
      company: "PlayForge",
      location: "Bangalore",
      img: Node,
    },
    {
      id: 15,
      title: "Cybersecurity Analyst",
      company: "SecureNet",
      location: "Hyderabad",
      img: Android,
    },
  ];

  const [selectedJob, setSelectedJob] = useState(null);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="recruitment-page">
      {/* Video Background Section */}
      <div className="recruitment-hero">
        <video className="recruitment-video" autoPlay muted loop playsInline>
          <source src="/videos/vd1.mp4" type="video/mp4" />
        </video>
        <div className="recruitment-content">
          <h1>🚀 Launch Your Career with Us</h1>
          <p>
            Find internships, jobs, and training opportunities tailored for
            students and professionals. Explore the right path for your future.
          </p>
          <button className="recruitment-button">Explore Jobs</button>
        </div>
      </div>

      {/* Job Listings */}
      <div className="jobs-section">
        <h2 className="jobs-title">🔥 Current Openings</h2>
        <div className="jobs-grid">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <img src={job.img} alt={job.title} />
              <h3>{job.title}</h3>
              <p>
                <strong>Company:</strong> {job.company}
              </p>
              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <button
                className="apply-button"
                onClick={() => handleApplyClick(job)}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Application Form */}
      {/* {selectedJob && (
        <div className="form-section">
          <h2>Apply for: {selectedJob.title}</h2>
          <form className="application-form" onSubmit={handleSubmit}>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) =>
                setFormData({ ...formData, resumeFile: e.target.files[0] })
              }
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <textarea
              rows="4"
              placeholder="Paste Resume or Type Summary"
              value={formData.resume}
              onChange={(e) =>
                setFormData({ ...formData, resume: e.target.value })
              }
              required
            />
            <button type="submit" className="submit-button">
              Submit Application
            </button>
            <button
              type="button"
              className="back-button"
              onClick={() => setSelectedJob(null)}
            >
              Back to Jobs
            </button>
          </form>
        </div>
      )} */}

      {/* Application Form */}
      {selectedJob && (
        <div className="form-section">
          <h2>Apply for: {selectedJob.title}</h2>
          <form
            className="application-form"
            action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DgK000004ayct"
            method="POST"
          >
            <input type="hidden" name="oid" value="00DgK000004ayct" />
            <input type="hidden" name="retURL" value="http://" />

            <input type="text" placeholder="Your Name" required />

            <input type="email" placeholder="Your Email" required />

            <input type="file" accept=".pdf,.doc,.docx" required />

            <textarea
              name="description"
              rows="4"
              placeholder="Paste Resume or Type Summary"
            />

            <button type="submit" className="submit-button">
              Submit Application
            </button>
            <button
              type="button"
              className="back-button"
              onClick={() => setSelectedJob(null)}
            >
              Back to Jobs
            </button>
          </form>
        </div>
      )}

      <div className="stats-section">
        <h2 className="section-title">📊 Platform Highlights</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <span role="img" aria-label="applicants">
              👥
            </span>
            <h3>30,000+</h3>
            <p>Applicants</p>
          </div>
          <div className="stat-card">
            <span role="img" aria-label="companies">
              🏢
            </span>
            <h3>484+</h3>
            <p>Partner Companies in India</p>
          </div>
          <div className="stat-card">
            <span role="img" aria-label="companies">
              🏢
            </span>
            <h3>400+</h3>
            <p>Partner Companies in Middle East</p>
          </div>
          <div className="stat-card">
            <span role="img" aria-label="companies">
              🏢
            </span>
            <h3>50+</h3>
            <p>Partner Companies in USA & UK</p>
          </div>
          <div className="stat-card">
            <span role="img" aria-label="jobs">
              💼
            </span>
            <h3>150+</h3>
            <p>Active Jobs</p>
          </div>
        </div>
      </div>
      <div className="why-us-section">
        <h2 className="section-title">🎯 Why Choose Us?</h2>
        <ul className="why-us-list">
          <li>✅ Verified Job Listings</li>
          <li>✅ Student-Friendly Opportunities</li>
          <li>✅ Resume Building Support</li>
          <li>✅ 100+ Trusted Companies</li>
        </ul>
      </div>
    </div>
  );
};

export default RecruitmentPage;
