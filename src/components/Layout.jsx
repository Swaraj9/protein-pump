import React from 'react'
import {Outlet} from "react-router-dom"
import Footer from './Footer'
import Navbar from './Navbar'
import '../styles/layout.css'

const Layout = () => {
  return (
    <div className='layout'>
        <Navbar/>
        <div className='outlet'>
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout