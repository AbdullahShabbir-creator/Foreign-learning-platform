import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Frontend/Navbar/Navbar';
import { publicRoutes } from './routes/PublicRoutes';
//import { protectedRoutes } from './routes/ProtectedRoutes';
import { dashboardRoutes } from './routes/DashboardRoutes';
import { ieltsRoutes } from './routes/IlertRoutes';
import { germanRoutes } from './routes/GermanRoutes';
import { chineseRoutes } from './routes/ChineseRoutes';
import { practiceTestRoutes } from './routes/PracticeTestRoutes';
import { adminRoutes } from './routes/AdminRoutes';
import UploadContent from './Frontend/Dashboard/UploadContent';
import ResultsPage from './Frontend/Results/ResultsPage';

const AppContent = () => {
  const location = useLocation();

  // Check if the current path starts with /admin or /dashboard
  const hideNavbar = location.pathname.startsWith('/admin') || location.pathname.startsWith('/dashboard');

  return (
    <div className="app">
      {!hideNavbar && <Navbar />}
      <Routes>
        {publicRoutes}
       {//} {protectedRoutes}
}
        {ieltsRoutes}
        {germanRoutes}
        {chineseRoutes}
        {adminRoutes}
        {practiceTestRoutes}
        {dashboardRoutes}
        <Route path="/upload-content" element={<UploadContent />} />
        <Route path="/results/:testType" element={<ResultsPage />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
