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

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <UserAuthContextProvider>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path="/" element={<Login/>}/>
              <Route path="signup" element={<SignUp/>}/>
              <Route path="home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
              <Route path="menu" element={<Menu/>}/>
              <Route path="gallery" element={<Gallery/>}/>
              <Route path="admin" element={<Admin/>}/>
              <Route path="*" element={<PageNotFound/>}/>
            </Route>
          </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
