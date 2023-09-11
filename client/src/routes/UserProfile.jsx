// import React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import img from '../images/background5.jpg'; // Use the correct image path
// // import HeaderUser from './HeaderUser';
// // import Sidebar2 from '../components/Sidebar2';
// import Grid from '@mui/material/Grid';
// import { Link } from 'react-router-dom'; // Import the Link component

// import NotificationsIcon from '@mui/icons-material/Notifications';

// const UserProfile = () => {
//   return (
//     <div className="home-analysis-container">
//       {/* <HeaderUser /> */}
//       <div className="sidebar-and-content">
//         {/* <Sidebar2/> */}
//         <div className="content-container">
//           <Container maxWidth="md">
//             <div className="container emp-profile">
//             <div style={{ position: 'absolute', top: '10px', right: '40px', display: 'flex', alignItems: 'center' }}>
//                 <NotificationsIcon fontSize="large" />
//                 <Link to="/api/user/home/" className="button" style={{ marginLeft: '10px' }}>
//                   <Button variant="contained" color="secondary" style={{ backgroundColor:'#8A9A5B' }}>
//                   Sign Out
//                   </Button>
//                 </Link>  
//               </div>
//               <form method="post">
//                 <div className="row">
//                   <div className="col-md-12" style={{ textAlign: 'center' }}>

//                   <div className="profile-img" style={{ margin: '0 auto 0 250px' }}>
//                     <Avatar
//                       alt="User Avatar"
//                       src={img} // Use the user's profile picture here
//                       sx={{ width: 200, height: 200 }}
//                     />
//                   </div>

//                   </div>
//                 </div>
//                 <Grid container spacing={3}>
//                   {/* Labels (Profession, Email, Institution) */}
//                   <Grid item xs={6} md={2}>
//                     <Typography variant="h6" sx={{ fontWeight: 'bold',color: '#303F9F' }}>
//                       Name:
//                     </Typography>
//                   </Grid>
//                     <Grid item xs={6} md={4}>
//                       <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                         Afroza Parvin Disa
//                       </Typography>
//                     </Grid>

//                   <Grid item xs={6} md={2}>
//                     <Typography variant="h6" sx={{ fontWeight: 'bold',color: '#303F9F' }}>
//                       Email:
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={6} md={4}>
//                     <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                       john.doe@example.com
//                     </Typography>
//                   </Grid>

//                   <Grid item xs={6} md={2}>
//                     <Typography variant="h6" sx={{ fontWeight: 'bold',color: '#303F9F' }}>
//                       Age:
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={6} md={4}>
//                     <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                       23
//                     </Typography>
//                   </Grid>


//                   <Grid item xs={6} md={2}>
//                     <Typography variant="h6" sx={{ fontWeight: 'bold',color: '#303F9F' }}>
//                       Profession:
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={6} md={4}>
//                     <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                       Student
//                     </Typography>
//                   </Grid>


//                   <Grid item xs={6} md={2}>
//                     <Typography variant="h6" sx={{ fontWeight: 'bold',color: '#303F9F' }}>
//                       Department:
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={6} md={4}>
//                     <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                       CSE
//                     </Typography>
//                   </Grid>

                  

//                   <Grid item xs={6} md={2}>
//                     <Typography variant="h6" sx={{fontWeight: 'bold', color: '#303F9F' }}>
//                       Gender:
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={6} md={4}>
//                     <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                       Female
//                     </Typography>
//                   </Grid>

//                   <Grid item xs={6} md={2}>
//                     <Typography variant="h6" sx={{fontWeight: 'bold', color: '#303F9F' }}>
//                       Institution:
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={6} md={4}>
//                     <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                       BUET
//                     </Typography>
//                   </Grid>

//                   <Grid item xs={6} md={2}>
//                     <Typography variant="h6" sx={{ fontWeight: 'bold',color: '#303F9F' }}>
//                       Address:
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={6} md={4}>
//                     <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                       Dhaka
//                     </Typography>
//                   </Grid>
                 

//                   <Grid item xs={6} md={2}>
//                     <Typography variant="h6" sx={{fontWeight: 'bold', color: '#303F9F' }}>
//                       CGPA:
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={6} md={4}>
//                     <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                       3.34
//                     </Typography>
//                   </Grid>

//                   <Grid item xs={6} md={2}>
//                     <Typography variant="h6" sx={{ fontWeight: 'bold',color: '#303F9F' }}>
//                      Field_Interest: 
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={6} md={4}>
//                     <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                       Kichuna
//                     </Typography>
//                   </Grid>

//                   <Grid item xs={6} md={2}>
//                     <Typography variant="h6" sx={{ fontWeight: 'bold',color: '#303F9F' }}>
//                       Github Link:
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={6} md={4}>
//                     <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                       https://github.com/exotisa202
//                     </Typography>
//                   </Grid>

