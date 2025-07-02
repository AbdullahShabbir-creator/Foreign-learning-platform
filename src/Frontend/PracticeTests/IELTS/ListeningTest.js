import React, { useState, useEffect } from "react";
import "../../../App.css";
import "../../../index.css";
import { useNavigate } from 'react-router-dom';
import { runPrompt } from "../../../AI/Model";
import { IELTS_LISTENING_EVAL_PROMPT } from "../../../AI/ResultPrompt";
import axios from "axios";
import { useAuth } from "../../../contexts/AuthContext";

const IELTSListeningTest = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [audioData, setAudioData] = useState(null);
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const loadData = async () => {
      if (!user || !user.id) return;

      try {
        const res = await axios.get(`http://localhost:5000/api/listening-progress/${user.id}?language=ilerts`);
        const index = res.data.testIndex;
        setCurrentIndex(index);

        const jsonRes = await axios.get('/data/listening/ilerts.json');
        setAudioData(jsonRes.data[index]);
      } catch (err) {
        console.error("Error loading test data:", err);
        alert("Error loading test.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [user]);

  const handleAnswer = (questionIndex, value) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: value }));
  };

  const handleStart = () => {
    setHasStarted(true);
  };

  const handleSubmit = async () => {
    if (!audioData || !user || !user.id) return;

    if (!Object.keys(answers).length) {
      alert("Please answer at least one question.");
      return;
    }

    const submission = [{
      title: audioData.text,
      questions: audioData.questions.map((q, idx) => ({
        question: q.question,
        userAnswer: answers[idx] || ""
      }))
    }];

    try {
      const prompt = IELTS_LISTENING_EVAL_PROMPT({ submissions: submission });
      const aiResponse = await runPrompt(prompt);
const details = aiResponse.results?.[0]?.details || [];
 // safely extract details

      await axios.post("http://localhost:5000/api/results", {
        test: "ielts",
        type: "listening",
        userId: user.id,
        results: aiResponse.results,
        total_score: aiResponse.results.reduce((sum, r) => sum + r.score, 0),
        details: audioData.text // optional context
      });
console.log(aiResponse)
      navigate('/results/ielts-listening', {
        state: {
          aiResults: aiResponse.results,
          userScore: aiResponse.results.reduce((sum, r) => sum + r.score, 0),
          details:details
        }
      });
    } catch (err) {
      console.error("Evaluation error:", err);
      alert("Error during evaluation. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="container text-center" style={{ marginTop: "150px" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading listening test...</p>
      </div>
    );
  }

  if (!audioData) return <p className="text-danger text-center mt-5">Test data not found.</p>;

  return (
    <div className="out">
      <div className="practice-test-container">
        {!hasStarted ? (
          <div className="test-intro animate-fade-in container py-5" style={{ maxWidth: "800px", marginTop: "80px" }}>
            <div className="content-wrapper p-4">
              <h1 className="heading-underline text-center mb-4">IELTS Listening Practice Test</h1>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    <i className="bi bi-info-circle me-2 text-primary"></i>Test Information
                  </h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Duration:</strong> 60 minutes</li>
                    <li className="list-group-item"><strong>Audio:</strong> One-time playback</li>
                    <li className="list-group-item"><strong>Questions:</strong> 7 total</li>
                  </ul>
                </div>
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-4">
                <button className="btn btn-primary btn-lg" onClick={handleStart}>
                  <i className="bi bi-play-circle me-2"></i>Start Test
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="test-content container py-4 animate-fade-in" style={{ maxWidth: "900px", marginTop: "80px" }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="heading-underline m-0">Audio {currentIndex + 1}</h2>
              <div className="timer bg-primary text-white px-4 py-2 rounded-pill">
                <i className="bi bi-clock me-2"></i> {formatTime(timeLeft)}
              </div>
            </div>

            <div className="mb-4">
              <audio controls>
                <source src={`http://localhost:3000${audioData.audio}`} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>

            {audioData.questions.map((q, idx) => (
              <div key={idx} className="mb-4">
                <h5>Question {idx + 1}</h5>
                <p>{q.question}</p>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your answer"
                  value={answers[idx] || ""}
                  onChange={(e) => handleAnswer(idx, e.target.value)}
                />
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

export default IELTSListeningTest;
