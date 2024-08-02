// src/components/Reviews/Reviews.js
import React from 'react';
import styles from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  const averageRating = (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className={styles.reviews}>
      <h3>Customer Reviews ({reviews.length})</h3>
      <p>Average Rating: {averageRating} / 5</p>
      <div className={styles.reviewList}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.review}>
            <p><strong>{review.username}</strong> rated it {review.rating} star{review.rating > 1 ? 's' : ''}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
