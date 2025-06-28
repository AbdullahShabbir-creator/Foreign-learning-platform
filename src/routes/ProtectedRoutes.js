/*import React from 'react';
import { Route } from 'react-router-dom';
import HeroSection from '../Frontend/Herosection/Herosection';
import Login from '../Frontend/Login/Login';
import Signup from '../Frontend/Signup/Signup';
import ForgotPassword from '../Frontend/Login/ForgotPassword';
import ResetPassword from '../Frontend/Login/ResetPassword';
import ChangePassword from '../Frontend/Login/ChangePassword';
import UserVideos from '../Frontend/Dashboard/UserVideos';
import VideoDetail from '../Frontend/Dashboard/VideoDetail';
import Content from '../Frontend/Dashboard/Content';
import ReportVideo from '../Frontend/Report/Report';

export const protectedRoutes = [
  <Route key="/" path="/" element={<HeroSection />} />,
  <Route key="/login" path="/login" element={<Login />} />,
  <Route key="/signup" path="/signup" element={<Signup />} />,
  <Route key="/forgot-password" path="/forgot-password" element={<ForgotPassword />} />,
  <Route key="/reset-password/:token" path="/reset-password/:token" element={<ResetPassword />} />,
  <Route key="/change-password" path="/change-password" element={<ChangePassword />} />,
  <Route key="/videos" path="/videos" element={<UserVideos />} />,
  <Route key="/videos/:id" path="/videos/:id" element={<VideoDetail />} />,
  <Route key="/content" path="/content" element={<Content />} />,
  <Route key="/report-video" path="/report-video" element={<ReportVideo />} />,
];
*/

// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />; // redirect to home or 403 page
  }

  return children;
};

export default ProtectedRoute;
