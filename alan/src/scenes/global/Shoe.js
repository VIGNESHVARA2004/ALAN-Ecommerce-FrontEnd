import React from 'react';
import Video from '../../Components/img/shoe.mp4';
import Img1 from '../../Components/img/shoe1b.jpg';
import Img2 from '../../Components/img/shoe1a.jpg';
import Img3 from '../../Components/img/shoe2a.jpg';
import Img4 from '../../Components/img/shoe2b.jpg';
import Img5 from '../../Components/img/shoe3a.jpg';
import Img6 from '../../Components/img/shoe3b.jpg';
import Img7 from '../../Components/img/shoe4a.jpg';
import Img8 from '../../Components/img/shoe4b.jpg';
import Img9 from '../../Components/img/shoe5a.jpg';
import Img10 from '../../Components/img/shoe5b.jpg';
import Img11 from '../../Components/img/shoe6a.jpg';
import Img12 from '../../Components/img/shoe1c.jpg';
import Img13 from '../../Components/img/shoe1d.jpg';
import Img14 from '../../Components/img/shoe2c.jpg';
import Img15 from '../../Components/img/shoe3d.jpg';
import Img16 from '../../Components/img/shoe2d.jpg';
import './Men.css'



import { Hidden } from '@mui/material';
import './Men.css';
export default function Women() {
  return (

    <>
    
      
    <div>

        <video autoPlay muted  style={{width:"100%" ,height:"850px",overflow:"cover"}}>
            <source src={Video} type="video/mp4"/>
        </video>
        </div>
        <div>
      <div>
        <h1> Products</h1>
      </div>
     <div className='bottom' style={{width : "auto",gap:"10px",display:"flex",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position:"relative"}}>
 <img style={{width : "100%",height:"100%"}} src={Img1} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img2} alt="" className="secondImg"/>
          </div>
            <h2>Relaxed Fit Hoodie</h2>
          <div className="prices">
              <h3>Rs. 1700"</h3>
              <h3>Rs. 1499"</h3>
          </div>
        </div>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position:"relative"}}>
              <img style={{width : "100%",height:"100%"}} src={Img3} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img4} alt="" className="secondImg"/>
          </div>
            <h2>Short Jersy Top</h2>
          <div className="prices">
              <h3>Rs. 1000"</h3>
              <h3>Rs. 799"</h3>
          </div>
        </div>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position:"relative"}}>
              <img style={{width : "100%",height:"100%"}} src={Img5} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img6} alt="" className="secondImg"/>
          </div>
            <h2>Black Panther Marvel T-Shirt</h2>
          <div className="prices">
              <h3>Rs. 1500"</h3>
              <h3>Rs. 1290"</h3>
          </div>
        </div>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position:"relative"}}>
              <img style={{width : "100%",height:"100%"}} src={Img7} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img8} alt="" className="secondImg"/>
          </div>
            <h2>Nizza RF Shoes</h2>
          <div className="prices">
              <h3>Rs. 10000"</h3>
              <h3>Rs. 7999"</h3>
          </div>
        </div>
      </div>
      <div className='bottom' style={{ width : "auto",gap:"10px",display:"flex",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position:"relative"}}>
 <img style={{width : "100%",height:"100%"}} src={Img9} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img10} alt="" className="secondImg"/>
          </div>
            <h2>Relaxed Fit Hoodie</h2>
          <div className="prices">
              <h3>Rs. 1700"</h3>
              <h3>Rs. 1499"</h3>
          </div>
        </div>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position:"relative"}}>
              <img style={{width : "100%",height:"100%"}} src={Img11} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img12} alt="" className="secondImg"/>
          </div>
            <h2>Short Jersy Top</h2>
          <div className="prices">
              <h3>Rs. 1000"</h3>
              <h3>Rs. 799"</h3>
          </div>
        </div>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position:"relative"}}>
              <img style={{width : "100%",height:"100%"}} src={Img14} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img13} alt="" className="secondImg"/>
          </div>
            <h2>Black Panther Marvel T-Shirt</h2>
          <div className="prices">
              <h3>Rs. 1500"</h3>
              <h3>Rs. 1290"</h3>
          </div>
        </div>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position:"relative"}}>
              <img style={{width : "100%",height:"100%"}} src={Img16} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img15} alt="" className="secondImg"/>
          </div>
            <h2>Nizza RF Shoes</h2>
          <div className="prices">
              <h3>Rs. 10000"</h3>
              <h3>Rs. 7999"</h3>
          </div>
        </div>
      </div>
    </div>
   
      </> 
  );
}
