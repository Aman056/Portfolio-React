import React from 'react'
import Home from './Home'
import Profile from './Profile'
import Contect from './Contect'
import Navbar from './Navbar'
import Error from './Error'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import "../assets/css/style.css"
import Certificate from './Certificate'
import Gallery from './Gallery'
// import Footer from './Footer';
import Footerr from './Footerr';



export default function Appp() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Profile/:name/:deg" element={<Profile/>}/>
    <Route path="/Navbar" element={<Navbar/>}/>
    <Route path="/Contect" element={<Contect/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Error" element={<Error/>}/>    
    <Route path="/Gallery" element={<Gallery/>}/>    
    <Route path="/Certificate's" element={<Certificate/>}/>    
    
    </Routes>
    </BrowserRouter>
    {/* <Footer/> */}
    <Footerr/>
    </>
  )
}
