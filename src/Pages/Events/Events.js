import React, { useState } from "react";
import "./Events.css";
import Hiring from "../../Images/hiring.jpg";
import Job from '../../Images/jobdrive.jpeg'
import Webinar from "../../Images/AIWebinar.jpg";
import Bootcamp from "../../Images/cd2.jpg";
import Hackathon from "../../Images/Hackathon.jpg";

const EventsPage = () => {
  const allEvents = [
        {
      title: "Cloudisian Job Mela - 2",
      category: "Job Drive",
      image: Job,
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSezn74kk6mXBXE1qKCjSzl-f6chULIcjnY-bUpnt8TdGu7U1g/viewform?pli=1",
      mapLink:
        "https://www.google.com/maps/place/Cloudisian,+299,+3rd+Floor,+Amber,+HBCS+Layout,+Vayalikaval,+Nagawara,+Bangalore+560045",
      address:
        "#299, 3RD FLOOR, AMBER, HBCS LAYOUT, VAYALIKAVAL, NAGAWARA, BANGALORE - 560045",
    },
    {
      title: "Cloudisian Mega Job Drive",
      date: "2025-05-17",
      time: "9:30 AM - 2:30 PM",
      location: "Cloudisian, Bangalore",
      category: "Job Drive",
      image: Hiring,
      description: `Join us for a massive job drive hosted by Cloudisian! Openings in IT & Non-IT sectors. Free jobs for PUC, ITI & any degree holders.`,
      audience: "Male & Female – PUC, ITI, Any Degree",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSezn74kk6mXBXE1qKCjSzl-f6chULIcjnY-bUpnt8TdGu7U1g/viewform?pli=1",
      mapLink:
        "https://www.google.com/maps/place/Cloudisian,+299,+3rd+Floor,+Amber,+HBCS+Layout,+Vayalikaval,+Nagawara,+Bangalore+560045",
      address:
        "#299, 3RD FLOOR, AMBER, HBCS LAYOUT, VAYALIKAVAL, NAGAWARA, BANGALORE - 560045",
      positions: [
        "Certified Internet Consultant",
        "Customer Relationship Officer",
        "Business Development Executive",
        "Inside Sales Executive",
        "Relationship Manager",
        "Senior Relationship Manager",
        "Office Admin",
        "Data Entry Operator",
        "Banking & Finance Executive",
        "International Voice & Non-Voice Process",
      ],
      jobDetails:
        "Salary: ₹20,000 – ₹50,000 (In-hand per month) | Location: All Over Bangalore | Sector: IT & Non-IT",
    },

    {
      title: "React Bootcamp",
      date: "2025-05-20",
      time: "10:00 AM - 4:00 PM",
      location: "Online",
      category: "Workshop",
      image: Bootcamp,
      description: "Learn React from scratch with hands-on examples.",
      audience: "Students, Developers",
      registrationLink: "#",
    },
    {
      title: "AI Webinar 2025",
      date: "2025-05-28",
      time: "2:00 PM - 5:00 PM",
      location: "Online",
      category: "Webinar",
      image: Webinar,
      description: "Join us to explore latest trends in AI.",
      audience: "Students, Researchers",
      registrationLink: "#",
    },
    {
      title: "Hackathon Challenge",
      date: "2025-05-19",
      time: "9:00 AM - 6:00 PM",
      location: "Cloudisian , Bengaluru",
      category: "Hackathon",
      image: Hackathon,
      description: "Showcase your coding skills in this 1-day hackathon.",
      audience: "All tech enthusiasts",
      registrationLink: "#",
    },

  ];

  const categories = ["All", "Workshop", "Webinar", "Hackathon", "Job Drive"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showJobDetails, setShowJobDetails] = useState({}); // To toggle accordion on mobile for jobDetails

  const filteredEvents =
    selectedCategory === "All"
      ? allEvents
      : allEvents.filter((event) => event.category === selectedCategory);

  // Toggle accordion for jobDetails on mobile
  const toggleJobDetails = (index) => {
    setShowJobDetails((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="events-container">
      <h1 className="events-heading">Upcoming Events</h1>

      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="event-list">
        {filteredEvents.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.image} alt={event.title} className="event-img" />
            <h2>{event.title || "Event"}</h2>

            {event.title === "Cloudisian Job Mela - 2" ? (
              // Show only image + registration + map links for this specific event
              <div className="event-buttons">
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="register-link"
                >
                  ✅ Register Now
                </a>
                <a
                  href={event.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  📍 View Address
                </a>
              </div>
            ) : (
              <>
                {event.date && event.time && (
                  <p className="event-meta">
                    📅 {event.date} | 🕒 {event.time}
                  </p>
                )}
                {event.location && <p className="event-meta">📍 {event.location}</p>}
                {event.description && <p>{event.description}</p>}

                {/* Accordion toggle button for jobDetails on mobile */}
                {event.jobDetails && (
                  <>
                    <div
                      className="accordion-toggle"
                      onClick={() => toggleJobDetails(index)}
                    >
                      {showJobDetails[index]
                        ? "Hide Job Details ▲"
                        : "Show Job Details ▼"}
                    </div>
                    <p
                      className={`job-details ${
                        showJobDetails[index] ? "active" : ""
                      }`}
                    >
                      <strong>Job Details:</strong> {event.jobDetails}
                    </p>
                  </>
                )}

                {/* Open positions */}
                {event.positions && (
                  <div className="open-roles">
                    <strong>Open Positions:</strong>
                    <ul>
                      {event.positions.map((role, idx) => (
                        <li key={idx}>{role}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {event.audience && (
                  <p className="audience">🎯 {event.audience}</p>
                )}

                <div className="event-buttons">
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="register-link"
                  >
                    ✅ Register Now
                  </a>

                  {event.mapLink && (
                    <a
                      href={event.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="map-link"
                    >
                      📍 View Address
                    </a>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
