import React from 'react'

function LandingPage() {
  return (
    <>
    {/* landing page */}
      <section >
        <div className="vh-100 container d-flex justify-content-center align-items-center">
          <div className="row w-100">
            <div id='section1-left' className="col-6 pt-4">
              <h1 id='section1-head'>Track Your Job <br /> Applications Easily <br /> & Professionally</h1>
              <p id='section1-p'>Stay organised,stay focussed and land your <br /> dream  job</p>
              <div className='d-flex mt-4'>
                <button type="button" class="btn btn-primary me-4 px-4 py-2">Get Started</button>                
                <button id='learn-btn' className="btn text-dark px-4 py-2">Learn More</button>

              </div>
            </div>
            <div id='section1-img' className="col-6 d-flex justify-content-center align-items-center">
              <img src="./home.png" alt="" width={520}/>
            </div>
          </div>
        </div>

      </section>

    {/* features */}
    <section>
      <div className='vh-100'>
      <h2></h2>
      </div>
    </section>
    </>
  )
}

export default LandingPage