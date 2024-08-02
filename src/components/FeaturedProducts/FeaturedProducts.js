// src/components/FeaturedProducts/FeaturedProducts.js
import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import ProductCard from '../ProductCard/ProductCard';
import mockProducts from '../../data/mockProducts'; // Use some mock data for now

const FeaturedProducts = () => {
  const featuredProducts = mockProducts.slice(0, 4); // Display the first 4 products as featured

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Featured Products
      </Typography>
      <Grid container spacing={2}>
        {featuredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedProducts;
