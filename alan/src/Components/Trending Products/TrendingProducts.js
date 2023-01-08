import React,{useState, useEffect} from 'react'
import { client } from '../../lib/client';
import Product from '../../scenes/Product/Product'

const TrendingProducts = () => {
  const [products,setproducts] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "trending"]{
      name,
      brand,
      currentPrice,
      oldPrice,
      details,
      image[],
      slug
    }`).then((data) => setproducts(data)).catch(console.error);
  },[])
  return (
    <div style={{marginTop :"100px",marginBottom:"100px"}}>
          <h1 style={{marginLeft:"30px"}}>Trending Products</h1>
      <div style={{display:"flex",flexWrap:"wrap",columnGap:"20px",rowGap:"40px",marginTop:"30px",marginLeft:"30px"}}>
          {products && products.map((product) => <Product key={product._id} product={product}/>)}
      </div>
        
    </div>
  );
};
export default TrendingProducts