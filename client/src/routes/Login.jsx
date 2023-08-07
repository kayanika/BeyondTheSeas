import React, { useState } from 'react';
import img2 from './img2.png'

function LoginPage() {
  const containerStyle = {
    display: 'flex',
    background: `url(${img2})`,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'rgba(153, 153, 0, 0.8)',
  };

  const formContainerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    width: '50%', // Take up 50% of the screen width
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const labelStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#1d2671',
    marginBottom: '5px',
    alignSelf: 'flex-start', // Align the label to the left
    width: '100%', // Use full width for the label
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: 'none',
    borderBottom: '2px solid #1d2671',
    fontSize: '16px',
    outline: 'none',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#1d2671',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
  };
  

  const forgotPasswordStyle = {
    fontSize: '14px',
    color: '#1d2671',
    textDecoration: 'underline',
    textAlign: 'center',
    marginTop: '10px',
    cursor: 'pointer',
  };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform login logic using the entered username, email, and password
    console.log('Login submitted');
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2 style={headingStyle}>Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            style={inputStyle}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label style={labelStyle}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>
        <div style={forgotPasswordStyle}>Forgot your password? Click here</div>
      </div>
    </div>
  );
}

export default LoginPage;
