// src/pages/OrderConfirmation.js
import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../context/CartContext';
import styles from './OrderConfirmation.module.css';

const OrderConfirmation = () => {
  const { cart, dispatch } = useContext(CartContext);
  const [orderNumber, setOrderNumber] = useState('');

  useEffect(() => {
    // Clear the cart after order confirmation
    dispatch({ type: 'CLEAR_CART' });

    // Generate a random order number for confirmation
    const generateOrderNumber = () => {
      return Math.floor(Math.random() * 1000000);
    };

    setOrderNumber(generateOrderNumber());
  }, [dispatch]);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className={styles.confirmation}>
      <h1>Thank You for Your Purchase!</h1>
      <p>Your order has been placed successfully. Below are the details of your order:</p>

      <div className={styles.orderDetails}>
        <h2>Order Number: #{orderNumber}</h2>
        <div className={styles.orderItems}>
          {cart.map(item => (
            <div key={item.id} className={styles.orderItem}>
              <img src={item.image} alt={item.title} className={styles.orderItemImage} />
              <div className={styles.orderItemDetails}>
                <h3>{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.total}>
          <h3>Total Paid: ${calculateTotal()}</h3>
        </div>
      </div>

      <p>We have sent a confirmation email with your order details. Thank you for shopping with us!</p>
    </div>
  );
};

export default OrderConfirmation;
