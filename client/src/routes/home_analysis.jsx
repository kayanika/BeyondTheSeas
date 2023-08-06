// home_analysis.jsx
import React from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import UniversityList from '../components/university_list';



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
    </div>
  </div>
  );
};

export default home_analysis;
