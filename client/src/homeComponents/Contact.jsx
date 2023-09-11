
import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Navbar from "./Navbar";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = () => {
    // You can add your email submission logic here.
    // For now, we'll just simulate a successful submission.
    // Replace this with your actual email submission logic.
    // Example: sendEmail(email);

    // Show the Snackbar message
    setOpenSnackbar(true);

    // Reset the email input
    setEmail("");
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="contact-page-wrapper" id="contact-section">
      {/* <Navbar /> */}
      <h1 className="primary-heading">Have a Question in Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input
          type="text"
          placeholder="yourmail@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="secondary-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000} // Snackbar will auto-hide after 3 seconds
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Thank you! Your email has been submitted successfully.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;

