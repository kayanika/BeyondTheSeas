import React from 'react';
import './index.css';
import logo from '../images/tooAmbitious.png';

const Header = () => {
  return (
    <header className="bg-bottle-green py-1">
      <div className="container text-center d-flex align-items-center justify-content-center">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <div className="text-container">
          <h1 className="text-light display-4">Academic Analysis: Too Ambitious List</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
