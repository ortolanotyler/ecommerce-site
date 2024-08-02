// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Primary action color (e.g., buttons)
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
    fontFamily: 'Roboto, Arial, sans-serif',
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
