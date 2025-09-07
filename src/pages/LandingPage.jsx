import React from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function LandingPage() {
  return (
    <>
      {/* landing page */}
      <section >
        <div id='container-1-landing' className="container d-flex justify-content-center align-items-center">
          <div className="row  w-100">
            <div id='section1-left' className="col-6 pt-4">
              <h1 id='section1-head'>Track Your <span className='text-primary'>Job</span> <br /> Applications Easily <br /> & Professionally</h1>
              <p id='section1-p'>Stay organised,stay focussed and land your <br /> dream  job</p>
              <div className='d-flex mt-4 flex-column flex-md-row gap-3'>
                <button type="button" class="btn btn-primary shadow  px-4 py-2 mb-md-5">Get Started</button>
                <button id='learn-btn' className="btn text-dark shadow px-4 py-2 bg-light mb-5">Learn More</button>
              </div>
            </div>
            <div id='section1-img' className="col-6 d-flex justify-content-center align-items-center">
              <img src="./home.png" alt=""  />
            </div>
          </div>
        </div>
      </section>

      {/* features */}
      <section>
        <div>
          <h2 className='text-center mt-md-2 mt-5'>Why use <span className='text-primary'>TrackMyHire?</span></h2>
          <p className='text-center fs-5 fw-semibold' style={{ marginBottom: '5rem' }}>Stay in contact of your job hunt <br />with smart tools</p>

          <div className='container'>
            <div class="row mt-3 d-flex justify-content-center align-items-center"  >

              <div className="col-md-3 p-3" >
                <div className='text-center p-4 shadow bg-light card-hover'>
                  <h5 className='text-primary mb-4 mt-2'> Dashboard Overview</h5>
                  <p className='fw-semibold'> See all applications in one glance with clear stats
                    .</p>
                </div>
              </div>

              <div className="col-md-3 p-3">
                <div className='text-center p-4 shadow bg-light card-hover'>
                  <h5 className='text-primary mb-4 mt-2'> Easy Tracking</h5>
                  <p className='fw-semibold'> Add, edit, and delete job applications
                    in just a few clicks.</p>
                </div>
              </div>

              <div className="col-md-3 p-3">
                <div className='text-center p-4 shadow bg-light card-hover'>
                  <h5 className='text-primary mb-4 mt-2'> Clean & Modern UI</h5>
                  <p className='fw-semibold'> Simple and professional design
                    that feels like a real SaaS tool.
                  </p>
                </div>
              </div>

              <div className="col-md-3 p-3">
                <div className='text-center p-4 shadow bg-light card-hover'>
                  <h5 className='text-primary mb-4 mt-2'> Smart Filters</h5>
                  <p className='fw-semibold'>  Instantly find applications by company,
                    position, or status.</p>
                </div>
              </div>
            </div>
          </div>



        </div>

        {/* steps */}
        <div style={{ marginTop: '8rem' }}>
          <h2 className='text-center mt-5'>How it works?</h2>
          <p className='text-center fs-5 fw-semibold' style={{ marginBottom: '6rem' }}>Start treating your career in just 3 steps</p>
        </div>

        <div className='container'>
          <div class="row mt-2 d-flex justify-content-center align-items-center"  >

            <div className="col-md-4 p-3" >
              <div className='text-center p-4 shadow bg-light card-hover'>
                <IoAddCircleOutline className='fs-1 mb-3 text-primary' />
                <h5 className='mb-4 mt-2 fs-4 fw-semibold'> Add Application</h5>
                <p className='fw-semibold'> Enter company name,job role,applied Date,status,source and work type.</p>
              </div>
            </div>

            <div className="col-md-4 p-3" >
              <div className='text-center p-4 shadow bg-light card-hover'>
                <CheckCircleIcon className='text-primary fs-1 mb-3' />
                <h5 className='mb-4 mt-2 fs-4 fw-semibold'> Track Progress</h5>
                <p className='fw-semibold'> Monitor every stage-applied,interview,hired,rejected.</p>
              </div>
            </div>

            <div className="col-md-4 p-3" >
              <div className='text-center p-4 shadow bg-light card-hover'>
                <VscGraph className='fs-1 mb-3 text-primary' />
                <h5 className='mb-4 mt-2 fs-4 fw-semibold'> Stay Organised</h5>
                <p className='fw-semibold'>Use filters and stats to focus on <br /> opportunities</p>
              </div>
            </div>



          </div>
        </div>
      </section>

    
      <section>
        <div style={{ marginTop: '7rem' }}>
          <h2 className='text-center mt-2 '>See Your Progress at a Glance</h2>
          <p className='text-center fs-5 fw-semibold' style={{ marginBottom: '4rem' }}>Stay updated with stats on all <br />your applications</p>
          <div className='d-flex justify-content-center align-items-center' style={{ width: '100%', marginBottom: '8rem' }}>
            <img className='shadow'
              src="./dashboard.png"
              alt=""
              style={{ width: '90%', height: 'auto', display: 'block' }}
            />
          </div>

        </div>

      </section>
    </>
  )
}

export default LandingPage