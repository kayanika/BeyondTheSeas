import React, { Component } from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import img from "../images/th.jpg";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import Header from "./Header";





const theme = createTheme();

export class FormAcademicDetails extends Component {
  state = {
    values: {
      CGPA: '',
      Field_Of_Interest: '',
      GRE_Score: '',
      github: '',
      Project: '',
      fees: '',  
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

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
        <div className="home-analysis-container">
        <Header/>
        
        
        
         
        <Dialog open fullWidth maxWidth='sm'>
          <AppBar  position="static" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,color:'#ffffff'}}>
            <h2>Enter Academic Details</h2>
            
            

          </AppBar>
          <TextField
            placeholder="CGPA"
            label="CGPA"
            value={values.CGPA}
            onChange={this.handleChange('CGPA')}
            defaultValue={values.CGPA}
            margin="normal"
            fullWidth
            style={{ backgroundColor: '#E5FFCC' ,padding: '5px',}}
          />
          
          <TextField
            placeholder="Enter Your Field Of Interest"
            label="Field Of Interest"
            value={values.Field_Of_Interest}
            onChange={this.handleChange('Field_Of_Interest')}
            margin="normal"
            fullWidth
            
            defaultValue={values.Field_Of_Interest}
            style={{ backgroundColor: '#E5FFCC',padding: '5px', }}
          />
          <TextField
            placeholder="Enter Your GRE Score"
            label="GRE Score"
            value={values.GRE_Score}
            onChange={this.handleChange('GRE_Score')}
            defaultValue={values.GRE_Score}
            margin="normal"
            fullWidth
           
            style={{ backgroundColor: '#E5FFCC',padding: '5px', }}
          />
          
          <TextField
            placeholder="Your GitHub Profile Link"
            label="GitHub Profile"
            value={values.github}
            onChange={this.handleChange('github')}
            defaultValue={values.github}
            margin="normal"
            fullWidth
            style={{ backgroundColor: '#E5FFCC' ,padding: '5px',}}
          />
          
          <TextField
            placeholder="Project Publication Link"
            label="Project Publication Link"
            value={values.Project}
            onChange={this.handleChange('Project')}
            defaultValue={values.Project}
            margin="normal"
            fullWidth
            style={{ backgroundColor: '#E5FFCC',padding: '5px', }}
          />
          <TextField
            placeholder="Preferred Tuiton Fees"
            label="Tuition Fees"
            value={values.fees}
            onChange={this.handleChange('fees')}
            defaultValue={values.fees}
            margin="normal"
            fullWidth
            style={{ backgroundColor: '#E5FFCC',padding: '5px', }}
          />
           <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
              style={{
                backgroundColor: '#66B2FF',
                fontWeight: 'bold',
              }}
            >Back</Button>
          
          <Button
            label="Continue"
            color="primary"
            variant="contained"
            
            
            primary={true}

            onClick={this.continue}
            style={{
              backgroundColor: '#0080FF',
              fontWeight: 'bold', 
              // Make the button text bold
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

export default FormAcademicDetails;