//                   <Grid item xs={6} md={2}>
//                     <Typography variant="h6" sx={{ fontWeight: 'bold',color: '#303F9F' }}>
//                       Project Link:
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={6} md={4}>
//                     <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                       https://github.com/exotisa202
//                     </Typography>
//                   </Grid>


//                   <Grid item xs={6} md={2}>
//                     <Typography variant="h6" sx={{ fontWeight: 'bold',color: '#303F9F' }}>
//                       GRE Score:
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={6} md={4}>
//                     <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                     320
//                     </Typography>
//                   </Grid>


//                   <Grid item xs={6} md={2}>
//                     <Typography variant="h6" sx={{fontWeight: 'bold', color: '#303F9F' }}>
//                       Tution Fees:
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={6} md={4}>
//                     <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                     10000$
//                     </Typography>
//                   </Grid>

                
//                 </Grid>
//                 <div className="button-container">
//                   <div className="row">
//                     <div className="col-md-6">
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       fullWidth
//                       sx={{
//                         position: 'fixed',
//                         bottom: 20,
//                         right: 20,
//                         backgroundColor: '#8A9A5B', // Change the button color
//                         width: '150px', // Adjust the button width
//                       }}
//                     >
//                       <Link to="/api/user/user-form/" className="button">
//                          Edit Profile
//                       </Link>
                     
//                     </Button>
//                   </div>
//                 </div>
//                 </div>
//               </form>
//             </div>
//           </Container>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;

// import React, { useEffect, useState } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Grid from '@mui/material/Grid';
// import { useParams } from 'react-router-dom';
// import beyondTheSeas from '../apis/beyondTheSeas'; // Import your API client
// import img from '../images/background5.jpg';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import { Link } from 'react-router-dom'; // Import the Link component

// const UserProfile = () => {
//   const { userID } = useParams();
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     // Fetch user data from the API using the provided userID
//     const fetchUserData = async () => {
//       try {
//         const response = await beyondTheSeas.get(`/profile/${userID}`);
//         setUserData(response.data.data.universities[0]);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, [userID]);

//   const redirectToHome = () => {
//     // Implement your sign-out logic here
//   };

//   return (
//     <div className="home-analysis-container">
//       <div className="content-container">
//         <Container maxWidth="md">
//           <div className="container emp-profile">
//             <div style={{ position: 'absolute', top: '10px', right: '40px', display: 'flex', alignItems: 'center' }}>
//               <NotificationsIcon fontSize="large" />
//               <Button variant="contained" color="secondary" style={{ backgroundColor: '#8A9A5B', marginLeft: '10px' }} onClick={redirectToHome}>
//                 Sign Out
//               </Button>
//             </div>
//             <form method="post">
//               <div className="row">
//                 <div className="col-md-12" style={{ textAlign: 'center' }}>
//                   <div className="profile-img" style={{ margin: '0 auto 0 250px' }}>
//                     <Avatar alt="User Avatar" src={img} sx={{ width: 200, height: 200 }} />
//                   </div>
//                 </div>
//               </div>
//               <Grid container spacing={1}>
//                 {/* Display user information */}
//                 <Grid item xs={6} md={2}>
//                   <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#303F9F' }}>
//                     Name:
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={6} md={4}>
//                   <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                     {userData?.name}
//                   </Typography>
//                 </Grid>

//                 <Grid item xs={6} md={2}>
//                   <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#303F9F' }}>
//                     Institution:
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={6} md={4}>
//                   <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                     {userData?.undergrad_institution}
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={6} md={2}>
//                   <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#303F9F' }}>
//                   Age:
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={6} md={4}>
//                   <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                     {userData?.age}
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={6} md={2}>
//                   <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#303F9F' }}>
//                   Gender:
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={6} md={4}>
//                   <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                     {userData?.gender}
//                   </Typography>
//                 </Grid>

//                 <Grid item xs={6} md={2}>
//                     <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#303F9F' }}>
//                         Year of Passing:
//                     </Typography>
//                 </Grid>
//                 <Grid item xs={6} md={4}>
//                     <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                         {userData?.yearofpassing}
//                     </Typography>
//                 </Grid>
//                 <Grid item xs={6} md={2}>
//                     <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#303F9F' }}>
//                         CGPA:
//                     </Typography>
//                 </Grid>
//                 <Grid item xs={6} md={4}>
//                     <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                         {userData?.cgpa}
//                     </Typography>
//                 </Grid>
//                 <Grid item xs={6} md={2}>
//                     <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#303F9F' }}>
//                         GRE Score:
//                     </Typography>
//                 </Grid>
//                 <Grid item xs={6} md={4}>
//                     <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                         {userData?.gre_score}
//                     </Typography>
//                 </Grid>
//                 <Grid item xs={6} md={2}>
//                     <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#303F9F' }}>
//                     Publications Link:
//                     </Typography>
//                 </Grid>
//                 <Grid item xs={6} md={4}>
//                     <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                         {userData?.publications_link}
//                     </Typography>
//                 </Grid>
//                 <Grid item xs={6} md={2}>
//                     <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#303F9F' }}>
//                     Field of Interests:
//                     </Typography>
//                 </Grid>
//                 <Grid item xs={6} md={4}>
//                     <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                         {userData?.field_of_interest && userData.field_of_interest
//                         .slice(1, -1) // Remove the curly braces
//                         .split(',') // Split the string into an array
//                         .map((interest, index) => (
//                             <span key={index}>
//                             {interest.trim()} {/* Trim any leading/trailing whitespace */}
//                             {index < userData.field_of_interest.split(',').length - 1 && ', '}
//                             </span>
//                         ))}
//                     </Typography>
//                 </Grid>




