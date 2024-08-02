// src/components/FeaturedProducts/FeaturedProducts.js
import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import ProductCard from '../ProductCard/ProductCard';
import mockProducts from '../../data/mockProducts';
import styles from './FeaturedProducts.module.css'; // Import the CSS module

const FeaturedProducts = () => {
  const featuredProducts = mockProducts.slice(0, 4); // Display the first 4 products as featured

  return (
    <Box className={styles.featuredProducts}>
      <Typography variant="h4" className={styles.heading}>
        Featured Products
      </Typography>
      <Grid container className={styles.productGrid}>
        {featuredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id} className={styles.productCard}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Box className={styles.buttonContainer}>
        <Button variant="contained" color="primary" size="large">
          View All Products
        </Button>
      </Box>
    </Box>
  );
};

export default FeaturedProducts;
