import React from 'react'
import './index.css';
import logo from '../images/headerAnalysis.png';

const Header = () => {
    return (
      <header className="bg-bottle-green py-1">
      <div className="container text-center">
        <img src={logo} alt="Logo" className="logo-img" />
        <h1 className="text-light display-4">Academic Analysis</h1>
        <p className="lead text-light">Check out your Safe options, probable chances and too ambitious list!</p>
      </div>
    </header>
        
      );
}

export default Header
