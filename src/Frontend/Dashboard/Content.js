import React, { useEffect, useState } from "react";
import './UploadCourse.css';

const Content = () => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
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
    fetchContent();
  }, []);

  // Add top padding so content is not hidden behind the navbar
  return (
    <div className="upload-course-container" style={{marginTop: 78, paddingTop: 60, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto'}}>
      <h2 style={{textAlign: 'center', marginBottom: 32}}>PDF Content Library</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && !error && contents.length === 0 && <p>No PDF content found.</p>}
      <div style={{marginTop: 24}}>
        {contents.map((item, idx) => (
          <div key={idx} className="form-group" style={{marginBottom: 32, background: '#f8fafc', borderRadius: 12, padding: 22, boxShadow: '0 2px 14px rgba(0,0,0,0.07)'}}>
            <h4 style={{marginBottom: 8, fontWeight: 600}}><i className="bi bi-file-earmark-pdf me-2 text-danger"></i>{item.title}</h4>
            <p style={{marginBottom: 12, color: '#444', fontSize: 16}}>{item.description}</p>
            {/* Ensure correct PDF URL for both preview and download */}
            <a
              href={item.pdfUrl.startsWith('/uploads/') ? `http://localhost:5000${item.pdfUrl}` : item.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger"
              download
              style={{ marginRight: 12 }}
            >
              <i className="bi bi-file-earmark-arrow-down me-1"></i> Download PDF
            </a>
            <button
              className="btn btn-primary"
              onClick={() => window.open(item.pdfUrl.startsWith('/uploads/') ? `http://localhost:5000${item.pdfUrl}` : item.pdfUrl, '_blank')}
              style={{ marginLeft: 0 }}
            >
              <i className="bi bi-eye me-1"></i> Preview PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
