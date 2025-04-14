import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('');

    try {
      // TODO: Implement actual API call to send password reset email
      // For now, we'll just show a success message
      setMessage('Password reset email sent successfully! Please check your inbox.');
    } catch (err) {
      setError('Failed to send password reset email. Please try again.');
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
          <h1 className="h3 mb-3 fw-normal">Forgot Password</h1>
          <p className="text-muted">Enter your email address and we'll send you a link to reset your password.</p>
        </div>

        {message && (
          <div className="alert alert-success mb-3">{message}</div>
        )}
        {error && (
          <div className="alert alert-danger mb-3">{error}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              placeholder="name@example.com"
            />
          </div>

          <button
            type="submit"
            className="w-100 btn btn-primary mb-3"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Reset Link'}
          </button>

          <div className="text-center">
            <Link to="/login" className="text-decoration-none">Back to Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
