import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/menu">Menu</Link>
        <Link className='link' to="/gallery">Gallery</Link>
        <Link className='link' to="/admin">Admin</Link>
    </div>
  )
}

export default Navbar