import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const Progress = () => {
  // Dynamic practice test progress
  const [practiceTests, setPracticeTests] = useState([]);
  useEffect(() => {
    const tests = [
      { key: 'reading', label: 'IELTS Reading Test' },
      { key: 'listening', label: 'IELTS Listening Test' },
      { key: 'writing', label: 'IELTS Writing Test' }
    ];
    const loaded = tests
      .map(t => JSON.parse(localStorage.getItem(`user_progress_${t.key}`) || 'null'))
      .filter(Boolean)
      .map((data, i) => ({ id: tests[i].key, type: tests[i].label, lastTaken: new Date().toLocaleDateString(), score: data.score, total: data.total, status: 'Completed' }));
    console.log('Loaded practiceTests:', loaded);
    setPracticeTests(loaded);
  }, []);

  console.log('practiceTests state:', practiceTests);
  return (
    <div className="progress-container">
      <div className="container py-4 d-flex flex-column align-items-center" style={{ marginTop: '8rem' }}>
        <h2 className="mb-4">Learning Progress</h2>

        {/* Practice Test Progress Section */}
        <div className="card w-75 mx-auto mb-4">
          <div className="card-header bg-light">
            <h5 className="m-0">Practice Test Progress</h5>
          </div>
          <div className="card-body">
            {practiceTests.length > 0 ? practiceTests.map(test => (
              <div key={test.id} className="test-progress-item mb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-1">{test.type}</h6>
                    <small className="text-muted">Last taken: {test.lastTaken}</small>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="me-2"><span className="badge bg-success">{test.score}</span></div>
                    <span className="badge bg-success">{test.status}</span>
                  </div>
                </div>
              </div>
            )) : (
              <p className="text-muted">No practice tests taken yet.</p>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card w-75 mx-auto">
          <div className="card-header bg-light">
            <h5 className="m-0">Quick Actions</h5>
          </div>
          <div className="card-body">
            <div className="row g-3 justify-content-center">
              <div className="col-4"><Link to="/practice-tests" className="btn btn-primary w-100"><i className="bi bi-play-circle me-2"></i>Start Practice Test</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
