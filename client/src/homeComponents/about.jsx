import React from "react";
import AboutBackground from "../images/uni1.jpg";
import AboutBackgroundImage from "../images/4.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container" id="about-section">
      <div className="about-background-image-container">
        {/* <img src={AboutBackground} alt="" /> */}
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        {/* <p className="primary-subheading">About</p> */}
        <h1 className="primary-heading">
        Exploring Limitless Academic Horizons
        </h1>
        <p className="primary-text">
        At 'Beyond The Seas,' we're dedicated to opening doors to endless educational opportunities. Our mission is to empower students worldwide with expertly curated university recommendations, designed to simplify your quest for academic excellence. Explore a world of possibilities and embark on your educational journey with confidence. Discover higher education beyond boundaries with us!
        </p>
       
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button
            className="watch-video-button"
            onClick={() => (window.location.href = "https://youtu.be/0vS7wOpnai8")}
            >
            <BsFillPlayCircleFill /> Watch Video
            </button>
        </div>
      </div>
    </div>
  );
};

export default About;