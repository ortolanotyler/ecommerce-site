// src/pages/OrderHistory.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import mockOrders from '../data/mockOrders';
import styles from './OrderHistory.module.css';

const OrderHistory = () => {
  const navigate = useNavigate();

  const handleViewOrder = (orderId) => {
    navigate(`/order/${orderId}`); // Navigate to the order detail page
  };

  return (
    <div className={styles.orderHistory}>
      <h1>Order History</h1>
      {mockOrders.length > 0 ? (
        <div>
          {mockOrders.map((order) => (
            <div key={order.id} className={styles.orderCard}>
              <h2>Order #{order.id}</h2>
              <p>Date: {order.date}</p>
              <p>Total: ${order.total.toFixed(2)}</p>
              <button
                className={styles.viewOrderButton}
                onClick={() => handleViewOrder(order.id)}
              >
                View Order
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>You have no orders yet.</p>
      )}
    </div>
  );
};

export default OrderHistory;
