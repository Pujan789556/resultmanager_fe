import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const authContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const loginUser = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    navigate('/');
  };
  const logoutUser = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    } else {
      navigate('/login');
    }
  }, []);
  return <authContext.Provider value={{ user, loginUser, logoutUser }}> {children}</authContext.Provider>;
}
