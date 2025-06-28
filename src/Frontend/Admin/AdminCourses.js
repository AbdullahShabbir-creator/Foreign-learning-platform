import React, { useEffect, useState } from "react";
import './AdminCourses.css';

const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/courses");
      const data = await res.json();
      console.log(data)
      if (res.ok) {
        setCourses(data);
      } else {
        setError(data.message || "Failed to fetch courses");
      }
    } catch (err) {
      console.error("Error fetching courses:", err);
      setError("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenVideo = (videoUrl) => {
    const url = videoUrl.startsWith("/uploads/")
      ? `http://localhost:5000${videoUrl}`
      : videoUrl;
    window.open(url, "_blank");
  };

  const handleDelete = async (courseId) => {
    if (!window.confirm("Are you sure you want to delete this course? This action cannot be undone.")) {
      return;
    }

    try {
      setDeletingId(courseId);
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/api/courses/${courseId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      const data = await res.json();
      if (res.ok) {
        setCourses(courses.filter(c => c._id !== courseId));
        showNotification("Course deleted successfully!", "success");
      } else {
        showNotification(data.message || "Failed to delete course", "error");
      }
    } catch (err) {
      console.error("Delete error:", err);
      showNotification("Server error while deleting.", "error");
    } finally {
      setDeletingId(null);
    }
  };

  const showNotification = (message, type) => {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-icon">${type === 'success' ? '✅' : '❌'}</span>
        <span class="notification-message">${message}</span>
      </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => document.body.removeChild(notification), 300);
    }, 4000);
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !filterCategory || 
                           (course.language && course.language.toLowerCase() === filterCategory.toLowerCase()) ||
                           (course.category && course.category.toLowerCase() === filterCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const uniqueCategories = [...new Set(courses.map(course => 
    course.language || course.category || 'Other'
  ).filter(Boolean))];

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown date';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="admin-courses-container">
      {/* Header Section */}
      <div className="admin-header">
        <div className="admin-header-content">
          <div className="header-left">
            <div className="header-icon">
              <div className="icon-wrapper">
                <span className="icon">🎓</span>
              </div>
            </div>
            <div className="header-text">
              <h1 className="page-title">Course Management</h1>
              <p className="page-subtitle">Manage and oversee all courses in your learning platform</p>
            </div>
          </div>
          <div className="header-stats">
            <div className="stat-card">
              <div className="stat-icon">📚</div>
              <div className="stat-content">
                <div className="stat-number">{courses.length}</div>
                <div className="stat-label">Total Courses</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🏷️</div>
              <div className="stat-content">
                <div className="stat-number">{uniqueCategories.length}</div>
                <div className="stat-label">Categories</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-content">
                <div className="stat-number">{filteredCourses.length}</div>
                <div className="stat-label">Filtered Results</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="admin-content">
        {/* Controls Section */}
        <div className="controls-section">
          <div className="search-filters">
            <div className="search-container">
              <div className="search-input-wrapper">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Search courses by title or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                {searchTerm && (
                  <button 
                    className="clear-search"
                    onClick={() => setSearchTerm("")}
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
            
            <div className="filter-container">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="filter-select"
              >
                <option value="">All Categories</option>
                {uniqueCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="view-controls">
            <div className="view-toggle">
              <button
                className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                title="Grid View"
              >
                ⊞
              </button>
              <button
                className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                title="List View"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="loading-container">
            <div className="loading-animation">
              <div className="loading-spinner"></div>
              <div className="loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <p className="loading-text">Loading your courses...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="error-container">
            <div className="error-content">
              <div className="error-icon">⚠️</div>
              <h3 className="error-title">Something went wrong</h3>
              <p className="error-message">{error}</p>
              <button className="retry-button" onClick={fetchCourses}>
                <span className="retry-icon">🔄</span>
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredCourses.length === 0 && (
          <div className="empty-container">
            <div className="empty-content">
              <div className="empty-icon">
                {searchTerm || filterCategory ? '🔍' : '📚'}
              </div>
              <h3 className="empty-title">
                {searchTerm || filterCategory ? 'No matching courses found' : 'No courses available'}
              </h3>
              <p className="empty-message">
                {searchTerm || filterCategory 
                  ? 'Try adjusting your search criteria or filters'
                  : 'Start by having instructors upload their first course'
                }
              </p>
              {(searchTerm || filterCategory) && (
                <button 
                  className="clear-filters-btn"
                  onClick={() => {
                    setSearchTerm("");
                    setFilterCategory("");
                  }}
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>
        )}

        {/* Courses Display */}
        {!loading && !error && filteredCourses.length > 0 && (
          <div className={`courses-container ${viewMode}`}>
            {filteredCourses.map(course => (
              <div key={course._id} className="course-card">
                <div className="course-header">
                  <div className="course-category">
                    {course.language || course.category || 'General'}
                  </div>
                  <div className="course-status">
                    <span className="status-dot active"></span>
                    <span className="status-text">Active</span>
                  </div>
                </div>

                <div className="course-content">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-description">
                    {course.description.length > 150 
                      ? `${course.description.substring(0, 150)}...`
                      : course.description
                    }
                  </p>
                </div>

                <div className="course-metadata">
                  <div className="metadata-item">
                    <span className="metadata-icon">📅</span>
                    <span className="metadata-text">{formatDate(course.createdAt)}</span>
                  </div>
                  <div className="metadata-item">
                    <span className="metadata-icon">👨‍🏫</span>
                    <span className="metadata-text">{course.uploadedBy.name || 'Unknown'}</span>
                  </div>
                  <div className="metadata-item">
                    <span className="metadata-icon">🎥</span>
                    <span className="metadata-text">Video Course</span>
                  </div>
                </div>

                <div className="course-actions">
                  <button
                    className="action-button primary"
                    onClick={() => handleOpenVideo(course.videoUrl)}
                    title="Watch Course Video"
                  >
                    <span className="button-icon">▶️</span>
                    <span className="button-text">Watch Course</span>
                  </button>
                  <button
                    className={`action-button danger ${deletingId === course._id ? 'loading' : ''}`}
                    onClick={() => handleDelete(course._id)}
                    disabled={deletingId === course._id}
                    title="Delete Course"
                  >
                    {deletingId === course._id ? (
                      <>
                        <span className="button-spinner"></span>
                        <span className="button-text">Deleting...</span>
                      </>
                    ) : (
                      <>
                        <span className="button-icon">🗑️</span>
                        <span className="button-text">Delete</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCourses;