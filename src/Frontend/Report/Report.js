import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';  // Adjust the path if needed
import './ReportVideo.css';

const ReportVideo = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();  // Get user info

  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!reason) {
      alert('Please select a reason for reporting.');
      return;
    }

    if (!user || !user.id) {
      alert('User not authenticated.');
      return;
    }

    if (!state?.videoPath || !state?.courseId) {
      alert('Missing video path or course ID.');
      return;
    }

    const reportData = {
      studentId: user.id,                // User submitting the report
      videoPath: state.videoPath,        // Video path
      courseId: state.courseId,          // Course ID associated with video
      reason,
      description
    };

    try {
      const res = await fetch('http://localhost:5000/api/video-reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reportData)
      });

      const data = await res.json();
      if (res.ok) {
        alert('Report submitted successfully.');
        navigate('/');  // Redirect to home or desired page
      } else {
        alert(data.message || 'Error submitting report.');
      }
    } catch (err) {
      console.error('Submit error:', err);
      alert('Server error.');
    }
  };

  return (
    <div className='out'>
    <div className="reportvideo-container">
      <h2 className="reportvideo-title">Report Video</h2>

      {state?.videoPath ? (
        <p className="reportvideo-path"><strong>Give Your Opinion on:</strong> This Course</p>
      ) : (
        <p className="reportvideo-path error">No video  provided.</p>
      )}

      {!state.courseId &&(
        <p className="reportvideo-path error">No course  provided.</p>

      ) }
      

      <form className="reportvideo-form" onSubmit={handleSubmit}>
        <label className="reportvideo-label">
          Reason:
          <select
            value={reason}
            onChange={e => setReason(e.target.value)}
            className="reportvideo-select"
            required
          >
            <option value="">--Select Reason--</option>
            <option value="Inappropriate content">Inappropriate content</option>
            <option value="Poor quality">Poor quality</option>
            <option value="Incorrect information">Incorrect information</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label className="reportvideo-label">
          Description (optional):
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="reportvideo-textarea"
            placeholder="Provide more details if needed..."
          />
        </label>

        <button type="submit" className="reportvideo-button">Submit Report</button>
      </form>
    </div>
    </div>
  );
};

export default ReportVideo;
