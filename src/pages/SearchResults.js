// src/pages/SearchResults.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard/ProductCard';
import mockProducts from '../data/mockProducts';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const query = useQuery();
  const searchQuery = query.get('q').toLowerCase();

  const filteredProducts = mockProducts.filter(product =>
    product.title.toLowerCase().includes(searchQuery) ||
    product.description.toLowerCase().includes(searchQuery) ||
    product.category.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <h1>Search Results for "{searchQuery}"</h1>
      {filteredProducts.length > 0 ? (
        <div>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default SearchResults;
