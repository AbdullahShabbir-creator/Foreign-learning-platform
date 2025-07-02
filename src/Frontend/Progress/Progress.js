import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import {AI_REVIEW_PROMPT} from "../../AI/Review"; // <-- your prompt
import { runPrompt } from "../../AI/Model"; // <-- your Gemini setup
import './Progress.css';

const ProgressPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviewText, setReviewText] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("ielts");

  useEffect(() => {
    if (!user || !user.id) return;

    const fetchResults = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/results/user/${user.id}`);
        setResults(res.data);
      } catch (err) {
        console.error("Failed to fetch results:", err);
        alert("Error loading your progress data.");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [user]);

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString();
  };

  const handleView = (result) => {
    const path = `/results/${result.test}-${result.type}`;
    const isListening = result.type === "listening";

    navigate(path, {
      state: {
        aiResults: result.results,
        userScore: result.total_score,
        details: isListening ? result.results[0]?.details || [] : []
      },
    });
  };

  const getTotalScore = (type) => {
    const filtered = results.filter(r => r.type === type);
    return filtered.reduce((sum, r) => sum + (r.total_score || 0), 0);
  };

  const getTotalPossible = (type) => {
    const filtered = results.filter(r => r.type === type);
    return filtered.reduce((sum, r) => sum + r.results.reduce((s, x) => s + (x.total_score || 10), 0), 0);
  };

const handleAIReview = async () => {
  const scoreReading = getTotalScore("reading");
  const scoreWriting = getTotalScore("writing");
  const scoreListening = getTotalScore("listening");

  const possibleReading = getTotalPossible("reading");
  const possibleWriting = getTotalPossible("writing");
  const possibleListening = getTotalPossible("listening");

  const reading = possibleReading ? Math.round((scoreReading / possibleReading) * 100) : 0;
  const writing = possibleWriting ? Math.round((scoreWriting / possibleWriting) * 100) : 0;
  const listening = possibleListening ? Math.round((scoreListening / possibleListening) * 100) : 0;

  const prompt = AI_REVIEW_PROMPT({ listening, reading, writing });

  try {
    const aiResponse = await runPrompt(prompt, false);
    setReviewText(aiResponse);
  } catch (err) {
    console.error("AI Review Error:", err);
    alert("Failed to generate AI review.");
  }
};


  const renderTable = (testType, taskType) => {
    const filtered = results.filter(
      (r) => r.test === testType && r.type === taskType
    );

    if (filtered.length === 0) return <p className="text-muted">No {taskType} results yet.</p>;

    return (
      <div className="table-responsive">
        <table className="table table-hover align-middle mb-4">
          <thead className="table-light">
            <tr>
              <th>Test</th>
              <th>Type</th>
              <th>Score</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((result, idx) => (
              <tr key={idx}>
                <td className="fw-semibold text-capitalize">{result.test}</td>
                <td className="text-capitalize">{result.type}</td>
                <td>
                  {result.total_score} /{" "}
                  {result.results.reduce((sum, r) => sum + (r.total_score || 10), 0)}
                </td>
                <td>{formatDate(result.createdAt)}</td>
                <td>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => handleView(result)}
                  >
                    View Result
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="out">
      <div
        className="container animate-fade-in"
        style={{ maxWidth: "1000px", marginTop: "100px", marginBottom: "40px" }}
      >
        <h1 className="fw-bold mb-4" style={{ fontFamily: "Poppins", fontSize: "2.2rem" }}>
          Your Progress
        </h1>
        <p className="lead mb-4 text-muted">Browse your test results by test type and skill.</p>

        <div className="text-end mb-4">
          <button className="btn btn-success" onClick={handleAIReview}>
            🧠 Get AI Review
          </button>
        </div>

        {reviewText && (
          <div className="alert alert-info shadow-sm rounded-3 p-4">
            <h5 className="mb-3">AI Review:</h5>
            <p style={{ whiteSpace: "pre-line" }}>{reviewText}</p>
          </div>
        )}

        {loading ? (
          <div className="text-center mt-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading your progress...</p>
          </div>
        ) : (
          <>
            {/* Tabs */}
            <ul className="nav nav-tabs mb-4">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "ielts" ? "active" : ""}`}
                  onClick={() => setActiveTab("ielts")}
                >
                  IELTS
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "german" ? "active" : ""}`}
                  onClick={() => setActiveTab("german")}
                >
                  German
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "chinese" ? "active" : ""}`}
                  onClick={() => setActiveTab("chinese")}
                >
                  Chinese
                </button>
              </li>
            </ul>

            {/* Tab content */}
            <div className="tab-content">
              {["ielts", "german", "chinese"].includes(activeTab) && (
                <>
                  <h4 className="text-primary mb-3">Reading Tests</h4>
                  {renderTable(activeTab, "reading")}

                  <h4 className="text-primary mt-5 mb-3">Writing Tests</h4>
                  {renderTable(activeTab, "writing")}

                  <h4 className="text-primary mt-5 mb-3">Listening Tests</h4>
                  {renderTable(activeTab, "listening")}
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProgressPage;
