import React from 'react';
import Header from '../components/safeOptionHeader';
import Sidebar from '../components/sidebar';
import SafeUniversityList from '../components/safe_university_list';

const AnalysisSafeOption = () => {
  return (
    <div className="home-analysis-container">
    <Header />
    <div className="sidebar-and-content">
      <Sidebar />
      <div className="content-container">
        <SafeUniversityList />
        {/* Add your content specific to the home_analysis page here */}
        {/* For example, analysis details, charts, etc. */}
      </div>
    </div>
  </div>
  );
}

export default AnalysisSafeOption
