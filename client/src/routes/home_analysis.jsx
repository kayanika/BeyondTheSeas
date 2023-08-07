import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import UniversityList from '../components/nonpersonalized_list';


const home_analysis = () => {
  return (
    <div className="home-analysis-container">
      <Header />
      <div className="sidebar-and-content">
        <Sidebar />
        <div className="content-container">
          <UniversityList />
          {/* Add your content specific to the home_analysis page here */}
          {/* For example, analysis details, charts, etc. */}
        </div>
        <div className="third-container">
          <div className="button-container">
            <Link to="/api/user/:userID/personalized/ambitious" className="button">
              Too Ambitious List
            </Link>
            
            <Link to="/api/user/:userID/personalized/probable"className="button">
              Most Probable List
            </Link>
            <Link to="/api/user/:userID/personalized/safe"className="button">
              Safe Option List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home_analysis;
