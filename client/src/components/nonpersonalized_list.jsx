import React, {useEffect, useContext} from 'react'
import beyondTheSeas from '../apis/beyondTheSeas'
import { UniversityContext } from '../context/universityContext'
import {useParams} from 'react-router-dom'


const NonPersonalizedUniversityList = (props) => {
    const {userID} = useParams();
   
     const {universities, setUniversities} = useContext(UniversityContext)
  useEffect(()=>{
    
    const fetchData= async() => {

    try{          
                console.log("sending request to backend")
               const response=await  beyondTheSeas.get(`/nonPersonalized/${userID}`);
               console.log("response from backend")
               setUniversities(response.data.data.universities);
               // console.log(response);
    } catch(err){
        console.log(err)
    }
    };
    fetchData(); //empty array so that it only runs once, when the component mounts
  },[]);
     //empty array so that it only runs once, when the component mounts
  return (
    <div className="list-group">
        <table className="table table-hover table-dark">
            <thead>
            <tr style={{ backgroundColor: '#007bff', color: 'white' }}>
                    <th scope="col">University Name</th>
                   
                    <th scope="col">Rank</th>
                  
                   
                    <th scope="col">Website link</th>
                    <th scope="col">Location</th>
                </tr>
            </thead>
            <tbody>
                
             {  universities.map((university) => { 
               return (<tr>
                  <td>{university.name}</td>
                  <td>{university.cs_ranking}</td>
                  <td>{university.website_link}</td>
                    <td>{university.location}</td>
                
               </tr>
               )
}   )
}

            </tbody>
        </table>
    </div>
  )
}

export default NonPersonalizedUniversityList
