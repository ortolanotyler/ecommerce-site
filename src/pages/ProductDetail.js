import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Reviews from '../components/Reviews/Reviews';
import ReviewForm from '../components/ReviewForm/ReviewForm';
import CartContext from '../context/CartContext';
import WishlistContext from '../context/WishlistContext1';
import styles from './ProductDetail.module.css';
import mockProducts from '../data/mockProducts';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const foundProduct = mockProducts.find((prod) => prod.id === parseInt(id));
    if (foundProduct) {
      setProduct({ ...foundProduct, reviews: foundProduct.reviews || [] });
    }
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
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
