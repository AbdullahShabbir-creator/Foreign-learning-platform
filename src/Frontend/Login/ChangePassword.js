import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('');

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      // TODO: Implement actual API call to change password
      // For now, we'll just show a success message
      setMessage('Password changed successfully!');
      setTimeout(() => {
        navigate('/profile'); // Redirect to user's profile page
      }, 2000);
    } catch (err) {
      setError('Failed to change password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 border-0 rounded-3" style={{ maxWidth: "400px", width: "100%" }}>
        <button
          className="btn btn-close position-absolute top-0 end-0 m-3"
          onClick={() => window.history.back()}
        />
        
        <div className="text-center mb-4">
          <h1 className="h3 mb-3 fw-normal">Change Password</h1>
          <p className="text-muted">Enter your current and new password to update your account.</p>
        </div>

        {message && (
          <div className="alert alert-success mb-3">{message}</div>
        )}
        {error && (
          <div className="alert alert-danger mb-3">{error}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="currentPassword" className="form-label">Current Password</label>
            <input
              type="password"
              className="form-control"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              disabled={isLoading}
              placeholder="Enter current password"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">New Password</label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              minLength={6}
              disabled={isLoading}
              placeholder="Enter new password"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={6}
              disabled={isLoading}
              placeholder="Confirm new password"
            />
          </div>

          <button
            type="submit"
            className="w-100 btn btn-primary mb-3"
            disabled={isLoading || newPassword !== confirmPassword}
          >
            {isLoading ? 'Updating...' : 'Change Password'}
          </button>

          <div className="text-center">
            <Link to="/profile" className="text-decoration-none">Back to Profile</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
