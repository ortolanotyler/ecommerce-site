// src/pages/OrderDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import mockOrders from '../data/mockOrders';
import styles from './OrderDetail.module.css';

const OrderDetail = () => {
  const { id } = useParams(); // Get the order ID from the URL
  const order = mockOrders.find(order => order.id === parseInt(id));

  if (!order) {
    return <p>Order not found!</p>;
  }

  return (
    <div className={styles.orderDetail}>
      <h1>Order #{order.id}</h1>
      <p>Date: {order.date}</p>
      <p>Total: ${order.total.toFixed(2)}</p>
      <h2>Items</h2>
      <ul className={styles.itemList}>
        {order.items.map(item => (
          <li key={item.id}>
            <p>{item.title}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetail;
