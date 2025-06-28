import React, { useEffect, useState } from "react";
import "./AdminFeedback.css";

const AdminAllFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterRating, setFilterRating] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    fetchAllFeedbacks();
  }, []);

  const fetchAllFeedbacks = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/feedback", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (res.ok) {
        setFeedbacks(data);
      } else {
        showNotification(data.message || "Failed to fetch feedbacks", 'error');
      }
    } catch (err) {
      console.error("Error fetching feedbacks:", err);
      showNotification("Error fetching feedbacks", 'error');
    } finally {
      setLoading(false);
    }
  };

  const showNotification = (message, type) => {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  };

  const getRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">⭐</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">⭐</span>);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }
    
    return stars;
  };

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return 'rating-excellent';
    if (rating >= 4) return 'rating-good';
    if (rating >= 3) return 'rating-average';
    if (rating >= 2) return 'rating-poor';
    return 'rating-terrible';
  };

  const getAverageRating = () => {
    if (feedbacks.length === 0) return 0;
    const sum = feedbacks.reduce((acc, fb) => acc + fb.rating, 0);
    return (sum / feedbacks.length).toFixed(1);
  };

  const getRatingDistribution = () => {
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    feedbacks.forEach(fb => {
      distribution[Math.floor(fb.rating)]++;
    });
    return distribution;
  };

  const filteredAndSortedFeedbacks = feedbacks
    .filter(fb => {
      const matchesRating = filterRating === 'all' || Math.floor(fb.rating) === parseInt(filterRating);
      const matchesSearch = 
        fb.course?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        fb.student?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        fb.student?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        fb.comment?.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesRating && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'oldest':
          return new Date(a.createdAt) - new Date(b.createdAt);
        case 'highest':
          return b.rating - a.rating;
        case 'lowest':
          return a.rating - b.rating;
        default:
          return 0;
      }
    });

  if (loading) {
    return (
      <div className="admin-feedbacks-root">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading feedbacks...</p>
        </div>
      </div>
    );
  }

  const ratingDistribution = getRatingDistribution();
  const averageRating = getAverageRating();

  return (
    <div className="admin-feedbacks-root">
      <div className="admin-feedbacks-header">
        <div className="header-content">
          <h1 className="admin-feedbacks-title">
            <span className="title-icon">💬</span>
            Course Feedbacks
          </h1>
          <p className="admin-feedbacks-subtitle">
            Monitor and analyze student feedback across all courses
          </p>
        </div>

        <div className="feedback-stats">
          <div className="stat-card primary">
            <div className="stat-number">{feedbacks.length}</div>
            <div className="stat-label">Total Feedbacks</div>
          </div>
          <div className="stat-card secondary">
            <div className="stat-number">{averageRating}</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-card accent">
            <div className="stat-number">{ratingDistribution[5]}</div>
            <div className="stat-label">5-Star Reviews</div>
          </div>
        </div>
      </div>

      <div className="rating-overview">
        <h3>Rating Distribution</h3>
        <div className="rating-bars">
          {[5, 4, 3, 2, 1].map(rating => (
            <div key={rating} className="rating-bar-container">
              <span className="rating-label">{rating}⭐</span>
              <div className="rating-bar">
                <div 
                  className="rating-fill"
                  style={{ 
                    width: `${feedbacks.length > 0 ? (ratingDistribution[rating] / feedbacks.length) * 100 : 0}%` 
                  }}
                ></div>
              </div>
              <span className="rating-count">{ratingDistribution[rating]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="admin-feedbacks-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by course, student, or comment..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="filter-container">
          <select
            value={filterRating}
            onChange={(e) => setFilterRating(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
        </div>

        <div className="sort-container">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
          </select>
        </div>
      </div>

      {filteredAndSortedFeedbacks.length === 0 ? (
        <div className="admin-feedbacks-empty">
          <div className="empty-icon">📝</div>
          <h3>No feedbacks found</h3>
          <p>No feedbacks match your current filters.</p>
        </div>
      ) : (
        <div className="feedbacks-grid">
          {filteredAndSortedFeedbacks.map((fb, index) => (
            <div 
              key={fb._id} 
              className="feedback-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feedback-header">
                <div className="course-info">
                  <h4 className="course-title">{fb.course ? fb.course.title : "Unknown Course"}</h4>
                  <div className="rating-section">
                    <div className="stars-container">
                      {getRatingStars(fb.rating)}
                    </div>
                    <span className={`rating-value ${getRatingColor(fb.rating)}`}>
                      {fb.rating}
                    </span>
                  </div>
                </div>
              </div>

              <div className="feedback-content">
                <div className="comment-section">
                  <p className="comment-text">{fb.comment}</p>
                </div>
              </div>

              <div className="feedback-footer">
                <div className="student-info">
                  <div className="student-avatar">
                    {fb.student?.name?.charAt(0) || 'U'}
                  </div>
                  <div className="student-details">
                    <div className="student-name">{fb.student ? fb.student.name : "Anonymous"}</div>
                    <div className="student-email">{fb.student ? fb.student.email : "No email"}</div>
                  </div>
                </div>
                {fb.createdAt && (
                  <div className="feedback-date">
                    {new Date(fb.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminAllFeedbacks;