import './styles/app.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Admin from './pages/Admin';
import Layout from './components/Layout';
import PageNotFound from './pages/PageNotFound';
import React from 'react';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { UserAuthContextProvider } from './context/UserAuthContext';
import { CartContextProvider } from './context/CartContext';
import Cart from './pages/Cart';
import Prout from './components/Prout';
import '@stripe/stripe-js'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <UserAuthContextProvider>
          <CartContextProvider>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route path="/" element={<Prout log><Login/></Prout>}/>
                <Route path="signup" element={<Prout log><SignUp/></Prout>}/>
                <Route path='cart' element={<Prout><Cart/></Prout>}/>
                <Route path="home" element={<Prout><Home/></Prout>}/>
                <Route path="menu" element={<Prout><Menu/></Prout>}/>
                <Route path="gallery" element={<Prout><Gallery/></Prout>}/>
                <Route path="admin" element={<Prout><Admin/></Prout>}/>
                <Route path="*" element={<PageNotFound/>}/>
              </Route>
            </Routes>
          </CartContextProvider>
        </UserAuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
