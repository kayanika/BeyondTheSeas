import React from 'react';
import Avatar from '@mui/material/Avatar';
import userAvatar from '../images/background5.jpg';
import NotificationsIcon from '@mui/icons-material/Notifications'; // Import the Notifications icon

const UserProfileHeader = ({ userHasEvents }) => {
  // Replace these with actual user data
  const userName = 'Exotisa';

//   return (
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '10px' }}>
//       {userHasEvents && <NotificationsIcon style={{ color: 'red', fontSize: 24 }} />} {/* Larger notification icon */}
//       <div style={{ marginRight: '10px' }}>
//         <Avatar alt="User Avatar" src={userAvatar} /> {/* Use the imported image */}
//       </div>
//       <div>
//         <p style={{ margin: 0 }}>{userName}</p>
//       </div>
//     </div>
//   );
// };

// export default UserProfileHeader;
return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '10px' }}>
      <div style={{ marginRight: '10px' }}>
        <Avatar alt="User Avatar" src={userAvatar} />
      </div>
      <div>
        <p style={{ margin: 0 }}>{userName}</p>
      </div>
      <div style={{ marginLeft: '10px' }}>
        {userHasEvents ? (
          <NotificationsIcon style={{ color: 'red' }} />
        ) : (
          <NotificationsIcon style={{ color: 'white' }} />
        )}
      </div>
    </div>
  );
};

export default UserProfileHeader;
