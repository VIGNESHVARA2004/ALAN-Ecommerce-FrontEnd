import React from 'react';
import Video from '../../Components/img/women.mp4';
import Img1 from '../../Components/img/women1a.jpg';
import Img2 from '../../Components/img/women2a.jpg';
import Img3 from '../../Components/img/wome3a.jpg';
import Img4 from '../../Components/img/women4c.png';
import Img5 from '../../Components/img/women5a.png';
import Img6 from '../../Components/img/women6a.png';
import Img7 from '../../Components/img/women6b.png';
import Img8 from '../../Components/img/women6c.png';
import Img9 from '../../Components/img/women3d.png';
import Img10 from '../../Components/img/women3b.png';
import Img11 from '../../Components/img/women5d.png';
import Img12 from '../../Components/img/women6d.png';
import Img13 from '../../Components/img/women6c.png';
import Img14 from '../../Components/img/women6a.png';
import Img15 from '../../Components/img/women5a.png';
import Img16 from '../../Components/img/women2d.png';



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
     <div className='bottom' style={{ width : "auto",gap:"10px",display:"flex",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position:"relative"}}>
 <img style={{width : "100%",height:"100%"}} src={Img1} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img2} alt="" className="secondImg"/>
          </div>
            <h2>Relaxed Fit Tops</h2>
          <div className="prices">
              <h3>Rs. 1340"</h3>
              <h3>Rs. 1109"</h3>
          </div>
        </div>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position:"relative"}}>
              <img style={{width : "100%",height:"100%"}} src={Img3} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img4} alt="" className="secondImg"/>
          </div>
            <h2>Short Jersy Top</h2>
          <div className="prices">
              <h3>Rs. 999"</h3>
              <h3>Rs. 790"</h3>
          </div>
        </div>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position:"relative"}}>
              <img style={{width : "100%",height:"100%"}} src={Img5} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img6} alt="" className="secondImg"/>
          </div>
            <h2>Short Sleeve</h2>
          <div className="prices">
              <h3>Rs. 1400"</h3>
              <h3>Rs. 1190"</h3>
          </div>
        </div>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position:"relative"}}>
              <img style={{width : "100%",height:"100%"}} src={Img7} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img8} alt="" className="secondImg"/>
          </div>
            <h2>Nikk</h2>
          <div className="prices">
              <h3>Rs. 1000"</h3>
              <h3>Rs. 7999"</h3>
          </div>
        </div>
      </div>
      <div className='bottom' style={{width : "auto",gap:"10px",display:"flex",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position:"relative"}}>
 <img style={{width : "100%",height:"100%"}} src={Img9} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img10} alt="" className="secondImg"/>
          </div>
            <h2>Shorts Tops Style</h2>
          <div className="prices">
              <h3>Rs. 1000"</h3>
              <h3>Rs. 899"</h3>
          </div>
        </div>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position:"relative"}}>
              <img style={{width : "100%",height:"100%"}} src={Img11} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img12} alt="" className="secondImg"/>
          </div>
            <h2>Colour Chudi</h2>
          <div className="prices">
              <h3>Rs. 1600"</h3>
              <h3>Rs. 899"</h3>
          </div>
        </div>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position:"relative"}}>
              <img style={{width : "100%",height:"100%"}} src={Img14} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img13} alt="" className="secondImg"/>
          </div>
            <h2>Glory Tops</h2>
          <div className="prices">
              <h3>Rs. 1300"</h3>
              <h3>Rs. 1100"</h3>
          </div>
        </div>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position:"relative"}}>
              <img style={{width : "100%",height:"100%"}} src={Img16} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img15} alt="" className="secondImg"/>
          </div>
            <h2>Top Beauty Chudi</h2>
          <div className="prices">
              <h3>Rs. 600"</h3>
              <h3>Rs. 288"</h3>
          </div>
        </div>
      </div>
    </div>
   
      </> 
  );
}
