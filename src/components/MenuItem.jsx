import React from 'react'
import '../styles/menuItem.css'
import Title from './Title'
import Button from './Button'
import { useCartContext } from '../context/CartContext'

const MenuItem = ({title, description, imageLink, price, priceLink}) => {

  const {addItem} = useCartContext();

  const addToCart = () => {
    addItem({name: title, value: price, priceLink});
  }

  return (
    <div className='menuItem'>
      <div className='menuItemMain'>
        <div className='menuItemHeader'>
          <Title style={{color:'var(--primary)', textTransform:'capitalize'}}>{title}</Title>
          <Title>{`${price} ₹`}</Title>
        </div>
        <img 
          className='menuItemImage'
          src={imageLink}
          alt="MenuItemImage"
        />
        <div className='menuItemDescription'>
          {description}
        </div>
        <Button onClick={addToCart} style={{alignSelf:'flex-end', marginTop:'1rem'}}>Add to Cart</Button>
      </div>
      <div className='menuItemTop'/>
    </div>
  )
}

export default MenuItem