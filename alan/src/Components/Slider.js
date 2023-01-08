import React from 'react'
import './Slider.css'
import { Box } from '@mui/system'
import  Image1  from '../Components/img/DIESEL.png'
import  Image2  from '../Components/img/h&m.png'
import  Image3  from '../Components/img/JJ ad.png'
import  Image4  from '../Components/img/LEVS ad.jpg'
import  Image5  from '../Components/img/PEP ad.png'
import  Image6  from '../Components/img/VAN HEUSEN.png'
export const Slider = () => {
  return (
    <Box marginTop="100px">
      <Box className="slider" 
        height = "calc(100vh - 100px)"
        width = "1920px"
        position ="relative"
        overflow = "hidden"
      >
        <Box className='slides'
        width ="11520px"
        height = "100%"
        display ="flex"
        position= "relative">
            <img className='slide' alt ="i1"  src={Image1}/> 
            <img className='slide' alt ="i2" src={Image2}/> 
            <img className='slide' alt ="i3" src={Image3}/> 
            <img className='slide' alt ="i4" src={Image4}/> 
            <img className='slide' alt ="i5" src={Image5}/> 
            <img className='slide' alt ="i6" src={Image6}/> 
        </Box>
      </Box>
    </Box>
  )
}
