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
} from '@mui/material';
import './index.css';

const UniversityList = ({ tableData, columns }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
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

  const handleAddToShortlist = (university) => {
    // Implement your logic here to handle adding to shortlist
    console.log('Adding university to shortlist:', university);
  };

  const sortedData = [...tableData].sort((a, b) => {
    if (order === 'asc') {
      return a[orderBy] > b[orderBy] ? -1 : 1;
    } else {
      return a[orderBy] < b[orderBy] ? 1 : -1;
    }
  });

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
                  </TableCell> {/* Add to Shortlist button cell */}
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
    </div>
  );
};

export default UniversityList;
