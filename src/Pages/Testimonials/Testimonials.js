import React from "react";
import "./Testimonials.css"; // new CSS file

// Single Testimonial Card Component
const TestimonialCard = ({ name, role, message, photo }) => {
  return (
    <div className="testimonial-card">
      <img src={photo} alt={name} className="testimonial-photo" />
      <p className="testimonial-message">"{message}"</p>
      <h4 className="testimonial-name">{name}</h4>
      <p className="testimonial-role">{role}</p>
    </div>
  );
};

// Main Testimonials Component
const Testimonials = () => {
  // Extended testimonial data
  const testimonials = [
    {
      name: "Sarah K.",
      role: "Software Developer Intern",
      message:
        "Thanks to the individual training program, I improved my coding skills drastically and landed an internship at a top tech firm!",
      photo: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Mark L.",
      role: "Sales Manager at XYZ Corp.",
      message:
        "The corporate training sessions helped our sales team increase productivity by 30%. Highly recommend their professional approach!",
      photo: "https://randomuser.me/api/portraits/men/43.jpg",
    },
    {
      name: "Priya M.",
      role: "Marketing Executive",
      message:
        "The career guidance and recruitment assistance helped me find a job aligned with my passion. The support was exceptional!",
      photo: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      name: "Carlos M.",
      role: "Freelance Graphic Designer",
      message:
        "The freelancing course helped me structure my business and land clients worldwide. Highly recommended!",
      photo: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      name: "Lina P.",
      role: "UX Designer",
      message:
        "I learned crucial UX principles in the training sessions, which helped me improve the design of our company’s main app.",
      photo: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      name: "Mohammed S.",
      role: "Cloud Engineer",
      message:
        "The cloud certification course opened new job opportunities for me and boosted my salary by 20%.",
      photo: "https://randomuser.me/api/portraits/men/19.jpg",
    },
    {
      name: "James T.",
      role: "Data Analyst",
      message:
        "The hands-on workshops boosted my data analytics skills and helped me secure my first job in the industry.",
      photo: "https://randomuser.me/api/portraits/men/72.jpg",
    },
    {
      name: "Anjali R.",
      role: "Project Manager",
      message:
        "I gained practical knowledge and leadership skills through their courses, which accelerated my career growth.",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "David S.",
      role: "UX Designer",
      message:
        "Amazing training content and real-world projects helped me build a strong portfolio. Highly recommend!",
      photo: "https://randomuser.me/api/portraits/men/55.jpg",
    },
  ];

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">What Our Students & Partners Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
