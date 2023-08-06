import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import home_analysis from "./routes/home_analysis";
import analysis_safe_option from "./routes/analysis_safe_option";
import analysis_probable_chances from "./routes/analysis_probable_chances";
import analysis_too_ambitious from "./routes/analysis_too_ambitious";
import Sidebar from './components/sidebar';
// import { Link } from 'react-router-dom'; // Import Link for routing
import view_profile_component from "./routes/view_profile_component";
import view_shortlist from "./routes/view_shortlist";
import forum from "./routes/forum";
import home_page from "./routes/home_page";
import Header from "./components/header";
import { UniversityContextProvider } from "./context/universityContext";

// import ViewProfile from './components/ViewProfile';
// import ViewShortlist from './components/ViewShortlist';
// import ViewForum from './components/ViewForum';
// import UniversityAnalysis from './components/UniversityAnalysis';
// import ExploreUniversities from './components/ExploreUniversities';

// const CommonLayout = ({ children }) => {
//   return (
//     <div>
//       <Header />
//       <Sidebar />
//       {children}
//     </div>
//   );
// };

const App = () => {
  return (
  <UniversityContextProvider>
  <div>
    <Router>
        <Routes>
            <Route exact path="/api/user/:userID/nonPersonalized" Component={home_analysis} />
            <Route exact path="/api/user/:userID/personalized/ambitious" Component={analysis_too_ambitious} />
            <Route exact path="/api/user/:userID/personalized/safe" Component={analysis_safe_option} />
            <Route exact path="/api/user/:userID/personalized/probable" Component={analysis_probable_chances} />
            <Route exact path="/api/user/:userID/student-profile" Component={view_profile_component} />
            <Route exact path="/api/user/:userID/view-shortlist" Component={view_shortlist} />
            <Route exact path="/api/user/:userID/view-forum" Component={forum} />
            <Route exact path="/api/user/:userID/home" Component={home_page} />
            
            
            
        </Routes>
    </Router>
  </div>
  </UniversityContextProvider>);
};

export default App;