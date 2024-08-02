// src/pages/Signup.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import styles from './Auth.module.css';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext); // You might want to log the user in immediately after signup
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Simulate API call for signup
    const newUser = { id: 2, name, email }; // Simulated user data
    login(newUser); // Set user data in AuthContext

    // Redirect to home page or other page
    navigate('/');
  };

  return (
    <div className={styles.authContainer}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup} className={styles.authForm}>
        <div className={styles.formGroup}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.authButton}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;

