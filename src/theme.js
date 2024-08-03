import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#388E3C', // Changed to a golf green color
    },
    secondary: {
      main: '#ff4081', // Highlight or accent color
    },
    background: {
      default: '#f5f5f5', // Neutral background color
    },
    text: {
      primary: '#333', // Main text color
      secondary: '#666', // Secondary text color
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif', // Changed to Poppins
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export default theme;
