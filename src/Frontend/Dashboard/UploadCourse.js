import React, { useState } from "react";

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
    <div className="dashboard-container">
      <h2>Upload a New Course</h2>
      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <form className="dashboard-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Course Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <select
          name="language"
          value={form.language}
          onChange={handleChange}
          required
        >
          <option value="IELTS">IELTS</option>
          <option value="German">German</option>
          <option value="Chinese">Chinese</option>
        </select>
        <input
          type="file"
          id="video-input"
          name="video"
          accept="video/*"
          onChange={handleChange}
          required
        />
        <button type="submit">Upload Course</button>
      </form>
    </div>
  );
};

export default UploadCourse;
