import React from "react";
import BannerBackground from "../images/1.png";
// import BannerImage from "../images/2.png";
// import img3 from "../images/3.png";
import img4 from "../images/7.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";

import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { useState, useEffect } from "react";
import "./home.css";
import { useNavigate } from 'react-router-dom';
import Link from "@mui/material/Link";

const Home = () => {
  const navigate = useNavigate();

  const redirectToRegister = () => {
    navigate('/api/user/register');
  };


    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const bannerImages = [BannerBackground,BannerBackground, img4, img5, img6,/* Add more image URLs here */];
  
    useEffect(() => {
      const slideshowInterval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 1500); // Change image every 5 seconds
  
      return () => {
        clearInterval(slideshowInterval);
      };
    }, []);
  return (
    <div className="home-container" id="home-section">
      <Navbar />
      <div className="home-banner-container">
        {/* <div className="home-bannerImage-container" >
          <img src={BannerBackground} alt="" />
        </div> */}
        <div className="home-text-section">
          <h1 className="primary-heading">
          Discovering Your Academic Future Beyond Boundaries
          </h1>
          <p className="primary-text">
          Expertly curated university recommendations, crafted to save you time and effort in your pursuit of higher education.
          </p>
          <button className="secondary-button" onClick={redirectToRegister}>
            Register Now <FiArrowRight />{" "}
          </button>
          
        </div>
        {/* design in a way so that all images are showed in same size */}
        <div className="home-image-section">
          <img src={bannerImages[currentImageIndex]} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;