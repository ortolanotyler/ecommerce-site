// src/pages/ProductDetail.js
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Reviews from '../components/Reviews/Reviews';
import ReviewForm from '../components/ReviewForm/ReviewForm';
import CartContext from '../context/CartContext';
import WishlistContext from '../context/WishlistContext1';
import styles from './ProductDetail.module.css';

// Mock product data (you might be fetching this from a backend)
const products = [
  {
    id: 1,
    title: 'Product 1',
    image: '/path/to/image1.jpg',
    price: 29.99,
    category: 'Clothing',
    description: 'A comfortable and stylish piece of clothing that is perfect for any occasion.',
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
    description: 'A top-notch electronic gadget that meets all your needs.',
    reviews: [
      { username: 'Alice', rating: 3, comment: 'Good, but battery life could be better.' }
    ]
  },
  // Add more products...
];

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    // Fetch the product data based on the ID
    const foundProduct = products.find((prod) => prod.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>; // Show a loading state if product is not yet available
  }

  const handleAddToCart = () => {
    addToCart(product);
    enqueueSnackbar(`${product.title} added to cart!`, { variant: 'success' });
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
    enqueueSnackbar(`${product.title} added to wishlist!`, { variant: 'success' });
  };

  const addReview = (review) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      reviews: [...prevProduct.reviews, review],
    }));
  };

  return (
    <div className={styles.productDetail}>
      <div className={styles.productImageContainer}>
        <img src={product.image} alt={product.title} className={styles.productImage} />
      </div>
      <div className={styles.details}>
        <h1 className={styles.productTitle}>{product.title}</h1>
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
        <div className={styles.buttonGroup}>
          <button onClick={handleAddToCart} className={styles.addToCartButton}>
            Add to Cart
          </button>
          <button onClick={handleAddToWishlist} className={styles.addToWishlistButton}>
            Add to Wishlist
          </button>
        </div>
        <Reviews reviews={product.reviews} />
        <ReviewForm productId={product.id} addReview={addReview} />
      </div>
    </div>
  );
};

export default ProductDetail;

