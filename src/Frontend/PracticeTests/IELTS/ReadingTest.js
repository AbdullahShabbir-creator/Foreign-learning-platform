import React, { useState, useEffect } from "react";
import "../../../App.css";
import "../../../index.css";
import { useNavigate } from 'react-router-dom';
import { runPrompt } from "../../../AI/Model";
import { IELTS_READING_PROMPT } from "../../../AI/Prompt";

const IELTSReadingTest = () => {
  const [readingData, setReadingData] = useState(null); // Holds generated passage + questions
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes
  const [hasStarted, setHasStarted] = useState(false);
  const navigate = useNavigate();

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

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleStart = async () => {
    setHasStarted(true);
   /* try {
      const data = await runPrompt(IELTS_READING_PROMPT);
      console.log("Generated data:", data);
      setReadingData(data);
    } catch (err) {
      console.error(err);
      alert("Error generating test");
    }*/
  };

  const handleSubmit = () => {
    if (!readingData) return;
    if (!Object.keys(answers).length) {
      alert("Please answer at least one question.");
      return;
    }

    let correct = 0;
    let total = readingData.questions.length;

    readingData.questions.forEach((q) => {
      const ans = answers[q.id];
      if (q.type === "multiple-choice" && q.options[ans]?.correct) correct++;
      if (q.type === "fill-in" && ans?.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase()) correct++;
    });

    navigate('/results/reading', { state: { score: correct, total } });
  };

  return (
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
                  <li className="list-group-item"><strong>Questions:</strong> 4</li>
                  <li className="list-group-item"><strong>Question Types:</strong> Multiple choice, fill in the blanks</li>
                </ul>
              </div>
            </div>
            <button className="btn btn-primary btn-lg" onClick={handleStart}>
              <i className="bi bi-book me-2"></i>Start Test
            </button>
          </div>
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
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h5 className="card-title m-0">Passage</h5>
            </div>
            <div className="card-body">
              <p className="card-text">{readingData.passage}</p>
            </div>
          </div>

          <div className="questions-container">
            {readingData.questions.map((q) => (
              <div key={q.id} className="question-card mb-4">
                <h4>Question {q.id}</h4>
                <p>{q.question}</p>
                {q.type === "multiple-choice" ? (
                  q.options.map((opt, idx) => (
                    <div key={idx} className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name={`q${q.id}`}
                        id={`q${q.id}_${idx}`}
                        value={idx}
                        checked={answers[q.id] === idx}
                        onChange={() => handleAnswer(q.id, idx)}
                      />
                      <label className="form-check-label" htmlFor={`q${q.id}_${idx}`}>
                        {opt.text}
                      </label>
                    </div>
                  ))
                ) : (
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your answer"
                    onChange={(e) => handleAnswer(q.id, e.target.value)}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-end mt-4">
            <button className="btn btn-success" onClick={handleSubmit}>
              Submit Test <i className="bi bi-check-circle ms-2"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IELTSReadingTest;
