import React from 'react'
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
    <div id='div1' className=' d-flex justify-content-center align-items-center flex-column'>
    <img src="./404.gif" alt="" className='img-fluid' />
    <h3 id='pageH'>Look like you're lost</h3>
    <h5>the page you are looking for not available</h5>
<Link to={'/'}>
      <button className="btn btn-primary mt-3">Go to Home</button>
  
</Link>    </div>
    </>
  )
}

export default PageNotFound