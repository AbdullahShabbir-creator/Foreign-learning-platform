import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
      const success = await login(formData);
      if (success) {
        // The AuthContext will handle the redirect based on intended path
        return;
      }
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow-lg p-4 border-0 rounded-3"
        style={{ maxWidth: "400px", width: "100%", marginTop: "20px" }}
      >
        <button
          className="btn btn-link position-absolute top-0 end-0 m-3"
          style={{ fontSize: "20px", color: "#333" }}
          onClick={handleCancel}
        >
          <i className="fas fa-times-circle"></i>
        </button>

        <h2 className="text-center mb-4 text-primary fw-bold">Login</h2>
        {error && <div className="alert alert-danger text-center">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control rounded-2"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="form-control rounded-2"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary rounded-2">
              <i className="bi bi-box-arrow-in-right me-1"></i> Login
            </button>
            <Link to="/signup" className="btn btn-outline-primary rounded-2">
              <i className="bi bi-person-plus me-1"></i> Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
