import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import IeltsPage from '../Frontend/IELTS/IELTS';
import IELTSChapter1 from '../Frontend/IELTS/Chapters/Chapter1';
import IELTSChapter2 from '../Frontend/IELTS/Chapters/Chapter2';
import IELTSChapter3 from '../Frontend/IELTS/Chapters/Chapter3';
import IELTSChapter4 from '../Frontend/IELTS/Chapters/Chapter4';
import IELTSChapter5 from '../Frontend/IELTS/Chapters/Chapter5';
import IELTSChapter6 from '../Frontend/IELTS/Chapters/Chapter6';
import IELTSChapter7 from '../Frontend/IELTS/Chapters/Chapter7';
import IELTSChapter8 from '../Frontend/IELTS/Chapters/Chapter8';
import IELTSChapter9 from '../Frontend/IELTS/Chapters/Chapter9';
import IELTSChapter10 from '../Frontend/IELTS/Chapters/Chapter10';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export const ieltsRoutes = [
  <Route
    key="/ielts"
    path="/ielts"
    element={<PrivateRoute><IeltsPage /></PrivateRoute>}
  >
    <Route path="chapter1" element={<PrivateRoute><IELTSChapter1 /></PrivateRoute>} />
    <Route path="chapter2" element={<PrivateRoute><IELTSChapter2 /></PrivateRoute>} />
    <Route path="chapter3" element={<PrivateRoute><IELTSChapter3 /></PrivateRoute>} />
    <Route path="chapter4" element={<PrivateRoute><IELTSChapter4 /></PrivateRoute>} />
    <Route path="chapter5" element={<PrivateRoute><IELTSChapter5 /></PrivateRoute>} />
    <Route path="chapter6" element={<PrivateRoute><IELTSChapter6 /></PrivateRoute>} />
    <Route path="chapter7" element={<PrivateRoute><IELTSChapter7 /></PrivateRoute>} />
    <Route path="chapter8" element={<PrivateRoute><IELTSChapter8 /></PrivateRoute>} />
    <Route path="chapter9" element={<PrivateRoute><IELTSChapter9 /></PrivateRoute>} />
    <Route path="chapter10" element={<PrivateRoute><IELTSChapter10 /></PrivateRoute>} />
  </Route>
];
