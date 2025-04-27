import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const ResultsPage = () => {
  const { testType } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };

  const percentage = total ? ((score / total) * 100).toFixed(2) : '0.00';

  const testNameMap = {
    reading: 'IELTS Reading Test',
    listening: 'IELTS Listening Test',
    writing: 'IELTS Writing Test'
  };
  const displayName = testNameMap[testType] || 'Test';

  return (
    <div className="container my-5">
      <h2>{displayName} Results</h2>
      <div className="card p-4 mt-3" style={{ maxWidth: '500px' }}>
        <p><strong>Score:</strong> {score} / {total}</p>
        <p><strong>Percentage:</strong> {percentage}%</p>
        <button className="btn btn-primary mt-3" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;
