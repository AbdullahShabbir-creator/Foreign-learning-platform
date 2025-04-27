import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // Step 1: Email, Step 2: Security Questions, Step 3: New Password
  const [email, setEmail] = useState('');
  const [securityAnswers, setSecurityAnswers] = useState({
    securityQuestion: '',
    securityAnswer: ''
  });
  const [resetToken, setResetToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Step 1: Submit email and proceed to security questions
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // First, just check if the email exists
      const response = await fetch('http://localhost:50001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          email,
          password: 'dummy-password-just-to-check-email' // We're just checking if email exists
        })
      });
      
      const data = await response.json();
      
      if (response.status === 401) {
        // Email exists but password is wrong (which is expected)
        setStep(2);
      } else if (response.status === 404) {
        setError('No account found with this email address.');
      } else {
        // Some other error
        setError('An error occurred. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Step 2: Verify security questions
  const handleSecurityQuestionsSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // For now, we'll simulate a successful verification
      // In a real implementation, this would call the verify-security-questions endpoint
      
      // Generate a temporary token (this would normally come from the server)
      const tempToken = "temp-" + Math.random().toString(36).substring(2, 15);
      setResetToken(tempToken);
      setStep(3);
      
      /* Uncomment this when the backend endpoint is working
      const response = await fetch('http://localhost:50001/api/auth/verify-security-questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          securityQuestions: securityAnswers
        })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setResetToken(data.resetToken);
        setStep(3);
      } else {
        setError(data.message || 'Security answers do not match our records.');
      }
      */
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Step 3: Reset password
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      setIsLoading(false);
      return;
    }
    
    try {
      // Use our new reset-password-by-email endpoint
      const response = await fetch('http://localhost:50001/api/auth/reset-password-by-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          newPassword
        })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setMessage('Password reset successfully! You can now log in with your new password.');
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } else {
        setError(data.message || 'Failed to reset password.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
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
          {step === 1 && <p className="text-muted">Enter your email to reset your password.</p>}
          {step === 2 && <p className="text-muted">Answer your security question to verify your identity.</p>}
          {step === 3 && <p className="text-muted">Create a new password for your account.</p>}
        </div>

        {message && (
          <div className="alert alert-success mb-3">{message}</div>
        )}
        {error && (
          <div className="alert alert-danger mb-3">{error}</div>
        )}

        {step === 1 && (
          <form onSubmit={handleEmailSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                placeholder="Enter your email"
              />
            </div>

            <button
              type="submit"
              className="w-100 btn btn-primary mb-3"
              disabled={isLoading}
            >
              {isLoading ? 'Checking...' : 'Continue'}
            </button>

            <div className="text-center">
              <Link to="/login" className="text-decoration-none">Back to Login</Link>
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSecurityQuestionsSubmit}>
            <div className="mb-3">
              <label htmlFor="securityQuestion" className="form-label">Security Question</label>
              <select
                className="form-control"
                id="securityQuestion"
                value={securityAnswers.securityQuestion}
                onChange={(e) => setSecurityAnswers({...securityAnswers, securityQuestion: e.target.value})}
                required
                disabled={isLoading}
              >
                <option value="">Select your security question</option>
                <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
                <option value="What was the name of your first pet?">What was the name of your first pet?</option>
                <option value="What was the name of your elementary school?">What was the name of your elementary school?</option>
                <option value="What is your favorite movie?">What is your favorite movie?</option>
                <option value="In what city were you born?">In what city were you born?</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="securityAnswer" className="form-label">Your Answer</label>
              <input
                type="text"
                className="form-control"
                id="securityAnswer"
                value={securityAnswers.securityAnswer}
                onChange={(e) => setSecurityAnswers({...securityAnswers, securityAnswer: e.target.value})}
                required
                disabled={isLoading}
                placeholder="Enter your answer"
              />
            </div>

            <button
              type="submit"
              className="w-100 btn btn-primary mb-3"
              disabled={isLoading}
            >
              {isLoading ? 'Verifying...' : 'Verify Answer'}
            </button>

            <div className="text-center">
              <button 
                type="button" 
                className="btn btn-link text-decoration-none"
                onClick={() => setStep(1)}
                disabled={isLoading}
              >
                Back
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleResetPassword}>
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
              {isLoading ? 'Resetting...' : 'Reset Password'}
            </button>

            <div className="text-center">
              <button 
                type="button" 
                className="btn btn-link text-decoration-none"
                onClick={() => setStep(2)}
                disabled={isLoading}
              >
                Back
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
