import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import LandingPage from "./pages/LandingPage";
import Add from "./pages/Add";
import Applications from "./pages/Applications";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import React, { useState } from 'react'
import { getApplicationListAPI } from './Services/allAPI';



function App() {

  const [applicationList, setApplicationList] = useState([])
  const location=useLocation()
  // console.log(location.pathname);
  const hideHeaderFooter=location.pathname !== '/' && location.pathname!=='/add' && location.pathname!=='/applications' && location.pathname!=='/dashboard';

React.useEffect(() => {
  const fetchApplications = async () => {
    try {
      const result = await getApplicationListAPI();
      setApplicationList(result.data);
    } catch (err) {
      console.log(err);
    }
  }

  fetchApplications();
}, []);



  return (
    <>
      {!hideHeaderFooter && <Header/>} 
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/add' element={<Add setApplicationList={setApplicationList}/>}/>
        <Route path='/applications' element={<Applications applicationList={applicationList} setApplicationList={setApplicationList}/>}/>


        <Route path='/dashboard' element={<Dashboard applicationList={applicationList}/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
       {!hideHeaderFooter && <Footer/>} 
    </>
  )
}

export default App
