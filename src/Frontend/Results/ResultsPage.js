import { useParams, useLocation, useNavigate } from 'react-router-dom';
import './ResultsPage.css';

const ResultsPage = () => {
  const { testType } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const { aiResults = [], userScore = 0, details = [] } = location.state || {};
console.log(aiResults,userScore)
  const averageScore = aiResults.length > 0
    ? (userScore / aiResults.length).toFixed(1)
    : '0.0';

  const testNameMap = {
    reading: 'IELTS Reading Test',
    listening: 'IELTS Listening Test',
    writing: 'IELTS Writing Test',
    chinese: 'Chinese Listening Test',
    german: 'German Listening Test',
  };

  const displayName = testNameMap[testType] || 'Test Results';

  const isListening = testType === 'ielts-listening' || testType === 'chinese-listening' || testType === 'german-listening';

  return (
    <div className="out">
      <div className="container" style={{ marginTop: '30px' }}>
        <h2 className="mb-4" style={{ color: '#667eea' }}>{displayName} </h2>

      <div className="card p-4 mb-4" style={{ maxWidth: '500px' }}>
  <p><strong>Total Score:</strong> {userScore} / {aiResults.length * 10}</p>
  <p><strong>Tasks Completed:</strong> {aiResults.length || details.length}</p>
</div>


        {isListening && details.length > 0 && (
          <div className="mb-4">
            <h4 className="mb-3">📝 Answer Breakdown</h4>
            {details.map((item, idx) => (
              <div key={idx} className="card mb-3 p-3 shadow-sm" style={{ borderRadius: 12 }}>
                <p><strong>Q{idx + 1}:</strong> {item.question}</p>
                <p><strong>Your Answer:</strong> {item.answer || "—"}</p>
                <p><strong>Correct:</strong> {item.correctness ? "✔️ Yes" : "❌ No"}</p>
                <p><strong>Feedback:</strong> {item.comment}</p>
              </div>
            ))}
          </div>
        )}

        {!isListening && aiResults.length > 0 && (
          <div className="mb-4">
            {aiResults.map((result, idx) => (
              <div className="card mb-3 shadow-sm" key={idx} style={{ borderRadius: 16 }}>
                <div className="card-body">
                  <h5 className="card-title">Task {idx + 1}: {result.title}</h5>
                  <p><strong>Score:</strong> {result.score} / 10</p>
                  <p><strong>Feedback:</strong><br />{result.feedback}</p>
                  <p><strong>Remark:</strong> <em>{result.remark}</em></p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
