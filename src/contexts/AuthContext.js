import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = localStorage.getItem('token');
    return !!token;
  });
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log("Token in AuthContext:", token ? "exists" : "missing");
    
    if (token && !isAuthenticated) {
      setIsAuthenticated(true);
      // Fetch user profile when token exists
      fetchProfile();
    } else if (!token && isAuthenticated) {
      setIsAuthenticated(false);
      setUser(null);
    }
  }, [isAuthenticated]);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;
      
      console.log("Fetching profile with token...");

      const response = await fetch('http://localhost:5000/api/auth/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      console.log("Profile response status:", response.status);
      
      if (response.ok) {
        const data = await response.json();
        console.log("Profile data received:", data);
        setUser(data.user);
        // Update localStorage
        localStorage.setItem('user', JSON.stringify(data.user));
      } else if (response.status === 401) {
        // Token expired or invalid
        console.log("Token invalid or expired");
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      localStorage.removeItem('token');
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const login = async (credentials) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(credentials)
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        // Save the user data to localStorage as well
        localStorage.setItem('user', JSON.stringify(data.user));
        setIsAuthenticated(true);
        setUser(data.user);
        console.log('Login successful, user data:', data.user); // Debug log
        
        // Check if we have an intended path
        const intendedPath = localStorage.getItem('intendedPath');
        if (intendedPath) {
          localStorage.removeItem('intendedPath');
          window.location.href = intendedPath;
        } else {
          window.location.href = '/';
        }
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      user,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
