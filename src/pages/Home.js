// src/pages/Home.js
import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard/ProductCard';
import mockProducts from '../data/mockProducts'; // Adjust the path based on your project structure

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1" gutterBottom>
        Welcome to MyStore
      </Typography>
      <Grid container spacing={4}>
        {mockProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
