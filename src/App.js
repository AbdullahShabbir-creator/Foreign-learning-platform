import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import './App.css';
import './Frontend/styles/main.css';
import './Frontend/styles/animations.css';
import './Frontend/styles/chapter-styles.css';

// General Components
import Navbar from './Frontend/Navbar/Navbar';
import HeroSection from './Frontend/Herosection/Herosection';
import Login from './Frontend/Login/Login';
import Signup from './Frontend/Signup/Signup';
import ForgotPassword from './Frontend/Login/ForgotPassword';
import ResetPassword from './Frontend/Login/ResetPassword';
import ChangePassword from './Frontend/Login/ChangePassword';
import AdminDashboard from './Frontend/Admin/AdminDashboard';
import Profile from './Frontend/Profile/Profile';
import DashboardLayout from './Frontend/Dashboard/DashboardLayout';
import DashboardProfile from './Frontend/Dashboard/DashboardProfile';

// Practice Tests
import PracticeTestSelect from './Frontend/PracticeTests/PracticeTestSelect';
import IELTSListeningTest from './Frontend/PracticeTests/IELTS/ListeningTest';
import IELTSReadingTest from './Frontend/PracticeTests/IELTS/ReadingTest';

// IELTS Components
import IeltsPage from './Frontend/IELTS/IELTS';
import IELTSChapter1 from './Frontend/IELTS/Chapters/Chapter1';
import IELTSChapter2 from './Frontend/IELTS/Chapters/Chapter2';
import IELTSChapter3 from './Frontend/IELTS/Chapters/Chapter3';
import IELTSChapter4 from './Frontend/IELTS/Chapters/Chapter4';
import IELTSChapter5 from './Frontend/IELTS/Chapters/Chapter5';
import IELTSChapter6 from './Frontend/IELTS/Chapters/Chapter6';
import IELTSChapter7 from './Frontend/IELTS/Chapters/Chapter7';
import IELTSChapter8 from './Frontend/IELTS/Chapters/Chapter8';
import IELTSChapter9 from './Frontend/IELTS/Chapters/Chapter9';
import IELTSChapter10 from './Frontend/IELTS/Chapters/Chapter10';

// German Components
import GermanPage from './Frontend/German/German';
import GermanChapter1 from './Frontend/German/Chapters/Chapter1';
import GermanChapter2 from './Frontend/German/Chapters/Chapter2';
import GermanChapter3 from './Frontend/German/Chapters/Chapter3';
import GermanChapter4 from './Frontend/German/Chapters/Chapter4';
import GermanChapter5 from './Frontend/German/Chapters/Chapter5';
import GermanChapter6 from './Frontend/German/Chapters/Chapter6';
import GermanChapter7 from './Frontend/German/Chapters/Chapter7';
import GermanChapter8 from './Frontend/German/Chapters/Chapter8';
import GermanChapter9 from './Frontend/German/Chapters/Chapter9';
import GermanChapter10 from './Frontend/German/Chapters/Chapter10';

