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
import ProtectedRoute from './components/ProtectedRoute';
import { UserAuthContextProvider } from './context/UserAuthContext';
import { CartContextProvider } from './context/CartContext';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <UserAuthContextProvider>
          <CartContextProvider>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route path="/" element={<Login/>}/>
                <Route path="signup" element={<SignUp/>}/>
                <Route path='cart' element={<Cart/>}/>
                <Route path="home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
                <Route path="menu" element={<ProtectedRoute><Menu/></ProtectedRoute>}/>
                <Route path="gallery" element={<ProtectedRoute><Gallery/></ProtectedRoute>}/>
                <Route path="admin" element={<ProtectedRoute admin><Admin/></ProtectedRoute>}/>
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
