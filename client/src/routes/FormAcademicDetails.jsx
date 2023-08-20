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
import header from "../components/header";





const theme = createTheme();

export class FormAcademicDetails extends Component {
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

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
        <div className="home-analysis-container">
        <header2/>
         
        <Dialog open fullWidth maxWidth='sm'>
          <AppBar  position="static" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,color:'#99FF33'}}>
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
            label="Tuiton Fees"
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
                backgroundColor: '#B2FF66',
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
