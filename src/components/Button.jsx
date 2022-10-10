import React from 'react'
import '../styles/button.css'

const Button = ({children, style, onClick}) => {
  return (
    <div className='button' style={style} onClick={onClick}>{children}</div>
  )
}

export default Button