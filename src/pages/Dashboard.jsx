import React from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import ThumbDownAltRoundedIcon from '@mui/icons-material/ThumbDownAltRounded';

function Dashboard() {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5 d-flex justify-content-center align-items-center">

          {/* total */}
          <div className="col-6 col-md-2 d-flex justify-content-center align-items-center ">
            <div className="d-flex align-items-center p-3 shadow rounded bg-white" style={{ width: "200px" }}>
              <AssignmentIcon style={{ fontSize: "40px", color: "#383a3bff" }} />
              <div className="d-flex flex-column ms-3">
                <span style={{ fontSize: "16px", color: "#4b5156", fontWeight: 'bold' }}>Total</span>
                <span style={{ fontSize: "22px", fontWeight: "bold" }}>12</span>
              </div>
            </div>
          </div>

          {/*applied*/}
          <div className="col-6 col-md-2 d-flex justify-content-center align-items-center ">
            <div className="d-flex align-items-center p-3 shadow rounded bg-white" style={{ width: "200px" }}>
              <CheckCircleRoundedIcon style={{ fontSize: "40px", color: "#6a6a6aff" }} />
              <div className="d-flex flex-column ms-3">
                <span style={{ fontSize: "16px", color: "#4b5156", fontWeight: 'bold' }}>Applied</span>
                <span style={{ fontSize: "22px", fontWeight: "bold" }}>5</span>
              </div>
            </div>
          </div>

          {/* interview */}
          <div className="col-6 col-md-2 d-flex justify-content-center align-items-center ">
            <div className="d-flex align-items-center p-3 shadow rounded bg-white" style={{ width: "200px" }}>
              <BusinessRoundedIcon style={{ fontSize: "40px", color: "#4b9cedff" }} />
              <div className="d-flex flex-column ms-3">
                <span style={{ fontSize: "16px", color: "#4b5156", fontWeight: 'bold' }}>Interview</span>
                <span style={{ fontSize: "22px", fontWeight: "bold" }}>5</span>
              </div>
            </div>
          </div>

          {/* hired */}
          <div className="col-6 col-md-2 d-flex justify-content-center align-items-center ">
            <div className="d-flex align-items-center p-3 shadow rounded bg-white" style={{ width: "200px" }}>
              <ThumbUpAltRoundedIcon style={{ fontSize: "40px", color: "#7fe876ff" }} />
              <div className="d-flex flex-column ms-3">
                <span style={{ fontSize: "16px", color: "#4b5156", fontWeight: 'bold' }}>Hired</span>
                <span style={{ fontSize: "22px", fontWeight: "bold" }}>1</span>
              </div>
            </div>
          </div>

          {/* rejected */}
          <div className="col-6 col-md-2 d-flex justify-content-center align-items-center ">
            <div className="d-flex align-items-center p-3 shadow rounded bg-white" style={{ width: "200px" }}>
              <ThumbDownAltRoundedIcon style={{ fontSize: "40px", color: "#ef5151ff" }} />
              <div className="d-flex flex-column ms-3">
                <span style={{ fontSize: "16px", color: "#4b5156", fontWeight: 'bold' }}>Rejected</span>
                <span style={{ fontSize: "22px", fontWeight: "bold" }}>10</span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Dashboard