import React, { useEffect, useState } from 'react';
import './AdminReport.css';

const AdminVideoReports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState(null); // React-managed notification

  const fetchReports = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/video-reports');
      const data = await res.json();
      console.log(data);
      setReports(data);
    } catch (err) {
      console.error('Error fetching reports:', err);
    //  showNotification('Failed to load reports.', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this report?')) {
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/api/video-reports/${id}`, {
        method: 'DELETE',
      });

      const data = await res.json();

      if (res.ok) {
        setReports(reports.filter((r) => r._id !== id));
        showNotification('Report deleted successfully.', 'success');
      } else {
        showNotification(data.message || 'Failed to delete report.', 'error');
      }
    } catch (err) {
      console.error('Delete error:', err);
      showNotification('Server error.', 'error');
    }
  };

  const handleChangeStatus = async (id, status) => {
    try {
      const res = await fetch(`http://localhost:5000/api/video-reports/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: status,
        }),
      });

      const data = await res.json();

      if (res.ok) {
       // showNotification('Status updated successfully.', 'success');
        fetchReports();
      } else {
        showNotification(data.message || 'Failed to update status.', 'error');
      }
    } catch (err) {
      console.error('Status update error:', err);
      showNotification('Server error.', 'error');
    }
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 9000);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'status-pending';
      case 'reviewed':
        return 'status-reviewed';
      case 'resolved':
        return 'status-resolved';
      default:
        return 'status-pending';
    }
  };

  const filteredReports = reports.filter((report) => {
    const matchesStatus = filterStatus === 'all' || report.status === filterStatus;
    const matchesSearch =
      report.studentId?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.studentId?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.reason?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  if (loading) {
    return (
      <div className="adminreports-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading reports...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="adminreports-container">
      {notification && (
        <div className={`notification notification-${notification.type}`}>
          {notification.message}
        </div>
      )}

      <div className="adminreports-header">
        <div className="header-content">
          <h1 className="adminreports-title">
            <span className="title-icon">📋</span>
            Video Reports Management
          </h1>
          <p className="adminreports-subtitle">Manage and review reported video content</p>
        </div>
        <div className="stats-cards">
          <div className="stat-card">
            <div className="stat-number">{reports.length}</div>
            <div className="stat-label">Total Reports</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{reports.filter((r) => r.status === 'pending').length}</div>
            <div className="stat-label">Pending</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{reports.filter((r) => r.status === 'resolved').length}</div>
            <div className="stat-label">Resolved</div>
          </div>
        </div>
      </div>

      <div className="adminreports-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name, email, or reason..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
        <div className="filter-container">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="reviewed">Reviewed</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
      </div>

      {filteredReports.length === 0 ? (
        <div className="no-reports">
          <div className="no-reports-icon">📄</div>
          <h3>No reports found</h3>
          <p>No reports match your current filters.</p>
        </div>
      ) : (
        <div className="table-container">
          <table className="adminreports-table">
            <thead>
              <tr>
                <th>Student Info</th>
                <th>Video Details</th>
                <th>Report Info</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredReports.map((report, index) => (
                <tr key={report._id} className="table-row" style={{ animationDelay: `${index * 0.1}s` }}>
                  <td className="student-info">
                    <div className="student-avatar">{report.studentId?.name?.charAt(0) || 'N'}</div>
                    <div className="student-details">
                      <div className="student-name">{report.studentId?.name || 'N/A'}</div>
                      <div className="student-email">{report.studentId?.email || 'N/A'}</div>
                    </div>
                  </td>
                  <td className="video-info">
                    <div className="course-name">{report.courseId?.title || 'No course info'}</div>
                   
                  </td>
                  <td className="report-details">
                    <div className="reason-badge">{report.reason}</div>
                    <div className="description">{report.description || 'No description provided'}</div>
                  </td>
                  <td>
                    <span className={`status-badge ${getStatusColor(report.status || 'pending')}`}>
                      {report.status || 'pending'}
                    </span>
                  </td>
                  <td className="date-cell">
                    {new Date(report.createdAt).toLocaleDateString()}
                    <div className="time-info">
                      {new Date(report.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </td>
                  <td className="actions-cell">
                    <div className="actions-container">
                      <select
                        value={report.status || 'pending'}
                        onChange={(e) => handleChangeStatus(report._id, e.target.value)}
                        className="status-select"
                      >
                        <option value="pending">Pending</option>
                        <option value="reviewed">Reviewed</option>
                        <option value="resolved">Resolved</option>
                      </select>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(report._id)}
                        title="Delete Report"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminVideoReports;
