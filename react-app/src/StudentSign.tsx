import React, { useState } from 'react';

function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    university: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
        alert('Please fill in all required fields.');
        return;
      }
    
      // Check if passwords match
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match.');
        return;
      }
    
      // If validations pass, you can simulate a successful signup
      alert('Signup successful!');
  };

  const styles = {
    signupContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#F5F6FA',
    },
    signupForm: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      padding: '90px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      display: 'grid',
      gap: '20px',
    },
    formGroup: {
      display: 'grid',
      gap: '8px',
    },
    inputLabel: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#333',
    },
    inputField: {
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      width: '100%',
    },
    submitButton: {
      backgroundColor: '#3498db',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      width: '100%',
    },
    loginText: {
        marginTop: '20px',
        fontSize: '14px',
        color: '#333',
        textAlign: 'center',
      },
      loginLink: {
        color: '#3498db',
        textDecoration: 'underline',
        cursor: 'pointer',
      },
  };

  return (
    <div style={styles.signupContainer}>
      <form style={styles.signupForm} onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.inputLabel}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.inputField}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.inputLabel}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.inputField}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.inputLabel}>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={styles.inputField}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.inputLabel}>University</label>
          <input
            type="text"
            name="university"
            value={formData.university}
            onChange={handleChange}
            style={styles.inputField}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.inputLabel}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.inputField}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.inputLabel}>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={styles.inputField}
          />
        </div>
        
        Already have an account?{' '}
        
        <a href="/login" style={styles.loginLink}>
          Login
        </a>
        
           
        
        <button type="submit" style={styles.submitButton}>
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
