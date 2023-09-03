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
  Button, // Import Button component from @mui/material
  Snackbar,
} from '@mui/material';
import './index.css';
import beyondTheSeas from '../apis/beyondTheSeas';
import { useParams } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const UniversityList = ({ tableData, columns }) => {
  const { userID } = useParams();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

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
        university_id: university.university_id,
      });
      console.log('University added to shortlist:', response.data);
      setIsSnackbarOpen(true); // Open the Snackbar on successful addition
    } catch (error) {
      console.error('Error adding university to shortlist:', error);
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

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Paper variant="outlined" elevation={0} sx={{ bgcolor: 'rgba(255, 255, 255, 0.5)', boxShadow: 1, border: 1 }}>
        <TableContainer>
        <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns?.map((singleCol, index) => (
                  <TableCell key={index}>
                    <TableSortLabel
                      active={orderBy === singleCol.id}
                      direction={orderBy === singleCol.id ? order : 'asc'}
                      onClick={() => handleSortRequest(singleCol.id)}
                    >
                      {singleCol.name}
                    </TableSortLabel>
                  </TableCell>
                ))}
                <TableCell>Add to Shortlist</TableCell> {/* New column header */}
              </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((university, index) => (
              <TableRow key={index}>
                {columns.map((column, colIndex) => (
                  <TableCell key={colIndex}>{university[column.id]}</TableCell>
                ))}
                <TableCell>
                  <Button
                    variant="outlined"
                    color="success"
                    onClick={() => handleAddToShortlist(university)}
                  >
                    Add
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          rowsPerPage={rowsPerPage}
          page={page}
          count={tableData.length}
          component="div"
          onPageChange={handlechangepage}
          onRowsPerPageChange={handleRowsPerPage}
        />
      </Paper>
      <Snackbar open={isSnackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
      <Alert onClose={handleSnackbarClose} severity="success">
        University added to the shortlist successfully
      </Alert>
    </Snackbar>
    </div>
  );
};

export default UniversityList;
