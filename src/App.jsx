import './styles/app.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Admin from './pages/Admin';
import Layout from './components/Layout';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="menu" element={<Menu/>}/>
            <Route path="gallery" element={<Gallery/>}/>
            <Route path="admin" element={<Admin/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
