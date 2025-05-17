import React, { useState } from 'react';
import './slider.css';
const FeatureSlider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="feature-slider">
      <button className="slide-btn" onClick={prevSlide}>‹</button>
      <div className="slide-content">
        <h2>{items[currentIndex].icon} {items[currentIndex].title}</h2>
        <p>{items[currentIndex].desc}</p>
      </div>
      <button className="slide-btn" onClick={nextSlide}>›</button>
    </div>
  );
};

export default FeatureSlider;
