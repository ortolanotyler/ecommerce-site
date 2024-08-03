import React from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard/ProductCard';
import mockProducts from '../data/mockProducts';
import styles from './SearchResults.module.css'; // Import CSS module

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
    <div className={styles.searchResults}>
      <Typography variant="h4" className={styles.title}>
        Search Results for "{searchQuery}"
      </Typography>
      {filteredProducts.length > 0 ? (
        <Grid container spacing={3}>
          {filteredProducts.map(product => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1" className={styles.noResults}>
          No products found.
        </Typography>
      )}
    </div>
  );
};

export default SearchResults;
