// src/components/ProductList/ProductList.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import CartContext from '../../context/CartContext';
import WishlistContext from '../../context/WishlistContext1';
import LazyLoad from 'react-lazyload';
import styles from './ProductList.module.css';

const ProductList = ({ products }) => {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const { enqueueSnackbar } = useSnackbar();

  const handleAddToCart = (product) => {
    addToCart(product);
    enqueueSnackbar(`${product.title} added to cart!`, { variant: 'success' });
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    enqueueSnackbar(`${product.title} added to wishlist!`, { variant: 'success' });
  };

  return (
    <div className={styles.productList}>
      {products.map(product => (
        <div key={product.id} className={styles.productCard}>
          <LazyLoad height={200} offset={100}>
            <img src={product.image} alt={product.title} className={styles.productImage} />
          </LazyLoad>
          <h2 className={styles.productTitle}>{product.title}</h2>
          <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
          <Link to={`/product/${product.id}`} className={styles.detailsLink}>View Details</Link>
          <div className={styles.buttonGroup}>
            <button onClick={() => handleAddToCart(product)} className={styles.cartButton}>
              Add to Cart
            </button>
            <button onClick={() => handleAddToWishlist(product)} className={styles.wishlistButton}>
              Add to Wishlist
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
