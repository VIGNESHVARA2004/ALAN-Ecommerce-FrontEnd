import React,{useEffect,useRef} from 'react'
import Img1 from '../img/Banner images/MEN BANNER.jpg';
import Img2 from '../img/Banner images/KIDBANNER.jpg';
import Img3 from '../img/Banner images/WOMEN BANNER.jpg';
import Img4 from '../img/Banner images/shoe9.png';
import {useNavigate} from 'react-router-dom'
import './Banner.css'
import VanillaTilt from 'vanilla-tilt';


const Banner=()=>{
    function Tilt(props){
        const { options, ...rest } = props;
        const tilt = useRef(null);
        useEffect(() => {
            VanillaTilt.init(tilt.current, options);
          }, [options]);
          return <div ref={tilt} {...rest} />;
    }
    const options = {
        reverse : false,
        scale: 0.9,
        speed: 100,
        max: 30
      };

    const navigate = useNavigate();
    return(
        <div style={{display:"grid",gridTemplateRows:"1fr 1fr",height:"auto",gap:"30px",margin:"10px",}}>
            <div>
                <div style={{display:"grid",gridTemplateColumns:"2.5fr 1fr",gap:"10px",width:"100%",height:"800px"}}>
                    <div style={{width:"100%",height:"100%"}}>
                    <img className="here" style={{width:"100%",height:"100%",cursor:"pointer"}} src={Img1} onClick={() => navigate('/Men')}/></div>
                    <img className="here"style={{width:"100%",height:"100%",cursor:"pointer"}} src={Img2} onClick={() => navigate('/Kid')}/>
                </div>
            </div>
            <div style={{width:"100%",height:"100%"}}>
                <div style={{display:"grid",gridTemplateColumns:"1fr 3fr",gap:"10px",width:"100%",height:"800px"}}>
                    <img className="here" style={{width:'100%',height:'100%',cursor:"pointer"}} src={Img4} onClick={() => navigate('/Shoe')}/>
                    <img className="here" style={{width:'100%',height:'100%',cursor:"pointer"}} src={Img3} onClick={() => navigate('/Women')}/>
                </div>
            </div>
        </div>
    )
}

export default Banner;
