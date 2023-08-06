import React from 'react';
import { FaSearch } from 'react-icons/fa';
import img1 from './MIT-Gift-PRESS.png';
import { Link } from 'react-router-dom';

function Home() {
  const containerStyle = {
    marginTop: '2rem',
    background: `url(${img1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    position: 'relative',
    height: '100vh',
  };
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(3px)',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
  };

  const headingStyle = {
    fontSize: '4rem',
    marginBottom: '1rem',
    animation: 'bounce 2s infinite',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    fontWeight: 'bold',
  };

  const paragraphStyle = {
    fontSize: '3rem',
    textAlign: 'center',
    fontWeight: 'bold',
  };

  const buttonContainerStyle = {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const searchIconStyle = {
    fontSize: '1.2rem',
    marginRight: '5px',
  };

  const loginSignupContainerStyle = {
    position: 'absolute',
    top: '1rem',
    right: '5rem',
    display: 'flex',
    alignItems: 'center',
  };

  const loginButtonStyle = {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    marginRight: '10px',
    cursor: 'pointer',
  };

  const signupButtonStyle = {
    backgroundColor: '#e74c3c',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  const searchInputStyle = {
    padding: '10px',
    fontSize: '1.5rem',
    borderRadius: '5px',
    border: 'none',
    outline: 'none',
  };

  const searchButtonStyle = {
    backgroundColor: 'green',
    color: 'purple',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    marginLeft: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}>
        <style>
          {`
            @keyframes bounce {
              0%, 100%{
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
            }
          `}
        </style>
        <div style={buttonContainerStyle}>
          <FaSearch style={searchIconStyle} />
          <input type="text" placeholder="Search" style={searchInputStyle} />
          <button style={searchButtonStyle}>Search</button>
        </div>
        <div style={loginSignupContainerStyle}>
          <Link to="LoginPage">
            <button style={loginButtonStyle}>Login</button>
          </Link>
          <button style={signupButtonStyle}>Signup</button>
        </div>
        <h1 style={headingStyle}>Welcome to the BEYOND THE SEAS</h1>
        <p style={paragraphStyle}>Explore the best universities for higher studies around the world.</p>
      </div>
    </div>
  );
}

export default Home;
