import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import PracticeTestsIndex from '../Frontend/PracticeTests/PracticeTestsIndex';
import GermanTestsIndex from '../Frontend/PracticeTests/GermanTestsIndex';
import ChineseTestsIndex from '../Frontend/PracticeTests/ChineseTestsIndex';
import IELTSListeningTest from '../Frontend/PracticeTests/IELTS/ListeningTest';
import IELTSReadingTest from '../Frontend/PracticeTests/IELTS/ReadingTest';
import WritingTest from '../Frontend/PracticeTests/WritingTest';
import SpeakingTest from '../Frontend/PracticeTests/SpeakingTest';
import GermanListeningTest from '../Frontend/PracticeTests/GermanListeningTest';
import GermanReadingTest from '../Frontend/PracticeTests/GermanReadingTest';
import GermanWritingTest from '../Frontend/PracticeTests/GermanWritingTest';
import GermanSpeakingTest from '../Frontend/PracticeTests/GermanSpeakingTest';
import ChineseListeningTest from '../Frontend/PracticeTests/ChineseListeningTest';
import ChineseReadingTest from '../Frontend/PracticeTests/ChineseReadingTest';
import ChineseWritingTest from '../Frontend/PracticeTests/ChineseWritingTest';
import ChineseSpeakingTest from '../Frontend/PracticeTests/ChineseSpeakingTest';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export const practiceTestRoutes = [
  <Route key="/practice-tests" path="/practice-tests" element={<PrivateRoute><PracticeTestsIndex /></PrivateRoute>} />,
  <Route key="/practice-tests/german" path="/practice-tests/german" element={<PrivateRoute><GermanTestsIndex /></PrivateRoute>} />,
  <Route key="/practice-tests/chinese" path="/practice-tests/chinese" element={<PrivateRoute><ChineseTestsIndex /></PrivateRoute>} />,
  <Route key="/practice-tests/ielts/listening" path="/practice-tests/ielts/listening" element={<PrivateRoute><IELTSListeningTest /></PrivateRoute>} />,
  <Route key="/practice-tests/ielts/reading" path="/practice-tests/ielts/reading" element={<PrivateRoute><IELTSReadingTest /></PrivateRoute>} />,
  <Route key="/practice-tests/ielts/writing" path="/practice-tests/ielts/writing" element={<PrivateRoute><WritingTest /></PrivateRoute>} />,
  <Route key="/practice-tests/ielts/speaking" path="/practice-tests/ielts/speaking" element={<PrivateRoute><SpeakingTest /></PrivateRoute>} />,
  <Route key="/practice-tests/german/listening" path="/practice-tests/german/listening" element={<PrivateRoute><GermanListeningTest /></PrivateRoute>} />,
  <Route key="/practice-tests/german/reading" path="/practice-tests/german/reading" element={<PrivateRoute><GermanReadingTest /></PrivateRoute>} />,
  <Route key="/practice-tests/german/writing" path="/practice-tests/german/writing" element={<PrivateRoute><GermanWritingTest /></PrivateRoute>} />,
  <Route key="/practice-tests/german/speaking" path="/practice-tests/german/speaking" element={<PrivateRoute><GermanSpeakingTest /></PrivateRoute>} />,
  <Route key="/practice-tests/chinese/listening" path="/practice-tests/chinese/listening" element={<PrivateRoute><ChineseListeningTest /></PrivateRoute>} />,
  <Route key="/practice-tests/chinese/reading" path="/practice-tests/chinese/reading" element={<PrivateRoute><ChineseReadingTest /></PrivateRoute>} />,
  <Route key="/practice-tests/chinese/writing" path="/practice-tests/chinese/writing" element={<PrivateRoute><ChineseWritingTest /></PrivateRoute>} />,
  <Route key="/practice-tests/chinese/speaking" path="/practice-tests/chinese/speaking" element={<PrivateRoute><ChineseSpeakingTest /></PrivateRoute>} />,
];
