import React, {useEffect, useState } from 'react'
import beyondTheSeas from '../apis/beyondTheSeas'
import { UniversityContext } from '../context/universityContext'
import {useParams} from 'react-router-dom'
import UniversityList from './university_list_final'


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
    <div>
      <UniversityList tableData={universities} columns={columns}/>
    </div>
  )
}

export default SafeUniversityList
