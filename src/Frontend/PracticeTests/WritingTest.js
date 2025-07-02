import React, { useState, useEffect } from "react";
import "../styles/main.css";
import "../styles/animations.css";
import { useNavigate } from "react-router-dom";
import { runPrompt } from "../../AI/Model";
import { IELTS_WRITING_PROMPT } from "../../AI/Prompt";
import { IELTS_WRITING_EVAL_PROMPT } from "../../AI/ResultPrompt";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";

const WritingTest = () => {
  const [currentTask, setCurrentTask] = useState(0);
  const [essays, setEssays] = useState({});
  const [wordCounts, setWordCounts] = useState({});
  const [writingTasks, setWritingTasks] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes
  const [hasStarted, setHasStarted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();
  const { user } = useAuth();

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

  const calculateWordCount = (text) =>
    text.trim() ? text.trim().split(/\s+/).length : 0;

  const handleEssayChange = (e) => {
    const updated = e.target.value;
    setEssays({ ...essays, [currentTask]: updated });
    setWordCounts({
      ...wordCounts,
      [currentTask]: calculateWordCount(updated),
    });
  };

  const handleStart = async () => {
    setHasStarted(true);
    try {
      const data = await runPrompt(IELTS_WRITING_PROMPT);
      setWritingTasks(data.tasks);

      const initialEssays = {};
      const initialWordCounts = {};
      data.tasks.forEach((_, idx) => {
        initialEssays[idx] = "";
        initialWordCounts[idx] = 0;
      });
      setEssays(initialEssays);
      setWordCounts(initialWordCounts);
    } catch (err) {
      console.error("❌ Error generating prompts:", err);
      alert("Failed to generate writing tasks.");
      setHasStarted(false);
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);

    const submission = writingTasks.map((task, idx) => ({
      title: task.title,
      description: task.description,
      userAnswer: essays[idx] || "",
    }));

    try {
      const promptText = IELTS_WRITING_EVAL_PROMPT({ submissions: submission });
      const evalResponse = await runPrompt(promptText);
      console.log("✅ AI Evaluation:", evalResponse);

      const totalScore = evalResponse.results.reduce((sum, r) => sum + r.score, 0);

      // Store in DB
      await axios.post("http://localhost:5000/api/results", {
        userId: user.id,
        test: "ielts",
        type: "writing",
        total_score: totalScore,
        results: evalResponse.results,
      });

      navigate("/results/writing", {
        state: {
          aiResults: evalResponse.results,
          userScore: totalScore,
        },
      });
    } catch (err) {
      console.error("❌ Submission Error:", err);
      alert("Evaluation or saving failed. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const getWordCountColor = (taskIndex) => {
    const minCount = writingTasks[taskIndex]?.wordCount || 0;
    return wordCounts[taskIndex] >= minCount ? "text-success" : "text-danger";
  };

  const nextTask = () => {
    if (currentTask < writingTasks.length - 1) setCurrentTask(currentTask + 1);
  };

  const prevTask = () => {
    if (currentTask > 0) setCurrentTask(currentTask - 1);
  };

  return (
    <div className="out">
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
                    <li className="list-group-item"><strong>Duration:</strong> 60 minutes</li>
                    <li className="list-group-item"><strong>Tasks:</strong> 2 writing tasks</li>
                    <li className="list-group-item"><strong>Important:</strong> Task 2 carries more weight</li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-primary btn-lg" onClick={handleStart}>
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
              <div className="alert alert-info mb-3">
                <strong>{writingTasks[currentTask].instruction}</strong>
              </div>
              <p className="mb-3" style={{ whiteSpace: "pre-line" }}>{writingTasks[currentTask].description}</p>

              {writingTasks[currentTask].imageUrl && (
                <div className="text-center my-4">
                  <img src={writingTasks[currentTask].imageUrl} alt="Task visual" className="img-fluid rounded" />
                </div>
              )}

              <div className="form-group mb-3">
                <label className="form-label fw-bold">Your Answer:</label>
                <textarea
                  className="form-control"
                  rows="10"
                  value={essays[currentTask]}
                  onChange={handleEssayChange}
                ></textarea>
              </div>

              <div className={`word-count ${getWordCountColor(currentTask)}`}>
                <i className="bi bi-hash me-1"></i>
                Word Count: <strong>{wordCounts[currentTask]}</strong> / {writingTasks[currentTask].wordCount}
              </div>
            </div>

            <div className="d-flex justify-content-between mt-4">
              <button className="btn btn-outline-primary" onClick={prevTask} disabled={currentTask === 0}>
                <i className="bi bi-arrow-left me-2"></i> Previous
              </button>

              {currentTask < writingTasks.length - 1 ? (
                <button className="btn btn-primary" onClick={nextTask}>
                  Next <i className="bi bi-arrow-right ms-2"></i>
                </button>
              ) : (
                <button className="btn btn-success" onClick={handleSubmit} disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit Test"} <i className="bi bi-check-circle ms-2"></i>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WritingTest;
