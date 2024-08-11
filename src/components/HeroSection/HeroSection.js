// src/components/HeroSection/HeroSection.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const heroImage = process.env.PUBLIC_URL + '/Images/golf-course-hero.png';

  return (
    <Box
      className={styles.heroSection}
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h1" component="h1" className={styles.heroTitle}>
          GOLF.store
        </Typography>
        <Typography variant="h5" component="h2" className={styles.heroSubtitle}>
          Elevate your game
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;


