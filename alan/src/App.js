import React from 'react';
import { useEffect } from 'react';
import Home from './scenes/home/Home.js';
import Checkout from './scenes/checkout/Checkout.js';
import Confirmation from './scenes/checkout/Confirmation.js';
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
import Women from './scenes/Women/Women.js';
import Footwear from './scenes/Footwear/Footwear.js'
import Kids from './scenes/Kids/Kids.js';
import Men from './scenes/Men/Men.js'
import ProductDetails from './scenes/ProductDetails/ProductDetails.js';
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
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/confirmation" element={<Confirmation/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/Men" element={<Men/>}/>
            <Route path="/Women" element={<Women/>}/>
            <Route path="/Kid" element={<Kids/>}/>
            <Route path="/Shoe" element={<Footwear/>}/>
            <Route path="/ProductDetail" element={<ProductDetails/>}/>
          </Routes>
          <CartMenu/>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
