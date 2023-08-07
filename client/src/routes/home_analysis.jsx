import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import PersonalizedChoiceBar from '../components/personalizedCoiceBar';
import UniversityList from '../components/nonpersonalized_list';
import { useParams } from 'react-router-dom';


const home_analysis = (props) => {

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
        <div className="personalizedCoiceBar">
          <PersonalizedChoiceBar/>
        </div>
      </div>
    </div>
  );
};

export default home_analysis;
