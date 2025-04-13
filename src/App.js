import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<HeroSection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />
          
          {/* Language Course Pages */}
          <Route path="/ielts" element={<IeltsPage />}>
            <Route path="chapter1" element={<IELTSChapter1 />} />
            <Route path="chapter2" element={<IELTSChapter2 />} />
            <Route path="chapter3" element={<IELTSChapter3 />} />
            <Route path="chapter4" element={<IELTSChapter4 />} />
            <Route path="chapter5" element={<IELTSChapter5 />} />
            <Route path="chapter6" element={<IELTSChapter6 />} />
            <Route path="chapter7" element={<IELTSChapter7 />} />
            <Route path="chapter8" element={<IELTSChapter8 />} />
            <Route path="chapter9" element={<IELTSChapter9 />} />
            <Route path="chapter10" element={<IELTSChapter10 />} />
          </Route>
          
          {/* German Course Routes */}
          <Route path="/german" element={<GermanPage />}>
            <Route path="chapter1" element={<GermanChapter1 />} />
            <Route path="chapter2" element={<GermanChapter2 />} />
            <Route path="chapter3" element={<GermanChapter3 />} />
            <Route path="chapter4" element={<GermanChapter4 />} />
            <Route path="chapter5" element={<GermanChapter5 />} />
            <Route path="chapter6" element={<GermanChapter6 />} />
            <Route path="chapter7" element={<GermanChapter7 />} />
            <Route path="chapter8" element={<GermanChapter8 />} />
            <Route path="chapter9" element={<GermanChapter9 />} />
            <Route path="chapter10" element={<GermanChapter10 />} />
          </Route>
          
          {/* Chinese Course Routes */}
          <Route path="/chinese" element={<ChinesePage />}>
            <Route path="chapter1" element={<Chapter1 />} />
            <Route path="chapter2" element={<Chapter2 />} />
            <Route path="chapter3" element={<Chapter3 />} />
            <Route path="chapter4" element={<Chapter4 />} />
            <Route path="chapter5" element={<Chapter5 />} />
            <Route path="chapter6" element={<Chapter6 />} />
            <Route path="chapter7" element={<Chapter7 />} />
            <Route path="chapter8" element={<Chapter8 />} />
            <Route path="chapter9" element={<Chapter9 />} />
            <Route path="chapter10" element={<Chapter10 />} />
          </Route>
          
          {/* Practice Tests Routes */}
          <Route path="/practice-tests" element={<PracticeTestSelect />}>
            <Route path="ielts/listening" element={<IELTSListeningTest />} />
            <Route path="ielts/reading" element={<IELTSReadingTest />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
