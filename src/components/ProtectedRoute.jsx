import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../firebase'

const ProtectedRoute = ({children, admin = false}) => {
    const {user} = useUserAuth();

    const [isAdmin, setIsAdmin] = useState(false);

    const userIsAdmin = async(user) => {
        try{
            const adminEmailsSnapshot = await getDocs(collection(db, 'admin-emails'));
            const adminEmailsList = adminEmailsSnapshot.docs.map(doc => doc.data().email);

            if(adminEmailsList.includes(user.email)){
                setIsAdmin(true)
            }else{
                setIsAdmin(false)
            }

            return true
        }catch(err){
            alert(err.message);
        }
    }   

    if(!user){
        return <Navigate to='/'/>
    }

    if(admin){
        userIsAdmin(user);
        if(!isAdmin){
            return <Navigate to='/home'/>
        }else{
            return children;
        }
    }

    return children;
}

export default ProtectedRoute