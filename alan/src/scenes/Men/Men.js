import React,{useState, useEffect} from 'react'
import { client } from '../../lib/client';
import Product from '../Product/Product';
import Video from '../../Components/img/men.mp4';

const Men = () => {
  const [products,setproducts] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "product" && category == "men"]{
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
      {console.log(products)}
      <div>
        <video autoPlay style={{width:"100%",height:"850px",overflow:"cover"}}>
        <source  src={Video} type="Video/mp4" />
        </video>
      </div>
      <div style={{display:"flex",flexWrap:"wrap",columnGap:"20px",rowGap:"40px",marginTop:"30px",marginLeft:"30px"}}>
          {products && products.map((product) => <Product key={product._id} product={product}/>)}
      </div>
        
    </div>
  );
};
export default Men