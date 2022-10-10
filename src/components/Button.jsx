import React from 'react'
import '../styles/button.css'

const Button = ({children, style}) => {
  return (
    <div className='button' style={style}>{children}</div>
  )
}

export default Button