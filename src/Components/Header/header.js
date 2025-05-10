import React, { useState } from 'react';
import './header.css';
import Cloudisianlogo from '../../Images/Cloudisianlogo.jpg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={Cloudisianlogo} alt="CloudAsian Logo" className="logo-img" />
      </div>
    
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a href="/">Home</a>
        <a href="/courses">Courses</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/login" className="browse-btn">Login</a>
      </nav>
    </header>
  );
};

export default Header;
