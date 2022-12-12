import {createTheme} from '@mui/material/styles';

export const Theme = createTheme({
    typography: {
        fontFamily: ["Inter","sans-serif"].join(","),
        fontSize:11,
        style:{lineHeight :1.5}
    },
    components: {
        MuiButton: { 
          styleOverrides: { 
            root: { minWidth: 25 } 
          } 
        }
      }
});