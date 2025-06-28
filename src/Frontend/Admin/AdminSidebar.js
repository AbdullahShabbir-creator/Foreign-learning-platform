import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const AdminSidebar = () => {
  const { logout } = useAuth();
  const location = useLocation();

  return (
    <aside className="dashboard-sidebar">
      <div className="sidebar-header">
        <h4>Admin Panel</h4>  
      </div>
      <nav className="sidebar-nav">
        <ul>
          
          <li className={location.pathname === '/admin/pdfs' ? 'active' : ''}>
            <Link to="/admin/pdfs" className="nav-link">
              <i className="bi bi-file-earmark-pdf me-2"></i> PDFs
            </Link>
          </li>
          <li className={location.pathname === '/admin/videos' ? 'active' : ''}>
            <Link to="/admin/videos" className="nav-link">
              <i className="bi bi-camera-video me-2"></i> Videos
            </Link>
          </li>
          <li className={location.pathname === '/admin/reports' ? 'active' : ''}>
            <Link to="/admin/reports" className="nav-link">
              <i className="bi bi-bar-chart me-2"></i> Reports
            </Link>
          </li>
          <li className={location.pathname === '/admin/playlist' ? 'active' : ''}>
            <Link to="/admin/playlist" className="nav-link">
              <i className="bi bi-people me-2"></i> Playlist
            </Link>
          </li>
          <li className={location.pathname === '/admin/feedbacks' ? 'active' : ''}>
            <Link to="/admin/feedbacks" className="nav-link">
              <i className="bi bi-people me-2"></i> Feedback
            </Link>
          </li>
          <li className={location.pathname === '/admin/dashboard' ? 'active' : ''}>
            <Link to="/admin/dashboard" className="nav-link">
              <i className="bi bi-speedometer2 me-2"></i> Dashboard
            </Link>
          </li>
          <li>
            <button className="nav-link logout-btn" onClick={logout}>
              <i className="bi bi-box-arrow-right me-2"></i> Logout
            </button>
          </li>
          
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
