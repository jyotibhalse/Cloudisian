import React from "react";
import "./home.css";
import HeroSection from '../../Components/Second/herosection'
import Cards from '../../Components/Homecom/Cards';
import Popup from "../../Components/PopUp/popup";
import StickyAd from "../../Components/Ad/StickyAd"; // ✅ import it

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Popup />
      <Cards />
      <StickyAd /> {/* ✅ Add it at the bottom */}
    </>
  );
};

export default HomePage;
