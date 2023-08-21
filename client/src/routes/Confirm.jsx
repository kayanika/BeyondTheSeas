import React, { Component } from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Correct import
import { List, ListItem, ListItemText } from '@mui/material/';
import Button from '@mui/material/Button';

const theme = createTheme();

export class Confirm extends Component {

  // Inside FormUserDetails component
handleChange = name => event => {
  this.props.handleChange(name)(event); // Call the prop function from parent
};

  
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {  name,Age,Job,Institution,Department,gender,Address, CGPA, Field_Of_Interest,GRE_Score, github,
      Project,
      fees,   }
    } = this.props;
    return (
      <ThemeProvider theme={theme}> 
      <React.Fragment>
       
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="Name" secondary={name} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Age" secondary={Age} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Job" secondary={Job} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Institution" secondary={Institution} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Department" secondary={Department} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Address" secondary={Address} />
              </ListItem>
              <ListItem>
                <ListItemText primary="CGPA" secondary={CGPA} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Field Of Interest" secondary={Field_Of_Interest} />
              </ListItem>
              <ListItem>
                <ListItemText primary="GRE Score" secondary={GRE_Score} />
              </ListItem>
              <ListItem>
                <ListItemText primary="GitHub Profile" secondary={github} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Project Publication Link" secondary={Project} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Tuition Fees" secondary={fees} />
              </ListItem>
            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</Button>
          </Dialog>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default Confirm;
