import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Reviews from '../components/Reviews/Reviews';
import ReviewForm from '../components/ReviewForm/ReviewForm';
import CartContext from '../context/CartContext';
import WishlistContext from '../context/WishlistContext1';
import styles from './ProductDetail.module.css';

const products = [
  {
    id: 1,
    title: 'Golf Rangefinder',
    image: process.env.PUBLIC_URL + '/images/rangefinder.jpg',
    price: 149.99,
    category: 'Accessories',
    description: 'Improve your accuracy with this high-tech golf rangefinder.',
    reviews: [
      { username: 'JaneDoe', rating: 4, comment: 'Very accurate and easy to use.' },
      { username: 'JohnSmith', rating: 5, comment: 'Perfect for measuring distances on the course.' }
    ]
  },
  {
    id: 2,
    title: 'Golf Balls',
    image: process.env.PUBLIC_URL + '/images/golf-balls.jpg',
    price: 29.99,
    category: 'Golf Balls',
    description: 'Premium golf balls for optimal distance and control.',
    reviews: [
      { username: 'Alice', rating: 5, comment: 'Best golf balls I have ever used.' }
    ]
  },
  {
    id: 3,
    title: 'Golf Club Set',
    image: process.env.PUBLIC_URL + '/images/golf-club-set.jpg',
    price: 799.99,
    category: 'Clubs',
    description: 'Complete set of high-quality golf clubs, including driver, irons, and putter.',
    reviews: [
      { username: 'Bob', rating: 4, comment: 'Great set for the price!' }
    ]
  },
  {
    id: 4,
    title: 'Golf Glove',
    image: process.env.PUBLIC_URL + '/images/golf-glove.jpg',
    price: 19.99,
    category: 'Apparel',
    description: 'Comfortable and durable golf glove for a perfect grip.',
    reviews: [
      { username: 'Mike', rating: 5, comment: 'Fits perfectly and feels great.' }
    ]
  },
  {
    id: 5,
    title: 'Golf Bag',
    image: process.env.PUBLIC_URL + '/images/golf-bag.jpg',
    price: 199.99,
    category: 'Accessories',
    description: 'Lightweight and spacious golf bag with multiple compartments.',
    reviews: [
      { username: 'Tom', rating: 4, comment: 'Very functional and looks good too.' }
    ]
  },
  {
    id: 6,
    title: 'Golf Cap',
    image: process.env.PUBLIC_URL + '/images/golf-cap.jpg',
    price: 24.99,
    category: 'Apparel',
    description: 'Stylish golf cap to keep you cool and protected from the sun.',
    reviews: [
      { username: 'Sara', rating: 5, comment: 'Great fit and comfortable.' }
    ]
  },
  {
    id: 7,
    title: 'Golf Training Aid',
    image: process.env.PUBLIC_URL + '/images/golf-training-aid.jpg',
    price: 99.99,
    category: 'Accessories',
    description: 'Perfect your swing with this versatile golf training aid.',
    reviews: [
      { username: 'Anna', rating: 5, comment: 'Really helped improve my swing!' }
    ]
  },
  {
    id: 8,
    title: 'Golf Umbrella',
    image: process.env.PUBLIC_URL + '/images/golf-umbrella.jpg',
    price: 39.99,
    category: 'Accessories',
    description: 'Stay dry on the course with this large, wind-resistant golf umbrella.',
    reviews: [
      { username: 'Dave', rating: 4, comment: 'Great coverage and sturdy in the wind.' }
    ]
  },
  {
    id: 9,
    title: 'Golf Towel',
    image: process.env.PUBLIC_URL + '/images/golf-towel.jpg',
    price: 14.99,
    category: 'Accessories',
    description: 'Keep your clubs clean with this absorbent golf towel.',
    reviews: [
      { username: 'Lucy', rating: 5, comment: 'Very handy and absorbs well.' }
    ]
  },
  {
    id: 10,
    title: 'Golf Shoes',
    image: process.env.PUBLIC_URL + '/images/golf-shoes.jpg',
    price: 119.99,
    category: 'Apparel',
    description: 'Comfortable golf shoes with excellent grip for stability on the course.',
    reviews: [
      { username: 'Peter', rating: 5, comment: 'Super comfortable and great grip.' }
    ]
  },
];

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    // Fetch the product data based on the ID
    const foundProduct = products.find((prod) => prod.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>; // Show a loading state if product is not yet available
  }

  const handleAddToCart = () => {
    addToCart(product);
    enqueueSnackbar(`${product.title} added to cart!`, { variant: 'success' });
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
    enqueueSnackbar(`${product.title} added to wishlist!`, { variant: 'success' });
  };

  const addReview = (review) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      reviews: [...prevProduct.reviews, review],
    }));
  };

  return (
    <div className={styles.productDetail}>
      <div className={styles.productImageContainer}>
        <img src={product.image} alt={product.title} className={styles.productImage} />
      </div>
      <div className={styles.details}>
        <h1 className={styles.productTitle}>{product.title}</h1>
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
        <div className={styles.buttonGroup}>
          <button onClick={handleAddToCart} className={styles.addToCartButton}>
            Add to Cart
          </button>
          <button onClick={handleAddToWishlist} className={styles.addToWishlistButton}>
            Add to Wishlist
          </button>
        </div>
        <Reviews reviews={product.reviews} />
        <ReviewForm productId={product.id} addReview={addReview} />
      </div>
    </div>
  );
};

export default ProductDetail;
