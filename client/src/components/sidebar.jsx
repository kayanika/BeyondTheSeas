
import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@mui/material";


const Sidebar = () => {
  const { userID } = useParams();

  return (
     <div className="sidebar">
      {/* <div className="button-container"> */}
        <Button color="success"  onClick={() => window.location.href = `/api/user/${userID}/home`} className="button">
          Home
        </Button>
        <Button variant="outlined" onClick={() => window.location.href = `/api/user/student-profile/${userID}`} className="button">
          View Profile
        </Button>
        <Button variant="outlined" onClick={() => window.location.href = `/api/user/nonPersonalized/${userID}`} className="button">
          University Analysis
        </Button>
        <Button variant="outlined" onClick={() => window.location.href = `/api/user/view-shortlist/${userID}`} className="button">
          View Shortlist
        </Button>
        <Button variant="outlined" onClick={() => window.location.href = `/api/user/view-forum/${userID}`} className="button">
          View Forum
        </Button>
      {/* </div> */}
     </div>
  );
};

export default Sidebar;
