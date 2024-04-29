import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userCredentials) => {
    // Aquí podrías agregar tu lógica de autenticación y luego:
    setUser(userCredentials);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
