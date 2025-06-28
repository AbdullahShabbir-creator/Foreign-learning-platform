import React, { useState, useEffect } from "react";
import "../styles/main.css";
import "../styles/animations.css";
import { useNavigate } from "react-router-dom";
import { runPrompt } from "../../AI/Model";
import { IELTS_WRITING_PROMPT } from "../../AI/Prompt";

const WritingTest = () => {
  const [currentTask, setCurrentTask] = useState(0);
  const [essays, setEssays] = useState({});
  const [wordCounts, setWordCounts] = useState({});
  const [writingTasks, setWritingTasks] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
  const [hasStarted, setHasStarted] = useState(false);
  const navigate = useNavigate();

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    let timer;
    if (hasStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      alert("Time's up! Your answers have been submitted.");
      handleSubmit();
    }

    return () => clearInterval(timer);
  }, [hasStarted, timeLeft]);

  const calculateWordCount = (text) => {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  };

  const handleEssayChange = (e) => {
    const newEssay = e.target.value;
    setEssays({ ...essays, [currentTask]: newEssay });
    setWordCounts({
      ...wordCounts,
      [currentTask]: calculateWordCount(newEssay),
    });
  };

  const handleStart = async () => {
    setHasStarted(true);
    /*try {
      const data = await runPrompt(IELTS_WRITING_PROMPT);
      console.log(data)
      setWritingTasks(data.tasks);

      const initialEssays = {};
      const initialWordCounts = {};
      data.tasks.forEach((_, index) => {
        initialEssays[index] = "";
        initialWordCounts[index] = 0;
      });
      setEssays(initialEssays);
      setWordCounts(initialWordCounts);
    } catch (err) {
      console.error("Error generating writing tasks:", err);
      alert("Failed to generate writing tasks. Please try again.");
      setHasStarted(false);
    }*/
  };

  const nextTask = () => {
    if (currentTask < writingTasks.length - 1) {
      setCurrentTask(currentTask + 1);
    }
  };

  const prevTask = () => {
    if (currentTask > 0) {
      setCurrentTask(currentTask - 1);
    }
  };

  const handleSubmit = () => {
    const scores = writingTasks.map((task, index) =>
      Math.min(wordCounts[index] / task.wordCount, 1)
    );
    const percentage = (scores.reduce((a, b) => a + b, 0) / scores.length) * 100;
    navigate("/results/writing", {
      state: { score: percentage.toFixed(2), total: 100 },
    });
  };

  const getWordCountColor = (taskIndex) => {
    const minCount = writingTasks[taskIndex]?.wordCount || 0;
    return wordCounts[taskIndex] >= minCount ? "text-success" : "text-danger";
  };

  return (
    <div className="practice-test-container">
      {!hasStarted ? (
        <div className="test-intro animate-fade-in container py-5" style={{ maxWidth: "800px", marginTop: "80px" }}>
          <div className="content-wrapper p-4">
            <h1 className="heading-underline text-center mb-4">IELTS Writing Practice Test</h1>

            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  <i className="bi bi-info-circle me-2 text-primary"></i>Test Information
                </h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-clock me-3 text-primary"></i>
                    <div><strong>Duration:</strong> 60 minutes</div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-list-ol me-3 text-primary"></i>
                    <div><strong>Tasks:</strong> 2 writing tasks</div>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-exclamation-triangle me-3 text-warning"></i>
                    <div><strong>Important:</strong> Task 2 contributes more to your final score than Task 1</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-4">
              <button
                className="btn btn-primary btn-lg"
                onClick={handleStart}
                style={{
                  borderRadius: "var(--border-radius-full)",
                  padding: "12px 40px",
                  transition: "all 0.3s ease",
                }}
              >
                <i className="bi bi-play-fill me-2"></i> Start Practice Test
              </button>
            </div>
          </div>
        </div>
      ) : writingTasks.length === 0 ? (
        <div className="text-center mt-5">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-3">Generating your writing tasks, please wait...</p>
        </div>
      ) : (
        <div className="test-content container py-4 animate-fade-in" style={{ maxWidth: "900px", marginTop: "80px" }}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="heading-underline m-0">{writingTasks[currentTask].title}</h2>
            <div className="timer bg-primary text-white px-4 py-2 rounded-pill">
              <i className="bi bi-clock me-2"></i> {formatTime(timeLeft)}
            </div>
          </div>

          <div className="content-wrapper stagger-item stagger-item-visible">
            <div className="alert alert-info">
              <p className="mb-0"><strong>{writingTasks[currentTask].instruction}</strong></p>
            </div>

            <div className="task-description mb-4">
              <p style={{ whiteSpace: "pre-line" }}>{writingTasks[currentTask].description}</p>

              {writingTasks[currentTask].imageUrl && (
                <div className="text-center my-4">
                  <img
                    src={writingTasks[currentTask].imageUrl}
                    alt="Task visual"
                    className="img-fluid border rounded shadow-sm"
                    style={{ maxHeight: "300px" }}
                  />
                </div>
              )}

              <div className="d-flex justify-content-between align-items-center">
                <p className="text-muted mb-0">
                  <i className="bi bi-pencil me-2"></i>
                  Write at least {writingTasks[currentTask].wordCount} words
                </p>
                <p className="text-muted mb-0">
                  <i className="bi bi-clock me-2"></i>
                  Recommended time: {writingTasks[currentTask].timeRecommended} minutes
                </p>
              </div>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="essayText" className="form-label fw-bold">Your Answer:</label>
              <textarea
                id="essayText"
                className="form-control"
                rows="12"
                placeholder="Start writing your answer here..."
                value={essays[currentTask]}
                onChange={handleEssayChange}
                style={{ fontSize: "16px", lineHeight: "1.6" }}
              ></textarea>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <div className={`word-count ${getWordCountColor(currentTask)}`}>
                <i className="bi bi-hash me-1"></i>
                Word Count: <strong>{wordCounts[currentTask]}</strong> / {writingTasks[currentTask].wordCount} minimum
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between mt-4">
            <button
              className="btn btn-outline-primary"
              onClick={prevTask}
              disabled={currentTask === 0}
            >
              <i className="bi bi-arrow-left me-2"></i> Previous Task
            </button>

            {currentTask < writingTasks.length - 1 ? (
              <button className="btn btn-primary" onClick={nextTask}>
                Next Task <i className="bi bi-arrow-right ms-2"></i>
              </button>
            ) : (
              <button className="btn btn-success" onClick={handleSubmit}>
                Submit Test <i className="bi bi-check-circle ms-2"></i>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WritingTest;
