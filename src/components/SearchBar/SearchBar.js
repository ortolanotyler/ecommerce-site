// src/components/SearchBar/SearchBar.js
import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search for products..."
        onChange={handleInputChange}
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBar;
