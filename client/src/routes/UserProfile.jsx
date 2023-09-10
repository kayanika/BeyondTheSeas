import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import img from '../images/background5.jpg'; // Use the correct image path
import HeaderUser from './HeaderUser';
import Sidebar from '../components/sidebar';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'; // Import the Link component

import NotificationsIcon from '@mui/icons-material/Notifications';

const UserProfile = () => {
  return (
    <div className="home-analysis-container">
      <HeaderUser />
      <div className="sidebar-and-content">
        <Sidebar />
        <div className="content-container">
          <Container maxWidth="md">
            <div className="container emp-profile">
            <div style={{ position: 'absolute', top: '10px', right: '40px', display: 'flex', alignItems: 'center' }}>
                <NotificationsIcon fontSize="large" />
                <Link to="/api/user/home/" className="button" style={{ marginLeft: '10px' }}>
                  <Button variant="contained" color="secondary" style={{ backgroundColor:'#8A9A5B' }}>
                  Sign Out
                  </Button>
                </Link>  
              </div>
              <form method="post">
                <div className="row">
                  <div className="col-md-12" style={{ textAlign: 'center' }}>

                  <div className="profile-img" style={{ margin: '0 auto 0 250px' }}>
                    <Avatar
                      alt="User Avatar"
                      src={img} // Use the user's profile picture here
                      sx={{ width: 200, height: 200 }}
                    />
                  </div>

                  </div>
                </div>
                <Grid container spacing={3}>
                  {/* Labels (Profession, Email, Institution) */}
                  <Grid item xs={6} md={2}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold',color: '#303F9F' }}>
                      Name:
                    </Typography>
                  </Grid>
                    <Grid item xs={6} md={4}>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        Afroza Parvin Disa
                      </Typography>
                    </Grid>

                  <Grid item xs={6} md={2}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold',color: '#303F9F' }}>
                      Email:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      john.doe@example.com
                    </Typography>
                  </Grid>

                  <Grid item xs={6} md={2}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold',color: '#303F9F' }}>
                      Age:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      23
                    </Typography>
                  </Grid>


                  <Grid item xs={6} md={2}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold',color: '#303F9F' }}>
                      Profession:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      Student
                    </Typography>
                  </Grid>


                  <Grid item xs={6} md={2}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold',color: '#303F9F' }}>
                      Department:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      CSE
                    </Typography>
                  </Grid>

                  

                  <Grid item xs={6} md={2}>
                    <Typography variant="h6" sx={{fontWeight: 'bold', color: '#303F9F' }}>
                      Gender:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      Female
                    </Typography>
                  </Grid>

                  <Grid item xs={6} md={2}>
                    <Typography variant="h6" sx={{fontWeight: 'bold', color: '#303F9F' }}>
                      Institution:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      BUET
                    </Typography>
                  </Grid>

                  <Grid item xs={6} md={2}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold',color: '#303F9F' }}>
                      Address:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      Dhaka
                    </Typography>
                  </Grid>
                 

                  <Grid item xs={6} md={2}>
                    <Typography variant="h6" sx={{fontWeight: 'bold', color: '#303F9F' }}>
                      CGPA:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      3.34
                    </Typography>
                  </Grid>

                  <Grid item xs={6} md={2}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold',color: '#303F9F' }}>
                     Field_Interest: 
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      Kichuna
                    </Typography>
                  </Grid>

                  <Grid item xs={6} md={2}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold',color: '#303F9F' }}>
                      Github Link:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      https://github.com/exotisa202
                    </Typography>
                  </Grid>

                  <Grid item xs={6} md={2}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold',color: '#303F9F' }}>
                      Project Link:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      https://github.com/exotisa202
                    </Typography>
                  </Grid>


                  <Grid item xs={6} md={2}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold',color: '#303F9F' }}>
                      GRE Score:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    320
                    </Typography>
                  </Grid>


                  <Grid item xs={6} md={2}>
                    <Typography variant="h6" sx={{fontWeight: 'bold', color: '#303F9F' }}>
                      Tution Fees:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    10000$
                    </Typography>
                  </Grid>

                
                </Grid>
                <div className="button-container">
                  <div className="row">
                    <div className="col-md-6">
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{
                        position: 'fixed',
                        bottom: 20,
                        right: 20,
                        backgroundColor: '#8A9A5B', // Change the button color
                        width: '150px', // Adjust the button width
                      }}
                    >
                      <Link to="/api/user/user-form/" className="button">
                         Edit Profile
                      </Link>
                     
                    </Button>
                  </div>
                </div>
                </div>
              </form>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;