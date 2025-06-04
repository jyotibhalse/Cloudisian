import React, { useEffect, useState } from "react";
import "./stickyAd.css";

const StickyAd = () => {
  const [count, setCount] = useState(1000);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div className="sticky-ad">
      <button className="close-btn" onClick={() => setVisible(false)}>×</button>
      <div className="ad-content">
        <span className="emoji">🚀</span>
        <span className="count">{count}+</span>
        <span className="text">
          students already <strong className="highlight">joined the learning & hiring wave!</strong><br />
          <em className="animated-text">Are you next?</em>
        </span>
      </div>
    </div>
  );
};

export default StickyAd;
