import React, { createContext, useContext, useState } from 'react';

interface AuthContextProps {
  user: any;
  login: (value: any) => void;
  logout: () => void;
};
interface AuthProviderProps {
  children: React.ReactNode;
};

const defaultValue: AuthContextProps = {
  user: {},
  login: () => {},
  logout: () => {}
}
const AuthContext = createContext<AuthContextProps>(defaultValue);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<any>(null);

  const login = (userData: any): void => {
    setUser(userData);
  };

  const logout = (): void => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};