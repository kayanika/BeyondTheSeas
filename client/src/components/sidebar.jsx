// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="button-container">
        {/* Link to the /home page */}
        <Link to="/api/user/:id/home" className="button">
          Home
        </Link>
        {/* Link to the /view-profile page */}
        <Link to="/api/user/:id/student-profile" className="button">
          View Profile
        </Link>
        {/* Link to the /home_analysis page */}
        <Link to="/api/user/:id/non-personalized-recommendation" className="button">
          University Analysis
        </Link>
        {/* Link to the /view-shortlist page */}
        <Link to="/api/user/:id/view-shortlist" className="button">
          View Shortlist
        </Link>
        {/* Link to the /view-forum page */}
        <Link to="/api/user/:id/view-forum" className="button">
          View Forum
        </Link>
        
        {/* Link to the /explore-universities page */}
        {/* <Link to="/explore-universities" className="button">
          Explore Universities
        </Link> */}
        
      </div>
    </div>
  );
};

export default Sidebar;
