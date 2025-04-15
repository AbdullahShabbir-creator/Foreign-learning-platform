import React, { useState, useEffect } from "react";
import "./InstructorProfile.css";

const InstructorProfile = ({ user, onProfileComplete }) => {
  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    mobile: "",
    address: "",
    about: ""
  });
  const [editing, setEditing] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    // TODO: Fetch instructor profile from backend if exists
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!form.name || !form.email || !form.mobile || !form.address) {
      setError("All fields are required.");
      return;
    }
    // TODO: Save profile to backend
    setSuccess("Profile saved successfully!");
    setEditing(false);
    if (onProfileComplete) onProfileComplete();
  };

  return (
    <div className="instructor-profile-card">
      <h2 className="profile-title">Instructor Profile</h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="profile-row">
          <label>Name:</label>
          <input name="name" value={form.name} onChange={handleChange} disabled={!editing} required />
        </div>
        <div className="profile-row">
          <label>Email:</label>
          <input name="email" value={form.email} onChange={handleChange} disabled readOnly />
        </div>
        <div className="profile-row">
          <label>Mobile:</label>
          <input name="mobile" value={form.mobile} onChange={handleChange} disabled={!editing} required />
        </div>
        <div className="profile-row">
          <label>Address:</label>
          <input name="address" value={form.address} onChange={handleChange} disabled={!editing} required />
        </div>
        <div className="profile-row">
          <label>About:</label>
          <textarea name="about" value={form.about} onChange={handleChange} disabled={!editing} />
        </div>
        {error && <div className="profile-error">{error}</div>}
        {success && <div className="profile-success">{success}</div>}
        {editing ? (
          <button className="profile-save-btn" type="submit">Save Profile</button>
        ) : (
          <button className="profile-edit-btn" type="button" onClick={() => setEditing(true)}>Edit</button>
        )}
      </form>
    </div>
  );
};

export default InstructorProfile;
