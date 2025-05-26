import React, { useState } from "react";
import "./header.css";
import Cloudisian from "../../Images/Cloudisianlogo.jpg";

import { Link, useNavigate } from "react-router-dom";

const pages = [
  { name: "IT Consulting", path: "/it-consulting" },
  { name: "Training", path: "/training" },
  { name: "Coaching", path: "/coaching" },
  { name: "R&D", path: "/rnd" },
  { name: "USA Entities Embedded", path: "/usa-embedded" },
  { name: "Recruitments", path: "/recruitments" },
  { name: "Events", path: "/events" },
  { name: "Careers", path: "/careers" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "CSR & NGO", path: "/ngo" },
  
];

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPages, setFilteredPages] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filtered = pages.filter((page) =>
        page.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredPages(filtered);
    } else {
      setFilteredPages([]);
    }
  };

  const handleSelect = (path) => {
    setSearchTerm("");
    setFilteredPages([]);
    navigate(path);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && filteredPages.length === 1) {
      // If exactly one result, navigate directly on Enter
      handleSelect(filteredPages[0].path);
    }
  };

  return (
    <header>
      {/* Top Header */}
      <div className="top-header">
        <div className="logo-section">
          <Link to="/">
            <img src={Cloudisian} alt="Cloudisian Logo" className="logo-img" />
          </Link>
        </div>

        <div className="right-section">
          <Link to="/" className="home-link">
            Home
          </Link>
          <div className="search-section" style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              value={searchTerm}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              autoComplete="off"
            />
            {filteredPages.length > 0 && (
              <ul
                className="search-suggestions"
                style={{
                  position: "absolute",
                  backgroundColor: "white",
                  listStyle: "none",
                  margin: 0,
                  padding: "0.5rem",
                  border: "1px solid #ccc",
                  width: "100%",
                  maxHeight: "150px",
                  overflowY: "auto",
                  zIndex: 10,
                }}
              >
                {filteredPages.map((page) => (
                  <li
                    key={page.path}
                    onClick={() => handleSelect(page.path)}
                    style={{
                      padding: "0.5rem",
                      cursor: "pointer",
                    }}
                    onMouseDown={(e) => e.preventDefault()} // Prevent input losing focus before click
                  >
                    {page.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="navbar1">
        <ul className="nav-links">
          {pages.map((page) => (
            <li key={page.path}>
              <Link to={page.path}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
