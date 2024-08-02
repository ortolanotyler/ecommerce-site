import React from 'react';
import { Container, Typography } from '@mui/material';
import HeroSection from '../components/HeroSection/HeroSection'; // Import the HeroSection component
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'; // Import the FeaturedProducts component

const Home = () => {
  return (
    <>
      <HeroSection />  {/* Add the HeroSection component here */}
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom>
          Featured Products
        </Typography>
        <FeaturedProducts />  {/* Render the FeaturedProducts component */}
      </Container>
    </>
  );
};

export default Home;
