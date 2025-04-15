import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      // TODO: Implement actual API call to reset password
      // For now, we'll just show a success message
      setMessage('Password reset successfully! You can now log in with your new password.');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setError('Failed to reset password. Please try again.');
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
          <h1 className="h3 mb-3 fw-normal">Reset Password</h1>
          <p className="text-muted">Please enter your new password.</p>
        </div>

        {message && (
          <div className="alert alert-success mb-3">{message}</div>
        )}
        {error && (
          <div className="alert alert-danger mb-3">{error}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">New Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              disabled={isLoading}
              placeholder="Enter new password"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
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
            disabled={isLoading || password !== confirmPassword}
          >
            {isLoading ? 'Resetting...' : 'Reset Password'}
          </button>

          <div className="text-center">
            <Link to="/login" className="text-decoration-none">Back to Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
