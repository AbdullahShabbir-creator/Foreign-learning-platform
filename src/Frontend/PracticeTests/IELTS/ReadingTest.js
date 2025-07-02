import React, { useState, useEffect } from "react";
import "../../../App.css";
import "../../../index.css";
import { useNavigate } from 'react-router-dom';
import { runPrompt } from "../../../AI/Model";
import { IELTS_READING_PROMPT } from "../../../AI/Prompt";
import { IELTS_READING_EVAL_PROMPT  } from "../../../AI/ResultPrompt";
import axios from "axios";
import { useAuth } from "../../../contexts/AuthContext";

const IELTSReadingTest = () => {
  const [readingData, setReadingData] = useState(null);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [hasStarted, setHasStarted] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { user } = useAuth();

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    let timer;
    if (hasStarted && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      alert("Time's up! Submitting your test.");
      handleSubmit();
    }
    return () => clearInterval(timer);
  }, [hasStarted, timeLeft]);

  const handleAnswer = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleStart = async () => {
    if (!user || !user.id) {
      alert("Please log in before starting the test.");
      return;
    }

    setHasStarted(true);
    setLoading(true);
    try {
      const data = await runPrompt(IELTS_READING_PROMPT);
      setReadingData(data);
    } catch (err) {
      console.error(err);
      alert("Error generating test");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!readingData) return;
    if (!Object.keys(answers).length) {
      alert("Please answer at least one question.");
      return;
    }

    const submission = readingData.passages.map((passage, pIdx) => ({
      title: `IELTS Reading Passage ${pIdx + 1}`,
      questions: passage.questions.map((q, qIdx) => ({
        question: q.q,
        userAnswer: answers[`p${pIdx}_q${qIdx}`] || ""
      }))
    }));

    try {
      const evalPrompt = IELTS_READING_EVAL_PROMPT({ submissions: submission });
      const evalResponse = await runPrompt(evalPrompt);
      const aiResults = evalResponse.results;

      await axios.post("http://localhost:5000/api/results", {
        test: "ielts",
        userId: user.id,
        type: "reading",
        results: aiResults,
        total_score: aiResults.reduce((sum, r) => sum + r.score, 0),
      });

      navigate('/results/ielts-reading', {
        state: {
          aiResults,
          userScore: aiResults.reduce((sum, r) => sum + r.score, 0),
        },
      });
    } catch (err) {
      console.error("Evaluation error:", err);
      alert("There was an error during evaluation. Please try again.");
    }
  };

  return (
    <div className="out">
      <div className="practice-test-container">
        {!hasStarted ? (
          <div className="test-intro animate-fade-in container py-5" style={{ maxWidth: "800px", marginTop: "80px" }}>
            <div className="content-wrapper p-4">
              <h1 className="heading-underline text-center mb-4">IELTS Reading Practice Test</h1>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    <i className="bi bi-info-circle me-2 text-primary"></i>Test Information
                  </h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Duration:</strong> 60 minutes</li>
                    <li className="list-group-item"><strong>Questions:</strong> 6</li>
                    <li className="list-group-item"><strong>Question Types:</strong> Open-ended comprehension</li>
                  </ul>
                </div>
              </div>
              <button className="btn btn-primary btn-lg" onClick={handleStart}>
                <i className="bi bi-book me-2"></i>Start Test
              </button>
            </div>
          </div>
        ) : loading ? (
          <div className="container py-5 text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Generating test...</p>
          </div>
        ) : !readingData ? (
          <div className="container py-5">
            <p>Loading test data...</p>
          </div>
        ) : (
          <div className="test-content container py-4 animate-fade-in" style={{ maxWidth: "900px", marginTop: "80px" }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="heading-underline m-0">Reading Section</h2>
              <div className="timer bg-primary text-white px-4 py-2 rounded-pill">
                <i className="bi bi-clock me-2"></i> {formatTime(timeLeft)}
              </div>
            </div>

            {readingData.passages.map((passage, pIdx) => (
              <div className="card mb-4" key={`passage-${pIdx}`}>
                <div className="card-header bg-light">
                  <h5 className="card-title m-0">Passage {pIdx + 1}</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">{passage.text}</p>

                  {passage.questions.map((q, qIdx) => (
                    <div className="question-card mt-4" key={`q-${pIdx}-${qIdx}`}> 
                      <p><strong>Q{qIdx + 1}:</strong> {q.q}</p>
                      <input
                        type="text"
                        className="form-control"
                        placeholder={q.placeholder}
                        value={answers[`p${pIdx}_q${qIdx}`] || ""}
                        onChange={(e) => handleAnswer(`p${pIdx}_q${qIdx}`, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="d-flex justify-content-end mt-4">
              <button className="btn btn-success" onClick={handleSubmit}>
                Submit Test <i className="bi bi-check-circle ms-2"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IELTSReadingTest;