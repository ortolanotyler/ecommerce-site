import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleViewDetails} 
        sx={{ width: '100%', borderRadius: 0 }}
      >
        View Details
      </Button>
    </Card>
  );
};

export default ProductCard;
