// src/pages/ProductDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Reviews from '../components/Reviews/Reviews';
import ReviewForm from '../components/ReviewForm/ReviewForm';
import styles from './ProductDetail.module.css';

// Mock product data (you might be fetching this from a backend)
const products = [
  {
    id: 1,
    title: 'Product 1',
    image: '/path/to/image1.jpg',
    price: 29.99,
    category: 'Clothing',
    reviews: [
      { username: 'JaneDoe', rating: 4, comment: 'Great quality, very comfortable!' },
      { username: 'JohnSmith', rating: 5, comment: 'Absolutely love it! Worth every penny.' }
    ]
  },
  {
    id: 2,
    title: 'Product 2',
    image: '/path/to/image2.jpg',
    price: 39.99,
    category: 'Electronics',
    reviews: [
      { username: 'Alice', rating: 3, comment: 'Good, but battery life could be better.' }
    ]
  },
  // Add more products...
];

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the product data based on the ID
    const foundProduct = products.find((prod) => prod.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>; // Show a loading state if product is not yet available
  }

  const addReview = (review) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      reviews: [...prevProduct.reviews, review],
    }));
  };

  return (
    <div className={styles.productDetail}>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} className={styles.productImage} />
      <p>${product.price}</p>

      <Reviews reviews={product.reviews} />
      <ReviewForm productId={product.id} addReview={addReview} />
    </div>
  );
};

export default ProductDetail;
