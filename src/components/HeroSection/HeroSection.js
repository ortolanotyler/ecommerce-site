// src/components/HeroSection/HeroSection.js
import React from 'react';

const HeroSection = () => {
  const heroStyle = {
    backgroundImage: 'url(/Images/hero.webp)', // Absolute path from public folder
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '100px 20px'
  };

  return (
    <div style={heroStyle}>
      <h1>Welcome to MyStore</h1>
      {/* Other content */}
    </div>
  );
};

export default HeroSection;
