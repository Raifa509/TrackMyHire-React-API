import React from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import ThumbDownAltRoundedIcon from '@mui/icons-material/ThumbDownAltRounded';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
const options = {
  plugins: {
    legend: {
      display: true,
      position: 'right',
      align: 'start',
      labels: {
        boxWidth: 20,
        padding: 15,
      },
    },
    tooltip: {
      enabled: true,
    },
    datalabels: {
      color: '#fff',
      formatter: (value, context) => {
        const dataset = context.chart.data.datasets[0];
        const total = dataset.data.reduce((acc, val) => acc + val, 0);
        return ((value / total) * 100).toFixed(1) + '%';
      },
    },
  },
  hover: {
    mode: null,
  },
};



function Dashboard({ applicationList }) {
  console.log(applicationList);

  const total = applicationList.length
  const applied = applicationList.filter(item => item.status === 'Applied').length
  const interview = applicationList.filter(item => item.status === 'Interview').length
  const hired = applicationList.filter(item => item.status === 'Hired').length
  const rejected = applicationList.filter(item => item.status === 'Rejected').length

  //application by status
  const statusData = {
    labels: ['Applied', 'Interview', 'Hired', 'Rejected'],
    datasets: [
      {
        label: 'Applications Status',
        data: [applied, interview, hired, rejected],
        backgroundColor: ['#13dceaff', '#2683e0ff', '#7fe876ff', '#e32d2dff'],
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  //application by source
  const sources = ["LinkedIn", "Indeed", "Naukrigulf", "Bayt", "Dubizzle", "Direct HR Mail"];
  const sourceCounts = sources.map(src =>
    applicationList.filter(app => app.source === src).length
  );
  const sourceData = {
    labels: sources,
    datasets: [
      {
        label: 'Applications',
        data: sourceCounts,
        backgroundColor: ['#36da11ff', '#fd9a30ff', '#55ebffff', '#e6abffff', '#f9e850ff', '#d59d6cff'],
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  //application by work type
  const work = ["Hybrid", "On-site", "Remote"];
  const workCounts = work.map(item =>
    applicationList.filter(app => app.workType === item).length
  );
  const workData = {
    labels: work,
    datasets: [
      {
        label: 'Applications',
        data: workCounts,
        backgroundColor: ['#4284e7ff', '#fde230ff', '#fd8337ff'],
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="container-fluid min-vh-100">
        <div className="row mt-5 d-flex justify-content-center align-items-center">

          {/* total */}
          <div className="col-6 col-md-2 d-flex justify-content-center align-items-center p-3 ">
            <div className="d-flex align-items-center p-3 shadow rounded bg-white card-hover" style={{ width: "200px" }}>
              <AssignmentIcon style={{ fontSize: "40px", color: "#1b1919ff" }} />
              <div className="d-flex flex-column ms-3">
                <span style={{ fontSize: "16px", color: "#4b5156", fontWeight: 'bold' }}>Total</span>
                <span style={{ fontSize: "22px", fontWeight: "bold" }}>{total}</span>
              </div>
            </div>
          </div>

          {/*applied*/}
          <div className="col-6 col-md-2 d-flex justify-content-center align-items-center p-3 ">
            <div className="d-flex align-items-center p-3 shadow rounded bg-white card-hover" style={{ width: "200px" }}>
              <CheckCircleRoundedIcon style={{ fontSize: "40px", color: "#6a6a6aff" }} />
              <div className="d-flex flex-column ms-3">
                <span style={{ fontSize: "16px", color: "#4b5156", fontWeight: 'bold' }}>Applied</span>
                <span style={{ fontSize: "22px", fontWeight: "bold" }}>{applied}</span>
              </div>
            </div>
          </div>

          {/* interview */}
          <div className="col-6 col-md-2 d-flex justify-content-center align-items-center p-3">
            <div className="d-flex align-items-center p-3 shadow rounded bg-white card-hover" style={{ width: "200px" }}>
              <BusinessRoundedIcon style={{ fontSize: "40px", color: "#4b9cedff" }} />
              <div className="d-flex flex-column ms-3">
                <span style={{ fontSize: "16px", color: "#4b5156", fontWeight: 'bold' }}>Interview</span>
                <span style={{ fontSize: "22px", fontWeight: "bold" }}>{interview}</span>
              </div>
            </div>
          </div>

          {/* hired */}
          <div className="col-6 col-md-2 d-flex justify-content-center align-items-center p-3">
            <div className="d-flex align-items-center p-3 shadow rounded bg-white card-hover" style={{ width: "200px" }}>
              <ThumbUpAltRoundedIcon style={{ fontSize: "40px", color: "#7fe876ff" }} />
              <div className="d-flex flex-column ms-3">
                <span style={{ fontSize: "16px", color: "#4b5156", fontWeight: 'bold' }}>Hired</span>
                <span style={{ fontSize: "22px", fontWeight: "bold" }}>{hired}</span>
              </div>
            </div>
          </div>

          {/* rejected */}
          <div className="col-6 col-md-2 d-flex justify-content-center align-items-center p-3 ">
            <div className="d-flex align-items-center p-3 shadow rounded bg-white card-hover" style={{ width: "200px" }}>
              <ThumbDownAltRoundedIcon style={{ fontSize: "40px", color: "#ef5151ff" }} />
              <div className="d-flex flex-column ms-3">
                <span style={{ fontSize: "16px", color: "#4b5156", fontWeight: 'bold' }}>Rejected</span>
                <span style={{ fontSize: "22px", fontWeight: "bold" }}>{rejected}</span>
              </div>
            </div>
          </div>


        </div>

        <div className="container" style={{ marginTop: '4rem'}}>
          <div className="row">
         
            <div className="col-md-4 p-4 shadow-sm">
              <h5 className='text-center'>Application By Status</h5>
              <Pie data={statusData} options={options} plugins={[ChartDataLabels]} />

            </div>

            <div className="col-md-4 p-4 shadow-sm">
              <h5 className='text-center'>Application By Source</h5>
              <Pie data={sourceData} options={options} plugins={[ChartDataLabels]} />
            </div>
           
            <div className="col-md-4 p-4 shadow-sm">
              <h5 className='text-center'>Application By work type</h5>
              <Pie data={workData} options={options} plugins={[ChartDataLabels]} />
            </div>
          </div>
          
        </div>

      </div>


    </>
  )
}

export default Dashboard