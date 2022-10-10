import React, { useState, useEffect } from 'react'
import MenuItem from '../components/MenuItem'
import '../styles/menu.css'
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../firebase'

const Menu = () => {

  const [itemList, setItemList] = useState([]);

  const getMenuItems = async() =>{
    const menuItemsSnapshot = await getDocs(collection(db, 'menu-items'));
    const menuItemsList = menuItemsSnapshot.docs.map((doc) => doc.data());
    setItemList(menuItemsList);
  }

  useEffect(()=>{
    getMenuItems();
  }, [])

  return (
    <div className='menu'>
      {itemList.map(item => <MenuItem title={item.title} description={item.description} imageLink={item.imageLink}/>)}
    </div>
  )
}

export default Menu