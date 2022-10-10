import React from 'react'
import {Link} from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'
import '../styles/navbar.css'
import Button from './Button'

const Navbar = () => {

  const {user, logOut} = useUserAuth();

  const handleSubmit = async() => {
    try{
      await logOut();
      console.log("Success")
    }catch(err){
      alert(err.message)
    }
  }

  return (
    <div className='navbar'>
      <div className='navbarLinks'>
        <Link className='link' to="/home">Home</Link>
        <Link className='link' to="/menu">Menu</Link>
      </div>
      {user && <Button className='navbarLogOutButton' onClick={handleSubmit}>Log Out</Button>}
    </div>
  )
}

export default Navbar