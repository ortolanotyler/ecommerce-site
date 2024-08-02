// src/components/ProtectedRoute/ProtectedRoute.js
import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log("ProtectedRoute: user state:", user);
  }, [user]);

  if (!user) {
    console.log("User is not logged in, redirecting to login.");
    return <Navigate to="/login" />;
  }

  console.log("User is logged in, allowing access.");
  return children;
};

export default ProtectedRoute;
