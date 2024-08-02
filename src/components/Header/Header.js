// src/components/Header/Header.js
import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Home, Store, ShoppingCart, Favorite } from '@mui/icons-material';
import AuthContext from '../../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyStore
        </Typography>
        <Box>
          <Button
            color={isActive('/') ? 'secondary' : 'inherit'}
            component={RouterLink}
            to="/"
            startIcon={<Home />}
          >
            Home
          </Button>
          <Button
            color={isActive('/shop') ? 'secondary' : 'inherit'}
            component={RouterLink}
            to="/shop"
            startIcon={<Store />}
          >
            Shop
          </Button>
          <Button
            color={isActive('/cart') ? 'secondary' : 'inherit'}
            component={RouterLink}
            to="/cart"
            startIcon={<ShoppingCart />}
          >
            Cart
          </Button>
          {user && (
            <Button
              color={isActive('/wishlist') ? 'secondary' : 'inherit'}
              component={RouterLink}
              to="/wishlist"
              startIcon={<Favorite />}
            >
              Wishlist
            </Button>
          )}
          {user ? (
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" component={RouterLink} to="/login">
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
