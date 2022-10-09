import React from 'react'
import Coupon from '../components/Coupon'
import MenuItem from '../components/MenuItem'
import Title from '../components/Title'
import '../styles/admin.css'

const Admin = () => {
  return (
    <div className='admin'>
      <div className='adminCoupons'>
        <div className='adminCouponsHeader'>
          <Title>Coupons</Title>
          <button className='adminCouponsAddButton'>Add Coupons</button>
        </div>
        <div className='adminCouponsList'>
          <Coupon/>
          <Coupon/>
          <Coupon/>
        </div>
      </div>
      <div className='adminMenu'>
        <div className='adminMenuHeader'>
          <Title>Menu</Title>
          <button className='adminMenuAddButton'>Add Menu Item</button>
        </div>
        <div className='adminMenuList'>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
        </div>
      </div>
    </div>
  )
}

export default Admin