// src/components/ProductCard/ProductCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card className={styles.card}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        className={styles.media}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          ${product.price.toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleViewDetails}
          className={styles.button}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;


