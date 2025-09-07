import React, { useState, useEffect } from 'react';
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    TextField, InputLabel, MenuItem, FormControl, Select, Button
} from '@mui/material';
import { updateApplicationAPI } from '../Services/allAPI';
import swal from 'sweetalert';


function Edit({ open, handleClose, applicationData, refreshApplications }) {
    const [userInput, setUserInput] = useState(applicationData || {});

    // update local state when applicationData changes
    useEffect(() => {
        setUserInput(applicationData || {});
    }, [applicationData]);

    const handleUpdate = async () => {
        const { company, jobRole, date, status, source, workType } = userInput;
        if (company && jobRole && date && status && source && workType) {
            try {
                await updateApplicationAPI(applicationData.id, userInput);
                swal("Updated!", "Your job application has been updated.", "success");
                refreshApplications();
                handleClose();
            } catch (err) {
                console.log(err);
            }
        } else {
            swal("Please fill in all required fields.");
        }
    };



    return (
        <>
            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth >
                <DialogTitle className='text-center'>Edit Application</DialogTitle>
                <DialogContent dividers className='d-flex justify-content-center align-items-center flex-column'>
                    <TextField id="outlined-basic" value={userInput.company} label="Company Name" variant="outlined" className='textfield-style pb-3 mt-3' onChange={e => setUserInput({
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="error">Cancel</Button>
                    <Button onClick={handleUpdate} color="success" variant="contained">Update</Button>
                </DialogActions>
            </Dialog>

        </>
    )
}

export default Edit