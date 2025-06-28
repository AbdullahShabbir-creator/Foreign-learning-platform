import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AdminDashboardLayout from '../Frontend/Admin/AdminDashboard1';

const PrivateAdminRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== 'admin') {
    return <Navigate to="/" replace />;  // Or navigate to a 403 page
  }

  return children;
};

export const adminRoutes = [
  <Route
    key="/admin/*"
    path="/admin/*"
    element={
      <PrivateAdminRoute>
        <AdminDashboardLayout />
      </PrivateAdminRoute>
    }
  />
];
