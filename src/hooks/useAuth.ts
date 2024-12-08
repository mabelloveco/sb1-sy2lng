import { useState, useCallback } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
  token: string | null;
}

export function useAuth() {
  const [auth, setAuth] = useState<AuthState>(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return {
      isAuthenticated: !!token,
      user: user ? JSON.parse(user) : null,
      token
    };
  });

  const login = useCallback(async (email: string, password: string) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      const { token, user } = response.data;
      
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      
      setAuth({
        isAuthenticated: true,
        user,
        token
      });
      
      toast.success('Successfully logged in!');
      return true;
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
      return false;
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setAuth({
      isAuthenticated: false,
      user: null,
      token: null
    });
    toast.success('Successfully logged out!');
  }, []);

  const signup = useCallback(async (email: string, password: string, name: string) => {
    try {
      const response = await axios.post('/api/auth/register', { email, password, name });
      const { token, user } = response.data;
      
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      
      setAuth({
        isAuthenticated: true,
        user,
        token
      });
      
      toast.success('Successfully signed up!');
      return true;
    } catch (error) {
      toast.error('Signup failed. Please try again.');
      return false;
    }
  }, []);

  return {
    ...auth,
    login,
    logout,
    signup
  };
}