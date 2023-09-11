import React, { useEffect, useState } from 'react';
import beyondTheSeas from '../apis/beyondTheSeas';
import { useParams } from 'react-router-dom';
import UniversityList from './university_list_final_copy';
import PersonalizedChoiceBar from './personalizedCoiceBar';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import './index.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const NonPersonalizedUniversityList = () => {
  const { userID } = useParams();
  
  const [universities, setUniversities] = useState([]);
  const [newFilterOption, setFilterOption] = useState('');

  const handleFilterOptionChange = async (event) => {
    // newFilterOption = event.target.value;
    // setFilterOption(event.target.value);
    // console.log("filterOption: ", newFilterOption);
    const newFilterOption = event.target.value;
    try {
      // if(newFilterOption === "") {
      //   const response = await beyondTheSeas.get(`/nonPersonalized/${userID}`);
      //   setUniversities(response.data.data.universities);
      // }
      if(newFilterOption === "tuitionFees"| newFilterOption === "scholarship") {
      const response = await beyondTheSeas.get(`/nonPersonalized/${userID}/${newFilterOption}`);
      // setUniversities(response.data.data.universities);
      setUniversities(response.data.data.user);
      }
      else {
        const response = await beyondTheSeas.get(`/nonPersonalized/${userID}`);
        setUniversities(response.data.data.universities);
      }
     setFilterOption(newFilterOption); // Update filter option after fetching data
     console.log("filterOption: ", newFilterOption);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("sending request to backend");
        const response = await beyondTheSeas.get(`/nonPersonalized/${userID}`);
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
    { id: 'name', name: 'University Name' },
    { id: 'website_link', name: 'Website' },
    { id: 'location', name: 'Location' },
  ];

  return (
    <>
      <Box height={70} />
      <h1 style={{ textAlign: 'center' }}>Nonpersonalized Analysis List</h1>
      <Grid container spacing={0}>
        <Grid item xs={10}>
          {/* <div className="filter"> */}
          
          {/* </div> */}
          <UniversityList tableData={universities} columns={columns} />

        </Grid>
        <Grid item xs={2}>
        <Box sx={{ minWidth: 120, paddingX:3 }}>
        <FormControl fullWidth sx={{ borderColor: 'success.main' }}>
              <InputLabel id="filter">Filter Option</InputLabel>
              <Select
                labelId="filter"
                id='filter'
                label="Filter Option"
                value={newFilterOption}
                onChange={(e) => handleFilterOptionChange(e)}
               
              >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="scholarship">Scholarship</MenuItem>
              <MenuItem value="tuitionFees">Tuition Fees</MenuItem>
              
              </Select>
              </FormControl>
              </Box>
              <Box sx={{ marginTop: 3}}>
              <Typography variant="h5" sx={{ textAlign: 'center', paddingX:2 }}>Personalized Analysis</Typography>
              </Box>
              {/* <Typography variant="h9" sx={{ marginTop: 2 }}>Personalized Analysis</Typography> */}

          <PersonalizedChoiceBar />
        </Grid>
      </Grid>
    </>
  );
};

export default NonPersonalizedUniversityList;


