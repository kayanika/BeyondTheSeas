import React from 'react'
import './index.css';
import logo from '../images/headerAnalysis.png';

const Header = () => {
    return (
      // <div className="home-analysis-container">
      <header className="bg-bottle-green py-2">
      <div className="container text-center">
        <img src={logo} alt="Logo" className="logo-img" />
        <h1 className="text-dark display-3 font-bold" style={{ fontFamily: 'Roboto, sans-serif', textShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)', color: '#fff' }}>
          Academic Analysis
        </h1>
        <p className="lead text-dark bold-font">Check out your Safe options, probable chances and too ambitious list!</p>
      </div>
    </header>
    // </div>
        
      );
}

export default Header
