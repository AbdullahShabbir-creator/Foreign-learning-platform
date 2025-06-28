import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import DashboardLayout from '../Frontend/Dashboard/DashboardLayout';
import DashboardProfile from '../Frontend/Dashboard/DashboardProfile';
import UploadCourse from '../Frontend/Dashboard/UploadCourse';
import Progress from '../Frontend/Dashboard/Progress';

const PrivateInstructorRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  console.log(user)
  if (user.role !== 'instructor') {
    return <Navigate to="/" replace />; // redirect to home or 403 page
  }

  return children;
};

export const dashboardRoutes = [
  <Route
    key="/dashboard"
    path="/dashboard/*"
    element={
      <PrivateInstructorRoute>
        <DashboardLayout />
      </PrivateInstructorRoute>
    }
  >
    <Route path="profile" element={
      <PrivateInstructorRoute>
        <DashboardProfile />
      </PrivateInstructorRoute>
    } />
    <Route path="upload-course" element={
      <PrivateInstructorRoute>
        <UploadCourse />
      </PrivateInstructorRoute>
    } />
    <Route path="progress" element={
      <PrivateInstructorRoute>
        <Progress />
      </PrivateInstructorRoute>
    } />
  </Route>
];