//                 {/* Add other user information here in a similar format */}
//               </Grid>

//               <div className="button-container">
//                 <div className="row">
//                   <div className="col-md-6">
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       fullWidth
//                       sx={{
//                         position: 'fixed',
//                         bottom: 20,
//                         right: 20,
//                         backgroundColor: '#8A9A5B',
//                         width: '150px',
//                       }}
//                     >
//                       <Link to={`/api/user/user-form/${userID}`} className="button">
//                         Edit Profile
//                       </Link>
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;

import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import beyondTheSeas from '../apis/beyondTheSeas'; // Import your API client
import img from '../images/woman.png';
import { Link } from 'react-router-dom'; // Import the Link component
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';


// Styled components for the card
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  width: '560px', // Set a fixed width for all cards
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginBottom: '20px',
  marginRight: '20px',
  [theme.breakpoints.down('sm')]: {
    width: '100%', // Adjust the width for smaller screens
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: '400px', // Set a fixed height for the image
  [theme.breakpoints.down('sm')]: {
    height: 'auto', // Adjust the height for smaller screens
  },
}));

const UserProfile = () => {
  const { userID } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from the API using the provided userID
    const fetchUserData = async () => {
      try {
        const response = await beyondTheSeas.get(`/profile/${userID}`);
        setUserData(response.data.data.universities[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userID]);

  return (
    
    <div className="home-analysis-container" >
       
      <div className="content-container">
      
        <Container maxWidth="md">
        <Box height={30} />
          <StyledCard>
            <StyledCardMedia
              component="img"
              src={img}
              alt="User Avatar"
            />
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="h6" component="div">
                  User Profile
                </Typography>
                <Button variant="contained" color="primary" component={Link} to={`/api/user/user-form/${userID}`}>
                  Edit Profile
                </Button>
              </div>
              {/* <Grid container spacing={2}> */}
                {/* <Grid item xs={6}> */}
                  <Typography  sx={{ fontWeight: 'bold',}}>
                    Name: {userData?.name}
                  </Typography>
                
                {/* </Grid> */}

                {/* <Grid item xs={6}> */}
                 
                  <Typography  sx={{ fontWeight: 'bold' }}>
                  Institution: {userData?.undergrad_institution}
                  </Typography>
                {/* </Grid> */}

                {/* <Grid item xs={6}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#303F9F' }}>
                    Age:
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {userData?.age}
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#303F9F' }}>
                    Gender:
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {userData?.gender}
                  </Typography>
                </Grid> */}
                <Typography  sx={{ fontWeight: 'bold' }}>
                    Age: {userData?.age}
                    </Typography>

                    <Typography  sx={{ fontWeight: 'bold' }}>
                        Gender: {userData?.gender}
                    </Typography>

                <Typography  sx={{ fontWeight: 'bold' }}>
                    Year of Passing: {userData?.yearofpassing}
                    </Typography>

                    <Typography  sx={{ fontWeight: 'bold' }}>
                        CGPA: {userData?.cgpa}
                    </Typography>

                    <Typography  sx={{ fontWeight: 'bold' }}>
                        GRE Score: {userData?.gre_score}
                    </Typography>
                    <Typography  sx={{ fontWeight: 'bold' }}>
                        Publications Link: {userData?.publications_link}
                    </Typography>

                    <Typography  sx={{ fontWeight: 'bold' }}>
                        Field of Interests: {userData?.field_of_interest && userData.field_of_interest
                        .slice(1, -1) // Remove the curly braces
                        .split(',') // Split the string into an array
                        .map((interest, index) => (
                            <span key={index}>
                            {interest.trim()} {/* Trim any leading/trailing whitespace */}
                            {index < userData.field_of_interest.split(',').length - 1 && ', '}
                            </span>
                        ))}
                    </Typography>

                {/* Add other user information here in a similar format */}
              {/* </Grid> */}
            </CardContent>
          </StyledCard>
          {/* </Box> */}
        </Container>
      </div>
      
    </div>
  );
};

export default UserProfile;

