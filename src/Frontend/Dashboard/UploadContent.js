import React, { useState, useEffect } from "react";
import './UploadCourse.css';

const UploadContent = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    pdf: null,
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/content");
      const data = await res.json();
      if (res.ok) {
        setContents(data);
      } else {
        setError(data.message || "Failed to fetch content");
      }
    } catch {
      setError("Server error. Try again later.");
    }
    setLoading(false);
  };

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
    if (form.pdf) formData.append("pdf", form.pdf);

    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/content", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Content uploaded successfully!");
        setForm({ title: "", description: "", pdf: null });
        document.getElementById("pdf-input-content").value = "";
        fetchContent();
      } else {
        setError(data.message || "Upload failed");
      }
    } catch (err) {
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="upload-course-container">
      <h2>Upload PDF Content</h2>
      <form className="upload-course-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title<span style={{color:'red'}}>*</span></label>
          <input type="text" name="title" value={form.title} onChange={handleChange} required placeholder="Content Title" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} placeholder="Content Description" rows={3} />
        </div>
        <div className="form-group">
          <label>PDF File<span style={{color:'red'}}>*</span></label>
          <input id="pdf-input-content" type="file" name="pdf" accept="application/pdf" onChange={handleChange} required />
        </div>
        <button className="upload-btn" type="submit" >Upload Content</button>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </form>

      <h2 style={{marginTop: 40}}>Uploaded PDF Content</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && !error && contents.length === 0 && <p>No PDF content found.</p>}
      <div style={{marginTop: 24}}>
        {contents.map((item, idx) => (
          <div key={idx} className="form-group" style={{marginBottom: 32, background: '#f8fafc', borderRadius: 8, padding: 18, boxShadow: '0 1px 6px rgba(0,0,0,0.04)'}}>
            <h4 style={{marginBottom: 8}}><i className="bi bi-file-earmark-pdf me-2 text-danger"></i>{item.title}</h4>
            <p style={{marginBottom: 10, color: '#444'}}>{item.description}</p>
            <a href={`http://localhost:5000${item.pdfUrl}`} target="_blank" rel="noopener noreferrer" className="btn btn-danger">
              <i className="bi bi-file-earmark-arrow-down me-1"></i> View/Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadContent;
