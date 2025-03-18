import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    loggedIn: false,
    userType: null,
    userName: null,
    userId: null,
  });

  const login = (userData) => {
    setAuth({ ...userData, loggedIn: true });
  };

  const logout = () => {
    setAuth({ loggedIn: false, userType: null, userName: null, userId: null });
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
