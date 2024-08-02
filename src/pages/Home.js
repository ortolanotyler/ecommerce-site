// src/pages/Home.js
import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      {/* Add more sections as needed */}
    </div>
  );
};

export default Home;
