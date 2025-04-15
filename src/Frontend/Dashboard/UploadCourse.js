import React, { useState } from "react";
import './UploadCourse.css';

const UploadCourse = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    language: "IELTS",
    video: null,
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("language", form.language);
    formData.append("video", form.video);

    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/courses", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Course uploaded successfully!");
        setForm({ title: "", description: "", language: "IELTS", video: null });
        document.getElementById("video-input").value = "";
      } else {
        setError(data.message || "Upload failed");
      }
    } catch (err) {
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="upload-course-container">
      <h2>Upload a New Course</h2>
      <form className="upload-course-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title<span style={{color:'red'}}>*</span></label>
          <input type="text" name="title" value={form.title} onChange={handleChange} required placeholder="Course Title" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} placeholder="Course Description" rows={3} />
        </div>
        <div className="form-group">
          <label>Language<span style={{color:'red'}}>*</span></label>
          <select name="language" value={form.language} onChange={handleChange} required>
            <option value="IELTS">IELTS</option>
            <option value="German">German</option>
            <option value="Chinese">Chinese</option>
          </select>
        </div>
        <div className="form-group">
          <label>Video File<span style={{color:'red'}}>*</span></label>
          <input id="video-input" type="file" name="video" accept="video/*" onChange={handleChange} required />
        </div>
        <button className="upload-btn" type="submit">Upload Course</button>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default UploadCourse;
