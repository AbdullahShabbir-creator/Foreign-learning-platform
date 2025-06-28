import React, { useState, useEffect } from "react";
import "./InstructorProfile.css";
import { useAuth } from "../../contexts/AuthContext"; // Adjust the path as needed

const InstructorProfile = ({ onProfileComplete }) => {
  const { user, fetchProfile } = useAuth();

  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    mobile: user?.mobile || "",
    address: user?.address || "",
    about: user?.about || ""
  });
   console.log(user)
  const [editing, setEditing] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Sync form when user data in context updates
  useEffect(() => {
    setForm({
      name: user?.name || "",
      email: user?.email || "",
      mobile: user?.mobile || "",
      address: user?.address || "",
      about: user?.about || ""
    });
   
  
  }, [user]);

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

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/api/instructors/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          name: form.name,
          mobile: form.mobile,
          address: form.address,
          about: form.about
        })
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to update profile");
      }

      await res.json();

      // Refresh context + localStorage with updated user data
      await fetchProfile();

      setSuccess("Profile saved successfully!");
      setEditing(false);

      if (onProfileComplete) onProfileComplete();

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="instructor-profile-card">
      <h2 className="profile-title">
        {user?.role === "user" ? "User Profile" : "Instructor Profile"}
      </h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="profile-row">
          <label>Name:</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            disabled={!editing}
            required
          />
        </div>
        <div className="profile-row">
          <label>Email:</label>
          <input
            name="email"
            value={form.email}
            disabled
            readOnly
          />
        </div>
        <div className="profile-row">
          <label>Mobile:</label>
          <input
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            disabled={!editing}
            required
          />
        </div>
        <div className="profile-row">
          <label>Address:</label>
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            disabled={!editing}
            required
          />
        </div>
        <div className="profile-row">
          <label>About:</label>
          <textarea
            name="about"
            value={form.about}
            onChange={handleChange}
            disabled={!editing}
          />
        </div>
        {error && <div className="profile-error">{error}</div>}
        {success && <div className="profile-success">{success}</div>}
        {editing ? (
          <button className="profile-save-btn" type="submit">
            Save Profile
          </button>
        ) : (
          <button
            className="profile-edit-btn"
            type="button"
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
        )}
      </form>
    </div>
  );
};

export default InstructorProfile;
