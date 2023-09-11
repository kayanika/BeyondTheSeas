// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { useParams } from 'react-router-dom';

const Sidebar2 = (props) => {
  const {userID} = useParams();
  
  return (
    <div className="sidebar">
      <div className="button-container" style={{ marginTop: '100px' }}>
        {/* Link to the /home page */}
        <Link to={`/api/user/${userID}/home`} className="button">
          Home
        </Link>
        {/* Link to the /view-profile page */}
        <Link to={`/api/user/user-profile/`} className="button">
          View Profile
        </Link>
        {/* Link to the /home_analysis page */}
        <Link to={`/api/user/nonPersonalized/${userID}`} className="button">
          University Analysis
        </Link>
        {/* Link to the /view-shortlist page */}
        <Link to="/api/user/view-shortlist/{$userID}" className="button">
          View Shortlist
        </Link>
        {/* Link to the /view-forum page */}
        <Link to="/api/user/view-forum/{$userID}" className="button">
          View Forum
        </Link>

        <Link to="/api/user/my-calendar" className="button">
          View Activity
        </Link>
        
        {/* Link to the /explore-universities page */}
        {/* <Link to="/explore-universities" className="button">
          Explore Universities
        </Link> */}
        
      </div>
    </div>
  );
};

export default Sidebar2;
