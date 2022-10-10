import React from 'react'
import '../styles/menuItem.css'
import Title from './Title'

const MenuItem = ({title, description, imageLink}) => {
  return (
    <div className='menuItem'>
      <div className='menuItemMain'>
        <Title style={{color:'var(--primary)'}} className='menuItemTitle'>{title}</Title>
        <img 
          src={imageLink}
          height='100%'
          width='100%'
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