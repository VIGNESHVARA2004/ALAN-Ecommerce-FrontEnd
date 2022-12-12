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
import { Slider } from './Components/Slider.js';

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
    <div >
      <BrowserRouter>
          <Navbar/>
          <ScrolltoTop />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="item/:itemId" element={<ItemDetails/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="confirmation" element={<Confirmation/>}/>
          </Routes>
          <CartMenu/>
      </BrowserRouter>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
