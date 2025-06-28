import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import ChinesePage from '../Frontend/Chinese/Chinese';
import Chapter1 from '../Frontend/Chinese/Chapters/Chapter1';
import Chapter2 from '../Frontend/Chinese/Chapters/Chapter2';
import Chapter3 from '../Frontend/Chinese/Chapters/Chapter3';
import Chapter4 from '../Frontend/Chinese/Chapters/Chapter4';
import Chapter5 from '../Frontend/Chinese/Chapters/Chapter5';
import Chapter6 from '../Frontend/Chinese/Chapters/Chapter6';
import Chapter7 from '../Frontend/Chinese/Chapters/Chapter7';
import Chapter8 from '../Frontend/Chinese/Chapters/Chapter8';
import Chapter9 from '../Frontend/Chinese/Chapters/Chapter9';
import Chapter10 from '../Frontend/Chinese/Chapters/Chapter10';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export const chineseRoutes = [
  <Route
    key="/chinese"
    path="/chinese"
    element={<PrivateRoute><ChinesePage /></PrivateRoute>}
  >
    <Route path="chapter1" element={<PrivateRoute><Chapter1 /></PrivateRoute>} />
    <Route path="chapter2" element={<PrivateRoute><Chapter2 /></PrivateRoute>} />
    <Route path="chapter3" element={<PrivateRoute><Chapter3 /></PrivateRoute>} />
    <Route path="chapter4" element={<PrivateRoute><Chapter4 /></PrivateRoute>} />
    <Route path="chapter5" element={<PrivateRoute><Chapter5 /></PrivateRoute>} />
    <Route path="chapter6" element={<PrivateRoute><Chapter6 /></PrivateRoute>} />
    <Route path="chapter7" element={<PrivateRoute><Chapter7 /></PrivateRoute>} />
    <Route path="chapter8" element={<PrivateRoute><Chapter8 /></PrivateRoute>} />
    <Route path="chapter9" element={<PrivateRoute><Chapter9 /></PrivateRoute>} />
    <Route path="chapter10" element={<PrivateRoute><Chapter10 /></PrivateRoute>} />
  </Route>
];
