import React, {useState, useEffect} from 'react'
import Coupon from '../components/Coupon'
import MenuItem from '../components/MenuItem'
import Title from '../components/Title'
import '../styles/admin.css'
import Button from '../components/Button'
import {collection, doc, getDocs, setDoc} from 'firebase/firestore'
import {db} from '../firebase'
import { useUserAuth } from '../context/UserAuthContext'
import { Navigate } from 'react-router-dom'
import ImageUploading from 'react-images-uploading'

const Admin = () => {

  const [itemList, setItemList] = useState([]);
  const [images, setImages] = useState([]);
  const [addMenuItemDialog, setAddMenuItemDialog] = useState(false);
  const [addCouponDialog, setAddCouponDialog] = useState(false);

  const [couponCode, setCouponCode] = useState('');
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponAddedBy, setCouponAddedBy] = useState(''); 

  const [couponList, setCouponList] = useState([]);

  const {user} = useUserAuth();

  const onImageChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

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
    getCoupons();
  }, [])

  const isAdmin = (user) => {
    const adminEmails = ["swaraj.dusane90@gmail.com", "proteinpump@proteinpump.com"]
    return(adminEmails.includes(user.email));
  }
  
  const addNewCoupon = async() => {
    if(couponCode && couponDiscount && couponAddedBy){
      await setDoc(doc(db, 'coupons', couponCode), {
        discount: couponDiscount,
        addedBy: couponAddedBy
      });
      setAddCouponDialog(false);
    }
  }

  const getCoupons = async() =>{
    try{
      const couponsSnapshot = await getDocs(collection(db, 'coupons'));
      const coupons = couponsSnapshot.docs.map((doc) => {return{id: doc.id, ...doc.data()}});
      setCouponList(coupons)
    }catch(err){
      alert(err.message);
    }
  }

  if(!isAdmin(user)){
    return <Navigate to='/home'/>
  }else{
    return (
      <div className='admin'>
        <div className='adminCoupons'>
          <div className='adminCouponsHeader'>
            <Title>Coupons</Title>
            <Button className='adminCouponsAddButton' onClick={() => setAddCouponDialog(!addCouponDialog)}>Add Coupons</Button>
          </div>
          {addCouponDialog && <div className='adminAddCoupon'>
              <div className='adminAddCouponText'>
                Coupon Code
              </div>
              <input value={couponCode} onChange={e => setCouponCode(e.target.value)} className='adminAddCouponInput'/>
              <div className='adminAddCouponDescription'>
                Discount (%)
              </div>
              <input value={couponDiscount} onChange={e => setCouponDiscount(e.target.value)} type='number' className='adminAddCouponInput'/>
              <div className='adminAddCouponAddedBy'>
                Added By
              </div>
              <input value={couponAddedBy} onChange={e => setCouponAddedBy(e.target.value)} className='adminAddCouponInput'/>
              <Button onClick={addNewCoupon} style={{alignSelf:'stretch', textAlign:'center'}}>Add</Button>
          </div>}
          <div className='adminCouponsList'>
            {couponList.map(coupon => <Coupon code={coupon.id} discount={coupon.discount}/>)}
          </div>
        </div>
        <div className='adminMenu'>
          <div className='adminMenuHeader'>
            <Title>Menu</Title>
            <Button className='adminMenuAddButton' onClick={() => setAddMenuItemDialog(!addMenuItemDialog)}>Add Menu Item</Button>
          </div>
          {addMenuItemDialog && <div className='adminAddMenu'>
            <div className='adminAddMenuTextInputs'>
              <div className='adminAddMenuText'>
                Title
              </div>
              <input className='adminAddMenuInput'/>
              <div className='adminAddMenuText'>
                Description
              </div>
              <input className='adminAddMenuInput'/>
              <div className='adminAddMenuText'>
                Amount
              </div>
              <input className='adminAddMenuInput' type="number"/>
            </div>
            <div className='adminAddMenuImage'>
              <div className='adminAddMenuText'>Image</div>
              <ImageUploading
                value={images}
                onChange={onImageChange}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  // write your building UI
                  <div className="upload__image-wrapper">
                    <button className='adminAddMenuButton'
                      style={isDragging ? { color: 'red' } : undefined}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      Click or Drop here
                    </button>
                    &nbsp;
                    <button className='adminAddMenuButton' onClick={onImageRemoveAll}>Remove all images</button>
                    {imageList.map((image, index) => (
                      <div key={index} className="image-item">
                        <img src={image['data_url']} alt="" width="100" />
                        <div className="image-item__btn-wrapper">
                          <button className='adminAddMenuButton' onClick={() => onImageUpdate(index)}>Update</button>
                          <button className='adminAddMenuButton' onClick={() => onImageRemove(index)}>Remove</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ImageUploading>
            </div>
          </div>}
          <div className='adminMenuList'>
            {itemList.map(item => <MenuItem title={item.title} description={item.description} imageLink={item.imageLink} price={item.price}/>)}
          </div>
        </div>
      </div>
    )
  }
}

export default Admin