// Chinese Components
import ChinesePage from './Frontend/Chinese/Chinese';
import Chapter1 from './Frontend/Chinese/Chapters/Chapter1';
import Chapter2 from './Frontend/Chinese/Chapters/Chapter2';
import Chapter3 from './Frontend/Chinese/Chapters/Chapter3';
import Chapter4 from './Frontend/Chinese/Chapters/Chapter4';
import Chapter5 from './Frontend/Chinese/Chapters/Chapter5';
import Chapter6 from './Frontend/Chinese/Chapters/Chapter6';
import Chapter7 from './Frontend/Chinese/Chapters/Chapter7';
import Chapter8 from './Frontend/Chinese/Chapters/Chapter8';
import Chapter9 from './Frontend/Chinese/Chapters/Chapter9';
import Chapter10 from './Frontend/Chinese/Chapters/Chapter10';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HeroSection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />

          {/* Protected Routes */}
          <Route path="/dashboard" element={
            <PrivateRoute>
              <DashboardLayout>
                <Routes>
                  <Route path="profile" element={<DashboardProfile />} />
                  <Route path="progress" element={<div>Progress Page</div>} />
                </Routes>
              </DashboardLayout>
            </PrivateRoute>
          } />

          <Route path="/profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } />
          
          <Route path="/admin" element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          } />

          {/* Language Course Pages */}
          <Route path="/ielts" element={
            <PrivateRoute>
              <IeltsPage />
            </PrivateRoute>
          }>
            <Route path="chapter1" element={
              <PrivateRoute>
                <IELTSChapter1 />
              </PrivateRoute>
            } />
            <Route path="chapter2" element={
              <PrivateRoute>
                <IELTSChapter2 />
              </PrivateRoute>
            } />
            <Route path="chapter3" element={
              <PrivateRoute>
                <IELTSChapter3 />
              </PrivateRoute>
            } />
            <Route path="chapter4" element={
              <PrivateRoute>
                <IELTSChapter4 />
              </PrivateRoute>
            } />
            <Route path="chapter5" element={
              <PrivateRoute>
                <IELTSChapter5 />
              </PrivateRoute>
            } />
            <Route path="chapter6" element={
              <PrivateRoute>
                <IELTSChapter6 />
              </PrivateRoute>
            } />
            <Route path="chapter7" element={
              <PrivateRoute>
                <IELTSChapter7 />
              </PrivateRoute>
            } />
            <Route path="chapter8" element={
              <PrivateRoute>
                <IELTSChapter8 />
              </PrivateRoute>
            } />
            <Route path="chapter9" element={
              <PrivateRoute>
                <IELTSChapter9 />
              </PrivateRoute>
            } />
            <Route path="chapter10" element={
              <PrivateRoute>
                <IELTSChapter10 />
              </PrivateRoute>
            } />
          </Route>
          
          <Route path="/german" element={
            <PrivateRoute>
              <GermanPage />
            </PrivateRoute>
          }>
            <Route path="chapter1" element={
              <PrivateRoute>
                <GermanChapter1 />
              </PrivateRoute>
            } />
            <Route path="chapter2" element={
              <PrivateRoute>
                <GermanChapter2 />
              </PrivateRoute>
            } />
            <Route path="chapter3" element={
              <PrivateRoute>
                <GermanChapter3 />
              </PrivateRoute>
            } />
            <Route path="chapter4" element={
              <PrivateRoute>
                <GermanChapter4 />
              </PrivateRoute>
            } />
            <Route path="chapter5" element={
              <PrivateRoute>
                <GermanChapter5 />
              </PrivateRoute>
            } />
            <Route path="chapter6" element={
              <PrivateRoute>
                <GermanChapter6 />
              </PrivateRoute>
            } />
            <Route path="chapter7" element={
              <PrivateRoute>
                <GermanChapter7 />
              </PrivateRoute>
            } />
            <Route path="chapter8" element={
              <PrivateRoute>
                <GermanChapter8 />
              </PrivateRoute>
            } />
            <Route path="chapter9" element={
              <PrivateRoute>
                <GermanChapter9 />
              </PrivateRoute>
            } />
            <Route path="chapter10" element={
              <PrivateRoute>
                <GermanChapter10 />
              </PrivateRoute>
            } />
          </Route>
          
          <Route path="/chinese" element={
            <PrivateRoute>
              <ChinesePage />
            </PrivateRoute>
          }>
            <Route path="chapter1" element={
              <PrivateRoute>
                <Chapter1 />
              </PrivateRoute>
            } />
            <Route path="chapter2" element={
              <PrivateRoute>
                <Chapter2 />
              </PrivateRoute>
            } />
            <Route path="chapter3" element={
              <PrivateRoute>
                <Chapter3 />
              </PrivateRoute>
            } />
            <Route path="chapter4" element={
              <PrivateRoute>
                <Chapter4 />
              </PrivateRoute>
            } />
            <Route path="chapter5" element={
              <PrivateRoute>
                <Chapter5 />
              </PrivateRoute>
            } />
            <Route path="chapter6" element={
              <PrivateRoute>
                <Chapter6 />
              </PrivateRoute>
            } />
            <Route path="chapter7" element={
              <PrivateRoute>
                <Chapter7 />
              </PrivateRoute>
            } />
            <Route path="chapter8" element={
              <PrivateRoute>
                <Chapter8 />
              </PrivateRoute>
            } />
            <Route path="chapter9" element={
              <PrivateRoute>
                <Chapter9 />
              </PrivateRoute>
            } />
            <Route path="chapter10" element={
              <PrivateRoute>
                <Chapter10 />
              </PrivateRoute>
            } />
          </Route>
          
          {/* Practice Tests Routes */}
          <Route path="/practice-tests" element={
            <PrivateRoute>
              <PracticeTestSelect />
            </PrivateRoute>
          }>
            <Route path="ielts/listening" element={
              <PrivateRoute>
                <IELTSListeningTest />
              </PrivateRoute>
            } />
            <Route path="ielts/reading" element={
              <PrivateRoute>
                <IELTSReadingTest />
              </PrivateRoute>
            } />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
