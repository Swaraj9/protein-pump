import React, {useState, useEffect} from 'react'
import Coupon from '../components/Coupon'
import MenuItem from '../components/MenuItem'
import Title from '../components/Title'
import '../styles/admin.css'
import Button from '../components/Button'
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../firebase'

const Admin = () => {

  const [itemList, setItemList] = useState([]);

  const getMenuItems = async() =>{
    try{
      const menuItemsSnapshot = await getDocs(collection(db, 'menu-items'));
      const menuItemsList = menuItemsSnapshot.docs.map((doc) => doc.data());
      setItemList(menuItemsList);
    }catch(err){
      alert(err.message);
    }
  }

  useEffect(()=>{
    getMenuItems();
  }, [])

  return (
    <div className='admin'>
      <div className='adminCoupons'>
        <div className='adminCouponsHeader'>
          <Title>Coupons</Title>
          <Button className='adminCouponsAddButton'>Add Coupons</Button>
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
          <Button className='adminMenuAddButton'>Add Menu Item</Button>
        </div>
        <div className='adminMenuList'>
          {itemList.map(item => <MenuItem title={item.title} description={item.description} imageLink={item.imageLink} price={item.price}/>)}
        </div>
      </div>
    </div>
  )
}

export default Admin