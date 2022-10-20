import React, {useState, useEffect} from 'react'
import '../styles/home.css'
import { db } from '../firebase';
import MenuItem from '../components/MenuItem';
import { getDocs, collection, query, limit} from 'firebase/firestore'
import {Link} from 'react-router-dom'

const Home = () => {

  const [itemList, setItemList] = useState([]);

  const getMenuItems = async() =>{
    try{
      const q = query(collection(db, 'menu-items'), limit(3));
      const menuItemsSnapshot = await getDocs(q);
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
    <div className='home'> 
      <div className='homeHero'>
        <div className='homeHeroTitle'>Protein Pump</div>
        <div className='homeHeroText'>“Greasing days and effortless nights”, its the least, that a healthy body demands. We understand the significance of your health and intense fitness goals and at the same time, we agree with your delinquency of grabbing a savoury snack or a sweet dessert to satisfy your adamant cravings. Serving a wide variety of crispy, delicious and savoury snacks which are “Extremely High in Protein, Low in Fats and contains Zero Sugar and contain Refined carbs, a range of extremely high protein cocoffees. Because, we know that, what it takes to refrain yourself from junk fast foods and, appreciate your obstination for being the best version of yourself.</div>
      </div>
      <div className='homeMenu'>
        <div className='homeMenuItems'>
          {itemList.map(item => <MenuItem key={item.id} title={item.title} description={item.description} imageLink={item.imageLink} price={item.price} priceLink={item.priceLink}/>)}
        </div>
        <Link className='homeMenuLink' to='/menu'>Checkout the Menu</Link>
      </div>
    </div>
  )
}

export default Home