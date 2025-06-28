import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './AdminLayout.css';
import AdminSidebar from './AdminSidebar';
import AdminDashboard from './AdminDashboard';
import AdminVideoReports from './AdminReport';
import AdminPDFContent from './AdminContent';
import AdminCourses from './AdminCourses';
import AdminAllPlaylists from './AdminPlaylist';
import AdminAllFeedbacks from './AdminFeedback';

const AdminDashboardLayout = () => {
  return (
    <div className="dashboard-container">
      <AdminSidebar />
      <main className="dashboard-content">
        <Routes>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="pdfs" element={<AdminPDFContent />} />
          <Route path="videos" element={<AdminCourses />} />
          <Route path="reports" element={<AdminVideoReports />} />
          <Route path="playlist" element={<AdminAllPlaylists />} />
          <Route path="feedbacks" element={<AdminAllFeedbacks />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboardLayout;
