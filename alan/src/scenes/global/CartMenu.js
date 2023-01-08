import React from "react";
import {Box, Button,Divider,IconButton,Typography} from "@mui/material";
import {useSelector, useDispatch} from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from '@emotion/styled';
import {urlFor} from '../../lib/client';

import{
    decreaseCount,
    increaseCount,
    removeFromCart,
    setIsCartOpen
}from "../../state";
import { useNavigate } from "react-router-dom";
import { borderColor } from "@mui/system";

const FlexBox = styled(Box)`
    display : flex;
    justify-content : space-between;
    align-items :center;
`;

const CartMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);

    const totalPrice = cart.reduce((total,item) =>  {
        return total+item.count * item.currentPrice;
    },0);

    return(
        <Box
            display={isCartOpen ? 'block' : 'none'}
            backgroundColor = "rgba(0,0,0,0.4)"
            zIndex={10}
            width = "100%"
            height = "100%"
            left = "0"
            top = '0'
            overflow="auto"
            >
                <Box
                    position = "fixed"
                    right = "0"
                    bottom = "0"
                    width= "max(400px,30%)"
                    height = "100%"
                    backgroundColor = "black"
                    color ="white"
                    >
                        <Box padding ="30px" overflow="auto" height="100%" marginTop= "100px">
                            <FlexBox mb="15px">
                                <Typography variant="h5" sx={{fontWeight:400}}>SHOPPING BAG ({cart.length})</Typography>
                                <IconButton onClick = {() => dispatch(setIsCartOpen)}>
                                    <CloseIcon/>
                                </IconButton>
                            </FlexBox>
                            <Box>
                                {cart.map((item) => (
            
                                    <Box key={`${item.name}-${item.slug}`}>
                                        {console.log(item.slug)}
                                        <FlexBox>
                                            <Box flex="1 1 40%">
                                                <img
                                                    alt={item.name}
                                                    width="123px"
                                                    height="164px"
                                                    src={urlFor(item.image[1])}
                                                />
                                            </Box>
                                            <Box flex="1 1 60%" justifyItems="left">
                                                <FlexBox mb="5px">
                                                    <Typography variant="h4" fontWeight="100">
                                                        {item.name}
                                                    </Typography>
                                                    <IconButton sx={{color:"white"}} onClick={() => dispatch(removeFromCart(item))}>
                                                        <CloseIcon/>
                                                    </IconButton>                                                
                                                </FlexBox>
                                                <FlexBox m = "15px 0">
                                                    <Box    
                                                        display="flex"
                                                        alignItems="center"
                                                        border={`1.5px solid white`}
                                                        >
                                                        <IconButton
                                                            onClick={() => dispatch(decreaseCount(item))}
                                                            sx={{color:"white"}}
                                                            >
                                                            <RemoveIcon />
                                                        </IconButton>
                                                        <Typography>{item.count}</Typography>
                                                        <IconButton
                                                            onClick={() => dispatch(increaseCount(item))}
                                                            sx={{color:"white"}}
                                                            >
                                                            <AddIcon/>
                                                        </IconButton>
                                                    </Box>
                                                    <Typography fontWeight="bold">
                                                        Rs.{item.currentPrice} 
                                                    </Typography>
                                                </FlexBox>
                                            </Box>
                                        </FlexBox>
                                        <Divider/>
                                    </Box>
                                ))}
                            </Box>
                            <Box m="20px 0">
                                <FlexBox m="20px 0">
                                    <Typography fontWeight="bold">SUBTOTAL</Typography>
                                    <Typography fontWeight="bold">Rs.{totalPrice}</Typography>
                                </FlexBox>
                                <Button
                                    sx={{
                                        backgroundColor:"black",
                                        color:"white",
                                        border:1.5,
                                        borderBlockStyle:"solid",
                                        borderRadius:0,
                                        letterSpacing:0.2,
                                        borderColor:"white",
                                        minWidth:"100%",
                                        padding:"10px 20px",
                                        m : "20px 0"
                                    }}
                                    onClick={()=>{navigate("/checkout"); dispatch(setIsCartOpen({}))}}
                                    >Checkout</Button>
                            </Box>
                        </Box>
                    </Box>
            </Box>
    )
}

export default CartMenu;