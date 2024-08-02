// src/components/ReviewForm/ReviewForm.js
import React, { useState } from 'react';
import styles from './ReviewForm.module.css';

const ReviewForm = ({ productId, addReview }) => {
  const [username, setUsername] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(productId, { username, rating, comment });
    setUsername('');
    setRating(0);
    setComment('');
  };

  return (
    <form className={styles.reviewForm} onSubmit={handleSubmit}>
      <h3>Leave a Review</h3>
      <div className={styles.formGroup}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Rating:</label>
        <select value={rating} onChange={(e) => setRating(parseInt(e.target.value))} required>
          <option value={0}>Select a rating</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} Star{num > 1 ? 's' : ''}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.formGroup}>
        <label>Comment:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className={styles.submitButton}>Submit Review</button>
    </form>
  );
};

export default ReviewForm;
