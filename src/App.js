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
import ForgotPassword from './Frontend/Login/ForgotPassword.js';
import ResetPassword from './Frontend/Login/ResetPassword';
import ChangePassword from './Frontend/Login/ChangePassword';
import AdminDashboard from './Frontend/Admin/AdminDashboard';
import Profile from './Frontend/Profile/Profile';
import DashboardLayout from './Frontend/Dashboard/DashboardLayout';
import DashboardProfile from './Frontend/Dashboard/DashboardProfile';
import UploadCourse from './Frontend/Dashboard/UploadCourse';
import UserVideos from './Frontend/Dashboard/UserVideos';
import VideoDetail from './Frontend/Dashboard/VideoDetail';
import UploadContent from './Frontend/Dashboard/UploadContent';
import Content from './Frontend/Dashboard/Content';

// Practice Tests
import PracticeTestSelect from './Frontend/PracticeTests/PracticeTestSelect';
import PracticeTestsIndex from './Frontend/PracticeTests/PracticeTestsIndex.js';
import IELTSListeningTest from './Frontend/PracticeTests/IELTS/ListeningTest';
import IELTSReadingTest from './Frontend/PracticeTests/IELTS/ReadingTest';
import GermanTestsIndex from './Frontend/PracticeTests/GermanTestsIndex.js';
import ChineseTestsIndex from './Frontend/PracticeTests/ChineseTestsIndex.js';
import GermanListeningTest from './Frontend/PracticeTests/GermanListeningTest.js';
import GermanReadingTest from './Frontend/PracticeTests/GermanReadingTest.js';
import GermanWritingTest from './Frontend/PracticeTests/GermanWritingTest.js';
import GermanSpeakingTest from './Frontend/PracticeTests/GermanSpeakingTest.js';
import ChineseReadingTest from './Frontend/PracticeTests/ChineseReadingTest.js';
import ChineseListeningTest from './Frontend/PracticeTests/ChineseListeningTest.js';
import ChineseWritingTest from './Frontend/PracticeTests/ChineseWritingTest.js';
import ChineseSpeakingTest from './Frontend/PracticeTests/ChineseSpeakingTest.js';

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
          <Route path="/videos" element={<UserVideos />} />
          <Route path="/videos/:id" element={<VideoDetail />} />
          <Route path="/content" element={<Content />} />

          {/* Protected Routes */}
          <Route path="/dashboard/*" element={
            <PrivateRoute>
              <DashboardLayout>
                <Routes>
                  <Route path="profile" element={<DashboardProfile />} />
                  <Route path="progress" element={<div>Progress Page</div>} />
                  <Route path="upload-course" element={<UploadCourse />} />
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
          
          {/* Practice Tests Routes - Modernized and Expanded */}
          <Route path="/practice-tests" element={
            <PrivateRoute>
              <PracticeTestsIndex />
            </PrivateRoute>
          } />
          <Route path="/practice-tests/german" element={
            <PrivateRoute>
              <GermanTestsIndex />
            </PrivateRoute>
          } />
          <Route path="/practice-tests/chinese" element={
            <PrivateRoute>
              <ChineseTestsIndex />
            </PrivateRoute>
          } />
          <Route path="/practice-tests/select" element={
            <PrivateRoute>
              <PracticeTestSelect />
            </PrivateRoute>
          } />
          {/* IELTS */}
          <Route path="/practice-tests/ielts/listening" element={<IELTSListeningTest />} />
          <Route path="/practice-tests/ielts/reading" element={<IELTSReadingTest />} />
          {/* German Practice Test Modules */}
          <Route path="/practice-tests/german/listening" element={
            <PrivateRoute>
              <GermanListeningTest />
            </PrivateRoute>
          } />
          <Route path="/practice-tests/german/reading" element={
            <PrivateRoute>
              <GermanReadingTest />
            </PrivateRoute>
          } />
          <Route path="/practice-tests/german/writing" element={
            <PrivateRoute>
              <GermanWritingTest />
            </PrivateRoute>
          } />
          <Route path="/practice-tests/german/speaking" element={
            <PrivateRoute>
              <GermanSpeakingTest />
            </PrivateRoute>
          } />
          {/* Chinese Practice Test Modules */}
          <Route path="/practice-tests/chinese/reading" element={
            <PrivateRoute>
              <ChineseReadingTest />
            </PrivateRoute>
          } />
          <Route path="/practice-tests/chinese/listening" element={
            <PrivateRoute>
              <ChineseListeningTest />
            </PrivateRoute>
          } />
          <Route path="/practice-tests/chinese/writing" element={
            <PrivateRoute>
              <ChineseWritingTest />
            </PrivateRoute>
          } />
          <Route path="/practice-tests/chinese/speaking" element={
            <PrivateRoute>
              <ChineseSpeakingTest />
            </PrivateRoute>
          } />
          <Route path="/upload-content" element={<UploadContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
