import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { IoIosAddCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { addApplicationAPI } from '../Services/allAPI';
import swal from 'sweetalert';

function Add() {

  const [userInput, setUserInput] = useState({
    company: '',
    jobRole: '',
    date: '',
    status: '',
    source: '',
    workType: '',
    notes: ''
  })

  const handleAddApplication=async()=>{
    // alert('API called')
    const {company,jobRole,date,status,source,workType}=userInput
    if(company && jobRole && date && status && source && workType)
    {
      try{
        const result=await addApplicationAPI(userInput)
        swal("Good job!", "Your job application has been added.", "success");


      }catch(err){
        console.log(err);
        
      }
    }else{
     swal("Please fill in all required fields.");
    }
  }

  const handleCancel=()=>{
    setUserInput({
      company: '',
    jobRole: '',
    date: '',
    status: '',
    source: '',
    workType: '',
    notes: ''
    })
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: '3.5rem',
          minHeight: "95vh",
          marginLeft: '1rem',
          marginRight: '1rem'
        }}
      >
        <Paper elevation={3} sx={{ width: 460, height: 680 }} className='d-flex justify-content-center align-items-center flex-column'>
          <h5 className='heading fw-semibold pb-4'>Add New Application</h5>

          <TextField id="outlined-basic" value={userInput.company} label="Company Name" variant="outlined" className='textfield-style pb-3' onChange={e => setUserInput({
            ...userInput, company: e.target.value
          })} />

          <TextField id="outlined-basic" value={userInput.jobRole} label="Job Role" variant="outlined" className='textfield-style pb-3'
            onChange={e => setUserInput({
              ...userInput, jobRole: e.target.value
            })} />
          <TextField
            id="date"
            value={userInput.date}
            label="Applied Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            className='textfield-style pb-3'
            onChange={e => setUserInput({
              ...userInput, date: e.target.value
            })}
          />

          <FormControl className='textfield-style pb-3'>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userInput.status}
              label="status"
              onChange={e => setUserInput({
                ...userInput, status: e.target.value
              })}
            >
              <MenuItem value="Applied">Applied</MenuItem>
              <MenuItem value="Interview">Interview</MenuItem>
              <MenuItem value="Hired">Hired</MenuItem>
              <MenuItem value="Rejected">Rejected</MenuItem>
            </Select>
          </FormControl>



          <FormControl className='textfield-style pb-3'>
            <InputLabel id="demo-simple-select-label">Source</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userInput.source}
              label="source"
              onChange={e => setUserInput({
                ...userInput, source: e.target.value
              })}
            >
              <MenuItem value="LinkedIn">LinkedIn</MenuItem>
              <MenuItem value="Indeed">Indeed</MenuItem>
              <MenuItem value="Naukrigulf">Naukrigulf</MenuItem>
              <MenuItem value="Bayt">Bayt</MenuItem>
              <MenuItem value="Dubizzle">Dubizzle</MenuItem>
              <MenuItem value="Direct HR Mail">Direct HR Mail</MenuItem>
            </Select>
          </FormControl>


          <FormControl className="textfield-style pb-3" variant="outlined" >
            <InputLabel id="work-type-label">Work Type</InputLabel>
            <Select
              labelId="work-type-label"
              id="work-type-select"
              value={userInput.workType}
              onChange={e => setUserInput({
              ...userInput, workType: e.target.value
            })}
              label="Work Type"
            >
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="On-site">On-site</MenuItem>
              <MenuItem value="Hybrid">Hybrid</MenuItem>
            </Select>
          </FormControl>


          <TextField className="textfield-style pb-3"
            label="Notes (optional)"
            multiline
            minRows={2}
            variant="outlined"
            value={userInput.notes}
            onChange={e => setUserInput({
              ...userInput, notes: e.target.value
            })}
          />

          <div className='d-flex gap-4 mt-3'>
            <button className="btn btn-success d-flex align-items-center fw-semibold px-4" onClick={handleAddApplication}>< IoIosAddCircle className='me-2 fs-5' />Add</button>
            
            
            <button className="btn btn-danger d-flex align-items-center fw-semibold" onClick={handleCancel}><MdCancel className='me-2 fs-5' />Cancel</button>
          </div>


        </Paper>
      </Box>


    </>
  )
}

export default Add