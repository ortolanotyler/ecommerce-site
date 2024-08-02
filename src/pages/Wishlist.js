// src/pages/Wishlist.js
import React, { useContext } from 'react';
import WishlistContext from '../context/WishlistContext1';
import styles from './Wishlist.module.css';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className={styles.wishlist}>
      <h1>My Wishlist</h1>
      {wishlist.length > 0 ? (
        <div>
          {wishlist.map(product => (
            <div key={product.id} className={styles.wishlistItem}>
              <img src={product.image} alt={product.title} className={styles.productImage} />
              <div className={styles.productDetails}>
                <h2>{product.title}</h2>
                <p>${product.price.toFixed(2)}</p>
                <button onClick={() => removeFromWishlist(product.id)} className={styles.removeButton}>
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;
