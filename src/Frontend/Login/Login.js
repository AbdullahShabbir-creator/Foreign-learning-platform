import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        alert("Login Successful!");
        navigate("/"); // Redirect to dashboard after login
      } else {
        setError(data.message || "Invalid email or password");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  // Handle Cancel (Navigate to Home or another route)
  const handleCancel = () => {
    navigate("/"); // Redirect to home or the desired page
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow-lg p-4 border-0 rounded-3"
        style={{ maxWidth: "400px", width: "100%", marginTop: "20px" }}
      >
        {/* Cancel Icon */}
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
          <button
            type="submit"
            className="btn btn-primary w-100 py-2 fw-bold rounded-2 shadow-sm"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-3">
          Don't have an account?{" "}
          <a href="/signup" className="text-decoration-none text-primary fw-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
