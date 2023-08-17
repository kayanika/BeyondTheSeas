

import React, { useEffect, useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material';
import './index.css'
// import beyondTheSeas from '../apis/beyondTheSeas'; // Import your API instance
// import { UniversityContext } from '../context/universityContext';
//import { useParams } from 'react-router-dom';


const UniversityList = ({tableData, columns}) => {
  

  const handlechangepage = (event, newpage) => {
    pagechange(newpage)
}
const handleRowsPerPage = (event) => {
    rowperpagechange(+event.target.value)
    pagechange(0);
 }

const [rows, rowchange] = useState([]);
const [page, pagechange] = useState(0);
const [rowperpage, rowperpagechange] = useState(5);

  useEffect(()=>{
      console.log('received list:', tableData)
      console.log('received columns:', columns)


    }, [])


  return (
    <div  style={{ textAlign: 'center' }}>
      {/* <h1>University List</h1> */}
      <Paper variant="outlined" elavation={0} sx={{bgcolor: 'rgba(255, 255, 255, 0.5)',boxShadow: 1,border: 1}}>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns?.map((singleCol, index) => (
                  <TableCell key={index} >{singleCol.name}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData
              .slice(page * rowperpage, page * rowperpage + rowperpage)
              .map((university, index) => (
                  <TableRow key={index}>
                    {columns.map((column, colIndex) => (
                      <TableCell key={colIndex}>{university[column.id]}</TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    rowsPerPage={rowperpage}
                    page={page}
                    count={tableData.length}
                    component="div"
                    onPageChange={handlechangepage}
                    onRowsPerPageChange={handleRowsPerPage}

                ></TablePagination>
      </Paper>
    </div>
  );
  }
export default UniversityList;

