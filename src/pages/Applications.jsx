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
import Tooltip from '@mui/material/Tooltip';
import { deleteApplicationAPI, getApplicationListAPI } from '../Services/allAPI';
import Edit from "../components/Edit";

function Applications({setApplicationList,applicationList}) {


  const [openEdit, setOpenEdit] = React.useState(false);
  const [selectedApplication, setSelectedApplication] = React.useState(null);


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


  const handleDelete = async (id) => {
    try {
      await deleteApplicationAPI(id);
      const response = await getApplicationListAPI();
    setApplicationList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const refreshApplications = async () => {
  try {
    const response = await getApplicationListAPI();
    setApplicationList(response.data);
  } catch (err) {
    console.log(err);
  }
};

  return (
    <Box sx={{ margin: "5rem auto", maxWidth: "80rem",minHeight:'100vh'}}>
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
            {applicationList.map((row, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell>{row.company}</StyledTableCell>
                <StyledTableCell align="right">{row.jobRole}</StyledTableCell>
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

                  <Tooltip title="Edit">
                    <IconButton
                      size="small"
                      color="primary"
                      className='me-1'
                      onClick={() => {
                        setSelectedApplication(row); 
                        setOpenEdit(true); 
                      }}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>

                  <Edit
                    open={openEdit}
                    handleClose={() => setOpenEdit(false)}
                    applicationData={selectedApplication}
                    refreshApplications={refreshApplications}  
                  />


                  <Tooltip title="Delete">
                    <IconButton size="small" color="error" onClick={() => { handleDelete(row?.id) }}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>

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
