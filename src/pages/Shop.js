// src/pages/Shop.js
import React, { useState } from 'react';
import ProductList from '../components/ProductList/ProductList';
import SearchBar from '../components/SearchBar/SearchBar';
import mockProducts from '../data/mockProducts';
import styles from './Shop.module.css';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = mockProducts
    .filter(product =>
      product.title.toLowerCase().includes(searchTerm) &&
      (selectedCategory === 'All' || product.category === selectedCategory)
    );

  // Get unique categories from products
  const categories = ['All', ...new Set(mockProducts.map(product => product.category))];

  return (
    <div className={styles.shop}>
      <h1>Shop</h1>
      <SearchBar onSearch={handleSearch} />
      
      <div className={styles.filterContainer}>
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className={styles.categorySelect}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Shop;
