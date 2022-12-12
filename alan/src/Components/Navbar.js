import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import './Navbar.css';
import Image from './ALAN.svg';


export default function ButtonAppBar() {
  return (
    <Box sx = {{width : '100%' }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" className ="navbar" style ={{backgroundColor:"black",alignItems:'center',justifyContent:'center',height:100}}>
          <Toolbar>
            <Box component="img" sx={{height: 25,}} alt="logo" src={Image}/>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{marginTop : 100,pl:"70%",height : "90%",background: 'black'}}>
        <Box sx ={{p : '10%'}}>
        
        </Box>
      </Box>
    </Box>
  );
}