import {createTheme} from '@mui/material/styles';

export const Theme = createTheme({
    typography: {
        fontFamily: ["Inter","sans-serif"].join(","),
        fontSize:11,
        style:{lineHeight :2.0},
        h5:{
          fontSize:24
        }
    },
    components: {
        MuiButton: { 
          styleOverrides: { 
            root: { minWidth: 20 } 
          } 
        }
      }
});