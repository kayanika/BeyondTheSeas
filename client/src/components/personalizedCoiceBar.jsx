// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { useParams } from 'react-router-dom';

const PersonalizedChoiceBar = (props) => {
  const {userID} = useParams();
  
  return (
    <div className="personalizedChoiceBar">
<div className="third-container">
          <div className="button-container">
            <Link to={`/api/user/personalized/${userID}/ambitious`} className="button">
              Too Ambitious List
            </Link>
            
            <Link to={`/api/user/personalized/${userID}/probable`}className="button">
              Most Probable List
            </Link>
            <Link to={`/api/user/personalized/${userID}/safe`}className="button">
              Safe Option List
            </Link>
          </div>
        </div>
    </div>
  );
};

export default PersonalizedChoiceBar;
