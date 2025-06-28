import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';  // adjust if path differs
import './Profile.css';

const StudentProfile = () => {
  const { user, fetchProfile } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    mobile: user?.mobile || "",
    address: user?.address || "",
    about: user?.about || ""
  });

  const [editing, setEditing] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Sync form when user updates
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

    if (!form.name || !form.mobile || !form.address) {
      setError("Name, mobile, and address are required.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/api/student/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
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
        throw new Error(errData.message || 'Failed to update profile');
      }

      await res.json();
      await fetchProfile();  // Refresh context + localStorage

      setSuccess('Profile updated successfully!');
      setEditing(false);
    } catch (err) {
      setError(err.message);
    }
  };

  if (!user) {
    return (
      <div className="profile-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className='out'>
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
         
          <div className="profile-info">
            {editing ? (
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            ) : (
              <h2>{user.name}</h2>
            )}
            <p className="profile-email">{user.email}</p>
            <p className="profile-role">
              {user.role === 'admin' ? 'Administrator' : user.role === 'instructor' ? 'Instructor' : 'Student'}
            </p>
          </div>
        </div>

        <div className="profile-content">
          {editing && (
            <>
              <div className="profile-row">
                <label>Mobile:</label>
                <input
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="profile-row">
                <label>Address:</label>
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="profile-row">
                <label>About:</label>
                <textarea
                  name="about"
                  value={form.about}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

        

          {error && <div className="profile-error">{error}</div>}
          {success && <div className="profile-success">{success}</div>}

          <div className="profile-actions">
            {editing ? (
              <button className="btn btn-primary" onClick={handleSubmit}>
                Save
              </button>
            ) : (
              <button className="btn btn-primary" onClick={() => setEditing(true)}>
                Edit Profile
              </button>
            )}
            <button
              className="btn btn-secondary"
              onClick={() => {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                navigate('/login');
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default StudentProfile;
