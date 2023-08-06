import React, { CSSProperties, useState } from 'react';

function LoginPage() {
  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column', // Align items vertically
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, #2193b0, #6dd5ed)',
  };

  const messageStyle: CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '20px', // Add margin to push the form down
  };

  const formStyle: CSSProperties = {
    width: '400px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  };

  const inputStyle: CSSProperties = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  };

  const buttonStyle: CSSProperties = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#2193b0',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can perform login logic using the entered username, email, and password
    console.log('Login submitted');
  };

  return (
    <div style={containerStyle}>
      <div style={messageStyle}>Welcome Back!</div>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          style={inputStyle}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          style={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
