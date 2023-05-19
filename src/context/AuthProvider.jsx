import React, { createContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Función para decodificar el JWT y establecer el usuario
  const decodeToken = (token) => {
    try {
      const decodedToken = jwt_decode(token);
      setUser(decodedToken);
    } catch (error) {
      console.error('Error al decodificar el JWT:', error);
      setUser(null); // Establecer el usuario como null en caso de error
    }
  };

  // Función para obtener el token del localStorage y decodificarlo
  const getTokenFromLocalStorage = () => {
    const token = localStorage.getItem('token');
    if (token) {
      decodeToken(token);
    }
  };

  // Función para actualizar el token y el usuario autenticado
  const updateAuth = (token) => {
    if (token) {
      localStorage.setItem('token', token);
      decodeToken(token);
    } else {
      localStorage.removeItem('token');
      setUser(null);
    }
  };

  // Llama a getTokenFromLocalStorage al iniciar el AuthProvider
  useEffect(() => {
    getTokenFromLocalStorage();
  }, []);

  return (
    <AuthContext.Provider value={{ user, updateAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
