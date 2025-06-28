// src/routes/publicRoutes.js
import React from 'react';
import { Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

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
import StudentProfile from '../Frontend/Profile/Profile';

// Wrapper for routes that require student role
const PrivateStudentRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== 'student') {
    return <Navigate to="/" replace />; // or navigate to /403
  }

  return children;
};

export const publicRoutes = [
  // Public (no auth required)
  <Route key="/" path="/" element={<HeroSection />} />,
  <Route key="/login" path="/login" element={<Login />} />,
  <Route key="/signup" path="/signup" element={<Signup />} />,
  <Route key="/forgot-password" path="/forgot-password" element={<ForgotPassword />} />,
  <Route key="/reset-password/:token" path="/reset-password/:token" element={<ResetPassword />} />,
  <Route key="/change-password" path="/change-password" element={<ChangePassword />} />,

  // Student-protected routes
  <Route
    key="/videos"
    path="/videos"
    element={
      <PrivateStudentRoute>
        <UserVideos />
      </PrivateStudentRoute>
    }
  />,
  <Route
    key="/videos/:id"
    path="/videos/:id"
    element={
      <PrivateStudentRoute>
        <VideoDetail />
      </PrivateStudentRoute>
    }
  />,
  <Route
    key="/content"
    path="/content"
    element={
      <PrivateStudentRoute>
        <Content />
      </PrivateStudentRoute>
    }
  />,
  <Route
    key="/report-video"
    path="/report-video"
    element={
      <PrivateStudentRoute>
        <ReportVideo />
      </PrivateStudentRoute>
    }
  />,
    <Route
    key="/profile"
    path="/student/profile"
    element={
      <PrivateStudentRoute>
        <StudentProfile />
      </PrivateStudentRoute>
    }
  />,
];
