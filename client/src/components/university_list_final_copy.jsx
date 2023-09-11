// import React, { useEffect, useState } from 'react';
// import {
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TablePagination,
//   TableRow,
//   TableSortLabel,
//   Button,
//   Select, // Import Select component from @mui/material
//   MenuItem, // Import MenuItem component from @mui/material
//   Typography, // Import Typography component from @mui/material
//   Card,
//   CardContent,
//   CardActions,
//   Box,
// } from '@mui/material';

// // new
// // import React, { useEffect, useState } from 'react';

// import './index.css';
// import beyondTheSeas from '../apis/beyondTheSeas';
// import { useParams } from 'react-router-dom';

// const UniversityList = ({ tableData, columns }) => {
//   const { userID } = useParams();
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [orderBy, setOrderBy] = useState('');
//   const [order, setOrder] = useState('asc');
//   const [filterOption, setFilterOption] = useState('');
 

//   const handleSortRequest = (columnId) => {
//     const isAsc = orderBy === columnId && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(columnId);
//   };

//   const handlechangepage = (event, newpage) => {
//     setPage(newpage);
//   };

//   const handleRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   const handleAddToShortlist = async (university) => {
//     try {
//       const response = await beyondTheSeas.post(`/profile/${userID}/shortlist`, {
//         university_id: university.university_id, // Assuming the university id is stored in 'id' field
//       });
//       console.log('University added to shortlist:', response.data);
//       // You might want to update the UI or show a success message here
//     } catch (error) {
//       console.error('Error adding university to shortlist:', error);
//       // Handle the error, show an error message, etc.
//     }
//   };

//   const handleAddToBlacklist = async (university) => {
//     try {
//       const response = await beyondTheSeas.post(`/profile/${userID}/blacklist`, {
//         university_id: university.university_id, // Assuming the university id is stored in 'id' field
//       });
//       console.log('University added to blacklist:', response.data);
//       // You might want to update the UI or show a success message here
//     } catch (error) {
//       console.error('Error adding university to blacklist:', error);
//       // Handle the error, show an error message, etc.
//     }
//   };

//   const sortedData = [...tableData].sort((a, b) => {
//     if (order === 'asc') {
//       return a[orderBy] > b[orderBy] ? -1 : 1;
//     } else {
//       return a[orderBy] < b[orderBy] ? 1 : -1;
//     }
//   });

//   // return (
//   //   <div style={{ textAlign: 'center' }}>
//   //     <Paper variant="outlined" elevation={0} sx={{ bgcolor: 'rgba(255, 255, 255, 0.5)', boxShadow: 1, border: 1 }}>
//   //       <TableContainer>
//   //         <Table stickyHeader>
//   //           <TableHead>
//   //             <TableRow>
//   //               {columns?.map((singleCol, index) => (
//   //                 <TableCell key={index}>
//   //                   <TableSortLabel
//   //                     active={orderBy === singleCol.id}
//   //                     direction={orderBy === singleCol.id ? order : 'asc'}
//   //                     onClick={() => handleSortRequest(singleCol.id)}
//   //                   >
//   //                     {singleCol.name}
//   //                   </TableSortLabel>
//   //                 </TableCell>
//   //               ))}
//   //               <TableCell>Add to Shortlist</TableCell>
//   //               <TableCell>Add to Blacklist</TableCell>
//   //             </TableRow>
//   //           </TableHead>
//   //           <TableBody>
//   //             {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((university, index) => (
//   //               <TableRow key={index}>
//   //                 {columns.map((column, colIndex) => (
//   //                   <TableCell key={colIndex}>{university[column.id]}</TableCell>
//   //                 ))}
//   //                 <TableCell>
//   //                   <Button
//   //                     variant="outlined"
//   //                     color="success"
//   //                     onClick={() => handleAddToShortlist(university)}
//   //                   >
//   //                     Add
//   //                   </Button>
//   //                 </TableCell>
//   //                 <TableCell>
//   //                   <Button
//   //                     variant="outlined"
//   //                     color="error"
//   //                     onClick={() => handleAddToBlacklist(university)}
//   //                   >
//   //                     Blacklist
//   //                   </Button>
//   //                 </TableCell>
//   //               </TableRow>
//   //             ))}
//   //           </TableBody>
//   //         </Table>
//   //       </TableContainer>
//   //       <TablePagination
//   //         rowsPerPageOptions={[5, 10, 25]}
//   //         rowsPerPage={rowsPerPage}
//   //         page={page}
//   //         count={tableData.length}
//   //         component="div"
//   //         onPageChange={handlechangepage}
//   //         onRowsPerPageChange={handleRowsPerPage}
//   //       />
//   //     </Paper>
//   //   </div>
//   // );
//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//       {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((university, index) => (
//         <Card key={index} style={{ margin: '16px', minWidth: '300px' }}>
//           <CardContent>
//             {columns.map((column, colIndex) => (
//               <Typography key={colIndex}>
//                 <strong>{column.name}:</strong> {university[column.id]}
//               </Typography>
//             ))}
//           </CardContent>
//           <CardActions>
//             <Button
//               variant="outlined"
//               color="success"
//               onClick={() => handleAddToShortlist(university)}
//             >
//               Add to Shortlist
//             </Button>
//             <Button
//               variant="outlined"
//               color="error"
//               onClick={() => handleAddToBlacklist(university)}
//             >
//               Add to Blacklist
//             </Button>
//           </CardActions>
//         </Card>
//       ))}
//       <TablePagination
//         rowsPerPageOptions={[2, 3, 5]}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         count={tableData.length}
//         component="div"
//         onPageChange={handlechangepage}
//         onRowsPerPageChange={handleRowsPerPage}
//       />
//     </div>
//   );
// };

