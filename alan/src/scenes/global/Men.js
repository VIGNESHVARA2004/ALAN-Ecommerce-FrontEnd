import React from 'react'
import Video from '../../Components/img/Kids.mp4';
import Img1 from '../../Components/img/men21.webp';
import Img2 from '../../Components/img/men22.webp';
import Img3 from '../../Components/img/men5.webp';
import Img4 from '../../Components/img/men6.webp';
import Img5 from '../../Components/img/men9.webp';
import Img6 from '../../Components/img/men10.webp';
import Img7 from '../../Components/img/men13.webp';
import Img8 from '../../Components/img/men14.webp';
import Img9 from '../../Components/img/men11.webp';
import Img10 from '../../Components/img/men12.webp';
import Img11 from '../../Components/img/men17.webp';
import Img12 from '../../Components/img/men18.webp';
import Img13 from '../../Components/img/men7.webp';
import Img14 from '../../Components/img/men8.webp';
import Img15 from '../../Components/img/men23.webp';
import Img16 from '../../Components/img/men24.webp';
import './Men.css';

export default function Men() {
  return (
    <>
    <div>
    <video autoPlay muted style={{width:"100%" , height:"1050px"}}>
    <source  src={Video} type="Video/mp4" />
    </video>
    </div>
    <div>
      <div>
        <h1 style={{textAlign:'center'}}> Products</h1>
      </div>
     <div className='bottom' style={{ width : "auto",gap:"30px",display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position:"relative"}}>
              <img style={{width : "100%",height:"100%"}} src={Img1} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img2} alt="" className="secondImg"/>
          </div>
            <h2>Relaxed Fit Shirts</h2>
          <div className="prices">
              <h3>Rs. 1700</h3>
              <h3>Rs. 1499</h3>
          </div>
        </div>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position: "relative"}}>
              <img style={{width : "100%",height:"100%"}} src={Img3} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img4} alt="" className="secondImg"/>
          </div>
            <h2>Short Jersy Shirts</h2>
          <div className="prices">
              <h3>Rs. 1000</h3>
              <h3>Rs. 799</h3>
          </div>
        </div>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position: "relative"}}>
              <img style={{width : "100%",height:"100%"}} src={Img5} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img6} alt="" className="secondImg"/>
          </div>
            <h2>Black Panther Marvel Shirt</h2>
          <div className="prices">
              <h3>Rs. 1500</h3>
              <h3>Rs. 1290</h3>
          </div>
        </div>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position: "relative"}}>
              <img style={{width : "100%",height:"100%"}} src={Img7} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img8} alt="" className="secondImg"/>
          </div>
            <h2>Nizza RF Shirts</h2>
          <div className="prices">
              <h3>Rs. 10000</h3>
              <h3>Rs. 7999</h3>
          </div>
        </div>
      </div>
      <div className='bottom' style={{width : "auto",gap:"30px",display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position:"relative"}}>
 <img style={{width : "100%",height:"100%"}} src={Img9} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img10} alt="" className="secondImg"/>
          </div>
            <h2>Otto Fit Shirts</h2>
          <div className="prices">
              <h3>Rs. 1500</h3>
              <h3>Rs. 899</h3>
          </div>
        </div>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position: "relative"}}>
              <img style={{width : "100%",height:"100%"}} src={Img11} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img12} alt="" className="secondImg"/>
          </div>
            <h2>Short Formal Shirts</h2>
          <div className="prices">
              <h3>Rs. 1090</h3>
              <h3>Rs. 855</h3>
          </div>
        </div>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position: "relative"}}>
              <img style={{width : "100%",height:"100%"}} src={Img13} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img14} alt="" className="secondImg"/>
          </div>
            <h2>Black Basics Shirt</h2>
          <div className="prices">
              <h3>Rs. 3000</h3>
              <h3>Rs. 1200</h3>
          </div>
        </div>
        <div>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position: "relative"}}>
              <img style={{width : "100%",height:"100%"}} src={Img15} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img16} alt="" className="secondImg"/>
          </div>
            <h2>Nike RF Shirts</h2>
          <div className="prices">
              <h3>Rs. 1000</h3>
              <h3>Rs. 689</h3>
          </div>
        </div>
      </div>
    </div>
   </>
    
  )
}
