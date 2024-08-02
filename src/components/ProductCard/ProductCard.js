import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card className={styles.card}>
      <Box className={styles.mediaContainer}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          className={styles.media}
        />
      </Box>
      <CardContent className={styles.content}>
        <Typography gutterBottom variant="h6" component="div" className={styles.title}>
          {product.title}
        </Typography>
        <Typography variant="body1" color="textPrimary" className={styles.price}>
          ${product.price.toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleViewDetails}
          className={styles.button}
          fullWidth
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
