import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './DashboardLayout.css';
import MyCourses from './MyCourses';
import Playlists from './Playlists'; // Import the Playlists component
import InstructorProfile from './InstructorProfile';
import UploadCourse from './UploadCourse';

const DashboardLayout = ({ children }) => {
  const { logout, user } = useAuth();
  const location = useLocation();
  const currentPath = location.pathname;
  
  console.log("User in DashboardLayout:", user); // Debug log

  // Remove duplicate sidebar entries and handle section switching only via activeSection
  const [activeSection, setActiveSection] = React.useState('mycourses');

  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <h4>Dashboard</h4>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className={activeSection === 'profile' ? 'active' : ''} onClick={() => setActiveSection('profile')}>
              <span className="nav-link"><i className="bi bi-person me-2"></i>Profile</span>
            </li>
            <li className={activeSection === 'mycourses' ? 'active' : ''} onClick={() => setActiveSection('mycourses')}>
              <span className="nav-link"><i className="bi bi-collection-play me-2"></i>My Courses</span>
            </li>
            <li className={activeSection === 'uploadcourse' ? 'active' : ''} onClick={() => setActiveSection('uploadcourse')}>
              <span className="nav-link"><i className="bi bi-upload me-2"></i>Upload Course</span>
            </li>
            <li className={activeSection === 'playlists' ? 'active' : ''} onClick={() => setActiveSection('playlists')}>
              <span className="nav-link">
                <i className="bi bi-play-circle me-1"></i>
                Playlists
              </span>
            </li>
            <li>
              <button className="nav-link logout-btn" onClick={logout}>
                <i className="bi bi-box-arrow-right me-2"></i>Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="dashboard-content">
        {activeSection === 'profile' && (
          <InstructorProfile user={user} />
        )}
        {activeSection === 'mycourses' && <MyCourses showPlaylists={true} />}
        {activeSection === 'uploadcourse' && <UploadCourse />}
        {activeSection === 'playlists' && <Playlists />}
      </main>
    </div>
  );
};

export default DashboardLayout;
