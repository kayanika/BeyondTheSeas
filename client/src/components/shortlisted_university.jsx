import React, { useEffect, useState } from 'react';
import beyondTheSeas from '../apis/beyondTheSeas';
import { useParams } from 'react-router-dom';
import UniversityList from './university_list_final';
import PersonalizedChoiceBar from './personalizedCoiceBar';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import './index.css';

const NonPersonalizedUniversityList = () => {
  const { userID } = useParams();
  
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("sending request to backend");
        const response = await beyondTheSeas.get(`/profile/${userID}/shortlist`);
        console.log("response from backend");
        setUniversities(response.data.data.universities);

        console.log('university list: ', universities)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [userID]);

  const columns = [
    
    { id: 'cs_ranking', name: 'Rank' },
    { id: 'university_name', name: 'University Name' },
    { id: 'website_link', name: 'Website' },
    { id: 'location', name: 'Location' },
  ];

  return (
    <>
      <Box height={50} />
      <h1 style={{ textAlign: 'center' }}>Shortlisted University List</h1>
      <Grid container spacing={0}>
        <Grid item xs={10}>
          <UniversityList tableData={universities} columns={columns} />
        </Grid>
        <Grid item xs={2}>
          <PersonalizedChoiceBar />
        </Grid>
      </Grid>
    </>
  );
};

export default NonPersonalizedUniversityList;