import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import mockProducts from '../../data/mockProducts';

const FeaturedProducts = () => {
  const featuredProducts = mockProducts.slice(0, 4); // Display the first 4 products as featured

  return (
    <Box sx={{ backgroundColor: '#e8f5e9', padding: '40px 20px', borderRadius: '8px', margin: '20px auto', maxWidth: '1200px' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '30px', color: '#2e7d32' }}>
        Featured Products
      </Typography>
      <Grid container spacing={4}>
        {featuredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          component={RouterLink}
          to="/shop"
        >
          View All Products
        </Button>
      </Box>
    </Box>
  );
};

export default FeaturedProducts;

