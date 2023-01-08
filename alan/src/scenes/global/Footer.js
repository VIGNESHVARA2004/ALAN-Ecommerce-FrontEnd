import React from 'react';
import{Box,Typography} from '@mui/material';
import Image from '../ALAN.svg';

export const Footer = () => {
  return (
    <Box
    position="relative"
    backgroundColor="black"
    color="white"
    justifyContent="center"
    alignContent="center"
    width="100%"
    bottom="0"
    >
        <Box
        margin="20px 200px"
        display="grid"
        gridTemplateColumns="1fr 1fr 1fr 1fr"
        columnGap="50px"
        padding="50px"
        >
            <Box>
                <Typography variant='h5'>Categories</Typography>
                <Box display="grid" rowGap={"10px"} paddingTop = "15px">
                    <Typography sx={{fontWeight:200,letterSpacing:0.3}}>Women</Typography>
                    <Typography sx={{fontWeight:200,letterSpacing:0.3}}>Men</Typography>
                    <Typography sx={{fontWeight:200,letterSpacing:0.3}}>Kid</Typography>
                    <Typography sx={{fontWeight:200,letterSpacing:0.3}}>Footwear</Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant='h5'>Links</Typography>
                <Box display="grid" rowGap={"10px"} paddingTop = "15px">
                <Typography sx={{fontWeight:200,letterSpacing:0.3}}>FAQ</Typography>
                <Typography sx={{fontWeight:200,letterSpacing:0.3}}>Pages</Typography>
                <Typography sx={{fontWeight:200,letterSpacing:0.3}}>Stores</Typography>
                <Typography sx={{fontWeight:200,letterSpacing:0.3}}>Cookies</Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant='h5'>About</Typography>
                <Box display="grid" rowGap={"10px"} paddingTop = "15px">
                <Typography sx={{fontWeight:200,letterSpacing:0.3}}>ALAN Group is a family of brands and businesses, making it possible for customers around the world to express themselves through fashion and design, and to choose a more sustainable lifestyle.</Typography>
                </Box>
                
            </Box>
            <Box>
                <Typography variant='h5'>Contact</Typography>
                <Box display="grid" rowGap={"10px"} paddingTop = "15px">
                <Typography sx={{fontWeight:200,letterSpacing:0.3}}>Mobile Number : +91 9842409654</Typography>
                <Typography sx={{fontWeight:200,letterSpacing:0.3}}>Email-ID : alan2022@gmail.com</Typography>
                </Box>
            </Box>
        </Box>
        <Box
            display="flex"
            justifyContent="center"
            gap="20px"
            margin="20px 200px"
            marginBottom="0px"
            borderTop="1px solid white"
            paddingTop="50px"
            paddingBottom="50px">
            <Box  component="img"
                height = "15px"
                alt="logo" 
                src={Image} 
                zIndex='11'>
            </Box>
            <Box paddingLeft="2px"><Typography>Copyright © 2022 ALAN. All rights reserved.</Typography></Box>
        </Box>
    </Box>
  )
}
