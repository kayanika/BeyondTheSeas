import React, { Component } from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import img from "../images/background4.jpg";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import Header from "./Header";




const theme = createTheme();

export class FormUserDetails extends Component {
  state = {
    values: {
      Name: '',
      Age: '',
      Job: '',
      Institution: '',
      Department: '',
      gender: '',
      Address: '',
      
    },
  };

 // Inside FormUserDetails component
handleChange = name => event => {
  this.props.handleChange(name)(event); // Call the prop function from parent
};

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
        <div className="home-analysis-container">
        <Header/>
         
        <Dialog open fullWidth maxWidth='sm'>
          <AppBar  position="static" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h2>Enter User Details</h2>
            
            

          </AppBar>

          

         
          <TextField
            placeholder="Name"
            label="Name"
            floatingLabelText="Name"
            value={values.name}
            onChange={this.handleChange('name')}
            defaultValue={values.name}
            margin="normal"
            fullWidth
            style={{ backgroundColor: '#E5FFCC' ,padding: '5px',}}
          />
          
          <TextField
            placeholder="Enter Your Age"
            label="Age"
            value={values.Age}
            onChange={this.handleChange('Age')}
            margin="normal"
            fullWidth
            inputProps={{ type: 'number' }}
            defaultValue={values.Age}
            style={{ backgroundColor: '#E5FFCC',padding: '5px', }}
          />
          <TextField
            placeholder="Enter Your Occupation"
            label="Job"
            value={values.Job}
            onChange={this.handleChange('Job')}
            defaultValue={values.Job}
            margin="normal"
            fullWidth
           
            style={{ backgroundColor: '#E5FFCC',padding: '5px', }}
          />
          
          <TextField
            placeholder="Institution"
            label="Institution"
            value={values.Institution}
            onChange={this.handleChange('Institution')}
            defaultValue={values.Institution}
            margin="normal"
            fullWidth
            style={{ backgroundColor: '#E5FFCC' ,padding: '5px',}}
          />
          
          <TextField
            placeholder="Department"
            label="Department"
            value={values.Department}
            onChange={this.handleChange('Department')}
            defaultValue={values.Department}
            margin="normal"
            fullWidth
            style={{ backgroundColor: '#E5FFCC',padding: '5px', }}
          />
            <TextField
             placeholder="Gender"
              label="Gender"
              value={values.gender}
              fullWidth
              style={{
                backgroundColor: '#E5FFCC',
                marginTop: '5px',
                padding: '5px',
              }}
              SelectProps={{
                value: values.gender,
                onChange: this.handleChange('gender'),
                
              }}
              select
            >
              <MenuItem value="">
                
              </MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
              defaultValue={values.gender}
            </TextField>


        
          <TextField
            placeholder="Address"
            label="Address"
            value={values.Address}
            onChange={this.handleChange('Address')}
            defaultValue={values.Address}
            margin="normal"
            fullWidth
            style={{ backgroundColor: '#E5FFCC',padding: '5px', }}
          />
          
          <Button
            label="Continue"
            color="primary"
            variant="contained"
            primary={true}

            onClick={this.continue}
            style={{
              backgroundColor: '#0080FF',
              fontWeight: 'bold', // Make the button text bold
            }}
          >
            Continue
            
          </Button>
        </Dialog>
        </div>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default FormUserDetails;
