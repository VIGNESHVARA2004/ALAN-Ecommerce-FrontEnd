import React from 'react';
import{Box,Typography} from '@mui/material';
import Image from '../ALAN.svg';

export const Footer = () => {
  return (
    <Box
    position="absolute"
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
        >
            <Box>
                <Typography variant='h4' lineHeight="1.5">Categories</Typography>
                <Typography >Women</Typography>
                <Typography >Men</Typography>
                <Typography >Kid</Typography>
                <Typography >Footwear</Typography>
            </Box>
            <Box>
                <Typography variant='h4' lineHeight="1.5">Links</Typography>
                <Typography >FAQ</Typography>
                <Typography >Pages</Typography>
                <Typography >Stores</Typography>
                <Typography >Cookies</Typography>
            </Box>
            <Box>
                <Typography variant='h4' lineHeight="1.5">About</Typography>
                <Typography >ALAN Group is a family of brands and businesses, making it possible for customers around the world to express themselves through fashion and design, and to choose a more sustainable lifestyle.</Typography>
                
            </Box>
            <Box>
                <Typography variant='h4' lineHeight="1.5">Contact</Typography>
                <Typography >Mobile Number : +91 9842409654</Typography>
                <Typography >Email-ID : alan2022@gmail.com</Typography>
            </Box>
        </Box>
        <Box
            display="flex"
            justifyContent="center"
            gap="20px"
            margin="20px 200px"
            borderTop="1px solid white"
            paddingTop="10px">
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
