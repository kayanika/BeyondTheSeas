import React from 'react';
import Header from '../components/mostProbableHeader';
import Sidebar from '../components/sidebar';
import UniversityList from '../components/university_list';

const analysis_probable_chances = () => {
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
}

export default analysis_probable_chances
