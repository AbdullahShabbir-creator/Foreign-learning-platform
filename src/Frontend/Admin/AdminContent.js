import React, { useEffect, useState } from "react";
import './AdminContent.css';

const AdminPDFContent = () => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetchPDFs();
  }, []);

  const fetchPDFs = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch("http://localhost:5000/api/content");
      const data = await res.json();
      if (res.ok) {
        setContents(data);
      } else {
        setError(data.message || "Failed to fetch PDF content.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this PDF?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/content/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (res.ok) {
        // Success notification (you can replace with toast)
        const notification = document.createElement('div');
        notification.className = 'success-notification';
        notification.textContent = 'PDF deleted successfully!';
        document.body.appendChild(notification);
        setTimeout(() => document.body.removeChild(notification), 3000);
        
        setContents(prev => prev.filter(c => c._id !== id));
      } else {
        alert(data.message || "Failed to delete PDF.");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("Server error while deleting PDF.");
    }
  };

  // Filter and sort contents
  const filteredAndSortedContents = contents
    .filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const aValue = a[sortBy]?.toLowerCase() || "";
      const bValue = b[sortBy]?.toLowerCase() || "";
      if (sortOrder === "asc") {
        return aValue.localeCompare(bValue);
      }
      return bValue.localeCompare(aValue);
    });

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  return (
    <div className="adminpdf-container">
      {/* Header Section */}
    <div className="adminpdf-header">
  <div className="adminpdf-header-content">
    <div className="adminpdf-header-left">
      <div className="adminpdf-header-icon">
        <div className="adminpdf-icon-wrapper">
          <span className="adminpdf-icon">📚</span>
        </div>
      </div>
      <div className="adminpdf-header-text">
        <h1 className="adminpdf-page-title">PDF Content Management</h1>
        <p className="adminpdf-page-subtitle">
          Manage all PDF materials uploaded by instructors across the platform
        </p>
      </div>
    </div>
    <div className="adminpdf-header-stats">
      <div className="adminpdf-stat-card">
        <div className="adminpdf-stat-icon">📄</div>
        <div className="adminpdf-stat-content">
          <div className="adminpdf-stat-number">{contents.length}</div>
          <div className="adminpdf-stat-label">Total PDFs</div>
        </div>
      </div>
      <div className="adminpdf-stat-card">
        <div className="adminpdf-stat-icon">👨‍🏫</div>
        <div className="adminpdf-stat-content">
          <div className="adminpdf-stat-number">
            {new Set(contents.map(c => c.instructorId)).size}
          </div>
          <div className="adminpdf-stat-label">Instructors</div>
        </div>
      </div>
    </div>
  </div>
</div>



      {/* Search and Filter Section */}
      <div className="adminpdf-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search PDFs by title or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
        
        <div className="sort-container">
          <select 
            value={`${sortBy}-${sortOrder}`}
            onChange={(e) => {
              const [field, order] = e.target.value.split('-');
              setSortBy(field);
              setSortOrder(order);
            }}
            className="sort-select"
          >
            <option value="title-asc">Title A-Z</option>
            <option value="title-desc">Title Z-A</option>
            <option value="description-asc">Description A-Z</option>
            <option value="description-desc">Description Z-A</option>
          </select>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading PDF content...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="error-container">
          <div className="error-icon">⚠️</div>
          <p className="error-message">{error}</p>
          <button onClick={fetchPDFs} className="retry-btn">
            Try Again
          </button>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && filteredAndSortedContents.length === 0 && contents.length > 0 && (
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <h3>No PDFs match your search</h3>
          <p>Try adjusting your search terms</p>
          <button onClick={() => setSearchTerm("")} className="clear-search-btn">
            Clear Search
          </button>
        </div>
      )}

      {!loading && !error && contents.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">📄</div>
          <h3>No PDF content found</h3>
          <p>PDFs uploaded by instructors will appear here</p>
        </div>
      )}

      {/* Content Table */}
      {!loading && !error && filteredAndSortedContents.length > 0 && (
        <div className="table-container">
          <div className="table-wrapper">
            <table className="adminpdf-table">
              <thead>
                <tr>
                  <th onClick={() => handleSort('title')} className="sortable">
                    Title
                    {sortBy === 'title' && (
                      <span className="sort-indicator">
                        {sortOrder === 'asc' ? '↑' : '↓'}
                      </span>
                    )}
                  </th>
                  <th onClick={() => handleSort('description')} className="sortable">
                    Description
                    {sortBy === 'description' && (
                      <span className="sort-indicator">
                        {sortOrder === 'asc' ? '↑' : '↓'}
                      </span>
                    )}
                  </th>
                  <th>Document</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedContents.map((item, index) => (
                  <tr key={item._id} className="table-row" style={{animationDelay: `${index * 0.05}s`}}>
                    <td className="title-cell">
                      <div className="title-content">
                        <span className="pdf-icon">📄</span>
                        <span className="title-text">{item.title}</span>
                      </div>
                    </td>
                    <td className="description-cell">
                      <div className="description-text">
                        {item.description || "No description available"}
                      </div>
                    </td>
                    <td className="pdf-cell">
                      <a
                        href={item.pdfUrl.startsWith("/uploads/")
                          ? `http://localhost:5000${item.pdfUrl}`
                          : item.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-pdf-btn"
                      >
                        <span className="btn-icon">👁️</span>
                        View PDF
                      </a>
                    </td>
                    <td className="actions-cell">
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(item._id)}
                        title="Delete PDF"
                      >
                        <span className="btn-icon">🗑️</span>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPDFContent;