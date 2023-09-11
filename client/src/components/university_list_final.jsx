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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');

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

  useEffect(() => {
    console.log('received list:', tableData);
    console.log('received columns:', columns);
  }, []);

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
        src={universityImages[university.cs_ranking-1]}
        alt="University Image"
      />
         <CardContent style={{ flex: 1 }}>
          {columns.map((column, colIndex) => (
            <Typography key={colIndex}>
              <strong>{column.name}:</strong> {university[column.id]}
            </Typography>
          ))}
        </CardContent>
       
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
