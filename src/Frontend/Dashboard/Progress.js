import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const Progress = () => {
  const progressData = {
    courses: [
      {
        id: 1,
        title: "IELTS Preparation",
        progress: 75,
        status: "In Progress",
        lastActivity: "2 days ago",
        totalLessons: 30,
        completedLessons: 22
      },
      {
        id: 2,
        title: "German Level A1",
        progress: 45,
        status: "In Progress",
        lastActivity: "1 week ago",
        totalLessons: 20,
        completedLessons: 9
      },
      {
        id: 3,
        title: "Chinese Basics",
        progress: 100,
        status: "Completed",
        lastActivity: "3 days ago",
        totalLessons: 15,
        completedLessons: 15
      }
    ],
    practiceTests: [
      {
        id: 1,
        type: "IELTS",
        lastTaken: "2025-04-10",
        score: 7.5,
        status: "Completed"
      },
      {
        id: 2,
        type: "German",
        lastTaken: "2025-04-12",
        score: 82,
        status: "Completed"
      }
    ]
  };

  return (
    <div className="progress-container">
      <div className="container py-4">
        <h2 className="mb-4">Learning Progress</h2>

        {/* Course Progress Section */}
        <div className="card mb-4">
          <div className="card-header bg-light">
            <h5 className="m-0">Course Progress</h5>
          </div>
          <div className="card-body">
            {progressData.courses.map((course) => (
              <div key={course.id} className="progress-item mb-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="mb-0">{course.title}</h6>
                  <span className={`badge bg-${course.status === "Completed" ? "success" : "warning"}`}>
                    {course.status}
                  </span>
                </div>
                <div className="progress mb-2">
                  <div 
                    className="progress-bar" 
                    role="progressbar" 
                    style={{ width: `${course.progress}%` }}
                    aria-valuenow={course.progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {course.progress}%
                  </div>
                </div>
                <div className="d-flex justify-content-between text-muted small">
                  <span>Last Activity: {course.lastActivity}</span>
                  <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practice Test Progress Section */}
        <div className="card mb-4">
          <div className="card-header bg-light">
            <h5 className="m-0">Practice Test Progress</h5>
          </div>
          <div className="card-body">
            {progressData.practiceTests.map((test) => (
              <div key={test.id} className="test-progress-item mb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-1">{test.type} Practice Test</h6>
                    <small className="text-muted">Last taken: {test.lastTaken}</small>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <span className="badge bg-success">{test.score}</span>
                    </div>
                    <span className="badge bg-success">{test.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <div className="card-header bg-light">
            <h5 className="m-0">Quick Actions</h5>
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-6">
                <Link to="/practice-tests" className="btn btn-primary w-100">
                  <i className="bi bi-play-circle me-2"></i>Start Practice Test
                </Link>
              </div>
              <div className="col-6">
                <Link to="/courses" className="btn btn-secondary w-100">
                  <i className="bi bi-book me-2"></i>Continue Learning
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
