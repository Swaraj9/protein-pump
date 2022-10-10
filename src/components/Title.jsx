import React from 'react'

const Title = ({children, style}) => {
  return (
    <div style={{fontSize: '1.5rem', ...style}}>{children}</div>
  )
}

export default Title