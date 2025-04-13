import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    // Get user profile from backend
    fetch('http://localhost:5000/api/auth/profile', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.user) {
        setUser(data.user);
      } else {
        setError('Failed to load profile');
      }
    })
    .catch(err => {
      setError('Error loading profile');
    });
  }, [navigate]);

  if (!user) {
    return (
      <div className="profile-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <i className="bi bi-person-circle"></i>
          </div>
          <div className="profile-info">
            <h2>{user.name}</h2>
            <p className="profile-email">{user.email}</p>
            <p className="profile-role">{user.role === 'admin' ? 'Administrator' : 'Student'}</p>
          </div>
        </div>

        <div className="profile-content">
          <div className="progress-section">
            <h3>Learning Progress</h3>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '50%' }}></div>
            </div>
            <p className="progress-text">50% Complete</p>
          </div>

          <div className="profile-actions">
            <button className="btn btn-primary">Edit Profile</button>
            <button className="btn btn-secondary" onClick={() => {
              localStorage.removeItem('token');
              navigate('/login');
            }}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
