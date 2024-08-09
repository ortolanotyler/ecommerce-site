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
        
      </Container>
    </Box>
  );
};

export default Footer;
