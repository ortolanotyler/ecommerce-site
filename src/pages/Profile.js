import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { Box, Typography, Button, TextField } from '@mui/material';
import styles from './Profile.module.css';

const Profile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [updatedInfo, setUpdatedInfo] = useState({
    name: user ? user.name : '',
    email: user ? user.email : '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedInfo({ ...updatedInfo, [name]: value });
  };

  const handleSaveChanges = () => {
    // Here you would usually send the updated information to the backend
    updateUser(updatedInfo); // Assuming there's an updateUser method in your AuthContext
    setEditMode(false);
  };

  if (!user) {
    return (
      <Box className={styles.profile}>
        <Typography variant="h5">You are not logged in.</Typography>
        <Button variant="contained" color="primary" href="/login">
          Login
        </Button>
      </Box>
    );
  }

  return (
    <Box className={styles.profile}>
      <Typography variant="h4" className={styles.title}>Profile</Typography>

      {editMode ? (
        <>
          <TextField
            label="Name"
            name="name"
            value={updatedInfo.name}
            onChange={handleInputChange}
            fullWidth
            className={styles.textField}
          />
          <TextField
            label="Email"
            name="email"
            value={updatedInfo.email}
            onChange={handleInputChange}
            fullWidth
            className={styles.textField}
          />
          <Box className={styles.buttonGroup}>
            <Button variant="contained" color="primary" onClick={handleSaveChanges}>
              Save Changes
            </Button>
            <Button variant="outlined" color="secondary" onClick={() => setEditMode(false)}>
              Cancel
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Typography variant="h6">Name: {user.name}</Typography>
          <Typography variant="h6">Email: {user.email}</Typography>
          <Button variant="contained" color="primary" onClick={() => setEditMode(true)} className={styles.editButton}>
            Edit Profile
          </Button>
        </>
      )}
    </Box>
  );
};

export default Profile;
