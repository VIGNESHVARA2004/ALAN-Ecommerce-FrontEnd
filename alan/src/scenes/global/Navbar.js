import React from 'react';
import {useDispatch ,useSelector} from 'react-redux';
import { Badge,Box,IconButton, Typography} from '@mui/material';
import Image from '../ALAN.svg';
import { setIsCartOpen } from '../../state';
import{
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined
} from '@mui/icons-material';
import {useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) =>  state.cart.cart);

  return (
    <Box
      display = "flex"
      justifyContent="space-between"
      alignContent = "center"
      width = "100%"
      height = "100px"
      backgroundColor = "white"
      position ="fixed"
      top = "0"
      left = "0"
      zIndex = '1'
      >
        <Box
          display = "flex"
          margin = '0'
          alignItems= "center"
          justifyContent = "space-between"
          width = "100%"
          marginRight= "2%"
          >
            <Box
              paddingLeft= "40px"
              margin ="0"
              display = "flex"
              justifyContent="space-between"
              height="25px"
              columnGap = "40px"
              sx={{"&:hover" : {cursor :"pointer"}}}
            >
              <Link to="/Men" style={{textDecoration:"none"}}><Typography color="primary" fontSize="17px" fontWeight="600">Men</Typography></Link>
              <Link to="/Women" style={{textDecoration:"none"}}><Typography color="primary" fontSize="17px" fontWeight="600">Women</Typography></Link>
              <Link to="/Kid" style={{textDecoration:"none"}}><Typography color="primary" fontSize="17px" fontWeight="600">Kids</Typography></Link>
              <Link to="/Shoe" style={{textDecoration:"none"}}><Typography color="primary" fontSize="17px" fontWeight="600">Footwear</Typography></Link>
              
            </Box>
            <Box  component="img"
            sx={{"&:hover" : {cursor :"pointer"}}}
            height = "25px"
            onClick ={() => navigate("/")}
            alt="logo" src={Image} zIndex='11' ></Box>

            <Box
              margin = "0"
              display = "flex"
              justifyContent = "space-between"
              height = "25px"
              columnGap = "40px" 
              zIndex ="2">

                <IconButton  color='primary' size = "small">
                  <SearchOutlined sx={{fontSize : "25px"}}/>
                </IconButton>

                <IconButton color='primary' size="small" onClick={() => navigate("/login")}>
                  <PersonOutline sx={{fontSize : "25px"}}/>
                </IconButton>
                <Badge
                badgeContent = {cart.length}
                invisible = {cart.length === 0}
                sx = {{
                  "& .MuiBadge-badge" :{
                    right:5,
                    top:5,
                    padding: " 0 4px",
                    height:"14px",
                    minWidth:"13px"
                  }
                }}
                >
                <IconButton color='primary' size="small" onClick={() => dispatch(setIsCartOpen({}))}>
                  <ShoppingBagOutlined sx={{fontSize : "25px"}}/>
                </IconButton>
                </Badge>

                <IconButton color='primary' size="small">
                  <MenuOutlined sx={{fontSize : "25px"}}/>
                </IconButton>

            </Box>
        </Box>
    </Box>
  )
}
