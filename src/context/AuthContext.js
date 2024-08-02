// src/context/AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
  });

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (updatedInfo) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...updatedInfo,
    }));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
