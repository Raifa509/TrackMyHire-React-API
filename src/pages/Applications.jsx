import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import { Height } from '@mui/icons-material';

function Applications() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#3d3f40ff",
      color: theme.palette.common.white,
      fontWeight: "bold",
      height: 50,
      fontSize: '16px',
      textAlign: "center",

    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
      textAlign: "center",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData(company, role, date, status, source, workType, notes) {
    return { company, role, date, status, source, workType, notes };
  }

  const rows = [
    createData("Google", "UI/UX", "12/05/2025", "Applied", "Indeed", "Remote", ""),
    createData("Google", "UI/UX", "12/05/2025", "Rejected", "Indeed", "Remote", ""),

    createData("Google", "UI/UX", "12/05/2025", "Hired", "Indeed", "Remote", ""),

    createData("Amazon", "Frontend Dev", "14/05/2025", "Interview", "LinkedIn", "Hybrid", "Prepare React"),
  ];

  return (
    <Box sx={{ margin: "5rem auto", maxWidth: "80rem" }}>
      <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
        <Table size="small" aria-label="applications table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Company</StyledTableCell>
              <StyledTableCell align="right">Job Role</StyledTableCell>
              <StyledTableCell align="right">Applied Date</StyledTableCell>

              <StyledTableCell align="right">Source</StyledTableCell>
              <StyledTableCell align="right">Work Type</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Notes</StyledTableCell>
              <StyledTableCell align="center" sx={{ width: 120 }}>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell>{row.company}</StyledTableCell>
                <StyledTableCell align="right">{row.role}</StyledTableCell>
                <StyledTableCell align="right">{row.date}</StyledTableCell>

                <StyledTableCell align="right">{row.source}</StyledTableCell>
                <StyledTableCell align="right">{row.workType}</StyledTableCell>
                <StyledTableCell align="right">
                  <span
                    style={{
                      backgroundColor:
                        row.status === "Applied"
                          ? "#827f7fd8"
                          : row.status === "Interview"
                            ? "#3054f4ff"
                            : row.status === "Hired"
                              ? "#62d458ff"
                              : row.status === "Rejected"
                                ? "#fc1111ff"
                                : "transparent",
                      color: "white",
                      padding: "4px 8px",
                      borderRadius: "7px",
                      fontWeight: 400,
                    }}
                  >
                    {row.status}
                  </span>
                </StyledTableCell>

                <StyledTableCell align="right">{row.notes}</StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton size="small" color="primary" className='me-1'>
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color="error">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Applications;
