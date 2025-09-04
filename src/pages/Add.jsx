import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { IoIosAddCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";


function Add() {

  const [status, setStatus] = React.useState('');
  const [source, setSource] = React.useState('');
  const [work, setWork] = React.useState('');

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  const handleSourceChange = (event) => {
    setSource(event.target.value);
  };
  const handleWorkChange = (event) => {
    setWork(event.target.value);
  };


  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: '3.5rem',
          minHeight: "95vh",
          marginLeft:'1rem',
          marginRight:'1rem'
        }}
      >
        <Paper elevation={3} sx={{ width: 420, height: 680 }} className='d-flex justify-content-center align-items-center flex-column'>
          <h5 className='heading fw-semibold pb-4'>Add New Application</h5>
          <TextField id="outlined-basic" label="Company Name" variant="outlined" className='textfield-style pb-3' />
          <TextField id="outlined-basic" label="Job Role" variant="outlined" className='textfield-style pb-3' />
          <TextField
            id="date"
            label="Applied Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            className='textfield-style pb-3'
          />

          <FormControl className='textfield-style pb-3'>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="status"
              onChange={handleStatusChange}
            >
              <MenuItem value={10}>Applied</MenuItem>
              <MenuItem value={20}>Interview</MenuItem>
              <MenuItem value={30}>Hired</MenuItem>
              <MenuItem value={40}>Rejected</MenuItem>
            </Select>
          </FormControl>
          <FormControl className='textfield-style pb-3'>
            <InputLabel id="demo-simple-select-label">Source</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={source}
              label="source"
              onChange={handleSourceChange}
            >
              <MenuItem value={10}>Linkedin</MenuItem>
              <MenuItem value={20}>Indeed</MenuItem>
              <MenuItem value={30}>Naukrigulf</MenuItem>
              <MenuItem value={40}>Bayt</MenuItem>
              <MenuItem value={40}>Dubizzle</MenuItem>
              <MenuItem value={40}>Direct HR Mail</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="textfield-style pb-3" variant="outlined" >
            <InputLabel id="work-type-label">Work Type</InputLabel>
            <Select
              labelId="work-type-label"
              id="work-type-select"
              value={work}
              onChange={handleWorkChange}
              label="Work Type"
            >
              <MenuItem value="remote">Remote</MenuItem>
              <MenuItem value="onsite">On-site</MenuItem>
              <MenuItem value="hybrid">Hybrid</MenuItem>
            </Select>
          </FormControl>
          <TextField className="textfield-style pb-3"
            label="Notes (optional)"
            multiline
            minRows={2}
            variant="outlined"

          />

          <div className='d-flex gap-4 mt-3'>
            <button className="btn btn-success d-flex align-items-center fw-semibold px-4">< IoIosAddCircle className='me-2 fs-5' />Add</button>
            <button className="btn btn-danger d-flex align-items-center fw-semibold"><MdCancel className='me-2 fs-5' />Cancel</button>
          </div>
        </Paper>
      </Box>


    </>
  )
}

export default Add