// export default UniversityList;


import React, { useEffect, useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Button,
  Select, // Import Select component from @mui/material
  MenuItem, // Import MenuItem component from @mui/material
  Typography, // Import Typography component from @mui/material
  Card,
  CardContent,
  CardActions,
  Box,
  CardMedia, // Import CardMedia component from @mui/material
 
} from '@mui/material';


import './index.css';
import beyondTheSeas from '../apis/beyondTheSeas';
import { useParams } from 'react-router-dom';
import universityImage1 from '../uniImages/1.png';
import universityImage2 from '../uniImages/2.png';
import universityImage3 from '../uniImages/3.png';
import universityImage4 from '../uniImages/4.png';
import universityImage5 from '../uniImages/5.png';
import universityImage6 from '../uniImages/6.png';
import universityImage7 from '../uniImages/7.png';
import universityImage8 from '../uniImages/8.png';
import universityImage9 from '../uniImages/9.png';
import universityImage10 from '../uniImages/10.png'; 

import { styled } from '@mui/system';
// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';

const StyledCard = styled(Card)(({ theme }) => ({
  width: '470px', // Set a fixed width for all cards
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginBottom: '20px',
  marginRight: '20px',
  [theme.breakpoints.down('sm')]: {
    width: '100%', // Adjust the width for smaller screens
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: '250px', // Set a fixed height for the image
  [theme.breakpoints.down('sm')]: {
    height: 'auto', // Adjust the height for smaller screens
  },
}));



// new
// import React, { useEffect, useState } from 'react';


const universityImages = [
  universityImage1,
  universityImage2,
  universityImage3,
  universityImage4,
  universityImage5,
  universityImage6,
  universityImage7,
  universityImage8,
  universityImage9,
  universityImage10,
];



const UniversityList = ({ tableData, columns }) => {
  const { userID } = useParams();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');
  const [filterOption, setFilterOption] = useState('');
  // const classes = useStyles();
  // console.log("tableData: ", tableData.university_id);
 

  const handleSortRequest = (columnId) => {
    const isAsc = orderBy === columnId && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(columnId);
  };

  const handlechangepage = (event, newpage) => {
    setPage(newpage);
  };

  const handleRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleAddToShortlist = async (university) => {
    try {
      const response = await beyondTheSeas.post(`/profile/${userID}/shortlist`, {
        university_id: university.university_id, // Assuming the university id is stored in 'id' field
      });
      console.log('University added to shortlist:', response.data);
      // You might want to update the UI or show a success message here
    } catch (error) {
      console.error('Error adding university to shortlist:', error);
      // Handle the error, show an error message, etc.
    }
  };

  const handleAddToBlacklist = async (university) => {
    try {
      const response = await beyondTheSeas.post(`/profile/${userID}/blacklist`, {
        university_id: university.university_id, // Assuming the university id is stored in 'id' field
      });
      console.log('University added to blacklist:', response.data);
      // You might want to update the UI or show a success message here
    } catch (error) {
      console.error('Error adding university to blacklist:', error);
      // Handle the error, show an error message, etc.
    }
  };

  const sortedData = [...tableData].sort((a, b) => {
    if (order === 'asc') {
      return a[orderBy] > b[orderBy] ? -1 : 1;
    } else {
      return a[orderBy] < b[orderBy] ? 1 : -1;
    }
  });

 
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((university, index) => (
        <StyledCard>
        <StyledCardMedia
          component="img"
          src={universityImages[university.cs_ranking - 1]}
          alt="University Image"
        />
           <CardContent style={{ flex: 1 }}>
            {columns.map((column, colIndex) => (
              <Typography key={colIndex}>
                <strong>{column.name}:</strong> {university[column.id]}
              </Typography>
            ))}
          </CardContent>
          <CardActions>
            <Button
              variant="outlined"
              color="success"
              onClick={() => handleAddToShortlist(university)}
            >
              Add to Shortlist
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => handleAddToBlacklist(university)}
            >
              Add to Blacklist
            </Button>
          </CardActions>
        </StyledCard>
      ))}
      <TablePagination
        rowsPerPageOptions={[2, 4, 6]}
        rowsPerPage={rowsPerPage}
        page={page}
        count={tableData.length}
        component="div"
        onPageChange={handlechangepage}
        onRowsPerPageChange={handleRowsPerPage}
      />
    </div>
  );
};

export default UniversityList;




