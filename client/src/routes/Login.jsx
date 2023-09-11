import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bg from "../images/signin.svg";
import bgimg from "../images/background4.jpg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState, forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";
import SocialIcons from "./socialIcon.jsx"
import Iconify from "./Iconify"
import Header from "./Header";
import beyondTheSeas from "../apis/beyondTheSeas";


const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const boxstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  height: "70%",
  bgcolor: "background.paper",
  boxShadow:24,
};

const center = {
  position: "relative",
  top: "50%",
  left: "37%",
};

export default function Login() {
  const [open, setOpen] = useState(false);
  const [remember, setRemember] = useState(false);
  const vertical = "top";
  const horizontal = "right";
  const navigate = useNavigate();

//   const handleAskQuestion = async (questionText, keywords) => {
//     if (!questionText.trim()) {
//       return; // Don't insert empty questions
//     }

//     try {
//       setIsSubmitting(true); // Start the loading state
//       const response = await beyondTheSeas.post(`/view-forum/${userID}/postQuestion`, {
//         question_text: questionText,
//         keywords: keywords,
//       });
//       console.log('Question posted successfully');
//       setIsSuccessSnackbarOpen(true);
//       setIsAskQuestionOpen(false);
//     } catch (error) {
//       console.error('Error posting question:', error);
//     } finally {
//       setIsSubmitting(false); // End the loading state, regardless of success or error
//     }
//   };

const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      setOpen(true);
      const response = await beyondTheSeas.post("/login", {
        userName: event.target.email.value,
        password: event.target.password.value,
      });
  
      if (response.data.status === "success") {
        console.log("Login successful");
        // Redirect to the desired route after successful login
        navigate(`/api/user/nonPersonalized/${response.data.data.user.userid}`);
      } else {
        console.log("Login failed");
        // Display an error message to the user
        // You can use state to manage and display the error message
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Display an error message to the user
      // You can use state to manage and display the error message
    } finally {
      setOpen(false);
    }
  };


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionComponent={TransitionLeft}
        anchorOrigin={{ vertical, horizontal }}
      >

        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          login successful
        </Alert>
        
      </Snackbar>
      <div
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5",
        }}
      >
     <Box display="flex" flexDirection="column" alignItems="center">
      <Typography
        variant="h3"
        className="text-dark display-4"
        style={{ color: '#8A9A5B', fontStyle: 'Roboto, sans-serif', marginTop: '60px' }}
      >
       
      </Typography>
   
    </Box>
        <Box sx={boxstyle}>
          <Grid container>
            <Grid item xs={12} sm={12} lg={6}>
              <Box
                style={{
                  backgroundImage: `url(${bg})`,
                  backgroundSize: "cover",
                  marginTop: "40px",
                  marginLeft: "15px",
                  marginRight: "15px",
                  height: "63vh",
                  color: "#f5f5f5",
                }}
              ></Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <Box
                style={{
                  backgroundSize: "cover",
                  height: "70vh",
                  minHeight: "500px",
                  backgroundColor: "#8A9A5B",
                }}
              >
                <ThemeProvider theme={darkTheme}>
                  <Container>
                    <Box height={35} />
                    <Box sx={center}>
                      <Avatar
                        sx={{ ml: "35px", mb: "4px", bgcolor: "#ffffff" }}
                      >
                        <LockOutlinedIcon />
                      </Avatar>
                      <Typography component="h1" variant="h4">
                        Sign In
                      </Typography>
                    </Box>
                    <Box
                      component="form"
                      noValidate
                      onSubmit={handleSubmit}
                      sx={{ mt: 2 }}
                    >
                      <Grid container spacing={1}>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <TextField
                            required
                            fullWidth
                            id="email"
                            label="Username"
                            name="email"
                            autoComplete="email"
                          />
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                          />
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <Stack direction="row" spacing={2}>
                            <FormControlLabel
                              sx={{ width: "60%" }}
                              onClick={() => setRemember(!remember)}
                              control={<Checkbox checked={remember} />}
                              label="Remember me"
                            />
                            <Typography
                              variant="body1"
                              component="span"
                              onClick={() => {
                                navigate("/api/user/forgot-password");
                              }}
                              style={{ marginTop: "10px", cursor: "pointer" }}
                            >
                              Forgot password?
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "5em", mr: "5em" }}>
                          <Button
                            type="submit"
                            variant="contained"
                            fullWidth="true"
                            size="large"
                            sx={{
                              mt: "10px",
                              mr: "20px",
                              borderRadius: 28,
                              color: "#ffffff",
                              minWidth: "170px",
                              backgroundColor: "#FF9A01",
                            }}
                          >
                            Sign in
                          </Button>
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <Stack direction="row" spacing={2}>
                            <Typography
                              variant="body1"
                              component="span"
                              style={{ marginTop: "10px" }}
                            >
                              Not registered yet?{" "}
                              <span
                                style={{ color: "#beb4fb", cursor: "pointer" }}
                                onClick={() => {
                                  navigate("/api/user/register");
                                }}
                              >
                                Create an Account
              <div className="social -icon">
                 <Stack direction="row" spacing={2}>
                    <Button fullWidth size="large" color="inherit" variant="outlined">
                      <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
                    </Button>

                    <Button fullWidth size="large" color="inherit" variant="outlined">
                      <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22} />
                    </Button>

                    <Button fullWidth size="large" color="inherit" variant="outlined">
                      <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={22} height={22} />
                    </Button>
                                 </Stack>
                                </div>
                              </span>
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Box>
                    
                  </Container>

                </ThemeProvider>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
      
    </>
  );
}