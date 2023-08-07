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
import Home from "./routes/Home";
import Header from "./components/header";


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
  return <div>
    <Router>
        <Routes>
            <Route exact path="/api/user/:id/non-personalized-recommendation" Component={home_analysis} />
            <Route exact path="/api/user/:id/personalized-recommendation/ambitious" Component={analysis_too_ambitious} />
            <Route exact path="/api/user/:id/personalized-recommendation/safe" Component={analysis_safe_option} />
            <Route exact path="/api/user/:id/personalized-recommendation/probable" Component={analysis_probable_chances} />
            <Route exact path="/api/user/:id/student-profile" Component={view_profile_component} />
            <Route exact path="/api/user/:id/view-shortlist" Component={view_shortlist} />
            <Route exact path="/api/user/:id/view-forum" Component={forum} />
            <Route exact path="/api/user/:id/home" Component={Home} />


            
            
            
        </Routes>
    </Router>
  </div>;
};

export default App;