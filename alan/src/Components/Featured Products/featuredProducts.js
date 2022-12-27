import React from 'react'
import './FeaturedProduct.css'
import Img1 from '../img/Imgs/MEN1a.png'
import Img2 from '../img/Imgs/MEN1d.jpg'
import Img3 from '../img/Imgs/WOMEN1a.png'
import Img4 from '../img/Imgs/WOMEN1d.jpg'
import Img5 from '../img/Imgs/KID1a.jpg'
import Img6 from '../img/Imgs/KID1d.jpg'
import Img7 from '../img/Imgs/SHOE1a.png'
import Img8 from '../img/Imgs/SHOE1d.png'

const FeaturedProducts = ({type}) => {
  return (
    <div style={{margin : "100px 200px",overflow:"hidden"}}>
      <div >
        <h1>{type} Products</h1>
      </div>
      <div className='bottom' style={{  width : "auto",gap:"30px",display:"grid",gridTemplateColumns: "1fr 1fr 1fr 1fr"}}>
        <div className='Imgs'>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position:"relative"}}>
              <img style={{width : "100%",height:"100%"}} src={Img1} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img2} alt="" className="secondImg"/>
          </div>
            <h2>Relaxed Fit Hoodie</h2>
          <div className="prices">
              <h3>Rs. 1700</h3>
              <h3>Rs. 1499</h3>
          </div>
        </div>
        <div className='Imgs'>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position:"relative"}}>
              <img style={{width : "100%",height:"100%"}} src={Img3} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img4} alt="" className="secondImg"/>
          </div>
            <h2>Short Jersy Top</h2>
          <div className="prices">
              <h3>Rs. 1000</h3>
              <h3>Rs. 799</h3>
          </div>
        </div>
        <div className='Imgs'>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position:"relative"}}>
              <img style={{width : "100%",height:"100%"}} src={Img5} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img6} alt="" className="secondImg"/>
          </div>
            <h2>Black Panther Marvel T-Shirt</h2>
          <div className="prices">
              <h3>Rs. 1500</h3>
              <h3>Rs. 1290</h3>
          </div>
        </div>
        <div className='Imgs'>
          <div className='image' style={{width : "100%",height:"400px",overflow:"hidden",position:"relative"}}>
              <img style={{width : "100%",height:"100%"}} src={Img7} alt="" className="mainImg"/>
              <img style={{width : "100%",height:"100%"}} src={Img8} alt="" className="secondImg"/>
          </div>
            <h2>Nizza RF Shoes</h2>
          <div className="prices">
              <h3>Rs. 10000</h3>
              <h3>Rs. 7999</h3>
          </div>
        </div>
      </div>
    </div>

  )
}
export default FeaturedProducts
