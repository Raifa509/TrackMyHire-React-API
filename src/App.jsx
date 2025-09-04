import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import LandingPage from "./pages/LandingPage";
import Add from "./pages/Add";
import Applications from "./pages/Applications";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";

function App() {

  const location=useLocation()
  // console.log(location.pathname);
  const hideHeaderFooter=location.pathname !== '/' && location.pathname!=='/add' && location.pathname!=='/applications' && location.pathname!=='/dashboard';

  return (
    <>
      {!hideHeaderFooter && <Header/>} 
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/applications' element={<Applications/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
       {!hideHeaderFooter && <Footer/>} 
    </>
  )
}

export default App
