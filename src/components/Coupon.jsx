import React from 'react'
import '../styles/coupon.css'

const Coupon = ({code, discount}) => {
  return (
    <div className='coupon'>
      <div className='couponCode'>{code}</div>
      <div className='couponDiscount'>{discount}</div>
    </div>
  )
}

export default Coupon