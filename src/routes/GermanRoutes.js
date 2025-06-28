import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import GermanPage from '../Frontend/German/German';
import GermanChapter1 from '../Frontend/German/Chapters/Chapter1';
import GermanChapter2 from '../Frontend/German/Chapters/Chapter2';
import GermanChapter3 from '../Frontend/German/Chapters/Chapter3';
import GermanChapter4 from '../Frontend/German/Chapters/Chapter4';
import GermanChapter5 from '../Frontend/German/Chapters/Chapter5';
import GermanChapter6 from '../Frontend/German/Chapters/Chapter6';
import GermanChapter7 from '../Frontend/German/Chapters/Chapter7';
import GermanChapter8 from '../Frontend/German/Chapters/Chapter8';
import GermanChapter9 from '../Frontend/German/Chapters/Chapter9';
import GermanChapter10 from '../Frontend/German/Chapters/Chapter10';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export const germanRoutes = [
  <Route
    key="/german"
    path="/german"
    element={<PrivateRoute><GermanPage /></PrivateRoute>}
  >
    <Route path="chapter1" element={<PrivateRoute><GermanChapter1 /></PrivateRoute>} />
    <Route path="chapter2" element={<PrivateRoute><GermanChapter2 /></PrivateRoute>} />
    <Route path="chapter3" element={<PrivateRoute><GermanChapter3 /></PrivateRoute>} />
    <Route path="chapter4" element={<PrivateRoute><GermanChapter4 /></PrivateRoute>} />
    <Route path="chapter5" element={<PrivateRoute><GermanChapter5 /></PrivateRoute>} />
    <Route path="chapter6" element={<PrivateRoute><GermanChapter6 /></PrivateRoute>} />
    <Route path="chapter7" element={<PrivateRoute><GermanChapter7 /></PrivateRoute>} />
    <Route path="chapter8" element={<PrivateRoute><GermanChapter8 /></PrivateRoute>} />
    <Route path="chapter9" element={<PrivateRoute><GermanChapter9 /></PrivateRoute>} />
    <Route path="chapter10" element={<PrivateRoute><GermanChapter10 /></PrivateRoute>} />
  </Route>
];
