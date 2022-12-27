import React from 'react';
import { useEffect } from 'react';
import Home from './scenes/home/Home.js';
import Checkout from './scenes/checkout/Checkout.jsx';
import Confirmation from './scenes/checkout/Confirmation.jsx';
import ItemDetails from './scenes/itemDetails/ItemDetails.jsx';
import Navbar from './scenes/global/Navbar';
import CartMenu from './scenes/global/CartMenu.js';
import{
  Routes,
  Route,
  useLocation,
  BrowserRouter
} from 'react-router-dom';
import { Footer } from './scenes/global/Footer.js';
import Login from './scenes/login/Login'
import Register from './scenes/register/Register.js';
import Men from './scenes/global/Men'
import Women from './scenes/global/Women'
import Shoe from './scenes/global/Shoe'
import Kid from './scenes/global/Kids'
const ScrolltoTop = () =>
{
    const {pathname} = useLocation();

    useEffect(() => {
      window.scrollTo(0,0);
    },[pathname])

    return null;

}
function App() {
  return (
    <div>
      <BrowserRouter>
          <Navbar/>
          <ScrolltoTop />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="item/:itemId" element={<ItemDetails/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="confirmation" element={<Confirmation/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/Men" element={<Men/>}/>
            <Route path="/Women" element={<Women/>}/>
            <Route path="/Kid" element={<Kid/>}/>
            <Route path="/Shoe" element={<Shoe/>}/>
          </Routes>
          <CartMenu/>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
