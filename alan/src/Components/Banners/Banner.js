import React from 'react'
import Img1 from '../img/Banner images/MEN BANNER.jpg';
import Img2 from '../img/Banner images/KIDBANNER.jpg';
import Img3 from '../img/Banner images/WOMEN BANNER.jpg';
import Img4 from '../img/Banner images/shoe9.png';
import {useNavigate} from 'react-router-dom'

const Banner=()=>{
    const navigate = useNavigate();
    return(
        <div style={{display:"grid",gridTemplateRows:"1fr 1fr",height:"auto",gap:"30px",margin:"10px",overflow:"hidden"}}>
            <div style={{overflow:'hidden'}}>
                <div style={{display:"grid",gridTemplateColumns:"2.5fr 1fr",gap:"10px",width:"100%",height:"800px"}}>
                    <img style={{width:"100%",height:"100%"}} src={Img1} onClick={() => navigate('/Men')}/>
                    <img style={{width:"100%",height:"100%"}} src={Img2} onClick={() => navigate('/Kid')}/>
                </div>
            </div>
            <div style={{overflow:'hidden',width:"100%",height:"100%"}}>
                <div style={{display:"grid",gridTemplateColumns:"1fr 3fr",gap:"10px",width:"100%",height:"800px"}}>
                    <img style={{width:'100%',height:'100%'}} src={Img4} onClick={() => navigate('/Shoe')}/>
                    <img style={{width:'100%',height:'100%'}} src={Img3} onClick={() => navigate('/Women')}/>
                </div>
            </div>
        </div>
    )
}

export default Banner;
