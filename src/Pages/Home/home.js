import React from "react";
import "./home.css";
import HeroSection from '../../Components/Second/herosection'
import Cards from '../../Components/Homecom/Cards';
import Popup from "../../Components/PopUp/popup";
const HomePage = () => {
  return (
    <>
    <HeroSection/>
   <Popup/>
    <Cards/>
    </>
  );
};

export default HomePage;
