import React, {useEffect, useState } from 'react'
import beyondTheSeas from '../apis/beyondTheSeas'
import { UniversityContext } from '../context/universityContext'
import {useParams} from 'react-router-dom'
import UniversityList from './university_list_final'
import Box from '@mui/material/Box';


const SafeUniversityList = (props) => {
  const {userID} = useParams();
  const [universities, setUniversities] = useState([]);
useEffect(()=>{
 
 const fetchData= async() => {

 try{          
    console.log("sending request to backend")
    const response=await  beyondTheSeas.get(`/personalized/${userID}/safe`);
    console.log("response from backend")
    setUniversities(response.data.data.universities);
    // console.log(response);
 } catch(err){
     console.log(err)
 }
 };
 fetchData(); //empty array so that it only runs once, when the component mounts
},[]);//empty array so that it only runs once, when the component mounts
const columns = [
  { id: 'name', name: 'University Name' },
  { id: 'cs_ranking', name: 'Rank' },
  { id: 'program_type', name: 'Program' },
  { id: 'tuition_fees', name: 'Tuition Fees' },
  { id: 'matched_courses', name: 'Matched Courses' }
];
  return (
    <>
    <Box height={100} />
      <h1 style={{ textAlign: 'center' }}>Safe Option List</h1>
      
      <div style={{ height: 800, width: '100%' }}>
      <UniversityList tableData={universities} columns={columns}/>
    </div>
    </>
     
  )
}

export default SafeUniversityList
