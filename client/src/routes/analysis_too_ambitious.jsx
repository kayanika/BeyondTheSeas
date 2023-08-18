import React from 'react';
import Header from '../components/tooAmbitiousHeader';
import Sidebar from '../components/sidebar';

import AmbitiousUniversityList from '../components/ambitious_university_list';

const AnalysisTooAmbitious = () => {
  return (
    <div className="home-analysis-container">
    <Header />
    <div className="sidebar-and-content">
      <Sidebar />
      <div className="content-container">
        <AmbitiousUniversityList />
        {/* Add your content specific to the home_analysis page here */}
        {/* For example, analysis details, charts, etc. */}
      </div>
    </div>
  </div>
  );
}

export default AnalysisTooAmbitious
