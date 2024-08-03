// src/components/HeroSection/HeroSection.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const HeroSection = () => {
  const heroImage = process.env.PUBLIC_URL + '/Images/golf-course-hero.webp'; // Declare the image path

  return (
    <Box
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '150px 20px',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h1" component="h1">
          GOLF.store
        </Typography>
        <Typography variant="h5" component="h2" style={{ marginTop: '20px' }}>
          Elevate your game
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;
