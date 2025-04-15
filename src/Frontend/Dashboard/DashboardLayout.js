import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './DashboardLayout.css';

const DashboardLayout = ({ children }) => {
  const { logout, user } = useAuth();
  const location = useLocation();
  const currentPath = location.pathname;
  
  console.log("User in DashboardLayout:", user); // Debug log

  // Force display all menu items for debugging
  const menuItems = [
    {
      path: '/dashboard/profile',
      icon: 'bi-person',
      label: 'Profile'
    },
    {
      path: '/dashboard/progress',
      icon: 'bi-graph-up',
      label: 'Progress'
    },
    {
      path: '/dashboard/settings',
      icon: 'bi-gear',
      label: 'Settings'
    },
    // Temporarily show for all users for debugging
    {
      path: '/dashboard/upload-course',
      icon: 'bi-upload',
      label: 'Upload Course'
    }
  ];

  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <h4>Dashboard</h4>
        </div>
        <nav className="sidebar-nav">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className={currentPath === item.path ? 'active' : ''}>
                <Link to={item.path} className="nav-link">
                  <i className={`bi ${item.icon} me-2`}></i>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button 
                className="nav-link logout-btn"
                onClick={logout}
              >
                <i className="bi bi-box-arrow-right me-2"></i>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="dashboard-content">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
