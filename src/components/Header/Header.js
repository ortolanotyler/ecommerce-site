// src/components/Header/Header.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, InputBase, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Home, Store, ShoppingCart, AccountCircle, Search as SearchIcon, Menu as MenuIcon } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import AuthContext from '../../context/AuthContext';
import styles from './Header.module.css';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = () => {
  const { user, logout } = React.useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    if (event.key === 'Enter') {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  const handleSearchClick = () => {
    if (searchQuery) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const renderDrawer = () => (
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)} classes={{ paper: styles.drawerContent }}>
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
        <List className={styles.drawerList}>
          <ListItem button component={RouterLink} to="/" className={styles.drawerListItem}>
            <ListItemIcon><Home /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={RouterLink} to="/shop" className={styles.drawerListItem}>
            <ListItemIcon><Store /></ListItemIcon>
            <ListItemText primary="Shop" />
          </ListItem>
          <ListItem button component={RouterLink} to="/cart" className={styles.drawerListItem}>
            <ListItemIcon><ShoppingCart /></ListItemIcon>
            <ListItemText primary="Cart" />
          </ListItem>
          {user ? (
            <>
              <ListItem button component={RouterLink} to="/profile" className={styles.drawerListItem}>
                <ListItemIcon><AccountCircle /></ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItem>
              <ListItem button onClick={handleLogout} className={styles.drawerListItem}>
                <ListItemText primary="Logout" />
              </ListItem>
            </>
          ) : (
            <ListItem button component={RouterLink} to="/login" className={styles.drawerListItem}>
              <ListItemText primary="Login" />
            </ListItem>
          )}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar>
        <IconButton color="inherit" edge="start" onClick={toggleDrawer(true)} sx={{ display: { xs: 'block', md: 'none' } }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component={RouterLink} to="/" className={styles.logo} sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          GOLF.store
        </Typography>
        <Box className={styles.searchContainer} sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon onClick={handleSearchClick} className={styles.searchIcon} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyPress={handleSearchSubmit}
            />
          </Search>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit" component={RouterLink} to="/" className={styles.link} startIcon={<Home />}>
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/shop" className={styles.link} startIcon={<Store />}>
            Shop
          </Button>
          <IconButton color="inherit" component={RouterLink} to="/cart">
            <ShoppingCart />
          </IconButton>
          {user ? (
            <>
              <IconButton color="inherit" component={RouterLink} to="/profile">
                <AccountCircle />
              </IconButton>
              <Button color="inherit" onClick={handleLogout} className={styles.link}>
                Logout
              </Button>
            </>
          ) : (
            <Button color="inherit" component={RouterLink} to="/login" className={styles.link}>
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
      {renderDrawer()}
    </AppBar>
  );
};

export default Header;
