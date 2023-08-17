import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e88e5', // Set your primary color
    },
    secondary: {
      main: '#f50057', // Set your secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Set your default font
  },
  // Other theme configurations...
});

export default theme;
