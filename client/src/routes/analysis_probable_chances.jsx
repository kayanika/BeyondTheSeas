import React from 'react';
import Header from '../components/mostProbableHeader';
import Sidebar from '../components/sidebar';
import ProbableUniversityList from '../components/probable_university_list';


const AnalysisProbableChances = () => {
  return (
    <div className="home-analysis-container">
    <Header />
    <div className="sidebar-and-content">
      <Sidebar />
      <div className="content-container">
        <ProbableUniversityList/>
        {/* Add your content specific to the home_analysis page here */}
        {/* For example, analysis details, charts, etc. */}
      </div>
    </div>
  </div>
  );
}

export default AnalysisProbableChances
