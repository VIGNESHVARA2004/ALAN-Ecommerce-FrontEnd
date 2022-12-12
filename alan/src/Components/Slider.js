import React from 'react'
import { sliderFunction } from './sliderFunction'
import { Box } from '@mui/system'
import  Image1  from '../Components/img/DIESEL.png'
import  Image2  from '../Components/img/GAS.jpg'
import  Image3  from '../Components/img/JJ ad.png'
import  Image4  from '../Components/img/LEVS ad.jpg'
import  Image5  from '../Components/img/PEP ad.png'
import  Image6  from '../Components/img/VAN HEUSEN.png'

export const Slider = () => {
  return (
    
    <Box className="slider" 
      height = "calc(100vh - 100px)"
      width = "100vw"
      position ="fixed"
    >
      <Box className='slides'
      width ="15360px"
      height = "100%"
      display ="flex"
      style={{transitionTimingFunction : "ease-in-out"}}>
          <Box component = "img" className='slide' alt ="i1"  src={Image1}></Box>
          <Box component = "img" className='slide' alt ="i2" src={Image2}></Box>
          <Box component = "img" className='slide' alt ="i3" src={Image3}></Box>
          <Box component = "img" className='slide' alt ="i4" src={Image4}></Box>
          <Box component = "img" className='slide' alt ="i5" src={Image5}></Box>
          <Box component = "img" className='slide' alt ="i6" src={Image6}></Box>
      </Box>
    </Box>
  )
}
