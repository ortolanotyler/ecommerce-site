// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      console.log("Loaded user from localStorage:", storedUser);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    console.log("Logging in with user data:", userData);
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Save user data to localStorage
  };

  const logout = () => {
    console.log("Logging out...");
    setUser(null);
    localStorage.removeItem('user'); // Remove user data from localStorage
  };

  console.log("AuthContext user state:", user);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
