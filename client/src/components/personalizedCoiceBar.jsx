import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Button,Stack } from "@mui/material";

const PersonalizedChoiceBar = () => {
  const { userID } = useParams();

  return (
    <div className="personalizedChoiceBar">
      <div className="third-container">
      <Stack direction="column" spacing={1}>
          <Button variant="outlined" color="success" component={Link} to={`/api/user/personalized/${userID}/ambitious`} className="button">
            Too Ambitious List
          </Button>
          
          <Button variant="outlined" color="success"  component={Link} to={`/api/user/personalized/${userID}/probable`} className="button">
            Most Probable List
          </Button>
          <Button variant="outlined" color="success"  component={Link} to={`/api/user/personalized/${userID}/safe`} className="button">
            Safe Option List
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default PersonalizedChoiceBar;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import { Button, Stack } from "@mui/material";

// const PersonalizedChoiceBar = () => {
//   const { userID } = useParams();

//   return (
//     <div className="personalizedChoiceBar">
//       <div className="third-container">
//         <Stack direction="column" spacing={1}>
//           <Button
//             variant="success"
            
//             component={Link}
//             to={`/api/user/personalized/${userID}/ambitious`}
//           >
//             Too Ambitious List
//           </Button>
//           <Button
//             variant="success"
            
//             component={Link}
//             to={`/api/user/personalized/${userID}/probable`}
//           >
//             Most Probable List
//           </Button>
//           <Button
//             variant="success"
            
//             component={Link}
//             to={`/api/user/personalized/${userID}/safe`}
//           >
//             Safe Option List
//           </Button>
//         </Stack>
//       </div>
//     </div>
//   );
// };

// export default PersonalizedChoiceBar;
