import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import img from '../images/background5.jpg'; // Use the correct image path
import HeaderUser from './HeaderUser';
import Sidebar from '../components/sidebar';
import Grid from '@mui/material/Grid';

const UserProfile = () => {
  return (
    <div className="home-analysis-container">
      <HeaderUser />
      <div className="sidebar-and-content">
        <Sidebar />
        <div className="content-container">
          <Container maxWidth="md">
            <div className="container emp-profile">
              <form method="post">
                <div className="row">
                  <div className="col-md-12" style={{ textAlign: 'center' }}>
                    <div className="profile-img">
                      <Avatar
                        alt="User Avatar"
                        src={img} // Use the user's profile picture here
                        sx={{
                          width: 200,
                          height: 200,
                          margin: '0 auto 0 3cm',
                          border: '5px solid #fff', // Add a border around the avatar
                        }}
                      />
                    </div>
                  </div>
                </div>
                <Grid container spacing={3}>
                  {/* Labels (Profession, Email, Institution) */}
                  <Grid item xs={6} md={2}>
                    <Typography variant="h6" sx={{ color: '#303F9F' }}>
                      Name:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body1">Afroza Parvin Disa</Typography>
                  </Grid>
                  <Grid item xs={6} md={2}>
                    <Typography variant="h6" sx={{ color: '#303F9F' }}>
                      Department:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body1">CSE</Typography>
                  </Grid>

                  <Grid item xs={6} md={2}>
                    <Typography variant="h6" sx={{ color: '#303F9F' }}>
                      Email:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body1">john.doe@example.com</Typography>
                  </Grid>

                  <Grid item xs={6} md={2}>
                    <Typography variant="h6" sx={{ color: '#303F9F' }}>
                      Email:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body1">john.doe@example.com</Typography>
                  </Grid>

                  <Grid item xs={6} md={2}>
                    <Typography variant="h6" sx={{ color: '#303F9F' }}>
                      Institution:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body1">ABC University</Typography>
                  </Grid>
                    
                  <Grid item xs={6} md={2}>
                    <Typography variant="h6" sx={{ color: '#303F9F' }}>
                      Profession:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body1">Student</Typography>
                  </Grid>

                  <Grid item xs={6} md={2}>
                    <Typography variant="h6" sx={{ color: '#303F9F' }}>
                      CGPA:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body1">3.00</Typography>
                  </Grid>

                  <Grid item xs={6} md={2}>
                    <Typography variant="h6" sx={{ color: '#303F9F' }}>
                      Github Link:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body1">https://github.com/exotisa202</Typography>
                  </Grid>

                  <Grid item xs={6} md={2}>
                    <Typography variant="h6" sx={{ color: '#303F9F' }}>
                      Project Link:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body1">https://github.com/exotisa202</Typography>
                  </Grid>

                  <Grid item xs={6} md={2}>
                    <Typography variant="h6" sx={{ color: '#303F9F' }}>
                      GRE Score:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body1">400</Typography>
                  </Grid>
                  
                  


                </Grid>
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
                      Edit Profile
                    </Button>
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
