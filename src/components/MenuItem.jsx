import React from 'react'
import '../styles/menuItem.css'
import Title from './Title'

const MenuItem = ({title, description, imageLink, price}) => {
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
      </div>
      <div className='menuItemTop'/>
    </div>
  )
}

export default MenuItem