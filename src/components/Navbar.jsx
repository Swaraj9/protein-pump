import React from 'react'
import {Link} from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'
import '../styles/navbar.css'
import Button from './Button'

const Navbar = () => {

  const {logOut} = useUserAuth();

  const handleSubmit = async() => {
    try{
      await logOut();
    }catch(err){
      alert(err.message)
    }
  }

  return (
    <div className='navbar'>
      <div className='navbarLinks'>
        <Link className='link' to="/home">Home</Link>
        <Link className='link' to="/menu">Menu</Link>
        <Link className='link' to="/gallery">Gallery</Link>
        <Link className='link' to="/admin">Admin</Link>
      </div>
      <Button className='navbarLogOutButton' onClick={handleSubmit}>Log Out</Button>
    </div>
  )
}

export default Navbar