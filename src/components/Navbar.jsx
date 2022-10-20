import React from 'react'
import {Link} from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'
import '../styles/navbar.css'
import Button from './Button'
import {BsCart3} from 'react-icons/bs'
import { useCartContext } from '../context/CartContext'

const Navbar = () => {

  const {user, logOut} = useUserAuth();
  const {items} = useCartContext();

  const handleSubmit = async() => {
    try{
      await logOut();
    }catch(err){
      alert(err.message)
    }
  }

  const sumAmount = (items) => {
    let sum = 0;
    for(let i = 0; i < items.length; i++){
      sum += items[i].amount;
    }
    return(sum)
  }

  return (
    <div className='navbar'>
      <div className='navbarLinks'>
        <Link className='link' to="/home">Home</Link>
        <Link className='link' to="/menu">Menu</Link>
      </div>
      <Link to="/cart" className='navbarCart'>
        <BsCart3 className='navbarCartIcon'/>
        <div className='navbarCartAmount'>{sumAmount(items)}</div>
      </Link>
      {user && <Button className='navbarLogOutButton' onClick={handleSubmit}>Log Out</Button>}
    </div>
  )
}

export default Navbar