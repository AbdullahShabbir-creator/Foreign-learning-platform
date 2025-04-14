import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import './DashboardProfile.css';

const DashboardProfile = () => {
  const { user } = useAuth();

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <i className="bi bi-person-circle"></i>
        </div>
        <div className="profile-info">
          <h2>{user?.name}</h2>
          <p className="role">{user?.role}</p>
          <p className="email">{user?.email}</p>
        </div>
      </div>

      <div className="profile-sections">
        <div className="section">
          <h3>Account Information</h3>
          <div className="info-grid">
            <div className="info-item">
              <span className="label">Name:</span>
              <span className="value">{user?.name}</span>
            </div>
            <div className="info-item">
              <span className="label">Email:</span>
              <span className="value">{user?.email}</span>
            </div>
            <div className="info-item">
              <span className="label">Account Type:</span>
              <span className="value">{user?.role}</span>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Learning Progress</h3>
          <div className="progress-grid">
            <div className="progress-item">
              <div className="progress-label">Overall Progress</div>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: '50%' }}></div>
              </div>
              <div className="progress-percentage">50%</div>
            </div>
            <div className="progress-item">
              <div className="progress-label">Courses Completed</div>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: '30%' }}></div>
              </div>
              <div className="progress-percentage">30%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;
