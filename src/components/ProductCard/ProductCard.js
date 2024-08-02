// src/components/ProductCard/ProductCard.js
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={product.title}
        height="140"
        image={product.image}
        title={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>
      <Button variant="contained" color="primary" component={RouterLink} to={`/product/${product.id}`}>
        View Details
      </Button>
    </Card>
  );
};

export default ProductCard;
