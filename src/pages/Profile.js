// src/pages/Profile.js
import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Box, Typography, Button } from '@mui/material';

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <Box sx={{ padding: 3 }}>
        <Typography variant="h5">You are not logged in.</Typography>
        <Button variant="contained" color="primary" href="/login">
          Login
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4">Profile</Typography>
      <Typography variant="h6">Name: {user.name}</Typography>
      <Typography variant="h6">Email: {user.email}</Typography>
      {/* Add more profile information and options here */}
    </Box>
  );
};

export default Profile;
