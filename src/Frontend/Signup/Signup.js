import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        alert("Signup Successful!");
        navigate("/login"); // Navigate to login page after successful signup
      } else {
        setError(data.message || "Signup failed");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  const handleClose = () => {
    navigate("/"); // Navigate to the homepage (or any other page you want)
  };

  return (
    <div className="d-flex signup justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 border-0 rounded-3 signup"
       style={{ maxWidth: "400px", width: "100%", marginTop: "100px"  }}>
        <button
          className="btn btn-close position-absolute top-0 end-0 m-3"
          onClick={handleClose}
        ></button>
        <h2 className="text-center mb-4 text-primary fw-bold">Create an Account</h2>
        {error && <div className="alert alert-danger text-center">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control rounded-2"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
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
              placeholder="Enter a strong password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2 fw-bold rounded-2 shadow-sm">
            Sign Up
          </button>
        </form>
        <p className="text-center mt-3">
          Already have an account? <a href="/login" className="text-decoration-none text-primary fw-semibold">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
