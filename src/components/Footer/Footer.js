// src/components/Footer/Footer.js
import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#333', color: '#fff', py: 3, mt: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          &copy; 2024 GOLF.store. All rights reserved.
        </Typography>
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Link href="#" color="inherit" sx={{ mx: 2 }}>
            Privacy Policy
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 2 }}>
            Terms of Service
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 2 }}>
            Contact Us
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
