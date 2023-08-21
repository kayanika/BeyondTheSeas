import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeAnalysis from "./routes/home_analysis"; // Make sure to use uppercase component names
import AnalysisSafeOption from "./routes/analysis_safe_option";
import AnalysisProbableChances from "./routes/analysis_probable_chances";
import AnalysisTooAmbitious from "./routes/analysis_too_ambitious";
import ViewProfileComponent from "./routes/view_profile_component";
import ViewShortlist from "./routes/view_shortlist";
import ForumFinal from "./routes/forum_final";
import HomePage from "./routes/home_page";
import { UniversityContextProvider } from "./context/universityContext";

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
            <Route path="/api/user/view-forum/:userID" element={<ForumFinal />} />
            <Route path="/api/user/home/:userID" element={<HomePage />} />
            
          </Routes>
        </Router>
      </div>
    </UniversityContextProvider>
  );
};

export default App;
