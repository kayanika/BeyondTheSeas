import React, {useEffect, useContext} from 'react'
import beyondTheSeas from '../apis/beyondTheSeas'
import { UniversityContext } from '../context/universityContext'


const UniversityList = (props) => {
     const {universities, setUniversities} = useContext(UniversityContext)
    useEffect(async() => {

    try{          
                console.log("sending request to backend")
               const response=await  beyondTheSeas.get('/:userID/personalized/probable');
               console.log("response from backend")
               setUniversities(response.data.data.universities);
               // console.log(response);
    } catch(err){
        console.log(err)
    }
    },[]) //empty array so that it only runs once, when the component mounts
  return (
    <div className="list-group">
        <table className="table table-hover table-dark">
            <thead>
            <tr style={{ backgroundColor: '#007bff', color: 'white' }}>
                    <th scope="col">University Name</th>
                   
                    <th scope="col">Rank</th>
                  
                    <th scope="col">Program Name</th>
                    <th scope="col">Tuition Fee</th>
                    <th scope="col">Matching Field of Interest</th>
                </tr>
            </thead>
            <tbody>
                
             { 
             <tr>
 <td></td>
             </tr>
}

            </tbody>
        </table>
    </div>
  )
}

export default UniversityList
