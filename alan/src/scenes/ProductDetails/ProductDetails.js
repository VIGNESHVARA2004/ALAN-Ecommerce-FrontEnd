import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';
import { urlFor } from '../../lib/client';
import {
  addToCart
} from '../../state/index';
import { useDispatch } from 'react-redux';
import './ProductD.css';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location.state);
  const product = location.state.product;
  console.log(product);
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(product);
  const [items,setItems] = useState([]); 
  const [Image,setImage] = useState(product.image[0]);
  function changeImage(IMAGE) {
    setImage(IMAGE);
  }
  return (
    <div style={{margin : "100px 100px",marginLeft:"550px"}}>
        <div style={{width:"100%",height:"1080px",display:"grid",gap:"40px",gridTemplateColumns:"1fr 1fr",justifyContent:"end"}}>
          <div style={{display:"flex",gap:"40px"}}>

            <div style={{display:"grid",width:"75px",height:"500px",gap:"5px",gridTemplateRows:"1fr 1fr 1fr 1fr",alignSelf:"revert"}}>
                <img className="here1" style={{cursor:"pointer"}} width = "75px" height="100px" src={urlFor(product.image[0])} onClick={() => changeImage(product.image[0])}/>                           
                <img className="here1" style={{cursor:"pointer"}} width = "75px" height="100px" src={urlFor(product.image[1])} onClick={() => changeImage(product.image[1])}/>                           
                <img className="here1" style={{cursor:"pointer"}} width = "75px" height="100px" src={urlFor(product.image[2])} onClick={() => changeImage(product.image[2])}/>                           
                <img className="here1" style={{cursor:"pointer"}} width = "75px" height="100px" src={urlFor(product.image[3])} onClick={() => changeImage(product.image[3])}/>                           
            </div>
            <div style={{width:"650px",height:"850px"}}>
                <img width="650px" height = "850px"src={urlFor(Image)}/>
            </div>
          </div>
            <div>
                <h1>{product.name}</h1>
                <h4>{product.brand}</h4>
                <p>{product.details}</p>
                <div style={{display:"flex",gap:"5px"}}>
                  <p style={{textDecoration: "line-through",color: "gray",fontSize:"13px",padding:"4px"}}>Rs.{product.oldPrice}</p>
                  <p style={{backgroundColor:"#ffe800",alignSelf:"end",fontSize:"13px",wordSpacing:"7px",padding:"4px"}}>-{(((product.oldPrice - product.currentPrice)/product.oldPrice)*100).toFixed(0)}% Rs.{product.currentPrice}  </p>
                </div>
                <button type="button" style={{width:"500px",cursor:"pointer",height:"50px",border:"none",color:"white",backgroundColor:"black",fontWeight:"normal",fontFamily:"inherit",fontSize:"17px",marginTop:"200px"}} onClick={() => dispatch(addToCart({item : {...item,count}}))}>ADD TO BAG</button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails