import React,{useState} from 'react';
import { urlFor } from '../../lib/client';
import './Product.css'
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const navigate = useNavigate();

    function gotoPD(){
        navigate("/ProductDetail",{state:{product}})
    }
    return (
        <div className='product' style={{width:"445px",height:"720px"}} onClick={gotoPD}>
            <div className="image" style={{width : "445px",height:"630px",overflow:"hidden",position:"relative"}}>
                <img src={urlFor(product.image[1])}
                width = "445px"
                height = "630px"
                className='secondImg'
                />
                <img src={urlFor(product.image[0])}
                width = "445px"
                height = "630px"
                />

            </div>
            <div style={{display: "flex",flexDirection: "column",width:"445px",height:"90px"}}>
                <h4 style={{alignSelf:"center",marginBottom:"0px"}}>{product.brand}</h4>
                <div style={{display:"flex",justifyContent : "space-between",height:"25px"}}>
                    <p style ={{textTransform: "uppercase",letterSpacing:"0.2"}}>{product.name}</p>
                    <p style={{textDecoration: "line-through",color: "gray"}}>Rs.{product.oldPrice}</p>
                </div>
                <p style={{backgroundColor:"#ffe800",alignSelf:"end",fontSize:"13px",wordSpacing:"7px",padding:"4px"}}>-{(((product.oldPrice - product.currentPrice)/product.oldPrice)*100).toFixed(0)}% Rs.{product.currentPrice}  </p>
            </div>
        </div>
    )
}
export default Product;