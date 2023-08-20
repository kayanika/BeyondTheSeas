import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeAnalysis from "./routes/home_analysis"; // Make sure to use uppercase component names
import AnalysisSafeOption from "./routes/analysis_safe_option";
import AnalysisProbableChances from "./routes/analysis_probable_chances";
import AnalysisTooAmbitious from "./routes/analysis_too_ambitious";
import ViewProfileComponent from "./routes/view_profile_component";
import ViewShortlist from "./routes/view_shortlist";
import Forum from "./routes/forum";
import HomePage from "./routes/home_page";
import { UniversityContextProvider } from "./context/universityContext";
import Login from "./routes/Login";
import Register from "./routes/Register";
import ForgotPassword from "./routes/ForgotPassword";
import AddressForm from "./routes/AcademicInfo";
import AcademicInfo from "./routes/AcademicInfo";
import Review from "./routes/Review";
import Checkout from "./routes/Checkout";
import PaymentForm from "./routes/AcademicInfo";
import FormUserDetails from "./routes/FormUserDetails";
import FormPersonalDetails from "./routes/FormPersonalDetails";
import Confirm from "./routes/Confirm";
import UserForm from "./routes/UserForm";
import SocialIcons from "./routes/socialIcon";
import { createTheme } from "@mui/material/styles"; // Importing the MUI theme
import Success from "./routes/Success";



const App = () => {
  return (
    
    <UniversityContextProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/api/user/nonPersonalized/:userID" element={<HomeAnalysis />} />
            <Route path="/api/user/personalized/:userID/ambitious" element={<AnalysisTooAmbitious />} />
            <Route path="/api/user/personalized/:userID/safe" element={<AnalysisSafeOption />} />
            <Route path="/api/user/personalized/:userID/probable" element={<AnalysisProbableChances />} />
            <Route path="/api/user/student-profile/:userID" element={<ViewProfileComponent />} />
            <Route path="/api/user/view-shortlist/:userID" element={<ViewShortlist />} />
            <Route path="/api/user/view-forum/:userID" element={<Forum />} />
            <Route path="/api/user/home/:userID" element={<HomePage />} />
            <Route path="/api/user/login" element={<Login />} />
            <Route path="/api/user/register" element={<Register />} />
            <Route path="/api/user/forgot-password" element={<ForgotPassword />} />
            <Route path="/api/user/address-form" element={<AddressForm />} />
            <Route path="/api/user/academic-info" element={<AcademicInfo />} />
            <Route path="/api/user/review" element={<Review />} />
            <Route path="/api/user/checkout" element={<Checkout />} />
            <Route path="/api/user/payment-form" element={<PaymentForm />} />
            <Route path="/api/user/form-user-details" element={<FormUserDetails />} />
            <Route path="/api/user/form-personal-details" element={<FormPersonalDetails />} />
            <Route path="/api/user/confirm" element={<Confirm />} />
            <Route path="/api/user/user-form" element={<UserForm />} />
            <Route path="/api/user/social-icons" element={<SocialIcons />} />
            <Route path="/api/user/success" element={<Success />} />





          
          </Routes>
        </Router>
      </div>
    </UniversityContextProvider>
  );
};

export default App;
