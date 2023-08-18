import React from 'react';
import './index.css';
import logo from '../images/mostProbable.png';

const Header = () => {
  return (
    <header className="bg-bottle-green py-1">
      <div className="container text-center d-flex align-items-center justify-content-center">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <div className="text-container">
        <h1 className="text-dark display-4 " style={{ fontFamily: 'Roboto, sans-serif', textShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)', color: '#fff' }}>Academic Analysis: Most Probable List</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
