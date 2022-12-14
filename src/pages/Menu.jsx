import React, { useState, useEffect } from 'react'
import MenuItem from '../components/MenuItem'
import '../styles/menu.css'
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../firebase'

const Menu = () => {

  const [itemList, setItemList] = useState([]);

  const getMenuItems = async() =>{
    try{
      const menuItemsSnapshot = await getDocs(collection(db, 'menu-items'));
      const menuItemsList = menuItemsSnapshot.docs.map((doc) => {return{id: doc.id, ...doc.data()}});
      setItemList(menuItemsList);
    }catch(err){
      alert(err.message);
    }
  }

  useEffect(()=>{
    getMenuItems();
  }, [])

  return (
    <div className='menu'>
      {itemList.map(item => <MenuItem key={item.id} title={item.title} description={item.description} imageLink={item.imageLink} price={item.price} priceLink={item.priceLink}/>)}
    </div>
  )
}

export default Menu