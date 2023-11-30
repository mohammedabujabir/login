import React from 'react'
import Navbar from '../assets/components/dashboard/navbar/Navbar.jsx'
import Footer from '../assets/components/dashboard/footer/Footer.jsx'
import {Outlet} from 'react-router-dom'

export default function Dashboardlayout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
    <Footer/>
    </>
  )
  
  
}
