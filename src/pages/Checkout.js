// src/pages/Checkout.js
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import CartContext from '../context/CartContext';
import styles from './Checkout.module.css';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    phone: ''
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleConfirmOrder = () => {
    if (shippingInfo.name === '' || shippingInfo.address === '' || paymentInfo.cardNumber === '') {
      enqueueSnackbar('Please fill in all required fields.', { variant: 'error' });
      return;
    }
    // Normally, here you'd handle payment processing and order creation
    // For now, we'll just simulate this process
    console.log('Order Confirmed', { shippingInfo, paymentInfo, cart });
    clearCart();
    enqueueSnackbar('Order placed successfully!', { variant: 'success' });
    navigate('/order-confirmation');
  };

  return (
    <div className={styles.checkout}>
      <h1>Checkout</h1>

      <div className={styles.orderSummary}>
        <h2>Order Summary</h2>
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
        <div className={styles.total}>
          <h3>Total: ${calculateTotal()}</h3>
        </div>
      </div>

      <div className={styles.shippingInfo}>
        <h2>Shipping Information</h2>
        <form>
          <div className={styles.formGroup}>
            <label>Name:</label>
            <input type="text" name="name" value={shippingInfo.name} onChange={handleInputChange} required />
          </div>
          <div className={styles.formGroup}>
            <label>Address:</label>
            <input type="text" name="address" value={shippingInfo.address} onChange={handleInputChange} required />
          </div>
          <div className={styles.formGroup}>
            <label>City:</label>
            <input type="text" name="city" value={shippingInfo.city} onChange={handleInputChange} required />
          </div>
          <div className={styles.formGroup}>
            <label>Postal Code:</label>
            <input type="text" name="postalCode" value={shippingInfo.postalCode} onChange={handleInputChange} required />
          </div>
          <div className={styles.formGroup}>
            <label>Country:</label>
            <input type="text" name="country" value={shippingInfo.country} onChange={handleInputChange} required />
          </div>
          <div className={styles.formGroup}>
            <label>Phone Number:</label>
            <input type="text" name="phone" value={shippingInfo.phone} onChange={handleInputChange} required />
          </div>
        </form>
      </div>

      <div className={styles.paymentInfo}>
        <h2>Payment Information</h2>
        <form>
          <div className={styles.formGroup}>
            <label>Card Number:</label>
            <input type="text" name="cardNumber" value={paymentInfo.cardNumber} onChange={handlePaymentChange} required />
          </div>
          <div className={styles.formGroup}>
            <label>Expiry Date:</label>
            <input type="text" name="expiryDate" value={paymentInfo.expiryDate} onChange={handlePaymentChange} required />
          </div>
          <div className={styles.formGroup}>
            <label>CVV:</label>
            <input type="text" name="cvv" value={paymentInfo.cvv} onChange={handlePaymentChange} required />
          </div>
        </form>
      </div>

      <button onClick={handleConfirmOrder} className={styles.confirmButton}>
        Confirm Order
      </button>
    </div>
  );
};

export default Checkout;
