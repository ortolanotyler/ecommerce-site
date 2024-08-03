import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import styles from './Cart.module.css';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className={styles.cart}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.title} className={styles.cartItemImage} />
              <div className={styles.cartItemDetails}>
                <h2>{item.title}</h2>
                <p>Price: ${item.price.toFixed(2)}</p>
                <div className={styles.quantityControls}>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className={styles.removeButton}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className={styles.checkoutSection}>
            <button onClick={handleCheckout} className={styles.checkoutButton}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
