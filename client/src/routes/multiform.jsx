import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const PersonalInfoStep = ({ onNext }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // Add other personal info fields here

  const handleNext = () => {
    // Collect personal info data and send it to the parent component
    const personalInfo = {
      firstName,
      lastName,
      // Add other personal info fields here
    };
    onNext(personalInfo);
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <TextField
        label="First Name"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Last Name"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        fullWidth
        margin="normal"
      />
      {/* Add other personal info fields here */}
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Continue
        </Button>
      </Box>
    </div>
  );
};

export default PersonalInfoStep;
