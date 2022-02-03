import React, { Component } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function Students(props) {

        const rows = props.studentList;

        return (
            <TableContainer component={Paper} sx={{ minWidth: '80%', maxWidth: '80%', minHeight: '100px', maxHeight: '70%'}}>
                <Table stickyHeader aria-label="Student Table">
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Year</TableCell>
                            <TableCell>Division</TableCell>
                            <TableCell>ID</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell >{row.FirstName}</TableCell>
                                <TableCell >{row.LastName}</TableCell>
                                <TableCell >{row.Year}</TableCell>
                                <TableCell >{row.Division}</TableCell>
                                <TableCell>{row.ID}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
export default Students;