// src/components/ProductList/ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import styles from './ProductList.module.css';

const ProductList = ({ products }) => {
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
        </div>
      ))}
    </div>
  );
};

export default ProductList;
