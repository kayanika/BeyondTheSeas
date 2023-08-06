import React from 'react'
import './index.css';
import logo from './header_image.png';

const Header = () => {
    return (
      <header className="bg-bottle-green py-1">
      <div className="container text-center">
        <img src={logo} alt="Logo" className="logo-img" />
        <h1 className="text-light display-4">Academic Analysis: Most Probable List</h1>
        
      </div>
    </header>
        
      );
}

export default Header
