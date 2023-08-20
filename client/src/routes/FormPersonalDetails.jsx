import React, { Component } from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const theme = createTheme();

export class FormUserDetails extends Component {

  state = {
    values: {
      firstName: '',
      lastName: '',
      Age: '',
      Institution: '',
      Department: '',
      gender: '',
      
    },
  };

  handleChange = name => event => {
    this.setState({
      values: {
        ...this.state.values,
        [name]: event.target.value,
      },
    });
  };

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <div
          style={{
            backgroundColor: '#4CAF50', // Green background color
            minHeight: '100vh', // Make sure the container is at least the height of the viewport
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Dialog open fullWidth maxWidth='sm'>
            <AppBar position="static" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h2>Enter User Details</h2>
            </AppBar>
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
              style={{
                backgroundColor: '#E5FFCC',
                padding: '20px',
              }}
            />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
              style={{
                backgroundColor: '#E5FFCC',
                marginTop: '10px',
                padding: '20px',
              }}
            />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
              style={{
                backgroundColor: '#E5FFCC',
                marginTop: '10px',
                padding: '20px',
              }}
            />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
              style={{
                backgroundColor: '#E5FFCC',
                marginTop: '20px',
                fontWeight: 'bold',
              }}
            >
              Continue
            </Button>
          </Dialog>
        </div>
      </ThemeProvider>
    );
  }
}

export default FormUserDetails;
