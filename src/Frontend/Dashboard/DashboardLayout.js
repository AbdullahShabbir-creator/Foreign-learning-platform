import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './DashboardLayout.css';
import MyCourses from './MyCourses';
import Playlists from './Playlists';
import InstructorProfile from './InstructorProfile';
import UploadCourse from './UploadCourse';
import Progress from './Progress';
import UserVideos from './UserVideos';

const DashboardLayout = ({ children }) => {
  const { logout, user } = useAuth();
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Determine if user is an instructor based on role
  const isUser = user && user.role === 'user';
  const isInstructor = user && user.role === 'instructor';

  // Set default active section based on user role
  const defaultSection = isUser ? 'profile' : 'mycourses';
  const [activeSection, setActiveSection] = React.useState(defaultSection);

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
            {isUser && (
              <li className={activeSection === 'progress' ? 'active' : ''} onClick={() => setActiveSection('progress')}>
                <span className="nav-link"><i className="bi bi-graph-up me-2"></i>Progress</span>
              </li>
            )}
            {isUser && (
              <li className={activeSection === 'videos' ? 'active' : ''} onClick={() => setActiveSection('videos')}>
                <span className="nav-link"><i className="bi bi-camera-video me-2"></i>Videos</span>
              </li>
            )}
            {isInstructor && (
              <li className={activeSection === 'mycourses' ? 'active' : ''} onClick={() => setActiveSection('mycourses')}>
                <span className="nav-link"><i className="bi bi-collection-play me-2"></i>My Courses</span>
              </li>
            )}
            {isInstructor && (
              <li className={activeSection === 'uploadcourse' ? 'active' : ''} onClick={() => setActiveSection('uploadcourse')}>
                <span className="nav-link"><i className="bi bi-upload me-2"></i>Upload Course</span>
              </li>
            )}
            {isInstructor && (
              <li className={activeSection === 'playlists' ? 'active' : ''} onClick={() => setActiveSection('playlists')}>
                <span className="nav-link">
                  <i className="bi bi-play-circle me-1"></i>
                  Playlists
                </span>
              </li>
            )}
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
        {isUser && activeSection === 'progress' && (
          <Progress />
        )}
        {isUser && activeSection === 'videos' && <UserVideos />}
        {isInstructor && activeSection === 'mycourses' && <MyCourses showPlaylists={true} />}
        {isInstructor && activeSection === 'uploadcourse' && <UploadCourse />}
        {isInstructor && activeSection === 'playlists' && <Playlists />}
      </main>
    </div>
  );
};

export default DashboardLayout;
